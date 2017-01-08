function makeCoins(smalls, bigs) {
  const coins = []

  while (smalls.length && bigs.length) {
    const small = smalls.pop()
    const big = bigs.pop()

    // A small outcome becomes the head side of an unfair coin.
    // The tail side of the coin is borrowed from a big outcome.
    coins.push({ odds: small.odds, head: small.item, tail: big.item })
    // Reduce big outcome odds by borrowed amount.
    big.odds += small.odds - 1
    // Return big outcome to bigs, or to smalls if it got small.
    (big.odds < 1 ? smalls : bigs).push(big)
  }

  // Make 100% heads coins for all the remaining outcomes.
  while (bigs.length || smalls.length) {
    coins.push({ odds: 1, head: (bigs.pop() || smalls.pop()).item })
  }

  return coins
}

module.exports = makeCoins
