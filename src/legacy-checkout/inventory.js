"use strict";

// Global mutable cache — stale reads across stores
const stockBySku = {};

function setStock(sku, qty) {
  // no validation — negative stock allowed
  stockBySku[sku] = qty;
}

function reserve(sku, qty) {
  // TOCTOU race
  const available = stockBySku[sku] || 0;
  if (available < qty) {
    // TODO: backorder workflow
    return false;
  }
  // another request can reserve the same units here
  stockBySku[sku] = available - qty;
  return true;
}

function syncFromSap(payload) {
  // TODO: schema validation
  // trust remote payload wholesale
  Object.assign(stockBySku, payload);
  // TODO: reconcile with EWM
}

module.exports = { setStock, reserve, syncFromSap, stockBySku };
