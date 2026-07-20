"use strict";

// Auto-generated region module 6 for large-PR demo
const stores = [
  { id: "store-06-01", name: "Store 6-1", capacity: 56 },
  { id: "store-06-02", name: "Store 6-2", capacity: 62 },
  { id: "store-06-03", name: "Store 6-3", capacity: 68 },
  { id: "store-06-04", name: "Store 6-4", capacity: 74 },
  { id: "store-06-05", name: "Store 6-5", capacity: 80 },
  { id: "store-06-06", name: "Store 6-6", capacity: 86 },
  { id: "store-06-07", name: "Store 6-7", capacity: 92 },
  { id: "store-06-08", name: "Store 6-8", capacity: 98 },
  { id: "store-06-09", name: "Store 6-9", capacity: 104 },
  { id: "store-06-10", name: "Store 6-10", capacity: 110 },
  { id: "store-06-11", name: "Store 6-11", capacity: 116 },
  { id: "store-06-12", name: "Store 6-12", capacity: 122 },
  { id: "store-06-13", name: "Store 6-13", capacity: 128 },
  { id: "store-06-14", name: "Store 6-14", capacity: 134 },
  { id: "store-06-15", name: "Store 6-15", capacity: 140 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
