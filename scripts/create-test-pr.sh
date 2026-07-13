#!/usr/bin/env bash
# Make a sample code change and open a PR.
#
# Usage:
#   ./scripts/create-test-pr.sh small
#   ./scripts/create-test-pr.sh large
#   ./scripts/create-test-pr.sh both
#
# Operators:
#   small  — tiny catalog edit (under Slack threshold → #project-mobile + diff)
#   large  — generated multi-file change (over threshold → Copilot path, no Slack dump)
#   both   — run small then large
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO="${REPO:-mahedydemo/sainsbury}"
BASE_BRANCH="${BASE_BRANCH:-main}"
OPERATOR="${1:-}"
TS="$(date +%Y%m%d-%H%M%S)"

usage() {
  cat <<'EOF'
Usage: ./scripts/create-test-pr.sh <small|large|both>

  small  Create a small PR (few lines) — expected Slack post with diff
  large  Create a large PR (many files) — expected Copilot path, Slack skipped
  both   Create one of each

Env:
  REPO         GitHub repo (default: mahedydemo/sainsbury)
  BASE_BRANCH  Base branch (default: main)
EOF
}

if [[ -z "$OPERATOR" ]]; then
  usage >&2
  exit 1
fi

case "$OPERATOR" in
  small|large|both) ;;
  -h|--help|help)
    usage
    exit 0
    ;;
  *)
    echo "Unknown operator: $OPERATOR" >&2
    usage >&2
    exit 1
    ;;
esac

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is required" >&2
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repo: $ROOT" >&2
  exit 1
fi

ensure_clean_base() {
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "Working tree is dirty. Commit or stash before creating demo PRs." >&2
    git status --porcelain >&2
    exit 1
  fi
  git fetch origin "$BASE_BRANCH"
  git checkout "$BASE_BRANCH"
  git pull --ff-only origin "$BASE_BRANCH"
}

create_small_pr() {
  local branch="demo/small-milk-price-${TS}"
  echo "==> Creating SMALL PR on branch ${branch}"

  git checkout -b "$branch"

  python3 <<'PY'
from pathlib import Path
import re

path = Path("src/catalog.js")
text = path.read_text()
pattern = r'(id: "sku-milk-2l", name: "British Whole Milk 2L", pricePence: )(\d+)(, aisle: "Dairy")'
match = re.search(pattern, text)
if not match:
    raise SystemExit("milk price line not found in src/catalog.js")
current = int(match.group(2))
updated = current + 4
text = re.sub(pattern, rf"\g<1>{updated}\g<3>", text, count=1)
path.write_text(text)
print(f"bumped milk pricePence {current} → {updated}")
PY

  git add src/catalog.js
  git commit -m "fix(catalog): bump milk price by 4p"
  git push -u origin HEAD

  local url
  url=$(gh pr create --repo "$REPO" --base "$BASE_BRANCH" --head "$branch" \
    --title "fix: bump whole milk price (+4p) [${TS}]" \
    --body "$(cat <<EOF
## Small PR test

Operator: \`small\`

One-line catalog price change for Slack routing.

**Expected**
- Workflow posts PR summary + **diff** to \`#project-mobile\` (\`C0BGHB7JNLX\`)
- Size under the 120-line Slack threshold

**Not expected**
- Copilot large-PR path
EOF
)")

  echo "SMALL PR: $url"
  git checkout "$BASE_BRANCH"
}

create_large_pr() {
  local branch="demo/large-catalog-expand-${TS}"
  echo "==> Creating LARGE PR on branch ${branch}"

  git checkout -b "$branch"
  mkdir -p src/generated

  python3 <<'PY'
from pathlib import Path

root = Path("src/generated")
root.mkdir(parents=True, exist_ok=True)
index_lines = ['"use strict";', "", "const regions = {};", ""]

for i in range(1, 41):
    name = f"region_{i:02d}"
    path = root / f"{name}.js"
    lines = [
        '"use strict";',
        "",
        f"// Auto-generated region module {i} for large-PR demo",
        "const stores = [",
    ]
    for j in range(1, 16):
        lines.append(
            f'  {{ id: "store-{i:02d}-{j:02d}", name: "Store {i}-{j}", capacity: {50 + j * i} }},'
        )
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

catalog = Path("src/catalog.js")
text = catalog.read_text()
if "generatedRegions" not in text:
    needle = "module.exports = { getCatalog, getProduct, applyPromo, PRODUCTS, PROMOS };"
    replacement = '''const { regions: generatedRegions } = require("./generated");

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
};'''
    if needle not in text:
        raise SystemExit("catalog exports not found — cannot wire generated regions")
    catalog.write_text(text.replace(needle, replacement, 1))
PY

  git add src/generated src/catalog.js
  git commit -m "feat(catalog): expand regional store matrix (large PR demo)"
  git push -u origin HEAD

  local url
  url=$(gh pr create --repo "$REPO" --base "$BASE_BRANCH" --head "$branch" \
    --title "feat: expand regional store matrix (large PR) [${TS}]" \
    --body "$(cat <<EOF
## Large PR test

Operator: \`large\`

Adds dozens of generated region/store modules.

**Expected**
- Slack skipped (keeps \`#project-mobile\` focused on small diffs)
- PR comment routes review to **GitHub Copilot**
- Size over the 120-line Slack threshold
EOF
)")

  echo "LARGE PR: $url"
  git checkout "$BASE_BRANCH"
}

ensure_clean_base

case "$OPERATOR" in
  small)
    create_small_pr
    ;;
  large)
    create_large_pr
    ;;
  both)
    create_small_pr
    # refresh timestamp so branch names stay unique when both run back-to-back
    TS="$(date +%Y%m%d-%H%M%S)"
    create_large_pr
    ;;
esac

echo "Done (${OPERATOR})."
