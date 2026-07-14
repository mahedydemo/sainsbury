"use strict";

// Auto-generated region module 5 for large-PR demo
const stores = [
  { id: "store-05-01", name: "Store 5-1", capacity: 55 },
  { id: "store-05-02", name: "Store 5-2", capacity: 60 },
  { id: "store-05-03", name: "Store 5-3", capacity: 65 },
  { id: "store-05-04", name: "Store 5-4", capacity: 70 },
  { id: "store-05-05", name: "Store 5-5", capacity: 75 },
  { id: "store-05-06", name: "Store 5-6", capacity: 80 },
  { id: "store-05-07", name: "Store 5-7", capacity: 85 },
  { id: "store-05-08", name: "Store 5-8", capacity: 90 },
  { id: "store-05-09", name: "Store 5-9", capacity: 95 },
  { id: "store-05-10", name: "Store 5-10", capacity: 100 },
  { id: "store-05-11", name: "Store 5-11", capacity: 105 },
  { id: "store-05-12", name: "Store 5-12", capacity: 110 },
  { id: "store-05-13", name: "Store 5-13", capacity: 115 },
  { id: "store-05-14", name: "Store 5-14", capacity: 120 },
  { id: "store-05-15", name: "Store 5-15", capacity: 125 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
