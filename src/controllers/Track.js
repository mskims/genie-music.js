import {PlayerController} from './Base'

export class Track {
    constructor({id, title, artist, album, albumArt, durationInMs}) {
        this.id = id
        this.title = title
        this.artist = artist
        this.album = albumArt
        this.durationInMs = durationInMs
    }
}

export class TrackController extends PlayerController {
    setHook() {
        new MutationObserver(() => {
            const currentTrack = this.getCurrentTrack()
            this.mainEmitter.emit('track:changed', currentTrack)
        }).observe(document.querySelector('.fp-duration'), {
            childList: true,
        })
    }

    getCurrentTrack() {
        const $albumImgArea = document.querySelector('#AlbumImgArea img')
        const durationInMs = (rawDuration => {
            const [minutes, seconds] = rawDuration.split(':').map(Number)
            return (minutes * 60 + seconds) * 1000
        })(document.querySelector('.fp-duration').textContent)

        return new Track({
            id: document.querySelector('#music-tab .this-play').getAttribute('music-id'),
            title: document.querySelector('#SongTitleArea').textContent,
            artist: document.querySelector('#ArtistNameArea').textContent,
            album: $albumImgArea.alt,
            albumArt: $albumImgArea.src,
            durationInMs,
        })
    }
}