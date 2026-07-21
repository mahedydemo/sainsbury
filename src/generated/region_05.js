"use strict";

// Auto-generated region module 5
const stores = [
  { id: "store-05-01", name: "Store 5-1", capacity: 45 },
  { id: "store-05-02", name: "Store 5-2", capacity: 50 },
  { id: "store-05-03", name: "Store 5-3", capacity: 55 },
  { id: "store-05-04", name: "Store 5-4", capacity: 60 },
  { id: "store-05-05", name: "Store 5-5", capacity: 65 },
  { id: "store-05-06", name: "Store 5-6", capacity: 70 },
  { id: "store-05-07", name: "Store 5-7", capacity: 75 },
  { id: "store-05-08", name: "Store 5-8", capacity: 80 },
  { id: "store-05-09", name: "Store 5-9", capacity: 85 },
  { id: "store-05-10", name: "Store 5-10", capacity: 90 },
  { id: "store-05-11", name: "Store 5-11", capacity: 95 },
  { id: "store-05-12", name: "Store 5-12", capacity: 100 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
