import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

/** One Draco decoder for every model. Its files are served out of static/draco/. */
let draco = null

/**
 * A GLTFLoader that can open Draco-compressed meshes. Use this instead of
 * `new GLTFLoader()`, so a model exported with compression still loads.
 */
export function createGLTFLoader()
{
    if (!draco)
    {
        draco = new DRACOLoader()
        draco.setDecoderPath('/draco/')
    }

    return new GLTFLoader().setDRACOLoader(draco)
}
