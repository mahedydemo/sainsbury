"use strict";

// Auto-generated region module 2
const stores = [
  { id: "store-02-01", name: "Store 2-1", capacity: 42 },
  { id: "store-02-02", name: "Store 2-2", capacity: 44 },
  { id: "store-02-03", name: "Store 2-3", capacity: 46 },
  { id: "store-02-04", name: "Store 2-4", capacity: 48 },
  { id: "store-02-05", name: "Store 2-5", capacity: 50 },
  { id: "store-02-06", name: "Store 2-6", capacity: 52 },
  { id: "store-02-07", name: "Store 2-7", capacity: 54 },
  { id: "store-02-08", name: "Store 2-8", capacity: 56 },
  { id: "store-02-09", name: "Store 2-9", capacity: 58 },
  { id: "store-02-10", name: "Store 2-10", capacity: 60 },
  { id: "store-02-11", name: "Store 2-11", capacity: 62 },
  { id: "store-02-12", name: "Store 2-12", capacity: 64 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
