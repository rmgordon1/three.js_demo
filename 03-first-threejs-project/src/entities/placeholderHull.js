import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { BOAT } from './dimensions.js'

/**
 * A procedurally lofted motorboat, used as a stand-in until the real model
 * finishes loading and as the fallback if it never does. The hull is a loft
 * over analytic beam, rocker and sheer curves.
 */

const STATIONS = 32
const RING = 26

/** Widest amidships, rounded transom, fine entry at the stem. */
function beamFraction(u)
{
    if (u <= 0.35) return 0.86 + 0.14 * (u / 0.35)
    const q = (u - 0.35) / 0.65
    return Math.max(0.02, Math.pow(1 - Math.pow(q, 2.2), 0.6))
}

/** Keel rocker: deepest just aft of amidships, rising to the stem. */
function draftFraction(u)
{
    const aft = 0.55 + 0.45 * Math.min(1, u / 0.28)
    const forward = u <= 0.55 ? 1 : 1 - 0.92 * Math.pow((u - 0.55) / 0.45, 2)
    return aft * forward
}

/** Sheer line sweeping up toward the bow. */
function sheerFraction(u)
{
    return 0.92 + 0.42 * Math.pow(u, 1.8)
}

/**
 * One cross-section, walked from the port sheer, down the side, around the
 * keel and back up to the starboard sheer.
 */
function section(halfBeam, keelDepth, sheer, t)
{
    const SIDE = 0.16
    const shoulderY = -keelDepth * 0.14

    if (t < SIDE)
    {
        const k = t / SIDE
        return [-halfBeam * (0.9 + 0.1 * k), sheer + (shoulderY - sheer) * k]
    }

    if (t > 1 - SIDE)
    {
        const k = (1 - t) / SIDE
        return [halfBeam * (0.9 + 0.1 * k), sheer + (shoulderY - sheer) * k]
    }

    const across = ((t - SIDE) / (1 - 2 * SIDE)) * 2 - 1
    const exponent = 2.4
    const y = shoulderY - (keelDepth + shoulderY) * Math.pow(1 - Math.pow(Math.abs(across), exponent), 1 / exponent)

    return [across * halfBeam, y]
}

function buildHull()
{
    const positions = []
    const rings = []

    for (let i = 0; i <= STATIONS; i++)
    {
        const u = i / STATIONS
        const halfBeam = (BOAT.beam / 2) * beamFraction(u)
        const keelDepth = BOAT.draft * draftFraction(u)
        const sheer = BOAT.freeboard * sheerFraction(u)
        const z = -BOAT.length / 2 + u * BOAT.length

        const ring = []
        for (let j = 0; j <= RING; j++)
        {
            const [x, y] = section(halfBeam, keelDepth, sheer, j / RING)
            ring.push(positions.length / 3)
            positions.push(x, y, z)
        }
        rings.push(ring)
    }

    const indices = []
    for (let i = 0; i < STATIONS; i++)
    {
        for (let j = 0; j < RING; j++)
        {
            const a = rings[i][j]
            const b = rings[i][j + 1]
            const c = rings[i + 1][j + 1]
            const d = rings[i + 1][j]
            indices.push(a, b, c, a, c, d)
        }
    }

    // Flat transom closing the stern ring.
    const sternZ = -BOAT.length / 2
    const centerIndex = positions.length / 3
    positions.push(0, (BOAT.freeboard * sheerFraction(0) - BOAT.draft * draftFraction(0)) / 2, sternZ)

    for (let j = 0; j < RING; j++)
    {
        indices.push(centerIndex, rings[0][j + 1], rings[0][j])
    }
    indices.push(centerIndex, rings[0][0], rings[0][RING])

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setIndex(indices)
    geometry.computeVertexNormals()

    return geometry
}

/** Quads between a port edge and a starboard edge, facing up. */
function loftStrip(port, starboard)
{
    const positions = []
    const indices = []

    for (let i = 0; i < port.length; i++)
    {
        positions.push(port[i].x, port[i].y, port[i].z)
        positions.push(starboard[i].x, starboard[i].y, starboard[i].z)
    }

    for (let i = 0; i < port.length - 1; i++)
    {
        const a = i * 2
        const b = a + 1
        const c = a + 3
        const d = a + 2
        indices.push(a, d, c, a, c, b)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setIndex(indices)
    geometry.computeVertexNormals()

    return geometry
}

function sheerPoint(u, side, inset = 0)
{
    const halfBeam = (BOAT.beam / 2) * beamFraction(u) - inset
    return new THREE.Vector3(
        side * Math.max(0, halfBeam),
        BOAT.freeboard * sheerFraction(u),
        -BOAT.length / 2 + u * BOAT.length
    )
}

function buildDecks()
{
    const geometries = []

    // Gunwale cap running the length of both sides.
    for (const side of [-1, 1])
    {
        const outer = []
        const inner = []
        for (let i = 0; i <= STATIONS; i++)
        {
            const u = i / STATIONS
            outer.push(sheerPoint(u, side))
            inner.push(sheerPoint(u, side, 0.15))
        }
        geometries.push(side < 0 ? loftStrip(outer, inner) : loftStrip(inner, outer))
    }

    // Foredeck closing over the bow.
    const port = []
    const starboard = []
    for (let i = 0; i <= 12; i++)
    {
        const u = 0.64 + (i / 12) * 0.36
        port.push(sheerPoint(u, -1, 0.14))
        starboard.push(sheerPoint(u, 1, 0.14))
    }
    geometries.push(loftStrip(port, starboard))

    return mergeGeometries(geometries)
}

function buildFittings()
{
    const dark = []
    const light = []
    const metal = []

    const floorY = -0.2

    // Cockpit floor and the bulkhead under the foredeck.
    const floor = new THREE.BoxGeometry(BOAT.beam * 0.78, 0.08, BOAT.length * 0.52)
    floor.translate(0, floorY, -0.35)
    dark.push(floor)

    // Console with a windscreen lip.
    const console_ = new THREE.BoxGeometry(0.78, 0.9, 0.5)
    console_.translate(0, floorY + 0.49, 0.5)
    light.push(console_)

    const screen = new THREE.BoxGeometry(0.72, 0.3, 0.05)
    screen.rotateX(-0.22)
    screen.translate(0, floorY + 1.05, 0.44)
    light.push(screen)

    // Wheel: a rim plus spokes, raked back like a real helm.
    const wheel = new THREE.TorusGeometry(0.17, 0.027, 8, 20)
    const rake = new THREE.Matrix4().makeRotationX(0.35)
    wheel.applyMatrix4(rake)
    wheel.translate(0, floorY + 0.95, 0.26)
    metal.push(wheel)

    for (let i = 0; i < 3; i++)
    {
        const spoke = new THREE.BoxGeometry(0.03, 0.32, 0.02)
        spoke.rotateZ((i / 3) * Math.PI)
        spoke.applyMatrix4(rake)
        spoke.translate(0, floorY + 0.95, 0.26)
        metal.push(spoke)
    }

    // Helm seat and a stern bench.
    const seat = new THREE.BoxGeometry(0.66, 0.12, 0.5)
    seat.translate(0, floorY + 0.46, -0.3)
    light.push(seat)

    const seatBase = new THREE.BoxGeometry(0.3, 0.46, 0.3)
    seatBase.translate(0, floorY + 0.23, -0.3)
    dark.push(seatBase)

    const bench = new THREE.BoxGeometry(BOAT.beam * 0.68, 0.12, 0.44)
    bench.translate(0, floorY + 0.44, -2.1)
    light.push(bench)

    for (const x of [-0.6, 0.6])
    {
        const leg = new THREE.BoxGeometry(0.14, 0.44, 0.34)
        leg.translate(x, floorY + 0.22, -2.1)
        dark.push(leg)
    }

    // Outboard motor hanging off the transom.
    const cowling = new THREE.BoxGeometry(0.44, 0.52, 0.4)
    cowling.translate(0, 0.28, -BOAT.length / 2 - 0.2)
    dark.push(cowling)

    const leg = new THREE.BoxGeometry(0.16, 0.72, 0.22)
    leg.translate(0, -0.14, -BOAT.length / 2 - 0.2)
    dark.push(leg)

    const skeg = new THREE.BoxGeometry(0.14, 0.26, 0.52)
    skeg.translate(0, -0.52, -BOAT.length / 2 - 0.26)
    dark.push(skeg)

    const prop = new THREE.CylinderGeometry(0.03, 0.03, 0.16, 8)
    prop.rotateX(Math.PI / 2)
    prop.translate(0, -0.52, -BOAT.length / 2 - 0.52)
    metal.push(prop)

    // Bow rail.
    for (const side of [-1, 1])
    {
        const stanchion = new THREE.CylinderGeometry(0.022, 0.022, 0.4, 6)
        stanchion.translate(side * 0.42, BOAT.freeboard * sheerFraction(0.82) + 0.2, 2.0)
        metal.push(stanchion)
    }

    const rail = new THREE.BoxGeometry(0.9, 0.035, 0.035)
    rail.translate(0, BOAT.freeboard * sheerFraction(0.82) + 0.4, 2.0)
    metal.push(rail)

    // Fenders on the port side, where she comes alongside.
    for (const z of [-0.6, 0.9])
    {
        const fender = new THREE.CapsuleGeometry(0.11, 0.3, 4, 8)
        fender.translate(-(BOAT.beam / 2) * beamFraction(0.5) - 0.05, 0.3, z)
        light.push(fender)
    }

    return {
        dark: mergeGeometries(dark),
        light: mergeGeometries(light),
        metal: mergeGeometries(metal)
    }
}

/** Stand-in vessel, sized to the same envelope as the real model. */
export function createPlaceholderHull()
{
    const group = new THREE.Group()

    const hull = new THREE.Mesh(buildHull(), new THREE.MeshStandardMaterial({
        color: '#eef1f4',
        roughness: 0.38,
        metalness: 0.05
    }))
    hull.castShadow = true
    group.add(hull)

    const decks = new THREE.Mesh(buildDecks(), new THREE.MeshStandardMaterial({
        color: '#c69a62',
        roughness: 0.7,
        side: THREE.DoubleSide
    }))
    decks.castShadow = true
    group.add(decks)

    const fittings = buildFittings()
    const parts = [
        [fittings.dark, new THREE.MeshStandardMaterial({ color: '#2d3237', roughness: 0.55 })],
        [fittings.light, new THREE.MeshStandardMaterial({ color: '#dfe3e7', roughness: 0.6 })],
        [fittings.metal, new THREE.MeshStandardMaterial({ color: '#9aa3aa', roughness: 0.3, metalness: 0.85 })]
    ]

    for (const [geometry, material] of parts)
    {
        const mesh = new THREE.Mesh(geometry, material)
        mesh.castShadow = true
        mesh.receiveShadow = true
        group.add(mesh)
    }

    return group
}

/** Exposed so the smoke tests can check the loft directly. */
export { buildHull }
