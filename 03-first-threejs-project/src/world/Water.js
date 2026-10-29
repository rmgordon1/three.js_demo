import * as THREE from 'three'
import { waveGLSL, wavePacked, waveDirections } from './waves.js'
import { ISLAND_CENTER, SHORE_RADIUS, HILL_RADIUS, SEABED_RADIUS, SEABED_DEPTH, HILL_HEIGHT } from './terrain.js'

const SIZE = 700
const SEGMENTS = 300
const CELL = SIZE / SEGMENTS

const vertexShader = /* glsl */`
uniform float uTime;

varying vec3 vWorldPosition;
varying vec3 vSurfaceNormal;

${waveGLSL}

void main()
{
    vec4 world = modelMatrix * vec4(position, 1.0);
    world.y += waterHeight(world.xz, uTime);

    vWorldPosition = world.xyz;
    vSurfaceNormal = waterNormal(world.xz, uTime);

    gl_Position = projectionMatrix * viewMatrix * world;
}
`

const fragmentShader = /* glsl */`
uniform float uTime;
uniform vec3 uSunDirection;
uniform vec3 uSunColor;
uniform vec3 uDeepColor;
uniform vec3 uShallowColor;
uniform vec3 uHorizonColor;
uniform vec3 uZenithColor;
uniform vec2 uIslandCenter;
uniform float uShoreRadius;
uniform float uHillRadius;
uniform float uSeabedRadius;
uniform float uSeabedDepth;
uniform float uHillHeight;
uniform float uFogNear;
uniform float uFogFar;
uniform float uAbsorption;

varying vec3 vWorldPosition;
varying vec3 vSurfaceNormal;

// Matches terrainProfile() in terrain.js so the shallows tint lines up with
// the actual seabed.
float seabedHeight(float radius)
{
    float land = uHillHeight * (1.0 - smoothstep(uHillRadius, uShoreRadius, radius));
    float seabed = uSeabedDepth * smoothstep(uShoreRadius, uSeabedRadius, radius);
    return land + seabed;
}

// Small crossing chop, too fine to put in the displaced mesh.
vec3 rippleSlope(vec2 p, float time)
{
    vec2 slope = vec2(0.0);

    vec2 d0 = vec2(0.94, 0.34);
    vec2 d1 = vec2(-0.42, 0.91);
    vec2 d2 = vec2(0.66, -0.75);

    slope += d0 * 0.085 * cos(dot(d0, p) * 2.3 - time * 3.4);
    slope += d1 * 0.060 * cos(dot(d1, p) * 3.7 - time * 4.6);
    slope += d2 * 0.035 * cos(dot(d2, p) * 6.1 - time * 6.2);

    return vec3(-slope.x, 0.0, -slope.y);
}

void main()
{
    vec3 toCamera = cameraPosition - vWorldPosition;
    float viewDistance = length(toCamera);
    vec3 viewDirection = toCamera / viewDistance;

    // Fade the fine chop out with distance to keep the horizon from sparkling.
    float detailFade = 1.0 - smoothstep(60.0, 260.0, viewDistance);
    vec3 normal = normalize(vSurfaceNormal + rippleSlope(vWorldPosition.xz, uTime) * detailFade);

    float facing = clamp(dot(normal, viewDirection), 0.0, 1.0);
    float fresnel = mix(0.025, 1.0, pow(1.0 - facing, 5.0));

    vec3 reflected = reflect(-viewDirection, normal);
    float skyBlend = clamp(reflected.y * 1.7 + 0.06, 0.0, 1.0);
    vec3 sky = mix(uHorizonColor, uZenithColor, pow(skyBlend, 0.65));

    float radius = length(vWorldPosition.xz - uIslandCenter);
    float depth = max(0.0, vWorldPosition.y - seabedHeight(radius));
    vec3 body = mix(uShallowColor, uDeepColor, smoothstep(0.0, 9.0, depth));

    // Wave backs let a little light through and read brighter than the troughs.
    float lift = clamp(vWorldPosition.y * 1.1 + 0.45, 0.0, 1.0);
    body *= mix(0.78, 1.28, lift);

    // How far the view ray travels through water before it reaches the bottom.
    // Looking straight down that is just the depth; at a slant it is longer,
    // which is why you can see the sand at your feet but not further out.
    float pathLength = depth / max(0.09, abs(viewDirection.y));
    float transmittance = exp(-uAbsorption * pathLength);

    // Surface reflection, inscatter from the water column, and whatever is
    // left of the seabed behind it. Opacity falls out of the absorption, so
    // the shallows go clear and deep water closes up on its own.
    float alpha = 1.0 - (1.0 - fresnel) * transmittance;
    vec3 premultiplied = fresnel * sky + (1.0 - fresnel) * body * (1.0 - transmittance);

    vec3 halfVector = normalize(uSunDirection + viewDirection);
    float specular = pow(max(dot(normal, halfVector), 0.0), 800.0) * 1.8
                   + pow(max(dot(normal, halfVector), 0.0), 40.0) * 0.07;
    premultiplied += uSunColor * specular;

    // A glint is an opaque highlight, so let it close the surface up too.
    alpha = min(1.0, alpha + specular * 0.6);

    vec3 color = premultiplied / max(alpha, 0.002);

    // Foam on the steepest crests, plus a band where the seabed comes up.
    float chop = sin(vWorldPosition.x * 0.7 + uTime * 1.3) * sin(vWorldPosition.z * 0.6 - uTime * 1.1);
    float crestFoam = smoothstep(0.46, 0.74, vWorldPosition.y) * (0.45 + 0.55 * chop);
    float swash = 0.6 + 0.4 * sin(uTime * 0.7 + radius * 0.25);
    float shoreFoam = (1.0 - smoothstep(0.1, 0.7, depth)) * swash;
    float foam = clamp(crestFoam * 0.55 + shoreFoam * 0.6, 0.0, 1.0);
    color = mix(color, vec3(0.90, 0.94, 0.95), foam);
    alpha = mix(alpha, 1.0, foam);

    // smoothstep rather than a linear ramp, to match THREE.Fog on the rest of
    // the scene. Fog is opaque, so it closes the surface as it takes over.
    float fog = smoothstep(uFogNear, uFogFar, viewDistance);
    color = mix(color, uHorizonColor, fog);
    alpha = mix(alpha, 1.0, fog);

    gl_FragColor = vec4(color, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`

export class Water
{
    constructor({ sunDirection, sunColor, horizonColor, zenithColor, fogNear, fogFar })
    {
        const geometry = new THREE.PlaneGeometry(SIZE, SIZE, SEGMENTS, SEGMENTS)
        geometry.rotateX(-Math.PI / 2)

        this.material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            transparent: true,
            // The sheet must not occlude the foam laid over it.
            depthWrite: false,
            uniforms: {
                uTime: { value: 0 },
                uWaves: { value: wavePacked },
                uWaveDirections: { value: waveDirections },
                uSunDirection: { value: sunDirection.clone() },
                uSunColor: { value: sunColor.clone() },
                uDeepColor: { value: new THREE.Color('#5a7c96') },
                uShallowColor: { value: new THREE.Color('#d5ddd8') },
                uHorizonColor: { value: horizonColor.clone() },
                uZenithColor: { value: zenithColor.clone() },
                uIslandCenter: { value: new THREE.Vector2(ISLAND_CENTER.x, ISLAND_CENTER.z) },
                uShoreRadius: { value: SHORE_RADIUS },
                uHillRadius: { value: HILL_RADIUS },
                uSeabedRadius: { value: SEABED_RADIUS },
                uSeabedDepth: { value: SEABED_DEPTH },
                uHillHeight: { value: HILL_HEIGHT },
                uFogNear: { value: fogNear },
                uFogFar: { value: fogFar },
                // Per-metre extinction. Roughly: half the light survives 2m of
                // water, 6% survives 8m. Raise it for murkier water.
                uAbsorption: { value: 0.2 }
            }
        })

        this.mesh = new THREE.Mesh(geometry, this.material)
        this.mesh.frustumCulled = false // vertices move in the shader
    }

    /**
     * The sheet follows the camera, snapped to the grid pitch. Because wave
     * height is a function of world position, sliding it is invisible and the
     * ocean reads as endless.
     */
    update(time, cameraPosition)
    {
        this.material.uniforms.uTime.value = time
        this.mesh.position.x = Math.round(cameraPosition.x / CELL) * CELL
        this.mesh.position.z = Math.round(cameraPosition.z / CELL) * CELL
    }
}
