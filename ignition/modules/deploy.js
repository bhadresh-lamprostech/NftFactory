// deploy.js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTFactoryModule", (m) => {
  const erc721Implementation = m.contract("ERC721Clonable", [
    "ERC721 Collection",
    "ERC721",
  ]);
  const erc1155Implementation = m.contract("ERC1155Cloneable", [
    "https://example.com/api/token/{id}.json",
  ]);
  console.log(erc1155Implementation);
  
  const nftFactory = m.contract("NFTFactory", [
    erc721Implementation,
    erc1155Implementation,
    "0x070F992829575477A0E91D9D3e49dCFcd06d3C22",
  ]);

  return {
    erc721Implementation,
    erc1155Implementation,
    nftFactory,
  };
});
