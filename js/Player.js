export default class Player {
  #gameWidth
  #gameHeight
  #width
  #height
  #spriteWidth
  #spriteHeight
  #frameX
  #frameY
  #speed
  #vy
  #weight
  #x
  #y
  #img
  #maxFrame
  #fps
  #frameTimer
  #frameInterval

  constructor(gameWidth, gameHeight) {
    this.#gameWidth = gameWidth
    this.#gameHeight = gameHeight
    this.#width = 200
    this.#height = 200
    this.#spriteWidth = 200
    this.#spriteHeight = 200
    this.#speed = 0
    this.#vy = 0
    this.#weight = 1
    this.#x = 100
    this.#y = this.#gameHeight - this.#height
    this.#img = playerImg
    this.#frameX = 0
    this.#frameY = 0
    this.#maxFrame = 8
    this.#fps = 20
    this.#frameTimer = 0
    this.#frameInterval = 1000 / this.#fps
  }

  update(keys, deltaTime, enemies, handleCollision){
    // collision detection
    enemies.forEach(enemy => {
      const dx = (enemy.x + enemy.width / 2) - (this.#x + this.#width / 2)
      const dy = (enemy.y + enemy.height / 2) - (this.#y + this.#height / 2)
      const distance = Math.sqrt(dx * dx + dy * dy)

      if(distance < enemy.width / 2 + this.#width / 2){
        handleCollision()
      }
    });

    // sprite animation
    this.#frameTimer += deltaTime
    if(this.#frameTimer > this.#frameInterval){
      this.#frameX = this.#frameX >= this.#maxFrame ? 0 : this.#frameX + 1
      this.#frameTimer = 0
    }

    // controls
    if(keys.has('ArrowRight')){
      this.#speed = 5
    } else if(keys.has('ArrowLeft')){
      this.#speed = -5
    } else if(keys.has('ArrowUp') && this.#onGround()){
      this.#vy -= 10
    } else if(keys.has('ArrowDown')){
      // todo
    } else{
      this.#speed = 0
    }

    // horizontal movement
    this.#x += this.#speed
    if(this.#x < 0) this.#x = 0
    else if(this.#x > this.#gameWidth - this.#width) this.#x = this.#gameWidth - this.#width
    // vertical movement
    this.#y += this.#vy
    if(!this.#onGround()){
      this.#vy += this.#weight
      this.#frameY = 1
      this.#maxFrame = 6
    } else {
      this.#vy = 0
      this.#frameY = 0
      this.#maxFrame = 8
    }
    if(this.#y > this.#gameHeight - this.#height) this.#y = this.#gameHeight - this.#height
  }

  draw(ctx){
    ctx.drawImage(
      this.#img, this.#spriteWidth * this.#frameX, this.#spriteHeight * this.#frameY, this.#spriteWidth, this.#spriteHeight, 
      this.#x, this.#y, this.#width, this.#height
    )
  }

  restart(){
    this.#x = 100
    this.#y = this.#gameHeight - this.#height
    this.#maxFrame = 8
    this.#frameY = 0
  }

  #onGround(){
    return this.#y >= this.#gameHeight - this.#height
  }
}