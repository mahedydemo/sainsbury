"use strict";

// Auto-generated region module 21
const stores = [
  { id: "store-21-01", name: "Store 21-1", capacity: 61 },
  { id: "store-21-02", name: "Store 21-2", capacity: 82 },
  { id: "store-21-03", name: "Store 21-3", capacity: 103 },
  { id: "store-21-04", name: "Store 21-4", capacity: 124 },
  { id: "store-21-05", name: "Store 21-5", capacity: 145 },
  { id: "store-21-06", name: "Store 21-6", capacity: 166 },
  { id: "store-21-07", name: "Store 21-7", capacity: 187 },
  { id: "store-21-08", name: "Store 21-8", capacity: 208 },
  { id: "store-21-09", name: "Store 21-9", capacity: 229 },
  { id: "store-21-10", name: "Store 21-10", capacity: 250 },
  { id: "store-21-11", name: "Store 21-11", capacity: 271 },
  { id: "store-21-12", name: "Store 21-12", capacity: 292 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
