#!/usr/bin/env bash
# Create one small PR (→ Slack) and one large PR (→ Copilot path) against main.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO="${REPO:-mahedydemo/sainsbury}"
BASE_BRANCH="${BASE_BRANCH:-main}"
TS="$(date +%Y%m%d-%H%M%S)"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repo: $ROOT" >&2
  exit 1
fi

git fetch origin "$BASE_BRANCH" 2>/dev/null || true
git checkout "$BASE_BRANCH"
git pull --ff-only origin "$BASE_BRANCH" 2>/dev/null || true

# --- Small PR: one-line price tweak (~few lines) ---
SMALL_BRANCH="demo/small-milk-price-${TS}"
git checkout -b "$SMALL_BRANCH"

python3 <<'PY'
from pathlib import Path
path = Path("src/catalog.js")
text = path.read_text()
old = '{ id: "sku-milk-2l", name: "British Whole Milk 2L", pricePence: 145, aisle: "Dairy" }'
new = '{ id: "sku-milk-2l", name: "British Whole Milk 2L", pricePence: 149, aisle: "Dairy" }'
if old not in text:
    raise SystemExit("expected milk price line not found — catalog may have changed")
path.write_text(text.replace(old, new, 1))
PY

git add src/catalog.js
git commit -m "fix(catalog): bump milk price by 4p"
git push -u origin HEAD
SMALL_PR_URL=$(gh pr create --repo "$REPO" --base "$BASE_BRANCH" --head "$SMALL_BRANCH" \
  --title "fix: bump whole milk price (+4p)" \
  --body "## Small PR demo
One-line catalog price change for Slack routing.

**Expected:** posted to #project-mobile with PR summary + diff.
**Not expected:** Copilot large-PR path.")

echo "Created SMALL PR: $SMALL_PR_URL"

# --- Large PR: generate many modules to exceed threshold ---
git checkout "$BASE_BRANCH"
LARGE_BRANCH="demo/large-catalog-expand-${TS}"
git checkout -b "$LARGE_BRANCH"

mkdir -p src/generated
python3 <<'PY'
from pathlib import Path
root = Path("src/generated")
root.mkdir(parents=True, exist_ok=True)
index_lines = ["\"use strict\";", "", "const regions = {};", ""]
for i in range(1, 41):
    name = f"region_{i:02d}"
    path = root / f"{name}.js"
    lines = [
        "\"use strict\";",
        "",
        f"// Auto-generated region module {i} for large-PR demo",
        f"const stores = [",
    ]
    for j in range(1, 16):
        lines.append(f'  {{ id: "store-{i:02d}-{j:02d}", name: "Store {i}-{j}", capacity: {50 + j * i} }},')
    lines += [
        "];",
        "",
        "function listStores() {",
        "  return stores.map((s) => ({ ...s }));",
        "}",
        "",
        "function getStore(id) {",
        "  const store = stores.find((s) => s.id === id);",
        "  return store ? { ...store } : null;",
        "}",
        "",
        "module.exports = { listStores, getStore, stores };",
        "",
    ]
    path.write_text("\n".join(lines))
    index_lines.append(f'regions["{name}"] = require("./{name}");')

index_lines += ["", "module.exports = { regions };", ""]
(root / "index.js").write_text("\n".join(index_lines))

# Wire into catalog with a large comment block + export
catalog = Path("src/catalog.js")
text = catalog.read_text()
if "generatedRegions" not in text:
    text = text.replace(
        'module.exports = { getCatalog, getProduct, applyPromo, PRODUCTS, PROMOS };',
        '''const { regions: generatedRegions } = require("./generated");

function listGeneratedRegionCount() {
  return Object.keys(generatedRegions).length;
}

module.exports = {
  getCatalog,
  getProduct,
  applyPromo,
  PRODUCTS,
  PROMOS,
  generatedRegions,
  listGeneratedRegionCount,
};''',
    )
    catalog.write_text(text)
PY

git add src/generated src/catalog.js
git commit -m "feat(catalog): expand regional store matrix (large PR demo)"
git push -u origin HEAD
LARGE_PR_URL=$(gh pr create --repo "$REPO" --base "$BASE_BRANCH" --head "$LARGE_BRANCH" \
  --title "feat: expand regional store matrix (large PR)" \
  --body "## Large PR demo
Adds dozens of generated region/store modules.

**Expected:** Slack skipped; PR comment routes to GitHub Copilot.
**Threshold:** additions+deletions > 120 lines.")

echo "Created LARGE PR: $LARGE_PR_URL"
echo
echo "Done."
echo "  Small → Slack: $SMALL_PR_URL"
echo "  Large → Copilot path: $LARGE_PR_URL"

git checkout "$BASE_BRANCH"
