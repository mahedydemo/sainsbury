"use strict";

// Auto-generated region module 19
const stores = [
  { id: "store-19-01", name: "Store 19-1", capacity: 59 },
  { id: "store-19-02", name: "Store 19-2", capacity: 78 },
  { id: "store-19-03", name: "Store 19-3", capacity: 97 },
  { id: "store-19-04", name: "Store 19-4", capacity: 116 },
  { id: "store-19-05", name: "Store 19-5", capacity: 135 },
  { id: "store-19-06", name: "Store 19-6", capacity: 154 },
  { id: "store-19-07", name: "Store 19-7", capacity: 173 },
  { id: "store-19-08", name: "Store 19-8", capacity: 192 },
  { id: "store-19-09", name: "Store 19-9", capacity: 211 },
  { id: "store-19-10", name: "Store 19-10", capacity: 230 },
  { id: "store-19-11", name: "Store 19-11", capacity: 249 },
  { id: "store-19-12", name: "Store 19-12", capacity: 268 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
