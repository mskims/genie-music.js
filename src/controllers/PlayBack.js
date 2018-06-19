import {PlayerController} from './Base'

export class PlayBackController extends PlayerController {
  setHook () {
    new window.MutationObserver(() => {
      if (this.getIsPlaying()) {
        this.mainEmitter.emit('pause')
      } else {
        this.mainEmitter.emit('play')
      }
    }).observe(document.querySelector('.fp-playbtn'), {
      childList: true
    })
  }

  getIsPlaying () {
    return document.querySelector('#fp-audio').classList.contains('is-playing')
  }

  play () {
    this.click(document.querySelector('.is-paused .fp-playbtn'))
  }

  pause () {
    this.click(document.querySelector('.is-playing .fp-playbtn'))
  }
}
