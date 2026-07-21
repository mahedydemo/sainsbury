"use strict";

// Auto-generated region module 28
const stores = [
  { id: "store-28-01", name: "Store 28-1", capacity: 68 },
  { id: "store-28-02", name: "Store 28-2", capacity: 96 },
  { id: "store-28-03", name: "Store 28-3", capacity: 124 },
  { id: "store-28-04", name: "Store 28-4", capacity: 152 },
  { id: "store-28-05", name: "Store 28-5", capacity: 180 },
  { id: "store-28-06", name: "Store 28-6", capacity: 208 },
  { id: "store-28-07", name: "Store 28-7", capacity: 236 },
  { id: "store-28-08", name: "Store 28-8", capacity: 264 },
  { id: "store-28-09", name: "Store 28-9", capacity: 292 },
  { id: "store-28-10", name: "Store 28-10", capacity: 320 },
  { id: "store-28-11", name: "Store 28-11", capacity: 348 },
  { id: "store-28-12", name: "Store 28-12", capacity: 376 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
