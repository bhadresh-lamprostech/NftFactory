import { ERC721CollectionCreated as ERC721CollectionCreatedEvent } from "../generated/NFTFactory/NFTFactory"
import { ERC721CollectionCreated } from "../generated/schema"
import { ERC721Clonable } from "../generated/templates"

export function handleERC721CollectionCreated(
  event: ERC721CollectionCreatedEvent
): void {
  let entity = new ERC721CollectionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.initialOwner = event.params.initialOwner
  entity.maxSupply = event.params.maxSupply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  ERC721Clonable.create(event.params.collection)
}
