# Идеи доменных имён

Популярные имена (`finmeter.ru`, `rubcalc.ru`, `procalc.ru`) часто заняты.
Ниже — стратегии и варианты, которые **скорее всего свободны** (проверка DNS, июль 2026).
**Перед покупкой** всегда проверяйте на [reg.ru](https://www.reg.ru) или [nic.ru](https://www.nic.ru).

## Скорее всего свободны (.ru)

| Домен | Бренд | Комментарий |
|---|---|---|
| **numcalc.ru** | NumCalc | calc + numbers, коротко |
| **calcspot.ru** | CalcSpot | «место для калькуляторов» |
| **kalkul.ru** | Kalkul | транслит, 6 букв |
| **calcprofi.ru** | CalcProfi | для профи и бизнеса |
| **moneycalc.ru** | MoneyCalc | SEO: money + calc |
| **calcform.ru** | CalcForm | формулы / формы |
| **kalkbit.ru** | KalkBit | tech-звучание |
| **rucalcpro.ru** | RuCalcPro | RU + calc + pro |
| **kalkru.ru** | KalkRU | калькуляторы России |
| **finarith.ru** | FinArith | finance + arithmetic |
| **rubtools.ru** | RubTools | инструменты в рублях |

## Альтернативные зоны (дешевле, чаще свободны)

| Домен | ~цена | Комментарий |
|---|---|---|
| **calcru.online** | ~200–400 ₽/год | Прямой смысл |
| **fin-calc.online** | ~200–400 ₽/год | Как текущий проект |
| **rubcalc.site** | ~200 ₽/год | Коротко |
| **kalk.online** | ~300 ₽/год | Очень коротко |

## Брендовые (придуманные — выше шанс свободны)

| Домен | Бренд |
|---|---|
| **finarith.ru** | FinArith |
| **calczen.ru** | CalcZen |
| **kalkform.ru** | KalkForm |
| **finzen.ru** | FinZen |

## Если .ru не нужен прямо сейчас

Бесплатно продолжайте на:
**https://djteoz.github.io/fin-calc-hub**

Потом подключите свой домен в GitHub Pages → Custom domain.

## Как переименовать сайт после покупки

1. `src/lib/brand.ts` — `name`, `shortName`, `tagline`, `plannedDomain`
2. GitHub Actions → `NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru`
3. Для своего домена уберите `NEXT_PUBLIC_BASE_PATH` (путь будет `/`, не `/fin-calc-hub`)
4. GitHub → Settings → Pages → Custom domain

## Проверка занятости

- [reg.ru/domain/new](https://www.reg.ru/domain/new/)
- [nic.ru](https://www.nic.ru)
- [webnames.ru/domains/check](https://www.webnames.ru/domains/check)
