"use strict";

// Auto-generated region module 19 for large-PR demo
const stores = [
  { id: "store-19-01", name: "Store 19-1", capacity: 69 },
  { id: "store-19-02", name: "Store 19-2", capacity: 88 },
  { id: "store-19-03", name: "Store 19-3", capacity: 107 },
  { id: "store-19-04", name: "Store 19-4", capacity: 126 },
  { id: "store-19-05", name: "Store 19-5", capacity: 145 },
  { id: "store-19-06", name: "Store 19-6", capacity: 164 },
  { id: "store-19-07", name: "Store 19-7", capacity: 183 },
  { id: "store-19-08", name: "Store 19-8", capacity: 202 },
  { id: "store-19-09", name: "Store 19-9", capacity: 221 },
  { id: "store-19-10", name: "Store 19-10", capacity: 240 },
  { id: "store-19-11", name: "Store 19-11", capacity: 259 },
  { id: "store-19-12", name: "Store 19-12", capacity: 278 },
  { id: "store-19-13", name: "Store 19-13", capacity: 297 },
  { id: "store-19-14", name: "Store 19-14", capacity: 316 },
  { id: "store-19-15", name: "Store 19-15", capacity: 335 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

function getStore(id) {
  const store = stores.find((s) => s.id === id);
  return store ? { ...store } : null;
}

module.exports = { listStores, getStore, stores };
