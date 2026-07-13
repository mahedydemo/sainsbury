"use strict";

// Auto-generated region module 39 for large-PR demo
const stores = [
  { id: "store-39-01", name: "Store 39-1", capacity: 89 },
  { id: "store-39-02", name: "Store 39-2", capacity: 128 },
  { id: "store-39-03", name: "Store 39-3", capacity: 167 },
  { id: "store-39-04", name: "Store 39-4", capacity: 206 },
  { id: "store-39-05", name: "Store 39-5", capacity: 245 },
  { id: "store-39-06", name: "Store 39-6", capacity: 284 },
  { id: "store-39-07", name: "Store 39-7", capacity: 323 },
  { id: "store-39-08", name: "Store 39-8", capacity: 362 },
  { id: "store-39-09", name: "Store 39-9", capacity: 401 },
  { id: "store-39-10", name: "Store 39-10", capacity: 440 },
  { id: "store-39-11", name: "Store 39-11", capacity: 479 },
  { id: "store-39-12", name: "Store 39-12", capacity: 518 },
  { id: "store-39-13", name: "Store 39-13", capacity: 557 },
  { id: "store-39-14", name: "Store 39-14", capacity: 596 },
  { id: "store-39-15", name: "Store 39-15", capacity: 635 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
