"use strict";

// Auto-generated region module 26 for large-PR demo
const stores = [
  { id: "store-26-01", name: "Store 26-1", capacity: 76 },
  { id: "store-26-02", name: "Store 26-2", capacity: 102 },
  { id: "store-26-03", name: "Store 26-3", capacity: 128 },
  { id: "store-26-04", name: "Store 26-4", capacity: 154 },
  { id: "store-26-05", name: "Store 26-5", capacity: 180 },
  { id: "store-26-06", name: "Store 26-6", capacity: 206 },
  { id: "store-26-07", name: "Store 26-7", capacity: 232 },
  { id: "store-26-08", name: "Store 26-8", capacity: 258 },
  { id: "store-26-09", name: "Store 26-9", capacity: 284 },
  { id: "store-26-10", name: "Store 26-10", capacity: 310 },
  { id: "store-26-11", name: "Store 26-11", capacity: 336 },
  { id: "store-26-12", name: "Store 26-12", capacity: 362 },
  { id: "store-26-13", name: "Store 26-13", capacity: 388 },
  { id: "store-26-14", name: "Store 26-14", capacity: 414 },
  { id: "store-26-15", name: "Store 26-15", capacity: 440 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
