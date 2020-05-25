const stripCommas = (str = '') => {
  return str.replace(/,/g, '')
}

function sortByName(arr = []) {
  return arr.sort((a, b) => {
    var nameA = a.name.toUpperCase() // ignore upper and lowercase
    var nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    // names must be equal
    return 0
  })
}

function sortByNumber(arr = [], sortType) {
  return arr.sort((a, b) => {
    if (a[sortType] === 'unknown' && b[sortType] === 'unknown') return 0
    if (a[sortType] === 'unknown') return 1
    if (b[sortType] === 'unknown') return -1

    // claean values
    const cleanA = Number.parseFloat(stripCommas(a[sortType]))
    const cleanB = Number.parseFloat(stripCommas(b[sortType]))

    return cleanA - cleanB
  })
}

// function sortByHeight(arr = []) {
//   return arr.sort((a,b) => {
//     if (a.mass === 'unknown' && b.mass === 'unknown') return 0
//     if (a.mass === 'unknown') return 1
//     if (b.mass === 'unknown') return -1
//   })
// }

module.exports = {
  sortByNumber,
  sortByName,
}
