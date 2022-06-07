const express = require ('express')
const app = express()

app.use('/api', require('./api'));

app.get('/', (req, res) => {
  res.send('hello world!')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
