import express from 'express'

const app = express()

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization')
  next()
})

app.post('/log', async (req, res) => {
  console.log(req.headers.authorization)
})

app.listen(3000, function () {
  console.log('App listening at http://localhost:3000')
})
