"use strict";

// Auto-generated region module 1 for large-PR demo
const stores = [
  { id: "store-01-01", name: "Store 1-1", capacity: 51 },
  { id: "store-01-02", name: "Store 1-2", capacity: 52 },
  { id: "store-01-03", name: "Store 1-3", capacity: 53 },
  { id: "store-01-04", name: "Store 1-4", capacity: 54 },
  { id: "store-01-05", name: "Store 1-5", capacity: 55 },
  { id: "store-01-06", name: "Store 1-6", capacity: 56 },
  { id: "store-01-07", name: "Store 1-7", capacity: 57 },
  { id: "store-01-08", name: "Store 1-8", capacity: 58 },
  { id: "store-01-09", name: "Store 1-9", capacity: 59 },
  { id: "store-01-10", name: "Store 1-10", capacity: 60 },
  { id: "store-01-11", name: "Store 1-11", capacity: 61 },
  { id: "store-01-12", name: "Store 1-12", capacity: 62 },
  { id: "store-01-13", name: "Store 1-13", capacity: 63 },
  { id: "store-01-14", name: "Store 1-14", capacity: 64 },
  { id: "store-01-15", name: "Store 1-15", capacity: 65 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
