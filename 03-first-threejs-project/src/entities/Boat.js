import * as THREE from 'three'
import { waterHeight } from '../world/waves.js'
import { BOAT } from './dimensions.js'
import { createPlaceholderHull } from './placeholderHull.js'
import { loadBoatModel } from './boatModel.js'
import { EyeFire } from './EyeFire.js'

export { BOAT }

const MAX_THRUST = 7.0
const BOOST_MULTIPLIER = 1.5
const REVERSE_THRUST = 2.6
const LINEAR_DRAG = 0.35
const QUADRATIC_DRAG = 0.035
const MAX_YAW_RATE = 0.95
const THROTTLE_RATE = 1.7

/** Below this, the leg cycle holds still so a drift does not keep her paddling. */
const SWIM_SPEED = 0.35

/** Travel speed, in metres per second, at which the clip plays at its authored rate. */
const SWIM_REFERENCE_SPEED = 11

/** Applied on top of the speed match, so the whole cycle runs faster than authored. */
const SWIM_RATE = 1.5

const WAKE_COUNT = 160

const wakeVertexShader = /* glsl */`
attribute float aFade;
varying float vFade;
varying vec2 vWakeUv;

void main()
{
    vFade = aFade;
    vWakeUv = uv;
    vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * world;
}
`

const wakeFragmentShader = /* glsl */`
varying float vFade;
varying vec2 vWakeUv;

void main()
{
    float radius = length(vWakeUv - 0.5) * 2.0;
    float alpha = smoothstep(1.0, 0.45, radius) * vFade;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(0.93, 0.97, 0.99, alpha * 0.6);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`

function disposeTree(object)
{
    object.traverse((child) =>
    {
        child.geometry?.dispose()

        const material = child.material
        if (!material) return
        for (const entry of Array.isArray(material) ? material : [material]) entry.dispose()
    })
}

export class Boat
{
    /** @param {{ loadModel?: boolean }} options  Headless tests opt out of the fetch. */
    constructor(position, { loadModel = true } = {})
    {
        this.group = new THREE.Group()
        this.group.rotation.order = 'YXZ'

        // Stand her up immediately with the procedural hull, then swap in the
        // real model when it arrives. If the load fails we simply keep this,
        // rather than leaving an empty berth.
        this.visual = createPlaceholderHull()
        this.group.add(this.visual)
        this.modelLoaded = false

        // Fallback socket positions, roughly where the placeholder's bow is.
        // Replaced with the real ones measured off the mesh once it loads.
        this.eyes = [new THREE.Vector3(-0.45, 0.6, 2.1), new THREE.Vector3(0.45, 0.6, 2.1)]

        this.ready = loadModel
            ? loadBoatModel()
                .then(({ visual, eyes, swim }) => this.#useVisual(visual, eyes, swim))
                .catch((error) =>
                {
                    console.warn('Boat model failed to load; keeping the placeholder hull.', error)
                })
            : Promise.resolve()

        this.position = position.clone()
        this.yaw = Math.PI // moored alongside, facing out to sea
        this.throttle = 0
        this.steer = 0
        this.forwardSpeed = 0
        this.yawRate = 0

        this.forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw))
        this.right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw))

        this.#buildWake()

        this.fire = new EyeFire()
        this.fireIntensity = 0
        /** Set by the game when the player steps aboard. Cold until then. */
        this.occupied = false
        /** Leg cycle from the animated hull. Null until that model arrives. */
        this.swim = null

        /**
         * World-space effects. Kept out of this.group so they are not dragged
         * around by her heading and attitude — flames and foam should be left
         * behind, not carried.
         */
        this.effects = new THREE.Group()
        this.effects.add(this.wakeMesh, this.fire.group)

        this.#eyeWorld = [new THREE.Vector3(), new THREE.Vector3()]
        this.#velocity = new THREE.Vector3()
    }

    #eyeWorld
    #velocity

    /** Point sizes are in device pixels, so the fire needs the viewport. */
    setViewport(drawingBufferHeight, fovDegrees)
    {
        this.fire.setViewport(drawingBufferHeight, fovDegrees)
    }

    #useVisual(visual, eyes, swim)
    {
        this.group.remove(this.visual)
        disposeTree(this.visual)

        this.visual = visual
        this.modelLoaded = true
        this.group.add(visual)

        if (eyes?.length) this.eyes = eyes

        this.swim = swim ?? null
        this.#updateSwim(0)
    }

    #buildWake()
    {
        const geometry = new THREE.PlaneGeometry(1, 1)
        geometry.rotateX(-Math.PI / 2)

        const fades = new Float32Array(WAKE_COUNT)
        geometry.setAttribute('aFade', new THREE.InstancedBufferAttribute(fades, 1))

        this.wakeFades = geometry.attributes.aFade
        this.wakeFades.setUsage(THREE.DynamicDrawUsage)

        this.wakeMesh = new THREE.InstancedMesh(geometry, new THREE.ShaderMaterial({
            vertexShader: wakeVertexShader,
            fragmentShader: wakeFragmentShader,
            transparent: true,
            depthWrite: false
        }), WAKE_COUNT)
        this.wakeMesh.frustumCulled = false
        this.wakeMesh.renderOrder = 1 // after the transparent water sheet
        this.wakeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)

        // Instance matrices start as all zeros, which would hand the shader
        // degenerate triangles until a puff first claims the slot.
        const identity = new THREE.Matrix4()
        for (let i = 0; i < WAKE_COUNT; i++) this.wakeMesh.setMatrixAt(i, identity)

        this.wakePuffs = Array.from({ length: WAKE_COUNT }, () => ({ x: 0, z: 0, age: Infinity, life: 1, size: 1 }))
        this.wakeCursor = 0
        this.distanceSinceWake = 0
        this.wakeDummy = new THREE.Object3D()
    }

    /**
     * @param {{ throttle: number, steer: number, boost: boolean }} controls
     * @param {(x: number, z: number) => boolean} isNavigable
     */
    update(delta, time, controls, isNavigable)
    {
        const targetThrottle = controls.throttle
        this.throttle += THREE.MathUtils.clamp(targetThrottle - this.throttle, -THROTTLE_RATE * delta, THROTTLE_RATE * delta)
        this.steer += THREE.MathUtils.clamp(controls.steer - this.steer, -4 * delta, 4 * delta)

        const thrust = this.throttle >= 0
            ? this.throttle * MAX_THRUST * (controls.boost ? BOOST_MULTIPLIER : 1)
            : this.throttle * REVERSE_THRUST

        const speed = this.forwardSpeed
        const drag = LINEAR_DRAG * speed + QUADRATIC_DRAG * speed * Math.abs(speed)
        this.forwardSpeed += (thrust - drag) * delta

        // A and D only turn the head. They never push her sideways, and they
        // work while she is stopped so you can line her up before opening the throttle.
        const targetYawRate = this.steer * MAX_YAW_RATE
        this.yawRate += (targetYawRate - this.yawRate) * Math.min(1, 4 * delta)
        this.yaw += this.yawRate * delta

        this.forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw))
        this.right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw))

        const nextX = this.position.x + this.forward.x * this.forwardSpeed * delta
        const nextZ = this.position.z + this.forward.z * this.forwardSpeed * delta

        if (isNavigable(nextX, nextZ))
        {
            this.position.x = nextX
            this.position.z = nextZ
        }
        else
        {
            this.forwardSpeed *= -0.2
        }

        this.#settleOnWaves(time)
        this.#updateWake(delta, time)
        this.#updateFire(delta)
        this.#updateSwim(delta)
    }

    /**
     * Legs paddle only while she is making way. The clip's rate tracks her
     * speed, and the sign of that speed plays it forward or backward.
     * Stopped, or with nobody aboard, it holds:
     * the current pose while you are still at the helm, the first frame once
     * you have stepped off.
     */
    #updateSwim(delta)
    {
        if (!this.swim) return

        const { mixer, action } = this.swim
        const speed = this.forwardSpeed

        if (this.occupied && Math.abs(speed) > SWIM_SPEED)
        {
            action.paused = false
            action.timeScale = THREE.MathUtils.clamp(SWIM_RATE * speed / SWIM_REFERENCE_SPEED, -2.4, 2.4)
            mixer.update(delta)
            return
        }

        if (!this.occupied)
        {
            if (action.paused && action.time === 0) return

            action.paused = true
            action.timeScale = 1
            action.time = 0
            mixer.update(0)
            return
        }

        action.paused = true
    }

    /**
     * Dark until someone is aboard. Then embers at rest, blazing under power,
     * driven by whichever is higher of throttle and speed so the eyes flare
     * the moment you open her up rather than waiting for her to build way.
     */
    #updateFire(delta)
    {
        const effort = Math.max(Math.abs(this.throttle), Math.abs(this.forwardSpeed) / 11)
        this.fireIntensity = this.occupied
            ? THREE.MathUtils.clamp(0.15 + 0.95 * effort, 0, 1)
            : 0

        this.group.updateMatrixWorld()
        for (let i = 0; i < this.eyes.length && i < 2; i++)
        {
            this.#eyeWorld[i].copy(this.eyes[i]).applyMatrix4(this.group.matrixWorld)
        }

        this.#velocity.copy(this.forward).multiplyScalar(this.forwardSpeed)

        this.fire.update(delta, this.#eyeWorld, this.#velocity, this.fireIntensity)
    }

    /** Ride the surface: height at the centre, attitude from fore/aft and beam samples. */
    #settleOnWaves(time)
    {
        const { x, z } = this.position
        const halfLength = BOAT.length * 0.42
        const halfBeam = BOAT.beam * 0.5

        const center = waterHeight(x, z, time)
        const fore = waterHeight(x + this.forward.x * halfLength, z + this.forward.z * halfLength, time)
        const aft = waterHeight(x - this.forward.x * halfLength, z - this.forward.z * halfLength, time)
        const port = waterHeight(x - this.right.x * halfBeam, z - this.right.z * halfBeam, time)
        const starboard = waterHeight(x + this.right.x * halfBeam, z + this.right.z * halfBeam, time)

        // A swimming body rises and lifts her head a little as she surges, but
        // nothing like a hull climbing onto the plane.
        const surge = THREE.MathUtils.clamp(this.forwardSpeed / 11, 0, 1)

        this.position.y = center + 0.1 + surge * 0.05
        this.group.position.copy(this.position)

        this.group.rotation.y = this.yaw
        this.group.rotation.x = -Math.atan2(fore - aft, halfLength * 2) - surge * 0.05
        this.group.rotation.z = Math.atan2(starboard - port, halfBeam * 2) - this.yawRate * 0.28
    }

    #updateWake(delta, time)
    {
        const travelled = Math.abs(this.forwardSpeed) * delta
        this.distanceSinceWake += travelled

        if (Math.abs(this.forwardSpeed) > 1.2 && this.distanceSinceWake > 0.55)
        {
            this.distanceSinceWake = 0

            // A puff off each quarter, so the trail opens into a V.
            for (const side of [-1, 1])
            {
                const puff = this.wakePuffs[this.wakeCursor]
                this.wakeCursor = (this.wakeCursor + 1) % WAKE_COUNT

                const sternOffset = BOAT.length * 0.45
                puff.x = this.position.x - this.forward.x * sternOffset + this.right.x * side * 0.7
                puff.z = this.position.z - this.forward.z * sternOffset + this.right.z * side * 0.7
                puff.age = 0
                puff.life = 2.6 + Math.random() * 1.2
                puff.size = 0.9 + Math.random() * 0.5
            }
        }

        for (let i = 0; i < WAKE_COUNT; i++)
        {
            const puff = this.wakePuffs[i]
            puff.age += delta

            const progress = puff.age / puff.life
            if (progress >= 1)
            {
                this.wakeFades.array[i] = 0
                continue
            }

            // Fade in over the first instant so puffs do not pop into view.
            this.wakeFades.array[i] = Math.min(1, puff.age * 5) * Math.pow(1 - progress, 1.5)

            this.wakeDummy.position.set(puff.x, waterHeight(puff.x, puff.z, time) + 0.07, puff.z)
            this.wakeDummy.scale.setScalar(puff.size + progress * 3.4)
            this.wakeDummy.updateMatrix()
            this.wakeMesh.setMatrixAt(i, this.wakeDummy.matrix)
        }

        this.wakeFades.needsUpdate = true
        this.wakeMesh.instanceMatrix.needsUpdate = true
    }

    get speed()
    {
        return this.forwardSpeed
    }

    /** World-space point off her port side, where boarding happens. */
    boardingPoint(target = new THREE.Vector3())
    {
        return target.copy(this.position).addScaledVector(this.right, -BOAT.beam * 0.6)
    }
}
