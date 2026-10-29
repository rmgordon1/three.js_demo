import * as THREE from 'three'
import { waterHeight, WATER_LEVEL } from '../world/waves.js'

const EYE_HEIGHT = 1.62
const SWIM_EYE_HEIGHT = 0.8
/** Keeps the swimming camera clear of the waterline as crests roll past. */
const SWIM_EYE_CLEARANCE = 0.22
const RADIUS = 0.36
const WALK_SPEED = 3.6
const SPRINT_SPEED = 6.4
const SWIM_SPEED = 1.5
const GRAVITY = 22
const JUMP_SPEED = 6.4
/** Tall enough for the castle's scaled steps (half a metre) with a little spare. */
const STEP_UP = 0.72
const LOOK_SENSITIVITY = 0.0022
const PITCH_LIMIT = Math.PI / 2 - 0.05
const RESPAWN_DELAY = 2.5

export class Player
{
    /**
     * @param {{ platforms: THREE.Box3[], walls: THREE.Box3[], castles?: { surfaceAt: Function, worldToLocal: Function, localToWorld: Function, walls: THREE.Box3[] }[], terrainHeight: (x: number, z: number) => number }} world
     */
    constructor(world, spawn)
    {
        this.world = world
        this.spawn = spawn.clone()

        this.position = spawn.clone()
        this.velocityY = 0
        this.spawnYaw = world.spawnYaw ?? 0
        this.yaw = this.spawnYaw
        this.pitch = 0
        this.onGround = true
        this.inWater = false
        /** Worlds with no sea leave this false, so falling is just falling. */
        this.swims = world.swims !== false
        /** Below this height the caller should respawn. Null skips the check. */
        this.voidY = world.voidY ?? null
        this.submergedFor = 0
        this.bobPhase = 0
        this.bobOffset = 0
        this.surfaceHeight = 0
    }

    respawn()
    {
        this.position.copy(this.spawn)
        this.yaw = this.spawnYaw
        this.velocityY = 0
        this.inWater = false
        this.submergedFor = 0
    }

    look(deltaX, deltaY)
    {
        this.yaw -= deltaX * LOOK_SENSITIVITY
        this.pitch = THREE.MathUtils.clamp(this.pitch - deltaY * LOOK_SENSITIVITY, -PITCH_LIMIT, PITCH_LIMIT)
    }

    update(delta, input, time)
    {
        const forwardInput = input.axis('KeyW', 'KeyS')
        const strafeInput = input.axis('KeyD', 'KeyA')

        const forwardX = -Math.sin(this.yaw)
        const forwardZ = -Math.cos(this.yaw)
        const rightX = Math.cos(this.yaw)
        const rightZ = -Math.sin(this.yaw)

        let moveX = forwardX * forwardInput + rightX * strafeInput
        let moveZ = forwardZ * forwardInput + rightZ * strafeInput
        const magnitude = Math.hypot(moveX, moveZ)

        if (magnitude > 0)
        {
            moveX /= magnitude
            moveZ /= magnitude
        }

        const sprinting = input.isHeld('ShiftLeft') || input.isHeld('ShiftRight')
        const speed = this.inWater ? SWIM_SPEED : (sprinting ? SPRINT_SPEED : WALK_SPEED)

        let nextX = this.position.x + moveX * speed * delta
        let nextZ = this.position.z + moveZ * speed * delta

        const resolved = this.#resolveWalls(nextX, nextZ, this.position.y)
        nextX = resolved.x
        nextZ = resolved.z

        const ground = this.#groundHeight(nextX, nextZ, this.position.y)
        const surface = waterHeight(nextX, nextZ, time)
        this.surfaceHeight = surface

        this.position.x = nextX
        this.position.z = nextZ

        if (this.inWater)
        {
            this.#updateSwimming(delta, surface, ground)
        }
        else
        {
            this.#updateWalking(delta, input, ground, surface)
        }

        this.#updateHeadBob(delta, magnitude > 0 ? speed : 0)

        const drowned = this.swims && this.inWater && this.submergedFor > RESPAWN_DELAY
        const fell = this.voidY !== null && this.position.y < this.voidY
        return drowned || fell
    }

    #updateWalking(delta, input, ground, surface)
    {
        const wantsJump = input.wasPressed('Space')

        if (this.onGround && wantsJump)
        {
            this.velocityY = JUMP_SPEED
            this.onGround = false
        }

        this.velocityY -= GRAVITY * delta
        this.position.y += this.velocityY * delta

        if (this.position.y <= ground)
        {
            this.position.y = ground
            this.velocityY = 0
            this.onGround = true
        }
        else
        {
            this.onGround = false
        }

        // Nothing underfoot and the sea is up here: you are in the drink.
        if (this.swims && ground < WATER_LEVEL - 1 && this.position.y < surface)
        {
            this.inWater = true
            this.submergedFor = 0
        }
    }

    #updateSwimming(delta, surface, ground)
    {
        this.submergedFor += delta

        // Buoyancy pulls the head back to the surface.
        const target = surface - 0.55
        this.position.y += (target - this.position.y) * Math.min(1, 6 * delta)
        this.velocityY = 0

        if (ground > WATER_LEVEL - 0.6)
        {
            this.position.y = Math.max(this.position.y, ground)
            this.inWater = false
            this.onGround = true
        }
    }

    #updateHeadBob(delta, speed)
    {
        if (speed > 0 && this.onGround && !this.inWater)
        {
            this.bobPhase += delta * speed * 1.9
            const target = Math.sin(this.bobPhase) * 0.042 * (speed / WALK_SPEED)
            this.bobOffset += (target - this.bobOffset) * Math.min(1, 12 * delta)
        }
        else
        {
            this.bobOffset += (0 - this.bobOffset) * Math.min(1, 8 * delta)
        }
    }

    #groundHeight(x, z, feetY)
    {
        let highest = this.world.terrainHeight(x, z)
        highest = this.#highestPlatform(this.world.platforms, x, z, feetY, highest)

        // Copies sat on the diagonals. Their boxes live in each castle's own plan.
        if (this.world.castles)
        {
            for (const castle of this.world.castles)
            {
                const top = castle.surfaceAt(x, z)
                if (top <= feetY + STEP_UP && top > highest) highest = top
            }
        }

        return highest
    }

    #highestPlatform(boxes, x, z, feetY, highest)
    {
        for (const box of boxes)
        {
            if (x < box.min.x || x > box.max.x || z < box.min.z || z > box.max.z) continue

            const top = box.max.y
            if (top <= feetY + STEP_UP && top > highest) highest = top
        }

        return highest
    }

    #resolveWalls(x, z, feetY)
    {
        const resolved = this.#pushOutOfWalls(this.world.walls, x, z, feetY)

        if (this.world.castles)
        {
            for (const castle of this.world.castles)
            {
                const local = castle.worldToLocal(resolved.x, resolved.z)
                const blocked = this.#pushOutOfWalls(castle.walls, local.x, local.z, feetY)
                const world = castle.localToWorld(blocked.x, blocked.z)
                resolved.x = world.x
                resolved.z = world.z
            }
        }

        return resolved
    }

    #pushOutOfWalls(boxes, x, z, feetY)
    {
        for (const box of boxes)
        {
            // Jumped clear of it, or swimming below it.
            if (feetY > box.max.y - 0.1 || feetY < box.min.y - 0.6) continue

            const closestX = THREE.MathUtils.clamp(x, box.min.x, box.max.x)
            const closestZ = THREE.MathUtils.clamp(z, box.min.z, box.max.z)
            const offsetX = x - closestX
            const offsetZ = z - closestZ
            const distanceSquared = offsetX * offsetX + offsetZ * offsetZ

            if (distanceSquared > RADIUS * RADIUS) continue

            if (distanceSquared > 1e-6)
            {
                const distance = Math.sqrt(distanceSquared)
                x = closestX + (offsetX / distance) * RADIUS
                z = closestZ + (offsetZ / distance) * RADIUS
            }
            else
            {
                // Dead centre inside the box: eject along the shallowest axis.
                const toMinX = x - box.min.x
                const toMaxX = box.max.x - x
                const toMinZ = z - box.min.z
                const toMaxZ = box.max.z - z
                const smallest = Math.min(toMinX, toMaxX, toMinZ, toMaxZ)

                if (smallest === toMinX) x = box.min.x - RADIUS
                else if (smallest === toMaxX) x = box.max.x + RADIUS
                else if (smallest === toMinZ) z = box.min.z - RADIUS
                else z = box.max.z + RADIUS
            }
        }

        return { x, z }
    }

    applyToCamera(camera)
    {
        let eye = this.position.y + this.bobOffset

        if (this.inWater)
        {
            // The body lags the surface, so hold the eye above the waterline
            // explicitly. Dropping under it would cull the single-sided water
            // sheet and the ocean would vanish.
            eye = Math.max(eye + SWIM_EYE_HEIGHT, this.surfaceHeight + SWIM_EYE_CLEARANCE)
        }
        else
        {
            eye += EYE_HEIGHT
        }

        camera.position.set(this.position.x, eye, this.position.z)
        camera.rotation.order = 'YXZ'
        camera.rotation.set(this.pitch, this.yaw, 0)
    }
}
