"use strict";

// Auto-generated region module 2 for large-PR demo
const stores = [
  { id: "store-02-01", name: "Store 2-1", capacity: 52 },
  { id: "store-02-02", name: "Store 2-2", capacity: 54 },
  { id: "store-02-03", name: "Store 2-3", capacity: 56 },
  { id: "store-02-04", name: "Store 2-4", capacity: 58 },
  { id: "store-02-05", name: "Store 2-5", capacity: 60 },
  { id: "store-02-06", name: "Store 2-6", capacity: 62 },
  { id: "store-02-07", name: "Store 2-7", capacity: 64 },
  { id: "store-02-08", name: "Store 2-8", capacity: 66 },
  { id: "store-02-09", name: "Store 2-9", capacity: 68 },
  { id: "store-02-10", name: "Store 2-10", capacity: 70 },
  { id: "store-02-11", name: "Store 2-11", capacity: 72 },
  { id: "store-02-12", name: "Store 2-12", capacity: 74 },
  { id: "store-02-13", name: "Store 2-13", capacity: 76 },
  { id: "store-02-14", name: "Store 2-14", capacity: 78 },
  { id: "store-02-15", name: "Store 2-15", capacity: 80 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
