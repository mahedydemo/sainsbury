"use strict";

// Auto-generated region module 16
const stores = [
  { id: "store-16-01", name: "Store 16-1", capacity: 56 },
  { id: "store-16-02", name: "Store 16-2", capacity: 72 },
  { id: "store-16-03", name: "Store 16-3", capacity: 88 },
  { id: "store-16-04", name: "Store 16-4", capacity: 104 },
  { id: "store-16-05", name: "Store 16-5", capacity: 120 },
  { id: "store-16-06", name: "Store 16-6", capacity: 136 },
  { id: "store-16-07", name: "Store 16-7", capacity: 152 },
  { id: "store-16-08", name: "Store 16-8", capacity: 168 },
  { id: "store-16-09", name: "Store 16-9", capacity: 184 },
  { id: "store-16-10", name: "Store 16-10", capacity: 200 },
  { id: "store-16-11", name: "Store 16-11", capacity: 216 },
  { id: "store-16-12", name: "Store 16-12", capacity: 232 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
