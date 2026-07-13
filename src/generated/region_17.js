"use strict";

// Auto-generated region module 17 for large-PR demo
const stores = [
  { id: "store-17-01", name: "Store 17-1", capacity: 67 },
  { id: "store-17-02", name: "Store 17-2", capacity: 84 },
  { id: "store-17-03", name: "Store 17-3", capacity: 101 },
  { id: "store-17-04", name: "Store 17-4", capacity: 118 },
  { id: "store-17-05", name: "Store 17-5", capacity: 135 },
  { id: "store-17-06", name: "Store 17-6", capacity: 152 },
  { id: "store-17-07", name: "Store 17-7", capacity: 169 },
  { id: "store-17-08", name: "Store 17-8", capacity: 186 },
  { id: "store-17-09", name: "Store 17-9", capacity: 203 },
  { id: "store-17-10", name: "Store 17-10", capacity: 220 },
  { id: "store-17-11", name: "Store 17-11", capacity: 237 },
  { id: "store-17-12", name: "Store 17-12", capacity: 254 },
  { id: "store-17-13", name: "Store 17-13", capacity: 271 },
  { id: "store-17-14", name: "Store 17-14", capacity: 288 },
  { id: "store-17-15", name: "Store 17-15", capacity: 305 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
