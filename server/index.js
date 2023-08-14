import express from 'express'
import cors from 'cors'
import { downloader } from './download-video.js'

const app = express()
app.use(cors())

app.get('/audio', async (request, response) => {
  const videoId = request.query.v

  try {
    await downloader(videoId)
    return response.send('ok')
  } catch (error) {
    console.log(videoId)
    return response.send(videoId)
  }
})

const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => console.log(`Server using PORT ${PORT}`))
