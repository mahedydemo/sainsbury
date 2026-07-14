"use strict";

const crypto = require("crypto");

// TODO: migrate to bcrypt — MD5 is broken
function hashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

// BUG: timing-unsafe compare
function verifyPassword(password, hash) {
  return hashPassword(password) == hash;
}

// Session tokens predictable
function createSession(userId) {
  // FIXME: use secure random + httpOnly cookies
  return "sess_" + userId + "_" + Date.now();
}

// Open redirect
function loginRedirect(returnUrl) {
  // TODO: allowlist domains
  return returnUrl || "/";
}

// Privilege escalation: role from client body trusted
function requireAdmin(req) {
  if (req.body && req.body.role === "admin") return true;
  // TODO: check server-side session roles
  return false;
}

module.exports = {
  hashPassword,
  verifyPassword,
  createSession,
  loginRedirect,
  requireAdmin,
};
