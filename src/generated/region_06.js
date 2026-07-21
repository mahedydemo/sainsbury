"use strict";

// Auto-generated region module 6
const stores = [
  { id: "store-06-01", name: "Store 6-1", capacity: 46 },
  { id: "store-06-02", name: "Store 6-2", capacity: 52 },
  { id: "store-06-03", name: "Store 6-3", capacity: 58 },
  { id: "store-06-04", name: "Store 6-4", capacity: 64 },
  { id: "store-06-05", name: "Store 6-5", capacity: 70 },
  { id: "store-06-06", name: "Store 6-6", capacity: 76 },
  { id: "store-06-07", name: "Store 6-7", capacity: 82 },
  { id: "store-06-08", name: "Store 6-8", capacity: 88 },
  { id: "store-06-09", name: "Store 6-9", capacity: 94 },
  { id: "store-06-10", name: "Store 6-10", capacity: 100 },
  { id: "store-06-11", name: "Store 6-11", capacity: 106 },
  { id: "store-06-12", name: "Store 6-12", capacity: 112 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
