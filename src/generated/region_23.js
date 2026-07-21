"use strict";

// Auto-generated region module 23 for large-PR demo
const stores = [
  { id: "store-23-01", name: "Store 23-1", capacity: 73 },
  { id: "store-23-02", name: "Store 23-2", capacity: 96 },
  { id: "store-23-03", name: "Store 23-3", capacity: 119 },
  { id: "store-23-04", name: "Store 23-4", capacity: 142 },
  { id: "store-23-05", name: "Store 23-5", capacity: 165 },
  { id: "store-23-06", name: "Store 23-6", capacity: 188 },
  { id: "store-23-07", name: "Store 23-7", capacity: 211 },
  { id: "store-23-08", name: "Store 23-8", capacity: 234 },
  { id: "store-23-09", name: "Store 23-9", capacity: 257 },
  { id: "store-23-10", name: "Store 23-10", capacity: 280 },
  { id: "store-23-11", name: "Store 23-11", capacity: 303 },
  { id: "store-23-12", name: "Store 23-12", capacity: 326 },
  { id: "store-23-13", name: "Store 23-13", capacity: 349 },
  { id: "store-23-14", name: "Store 23-14", capacity: 372 },
  { id: "store-23-15", name: "Store 23-15", capacity: 395 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
