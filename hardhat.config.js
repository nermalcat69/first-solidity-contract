require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/RfMLcwZHTtvexzEU6eaR4ZwxNNZcq86C",
      accounts: [`66064ce9e17bea0a9ac9712802567b8ff79774ffc59c7c0dc6c57fd1b1c9b660`],
    },
  },
};
