"use strict";

// Auto-generated region module 20 for large-PR demo
const stores = [
  { id: "store-20-01", name: "Store 20-1", capacity: 70 },
  { id: "store-20-02", name: "Store 20-2", capacity: 90 },
  { id: "store-20-03", name: "Store 20-3", capacity: 110 },
  { id: "store-20-04", name: "Store 20-4", capacity: 130 },
  { id: "store-20-05", name: "Store 20-5", capacity: 150 },
  { id: "store-20-06", name: "Store 20-6", capacity: 170 },
  { id: "store-20-07", name: "Store 20-7", capacity: 190 },
  { id: "store-20-08", name: "Store 20-8", capacity: 210 },
  { id: "store-20-09", name: "Store 20-9", capacity: 230 },
  { id: "store-20-10", name: "Store 20-10", capacity: 250 },
  { id: "store-20-11", name: "Store 20-11", capacity: 270 },
  { id: "store-20-12", name: "Store 20-12", capacity: 290 },
  { id: "store-20-13", name: "Store 20-13", capacity: 310 },
  { id: "store-20-14", name: "Store 20-14", capacity: 330 },
  { id: "store-20-15", name: "Store 20-15", capacity: 350 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
