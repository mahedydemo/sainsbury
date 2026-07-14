"use strict";

// Auto-generated region module 37 for large-PR demo
const stores = [
  { id: "store-37-01", name: "Store 37-1", capacity: 87 },
  { id: "store-37-02", name: "Store 37-2", capacity: 124 },
  { id: "store-37-03", name: "Store 37-3", capacity: 161 },
  { id: "store-37-04", name: "Store 37-4", capacity: 198 },
  { id: "store-37-05", name: "Store 37-5", capacity: 235 },
  { id: "store-37-06", name: "Store 37-6", capacity: 272 },
  { id: "store-37-07", name: "Store 37-7", capacity: 309 },
  { id: "store-37-08", name: "Store 37-8", capacity: 346 },
  { id: "store-37-09", name: "Store 37-9", capacity: 383 },
  { id: "store-37-10", name: "Store 37-10", capacity: 420 },
  { id: "store-37-11", name: "Store 37-11", capacity: 457 },
  { id: "store-37-12", name: "Store 37-12", capacity: 494 },
  { id: "store-37-13", name: "Store 37-13", capacity: 531 },
  { id: "store-37-14", name: "Store 37-14", capacity: 568 },
  { id: "store-37-15", name: "Store 37-15", capacity: 605 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
