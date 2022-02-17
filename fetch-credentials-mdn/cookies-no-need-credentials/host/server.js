import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())

// Note: No Access-Control-Allow-Credentials is present in this server

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
