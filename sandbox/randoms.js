const makeN = require('./makeN')

const randoms = makeN.bind(null, Math.random)

module.exports = randoms
