export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.width = 200
    this.height = 200
    this.x = 0
    this.y = this.gameHeight - this.height
  }

  update(){
    this.x++
  }

  draw(ctx){
    ctx.fillStyle = 'white'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}