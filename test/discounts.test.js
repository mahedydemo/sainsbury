"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { discountFor, applyBasketDiscount } = require("../src/discounts");

describe("discounts", () => {
  it("gives no discount under 10 pounds", () => {
    assert.equal(discountFor(999), 0);
  });

  it("gives 2% between 10 and 20 pounds", () => {
    assert.equal(discountFor(1500), 30);
  });

  it("gives 10% at 50 pounds", () => {
    const result = applyBasketDiscount(5000);
    assert.equal(result.discountPence, 500);
    assert.equal(result.payablePence, 4500);
  });
});
