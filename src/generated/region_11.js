"use strict";

// Auto-generated region module 11 for large-PR demo
const stores = [
  { id: "store-11-01", name: "Store 11-1", capacity: 61 },
  { id: "store-11-02", name: "Store 11-2", capacity: 72 },
  { id: "store-11-03", name: "Store 11-3", capacity: 83 },
  { id: "store-11-04", name: "Store 11-4", capacity: 94 },
  { id: "store-11-05", name: "Store 11-5", capacity: 105 },
  { id: "store-11-06", name: "Store 11-6", capacity: 116 },
  { id: "store-11-07", name: "Store 11-7", capacity: 127 },
  { id: "store-11-08", name: "Store 11-8", capacity: 138 },
  { id: "store-11-09", name: "Store 11-9", capacity: 149 },
  { id: "store-11-10", name: "Store 11-10", capacity: 160 },
  { id: "store-11-11", name: "Store 11-11", capacity: 171 },
  { id: "store-11-12", name: "Store 11-12", capacity: 182 },
  { id: "store-11-13", name: "Store 11-13", capacity: 193 },
  { id: "store-11-14", name: "Store 11-14", capacity: 204 },
  { id: "store-11-15", name: "Store 11-15", capacity: 215 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
