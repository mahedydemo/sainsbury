"use strict";

// Auto-generated region module 26
const stores = [
  { id: "store-26-01", name: "Store 26-1", capacity: 66 },
  { id: "store-26-02", name: "Store 26-2", capacity: 92 },
  { id: "store-26-03", name: "Store 26-3", capacity: 118 },
  { id: "store-26-04", name: "Store 26-4", capacity: 144 },
  { id: "store-26-05", name: "Store 26-5", capacity: 170 },
  { id: "store-26-06", name: "Store 26-6", capacity: 196 },
  { id: "store-26-07", name: "Store 26-7", capacity: 222 },
  { id: "store-26-08", name: "Store 26-8", capacity: 248 },
  { id: "store-26-09", name: "Store 26-9", capacity: 274 },
  { id: "store-26-10", name: "Store 26-10", capacity: 300 },
  { id: "store-26-11", name: "Store 26-11", capacity: 326 },
  { id: "store-26-12", name: "Store 26-12", capacity: 352 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
