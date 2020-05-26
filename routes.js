const express = require('express')
const swapi = require('./swapiService')
const helpers = require('./helpers')

const router = express.Router()

router.get('/people', async (req, res) => {
  const { sortBy = '' } = req.query
  const swapiResponse = await swapi.people()

  switch (sortBy) {
    case 'name':
      res.send(helpers.sortByName(swapiResponse))
      break
    case 'mass':
    case 'height':
      res.send(helpers.sortByNumber(swapiResponse, sortBy))
      break
    default:
      res.send(swapiResponse)
      break
  }
})

router.get('/planets', async (req, res) => {
  const allPeople = await swapi.people()
  const allPlanets = await swapi.planets()

  const namedPeople = allPlanets.reduce((acc, cur) => {
    const { residents } = cur
    const newResidents = residents.map(
      (res) => allPeople.find((person) => person.url === res).name
    )

    return [...acc, { ...cur, residents: newResidents }]
  }, [])

  res.send(namedPeople)
})

module.exports = router
