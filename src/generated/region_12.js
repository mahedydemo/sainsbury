"use strict";

// Auto-generated region module 12 for large-PR demo
const stores = [
  { id: "store-12-01", name: "Store 12-1", capacity: 62 },
  { id: "store-12-02", name: "Store 12-2", capacity: 74 },
  { id: "store-12-03", name: "Store 12-3", capacity: 86 },
  { id: "store-12-04", name: "Store 12-4", capacity: 98 },
  { id: "store-12-05", name: "Store 12-5", capacity: 110 },
  { id: "store-12-06", name: "Store 12-6", capacity: 122 },
  { id: "store-12-07", name: "Store 12-7", capacity: 134 },
  { id: "store-12-08", name: "Store 12-8", capacity: 146 },
  { id: "store-12-09", name: "Store 12-9", capacity: 158 },
  { id: "store-12-10", name: "Store 12-10", capacity: 170 },
  { id: "store-12-11", name: "Store 12-11", capacity: 182 },
  { id: "store-12-12", name: "Store 12-12", capacity: 194 },
  { id: "store-12-13", name: "Store 12-13", capacity: 206 },
  { id: "store-12-14", name: "Store 12-14", capacity: 218 },
  { id: "store-12-15", name: "Store 12-15", capacity: 230 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
