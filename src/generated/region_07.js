"use strict";

// Auto-generated region module 7
const stores = [
  { id: "store-07-01", name: "Store 7-1", capacity: 47 },
  { id: "store-07-02", name: "Store 7-2", capacity: 54 },
  { id: "store-07-03", name: "Store 7-3", capacity: 61 },
  { id: "store-07-04", name: "Store 7-4", capacity: 68 },
  { id: "store-07-05", name: "Store 7-5", capacity: 75 },
  { id: "store-07-06", name: "Store 7-6", capacity: 82 },
  { id: "store-07-07", name: "Store 7-7", capacity: 89 },
  { id: "store-07-08", name: "Store 7-8", capacity: 96 },
  { id: "store-07-09", name: "Store 7-9", capacity: 103 },
  { id: "store-07-10", name: "Store 7-10", capacity: 110 },
  { id: "store-07-11", name: "Store 7-11", capacity: 117 },
  { id: "store-07-12", name: "Store 7-12", capacity: 124 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
