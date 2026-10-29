import * as THREE from 'three'
import { flightBoxesNear } from '../world/Castle.js'
import { terrainHeight } from '../world/terrain.js'
import { waterHeight } from '../world/waves.js'
import { ELEPHANT, disposeTree, loadElephantModel, sampleOrb } from './elephantModel.js'
import { EyeFire, PURPLE_FLAME } from './EyeFire.js'

export { ELEPHANT }

const FLY_SPEED = 20
const BOOST_SPEED = 32
const SPEED_RESPONSE = 2.6
const MAX_YAW_RATE = 1.6
const STEER_RESPONSE = 6

/** W pitches the nose down, S pitches it up, in radians per second. */
const PITCH_RATE = 1.4
const PITCH_RESPONSE = 3.5
const PITCH_LIMIT = 1.15

/** She can leave the ground, but not the island's sky. */
const MAX_ALTITUDE = 80

/** Below this, the run clip blends out and she holds the idle. */
const GAIT_START = 0.25
const GAIT_FULL = 1.1

/** Travel speed at which the run clip plays at its authored rate. */
const RUN_REFERENCE_SPEED = 7

/** How close to the land or the sea she must be before the rider can step off. */
const DISMOUNT_HEIGHT = 2.6
/** Hovering this far above a platform still counts as standing on it. */
const DISMOUNT_DROP = 12
const DISMOUNT_SPEED = 1.3

/** Keeps her soles off the wave crests when she skims the sea. */
const SURFACE_CLEARANCE = 0.15

/**
 * A deck this close above her feet still catches a dive. Anything higher is
 * overhead, so the cloud under a castle does not haul her up onto the court.
 */
const SUPPORT_REACH = 1.5

/** How long the ghost takes to run from the top of the reins to the bit. */
const REIN_DRAW = 1.15

const reinVertexShader = /* glsl */`
#include <skinning_pars_vertex>

uniform float uTop;
uniform float uBottom;

varying vec3 vNormal;
varying vec3 vView;
varying float vAlong;

void main()
{
    // Bind-pose height: 0 at the top of the strap, 1 at the bit. Skinning
    // moves the tube, but the draw still follows the authored length.
    vAlong = clamp((uTop - position.y) / max(0.0001, uTop - uBottom), 0.0, 1.0);

    #include <beginnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    #include <project_vertex>

    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vNormal = mat3(modelMatrix) * objectNormal;
    vView = cameraPosition - worldPosition.xyz;
}
`

const reinFragmentShader = /* glsl */`
uniform float uIntensity;
uniform float uGrow;

varying vec3 vNormal;
varying vec3 vView;
varying float vAlong;

void main()
{
    // Nothing ahead of the draw. The strap is generated from the top down.
    if (vAlong > uGrow) discard;

    // A ghost: the strap stays see-through, and the silhouette burns white.
    float facing = clamp(abs(dot(normalize(vNormal), normalize(vView))), 0.0, 1.0);
    float rim = pow(1.0 - facing, 1.8);
    vec3 soul = vec3(0.42, 0.10, 0.95);
    vec3 heat = vec3(0.90, 0.94, 1.0);
    vec3 colour = mix(soul, heat, rim);
    float veil = mix(0.28, 0.85, rim) * uIntensity;

    // The leading edge is the bright point where the ghost is still being laid.
    float lip = smoothstep(uGrow - 0.12, uGrow, vAlong);
    colour = mix(colour, heat, lip);
    veil = mix(veil, 1.05, lip);

    gl_FragColor = vec4(colour, veil);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`

/** A see-through strap. Skinning chunks keep it on the rig. */
function createEtherealReins()
{
    return new THREE.ShaderMaterial({
        vertexShader: reinVertexShader,
        fragmentShader: reinFragmentShader,
        uniforms: {
            uIntensity: { value: 1 },
            uGrow: { value: 0 },
            uTop: { value: 1 },
            uBottom: { value: 0 }
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
    })
}

/** Highest and lowest bind-pose points on the rein, in model units. */
function reinExtent(mesh)
{
    const position = mesh.geometry.attributes.position
    let top = -Infinity
    let bottom = Infinity

    for (let i = 0; i < position.count; i++)
    {
        const y = position.getY(i)
        if (y > top) top = y
        if (y < bottom) bottom = y
    }

    return { top, bottom }
}

function createPlaceholder()
{
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(ELEPHANT.beam * 0.72, 1.725, ELEPHANT.length * 0.7),
        new THREE.MeshStandardMaterial({ color: '#8d7a64', roughness: 0.86 })
    )
    body.position.y = 1.09
    body.castShadow = true
    body.receiveShadow = true

    const group = new THREE.Group()
    group.add(body)
    return group
}

export class Elephant
{
    /**
     * @param {THREE.Vector3} position
     * @param {{ loadModel?: boolean, yaw?: number, floor?: ((x: number, z: number, ceiling?: number) => number) | null, castles?: { worldToLocal: Function, localToWorld: Function, walls: THREE.Box3[] }[] }} options
     * `floor` replaces the island and the sea. Return -Infinity where there
     * is no ground, and she will fly through open sky. The third argument is
     * the highest surface that can still hold her; decks above it are open
     * air, which is how she flies through the cloud under a castle.
     * `castles` are the stone she cannot pass through.
     */
    constructor(position, { loadModel = true, yaw = 0, floor = null, castles = null } = {})
    {
        this.group = new THREE.Group()
        this.group.rotation.order = 'YXZ'

        this.visual = createPlaceholder()
        this.group.add(this.visual)
        this.modelLoaded = false

        this.seat = ELEPHANT.seat.clone()
        /** Idle and run actions. Null until the model arrives. */
        this.gait = null

        /** Purple-sphere sockets, in her local frame. Filled in when the mesh arrives. */
        this.orbs = []
        this.fire = null
        /** The transparent rein mesh. Its clear material is swapped for a ghost while ridden. */
        this.reinMesh = null
        this.fireIntensity = 0
        this.viewport = null
        /**
         * World-space flame. Kept out of this.group so a turn does not swing
         * the fire around with her.
         */
        this.effects = new THREE.Group()
        this.#orbWorld = []
        this.#velocity = new THREE.Vector3()

        this.ready = loadModel
            ? loadElephantModel()
                .then(({ visual, seat, gait, orbs, reins }) => this.#useVisual(visual, seat, gait, orbs, reins))
                .catch((error) =>
                {
                    console.warn('Elephant model failed to load; keeping the placeholder.', error)
                })
            : Promise.resolve()

        this.position = position.clone()
        this.floorFn = floor
        this.castles = castles
        const floorY = this.#floor(position.x, position.z, 0, this.position.y + SUPPORT_REACH)
        if (this.position.y < floorY) this.position.y = floorY

        this.yaw = yaw
        this.pitch = 0
        this.pitchInput = 0
        this.steer = 0
        this.forwardSpeed = 0

        this.forward = new THREE.Vector3()
        this.right = new THREE.Vector3()
        this.#aim()

        /** Set by the game when the player climbs on. */
        this.occupied = false

        this.group.position.copy(this.position)
        this.group.rotation.y = this.yaw
        this.group.rotation.x = this.pitch

        this.#side = new THREE.Vector3()
    }

    #side
    #orbWorld
    #velocity
    #skin = new THREE.Vector3()
    #reinsLit = false
    #reinGrow = 0
    #clearMaterial = null
    #ethereal = null

    /**
     * Nose, including pitch. Positive pitch points her downward: local +Z
     * swings toward -Y, which is the same sense as rotation.x under YXZ.
     */
    #aim()
    {
        const cosPitch = Math.cos(this.pitch)
        const sinPitch = Math.sin(this.pitch)

        this.forward.set(
            Math.sin(this.yaw) * cosPitch,
            -sinPitch,
            Math.cos(this.yaw) * cosPitch
        )
        this.right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
    }

    /**
     * Land, or the sea, whichever is higher. She flies above this, not through
     * it. `ceiling` drops any deck that is overhead, so a court she is flying
     * under does not count as ground.
     */
    #floor(x, z, time, ceiling = Infinity)
    {
        if (this.floorFn)
        {
            const height = this.floorFn(x, z, ceiling)
            return Number.isFinite(height) ? height : Number.NEGATIVE_INFINITY
        }

        return Math.max(terrainHeight(x, z), waterHeight(x, z, time) + SURFACE_CLEARANCE)
    }

    /**
     * The stone around every castle, including the towers and the dark base.
     * Her body is the beam across and most of her length, from the feet up to
     * the back. The ivory cloud is not in these boxes, so she flies through it.
     */
    #resolveCastles(x, z, feetY)
    {
        if (!this.castles) return { x, z }

        const radius = ELEPHANT.beam * 0.5
        const reach = ELEPHANT.length * 0.42
        const samples = [
            [0, 0],
            [this.forward.x * reach, this.forward.z * reach],
            [-this.forward.x * reach, -this.forward.z * reach]
        ]

        for (let pass = 0; pass < 2; pass++)
        {
            for (const castle of this.castles)
            {
                for (const [ox, oz] of samples)
                {
                    const originX = x + ox
                    const originZ = z + oz
                    const local = castle.worldToLocal(originX, originZ)
                    let px = local.x
                    let pz = local.z
                    const blockedWalls = this.#pushOutOfWalls(castle.walls, px, pz, feetY, radius)
                    px = blockedWalls.x
                    pz = blockedWalls.z
                    if (castle.flightWalls?.length)
                    {
                        const nearby = flightBoxesNear(castle.flightWalls, px, pz, radius)
                        const blockedFlight = this.#pushOutOfWalls(nearby, px, pz, feetY, radius)
                        px = blockedFlight.x
                        pz = blockedFlight.z
                    }
                    if (castle.hoop) pz = this.#clearHoop(castle.hoop, px, pz, feetY)
                    const world = castle.localToWorld(px, pz)
                    x += world.x - originX
                    z += world.z - originZ
                }
            }
        }

        return { x, z }
    }

    /**
     * The gold band. The opening is the circle she can see: her centre flies
     * through any of it, and only the metal outside that circle pushes her back.
     */
    #clearHoop(hoop, x, z, feetY)
    {
        const bodyY = feetY + ELEPHANT.back * 0.5
        const dist = Math.hypot(x - hoop.x, bodyY - hoop.y)
        if (dist < hoop.inner || dist > hoop.outer) return z

        const front = hoop.z - hoop.halfDepth
        const back = hoop.z + hoop.halfDepth
        if (z <= front || z >= back) return z

        return z < hoop.z ? front : back
    }

    #pushOutOfWalls(boxes, x, z, feetY, radius)
    {
        const headY = feetY + ELEPHANT.back

        for (const box of boxes)
        {
            if (headY <= box.min.y || feetY >= box.max.y - 0.05) continue

            const closestX = THREE.MathUtils.clamp(x, box.min.x, box.max.x)
            const closestZ = THREE.MathUtils.clamp(z, box.min.z, box.max.z)
            const offsetX = x - closestX
            const offsetZ = z - closestZ
            const distanceSquared = offsetX * offsetX + offsetZ * offsetZ

            if (distanceSquared > radius * radius) continue

            if (distanceSquared > 1e-6)
            {
                const distance = Math.sqrt(distanceSquared)
                x = closestX + (offsetX / distance) * radius
                z = closestZ + (offsetZ / distance) * radius
            }
            else
            {
                const toMinX = x - box.min.x
                const toMaxX = box.max.x - x
                const toMinZ = z - box.min.z
                const toMaxZ = box.max.z - z
                const smallest = Math.min(toMinX, toMaxX, toMinZ, toMaxZ)

                if (smallest === toMinX) x = box.min.x - radius
                else if (smallest === toMaxX) x = box.max.x + radius
                else if (smallest === toMinZ) z = box.min.z - radius
                else z = box.max.z + radius
            }
        }

        return { x, z }
    }

    /** Point sizes are in device pixels, so the fire needs the viewport. */
    setViewport(drawingBufferHeight, fovDegrees)
    {
        this.viewport = { height: drawingBufferHeight, fov: fovDegrees }
        this.fire?.setViewport(drawingBufferHeight, fovDegrees)
    }

    #useVisual(visual, seat, gait, orbs, reins)
    {
        this.group.remove(this.visual)
        disposeTree(this.visual)

        this.visual = visual
        this.modelLoaded = true
        this.group.add(visual)

        if (seat) this.seat.copy(seat)
        this.gait = gait
        this.#updateGait(0)

        if (orbs?.length)
        {
            this.orbs = orbs
            this.#orbWorld = orbs.map(() => new THREE.Vector3())
            this.fire = new EyeFire({
                direction: new THREE.Vector3(0, -1, 0),
                sockets: orbs.length,
                palette: PURPLE_FLAME,
                cover: true,
                coverLift: Math.max(...orbs.map((orb) => orb.drop))
            })
            this.effects.add(this.fire.group)
            if (this.viewport) this.fire.setViewport(this.viewport.height, this.viewport.fov)
        }

        if (reins)
        {
            this.reinMesh = reins
            this.#clearMaterial = reins.material
            this.#ethereal = createEtherealReins()
            const extent = reinExtent(reins)
            this.#ethereal.uniforms.uTop.value = extent.top
            this.#ethereal.uniforms.uBottom.value = extent.bottom
        }
    }

    /**
     * Space is the throttle, along the nose. W and S pitch that nose down and
     * up; A and D still yaw. She is not stuck to the ground.
     *
     * @param {{ throttle: number, pitch?: number, steer: number, boost: boolean }} controls
     */
    update(delta, time, controls)
    {
        const thrust = Math.max(0, controls.throttle) * (controls.boost ? BOOST_SPEED : FLY_SPEED)
        this.forwardSpeed += (thrust - this.forwardSpeed) * Math.min(1, SPEED_RESPONSE * delta)

        this.steer += THREE.MathUtils.clamp(controls.steer - this.steer, -STEER_RESPONSE * delta, STEER_RESPONSE * delta)
        this.pitchInput += THREE.MathUtils.clamp((controls.pitch ?? 0) - this.pitchInput, -PITCH_RESPONSE * delta, PITCH_RESPONSE * delta)

        this.yaw += this.steer * MAX_YAW_RATE * delta
        this.pitch = THREE.MathUtils.clamp(this.pitch + this.pitchInput * PITCH_RATE * delta, -PITCH_LIMIT, PITCH_LIMIT)
        this.#aim()

        const moveX = this.forward.x * this.forwardSpeed * delta
        const moveY = this.forward.y * this.forwardSpeed * delta
        const moveZ = this.forward.z * this.forwardSpeed * delta
        // Short steps, so a fast dive cannot skip a tower wall.
        const steps = Math.min(64, Math.max(1, Math.ceil(Math.hypot(moveX, moveZ) / 0.45)))
        let x = this.position.x
        let y = this.position.y
        let z = this.position.z

        for (let step = 0; step < steps; step++)
        {
            const blocked = this.#resolveCastles(x + moveX / steps, z + moveZ / steps, y + moveY / steps)
            x = blocked.x
            z = blocked.z
            y += moveY / steps
        }

        this.position.x = x
        this.position.z = z
        this.position.y = THREE.MathUtils.clamp(
            y,
            this.#floor(x, z, time, y + SUPPORT_REACH),
            MAX_ALTITUDE
        )

        this.group.position.copy(this.position)
        this.group.rotation.y = this.yaw
        this.group.rotation.x = this.pitch
        this.#updateGait(delta)
        this.#updateFire(delta)
    }

    /**
     * The spheres stay lit. Flying feeds them, the way opening the throttle
     * feeds the boat's eyes, but the flame falls instead of rising.
     */
    #updateFire(delta)
    {
        if (!this.fire && !this.#ethereal) return

        const effort = Math.min(1, Math.abs(this.forwardSpeed) / FLY_SPEED)
        this.fireIntensity = 0.4 + 0.6 * effort

        if (this.fire)
        {
            // Force the skin, not just the hull, so the sockets follow the spheres.
            this.group.updateMatrixWorld(true)
            this.#velocity.copy(this.forward).multiplyScalar(this.forwardSpeed)

            for (let i = 0; i < this.orbs.length; i++)
            {
                sampleOrb(this.orbs[i], this.#orbWorld[i], this.#skin)
            }

            this.fire.update(delta, this.#orbWorld, this.#velocity, this.fireIntensity)
        }

        this.#updateReins(delta, effort)
    }

    /**
     * The reins stay invisible until someone is aboard. Mounting draws the
     * ghost from the top of each strap down to the bit.
     */
    #updateReins(delta, effort)
    {
        if (!this.#ethereal) return

        const lit = this.occupied

        if (lit && !this.#reinsLit) this.#reinGrow = 0
        this.#setReinsLit(lit)

        if (!lit)
        {
            this.#reinGrow = 0
            this.#ethereal.uniforms.uGrow.value = 0
            return
        }

        this.#reinGrow = Math.min(1, this.#reinGrow + delta / REIN_DRAW)
        this.#ethereal.uniforms.uGrow.value = this.#reinGrow
        this.#ethereal.uniforms.uIntensity.value = 0.85 + 0.5 * effort
    }

    #setReinsLit(lit)
    {
        if (!this.reinMesh || this.#reinsLit === lit) return

        this.#reinsLit = lit
        this.reinMesh.castShadow = false

        if (lit)
        {
            this.reinMesh.material = this.#ethereal
            this.reinMesh.renderOrder = 2
        }
        else
        {
            this.reinMesh.material = this.#clearMaterial
            this.reinMesh.renderOrder = 0
        }
    }

    /** Idle at rest, run in time with her speed. The two overlap through the blend. */
    #updateGait(delta)
    {
        if (!this.gait) return

        const speed = this.occupied ? this.forwardSpeed : 0
        const runWeight = THREE.MathUtils.smoothstep(Math.abs(speed), GAIT_START, GAIT_FULL)

        this.gait.run.setEffectiveWeight(runWeight)
        this.gait.idle.setEffectiveWeight(1 - runWeight)
        this.gait.run.setEffectiveTimeScale(
            Math.abs(speed) > GAIT_START
                ? THREE.MathUtils.clamp(speed / RUN_REFERENCE_SPEED, -1.6, 1.6)
                : 1
        )
        this.gait.mixer.update(delta)
    }

    get speed()
    {
        return this.forwardSpeed
    }

    /** Drop the throttle the moment the rider steps off. */
    halt()
    {
        this.occupied = false
        this.forwardSpeed = 0
        this.steer = 0
        this.pitchInput = 0
    }

    /**
     * Put her back in the waiting pose: level, stopped, at a berth beside
     * a walkway. `yaw` is the direction her trunk points.
     */
    park(position, yaw)
    {
        this.halt()
        this.pitch = 0
        this.position.copy(position)
        this.yaw = yaw
        this.#aim()
        this.group.position.copy(this.position)
        this.group.rotation.x = 0
        this.group.rotation.y = this.yaw
        this.#updateGait(0)
    }

    /** World-space point off her port side, where mounting happens. */
    boardingPoint(target = new THREE.Vector3())
    {
        return target.copy(this.position).addScaledVector(this.right, -ELEPHANT.beam * 0.72)
    }

    /**
     * Feet on the ground, or back level with it. The parked pose sinks her
     * soles below the walkway, so the back is the height that counts there.
     */
    #nearEnoughToStep(surface)
    {
        const feet = Math.abs(this.position.y - surface)
        const back = Math.abs(this.position.y + ELEPHANT.back - surface)
        return Math.min(feet, back) <= DISMOUNT_HEIGHT
    }

    /**
     * A spot beside her, once she is slow and near the ground.
     * In the air there is nowhere to step, so this returns null.
     * The returned vector is reused on the next call.
     */
    dismountSpot()
    {
        if (Math.abs(this.forwardSpeed) > DISMOUNT_SPEED) return null

        if (this.floorFn) return this.#dismountOnFloor()

        const surface = Math.max(terrainHeight(this.position.x, this.position.z), 0)
        if (!this.#nearEnoughToStep(surface)) return null

        const reach = ELEPHANT.beam * 0.5 + 0.9

        for (const side of [1, -1])
        {
            this.#side.copy(this.position).addScaledVector(this.right, side * reach)
            const ground = terrainHeight(this.#side.x, this.#side.z)

            // Prefer a dry landing. Over the sea, step off at her own height.
            this.#side.y = ground > 0.4 ? ground : Math.max(this.position.y, ground)
            if (ground > 0.4 || side === -1) return this.#side
        }

        return null
    }

    /**
     * A castle deck within reach. Close beside her, as at the main door, or
     * a short drop onto the platform she is hovering over.
     */
    #onPlatform(surface)
    {
        const aboveFeet = this.position.y - surface
        const aboveBack = this.position.y + ELEPHANT.back - surface
        if (Math.min(Math.abs(aboveFeet), Math.abs(aboveBack)) <= DISMOUNT_HEIGHT) return true
        return aboveFeet > 0 && aboveFeet <= DISMOUNT_DROP
    }

    #platformAt(x, z)
    {
        const ground = this.floorFn(x, z, this.position.y + DISMOUNT_DROP)
        if (!Number.isFinite(ground) || !this.#onPlatform(ground)) return false

        this.#side.set(x, ground, z)
        return true
    }

    /**
     * Step onto whatever solid floor runs alongside her. She is longer than
     * the castle walkway, so this also checks toward her head and tail, and
     * straight down, where a narrow deck can miss the flank samples.
     */
    #dismountOnFloor()
    {
        const reach = ELEPHANT.beam * 0.5 + 0.9
        const half = ELEPHANT.length * 0.5

        for (const side of [1, -1])
        {
            for (const along of [0, 0.4, -0.4, 0.75, -0.75])
            {
                const x = this.position.x + this.forward.x * along * half + this.right.x * side * reach
                const z = this.position.z + this.forward.z * along * half + this.right.z * side * reach
                if (this.#platformAt(x, z)) return this.#side
            }
        }

        // A shorter step, then the deck under her. The wide flank reach
        // falls off a narrow walkway when she is sitting on it.
        const close = ELEPHANT.beam * 0.5 + 0.35
        for (const side of [1, -1])
        {
            const x = this.position.x + this.right.x * side * close
            const z = this.position.z + this.right.z * side * close
            if (this.#platformAt(x, z)) return this.#side
        }

        for (const along of [0, 0.5, -0.5])
        {
            if (this.#platformAt(
                this.position.x + this.forward.x * along * half,
                this.position.z + this.forward.z * along * half
            )) return this.#side
        }

        for (const radius of [reach + 1.2, reach + 3])
        {
            for (let step = 0; step < 8; step++)
            {
                const angle = (step / 8) * Math.PI * 2
                if (this.#platformAt(
                    this.position.x + Math.cos(angle) * radius,
                    this.position.z + Math.sin(angle) * radius
                )) return this.#side
            }
        }

        return null
    }
}
