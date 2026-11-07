import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

/** The room behind a triple castle's door. Served out of static/. */
const INTERIOR_URL = '/models/interior.glb'

/** The file is the size of a doorway. Twice that fills the castle room. */
const INTERIOR_SCALE = 2

/** Wall and floor samples, in metres. Small enough that a curve stays solid. */
const CELL = 0.4

/**
 * Past the camera's far plane from every castle, so the room is not a
 * landmark in the sky. The player is moved here and back.
 */
const ORIGIN_X = 8000

const _a = new THREE.Vector3()
const _b = new THREE.Vector3()
const _c = new THREE.Vector3()

/**
 * Points across a triangle, so a wall box follows the stone instead of
 * filling the chord. A curved shell's bounding box is most of the room,
 * and standing in that box is how a visitor gets stuck inside the wall.
 */
function scatterTriangle(ax, az, bx, bz, cx, cz, mark)
{
    const span = Math.max(
        Math.hypot(bx - ax, bz - az),
        Math.hypot(cx - bx, cz - bz),
        Math.hypot(ax - cx, az - cz)
    )
    const steps = Math.max(1, Math.ceil(span / (CELL * 0.55)))

    for (let iu = 0; iu <= steps; iu++)
    {
        for (let iv = 0; iv <= steps - iu; iv++)
        {
            const u = iu / steps
            const v = iv / steps
            const w = 1 - u - v
            mark(ax * w + bx * u + cx * v, az * w + bz * u + cz * v)
        }
    }
}

/**
 * Floor and walls of the room, in the group's own space. Samples sit on the
 * mesh, so the inside of the tower stays open and the shell stays closed.
 */
function measureRoom(root, space)
{
    const floorHeights = new Map()
    const wallCells = new Map()
    const intoLocal = new THREE.Matrix4()

    root.updateWorldMatrix(true, true)
    space.updateWorldMatrix(true, false)
    intoLocal.copy(space.matrixWorld).invert()

    root.traverse((child) =>
    {
        if (!child.isMesh) return

        // The ironwork is detail on the leaf. Its boxes would fuzz the doorway.
        const materialName = child.material?.name ?? ''
        if (materialName.includes('Iron')) return

        const position = child.geometry.attributes.position
        const index = child.geometry.index
        if (!position) return

        const triangleCount = index ? index.count / 3 : position.count / 3

        for (let triangle = 0; triangle < triangleCount; triangle++)
        {
            const ia = index ? index.getX(triangle * 3) : triangle * 3
            const ib = index ? index.getX(triangle * 3 + 1) : triangle * 3 + 1
            const ic = index ? index.getX(triangle * 3 + 2) : triangle * 3 + 2

            _a.fromBufferAttribute(position, ia).applyMatrix4(child.matrixWorld).applyMatrix4(intoLocal)
            _b.fromBufferAttribute(position, ib).applyMatrix4(child.matrixWorld).applyMatrix4(intoLocal)
            _c.fromBufferAttribute(position, ic).applyMatrix4(child.matrixWorld).applyMatrix4(intoLocal)

            const abx = _b.x - _a.x
            const aby = _b.y - _a.y
            const abz = _b.z - _a.z
            const acx = _c.x - _a.x
            const acy = _c.y - _a.y
            const acz = _c.z - _a.z
            const nx = aby * acz - abz * acy
            const ny = abz * acx - abx * acz
            const nz = abx * acy - aby * acx
            const length = Math.hypot(nx, ny, nz)
            if (length < 1e-8) continue

            const minY = Math.min(_a.y, _b.y, _c.y)
            const maxY = Math.max(_a.y, _b.y, _c.y)
            const up = ny / length

            if (up > 0.72 && maxY < 0.55)
            {
                scatterTriangle(_a.x, _a.z, _b.x, _b.z, _c.x, _c.z, (x, z) =>
                {
                    const key = `${Math.round(x / CELL)},${Math.round(z / CELL)}`
                    const previous = floorHeights.get(key)
                    if (previous === undefined || maxY > previous) floorHeights.set(key, maxY)
                })
            }
            else if (Math.abs(up) < 0.5 && maxY > 0.4 && minY < 1.8)
            {
                scatterTriangle(_a.x, _a.z, _b.x, _b.z, _c.x, _c.z, (x, z) =>
                {
                    const key = `${Math.round(x / CELL)},${Math.round(z / CELL)}`
                    const previous = wallCells.get(key)
                    if (!previous) wallCells.set(key, { minY, maxY })
                    else
                    {
                        previous.minY = Math.min(previous.minY, minY)
                        previous.maxY = Math.max(previous.maxY, maxY)
                    }
                })
            }
        }
    })

    const floors = []
    const half = CELL * 0.5
    const floorPad = 0.22

    for (const [key, height] of floorHeights)
    {
        const [ix, iz] = key.split(',').map(Number)
        const x = ix * CELL
        const z = iz * CELL
        floors.push(new THREE.Box3(
            new THREE.Vector3(x - half - floorPad, height - 1.2, z - half - floorPad),
            new THREE.Vector3(x + half + floorPad, height, z + half + floorPad)
        ))
    }

    const walls = []
    const wallPad = 0.12

    for (const [key, span] of wallCells)
    {
        const [ix, iz] = key.split(',').map(Number)
        const x = ix * CELL
        const z = iz * CELL
        // A face that starts near the floor blocks the body. One that starts
        // overhead does not grow a column down through the room.
        const low = span.minY < 1.6 ? Math.min(span.minY, -0.15) : span.minY
        const high = Math.max(span.maxY, low + 2.4)
        walls.push(new THREE.Box3(
            new THREE.Vector3(x - half - wallPad, low, z - half - wallPad),
            new THREE.Vector3(x + half + wallPad, high, z + half + wallPad)
        ))
    }

    return { floors, walls }
}

export class Interior
{
    constructor()
    {
        this.group = new THREE.Group()
        this.group.position.set(ORIGIN_X, 0, 0)

        /** Standable tops, in this group's local space. */
        this.platforms = []
        /** AABBs that push the player back in XZ, in local space. */
        this.walls = []

        this.loaded = false
        /** Just inside the door, on the floor, in local metres. */
        this.entrance = new THREE.Vector3()
        /** Looking into the room, away from the door. Yaw 0 faces -Z. */
        this.entranceYaw = 0
        /** The strip of floor in front of the door. Null until the mesh arrives. */
        this.exit = null

        this.ready = this.#load()
    }

    /** World XZ into this room's plan. The group is not turned. */
    worldToLocal(x, z)
    {
        return {
            x: x - this.group.position.x,
            z: z - this.group.position.z
        }
    }

    /** Local plan point back into world XZ. */
    localToWorld(x, z)
    {
        return {
            x: this.group.position.x + x,
            z: this.group.position.z + z
        }
    }

    /**
     * Floor height where world (x, z) is over this room, otherwise -Infinity.
     */
    surfaceAt(x, z, ceiling = Infinity)
    {
        const local = this.worldToLocal(x, z)
        let height = Number.NEGATIVE_INFINITY

        for (const box of this.platforms)
        {
            if (local.x < box.min.x || local.x > box.max.x || local.z < box.min.z || local.z > box.max.z) continue
            if (box.max.y > ceiling) continue
            if (box.max.y > height) height = box.max.y
        }

        return height
    }

    /** True when a visitor on foot is standing at the inside of the door. */
    atExit(position)
    {
        const door = this.exit
        if (!door) return false

        const local = this.worldToLocal(position.x, position.z)
        return local.x >= door.minX && local.x <= door.maxX
            && local.z >= door.minZ && local.z <= door.maxZ
            && position.y >= door.minY && position.y <= door.maxY
    }

    /** World position just inside the door. */
    entrancePoint(target)
    {
        const placed = this.localToWorld(this.entrance.x, this.entrance.z)
        target.set(placed.x, this.entrance.y, placed.z)
        return this.entranceYaw
    }

    async #load()
    {
        try
        {
            const gltf = await new GLTFLoader().loadAsync(INTERIOR_URL)
            const root = gltf.scene

            root.traverse((child) =>
            {
                if (!child.isMesh) return

                child.castShadow = true
                child.receiveShadow = true

                const materials = Array.isArray(child.material) ? child.material : [child.material]
                for (const material of materials)
                {
                    if (!material) continue
                    // Keep the authored facing. Both sides of the stone show,
                    // so a pier beside the door does not vanish.
                    material.side = child.name === 'interior' || child.parent?.name === 'interior'
                        ? THREE.DoubleSide
                        : THREE.FrontSide
                }
            })

            // The door stays where the file puts it, in the stone opening.
            const shell = root.getObjectByName('interior')
            root.scale.setScalar(INTERIOR_SCALE)
            root.updateWorldMatrix(true, true)

            let floorY = Infinity
            if (shell)
            {
                const bounds = new THREE.Box3().setFromObject(shell)
                floorY = bounds.min.y
            }

            if (Number.isFinite(floorY)) root.position.y -= floorY

            this.group.add(root)

            const { floors, walls } = measureRoom(root, this.group)
            this.platforms = floors
            this.walls = walls

            const door = root.children.find((child) => child.name !== 'interior')
            if (door) this.#placeDoor(door)
            this.#sealEdges()

            this.loaded = true
            console.info(`interior: ${floors.length} floor pieces, ${walls.length} wall pieces`)
        }
        catch (error)
        {
            console.warn('Interior model failed to load.', error)
        }
    }

    /** The doorway is the wooden leaf. Spawn further into the room than the trigger. */
    #placeDoor(door)
    {
        this.group.updateWorldMatrix(true, true)
        const box = new THREE.Box3().setFromObject(door)
        const intoLocal = new THREE.Matrix4().copy(this.group.matrixWorld).invert()
        box.applyMatrix4(intoLocal)

        let sumX = 0
        let sumZ = 0
        for (const platform of this.platforms)
        {
            sumX += (platform.min.x + platform.max.x) * 0.5
            sumZ += (platform.min.z + platform.max.z) * 0.5
        }
        const roomX = this.platforms.length ? sumX / this.platforms.length : 0
        const roomZ = this.platforms.length ? sumZ / this.platforms.length : 0
        const centerX = (box.min.x + box.max.x) * 0.5
        const centerZ = (box.min.z + box.max.z) * 0.5
        // Step through the leaf's thin side, toward the middle of the room.
        const thinAlongX = (box.max.x - box.min.x) < (box.max.z - box.min.z)
        const ix = thinAlongX ? Math.sign(roomX - centerX) || 1 : 0
        const iz = thinAlongX ? 0 : Math.sign(roomZ - centerZ) || -1

        // How far the leaf reaches along that inward axis.
        const reach = Math.abs(ix) * (box.max.x - box.min.x) + Math.abs(iz) * (box.max.z - box.min.z)
        const halfLeaf = reach * 0.5
        const across = Math.abs(ix) * (box.max.z - box.min.z) + Math.abs(iz) * (box.max.x - box.min.x)
        const halfWidth = across * 0.5 * 0.72

        const near = halfLeaf + 0.2
        const far = halfLeaf + 1.35
        const sideX = -iz
        const sideZ = ix
        const corners = [near, far].flatMap((depth) => [-halfWidth, halfWidth].map((side) => ({
            x: centerX + ix * depth + sideX * side,
            z: centerZ + iz * depth + sideZ * side
        })))

        this.exit = {
            minX: Math.min(...corners.map((corner) => corner.x)),
            maxX: Math.max(...corners.map((corner) => corner.x)),
            minZ: Math.min(...corners.map((corner) => corner.z)),
            maxZ: Math.max(...corners.map((corner) => corner.z)),
            minY: -0.2,
            maxY: 3
        }
        this.leaf = {
            minX: box.min.x - 0.35,
            maxX: box.max.x + 0.35,
            minZ: box.min.z - 0.35,
            maxZ: box.max.z + 0.35
        }

        let spawnX = centerX + ix * (halfLeaf + 1.6)
        let spawnZ = centerZ + iz * (halfLeaf + 1.6)
        if (!this.#openFloor(spawnX, spawnZ))
        {
            let found = false
            for (let depth = halfLeaf + 0.8; depth < halfLeaf + 3.2 && !found; depth += 0.25)
            {
                for (const side of [0, 0.45, -0.45, 0.9, -0.9, 1.4, -1.4])
                {
                    const x = centerX + ix * depth - iz * side
                    const z = centerZ + iz * depth + ix * side
                    if (!this.#openFloor(x, z)) continue
                    spawnX = x
                    spawnZ = z
                    found = true
                    break
                }
            }
        }

        const world = this.localToWorld(spawnX, spawnZ)
        const floor = this.surfaceAt(world.x, world.z)
        this.entrance.set(spawnX, Number.isFinite(floor) ? floor : 0, spawnZ)
        // Yaw 0 looks down -Z. Face further into the room, away from the leaf.
        this.entranceYaw = Math.atan2(-ix, -iz)
    }

    /** Clear stone underfoot, and not inside a wall. */
    #openFloor(x, z)
    {
        const world = this.localToWorld(x, z)
        if (!Number.isFinite(this.surfaceAt(world.x, world.z))) return false

        for (const box of this.walls)
        {
            const closestX = THREE.MathUtils.clamp(x, box.min.x, box.max.x)
            const closestZ = THREE.MathUtils.clamp(z, box.min.z, box.max.z)
            if (Math.hypot(x - closestX, z - closestZ) < 0.55) return false
        }

        return true
    }

    /**
     * The shell is open along one side. A rail there keeps a step off the
     * stone from being a fall, and it stays clear of the door.
     */
    #sealEdges()
    {
        const door = this.leaf ?? this.exit

        for (const box of this.platforms)
        {
            const midX = (box.min.x + box.max.x) * 0.5
            const midZ = (box.min.z + box.max.z) * 0.5
            const edges = [
                [box.min.x - 0.28, midZ, box.min.x - 0.08, box.min.z, box.min.x + 0.02, box.max.z],
                [box.max.x + 0.28, midZ, box.max.x - 0.02, box.min.z, box.max.x + 0.08, box.max.z],
                [midX, box.min.z - 0.28, box.min.x, box.min.z - 0.08, box.max.x, box.min.z + 0.02],
                [midX, box.max.z + 0.28, box.min.x, box.max.z - 0.02, box.max.x, box.max.z + 0.08]
            ]

            for (const [probeX, probeZ, minX, minZ, maxX, maxZ] of edges)
            {
                const world = this.localToWorld(probeX, probeZ)
                if (Number.isFinite(this.surfaceAt(world.x, world.z))) continue

                if (door
                    && maxX > door.minX && minX < door.maxX
                    && maxZ > door.minZ && minZ < door.maxZ + 0.35) continue

                this.walls.push(new THREE.Box3(
                    new THREE.Vector3(Math.min(minX, maxX), -0.2, Math.min(minZ, maxZ)),
                    new THREE.Vector3(Math.max(minX, maxX), 3.6, Math.max(minZ, maxZ))
                ))
            }
        }
    }
}
