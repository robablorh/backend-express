const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('welcome to your home ppage')
})
app.post('/about', (req, res) => {
    res.send('About us')
  })
  app.put('/contacts', (req, res) => {
    res.send('Contact us')
  })
  app.delete('/services', (req, res) => {
    res.send('Ours Services')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})