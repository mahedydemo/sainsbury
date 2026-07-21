"use strict";

// Basket-level tiered discount: larger baskets earn a bigger percentage off.
const TIERS = [
  { minPence: 5000, rate: 0.1 },
  { minPence: 2000, rate: 0.05 },
  { minPence: 1000, rate: 0.02 },
];

function tierFor(totalPence) {
  const total = Number(totalPence);
  if (!Number.isFinite(total) || total < 0) throw new Error("invalid_total");
  return TIERS.find((tier) => total >= tier.minPence) || { minPence: 0, rate: 0 };
}

function discountFor(totalPence) {
  const tier = tierFor(totalPence);
  return Math.round(Number(totalPence) * tier.rate);
}

function applyBasketDiscount(totalPence) {
  const discountPence = discountFor(totalPence);
  return {
    totalPence: Number(totalPence),
    discountPence,
    payablePence: Number(totalPence) - discountPence,
  };
}

module.exports = { TIERS, tierFor, discountFor, applyBasketDiscount };
