"use strict";

const { PRODUCTS } = require("./catalog");

// Simple in-memory stock ledger keyed by product id. Seeds every catalog SKU.
const stock = new Map(PRODUCTS.map((product) => [product.id, 100]));

function getStock(id) {
  return stock.has(id) ? stock.get(id) : null;
}

function listInventory() {
  return PRODUCTS.map((product) => ({
    id: product.id,
    name: product.name,
    stock: stock.get(product.id),
  }));
}

function adjustStock(id, delta) {
  if (!stock.has(id)) throw new Error("product_not_found");
  const next = stock.get(id) + Number(delta);
  if (!Number.isFinite(next) || next < 0) throw new Error("invalid_stock");
  stock.set(id, next);
  return { id, stock: next };
}

function reserve(id, qty) {
  return adjustStock(id, -Math.abs(Number(qty)));
}

module.exports = { getStock, listInventory, adjustStock, reserve, stock };
