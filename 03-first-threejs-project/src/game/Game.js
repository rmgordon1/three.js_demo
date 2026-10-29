import * as THREE from 'three'
import { Input } from './Input.js'
import { HUD } from './HUD.js'
import { Environment } from '../world/Environment.js'
import { Castle, CASTLE, CASTLE_RING, MAIN_YAW } from '../world/Castle.js'
import { HOOP_COUNT, Racetrack } from '../world/Racetrack.js'
import { Confetti } from '../world/Confetti.js'
import { BrickWall } from '../world/BrickWall.js'
import { Elephant, ELEPHANT } from '../entities/Elephant.js'
import { Player } from '../player/Player.js'

const LOOK_SENSITIVITY = 0.0025

/** Close enough to the elephant's flank to climb on. */
const MOUNT_RANGE = ELEPHANT.length * 0.5 + 1.8

const ELEPHANT_CHASE = { distance: 12.5, height: 5.4, lookHeight: 2.5, speedScale: 8 }

/** World offset from amidships. Far enough to hold the whole hull, above and off the bow quarter. */
const SUB_VIEW_OFFSET = new THREE.Vector3(18, 11, 22)
/**
 * Under the cloud deck. The shell along the drop bottoms out near y -44,
 * so this sits below it, off to the side, looking up the column.
 */
const PLUNGE_CAMERA_Y = -50
const PLUNGE_SIDE = new THREE.Vector3(22, 0, 10)

/** How far below the deck a fall has to go before she is put back at the door. */
const VOID_DROP = 40

export class Game
{
    constructor(canvas)
    {
        this.canvas = canvas
        this.clock = new THREE.Clock()
        this.elapsed = 0
        this.state = 'walking'
        this.helmView = false
        /** While riding, W raises the nose and S lowers it. */
        this.invertPitch = false

        this.#setupRenderer()
        this.#setupScene()
        this.#setupWorld()

        this.input = new Input(canvas)
        this.hud = new HUD()
        this.hud.onStart(() =>
        {
            this.hud.setStartHint('')
            this.input.requestLock()
        })
        this.input.onLockError = () =>
        {
            this.hud.setStartHint('The browser blocked mouse lock. Close the console and any open menu, click the page, then press resume.')
        }
        this.input.onLockChange = (locked) => locked ? this.hud.hideStart() : this.hud.showStart()

        this.chaseYaw = 0
        this.chasePitch = 0.1
        this.helmYaw = 0
        this.helmPitch = -0.05
        this.chasePosition = new THREE.Vector3()
        this.chaseTarget = new THREE.Vector3()
        this.chaseInitialised = false
        this.subViewPosition = new THREE.Vector3()
        this.subViewTarget = new THREE.Vector3()
        this.subViewReady = false
        this.plungeReady = false

        this.scratch = new THREE.Vector3()
        this.scratchB = new THREE.Vector3()
        this.focusPoint = new THREE.Vector3()

        window.addEventListener('resize', () => this.#resize())
        this.#resize()
    }

    #setupRenderer()
    {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: 'high-performance'
        })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.renderer.toneMappingExposure = 0.62
    }

    #setupScene()
    {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(66, 2, 0.15, 4000)
        this.camera.rotation.order = 'YXZ'
        this.scene.add(this.camera)

        this.environment = new Environment(this.renderer, this.scene)
    }

    #setupWorld()
    {
        this.castle = new Castle({ variant: 'main', yaw: MAIN_YAW })
        this.scene.add(this.castle.group)

        this.outerCastles = CASTLE_RING.map((placement) =>
        {
            const castle = new Castle(placement)
            this.scene.add(castle.group)
            return castle
        })

        this.racetrack = new Racetrack()
        this.scene.add(this.racetrack.group)

        this.confetti = new Confetti()
        this.scene.add(this.confetti.group)

        const berth = new THREE.Vector3()
        const elephantYaw = this.castle.elephantBerth(berth)
        this.brickWall = new BrickWall()
        this.brickWall.placeInFront(berth, elephantYaw)
        this.scene.add(this.brickWall.group)
        this.elephant = new Elephant(berth, {
            yaw: elephantYaw,
            floor: (x, z, ceiling) => this.#surfaceAt(x, z, ceiling),
            castles: [this.castle, ...this.outerCastles, ...this.racetrack.colliders]
        })
        this.scene.add(this.elephant.group, this.elephant.effects)

        /** Fed to the elephant while the player is on foot, so she still idles. */
        this.idleControls = { throttle: 0, pitch: 0, steer: 0, boost: false }

        const spawnAt = this.castle.localToWorld(CASTLE.spawn.x, CASTLE.spawn.z)
        this.player = new Player({
            platforms: [],
            walls: [],
            castles: [this.castle, ...this.outerCastles],
            terrainHeight: () => Number.NEGATIVE_INFINITY,
            swims: false,
            spawnYaw: this.castle.yaw + CASTLE.spawnYaw,
            voidY: CASTLE.deckY - VOID_DROP
        }, new THREE.Vector3(spawnAt.x, CASTLE.spawn.y, spawnAt.z))
    }

    start()
    {
        this.renderer.setAnimationLoop(() => this.#tick())
    }

    #resize()
    {
        const width = window.innerWidth
        const height = window.innerHeight

        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(width, height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Particle point sizes are in device pixels, so they depend on both.
        const buffer = this.renderer.getDrawingBufferSize(new THREE.Vector2())
        this.elephant.setViewport(buffer.y, this.camera.fov)
        this.castle.setViewport(buffer.y, this.camera.fov)
        this.racetrack.setViewport(buffer.y, this.camera.fov)
    }

    #tick()
    {
        const delta = Math.min(this.clock.getDelta(), 0.05)

        // Esc releases the pointer and raises the pause screen. Hold the world there.
        if (!this.input.locked)
        {
            if (this.state === 'walking') this.player.applyToCamera(this.camera)
            this.environment.update(this.#focusPosition())
            this.renderer.render(this.scene, this.camera)
            this.input.endFrame()
            return
        }

        this.elapsed += delta
        this.hud.advanceLap(delta)

        if (this.input.wasPressed('KeyH')) this.hud.toggleControls()
        if (this.input.wasPressed('KeyV') && this.state === 'riding') this.helmView = !this.helmView
        if (this.input.wasPressed('KeyI') && this.state === 'riding') this.invertPitch = !this.invertPitch

        if (this.state === 'walking') this.#updateWalking(delta)
        else if (this.state === 'diving') this.#updateDiving(delta)
        else this.#updateRiding(delta)

        this.hud.setControlMode(this.state === 'diving' ? null : this.state)
        this.hud.setPitchInverted(this.invertPitch)

        this.castle.update(delta, this.player.position)
        this.racetrack.update(delta, this.elapsed)
        this.confetti.update(delta)
        this.brickWall.update(delta, this.elephant)

        if (this.state === 'diving') this.#updateSubCamera(delta)

        this.environment.update(this.#focusPosition())
        this.hud.update(delta)

        this.renderer.render(this.scene, this.camera)
        this.input.endFrame()
    }

    #updateWalking(delta)
    {
        this.elephant.update(delta, this.elapsed, this.idleControls)

        this.player.look(this.input.mouseDeltaX, this.input.mouseDeltaY)

        const shouldRespawn = this.player.update(delta, this.input, this.elapsed)
        if (shouldRespawn)
        {
            this.player.respawn()
            this.hud.setNotice('Back in the courtyard.')
        }

        this.player.applyToCamera(this.camera)

        const canBoard = this.castle.canBoard(this.player.position)
        const canMount = !canBoard && this.#canMountElephant()

        if (canBoard && this.input.wasPressed('KeyE'))
        {
            this.#enterSubmarine()
            return
        }
        if (canMount && this.input.wasPressed('KeyE')) this.#mountElephant()

        this.hud.setPrompt(canBoard ? 'Press E to enter' : canMount ? 'Press E to mount' : null)
        this.hud.setCourse(null)
        this.hud.hideBoatReadout()
        this.hud.setCrosshairVisible(true)
    }

    #updateRiding(delta)
    {
        const aim = this.input.axis('KeyW', 'KeyS')
        const controls = {
            throttle: this.input.isHeld('Space') ? 1 : 0,
            pitch: this.invertPitch ? -aim : aim,
            steer: this.input.axis('KeyA', 'KeyD'),
            boost: this.input.isHeld('ShiftLeft') || this.input.isHeld('ShiftRight')
        }

        this.elephant.update(delta, this.elapsed, controls)
        this.#sampleGates()

        if (this.helmView) this.#updateSeatCamera(this.elephant.group, this.elephant.seat)
        else this.#updateChaseCamera(delta, this.elephant, ELEPHANT_CHASE)

        const canDismount = this.elephant.dismountSpot() !== null
        if (canDismount && this.input.wasPressed('KeyE')) this.#dismountElephant()

        if (this.state === 'riding')
            this.hud.setCourse(this.hud.lapRunning
                ? `${this.racetrack.found} of ${HOOP_COUNT} rings`
                : null)
        const aimHint = this.invertPitch ? 'W / S aim up / down' : 'W / S aim down / up'
        this.hud.setPrompt(canDismount
            ? 'Press E to dismount'
            : `Space to fly · ${aimHint} · A / D turn · any ring counts`)
        this.hud.hideBoatReadout()
        this.hud.setCrosshairVisible(this.helmView)
    }

    /** The boat has been boarded. She seals and sinks; the view stays on her. */
    #updateDiving(delta)
    {
        this.elephant.update(delta, this.elapsed, this.idleControls)

        this.hud.setPrompt(null)
        this.hud.setCourse(null)
        this.hud.hideBoatReadout()
        this.hud.setCrosshairVisible(false)
    }

    /** The chest clears a ring from either side. Each ring counts once. */
    #sampleGates()
    {
        const chest = this.scratch.copy(this.elephant.position)
        chest.y += ELEPHANT.back * 0.5

        const gate = this.racetrack.sample(chest)
        if (!gate) return

        if (gate.started) this.hud.startLap()
        if (gate.lap)
        {
            this.hud.stopLap()
            const origin = this.scratchB.copy(this.elephant.position)
            origin.y += ELEPHANT.back * 0.65
            this.confetti.burst(origin)
        }
    }

    /**
     * Highest deck under (x, z), across the main castle and the two beside it.
     * `ceiling` leaves out a court the flyer is already underneath.
     */
    #surfaceAt(x, z, ceiling = Infinity)
    {
        let height = this.castle.surfaceAt(x, z, ceiling)

        for (const castle of this.outerCastles)
        {
            const top = castle.surfaceAt(x, z, ceiling)
            if (top > height) height = top
        }

        return height
    }

    #focusPosition()
    {
        if (this.state === 'riding') return this.elephant.position
        if (this.state === 'diving') return this.castle.submarinePoint(this.focusPoint)
        return this.player.position
    }

    #updateChaseCamera(delta, subject, tuning)
    {
        this.chaseYaw -= this.input.mouseDeltaX * LOOK_SENSITIVITY
        this.chasePitch = THREE.MathUtils.clamp(this.chasePitch + this.input.mouseDeltaY * LOOK_SENSITIVITY, -0.35, 0.9)

        // Pull back a touch as she picks up speed.
        const speedFactor = THREE.MathUtils.clamp(Math.abs(subject.speed) / tuning.speedScale, 0, 1)
        const distance = tuning.distance + speedFactor * 2.4
        const yaw = subject.yaw + this.chaseYaw

        const desired = this.scratch.set(
            subject.position.x - Math.sin(yaw) * distance,
            subject.position.y + tuning.height + this.chasePitch * 7,
            subject.position.z - Math.cos(yaw) * distance
        )

        const floor = this.#surfaceAt(desired.x, desired.z, desired.y)
        if (Number.isFinite(floor)) desired.y = Math.max(desired.y, floor + 0.8)

        const target = this.scratchB.copy(subject.position)
        target.y += tuning.lookHeight

        if (!this.chaseInitialised)
        {
            this.chasePosition.copy(desired)
            this.chaseTarget.copy(target)
            this.chaseInitialised = true
        }

        const smoothing = 1 - Math.exp(-7 * delta)
        this.chasePosition.lerp(desired, smoothing)
        this.chaseTarget.lerp(target, 1 - Math.exp(-12 * delta))

        this.camera.position.copy(this.chasePosition)
        this.camera.lookAt(this.chaseTarget)
    }

    /** Overhead for the first three seconds, then a cut under the cloud that tracks the fall. */
    #updateSubCamera(delta)
    {
        const focus = this.castle.submarinePoint(this.scratchB)

        if (this.castle.plunging)
        {
            this.#updatePlungeCamera(delta, focus)
            return
        }

        const desired = this.scratch.copy(SUB_VIEW_OFFSET).add(focus)

        if (!this.subViewReady)
        {
            this.subViewPosition.copy(this.camera.position)
            this.subViewTarget.copy(focus)
            this.subViewReady = true
        }

        this.subViewPosition.lerp(desired, 1 - Math.exp(-2.4 * delta))
        this.subViewTarget.lerp(focus, 1 - Math.exp(-5 * delta))

        this.camera.position.copy(this.subViewPosition)
        this.camera.lookAt(this.subViewTarget)
    }

    /**
     * Snaps under the castle, looking up the cloud column. Stays there while
     * the hull comes down, then follows once she has passed.
     */
    #updatePlungeCamera(delta, focus)
    {
        const x = focus.x + PLUNGE_SIDE.x
        const z = focus.z + PLUNGE_SIDE.z

        if (!this.plungeReady)
        {
            this.subViewPosition.set(x, PLUNGE_CAMERA_Y, z)
            this.plungeReady = true
        }
        else
        {
            this.subViewPosition.x = x
            this.subViewPosition.z = z

            if (focus.y < this.subViewPosition.y)
            {
                const follow = 1 - Math.exp(-3.5 * delta)
                this.subViewPosition.y += (focus.y - this.subViewPosition.y) * follow
            }
        }

        this.camera.position.copy(this.subViewPosition)
        this.camera.lookAt(focus)
    }

    /** First-person from a point on the mount. The body faces +Z; the camera looks down -Z. */
    #updateSeatCamera(group, seat)
    {
        this.helmYaw = THREE.MathUtils.clamp(this.helmYaw - this.input.mouseDeltaX * LOOK_SENSITIVITY, -2.2, 2.2)
        this.helmPitch = THREE.MathUtils.clamp(this.helmPitch - this.input.mouseDeltaY * LOOK_SENSITIVITY, -0.7, 0.7)

        group.updateMatrixWorld()
        this.camera.position.copy(group.localToWorld(this.scratch.copy(seat)))

        this.camera.quaternion.copy(group.quaternion)
        this.camera.rotateY(Math.PI + this.helmYaw)
        this.camera.rotateX(this.helmPitch)
    }

    #canMountElephant()
    {
        const dx = this.elephant.position.x - this.player.position.x
        const dy = this.elephant.position.y + ELEPHANT.back - this.player.position.y
        const dz = this.elephant.position.z - this.player.position.z

        return Math.hypot(dx, dy, dz) < MOUNT_RANGE
    }

    #mountElephant()
    {
        this.state = 'riding'
        this.elephant.occupied = true
        this.helmView = true
        this.chaseInitialised = false
        this.chaseYaw = 0
        this.chasePitch = 0.12
        this.helmYaw = 0
        this.helmPitch = -0.05
        this.racetrack.resetApproach()
    }

    #enterSubmarine()
    {
        if (!this.castle.depart()) return

        this.state = 'diving'
        this.subViewReady = false
        this.plungeReady = false
        this.hud.setPrompt(null)
        this.hud.setCrosshairVisible(false)
        this.hud.setNotice('The hatch seals.')
    }

    #dismountElephant()
    {
        const spot = this.elephant.dismountSpot()
        if (!spot) return

        this.state = 'walking'
        this.helmView = false
        this.player.position.copy(spot)
        this.player.velocityY = 0
        this.player.inWater = false

        const castle = this.#castleAt(spot.x, spot.z)
        if (castle)
        {
            const yaw = castle.elephantBerth(this.scratchB)
            this.elephant.park(this.scratchB, yaw)
        }
        else this.elephant.halt()

        const toMount = this.scratch.copy(this.elephant.position).sub(this.player.position)
        this.player.yaw = Math.atan2(-toMount.x, -toMount.z)
        this.player.pitch = 0

        if (this.hud.disqualify()) this.racetrack.abandon()
        else this.hud.setNotice('Back on the platform.')
    }

    /** The castle whose deck is under (x, z), if any. */
    #castleAt(x, z)
    {
        let chosen = null
        let height = Number.NEGATIVE_INFINITY

        for (const castle of [this.castle, ...this.outerCastles])
        {
            const top = castle.surfaceAt(x, z)
            if (top > height)
            {
                height = top
                chosen = castle
            }
        }

        return chosen
    }
}
