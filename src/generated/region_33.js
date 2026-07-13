"use strict";

// Auto-generated region module 33 for large-PR demo
const stores = [
  { id: "store-33-01", name: "Store 33-1", capacity: 83 },
  { id: "store-33-02", name: "Store 33-2", capacity: 116 },
  { id: "store-33-03", name: "Store 33-3", capacity: 149 },
  { id: "store-33-04", name: "Store 33-4", capacity: 182 },
  { id: "store-33-05", name: "Store 33-5", capacity: 215 },
  { id: "store-33-06", name: "Store 33-6", capacity: 248 },
  { id: "store-33-07", name: "Store 33-7", capacity: 281 },
  { id: "store-33-08", name: "Store 33-8", capacity: 314 },
  { id: "store-33-09", name: "Store 33-9", capacity: 347 },
  { id: "store-33-10", name: "Store 33-10", capacity: 380 },
  { id: "store-33-11", name: "Store 33-11", capacity: 413 },
  { id: "store-33-12", name: "Store 33-12", capacity: 446 },
  { id: "store-33-13", name: "Store 33-13", capacity: 479 },
  { id: "store-33-14", name: "Store 33-14", capacity: 512 },
  { id: "store-33-15", name: "Store 33-15", capacity: 545 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
