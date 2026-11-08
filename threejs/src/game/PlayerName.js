/**
 * The name a player goes by. Kept in this browser so the name screen can
 * offer it again next visit; nothing is sent anywhere yet.
 *
 * Later, a server will hold each name's best lap and settings, first come
 * first served: claimName is where that check will go.
 */

export const NAME_MAX = 16
const STORAGE_KEY = 'playerName'

/** Letters (any alphabet), digits, spaces, and - _ . */
const ALLOWED = /^[\p{L}\p{N} ._-]+$/u

/** Trims and collapses runs of spaces, so "  Rob   G " and "Rob G" are the same name. */
export function tidyName(raw)
{
    return String(raw ?? '').trim().replace(/\s+/g, ' ')
}

/** Null when the name is fine, otherwise what is wrong with it. */
export function nameProblem(name)
{
    if (!name) return 'Type a name first.'
    if ([...name].length > NAME_MAX) return `Keep it to ${NAME_MAX} characters.`
    if (!ALLOWED.test(name)) return 'Letters, numbers, spaces, and - _ . only.'
    return null
}

/**
 * Two spellings that should count as one name on the server: case and
 * accents ignored, so "rob" cannot sit next to "Rob" on the leaderboard.
 */
export function nameKey(name)
{
    return tidyName(name).normalize('NFKC').toLocaleLowerCase()
}

/** The name used last time on this browser, or ''. */
export function rememberedName()
{
    try
    {
        return localStorage.getItem(STORAGE_KEY) ?? ''
    }
    catch
    {
        return ''
    }
}

export function rememberName(name)
{
    try
    {
        localStorage.setItem(STORAGE_KEY, name)
    }
    catch
    {
        // Private windows and blocked storage: they just type it again next time.
    }
}

/**
 * Asks whether this browser may play as `name`. Always yes for now. With a
 * server, a new name is claimed and handed a secret token kept in this
 * browser; a name someone else holds comes back with a reason instead.
 *
 * @returns {{ ok: true } | { ok: false, reason: string }}
 */
export function claimName(name)
{
    return { ok: true }
}
