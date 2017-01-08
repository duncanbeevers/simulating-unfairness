function makeN(fn, n) {
  const result = [];
  while (n--) {
    result.push(fn())
  }
  return result
}

module.exports = makeN
