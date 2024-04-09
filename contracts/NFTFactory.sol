// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./ERC721Clonable.sol";
import "./ERC1155Cloneable.sol";

contract NFTFactory is Ownable {
    address public erc721Implementation;
    address public erc1155Implementation;

    event ERC721CollectionCreated(address indexed collection, string name, string symbol);
    event ERC1155CollectionCreated(address indexed collection, string uri);

    constructor(address _erc721Implementation, address _erc1155Implementation, address initialOwner) Ownable(initialOwner) {
        erc721Implementation = _erc721Implementation;
        erc1155Implementation = _erc1155Implementation;
    }

    function createERC721Collection(string memory name, string memory symbol) public onlyOwner {
    Clones.clone(erc721Implementation);
    ERC721Clonable erc721Contract = new ERC721Clonable(name, symbol);
    emit ERC721CollectionCreated(address(erc721Contract), name, symbol);
}

function createERC1155Collection(string memory uri) public onlyOwner {
    Clones.clone(erc1155Implementation);
    ERC1155Cloneable erc1155Contract = new ERC1155Cloneable(uri);
    emit ERC1155CollectionCreated(address(erc1155Contract), uri);
}

    
}