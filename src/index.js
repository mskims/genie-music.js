import EventEmitter from 'events'
import {
  PlayBackController,
  TrackController
} from './controllers/index'

export class GenieMusic extends EventEmitter {
  constructor () {
    super()
    this.controllers = [
      PlayBackController,
      TrackController
    ].map((ControllerClass) => new ControllerClass(this))

    this._setHooks()
    this._setEvents()
  }

  _setHooks () {
    this.controllers.forEach(controller => {
      controller.setHook()
    })
  }

  _setEvents () {
    this.controllers.forEach(controller => {
      controller.setEvent()
    })
  }
}
