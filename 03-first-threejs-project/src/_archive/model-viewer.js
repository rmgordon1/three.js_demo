import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 * GLB materials need lights; the cube used MeshBasicMaterial, which does not.
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.position.set(2, 4, 3)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(2, 2, 3)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Model
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const loader = new GLTFLoader()
loader.setDRACOLoader(dracoLoader)
loader.load(
    '/DeathOutsideTheHead.012.glb',
    (gltf) =>
    {
        const model = gltf.scene
        scene.add(model)

        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)

        model.position.sub(center)

        camera.position.set(maxDim, maxDim, maxDim * 1.5)
        camera.lookAt(0, 0, 0)
        renderer.render(scene, camera)
    }
)
