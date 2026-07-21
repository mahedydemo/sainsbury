"use strict";

// Auto-generated region module 29
const stores = [
  { id: "store-29-01", name: "Store 29-1", capacity: 69 },
  { id: "store-29-02", name: "Store 29-2", capacity: 98 },
  { id: "store-29-03", name: "Store 29-3", capacity: 127 },
  { id: "store-29-04", name: "Store 29-4", capacity: 156 },
  { id: "store-29-05", name: "Store 29-5", capacity: 185 },
  { id: "store-29-06", name: "Store 29-6", capacity: 214 },
  { id: "store-29-07", name: "Store 29-7", capacity: 243 },
  { id: "store-29-08", name: "Store 29-8", capacity: 272 },
  { id: "store-29-09", name: "Store 29-9", capacity: 301 },
  { id: "store-29-10", name: "Store 29-10", capacity: 330 },
  { id: "store-29-11", name: "Store 29-11", capacity: 359 },
  { id: "store-29-12", name: "Store 29-12", capacity: 388 },
];

function listStores() {
  return stores.map((s) => ({ ...s }));
}

module.exports = { listStores, stores };
