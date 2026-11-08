import { Game } from './game/Game.js'

const canvas = document.querySelector('canvas.webgl')
const game = new Game(canvas)

// Testing panel: open the site with #debug on the end of the URL, then press `.
if (location.hash === '#debug')
    import('./debug/Debug.js').then(({ Debug }) => new Debug(game))

game.start()
