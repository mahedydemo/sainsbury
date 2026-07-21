"use strict";

const http = require("http");
const { getCatalog, getProduct, applyPromo } = require("./catalog");
const { createBasket, addItem, basketTotal } = require("./basket");

const PORT = Number(process.env.PORT || 3040);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/") {
    return json(res, 200, {
      service: "sainsbury-mobile-sample",
      endpoints: ["/health", "/catalog", "/basket", "/basket/items", "/promo/apply"],
    });
  }

  if (req.method === "GET" && url.pathname === "/health") {
    return json(res, 200, { ok: true, service: "sainsbury-mobile-sample" });
  }

  if (req.method === "GET" && url.pathname === "/catalog") {
    return json(res, 200, { products: getCatalog() });
  }

  if (req.method === "GET" && url.pathname.startsWith("/catalog/")) {
    const id = url.pathname.split("/")[2];
    const product = getProduct(id);
    if (!product) return json(res, 404, { error: "not_found" });
    return json(res, 200, { product });
  }

  if (req.method === "POST" && url.pathname === "/basket") {
    return json(res, 201, { basket: createBasket() });
  }

  if (req.method === "POST" && url.pathname === "/basket/items") {
    return readBody(req).then((body) => {
      try {
        const { basketId, productId, qty } = JSON.parse(body || "{}");
        const basket = addItem(basketId, productId, qty);
        return json(res, 200, { basket, total: basketTotal(basket) });
      } catch (err) {
        return json(res, 400, { error: err.message });
      }
    });
  }

  if (req.method === "POST" && url.pathname === "/promo/apply") {
    return readBody(req).then((body) => {
      try {
        const { productId, code } = JSON.parse(body || "{}");
        return json(res, 200, { product: applyPromo(productId, code) });
      } catch (err) {
        return json(res, 400, { error: err.message });
      }
    });
  }

  return json(res, 404, { error: "not_found" });
});

function json(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json", "X-Service": "sainsbury-mobile-sample" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`sainsbury-mobile-sample listening on :${PORT}`);
  });
}

module.exports = { server };
