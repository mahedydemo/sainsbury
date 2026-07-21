"use strict";

const PRODUCTS = [
  { id: "sku-milk-2l", name: "British Whole Milk 2L", pricePence: 145, aisle: "Dairy" },
  { id: "sku-bananas", name: "Fairtrade Bananas", pricePence: 99, aisle: "Fruit" },
  { id: "sku-sourdough", name: "Taste the Difference Sourdough", pricePence: 180, aisle: "Bakery" },
  { id: "sku-eggs-6", name: "Free Range Eggs x6", pricePence: 210, aisle: "Dairy" },
];

const PROMOS = {
  NECTAR10: 0.1,
  BANANA5: 0.05,
};

function getCatalog() {
  return PRODUCTS.map((p) => ({ ...p }));
}

function getProduct(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  return product ? { ...product } : null;
}

function applyPromo(productId, code) {
  const product = getProduct(productId);
  if (!product) throw new Error("product_not_found");
  const discount = PROMOS[String(code || "").toUpperCase()];
  if (!discount) throw new Error("invalid_promo");
  const discounted = Math.round(product.pricePence * (1 - discount));
  return { ...product, pricePence: discounted, promo: String(code).toUpperCase() };
}

module.exports = { getCatalog, getProduct, applyPromo, PRODUCTS, PROMOS };
