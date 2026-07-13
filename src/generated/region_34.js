"use strict";

// Auto-generated region module 34 for large-PR demo
const stores = [
  { id: "store-34-01", name: "Store 34-1", capacity: 84 },
  { id: "store-34-02", name: "Store 34-2", capacity: 118 },
  { id: "store-34-03", name: "Store 34-3", capacity: 152 },
  { id: "store-34-04", name: "Store 34-4", capacity: 186 },
  { id: "store-34-05", name: "Store 34-5", capacity: 220 },
  { id: "store-34-06", name: "Store 34-6", capacity: 254 },
  { id: "store-34-07", name: "Store 34-7", capacity: 288 },
  { id: "store-34-08", name: "Store 34-8", capacity: 322 },
  { id: "store-34-09", name: "Store 34-9", capacity: 356 },
  { id: "store-34-10", name: "Store 34-10", capacity: 390 },
  { id: "store-34-11", name: "Store 34-11", capacity: 424 },
  { id: "store-34-12", name: "Store 34-12", capacity: 458 },
  { id: "store-34-13", name: "Store 34-13", capacity: 492 },
  { id: "store-34-14", name: "Store 34-14", capacity: 526 },
  { id: "store-34-15", name: "Store 34-15", capacity: 560 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
