"use strict";

// Auto-generated region module 32 for large-PR demo
const stores = [
  { id: "store-32-01", name: "Store 32-1", capacity: 82 },
  { id: "store-32-02", name: "Store 32-2", capacity: 114 },
  { id: "store-32-03", name: "Store 32-3", capacity: 146 },
  { id: "store-32-04", name: "Store 32-4", capacity: 178 },
  { id: "store-32-05", name: "Store 32-5", capacity: 210 },
  { id: "store-32-06", name: "Store 32-6", capacity: 242 },
  { id: "store-32-07", name: "Store 32-7", capacity: 274 },
  { id: "store-32-08", name: "Store 32-8", capacity: 306 },
  { id: "store-32-09", name: "Store 32-9", capacity: 338 },
  { id: "store-32-10", name: "Store 32-10", capacity: 370 },
  { id: "store-32-11", name: "Store 32-11", capacity: 402 },
  { id: "store-32-12", name: "Store 32-12", capacity: 434 },
  { id: "store-32-13", name: "Store 32-13", capacity: 466 },
  { id: "store-32-14", name: "Store 32-14", capacity: 498 },
  { id: "store-32-15", name: "Store 32-15", capacity: 530 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
