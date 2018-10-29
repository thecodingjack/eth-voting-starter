// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 470000,
      from: '0x58e99c5fbd43d098d254ffefad5d47b76bb07938',
    }
  }
}
