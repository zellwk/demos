import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dirname from './utils/dirname.js'

const app = express()
const __dirname = dirname(import.meta.url)

app.use(express.static('public'))
app.use(cookieParser())

// CORS
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  // res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.get('/set-cookies', (req, res) => {
  res.cookie('None', 'Subdomain', { sameSite: 'none', secure: true })
  res.cookie('Lax', 'Subdomain', { sameSite: 'lax' })
  res.cookie('Strict', 'Subdomain', { sameSite: 'strict' })
  res.send('Subdomain cookies set')
})

app.post('/log', (req, res) => {
  console.log(req.cookies)
})

app.listen(4000, function () {
  console.log('App listening at http://localhost:4000')
})
