import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3001, () => {
  console.log(`[server]: Server is running at http://localhost:${3001}`)
})
