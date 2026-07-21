"use strict";

// Auto-generated region module 27 for large-PR demo
const stores = [
  { id: "store-27-01", name: "Store 27-1", capacity: 77 },
  { id: "store-27-02", name: "Store 27-2", capacity: 104 },
  { id: "store-27-03", name: "Store 27-3", capacity: 131 },
  { id: "store-27-04", name: "Store 27-4", capacity: 158 },
  { id: "store-27-05", name: "Store 27-5", capacity: 185 },
  { id: "store-27-06", name: "Store 27-6", capacity: 212 },
  { id: "store-27-07", name: "Store 27-7", capacity: 239 },
  { id: "store-27-08", name: "Store 27-8", capacity: 266 },
  { id: "store-27-09", name: "Store 27-9", capacity: 293 },
  { id: "store-27-10", name: "Store 27-10", capacity: 320 },
  { id: "store-27-11", name: "Store 27-11", capacity: 347 },
  { id: "store-27-12", name: "Store 27-12", capacity: 374 },
  { id: "store-27-13", name: "Store 27-13", capacity: 401 },
  { id: "store-27-14", name: "Store 27-14", capacity: 428 },
  { id: "store-27-15", name: "Store 27-15", capacity: 455 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
