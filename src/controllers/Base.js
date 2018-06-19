import { click } from '../utils'

export class PlayerController {
  constructor (mainEmitter) {
    this.mainEmitter = mainEmitter
    this.setHook()
  }

  setHook () {

  }

  on (...args) {
    this.mainEmitter.on(...args)
  }

  emit (...args) {
    this.mainEmitter.emit(...args)
  }

  click ($e) {
    click($e)
  }
}
