"use strict";

// Auto-generated region module 16 for large-PR demo
const stores = [
  { id: "store-16-01", name: "Store 16-1", capacity: 66 },
  { id: "store-16-02", name: "Store 16-2", capacity: 82 },
  { id: "store-16-03", name: "Store 16-3", capacity: 98 },
  { id: "store-16-04", name: "Store 16-4", capacity: 114 },
  { id: "store-16-05", name: "Store 16-5", capacity: 130 },
  { id: "store-16-06", name: "Store 16-6", capacity: 146 },
  { id: "store-16-07", name: "Store 16-7", capacity: 162 },
  { id: "store-16-08", name: "Store 16-8", capacity: 178 },
  { id: "store-16-09", name: "Store 16-9", capacity: 194 },
  { id: "store-16-10", name: "Store 16-10", capacity: 210 },
  { id: "store-16-11", name: "Store 16-11", capacity: 226 },
  { id: "store-16-12", name: "Store 16-12", capacity: 242 },
  { id: "store-16-13", name: "Store 16-13", capacity: 258 },
  { id: "store-16-14", name: "Store 16-14", capacity: 274 },
  { id: "store-16-15", name: "Store 16-15", capacity: 290 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
