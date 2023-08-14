import { loadingMessage } from './loading'

var tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

window.YTPlayer = null

export function getVideoId(url) {
  const [baseLink, idLink] = url.split('?v=')
  const [videoId] = idLink.split('&')
  return videoId
}
export function loadVideo(url) {
  loadingMessage('Downloading and Converting video...')

  return new Promise((resolve, reject) => {
    window.YTPlayer = new YT.Player('youtubeVideo', {
      videoId: getVideoId(url),
      events: {
        onReady: () => resolve()
      }
    })
  })
}
