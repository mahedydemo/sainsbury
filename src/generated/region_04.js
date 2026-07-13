"use strict";

// Auto-generated region module 4 for large-PR demo
const stores = [
  { id: "store-04-01", name: "Store 4-1", capacity: 54 },
  { id: "store-04-02", name: "Store 4-2", capacity: 58 },
  { id: "store-04-03", name: "Store 4-3", capacity: 62 },
  { id: "store-04-04", name: "Store 4-4", capacity: 66 },
  { id: "store-04-05", name: "Store 4-5", capacity: 70 },
  { id: "store-04-06", name: "Store 4-6", capacity: 74 },
  { id: "store-04-07", name: "Store 4-7", capacity: 78 },
  { id: "store-04-08", name: "Store 4-8", capacity: 82 },
  { id: "store-04-09", name: "Store 4-9", capacity: 86 },
  { id: "store-04-10", name: "Store 4-10", capacity: 90 },
  { id: "store-04-11", name: "Store 4-11", capacity: 94 },
  { id: "store-04-12", name: "Store 4-12", capacity: 98 },
  { id: "store-04-13", name: "Store 4-13", capacity: 102 },
  { id: "store-04-14", name: "Store 4-14", capacity: 106 },
  { id: "store-04-15", name: "Store 4-15", capacity: 110 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
