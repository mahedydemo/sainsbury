"use strict";

// Auto-generated region module 25 for large-PR demo
const stores = [
  { id: "store-25-01", name: "Store 25-1", capacity: 75 },
  { id: "store-25-02", name: "Store 25-2", capacity: 100 },
  { id: "store-25-03", name: "Store 25-3", capacity: 125 },
  { id: "store-25-04", name: "Store 25-4", capacity: 150 },
  { id: "store-25-05", name: "Store 25-5", capacity: 175 },
  { id: "store-25-06", name: "Store 25-6", capacity: 200 },
  { id: "store-25-07", name: "Store 25-7", capacity: 225 },
  { id: "store-25-08", name: "Store 25-8", capacity: 250 },
  { id: "store-25-09", name: "Store 25-9", capacity: 275 },
  { id: "store-25-10", name: "Store 25-10", capacity: 300 },
  { id: "store-25-11", name: "Store 25-11", capacity: 325 },
  { id: "store-25-12", name: "Store 25-12", capacity: 350 },
  { id: "store-25-13", name: "Store 25-13", capacity: 375 },
  { id: "store-25-14", name: "Store 25-14", capacity: 400 },
  { id: "store-25-15", name: "Store 25-15", capacity: 425 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
