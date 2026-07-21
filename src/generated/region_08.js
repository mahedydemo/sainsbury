"use strict";

// Auto-generated region module 8
const stores = [
  { id: "store-08-01", name: "Store 8-1", capacity: 48 },
  { id: "store-08-02", name: "Store 8-2", capacity: 56 },
  { id: "store-08-03", name: "Store 8-3", capacity: 64 },
  { id: "store-08-04", name: "Store 8-4", capacity: 72 },
  { id: "store-08-05", name: "Store 8-5", capacity: 80 },
  { id: "store-08-06", name: "Store 8-6", capacity: 88 },
  { id: "store-08-07", name: "Store 8-7", capacity: 96 },
  { id: "store-08-08", name: "Store 8-8", capacity: 104 },
  { id: "store-08-09", name: "Store 8-9", capacity: 112 },
  { id: "store-08-10", name: "Store 8-10", capacity: 120 },
  { id: "store-08-11", name: "Store 8-11", capacity: 128 },
  { id: "store-08-12", name: "Store 8-12", capacity: 136 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
