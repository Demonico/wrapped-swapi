const express = require('express')
const swapi = require('./swapiController')
const helpers = require('./helpers')

const router = express.Router()

router.get('/people', async (req, res) => {
  const { sortBy = '' } = req.query
  console.log('params', req.query)
  const swapiResponse = await swapi.people()
  // .catch((err) => console.log('controller error', err))
  // console.log(swapiResponse.map((person) => person.height))
  // console.log(
  //   'first person',
  //   swapiResponse[0],
  //   'second person',
  //   swapiResponse[1]
  // )
  switch (sortBy) {
    case 'name':
      res.send(helpers.sortByName(swapiResponse))
      break
    case 'mass':
      res.send(helpers.sortByNumber(swapiResponse, 'mass'))
      break
    case 'height':
      res.send(helpers.sortByNumber(swapiResponse, 'height'))
      break
    default:
      res.send(swapiResponse)
      break
  }
})

module.exports = router
