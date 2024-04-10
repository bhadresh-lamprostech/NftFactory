import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ERC721CollectionCreated } from "../generated/NFTFactory/NFTFactory"

export function createERC721CollectionCreatedEvent(
  collection: Address,
  name: string,
  symbol: string,
  initialOwner: Address,
  maxSupply: BigInt
): ERC721CollectionCreated {
  let erc721CollectionCreatedEvent = changetype<ERC721CollectionCreated>(
    newMockEvent()
  )

  erc721CollectionCreatedEvent.parameters = new Array()

  erc721CollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  erc721CollectionCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  erc721CollectionCreatedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  erc721CollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "initialOwner",
      ethereum.Value.fromAddress(initialOwner)
    )
  )
  erc721CollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxSupply",
      ethereum.Value.fromUnsignedBigInt(maxSupply)
    )
  )

  return erc721CollectionCreatedEvent
}
