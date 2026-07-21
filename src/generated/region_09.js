"use strict";

// Auto-generated region module 9
const stores = [
  { id: "store-09-01", name: "Store 9-1", capacity: 49 },
  { id: "store-09-02", name: "Store 9-2", capacity: 58 },
  { id: "store-09-03", name: "Store 9-3", capacity: 67 },
  { id: "store-09-04", name: "Store 9-4", capacity: 76 },
  { id: "store-09-05", name: "Store 9-5", capacity: 85 },
  { id: "store-09-06", name: "Store 9-6", capacity: 94 },
  { id: "store-09-07", name: "Store 9-7", capacity: 103 },
  { id: "store-09-08", name: "Store 9-8", capacity: 112 },
  { id: "store-09-09", name: "Store 9-9", capacity: 121 },
  { id: "store-09-10", name: "Store 9-10", capacity: 130 },
  { id: "store-09-11", name: "Store 9-11", capacity: 139 },
  { id: "store-09-12", name: "Store 9-12", capacity: 148 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
