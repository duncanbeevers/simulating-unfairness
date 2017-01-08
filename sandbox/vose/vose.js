const partition = require('./partition')
const makeCoins = require('./makeCoins')

function vose(list) {
  const [smalls, bigs] = partition(list)
  const coins = makeCoins(smalls, bigs)

  return function sample() {
    // Choose a coin, then flip it.
    const coin = coins[Math.floor(Math.random() * coins.length)]
    return Math.random() < coin.odds ? coin.head : coin.tail
  }
}

module.exports = vose;
