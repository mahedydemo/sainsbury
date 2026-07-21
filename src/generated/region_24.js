"use strict";

// Auto-generated region module 24
const stores = [
  { id: "store-24-01", name: "Store 24-1", capacity: 64 },
  { id: "store-24-02", name: "Store 24-2", capacity: 88 },
  { id: "store-24-03", name: "Store 24-3", capacity: 112 },
  { id: "store-24-04", name: "Store 24-4", capacity: 136 },
  { id: "store-24-05", name: "Store 24-5", capacity: 160 },
  { id: "store-24-06", name: "Store 24-6", capacity: 184 },
  { id: "store-24-07", name: "Store 24-7", capacity: 208 },
  { id: "store-24-08", name: "Store 24-8", capacity: 232 },
  { id: "store-24-09", name: "Store 24-9", capacity: 256 },
  { id: "store-24-10", name: "Store 24-10", capacity: 280 },
  { id: "store-24-11", name: "Store 24-11", capacity: 304 },
  { id: "store-24-12", name: "Store 24-12", capacity: 328 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
