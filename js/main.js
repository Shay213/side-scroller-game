import InputHandler from "./InputHandler.js"
import Player from "./Player.js"

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 800
  canvas.height = 720

  const input = new InputHandler()
  const player = new Player(canvas.width, canvas.height)
  player.draw(ctx)

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player.update(input.keys)
    player.draw(ctx)

    requestAnimationFrame(animate)
  }

  animate()
})

function handleEnemies(){

}

function displayStatusText(){

}