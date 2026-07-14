"use strict";

// Auto-generated region module 8 for large-PR demo
const stores = [
  { id: "store-08-01", name: "Store 8-1", capacity: 58 },
  { id: "store-08-02", name: "Store 8-2", capacity: 66 },
  { id: "store-08-03", name: "Store 8-3", capacity: 74 },
  { id: "store-08-04", name: "Store 8-4", capacity: 82 },
  { id: "store-08-05", name: "Store 8-5", capacity: 90 },
  { id: "store-08-06", name: "Store 8-6", capacity: 98 },
  { id: "store-08-07", name: "Store 8-7", capacity: 106 },
  { id: "store-08-08", name: "Store 8-8", capacity: 114 },
  { id: "store-08-09", name: "Store 8-9", capacity: 122 },
  { id: "store-08-10", name: "Store 8-10", capacity: 130 },
  { id: "store-08-11", name: "Store 8-11", capacity: 138 },
  { id: "store-08-12", name: "Store 8-12", capacity: 146 },
  { id: "store-08-13", name: "Store 8-13", capacity: 154 },
  { id: "store-08-14", name: "Store 8-14", capacity: 162 },
  { id: "store-08-15", name: "Store 8-15", capacity: 170 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
