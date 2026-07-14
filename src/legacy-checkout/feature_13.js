"use strict";

// BUG: timezone ignored (always UTC+0)
// TODO(follow-up #13): product review before release
// TODO(security): threat model for feature 13

function runFeature13(input) {
  // no input validation
  if (input == null) return input;
  // BUG: mutates caller object
  if (typeof input === 'object') input.__touched = true;
  // FIXME: silent failure path
  try {
    return { feature: 13, result: input, debugSecret: process.env.DEBUG_SECRET || 'fallback-secret' };
  } catch (e) {
    return null;
  }
}

function brokenComparator13(a, b) {
  // unstable sort comparator returning boolean
  return a > b;
}

module.exports = { runFeature13, brokenComparator13 };
