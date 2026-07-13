# GitHub PR Router — Slack app tokens

## Create the app

1. Open [api.slack.com/apps](https://api.slack.com/apps) → **Create New App** → **From an app manifest**
2. Paste **[`github-pr-router.manifest.json`](./github-pr-router.manifest.json)** (use the **JSON** tab), or the YAML file on the **YAML** tab
3. **Install to Workspace**
4. Confirm bot scopes include **`files:write`** (plus `chat:write`). If you add scopes later, click **Reinstall to Workspace**
5. Copy **Bot User OAuth Token** (`xoxb-...`) from **OAuth & Permissions**

## Wire to GitHub

```bash
# Invite in Slack first:
#   /invite @GitHub PR Router
# in #project-mobile (C0BGHB7JNLX)

gh secret set SLACK_BOT_TOKEN --repo mahedydemo/sainsbury
# paste xoxb-... when prompted

gh secret set SLACK_CHANNEL_ID --repo mahedydemo/sainsbury <<< 'C0BGHB7JNLX'
```

## Verify

```bash
./scripts/create-test-pr.sh small
```

Check `#project-mobile` for the PR summary + diff, and the Actions run on the PR.
