const vose = require('./vose/vose')
const tally = require('./tally')
const makeN = require('./makeN')
const randoms = require('./randoms')
const toCoinFlip = require('./toCoinFlip')
const toOneDigit = require('./toOneDigit')
const toTwoDigits = require('./toTwoDigits')

const attitudes = [
  { weight: 20, label: 'Aloof' },
  { weight: 32, label: 'Bereft' },
  { weight: 16, label: 'Complicit' },
  { weight: 40, label: 'Dependent' },
  { weight: 16, label: 'Egregious' },
  { weight: 16, label: 'Fickle' },
  { weight: 20, label: 'Garrulous' }
]

const lots = [
  { weight: 18, label: 'almond' },
  { weight: 12, label: 'chai' },
  { weight: 30, label: 'kiwi' },
  { weight: 24, label: 'lychee' },
  { weight: 36, label: 'taro' }
]

debugger
