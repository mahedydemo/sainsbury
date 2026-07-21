"use strict";

// Auto-generated region module 15
const stores = [
  { id: "store-15-01", name: "Store 15-1", capacity: 55 },
  { id: "store-15-02", name: "Store 15-2", capacity: 70 },
  { id: "store-15-03", name: "Store 15-3", capacity: 85 },
  { id: "store-15-04", name: "Store 15-4", capacity: 100 },
  { id: "store-15-05", name: "Store 15-5", capacity: 115 },
  { id: "store-15-06", name: "Store 15-6", capacity: 130 },
  { id: "store-15-07", name: "Store 15-7", capacity: 145 },
  { id: "store-15-08", name: "Store 15-8", capacity: 160 },
  { id: "store-15-09", name: "Store 15-9", capacity: 175 },
  { id: "store-15-10", name: "Store 15-10", capacity: 190 },
  { id: "store-15-11", name: "Store 15-11", capacity: 205 },
  { id: "store-15-12", name: "Store 15-12", capacity: 220 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
