# ФинКальк

Бесплатный сайт финансовых калькуляторов на Next.js для пассивного дохода через рекламу и SEO.

## Калькуляторы

- Кредит и ипотека
- Сложный процент
- НДС
- Маржа прибыли
- Проценты

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Деплой

Сайт собирается в статику (`out/`) и работает на **Cloudflare Pages** и **GitHub Pages**.

| Платформа | Инструкция |
|---|---|
| Cloudflare Pages | [docs/deploy-cloudflare.md](docs/deploy-cloudflare.md) |
| GitHub Pages | [docs/deploy-github-pages.md](docs/deploy-github-pages.md) |

### Cloudflare Pages (кратко)

- Build command: `npm run build`
- Output directory: `out`
- Env: `NEXT_PUBLIC_SITE_URL=https://ваш-проект.pages.dev`

### GitHub Pages (кратко)

1. Push в GitHub
2. Settings → Pages → Source: **GitHub Actions**
3. Задайте variables `NEXT_PUBLIC_SITE_URL` и при необходимости `NEXT_PUBLIC_BASE_PATH`

## Монетизация

1. Задеплойте на [Vercel](https://vercel.com) (бесплатно)
2. Подключите Google AdSense — замените компонент `AdSlot` на реальный код
3. Зарегистрируйте сайт в Яндекс.Вебмастер и Google Search Console
4. Добавьте партнёрские ссылки на банки и финтех-сервисы

## Лицензия

MIT
