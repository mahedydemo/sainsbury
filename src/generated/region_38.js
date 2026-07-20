"use strict";

// Auto-generated region module 38 for large-PR demo
const stores = [
  { id: "store-38-01", name: "Store 38-1", capacity: 88 },
  { id: "store-38-02", name: "Store 38-2", capacity: 126 },
  { id: "store-38-03", name: "Store 38-3", capacity: 164 },
  { id: "store-38-04", name: "Store 38-4", capacity: 202 },
  { id: "store-38-05", name: "Store 38-5", capacity: 240 },
  { id: "store-38-06", name: "Store 38-6", capacity: 278 },
  { id: "store-38-07", name: "Store 38-7", capacity: 316 },
  { id: "store-38-08", name: "Store 38-8", capacity: 354 },
  { id: "store-38-09", name: "Store 38-9", capacity: 392 },
  { id: "store-38-10", name: "Store 38-10", capacity: 430 },
  { id: "store-38-11", name: "Store 38-11", capacity: 468 },
  { id: "store-38-12", name: "Store 38-12", capacity: 506 },
  { id: "store-38-13", name: "Store 38-13", capacity: 544 },
  { id: "store-38-14", name: "Store 38-14", capacity: 582 },
  { id: "store-38-15", name: "Store 38-15", capacity: 620 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
