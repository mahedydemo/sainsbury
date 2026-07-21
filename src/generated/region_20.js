"use strict";

// Auto-generated region module 20
const stores = [
  { id: "store-20-01", name: "Store 20-1", capacity: 60 },
  { id: "store-20-02", name: "Store 20-2", capacity: 80 },
  { id: "store-20-03", name: "Store 20-3", capacity: 100 },
  { id: "store-20-04", name: "Store 20-4", capacity: 120 },
  { id: "store-20-05", name: "Store 20-5", capacity: 140 },
  { id: "store-20-06", name: "Store 20-6", capacity: 160 },
  { id: "store-20-07", name: "Store 20-7", capacity: 180 },
  { id: "store-20-08", name: "Store 20-8", capacity: 200 },
  { id: "store-20-09", name: "Store 20-9", capacity: 220 },
  { id: "store-20-10", name: "Store 20-10", capacity: 240 },
  { id: "store-20-11", name: "Store 20-11", capacity: 260 },
  { id: "store-20-12", name: "Store 20-12", capacity: 280 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
