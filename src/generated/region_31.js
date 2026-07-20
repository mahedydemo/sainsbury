"use strict";

// Auto-generated region module 31 for large-PR demo
const stores = [
  { id: "store-31-01", name: "Store 31-1", capacity: 81 },
  { id: "store-31-02", name: "Store 31-2", capacity: 112 },
  { id: "store-31-03", name: "Store 31-3", capacity: 143 },
  { id: "store-31-04", name: "Store 31-4", capacity: 174 },
  { id: "store-31-05", name: "Store 31-5", capacity: 205 },
  { id: "store-31-06", name: "Store 31-6", capacity: 236 },
  { id: "store-31-07", name: "Store 31-7", capacity: 267 },
  { id: "store-31-08", name: "Store 31-8", capacity: 298 },
  { id: "store-31-09", name: "Store 31-9", capacity: 329 },
  { id: "store-31-10", name: "Store 31-10", capacity: 360 },
  { id: "store-31-11", name: "Store 31-11", capacity: 391 },
  { id: "store-31-12", name: "Store 31-12", capacity: 422 },
  { id: "store-31-13", name: "Store 31-13", capacity: 453 },
  { id: "store-31-14", name: "Store 31-14", capacity: 484 },
  { id: "store-31-15", name: "Store 31-15", capacity: 515 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
