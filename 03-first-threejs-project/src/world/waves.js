import * as THREE from 'three'

/**
 * The ocean surface is a sum of directional sine waves. Both the water shader
 * and the boat physics evaluate this same set, so the hull always floats on the
 * surface you can actually see.
 *
 * Vertical-only displacement (no Gerstner horizontal pinch) is a deliberate
 * trade: it keeps height(x, z, t) a direct lookup instead of a search.
 */

export const WATER_LEVEL = 0
const GRAVITY = 9.81

const DEFS = [
    { amplitude: 0.40, wavelength: 44.0, heading: 14 },
    { amplitude: 0.24, wavelength: 25.0, heading: 52 },
    { amplitude: 0.11, wavelength: 12.0, heading: -36 },
    { amplitude: 0.05, wavelength: 6.5, heading: 82 }
]

export const WAVE_COUNT = DEFS.length

const waves = DEFS.map((def) =>
{
    const k = (Math.PI * 2) / def.wavelength
    const heading = THREE.MathUtils.degToRad(def.heading)

    return {
        amplitude: def.amplitude,
        k,
        omega: Math.sqrt(GRAVITY * k), // deep-water dispersion
        dx: Math.cos(heading),
        dz: Math.sin(heading)
    }
})

/** Packed for the shader as (amplitude, wavenumber, angular frequency). */
export const wavePacked = waves.map((w) => new THREE.Vector3(w.amplitude, w.k, w.omega))
export const waveDirections = waves.map((w) => new THREE.Vector2(w.dx, w.dz))

/** Peak-to-trough reach of the whole wave train, used for culling margins. */
export const WAVE_AMPLITUDE_SUM = waves.reduce((sum, w) => sum + w.amplitude, 0)

export function waterHeight(x, z, time)
{
    let height = 0

    for (let i = 0; i < waves.length; i++)
    {
        const w = waves[i]
        height += w.amplitude * Math.sin(w.k * (w.dx * x + w.dz * z) - w.omega * time)
    }

    return height
}

export function waterNormal(x, z, time, target = new THREE.Vector3())
{
    let slopeX = 0
    let slopeZ = 0

    for (let i = 0; i < waves.length; i++)
    {
        const w = waves[i]
        const slope = w.amplitude * w.k * Math.cos(w.k * (w.dx * x + w.dz * z) - w.omega * time)
        slopeX += slope * w.dx
        slopeZ += slope * w.dz
    }

    return target.set(-slopeX, 1, -slopeZ).normalize()
}

export const waveGLSL = /* glsl */`
#define WAVE_COUNT ${WAVE_COUNT}

uniform vec3 uWaves[WAVE_COUNT];      // amplitude, wavenumber, angular frequency
uniform vec2 uWaveDirections[WAVE_COUNT];

float waterHeight(vec2 p, float time)
{
    float height = 0.0;

    for (int i = 0; i < WAVE_COUNT; i++)
    {
        vec3 w = uWaves[i];
        height += w.x * sin(w.y * dot(uWaveDirections[i], p) - w.z * time);
    }

    return height;
}

vec3 waterNormal(vec2 p, float time)
{
    vec2 slope = vec2(0.0);

    for (int i = 0; i < WAVE_COUNT; i++)
    {
        vec3 w = uWaves[i];
        slope += uWaveDirections[i] * (w.x * w.y * cos(w.y * dot(uWaveDirections[i], p) - w.z * time));
    }

    return normalize(vec3(-slope.x, 1.0, -slope.y));
}
`
