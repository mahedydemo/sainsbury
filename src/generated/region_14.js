"use strict";

// Auto-generated region module 14 for large-PR demo
const stores = [
  { id: "store-14-01", name: "Store 14-1", capacity: 64 },
  { id: "store-14-02", name: "Store 14-2", capacity: 78 },
  { id: "store-14-03", name: "Store 14-3", capacity: 92 },
  { id: "store-14-04", name: "Store 14-4", capacity: 106 },
  { id: "store-14-05", name: "Store 14-5", capacity: 120 },
  { id: "store-14-06", name: "Store 14-6", capacity: 134 },
  { id: "store-14-07", name: "Store 14-7", capacity: 148 },
  { id: "store-14-08", name: "Store 14-8", capacity: 162 },
  { id: "store-14-09", name: "Store 14-9", capacity: 176 },
  { id: "store-14-10", name: "Store 14-10", capacity: 190 },
  { id: "store-14-11", name: "Store 14-11", capacity: 204 },
  { id: "store-14-12", name: "Store 14-12", capacity: 218 },
  { id: "store-14-13", name: "Store 14-13", capacity: 232 },
  { id: "store-14-14", name: "Store 14-14", capacity: 246 },
  { id: "store-14-15", name: "Store 14-15", capacity: 260 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
