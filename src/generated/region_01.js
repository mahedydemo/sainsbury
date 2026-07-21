"use strict";

// Auto-generated region module 1
const stores = [
  { id: "store-01-01", name: "Store 1-1", capacity: 41 },
  { id: "store-01-02", name: "Store 1-2", capacity: 42 },
  { id: "store-01-03", name: "Store 1-3", capacity: 43 },
  { id: "store-01-04", name: "Store 1-4", capacity: 44 },
  { id: "store-01-05", name: "Store 1-5", capacity: 45 },
  { id: "store-01-06", name: "Store 1-6", capacity: 46 },
  { id: "store-01-07", name: "Store 1-7", capacity: 47 },
  { id: "store-01-08", name: "Store 1-8", capacity: 48 },
  { id: "store-01-09", name: "Store 1-9", capacity: 49 },
  { id: "store-01-10", name: "Store 1-10", capacity: 50 },
  { id: "store-01-11", name: "Store 1-11", capacity: 51 },
  { id: "store-01-12", name: "Store 1-12", capacity: 52 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
