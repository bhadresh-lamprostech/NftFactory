require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [
        "0x97ca7dd5321224e931d9f30f63e015d3bff8c18b1f195fdbc1e954ffc324fb9f",
      ],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "5HKPIIDSHU2IKHJKPIG1ZK9Y11UM1ZVXWT",
    },
  },
};
