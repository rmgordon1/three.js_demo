/**
 * Where models, textures and the environment map are served from.
 *
 * They live in S3 behind the same CloudFront distribution as ~/website.
 * They are no longer in static/ (local copies are in unused/static_assets/).
 * To load them locally, copy those folders back into static/ and set
 * VITE_ASSET_BASE='' in a .env.local.
 */
export const ASSET_BASE = import.meta.env?.VITE_ASSET_BASE ?? 'https://dx09qkoz6th2f.cloudfront.net'

/** Absolute URL for an asset path such as '/models/brick.glb'. */
export function assetUrl(path)
{
    return `${ASSET_BASE}${path.startsWith('/') ? path : `/${path}`}`
}
