//https://eth-ropsten.alchemyapi.io/v2/uIpeR8YhtLBxEXbZiB3bO5XZN988yEIB

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/uIpeR8YhtLBxEXbZiB3bO5XZN988yEIB",
      accounts: [
        "62f0f28ff528dc739e9f896d8d5427b3f0261efef816499334969fcc30ee303a",
      ],
    },
  },
};
