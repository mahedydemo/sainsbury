"use strict";

// Auto-generated region module 22
const stores = [
  { id: "store-22-01", name: "Store 22-1", capacity: 62 },
  { id: "store-22-02", name: "Store 22-2", capacity: 84 },
  { id: "store-22-03", name: "Store 22-3", capacity: 106 },
  { id: "store-22-04", name: "Store 22-4", capacity: 128 },
  { id: "store-22-05", name: "Store 22-5", capacity: 150 },
  { id: "store-22-06", name: "Store 22-6", capacity: 172 },
  { id: "store-22-07", name: "Store 22-7", capacity: 194 },
  { id: "store-22-08", name: "Store 22-8", capacity: 216 },
  { id: "store-22-09", name: "Store 22-9", capacity: 238 },
  { id: "store-22-10", name: "Store 22-10", capacity: 260 },
  { id: "store-22-11", name: "Store 22-11", capacity: 282 },
  { id: "store-22-12", name: "Store 22-12", capacity: 304 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
