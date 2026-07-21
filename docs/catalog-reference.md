# Catalog reference (Enterprise Search fodder)

Searchable product and promo reference for the Sainsbury mobile sample API in `mahedydemo/sainsbury`.

## Products

| SKU | Name | Aisle | Notes |
|-----|------|-------|-------|
| `sku-milk-2l` | British Whole Milk 2L | Dairy | Small-PR demo bumps `pricePence` by 4p |
| `sku-bananas` | Fairtrade Bananas | Fruit | Overlap-PR demo bumps price by 10p |
| `sku-sourdough` | Taste the Difference Sourdough | Bakery | Static demo item |
| `sku-eggs-6` | Free Range Eggs x6 | Dairy | Static demo item |

## Promotions

| Code | Discount | Applies to |
|------|----------|------------|
| `NECTAR10` | 10% | Any catalog product via `/promo/apply` |
| `BANANA5` | 5% | Any catalog product via `/promo/apply` |

## API endpoints

- `GET /health` — service health
- `GET /catalog` — full product list
- `GET /catalog/:id` — single product
- `POST /basket` — create basket
- `POST /basket/items` — add line item
- `POST /promo/apply` — apply promo code

## Keywords for Slack GitHub search

`Sainsbury`, `catalog.js`, `pricePence`, `NECTAR10`, `project-mobile`, `create-test-pr`, `small PR`, `large PR`, `GitHub Copilot`, `SLACK_BOT_TOKEN`, `Add GitHub Actions secrets`
