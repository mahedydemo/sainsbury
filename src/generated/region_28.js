"use strict";

// Auto-generated region module 28 for large-PR demo
const stores = [
  { id: "store-28-01", name: "Store 28-1", capacity: 78 },
  { id: "store-28-02", name: "Store 28-2", capacity: 106 },
  { id: "store-28-03", name: "Store 28-3", capacity: 134 },
  { id: "store-28-04", name: "Store 28-4", capacity: 162 },
  { id: "store-28-05", name: "Store 28-5", capacity: 190 },
  { id: "store-28-06", name: "Store 28-6", capacity: 218 },
  { id: "store-28-07", name: "Store 28-7", capacity: 246 },
  { id: "store-28-08", name: "Store 28-8", capacity: 274 },
  { id: "store-28-09", name: "Store 28-9", capacity: 302 },
  { id: "store-28-10", name: "Store 28-10", capacity: 330 },
  { id: "store-28-11", name: "Store 28-11", capacity: 358 },
  { id: "store-28-12", name: "Store 28-12", capacity: 386 },
  { id: "store-28-13", name: "Store 28-13", capacity: 414 },
  { id: "store-28-14", name: "Store 28-14", capacity: 442 },
  { id: "store-28-15", name: "Store 28-15", capacity: 470 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
