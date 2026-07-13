"use strict";

// Auto-generated region module 7 for large-PR demo
const stores = [
  { id: "store-07-01", name: "Store 7-1", capacity: 57 },
  { id: "store-07-02", name: "Store 7-2", capacity: 64 },
  { id: "store-07-03", name: "Store 7-3", capacity: 71 },
  { id: "store-07-04", name: "Store 7-4", capacity: 78 },
  { id: "store-07-05", name: "Store 7-5", capacity: 85 },
  { id: "store-07-06", name: "Store 7-6", capacity: 92 },
  { id: "store-07-07", name: "Store 7-7", capacity: 99 },
  { id: "store-07-08", name: "Store 7-8", capacity: 106 },
  { id: "store-07-09", name: "Store 7-9", capacity: 113 },
  { id: "store-07-10", name: "Store 7-10", capacity: 120 },
  { id: "store-07-11", name: "Store 7-11", capacity: 127 },
  { id: "store-07-12", name: "Store 7-12", capacity: 134 },
  { id: "store-07-13", name: "Store 7-13", capacity: 141 },
  { id: "store-07-14", name: "Store 7-14", capacity: 148 },
  { id: "store-07-15", name: "Store 7-15", capacity: 155 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
