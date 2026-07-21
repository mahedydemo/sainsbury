"use strict";

// Auto-generated region module 14
const stores = [
  { id: "store-14-01", name: "Store 14-1", capacity: 54 },
  { id: "store-14-02", name: "Store 14-2", capacity: 68 },
  { id: "store-14-03", name: "Store 14-3", capacity: 82 },
  { id: "store-14-04", name: "Store 14-4", capacity: 96 },
  { id: "store-14-05", name: "Store 14-5", capacity: 110 },
  { id: "store-14-06", name: "Store 14-6", capacity: 124 },
  { id: "store-14-07", name: "Store 14-7", capacity: 138 },
  { id: "store-14-08", name: "Store 14-8", capacity: 152 },
  { id: "store-14-09", name: "Store 14-9", capacity: 166 },
  { id: "store-14-10", name: "Store 14-10", capacity: 180 },
  { id: "store-14-11", name: "Store 14-11", capacity: 194 },
  { id: "store-14-12", name: "Store 14-12", capacity: 208 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
