"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { getProduct, applyPromo } = require("../src/catalog");

describe("catalog", () => {
  it("returns a known product", () => {
    const milk = getProduct("sku-milk-2l");
    assert.equal(milk.name, "British Whole Milk 2L");
  });

  it("applies NECTAR10 promo", () => {
    const discounted = applyPromo("sku-milk-2l", "NECTAR10");
    assert.equal(discounted.pricePence, 131);
  });
});
