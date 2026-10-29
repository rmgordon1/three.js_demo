import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { BOAT } from './dimensions.js'

/** Served out of static/. Same mesh as boat2.glb, plus a leg cycle. */
const MODEL_URL = '/boat2-ani.glb'
const DRACO_DECODER_PATH = '/draco/'

/**
 * Correction applied before measuring, in radians. The model already faces
 * +Z, which matches the hull convention, so this is zero — set it to
 * Math.PI / 2 and friends if a future export comes out side-on.
 */
const MODEL_YAW = 0

/**
 * How much of the model's height sits below the waterline. She is a swimming
 * creature rather than a hull, so she rides low: back and head clear of the
 * water, belly and limbs under it.
 */
const SUBMERGED_FRACTION = 0.667

/**
 * Eye sockets in the model's own units, measured off the mesh with
 * tools/probe-region.cjs: the apex of each eyeball sits at x = ±1.77,
 * y ≈ 2.0, z ≈ 6.3. Nudged a little outboard and up so flames start just
 * clear of the surface rather than inside her skull.
 *
 * Authored in model space on purpose — these are the numbers you can read in
 * Blender, and fitToEnvelope converts them alongside the mesh.
 */
const EYE_SOCKETS = [
    new THREE.Vector3(-1.85, 2.08, 6.35),
    new THREE.Vector3(1.85, 2.08, 6.35)
]

/**
 * Scales a loaded model into the gameplay envelope and sets how deep it
 * floats. Uniform scale keyed to the long axis, so nothing gets stretched.
 *
 * Returns a wrapper whose origin is at the waterline, centred fore-aft and
 * athwartships — which is the frame the physics expects.
 */
export function fitToEnvelope(object, { length = BOAT.length, submergedFraction = SUBMERGED_FRACTION, yaw = MODEL_YAW } = {})
{
    // Yaw first: the long axis has to be along Z before we measure it.
    object.rotation.y += yaw
    object.updateWorldMatrix(false, true)

    const bounds = new THREE.Box3().setFromObject(object)
    const size = bounds.getSize(new THREE.Vector3())
    const center = bounds.getCenter(new THREE.Vector3())

    if (!(size.z > 0)) throw new Error('model has no measurable length along Z')

    const scale = length / size.z

    object.position.x -= center.x
    object.position.z -= center.z
    object.position.y -= bounds.min.y + size.y * submergedFraction

    const wrapper = new THREE.Group()
    wrapper.scale.setScalar(scale)
    wrapper.add(object)

    const shift = object.position.clone()

    return {
        wrapper,
        scale,
        /** Fitted size in world units, handy for sanity checks. */
        size: size.clone().multiplyScalar(scale),
        /**
         * Converts a point in the model's own units into the fitted local
         * frame, so attachment points can be authored in model space.
         */
        toLocal: (point, target = new THREE.Vector3()) =>
            target.copy(point).add(shift).multiplyScalar(scale)
    }
}

export async function loadBoatModel()
{
    const draco = new DRACOLoader().setDecoderPath(DRACO_DECODER_PATH)
    const loader = new GLTFLoader().setDRACOLoader(draco)

    try
    {
        const gltf = await loader.loadAsync(MODEL_URL)
        const { wrapper, scale, size, toLocal } = fitToEnvelope(gltf.scene)

        gltf.scene.traverse((child) =>
        {
            if (!child.isMesh) return
            child.castShadow = true
            child.receiveShadow = true
            // A skinned hull's bounds stay at the bind pose, so culling would
            // drop her once the legs reach past that box.
            if (child.isSkinnedMesh) child.frustumCulled = false
        })

        // Rooted on the loaded scene, which sits under the scaled wrapper, so
        // the bones move in model space and the fit is left alone.
        let swim = null
        const clip = gltf.animations[0]
        if (clip)
        {
            const mixer = new THREE.AnimationMixer(gltf.scene)
            const action = mixer.clipAction(clip)
            action.loop = THREE.LoopRepeat
            action.play()
            action.paused = true
            mixer.update(0)
            swim = { mixer, action }
        }

        console.info(`boat model fitted: scale ${scale.toFixed(4)}, size ${size.toArray().map((v) => v.toFixed(2)).join(' x ')}`)

        return { visual: wrapper, eyes: EYE_SOCKETS.map((socket) => toLocal(socket)), swim }
    }
    finally
    {
        draco.dispose()
    }
}
