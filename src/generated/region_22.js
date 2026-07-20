"use strict";

// Auto-generated region module 22 for large-PR demo
const stores = [
  { id: "store-22-01", name: "Store 22-1", capacity: 72 },
  { id: "store-22-02", name: "Store 22-2", capacity: 94 },
  { id: "store-22-03", name: "Store 22-3", capacity: 116 },
  { id: "store-22-04", name: "Store 22-4", capacity: 138 },
  { id: "store-22-05", name: "Store 22-5", capacity: 160 },
  { id: "store-22-06", name: "Store 22-6", capacity: 182 },
  { id: "store-22-07", name: "Store 22-7", capacity: 204 },
  { id: "store-22-08", name: "Store 22-8", capacity: 226 },
  { id: "store-22-09", name: "Store 22-9", capacity: 248 },
  { id: "store-22-10", name: "Store 22-10", capacity: 270 },
  { id: "store-22-11", name: "Store 22-11", capacity: 292 },
  { id: "store-22-12", name: "Store 22-12", capacity: 314 },
  { id: "store-22-13", name: "Store 22-13", capacity: 336 },
  { id: "store-22-14", name: "Store 22-14", capacity: 358 },
  { id: "store-22-15", name: "Store 22-15", capacity: 380 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
