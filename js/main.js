import InputHandler from "./InputHandler.js"

let canvas = null
let ctx = null

window.addEventListener('load', () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  canvas.width = 800
  canvas.height = 720

  const input = new InputHandler()
})

function animate(){

}

function handleEnemies(){

}

function displayStatusText(){

}