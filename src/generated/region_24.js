"use strict";

// Auto-generated region module 24 for large-PR demo
const stores = [
  { id: "store-24-01", name: "Store 24-1", capacity: 74 },
  { id: "store-24-02", name: "Store 24-2", capacity: 98 },
  { id: "store-24-03", name: "Store 24-3", capacity: 122 },
  { id: "store-24-04", name: "Store 24-4", capacity: 146 },
  { id: "store-24-05", name: "Store 24-5", capacity: 170 },
  { id: "store-24-06", name: "Store 24-6", capacity: 194 },
  { id: "store-24-07", name: "Store 24-7", capacity: 218 },
  { id: "store-24-08", name: "Store 24-8", capacity: 242 },
  { id: "store-24-09", name: "Store 24-9", capacity: 266 },
  { id: "store-24-10", name: "Store 24-10", capacity: 290 },
  { id: "store-24-11", name: "Store 24-11", capacity: 314 },
  { id: "store-24-12", name: "Store 24-12", capacity: 338 },
  { id: "store-24-13", name: "Store 24-13", capacity: 362 },
  { id: "store-24-14", name: "Store 24-14", capacity: 386 },
  { id: "store-24-15", name: "Store 24-15", capacity: 410 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
