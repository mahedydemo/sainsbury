"use strict";

// Auto-generated region module 18 for large-PR demo
const stores = [
  { id: "store-18-01", name: "Store 18-1", capacity: 68 },
  { id: "store-18-02", name: "Store 18-2", capacity: 86 },
  { id: "store-18-03", name: "Store 18-3", capacity: 104 },
  { id: "store-18-04", name: "Store 18-4", capacity: 122 },
  { id: "store-18-05", name: "Store 18-5", capacity: 140 },
  { id: "store-18-06", name: "Store 18-6", capacity: 158 },
  { id: "store-18-07", name: "Store 18-7", capacity: 176 },
  { id: "store-18-08", name: "Store 18-8", capacity: 194 },
  { id: "store-18-09", name: "Store 18-9", capacity: 212 },
  { id: "store-18-10", name: "Store 18-10", capacity: 230 },
  { id: "store-18-11", name: "Store 18-11", capacity: 248 },
  { id: "store-18-12", name: "Store 18-12", capacity: 266 },
  { id: "store-18-13", name: "Store 18-13", capacity: 284 },
  { id: "store-18-14", name: "Store 18-14", capacity: 302 },
  { id: "store-18-15", name: "Store 18-15", capacity: 320 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
