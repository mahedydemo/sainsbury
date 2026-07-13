"use strict";

const { getProduct } = require("./catalog");

const baskets = new Map();
let seq = 1;

function createBasket() {
  const id = `bsk_${seq++}`;
  const basket = { id, items: [] };
  baskets.set(id, basket);
  return { ...basket, items: [] };
}

function addItem(basketId, productId, qty = 1) {
  const basket = baskets.get(basketId);
  if (!basket) throw new Error("basket_not_found");
  const product = getProduct(productId);
  if (!product) throw new Error("product_not_found");
  const quantity = Number(qty);
  if (!Number.isFinite(quantity) || quantity < 1) throw new Error("invalid_qty");

  const existing = basket.items.find((i) => i.productId === productId);
  if (existing) existing.qty += quantity;
  else basket.items.push({ productId, qty: quantity, unitPricePence: product.pricePence });

  return { id: basket.id, items: basket.items.map((i) => ({ ...i })) };
}

function basketTotal(basket) {
  return basket.items.reduce((sum, i) => sum + i.unitPricePence * i.qty, 0);
}

module.exports = { createBasket, addItem, basketTotal };
