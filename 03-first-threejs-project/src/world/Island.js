import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { ISLAND_CENTER, SEABED_RADIUS, terrainHeight } from './terrain.js'

const STATUE_URL = '/statue.glb'
const DRACO_DECODER_PATH = '/draco/'

/** Extra yaw so the figure looks out over the pier. The export faces -X. */
const STATUE_YAW = -Math.PI / 2

/** The export is about 4 m tall; this brings it to about 12 m. */
const STATUE_SCALE = 3

const SAND_URL = '/sand.jpg'
const BASALT_URL = '/basalt.jpg'

/** World metres covered by one repeat of either ground photo. */
const TILE_METERS = 4

const EXTENT = SEABED_RADIUS * 2 + 80
const SEGMENTS = 210

function smoothstep(edge0, edge1, x)
{
    const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
    return t * t * (3 - 2 * t)
}

export class Island
{
    constructor()
    {
        this.group = new THREE.Group()
        this.group.add(this.#buildAbyss())
        this.group.add(this.#buildTerrain())

        // The headless checks construct an island with no server to fetch from.
        if (typeof window !== 'undefined') this.#loadStatue()
    }

    /**
     * The crest is the island centre, but the noise can lift a spot nearby a
     * little higher. Plant the statue on the highest point of that crown.
     */
    #hilltop()
    {
        let best = { x: ISLAND_CENTER.x, z: ISLAND_CENTER.z, y: -Infinity }

        for (let dz = -6; dz <= 6; dz++)
        {
            for (let dx = -6; dx <= 6; dx++)
            {
                const x = ISLAND_CENTER.x + dx
                const z = ISLAND_CENTER.z + dz
                const y = terrainHeight(x, z)
                if (y > best.y) best = { x, z, y }
            }
        }

        return best
    }

    #loadStatue()
    {
        const draco = new DRACOLoader().setDecoderPath(DRACO_DECODER_PATH)
        const loader = new GLTFLoader().setDRACOLoader(draco)

        loader.load(STATUE_URL, (gltf) =>
        {
            const statue = gltf.scene
            statue.rotation.y = STATUE_YAW
            statue.scale.multiplyScalar(STATUE_SCALE)
            statue.updateWorldMatrix(true, true)

            statue.traverse((child) =>
            {
                if (!child.isMesh) return
                child.castShadow = true
                child.receiveShadow = true
            })

            const bounds = new THREE.Box3().setFromObject(statue)
            const center = bounds.getCenter(new THREE.Vector3())
            const peak = this.#hilltop()

            statue.position.x += peak.x - center.x
            statue.position.z += peak.z - center.z
            statue.position.y += peak.y - bounds.min.y

            this.group.add(statue)
            draco.dispose()
        }, undefined, (error) =>
        {
            console.warn('Statue failed to load.', error)
            draco.dispose()
        })
    }

    /**
     * Two triangles of dark bottom far past the modelled seabed. The water is
     * transparent now, so there has to be something behind it even when you
     * run out beyond the island shelf — otherwise the sea blends into sky.
     */
    #buildAbyss()
    {
        const geometry = new THREE.PlaneGeometry(4000, 4000)
        geometry.rotateX(-Math.PI / 2)
        geometry.translate(0, -13.2, 0) // just under where the seabed bottoms out

        return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: '#15242c' }))
    }

    #buildTerrain()
    {
        const geometry = new THREE.PlaneGeometry(EXTENT, EXTENT, SEGMENTS, SEGMENTS)
        geometry.rotateX(-Math.PI / 2)
        geometry.translate(0, 0, ISLAND_CENTER.z)

        const position = geometry.attributes.position
        const colors = new Float32Array(position.count * 3)
        const slopes = new Float32Array(position.count)
        const color = new THREE.Color()

        for (let i = 0; i < position.count; i++)
        {
            const x = position.getX(i)
            const z = position.getZ(i)
            const height = terrainHeight(x, z)
            position.setY(i, height)

            // Finite-difference slope. Steep faces pick up basalt inside the blend.
            const dx = terrainHeight(x + 1.5, z) - height
            const dz = terrainHeight(x, z + 1.5) - height
            slopes[i] = Math.sqrt(dx * dx + dz * dz) / 1.5

            // The photos carry the colour. This only darkens the shelf under the sea.
            const shade = height < 0 ? 1 - 0.7 * smoothstep(0, 6, -height) : 1
            color.setRGB(shade, shade, shade)
            color.toArray(colors, i * 3)
        }

        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        geometry.setAttribute('aSlope', new THREE.BufferAttribute(slopes, 1))
        geometry.computeVertexNormals()

        const material = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.95,
            metalness: 0
        })

        if (typeof window !== 'undefined') this.#applyGroundTextures(material)

        const mesh = new THREE.Mesh(geometry, material)
        mesh.receiveShadow = true

        return mesh
    }

    /**
     * Sand on the beach and in the shallows, basalt on the ground above it.
     * The shader mixes the two from height, and lets slope pull basalt forward
     * on cliffs, so the join is a band rather than a contour line.
     */
    #applyGroundTextures(material)
    {
        const loader = new THREE.TextureLoader()
        const sand = this.#loadGroundMap(loader, SAND_URL, 'Sand')
        const basalt = this.#loadGroundMap(loader, BASALT_URL, 'Basalt')
        const basaltMap = { value: basalt }

        material.map = sand
        material.customProgramCacheKey = () => 'island-sand-basalt'
        material.onBeforeCompile = (shader) =>
        {
            shader.uniforms.uBasaltMap = basaltMap
            shader.uniforms.uTile = { value: 1 / TILE_METERS }

            shader.vertexShader = shader.vertexShader
                .replace('#include <common>', /* glsl */`#include <common>
attribute float aSlope;
varying float vSlope;
varying vec3 vTerrainPos;
varying vec3 vTerrainNormal;`)
                .replace('#include <begin_vertex>', /* glsl */`#include <begin_vertex>
vSlope = aSlope;
vTerrainPos = position;
vTerrainNormal = normal;`)

            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', /* glsl */`#include <common>
uniform sampler2D uBasaltMap;
uniform float uTile;
varying float vSlope;
varying vec3 vTerrainPos;
varying vec3 vTerrainNormal;`)
                .replace('#include <map_fragment>', /* glsl */`
#ifdef USE_MAP
    vec3 n = normalize(vTerrainNormal);
    vec3 w = abs(n);
    w = pow(w, vec3(4.0));
    w /= w.x + w.y + w.z;

    vec3 p = vTerrainPos * uTile;
    vec4 sandTex = texture2D(map, p.yz) * w.x
        + texture2D(map, p.xz) * w.y
        + texture2D(map, p.xy) * w.z;
    vec4 basaltTex = texture2D(uBasaltMap, p.yz) * w.x
        + texture2D(uBasaltMap, p.xz) * w.y
        + texture2D(uBasaltMap, p.xy) * w.z;

    float byHeight = smoothstep(0.55, 3.2, vTerrainPos.y);
    float bySlope = smoothstep(0.45, 0.95, vSlope);
    float ground = byHeight + bySlope * (1.0 - byHeight);

    vec4 sampledDiffuseColor = mix(sandTex, basaltTex, ground);
    diffuseColor *= sampledDiffuseColor;
#endif
`)
        }
    }

    #loadGroundMap(loader, url, label)
    {
        const texture = loader.load(url, undefined, undefined, (error) =>
        {
            console.warn(`${label} texture failed to load.`, error)
        })
        texture.colorSpace = THREE.SRGBColorSpace
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.anisotropy = 8
        return texture
    }
}
