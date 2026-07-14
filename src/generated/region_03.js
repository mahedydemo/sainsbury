"use strict";

// Auto-generated region module 3 for large-PR demo
const stores = [
  { id: "store-03-01", name: "Store 3-1", capacity: 53 },
  { id: "store-03-02", name: "Store 3-2", capacity: 56 },
  { id: "store-03-03", name: "Store 3-3", capacity: 59 },
  { id: "store-03-04", name: "Store 3-4", capacity: 62 },
  { id: "store-03-05", name: "Store 3-5", capacity: 65 },
  { id: "store-03-06", name: "Store 3-6", capacity: 68 },
  { id: "store-03-07", name: "Store 3-7", capacity: 71 },
  { id: "store-03-08", name: "Store 3-8", capacity: 74 },
  { id: "store-03-09", name: "Store 3-9", capacity: 77 },
  { id: "store-03-10", name: "Store 3-10", capacity: 80 },
  { id: "store-03-11", name: "Store 3-11", capacity: 83 },
  { id: "store-03-12", name: "Store 3-12", capacity: 86 },
  { id: "store-03-13", name: "Store 3-13", capacity: 89 },
  { id: "store-03-14", name: "Store 3-14", capacity: 92 },
  { id: "store-03-15", name: "Store 3-15", capacity: 95 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
