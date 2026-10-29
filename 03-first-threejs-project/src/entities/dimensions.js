import * as THREE from 'three'

/**
 * The vessel's gameplay envelope. These are authored, not derived from the
 * model: physics, buoyancy sampling, berthing and the pier clearances all key
 * off them, and the visual is fitted into this box on load. That keeps a model
 * swap from quietly changing how she handles or whether she fits her berth.
 */
export const BOAT = {
    length: 6.4,
    beam: 3.5,
    /** Below the waterline. Only the placeholder hull uses these two. */
    draft: 0.9,
    freeboard: 0.7,
    /** Where the rider sits, for the first-person view. */
    helm: new THREE.Vector3(0, 1.35, 0.3)
}
