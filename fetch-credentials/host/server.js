import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dirname from './utils/dirname.js'

const app = express()
const __dirname = dirname(import.meta.url)

app.use(cookieParser())

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://192.0.2.2')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.use('/set-cookies', async (req, res) => {
  res.cookie('None', 'Host', { sameSite: 'none', secure: true })
  res.cookie('Lax', 'Host', { sameSite: 'lax' })
  res.cookie('Strict', 'Host', { sameSite: 'strict' })
  res.send('Host cookies set.')
})

// Simply to log what cookies are present
app.post('/log', async (req, res) => {
  console.log(req.cookies)
})

app.listen(3000, function () {
  console.log('App listening at http://localhost:3000')
})
