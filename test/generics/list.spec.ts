import "mocha"
import { expect } from "chai"


import { list } from "schematic-fp"


context("List", () => {
   it("behave as expected", () => {
      expect(list([1, 2, 3])).to.deep.equal([1, 2, 3])
   })
})
