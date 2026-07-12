# Подключение calcspot.ru

## 1. Купите домен

Зарегистрируйте **calcspot.ru** на [reg.ru](https://www.reg.ru) (~200–400 ₽/год).

## 2. DNS-записи у регистратора

В панели reg.ru → Домены → calcspot.ru → DNS:

| Тип | Имя | Значение |
|---|---|---|
| **CNAME** | `@` или `www` | `djteoz.github.io` |

Если CNAME для `@` не поддерживается, используйте **A-записи**:

| Тип | Имя | Значение |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `djteoz.github.io` |

## 3. GitHub Pages

1. [github.com/djteoz/fin-calc-hub/settings/pages](https://github.com/djteoz/fin-calc-hub/settings/pages)
2. **Custom domain:** `calcspot.ru`
3. Включите **Enforce HTTPS** (после выпуска сертификата, ~15 мин)

Workflow уже добавляет файл `CNAME` с `calcspot.ru` при деплое.

## 4. Дождитесь деплоя

Push в `main` → Actions → ~2 мин → сайт на **https://calcspot.ru**

DNS может обновляться до 24 часов (обычно 15–60 мин).

## Брендинг на сайте

Всё настраивается в `src/lib/brand.ts`:

```typescript
export const brand = {
  name: "CalcSpot",
  shortName: "CS",
  tagline: "...",
  plannedDomain: "calcspot.ru",
  domain: "https://calcspot.ru",
};
```
