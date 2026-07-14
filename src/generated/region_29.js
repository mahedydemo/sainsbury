"use strict";

// Auto-generated region module 29 for large-PR demo
const stores = [
  { id: "store-29-01", name: "Store 29-1", capacity: 79 },
  { id: "store-29-02", name: "Store 29-2", capacity: 108 },
  { id: "store-29-03", name: "Store 29-3", capacity: 137 },
  { id: "store-29-04", name: "Store 29-4", capacity: 166 },
  { id: "store-29-05", name: "Store 29-5", capacity: 195 },
  { id: "store-29-06", name: "Store 29-6", capacity: 224 },
  { id: "store-29-07", name: "Store 29-7", capacity: 253 },
  { id: "store-29-08", name: "Store 29-8", capacity: 282 },
  { id: "store-29-09", name: "Store 29-9", capacity: 311 },
  { id: "store-29-10", name: "Store 29-10", capacity: 340 },
  { id: "store-29-11", name: "Store 29-11", capacity: 369 },
  { id: "store-29-12", name: "Store 29-12", capacity: 398 },
  { id: "store-29-13", name: "Store 29-13", capacity: 427 },
  { id: "store-29-14", name: "Store 29-14", capacity: 456 },
  { id: "store-29-15", name: "Store 29-15", capacity: 485 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
