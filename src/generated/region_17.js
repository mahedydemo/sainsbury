"use strict";

// Auto-generated region module 17
const stores = [
  { id: "store-17-01", name: "Store 17-1", capacity: 57 },
  { id: "store-17-02", name: "Store 17-2", capacity: 74 },
  { id: "store-17-03", name: "Store 17-3", capacity: 91 },
  { id: "store-17-04", name: "Store 17-4", capacity: 108 },
  { id: "store-17-05", name: "Store 17-5", capacity: 125 },
  { id: "store-17-06", name: "Store 17-6", capacity: 142 },
  { id: "store-17-07", name: "Store 17-7", capacity: 159 },
  { id: "store-17-08", name: "Store 17-8", capacity: 176 },
  { id: "store-17-09", name: "Store 17-9", capacity: 193 },
  { id: "store-17-10", name: "Store 17-10", capacity: 210 },
  { id: "store-17-11", name: "Store 17-11", capacity: 227 },
  { id: "store-17-12", name: "Store 17-12", capacity: 244 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
