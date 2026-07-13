"use strict";

// Auto-generated region module 40 for large-PR demo
const stores = [
  { id: "store-40-01", name: "Store 40-1", capacity: 90 },
  { id: "store-40-02", name: "Store 40-2", capacity: 130 },
  { id: "store-40-03", name: "Store 40-3", capacity: 170 },
  { id: "store-40-04", name: "Store 40-4", capacity: 210 },
  { id: "store-40-05", name: "Store 40-5", capacity: 250 },
  { id: "store-40-06", name: "Store 40-6", capacity: 290 },
  { id: "store-40-07", name: "Store 40-7", capacity: 330 },
  { id: "store-40-08", name: "Store 40-8", capacity: 370 },
  { id: "store-40-09", name: "Store 40-9", capacity: 410 },
  { id: "store-40-10", name: "Store 40-10", capacity: 450 },
  { id: "store-40-11", name: "Store 40-11", capacity: 490 },
  { id: "store-40-12", name: "Store 40-12", capacity: 530 },
  { id: "store-40-13", name: "Store 40-13", capacity: 570 },
  { id: "store-40-14", name: "Store 40-14", capacity: 610 },
  { id: "store-40-15", name: "Store 40-15", capacity: 650 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
