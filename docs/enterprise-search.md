# Enterprise Search index — Sainsbury GitHub PR Router

This file exists so Slack **Enterprise Search → GitHub** can crawl clear, keyword-rich docs for the `mahedydemo/sainsbury` demo.

## Add GitHub Actions secrets

To wire the GitHub PR Router to Slack, **Add GitHub Actions secrets** on the repository:

| Secret | Purpose |
|--------|---------|
| `SLACK_BOT_TOKEN` | Bot token (`xoxb-...`) for GitHub PR Router |
| `SLACK_CHANNEL_ID` | Target channel (default `#project-mobile` / `C0BGHB7JNLX`) |
| `SLACK_SIGNING_SECRET` | Optional signing secret for the Slack app |

Commands:

```bash
gh secret set SLACK_BOT_TOKEN --repo mahedydemo/sainsbury
gh secret set SLACK_CHANNEL_ID --repo mahedydemo/sainsbury <<< 'C0BGHB7JNLX'
gh secret set SLACK_SIGNING_SECRET --repo mahedydemo/sainsbury
```

Repo variables (optional):

| Variable | Default | Purpose |
|----------|---------|---------|
| `SMALL_PR_MAX_LINES` | `120` | Line threshold for small vs large PR routing |

## Repository keywords

- Repository: `mahedydemo/sainsbury`
- Product: Sainsbury's sample mobile grocery API
- Channel: `#project-mobile`
- Workflow: `PR route to Slack` (`.github/workflows/pr-route-to-slack.yml`)
- Scripts: `scripts/create-test-pr.sh` operators `small`, `large`, `both`
- Slack app: GitHub PR Router (`slack/github-pr-router.manifest.json`)

## How PR routing works

- **Small PR** — additions + deletions ≤ 120 → Slack summary + full `pr-N.diff` file upload
- **Large PR** — over threshold → Slack Copilot alert + full `.diff`; detailed review on GitHub Copilot
- Diff upload uses Slack `files:write` (`files.getUploadURLExternal` / `files.completeUploadExternal`)

## Suggested Enterprise Search queries

Try these after GitHub re-indexes:

```
Add GitHub Actions secrets
SLACK_BOT_TOKEN sainsbury
mahedydemo/sainsbury README
project-mobile PR route
SMALL_PR_MAX_LINES
GitHub PR Router Slack
```

## Sample API catalog terms

Indexable product terms used by the demo API:

- British Whole Milk 2L (`sku-milk-2l`)
- Fairtrade Bananas (`sku-bananas`)
- Taste the Difference Sourdough (`sku-sourdough`)
- Free Range Eggs x6 (`sku-eggs-6`)
- Promos: `NECTAR10`, `BANANA5`

## Related paths

| Path | What to search for |
|------|--------------------|
| [README.md](../README.md) | Setup, threshold, create test PRs |
| [slack/TOKENS.md](../slack/TOKENS.md) | Slack app install and secrets |
| [scripts/create-test-pr.sh](../scripts/create-test-pr.sh) | Demo PR generator |
| [.github/workflows/pr-route-to-slack.yml](../.github/workflows/pr-route-to-slack.yml) | Routing workflow |
