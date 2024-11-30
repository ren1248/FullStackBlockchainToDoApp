require("@nomiclabs/hardhat-waffle");
// In the root directory: npm install --save-dev @nomicfoundation/hardhat-ethers ethers
require("@nomicfoundation/hardhat-ethers");
require('dotenv').config()
 
module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.26",
  networks: {
    sepolia: {
      //url: "https://eth-sepolia.g.alchemy.com/v2/DcGebs7_dRA6GU-jRNnwbLa8DK3ep_l9",
      url: process.env.ALCHEMY_SEPOLIA_URL,
      //accounts: ["0493e2cd6ce11596636a1a4e4f25d5defc106eac61f766693fc5bf9b44590f47"],
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};