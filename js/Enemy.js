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
  #maxFrame
  #fps
  #frameTimer
  #frameInterval
  #markedForDeletion

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
    this.#maxFrame = 5
    this.#fps = 20
    this.#frameTimer = 0
    this.#frameInterval = 1000 / this.#fps
    this.#markedForDeletion = false
  }

  get markedForDeletion(){
    return this.#markedForDeletion
  }

  update(deltaTime){
    this.#frameTimer += deltaTime
    if(this.#frameTimer > this.#frameInterval){
      this.#frameX = this.#frameX >= 5 ? 0 : this.#frameX + 1
      this.#frameTimer = 0
    }
    this.#x -= this.#speed

    if(this.#x < -this.#width){
      this.#markedForDeletion = true
    }
  }

  draw(ctx){
    ctx.drawImage(
      this.#img, this.#frameX * this.#spriteWidth, 0, this.#spriteWidth, this.#spriteHeight,
      this.#x, this.#y, this.#width, this.#height
    )
  }
}