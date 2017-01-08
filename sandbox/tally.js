function tally(fn, collection) {
  return collection.reduce((acc, element) => {
    const key = fn(element)
    acc[key] = (acc[key] || 0) + 1

    return acc
  }, {})
}

module.exports = tally;
