"use strict";

// Auto-generated region module 18
const stores = [
  { id: "store-18-01", name: "Store 18-1", capacity: 58 },
  { id: "store-18-02", name: "Store 18-2", capacity: 76 },
  { id: "store-18-03", name: "Store 18-3", capacity: 94 },
  { id: "store-18-04", name: "Store 18-4", capacity: 112 },
  { id: "store-18-05", name: "Store 18-5", capacity: 130 },
  { id: "store-18-06", name: "Store 18-6", capacity: 148 },
  { id: "store-18-07", name: "Store 18-7", capacity: 166 },
  { id: "store-18-08", name: "Store 18-8", capacity: 184 },
  { id: "store-18-09", name: "Store 18-9", capacity: 202 },
  { id: "store-18-10", name: "Store 18-10", capacity: 220 },
  { id: "store-18-11", name: "Store 18-11", capacity: 238 },
  { id: "store-18-12", name: "Store 18-12", capacity: 256 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
