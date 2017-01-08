function partition(list) {
  // Determine relative probabilities.
  const scalar = list.length / list.reduce((acc, item) => acc + item.weight, 0)

  // Partition outcomes into small and big work queues.
  return list.reduce((acc, item) => {
    acc[item.odds < 1 ? 0 : 1].push({ odds: item.weight * scalar, item })

    return acc
  }, [[], []])
}

module.exports = partition;
