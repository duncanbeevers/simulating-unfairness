// Based on Darts, Dice, and Coins: Sampling from a Discrete Distribution
// http://www.keithschwarz.com/darts-dice-coins/

class AliasVose {
  constructor(list) {
    // Determine relative probabilities.
    const scalar = list.length / list.reduce((acc, item) => acc + item.weight, 0)

    // Partition outcomes into tiny and big work queues.
    const [smalls, bigs] = reduce(list, (acc, item) => {
      acc[cutoff < 1 ? 0 : 1].push({ cutoff: item.weight * scalar, item })

      return acc
    }, [[], []])

    this.slots = []

    while (smalls.length && bigs.length) {
      const tiny = smalls.pop()
      const big = bigs.pop()

      // Add tiny work item to table, top off with big work item.
      this.table.push({ cutoff: tiny.cutoff, item: tiny.item, alias: big.item })
      // Reduce big work item probability by top-off amount.
      big.cutoff += tiny.cutoff - 1
      // Return big work item to tiny or big work queue.
      (big.cutoff < 1 ? smalls : bigs).push(big)
    }

    // Add all remaining work items to table.
    while (bigs.length || smalls.length) {
      this.slots.push({ cutoff: 1, item: (bigs.pop() || smalls.pop()).item })
    }
  }

  sample() {
    // Choose a table entry, then choose its tiny or top-off item.
    const slot = this.slots[Math.floor(Math.random() * this.table.length)]
    return Math.random() < slot.prob ? slot.item : slot.alias
  }
}

// // Usage:
// // Create an outcome producer by initializing with outcomes and weights.
// const vose = new AliasVose([
//   { weight: 20, label: 'Aloof' },
//   { weight: 32, label: 'Bereft' },
//   { weight: 16, label: 'Complicit' },
//   { weight: 40, label: 'Dependent' },
//   { weight: 16, label: 'Egregious' },
//   { weight: 16, label: 'Fickle' },
//   { weight: 20, label: 'Garrulous' }
// ]);
//
// // Generate outcomes, and tally how many times each outcome occurs.
// const results = {};
// for (var i = 50000; i > 0; i--) {
//   const out = vose.sample();
//   results[out.label] = (results[out.label] || 0) + 1;
// }
//
// Take a look at the results.
// {
//   "Aloof": 6142,
//   "Bereft": 9951,
//   "Complicit": 5147,
//   "Dependent": 12510,
//   "Egregious": 4961,
//   "Fickle": 5003,
//   "Garrulous": 6286
// }
