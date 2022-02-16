import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dirname from './utils/dirname.js'
import https from 'https'
import fs from 'fs'

const app = express()
const __dirname = dirname(import.meta.url)

app.use(express.static('public'))
app.use(cookieParser())

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.get('/set-cookies', (req, res) => {
  res.cookie('None', 'External', { sameSite: 'none', secure: true })
  res.cookie('Lax', 'External', { sameSite: 'lax' })
  res.cookie('Strict', 'External', { sameSite: 'strict' })
  res.send('External Cookies set')
})

app.post('/log', (req, res) => {
  console.log(req.cookies)
})

// Enables HTTPS
const server = https.createServer(
  {
    key: fs.readFileSync(`${__dirname}/certs/key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/certs/cert.pem`, 'utf8')
  },
  app
)

// Listens on these addresses on my computer
// https://127.0.0.1
// https://192.0.2.2
server.listen(443, '0.0.0.0')
