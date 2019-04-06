require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', 
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
  'share cruise track empty crush analyst wrap dice large ordinary rude hole',
  'https://rinkeby.infura.io/I7P2ErGiQjuq4jNp41OE',        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 3
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};

