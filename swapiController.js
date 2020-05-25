const axios = require('axios')

const getData = async (url) => {
  return await axios.get(url)
}

module.exports = {
  people: async function () {
    let results = []
    let firstResponse = await getData('https://swapi.dev/api/people/')
    results = [...results, ...firstResponse.data.results]
    let nextURL = firstResponse.data.next

    while (nextURL !== null) {
      const response = await getData(nextURL)
      results = [...results, ...response.data.results]
      nextURL = response.data.next
    }

    return results
  },
  planets: async function () {
    let results = []
    let firstResponse = await getData('https://swapi.dev/api/planets/')
    results = [...results, ...firstResponse.data.results]
    let nextURL = firstResponse.data.next

    while (nextURL !== null) {
      const response = await getData(nextURL)
      results = [...results, ...response.data.results]
      nextURL = response.data.next
    }

    return results
  },
}
