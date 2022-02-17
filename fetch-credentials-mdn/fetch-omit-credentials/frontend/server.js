import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dirname from './utils/dirname.js'

const app = express()
const __dirname = dirname(import.meta.url)

app.use(express.static('public'))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.post('/log', async (req, res) => {
  console.log(req.headers.authorization)
})

app.listen(4000, function () {
  console.log('App listening at http://localhost:4000')
})
