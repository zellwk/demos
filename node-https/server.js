import express from 'express'
import fs from 'fs'
import https from 'https'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Express routes here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Listen with SSL
const server = https.createServer(
  {
    key: fs.readFileSync(`${__dirname}/certs/key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/certs/cert.pem`, 'utf8')
  },
  app
)

server.listen(443, _ => {
  console.log('App listening at https://localhost')
})
