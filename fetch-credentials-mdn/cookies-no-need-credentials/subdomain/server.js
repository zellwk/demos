import path from 'path'
import express from 'express'
import dirname from './utils/dirname.js'

const app = express()
const __dirname = dirname(import.meta.url)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.listen(4000, function () {
  console.log('App listening at http://localhost:4000')
})
