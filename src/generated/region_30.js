"use strict";

// Auto-generated region module 30 for large-PR demo
const stores = [
  { id: "store-30-01", name: "Store 30-1", capacity: 80 },
  { id: "store-30-02", name: "Store 30-2", capacity: 110 },
  { id: "store-30-03", name: "Store 30-3", capacity: 140 },
  { id: "store-30-04", name: "Store 30-4", capacity: 170 },
  { id: "store-30-05", name: "Store 30-5", capacity: 200 },
  { id: "store-30-06", name: "Store 30-6", capacity: 230 },
  { id: "store-30-07", name: "Store 30-7", capacity: 260 },
  { id: "store-30-08", name: "Store 30-8", capacity: 290 },
  { id: "store-30-09", name: "Store 30-9", capacity: 320 },
  { id: "store-30-10", name: "Store 30-10", capacity: 350 },
  { id: "store-30-11", name: "Store 30-11", capacity: 380 },
  { id: "store-30-12", name: "Store 30-12", capacity: 410 },
  { id: "store-30-13", name: "Store 30-13", capacity: 440 },
  { id: "store-30-14", name: "Store 30-14", capacity: 470 },
  { id: "store-30-15", name: "Store 30-15", capacity: 500 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
