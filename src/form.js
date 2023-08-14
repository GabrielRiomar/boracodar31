import { startLoading, stopLoading, loadingMessage } from './loading'
import { loadVideo, getVideoId } from './youtube-api'
import axios from 'axios'

const form = document.querySelector('#form')

form.addEventListener('submit', async e => {
  e.preventDefault()

  try {
    loadingMessage('Starting Application...')
    startLoading()

    const formData = new FormData(form)
    const url = formData.get('url')
    await loadVideo(url)

    loadingMessage('Connecting with Backend...')
    await axios.get('http://localhost:3000/audio?v=' + getVideoId(url))
  } catch (error) {
    console.log('[SUBMIT_ERROR]', error)
  } finally {
    stopLoading()
  }
})
