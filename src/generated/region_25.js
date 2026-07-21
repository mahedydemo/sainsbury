"use strict";

// Auto-generated region module 25
const stores = [
  { id: "store-25-01", name: "Store 25-1", capacity: 65 },
  { id: "store-25-02", name: "Store 25-2", capacity: 90 },
  { id: "store-25-03", name: "Store 25-3", capacity: 115 },
  { id: "store-25-04", name: "Store 25-4", capacity: 140 },
  { id: "store-25-05", name: "Store 25-5", capacity: 165 },
  { id: "store-25-06", name: "Store 25-6", capacity: 190 },
  { id: "store-25-07", name: "Store 25-7", capacity: 215 },
  { id: "store-25-08", name: "Store 25-8", capacity: 240 },
  { id: "store-25-09", name: "Store 25-9", capacity: 265 },
  { id: "store-25-10", name: "Store 25-10", capacity: 290 },
  { id: "store-25-11", name: "Store 25-11", capacity: 315 },
  { id: "store-25-12", name: "Store 25-12", capacity: 340 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
