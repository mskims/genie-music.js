import {PlayerController} from './Base'

export class PlayBackController extends PlayerController {
    setHook() {
        new MutationObserver(() => {
            if (this.getIsPlaying()) {
                this.mainEmitter.emit('play')
            } else {
                this.mainEmitter.emit('pause')
            }
        }).observe(document.querySelector('.fp-playbtn'), {
            childList: true,
        })
    }

    setEvent() {
        this.mainEmitter.on('play', this.play.bind(this))
        this.mainEmitter.on('pause', this.pause.bind(this))
    }

    getIsPlaying() {
        return document.querySelector('#fp-audio').classList.contains('is-playing')
    }

    play() {
        this.click(document.querySelector('.is-paused .fp-playbtn'))
    }

    pause() {
        this.click(document.querySelector('.is-playing .fp-playbtn'))
    }
}
