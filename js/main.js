import Background from "./Background.js"
import Enemy from "./Enemy.js"
import InputHandler from "./InputHandler.js"
import Player from "./Player.js"

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 800
  canvas.height = 720

  let enemies = []
  let lastTime = 0
  let enemyTimer = 0
  let enemyInterval = getRandomEnemyInterval()
  let score = 0

  const input = new InputHandler()
  const player = new Player(canvas.width, canvas.height)
  const background = new Background(canvas.width, canvas.height)

  const handleEnemies = (deltaTime) => {
    enemyTimer += deltaTime
    if(enemyTimer > enemyInterval){
      enemies.push(new Enemy(canvas.width, canvas.height))
      enemyTimer = 0
      enemyInterval = getRandomEnemyInterval()
    }
    enemies.forEach(enemy => {
      enemy.draw(ctx)
      enemy.update(deltaTime)
      score = enemy.updateScore(score)
    })

    enemies = enemies.filter(enemy => !enemy.markedForDeletion)
  }

  const displayStatusText = (ctx) => {
    ctx.font = '40px Helvetica'
    ctx.fillStyle = 'black'
    ctx.fillText(`Score: ${score}`, 20, 50)
    ctx.fillStyle = 'white'
    ctx.fillText(`Score: ${score}`, 22, 52)
  }

  const animate = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const deltaTime = timestamp - lastTime
    lastTime = timestamp

    //background.update()
    background.draw(ctx)
    handleEnemies(deltaTime)
    player.draw(ctx)
    player.update(input.keys, deltaTime)
    displayStatusText(ctx)

    requestAnimationFrame(animate)
  }

  animate(0)
})

function getRandomEnemyInterval(){
  return Math.random() * 1000 + 500
}