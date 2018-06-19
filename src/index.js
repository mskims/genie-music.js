import Emitter from 'events'
import {
  PlayBackController,
  TrackController
} from './controllers/index'

export default class GenieMusic extends Emitter {
  constructor () {
    super()
    const controllers = {
      'playback': PlayBackController,
      'track': TrackController,
    }

    for (let [name, ControllerClass] of Object.entries(controllers)) {
      this[name] = new ControllerClass(this)
    }
  }
}
