export default class Background {
  #gameWidth
  #gameHeight
  #img
  #x
  #y
  #width
  #height
  #speed
  
  constructor(gameWidth, gameHeight) {
    this.#gameWidth = gameWidth
    this.#gameHeight = gameHeight
    this.#img = backgroundImg
    this.#x = 0
    this.#y = 0
    this.#width = 2400
    this.#height = 720
    this.#speed = 10
  }

  update(){
    this.#x -= this.#speed
    if(this.#x < -this.#width) this.#x = 0
  }

  draw(ctx){
    ctx.drawImage(this.#img, this.#x, this.#y, this.#width, this.#height)
    ctx.drawImage(this.#img, this.#x + this.#width - this.#speed, this.#y, this.#width, this.#height)
  }

  restart(){
    this.#x = 0
  }
}