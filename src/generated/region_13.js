"use strict";

// Auto-generated region module 13
const stores = [
  { id: "store-13-01", name: "Store 13-1", capacity: 53 },
  { id: "store-13-02", name: "Store 13-2", capacity: 66 },
  { id: "store-13-03", name: "Store 13-3", capacity: 79 },
  { id: "store-13-04", name: "Store 13-4", capacity: 92 },
  { id: "store-13-05", name: "Store 13-5", capacity: 105 },
  { id: "store-13-06", name: "Store 13-6", capacity: 118 },
  { id: "store-13-07", name: "Store 13-7", capacity: 131 },
  { id: "store-13-08", name: "Store 13-8", capacity: 144 },
  { id: "store-13-09", name: "Store 13-9", capacity: 157 },
  { id: "store-13-10", name: "Store 13-10", capacity: 170 },
  { id: "store-13-11", name: "Store 13-11", capacity: 183 },
  { id: "store-13-12", name: "Store 13-12", capacity: 196 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
