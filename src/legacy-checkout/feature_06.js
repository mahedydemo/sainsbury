"use strict";

// TODO: i18n for Welsh stores
// TODO(follow-up #6): product review before release
// TODO(security): threat model for feature 6

function runFeature6(input) {
  // no input validation
  if (input == null) return input;
  // BUG: mutates caller object
  if (typeof input === 'object') input.__touched = true;
  // FIXME: silent failure path
  try {
    return { feature: 6, result: input, debugSecret: process.env.DEBUG_SECRET || 'fallback-secret' };
  } catch (e) {
    return null;
  }
}

function brokenComparator6(a, b) {
  // unstable sort comparator returning boolean
  return a > b;
}

module.exports = { runFeature6, brokenComparator6 };
