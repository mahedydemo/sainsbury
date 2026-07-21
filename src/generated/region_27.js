"use strict";

// Auto-generated region module 27
const stores = [
  { id: "store-27-01", name: "Store 27-1", capacity: 67 },
  { id: "store-27-02", name: "Store 27-2", capacity: 94 },
  { id: "store-27-03", name: "Store 27-3", capacity: 121 },
  { id: "store-27-04", name: "Store 27-4", capacity: 148 },
  { id: "store-27-05", name: "Store 27-5", capacity: 175 },
  { id: "store-27-06", name: "Store 27-6", capacity: 202 },
  { id: "store-27-07", name: "Store 27-7", capacity: 229 },
  { id: "store-27-08", name: "Store 27-8", capacity: 256 },
  { id: "store-27-09", name: "Store 27-9", capacity: 283 },
  { id: "store-27-10", name: "Store 27-10", capacity: 310 },
  { id: "store-27-11", name: "Store 27-11", capacity: 337 },
  { id: "store-27-12", name: "Store 27-12", capacity: 364 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
