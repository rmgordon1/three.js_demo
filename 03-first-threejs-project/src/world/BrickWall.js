import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { ELEPHANT } from '../entities/Elephant.js'

/** One brick from static/brick.glb. The wall in that file is this brick, repeated. */
const BRICK_URL = '/brick.glb'

/** Thickness, height, and length of the authored brick, in metres. */
export const BRICK = { width: 0.75, height: 0.75, length: 2 }

/**
 * Centres of the wall in brick.glb. Ten courses of five, in a running bond:
 * every other course sits half a brick along, with a finger of mortar between.
 */
const COURSE_Y = [0, 0.85, 1.648, 2.498, 3.296, 4.146, 4.944, 5.794, 6.592, 7.442]
const EVEN_Z = -8.28
const ODD_Z = -9.28
const PITCH_Z = 2.07
const PER_COURSE = 5

/** How fast a loose brick sheds its speed. No gravity: friction is the only pull. */
const FRICTION = 0.9

/** A loose brick is gone once it has drifted this long, or once it has nearly stopped. */
const DRIFT_LIFE = 2.8
const REST_SPEED = 0.3

/** She has to be moving. Parked against the wall, the bricks stay put. */
const STRIKE_SPEED = 2

const _matrix = new THREE.Matrix4()
const _inverse = new THREE.Matrix4()
const _relative = new THREE.Quaternion()
const _point = new THREE.Vector3()
const _body = new THREE.Vector3()
const _away = new THREE.Vector3()
const _axis = new THREE.Vector3()
const _half = new THREE.Vector3()
const _dummy = new THREE.Object3D()

/** One slot per brick in the authored wall. */
export function brickSlots()
{
    const slots = []

    for (let course = 0; course < COURSE_Y.length; course++)
    {
        const z0 = course % 2 === 0 ? EVEN_Z : ODD_Z

        for (let index = 0; index < PER_COURSE; index++)
        {
            slots.push(new THREE.Vector3(0, COURSE_Y[course], z0 + index * PITCH_Z))
        }
    }

    return slots
}

/**
 * The running-bond wall, one instanced brick. She flies through it. A brick
 * she hits takes her speed along the line from her chest through that brick,
 * spins a little, and drifts. Friction bleeds the speed off, and then the
 * brick is gone. There is no gravity.
 */
export class BrickWall
{
    constructor({ loadModel = true } = {})
    {
        this.group = new THREE.Group()
        this.slots = brickSlots()
        this.bricks = this.slots.map((slot) => ({
            position: slot.clone(),
            quaternion: new THREE.Quaternion(),
            velocity: new THREE.Vector3(),
            axis: new THREE.Vector3(0, 1, 0),
            spin: 0,
            angle: 0,
            loose: false,
            struck: false,
            age: 0,
            alive: true
        }))

        this.mesh = new THREE.InstancedMesh(
            new THREE.BoxGeometry(BRICK.width, BRICK.height, BRICK.length),
            new THREE.MeshStandardMaterial({ color: '#8a4b3c', roughness: 0.92 }),
            this.bricks.length
        )
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
        // Loose bricks leave the wall. A fixed bound would hide them.
        this.mesh.frustumCulled = false
        this.group.add(this.mesh)
        this.#write()

        if (loadModel) this.#load()
    }

    /**
     * Stand the wall across her path, bottom at her feet, centred on her,
     * a short flight out in front.
     */
    placeInFront(berth, yaw, distance = 22)
    {
        const forwardX = Math.sin(yaw)
        const forwardZ = Math.cos(yaw)
        const theta = yaw - Math.PI / 2
        const cos = Math.cos(theta)
        const sin = Math.sin(theta)
        let midZ = 0

        for (const slot of this.slots) midZ += slot.z
        midZ /= this.slots.length

        const offsetX = midZ * sin
        const offsetZ = midZ * cos

        this.group.rotation.y = theta
        this.group.position.set(
            berth.x + forwardX * distance - offsetX,
            berth.y + BRICK.height * 0.5,
            berth.z + forwardZ * distance - offsetZ
        )
    }

    looseCount()
    {
        let count = 0
        for (const brick of this.bricks)
        {
            if (brick.loose) count++
        }
        return count
    }

    update(delta, elephant)
    {
        let dirty = false

        if (elephant && elephant.forwardSpeed > STRIKE_SPEED) dirty = this.#strike(elephant)

        for (const brick of this.bricks)
        {
            if (!brick.loose || !brick.alive) continue

            dirty = true
            brick.age += delta
            const drag = Math.exp(-FRICTION * delta)
            brick.velocity.multiplyScalar(drag)
            brick.spin *= drag
            brick.position.addScaledVector(brick.velocity, delta)
            brick.angle += brick.spin * delta
            brick.quaternion.setFromAxisAngle(brick.axis, brick.angle)

            const settled = brick.age > 0.6 && brick.velocity.length() < REST_SPEED
            if (brick.age >= DRIFT_LIFE || settled) brick.alive = false
        }

        if (dirty) this.#nudge()
        if (dirty) this.#write()
    }

    #load()
    {
        new GLTFLoader().load(BRICK_URL, (gltf) =>
        {
            const source = gltf.scene.getObjectByName('brick')
            if (!source?.isMesh) return

            const geometry = source.geometry.clone()
            geometry.computeBoundingBox()
            const center = geometry.boundingBox.getCenter(new THREE.Vector3())
            geometry.translate(-center.x, -center.y, -center.z)

            this.mesh.geometry.dispose()
            this.mesh.material.dispose()
            this.mesh.geometry = geometry
            this.mesh.material = source.material
        }, undefined, (error) =>
        {
            console.warn('Brick model failed to load; keeping the block.', error)
        })
    }

    /** Give every mortared brick her chest overlaps an impulse, once. */
    #strike(elephant)
    {
        this.group.updateMatrixWorld(true)
        elephant.group.updateMatrixWorld(true)
        _inverse.copy(this.group.matrixWorld).invert()
        _relative.copy(elephant.group.quaternion).invert().multiply(this.group.quaternion)
        _matrix.makeRotationFromQuaternion(_relative)

        const hx = BRICK.width * 0.5
        const hy = BRICK.height * 0.5
        const hz = BRICK.length * 0.5
        const e = _matrix.elements
        _half.set(
            Math.abs(e[0]) * hx + Math.abs(e[4]) * hy + Math.abs(e[8]) * hz,
            Math.abs(e[1]) * hx + Math.abs(e[5]) * hy + Math.abs(e[9]) * hz,
            Math.abs(e[2]) * hx + Math.abs(e[6]) * hy + Math.abs(e[10]) * hz
        )

        _body.set(0, ELEPHANT.back * 0.5, 0)
        elephant.group.localToWorld(_body)

        const speed = Math.max(elephant.forwardSpeed, 4)
        let hit = false

        for (const brick of this.bricks)
        {
            if (brick.loose || !brick.alive) continue

            _point.copy(brick.position)
            this.group.localToWorld(_point)
            const world = _point.clone()
            elephant.group.worldToLocal(_point)

            if (!this.#insideBody(_point)) continue

            _away.copy(world).sub(_body)
            if (_away.lengthSq() < 1e-8) _away.copy(elephant.forward)
            else _away.normalize()

            brick.velocity.copy(_away).transformDirection(_inverse).multiplyScalar(speed * 0.9)
            _axis.crossVectors(elephant.forward, _away)
            if (_axis.lengthSq() < 1e-6) _axis.set(0, 1, 0)
            else _axis.normalize()
            brick.axis.copy(_axis).transformDirection(_inverse)
            brick.spin = speed * 0.8
            brick.angle = 0
            brick.age = 0
            brick.loose = true
            brick.struck = true
            hit = true
        }

        return hit
    }

    #insideBody(local)
    {
        return local.x >= -ELEPHANT.beam * 0.5 - _half.x
            && local.x <= ELEPHANT.beam * 0.5 + _half.x
            && local.y >= -_half.y
            && local.y <= ELEPHANT.back + _half.y
            && local.z >= -ELEPHANT.length * 0.5 - _half.z
            && local.z <= ELEPHANT.length * 0.5 + _half.z
    }

    /** A loose brick that has moved into a neighbour knocks that one free too. */
    #nudge()
    {
        for (const loose of this.bricks)
        {
            if (!loose.struck || !loose.alive) continue
            if (loose.velocity.lengthSq() < 0.25) continue

            for (const other of this.bricks)
            {
                if (other.loose || !other.alive) continue

                const dx = Math.abs(loose.position.x - other.position.x)
                const dy = Math.abs(loose.position.y - other.position.y)
                const dz = Math.abs(loose.position.z - other.position.z)
                if (dx >= BRICK.width || dy >= BRICK.height || dz >= BRICK.length) continue

                other.velocity.copy(loose.velocity).multiplyScalar(0.4)
                other.axis.copy(loose.axis)
                other.spin = loose.spin * 0.4
                other.angle = 0
                other.age = 0
                other.loose = true
            }
        }
    }

    #write()
    {
        for (let index = 0; index < this.bricks.length; index++)
        {
            const brick = this.bricks[index]

            if (!brick.alive)
            {
                _dummy.position.set(0, 0, 0)
                _dummy.quaternion.identity()
                _dummy.scale.setScalar(0)
            }
            else
            {
                _dummy.position.copy(brick.position)
                _dummy.quaternion.copy(brick.quaternion)
                _dummy.scale.setScalar(1)
            }

            _dummy.updateMatrix()
            this.mesh.setMatrixAt(index, _dummy.matrix)
        }

        this.mesh.instanceMatrix.needsUpdate = true
    }
}
