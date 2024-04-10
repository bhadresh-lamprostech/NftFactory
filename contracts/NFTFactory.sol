// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./ERC721Clonable.sol";

contract NFTFactory {
    address public erc721Implementation;

    event ERC721CollectionCreated(
        address indexed collection,
        string name,
        string symbol,
        address initialOwner,
        uint256 maxSupply
    );

    constructor(address _erc721Implementation) {
        erc721Implementation = _erc721Implementation;
    }

    function createERC721Collection(
        string memory name,
        string memory symbol,
        address initialOwner,
        uint256 maxSupply
    ) public {
        Clones.clone(erc721Implementation);
        ERC721Clonable erc721Contract = new ERC721Clonable(
            initialOwner,
            name,
            symbol,
            maxSupply
        );
        emit ERC721CollectionCreated(
            address(erc721Contract),
            name,
            symbol,
            initialOwner,
            maxSupply
        );
    }
}
