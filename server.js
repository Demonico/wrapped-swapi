const express = require('express')

const routes = require('./routes')

const app = express()
const port = 3210

app.use(routes)

app.listen(port, () => {
  console.log(`API listening on port: ${port}`)
})
