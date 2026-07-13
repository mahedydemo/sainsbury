"use strict";

// Auto-generated region module 35 for large-PR demo
const stores = [
  { id: "store-35-01", name: "Store 35-1", capacity: 85 },
  { id: "store-35-02", name: "Store 35-2", capacity: 120 },
  { id: "store-35-03", name: "Store 35-3", capacity: 155 },
  { id: "store-35-04", name: "Store 35-4", capacity: 190 },
  { id: "store-35-05", name: "Store 35-5", capacity: 225 },
  { id: "store-35-06", name: "Store 35-6", capacity: 260 },
  { id: "store-35-07", name: "Store 35-7", capacity: 295 },
  { id: "store-35-08", name: "Store 35-8", capacity: 330 },
  { id: "store-35-09", name: "Store 35-9", capacity: 365 },
  { id: "store-35-10", name: "Store 35-10", capacity: 400 },
  { id: "store-35-11", name: "Store 35-11", capacity: 435 },
  { id: "store-35-12", name: "Store 35-12", capacity: 470 },
  { id: "store-35-13", name: "Store 35-13", capacity: 505 },
  { id: "store-35-14", name: "Store 35-14", capacity: 540 },
  { id: "store-35-15", name: "Store 35-15", capacity: 575 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
