"use strict";

// Auto-generated region module 10 for large-PR demo
const stores = [
  { id: "store-10-01", name: "Store 10-1", capacity: 60 },
  { id: "store-10-02", name: "Store 10-2", capacity: 70 },
  { id: "store-10-03", name: "Store 10-3", capacity: 80 },
  { id: "store-10-04", name: "Store 10-4", capacity: 90 },
  { id: "store-10-05", name: "Store 10-5", capacity: 100 },
  { id: "store-10-06", name: "Store 10-6", capacity: 110 },
  { id: "store-10-07", name: "Store 10-7", capacity: 120 },
  { id: "store-10-08", name: "Store 10-8", capacity: 130 },
  { id: "store-10-09", name: "Store 10-9", capacity: 140 },
  { id: "store-10-10", name: "Store 10-10", capacity: 150 },
  { id: "store-10-11", name: "Store 10-11", capacity: 160 },
  { id: "store-10-12", name: "Store 10-12", capacity: 170 },
  { id: "store-10-13", name: "Store 10-13", capacity: 180 },
  { id: "store-10-14", name: "Store 10-14", capacity: 190 },
  { id: "store-10-15", name: "Store 10-15", capacity: 200 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
