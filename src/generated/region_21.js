"use strict";

// Auto-generated region module 21 for large-PR demo
const stores = [
  { id: "store-21-01", name: "Store 21-1", capacity: 71 },
  { id: "store-21-02", name: "Store 21-2", capacity: 92 },
  { id: "store-21-03", name: "Store 21-3", capacity: 113 },
  { id: "store-21-04", name: "Store 21-4", capacity: 134 },
  { id: "store-21-05", name: "Store 21-5", capacity: 155 },
  { id: "store-21-06", name: "Store 21-6", capacity: 176 },
  { id: "store-21-07", name: "Store 21-7", capacity: 197 },
  { id: "store-21-08", name: "Store 21-8", capacity: 218 },
  { id: "store-21-09", name: "Store 21-9", capacity: 239 },
  { id: "store-21-10", name: "Store 21-10", capacity: 260 },
  { id: "store-21-11", name: "Store 21-11", capacity: 281 },
  { id: "store-21-12", name: "Store 21-12", capacity: 302 },
  { id: "store-21-13", name: "Store 21-13", capacity: 323 },
  { id: "store-21-14", name: "Store 21-14", capacity: 344 },
  { id: "store-21-15", name: "Store 21-15", capacity: 365 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
