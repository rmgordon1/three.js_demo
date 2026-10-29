import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
/** Served out of static/, so the path is root-relative. */
const MODEL_URL = '/dock2.glb'
const DRACO_DECODER_PATH = '/draco/'

/**
 * The export runs lengthwise along X. A quarter turn lays that axis along Z,
 * which is the pier direction: -Z seaward, +Z toward the beach.
 */
const MODEL_YAW = -Math.PI / 2

/**
 * Walkable surface in the model's own units: the flat top of dock2.glb.
 * Y is unchanged by MODEL_YAW.
 */
const DECK_SURFACE_Y = 3.806

/**
 * Outer bounds of the export, used to size the collision to the mesh before
 * it has loaded. Length along X, width along Z.
 */
const MODEL_LENGTH = 119.862
const MODEL_WIDTH = 31.910

const DECK_LENGTH = 52

/** Pilings are cut here so they meet the dark floor instead of passing through it. */
const CLIP_Y = -13.05

export const DOCK = {
    deckY: 1.6,
    halfWidth: (MODEL_WIDTH / 2) * (DECK_LENGTH / MODEL_LENGTH),
    seaZ: -6,
    landZ: -6 + DECK_LENGTH,
    /** Where the player starts: on the deck, looking seaward. */
    spawn: new THREE.Vector3(0, 1.6, 40),
    /**
     * Berth off the west edge. The quay is wider than the old timber pier,
     * so she lies further out to keep clear of the no-go margin.
     */
    mooring: new THREE.Vector3(-10.6, 0, 2)
}

/**
 * Scales the loaded dock onto the pier footprint and puts the walkable
 * surface at deck height. Uniform scale, keyed to the long axis.
 */
export function fitDock(object, { length = DECK_LENGTH, deckY = DOCK.deckY, yaw = MODEL_YAW } = {})
{
    object.rotation.y += yaw
    object.updateWorldMatrix(true, true)

    const bounds = new THREE.Box3().setFromObject(object)
    const size = bounds.getSize(new THREE.Vector3())
    const center = bounds.getCenter(new THREE.Vector3())

    if (!(size.z > 0)) throw new Error('dock model has no measurable length along Z')

    const scale = length / size.z

    // Centre on the footprint, and drop the measured stone surface to y = 0
    // so the wrapper can lift it to deck height. Y is unaffected by the yaw.
    object.position.x -= center.x
    object.position.z -= center.z
    object.position.y -= DECK_SURFACE_Y

    const wrapper = new THREE.Group()
    wrapper.scale.setScalar(scale)
    wrapper.position.set(0, deckY, (DOCK.seaZ + DOCK.landZ) / 2)
    wrapper.add(object)

    return {
        wrapper,
        scale,
        halfWidth: size.x * 0.5 * scale,
        size: size.clone().multiplyScalar(scale)
    }
}

export async function loadDockModel()
{
    const draco = new DRACOLoader().setDecoderPath(DRACO_DECODER_PATH)
    const loader = new GLTFLoader().setDRACOLoader(draco)

    try
    {
        const gltf = await loader.loadAsync(MODEL_URL)
        const { wrapper, scale, size, halfWidth } = fitDock(gltf.scene)

        const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -CLIP_Y)

        gltf.scene.traverse((child) =>
        {
            if (!child.isMesh) return

            child.castShadow = true
            child.receiveShadow = true

            const materials = Array.isArray(child.material) ? child.material : [child.material]
            for (const material of materials)
            {
                material.clippingPlanes = [clipPlane]
                material.clipShadows = true
            }
        })

        console.info(`dock model fitted: scale ${scale.toFixed(4)}, size ${size.toArray().map((v) => v.toFixed(2)).join(' x ')}, half-width ${halfWidth.toFixed(2)}`)

        return wrapper
    }
    finally
    {
        draco.dispose()
    }
}

export class Dock
{
    constructor({ loadModel = true } = {})
    {
        this.group = new THREE.Group()

        /** Standable AABBs. The player snaps to the top face of these. */
        this.platforms = []
        /** AABBs that push the player back in XZ. This quay has no railings. */
        this.walls = []

        const { deckY, halfWidth, seaZ, landZ } = DOCK

        this.platforms.push(new THREE.Box3(
            new THREE.Vector3(-halfWidth, deckY - 4, seaZ),
            new THREE.Vector3(halfWidth, deckY, landZ)
        ))

        this.placeholder = new THREE.Mesh(
            new THREE.BoxGeometry(halfWidth * 2, 4, landZ - seaZ),
            new THREE.MeshStandardMaterial({ color: '#8a847c', roughness: 0.9 })
        )
        this.placeholder.position.set(0, deckY - 2, (seaZ + landZ) / 2)
        this.placeholder.castShadow = true
        this.placeholder.receiveShadow = true
        this.group.add(this.placeholder)

        this.ready = loadModel
            ? loadDockModel()
                .then((model) => this.#useModel(model))
                .catch((error) =>
                {
                    console.warn('Dock model failed to load; keeping the placeholder slab.', error)
                })
            : Promise.resolve()
    }

    #useModel(model)
    {
        this.group.remove(this.placeholder)
        this.placeholder.geometry.dispose()
        this.placeholder.material.dispose()
        this.placeholder = null
        this.group.add(model)
    }
}
