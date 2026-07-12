# Идеи доменных имён

Когда будете покупать домен, выберите короткое имя с ключевым словом «calc» / «kalk» / «fin» — это помогает SEO.

## Топ рекомендации

| Домен | Плюсы | Пример бренда |
|---|---|---|
| **calc.ru** / **kalk.ru** | Коротко, запоминается | «Kalk» |
| **finmeter.ru** | Звучит профессионально | FinMeter |
| **rubcalc.ru** | Понятно: калькуляторы в рублях | RubCalc |
| **procalc.ru** | «Про»-уровень, для бизнеса | ProCalc |
| **cashcalc.ru** | SEO: cash + calc | CashCalc |
| **fin-calc.ru** | Прямое попадание в запрос | FinCalc |

## .рф домены (если доступны)

- **считаем.рф**
- **калькулятор-фин.рф**
- **мойрасчёт.рф**

## Как переименовать сайт после покупки домена

1. Откройте `src/lib/brand.ts` — измените `name`, `shortName`, `tagline`, `plannedDomain`
2. Обновите `NEXT_PUBLIC_SITE_URL` в GitHub Actions workflow
3. Уберите `NEXT_PUBLIC_BASE_PATH` (для своего домена путь будет `/`, не `/fin-calc-hub`)
4. Подключите домен в GitHub Pages → Settings → Custom domain

## Проверка занятости

- [reg.ru](https://www.reg.ru)
- [nic.ru](https://www.nic.ru)
- [whois.com](https://www.whois.com)
