export default class InputHandler {
  #keys

  constructor(restartGame) {
    this.#keys = new Set()

    window.addEventListener('keydown', (e) => {
      if(this.#keys.has(e.key)) return
      switch(e.key){
        case 'ArrowDown':
          this.#keys.add(e.key)
          break
        case 'ArrowUp':
          this.#keys.add(e.key)
          break
        case 'ArrowLeft':
          this.#keys.add(e.key)
          break
        case 'ArrowRight':
          this.#keys.add(e.key)
          break
        case 'Enter':
          restartGame()
          break
      }
    })
    window.addEventListener('keyup', (e) => {
      this.#keys.delete(e.key)
    })
  }

  get keys(){
    return this.#keys
  }
}