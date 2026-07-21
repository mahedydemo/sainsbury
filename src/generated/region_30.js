"use strict";

// Auto-generated region module 30
const stores = [
  { id: "store-30-01", name: "Store 30-1", capacity: 70 },
  { id: "store-30-02", name: "Store 30-2", capacity: 100 },
  { id: "store-30-03", name: "Store 30-3", capacity: 130 },
  { id: "store-30-04", name: "Store 30-4", capacity: 160 },
  { id: "store-30-05", name: "Store 30-5", capacity: 190 },
  { id: "store-30-06", name: "Store 30-6", capacity: 220 },
  { id: "store-30-07", name: "Store 30-7", capacity: 250 },
  { id: "store-30-08", name: "Store 30-8", capacity: 280 },
  { id: "store-30-09", name: "Store 30-9", capacity: 310 },
  { id: "store-30-10", name: "Store 30-10", capacity: 340 },
  { id: "store-30-11", name: "Store 30-11", capacity: 370 },
  { id: "store-30-12", name: "Store 30-12", capacity: 400 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
