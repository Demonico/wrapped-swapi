const axios = require('axios')

const getPeople = async (url) => {
  return await axios.get(url)
}

const parseNumber = (str) => {
  // check for 'unknown'
  // check for ','
  // return number
}

module.exports = {
  people: async function () {
    let results = []
    let firstResponse = await getPeople('https://swapi.dev/api/people/')
    results = [...results, ...firstResponse.data.results]
    let nextURL = firstResponse.data.next

    while (nextURL !== null) {
      const response = await getPeople(nextURL)
      results = [...results, ...response.data.results]
      nextURL = response.data.next
    }

    return results
  },
  sortByName: function () {
    //
  },
  sortByheight: function () {},
  sortByMass: function () {},
}
