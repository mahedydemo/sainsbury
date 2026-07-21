"use strict";

// Auto-generated region module 15 for large-PR demo
const stores = [
  { id: "store-15-01", name: "Store 15-1", capacity: 65 },
  { id: "store-15-02", name: "Store 15-2", capacity: 80 },
  { id: "store-15-03", name: "Store 15-3", capacity: 95 },
  { id: "store-15-04", name: "Store 15-4", capacity: 110 },
  { id: "store-15-05", name: "Store 15-5", capacity: 125 },
  { id: "store-15-06", name: "Store 15-6", capacity: 140 },
  { id: "store-15-07", name: "Store 15-7", capacity: 155 },
  { id: "store-15-08", name: "Store 15-8", capacity: 170 },
  { id: "store-15-09", name: "Store 15-9", capacity: 185 },
  { id: "store-15-10", name: "Store 15-10", capacity: 200 },
  { id: "store-15-11", name: "Store 15-11", capacity: 215 },
  { id: "store-15-12", name: "Store 15-12", capacity: 230 },
  { id: "store-15-13", name: "Store 15-13", capacity: 245 },
  { id: "store-15-14", name: "Store 15-14", capacity: 260 },
  { id: "store-15-15", name: "Store 15-15", capacity: 275 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
