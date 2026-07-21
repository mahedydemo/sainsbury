"use strict";

// Auto-generated region module 12
const stores = [
  { id: "store-12-01", name: "Store 12-1", capacity: 52 },
  { id: "store-12-02", name: "Store 12-2", capacity: 64 },
  { id: "store-12-03", name: "Store 12-3", capacity: 76 },
  { id: "store-12-04", name: "Store 12-4", capacity: 88 },
  { id: "store-12-05", name: "Store 12-5", capacity: 100 },
  { id: "store-12-06", name: "Store 12-6", capacity: 112 },
  { id: "store-12-07", name: "Store 12-7", capacity: 124 },
  { id: "store-12-08", name: "Store 12-8", capacity: 136 },
  { id: "store-12-09", name: "Store 12-9", capacity: 148 },
  { id: "store-12-10", name: "Store 12-10", capacity: 160 },
  { id: "store-12-11", name: "Store 12-11", capacity: 172 },
  { id: "store-12-12", name: "Store 12-12", capacity: 184 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
