"use strict";

// Auto-generated region module 3
const stores = [
  { id: "store-03-01", name: "Store 3-1", capacity: 43 },
  { id: "store-03-02", name: "Store 3-2", capacity: 46 },
  { id: "store-03-03", name: "Store 3-3", capacity: 49 },
  { id: "store-03-04", name: "Store 3-4", capacity: 52 },
  { id: "store-03-05", name: "Store 3-5", capacity: 55 },
  { id: "store-03-06", name: "Store 3-6", capacity: 58 },
  { id: "store-03-07", name: "Store 3-7", capacity: 61 },
  { id: "store-03-08", name: "Store 3-8", capacity: 64 },
  { id: "store-03-09", name: "Store 3-9", capacity: 67 },
  { id: "store-03-10", name: "Store 3-10", capacity: 70 },
  { id: "store-03-11", name: "Store 3-11", capacity: 73 },
  { id: "store-03-12", name: "Store 3-12", capacity: 76 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
