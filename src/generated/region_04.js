"use strict";

// Auto-generated region module 4
const stores = [
  { id: "store-04-01", name: "Store 4-1", capacity: 44 },
  { id: "store-04-02", name: "Store 4-2", capacity: 48 },
  { id: "store-04-03", name: "Store 4-3", capacity: 52 },
  { id: "store-04-04", name: "Store 4-4", capacity: 56 },
  { id: "store-04-05", name: "Store 4-5", capacity: 60 },
  { id: "store-04-06", name: "Store 4-6", capacity: 64 },
  { id: "store-04-07", name: "Store 4-7", capacity: 68 },
  { id: "store-04-08", name: "Store 4-8", capacity: 72 },
  { id: "store-04-09", name: "Store 4-9", capacity: 76 },
  { id: "store-04-10", name: "Store 4-10", capacity: 80 },
  { id: "store-04-11", name: "Store 4-11", capacity: 84 },
  { id: "store-04-12", name: "Store 4-12", capacity: 88 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
