export default class Enemy {
  #gameWidth
  #gameHeight
  #spriteWidth
  #spriteHeight
  #width
  #height
  #img
  #x
  #y
  #frameX
  #speed

  constructor(gameWidth, gameHeight) {
    this.#gameWidth = gameWidth
    this.#gameHeight = gameHeight
    this.#spriteWidth = 160
    this.#spriteHeight = 119
    this.#width = this.#spriteWidth
    this.#height = this.#spriteHeight
    this.#img = enemyImg
    this.#x = this.#gameWidth
    this.#y = this.#gameHeight - this.#height
    this.#frameX = 0
    this.#speed = 8
  }

  update(){
    this.#x -= this.#speed
  }

  draw(ctx){
    ctx.drawImage(
      this.#img, this.#frameX * this.#spriteWidth, 0, this.#spriteWidth, this.#spriteHeight,
      this.#x, this.#y, this.#width, this.#height
    )
  }
}