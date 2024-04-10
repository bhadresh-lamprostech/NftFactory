import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ERC721CollectionCreated } from "../generated/schema"
import { ERC721CollectionCreated as ERC721CollectionCreatedEvent } from "../generated/NFTFactory/NFTFactory"
import { handleERC721CollectionCreated } from "../src/nft-factory"
import { createERC721CollectionCreatedEvent } from "./nft-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collection = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let symbol = "Example string value"
    let initialOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let maxSupply = BigInt.fromI32(234)
    let newERC721CollectionCreatedEvent = createERC721CollectionCreatedEvent(
      collection,
      name,
      symbol,
      initialOwner,
      maxSupply
    )
    handleERC721CollectionCreated(newERC721CollectionCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ERC721CollectionCreated created and stored", () => {
    assert.entityCount("ERC721CollectionCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ERC721CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collection",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC721CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "ERC721CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "symbol",
      "Example string value"
    )
    assert.fieldEquals(
      "ERC721CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "initialOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC721CollectionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "maxSupply",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
