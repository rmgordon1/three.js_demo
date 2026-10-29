import { Game } from './game/Game.js'

const canvas = document.querySelector('canvas.webgl')
const game = new Game(canvas)

game.start()
