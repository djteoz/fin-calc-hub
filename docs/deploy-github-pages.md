# GitHub Pages

Сайт собирается как статический экспорт Next.js в папку `out`.

## Вариант A: Сайт в корне (`username.github.io`)

Подходит, если репозиторий называется **`USERNAME.github.io`**.

**Переменные (Settings → Secrets and variables → Actions → Variables):**

| Переменная | Значение |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://USERNAME.github.io` |
| `NEXT_PUBLIC_BASE_PATH` | *(оставить пустым)* |

## Вариант B: Сайт в подпапке (`username.github.io/fin-calc-hub`)

Подходит для обычного репозитория `fin-calc-hub`.

**Переменные:**

| Переменная | Значение |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://USERNAME.github.io/fin-calc-hub` |
| `NEXT_PUBLIC_BASE_PATH` | `/fin-calc-hub` |

## Шаги

1. Создайте репозиторий на GitHub и запушьте код:

```bash
git init
git add .
git commit -m "Initial commit: fin-calc-hub"
git branch -M main
git remote add origin https://github.com/USERNAME/fin-calc-hub.git
git push -u origin main
```

2. На GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**

3. Добавьте variables из таблицы выше (вариант A или B)

4. Workflow `.github/workflows/deploy-github-pages.yml` задеплоит сайт автоматически при push в `main`

## Локальная проверка перед деплоем

```bash
# Для project site (подпапка):
set NEXT_PUBLIC_BASE_PATH=/fin-calc-hub
set NEXT_PUBLIC_SITE_URL=https://USERNAME.github.io/fin-calc-hub
npm run build

# Для user site (корень):
set NEXT_PUBLIC_SITE_URL=https://USERNAME.github.io
npm run build
```

Статика появится в папке `out`.
