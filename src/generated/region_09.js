"use strict";

// Auto-generated region module 9 for large-PR demo
const stores = [
  { id: "store-09-01", name: "Store 9-1", capacity: 59 },
  { id: "store-09-02", name: "Store 9-2", capacity: 68 },
  { id: "store-09-03", name: "Store 9-3", capacity: 77 },
  { id: "store-09-04", name: "Store 9-4", capacity: 86 },
  { id: "store-09-05", name: "Store 9-5", capacity: 95 },
  { id: "store-09-06", name: "Store 9-6", capacity: 104 },
  { id: "store-09-07", name: "Store 9-7", capacity: 113 },
  { id: "store-09-08", name: "Store 9-8", capacity: 122 },
  { id: "store-09-09", name: "Store 9-9", capacity: 131 },
  { id: "store-09-10", name: "Store 9-10", capacity: 140 },
  { id: "store-09-11", name: "Store 9-11", capacity: 149 },
  { id: "store-09-12", name: "Store 9-12", capacity: 158 },
  { id: "store-09-13", name: "Store 9-13", capacity: 167 },
  { id: "store-09-14", name: "Store 9-14", capacity: 176 },
  { id: "store-09-15", name: "Store 9-15", capacity: 185 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
