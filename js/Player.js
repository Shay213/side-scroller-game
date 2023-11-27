export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.width = 200
    this.height = 200
    this.spriteWidth = 200
    this.spriteHeight = 200
    this.frameX = 0
    this.frameY = 0
    this.speed = 0
    this.vy = 0
    this.weight = 1
    this.x = 0
    this.y = this.gameHeight - this.height
    this.img = playerImg
  }

  update(keys){
    if(keys.has('ArrowRight')){
      this.speed = 5
    } else if(keys.has('ArrowLeft')){
      this.speed = -5
    } else if(keys.has('ArrowUp') && this.#onGround()){
      this.vy -= 10
    } else if(keys.has('ArrowDown')){
      // todo
    } else{
      this.speed = 0
    }

    // horizontal movement
    this.x += this.speed
    if(this.x < 0) this.x = 0
    else if(this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width
    // vertical movement
    this.y += this.vy
    if(!this.#onGround()){
      this.vy += this.weight
      this.frameY = 1
    } else {
      this.vy = 0
      this.frameY = 0
    }
    if(this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height
  }

  draw(ctx){
    ctx.drawImage(
      this.img, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, 
      this.x, this.y, this.width, this.height
    )
  }

  #onGround(){
    return this.y >= this.gameHeight - this.height
  }
}