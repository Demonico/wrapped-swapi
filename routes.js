const express = require('express')
const swapi = require('./swapiController')

const router = express.Router()

router.get('/people', async (req, res) => {
  const response = await swapi.people()
  console.log(response.map((person) => person.height))
  res.send(response)
})

module.exports = router
