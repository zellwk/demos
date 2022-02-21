import express from 'express'
import path from 'path'
import dirname from '@zellwk/javascript/dirname.js'

const __dirname = dirname(import.meta.url)
const app = express()

app.use(express.static('public'))

// Serves up libraries
const libraries = {
  '@zellwk/javascript': '@zellwk/javascript/lib',
  'zl-fetch': 'zl-fetch/dist'
}

Object.entries(libraries).forEach(library => {
  const [lib, libPath] = library
  app.use(`/js/${lib}`, express.static(path.join('node_modules', libPath)))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000)
