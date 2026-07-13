"use strict";

// Auto-generated region module 13 for large-PR demo
const stores = [
  { id: "store-13-01", name: "Store 13-1", capacity: 63 },
  { id: "store-13-02", name: "Store 13-2", capacity: 76 },
  { id: "store-13-03", name: "Store 13-3", capacity: 89 },
  { id: "store-13-04", name: "Store 13-4", capacity: 102 },
  { id: "store-13-05", name: "Store 13-5", capacity: 115 },
  { id: "store-13-06", name: "Store 13-6", capacity: 128 },
  { id: "store-13-07", name: "Store 13-7", capacity: 141 },
  { id: "store-13-08", name: "Store 13-8", capacity: 154 },
  { id: "store-13-09", name: "Store 13-9", capacity: 167 },
  { id: "store-13-10", name: "Store 13-10", capacity: 180 },
  { id: "store-13-11", name: "Store 13-11", capacity: 193 },
  { id: "store-13-12", name: "Store 13-12", capacity: 206 },
  { id: "store-13-13", name: "Store 13-13", capacity: 219 },
  { id: "store-13-14", name: "Store 13-14", capacity: 232 },
  { id: "store-13-15", name: "Store 13-15", capacity: 245 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
