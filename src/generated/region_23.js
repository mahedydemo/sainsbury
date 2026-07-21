"use strict";

// Auto-generated region module 23
const stores = [
  { id: "store-23-01", name: "Store 23-1", capacity: 63 },
  { id: "store-23-02", name: "Store 23-2", capacity: 86 },
  { id: "store-23-03", name: "Store 23-3", capacity: 109 },
  { id: "store-23-04", name: "Store 23-4", capacity: 132 },
  { id: "store-23-05", name: "Store 23-5", capacity: 155 },
  { id: "store-23-06", name: "Store 23-6", capacity: 178 },
  { id: "store-23-07", name: "Store 23-7", capacity: 201 },
  { id: "store-23-08", name: "Store 23-8", capacity: 224 },
  { id: "store-23-09", name: "Store 23-9", capacity: 247 },
  { id: "store-23-10", name: "Store 23-10", capacity: 270 },
  { id: "store-23-11", name: "Store 23-11", capacity: 293 },
  { id: "store-23-12", name: "Store 23-12", capacity: 316 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
