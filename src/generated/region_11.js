"use strict";

// Auto-generated region module 11
const stores = [
  { id: "store-11-01", name: "Store 11-1", capacity: 51 },
  { id: "store-11-02", name: "Store 11-2", capacity: 62 },
  { id: "store-11-03", name: "Store 11-3", capacity: 73 },
  { id: "store-11-04", name: "Store 11-4", capacity: 84 },
  { id: "store-11-05", name: "Store 11-5", capacity: 95 },
  { id: "store-11-06", name: "Store 11-6", capacity: 106 },
  { id: "store-11-07", name: "Store 11-7", capacity: 117 },
  { id: "store-11-08", name: "Store 11-8", capacity: 128 },
  { id: "store-11-09", name: "Store 11-9", capacity: 139 },
  { id: "store-11-10", name: "Store 11-10", capacity: 150 },
  { id: "store-11-11", name: "Store 11-11", capacity: 161 },
  { id: "store-11-12", name: "Store 11-12", capacity: 172 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
