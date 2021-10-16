require("@nomiclabs/hardhat-waffle");
const projectId = process.env.PROJECT_ID
const privateKey = process.env.PRIVATE_KEY
module.exports = {
  defaultNetwork: "hardhat",
  networks :{
    hardhat : {
      chainId : 1337
    },
    ropsten :{
      url : `https://ropsten.infura.io/v3/${projectId}`,
      accounts :  [privateKey]
    },
    mumbai :{
      url : `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts :  [privateKey]
    },
    mainnet :{
      url : `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts :  [privateKey]
    }
  },
  solidity: "0.8.4",
}; 