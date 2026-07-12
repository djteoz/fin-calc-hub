# Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 22

## Переменные окружения (Cloudflare Dashboard → Settings → Environment variables)

| Переменная | Пример | Когда нужна |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://fin-calc-hub.pages.dev` | Всегда — для sitemap и SEO |
| `NEXT_PUBLIC_BASE_PATH` | *(пусто)* | Только если сайт в подпапке |

## Быстрый деплой через CLI

```bash
npm install
npm run build
npx wrangler pages deploy out --project-name=fin-calc-hub
```

## Деплой через Git (рекомендуется)

1. Залейте репозиторий на GitHub
2. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Connect to Git
3. Выберите репозиторий
4. Build command: `npm run build`
5. Output directory: `out`
6. Добавьте `NEXT_PUBLIC_SITE_URL` = ваш `*.pages.dev` URL

После первого деплоя Cloudflare выдаст URL вида `https://fin-calc-hub.pages.dev`.
