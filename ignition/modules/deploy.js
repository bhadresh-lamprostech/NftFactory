// deploy.js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTFactoryModule", (m) => {
  const erc721Implementation = m.contract("ERC721Clonable", [
    "0x070F992829575477A0E91D9D3e49dCFcd06d3C22",
    "ERC721 Collection",
    "ERC721",
    "10",
  ]);

  const nftFactory = m.contract("NFTFactory", [erc721Implementation]);

  return {
    erc721Implementation,
    nftFactory,
  };
});
