# Small vs large PR routing demo (Sainsbury's sample mobile app)

Demo that **routes small PRs into Slack** (`#project-mobile`) with the PR summary and unified **diff**, and leaves **large PRs** for GitHub Copilot review (no Slack dump).

| Path | Purpose |
|------|---------|
| `src/` | Sample grocery mobile API (catalog, basket, promos) |
| `.github/workflows/pr-route-to-slack.yml` | Size gate + Slack post for small PRs |
| `scripts/create-test-pr.sh` | Operator-driven test PRs: `small`, `large`, or `both` |

## Threshold

A PR is **small** when `additions + deletions <= 120` (override with repo variable `SMALL_PR_MAX_LINES`).

- **Small** → Slack `#project-mobile` (`C0BGHB7JNLX`): title, author, stats, file list, truncated unified diff + link to full diff
- **Large** → PR comment only: routed to GitHub Copilot; Slack skipped intentionally

## Setup

1. Invite a Slack bot that can `chat:write` into `#project-mobile`.
2. Add GitHub Actions secrets on `mahedydemo/sainsbury`:

```bash
gh secret set SLACK_BOT_TOKEN --repo mahedydemo/sainsbury
# paste xoxb-... token
```

Optional: `SLACK_CHANNEL_ID` (defaults to `C0BGHB7JNLX`).

3. Create test PRs on demand:

```bash
npm test

# operators: small | large | both
./scripts/create-test-pr.sh small   # tiny change → Slack + diff
./scripts/create-test-pr.sh large   # big change → Copilot path
./scripts/create-test-pr.sh both    # one of each

# npm aliases
npm run pr:small
npm run pr:large
npm run pr:both
```

## Quick start (API)

```bash
npm start
# GET http://127.0.0.1:3040/health
# GET http://127.0.0.1:3040/catalog
```
