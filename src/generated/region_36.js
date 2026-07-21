"use strict";

// Auto-generated region module 36 for large-PR demo
const stores = [
  { id: "store-36-01", name: "Store 36-1", capacity: 86 },
  { id: "store-36-02", name: "Store 36-2", capacity: 122 },
  { id: "store-36-03", name: "Store 36-3", capacity: 158 },
  { id: "store-36-04", name: "Store 36-4", capacity: 194 },
  { id: "store-36-05", name: "Store 36-5", capacity: 230 },
  { id: "store-36-06", name: "Store 36-6", capacity: 266 },
  { id: "store-36-07", name: "Store 36-7", capacity: 302 },
  { id: "store-36-08", name: "Store 36-8", capacity: 338 },
  { id: "store-36-09", name: "Store 36-9", capacity: 374 },
  { id: "store-36-10", name: "Store 36-10", capacity: 410 },
  { id: "store-36-11", name: "Store 36-11", capacity: 446 },
  { id: "store-36-12", name: "Store 36-12", capacity: 482 },
  { id: "store-36-13", name: "Store 36-13", capacity: 518 },
  { id: "store-36-14", name: "Store 36-14", capacity: 554 },
  { id: "store-36-15", name: "Store 36-15", capacity: 590 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
