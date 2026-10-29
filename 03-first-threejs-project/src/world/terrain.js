import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js'
import { DOCK } from './Dock.js'

/**
 * Analytic island. The seabed and beach come from a radial profile so the
 * shoreline lands in a predictable place; noise is masked off until well
 * inland, which keeps the beach and the dock footing smooth.
 *
 * ISLAND_SCALE shrinks the footprint. The height stays put, and the centre
 * shifts so the waterline still meets the landward end of the pier.
 */

export const ISLAND_SCALE = 0.5

export const SHORE_RADIUS = 104 * ISLAND_SCALE
export const HILL_RADIUS = 55 * ISLAND_SCALE
export const SEABED_RADIUS = 165 * ISLAND_SCALE
export const SEABED_DEPTH = -13
export const HILL_HEIGHT = 14

const NOISE_OUTER = 96 * ISLAND_SCALE
const NOISE_INNER = 68 * ISLAND_SCALE

/** How much pier sits over the beach at full size, scaled with the island. */
const BEACH_RUN = 10 * ISLAND_SCALE
const SHORE_Z = DOCK.landZ - BEACH_RUN

export const ISLAND_CENTER = { x: 0, z: SHORE_Z + SHORE_RADIUS }

const noise = new ImprovedNoise()

function smoothstep(edge0, edge1, x)
{
    const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
    return t * t * (3 - 2 * t)
}

export function islandRadius(x, z)
{
    const dx = x - ISLAND_CENTER.x
    const dz = z - ISLAND_CENTER.z
    return Math.sqrt(dx * dx + dz * dz)
}

/** Radial profile only — no noise. Mirrored in the water shader for shallows. */
export function terrainProfile(radius)
{
    const land = HILL_HEIGHT * smoothstep(SHORE_RADIUS, HILL_RADIUS, radius)
    const seabed = SEABED_DEPTH * smoothstep(SHORE_RADIUS, SEABED_RADIUS, radius)
    return land + seabed
}

export function terrainHeight(x, z)
{
    const radius = islandRadius(x, z)
    const base = terrainProfile(radius)

    // Hills and detail only inland, so the beach stays a clean ramp.
    const mask = smoothstep(NOISE_OUTER, NOISE_INNER, radius)
    if (mask <= 0) return base

    const frequency = 1 / ISLAND_SCALE
    const hills = noise.noise(x * 0.011 * frequency, z * 0.011 * frequency, 0.3) * 4.2
    const detail = noise.noise(x * 0.047 * frequency, z * 0.047 * frequency, 1.7) * 0.9

    return base + (hills + detail) * mask
}
