function parseNumber(str = '') {
  const int = Number.parseInt(str)
  const flt = Number.parseFloat(str)

  if (isNaN(int) || isNaN(flt)) return NaN

  if (flt > int) {
    return flt
  }

  if (flt === int) {
    return int
  }

  return NaN
}

function _sortByName(arr = [], dir = 'asc') {
  const asc = (a, b) => {
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
  }

  const desc = (a, b) => {
    var nameA = a.name.toUpperCase() // ignore upper and lowercase
    var nameB = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return 1
    }
    if (nameA > nameB) {
      return -1
    }

    // names must be equal
    return 0
  }

  if (dir === 'asc') {
    return arr.sort(asc)
  }

  if (dir === 'desc') {
    return arr.sort(desc)
  }
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

module.exports = {
  parseNumber,
  sortByName,
}
