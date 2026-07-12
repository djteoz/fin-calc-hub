export type ToolSlug =
  | "kredit"
  | "slozhny-procent"
  | "nds"
  | "marzha"
  | "procenty"
  | "valyuta";

export interface Tool {
  slug: ToolSlug;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  seoText: string;
  accent: string;
  accentBg: string;
}

export const tools: Tool[] = [
  {
    slug: "kredit",
    title: "Калькулятор кредита и ипотеки",
    shortTitle: "Кредит",
    description: "Ежемесячный платёж, переплата и полная стоимость кредита.",
    icon: "🏦",
    accent: "text-blue-600",
    accentBg: "bg-blue-50 group-hover:bg-blue-100",
    seoText:
      "Рассчитайте ежемесячный платёж по кредиту или ипотеке. Укажите сумму, ставку и срок — калькулятор покажет переплату и общую сумму выплат.",
  },
  {
    slug: "slozhny-procent",
    title: "Калькулятор сложного процента",
    shortTitle: "Инвестиции",
    description: "Сколько вырастут сбережения при регулярных вложениях.",
    icon: "📈",
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50 group-hover:bg-emerald-100",
    seoText:
      "Узнайте, как сложный процент увеличивает капитал. Подходит для расчёта депозитов, инвестиций и накоплений.",
  },
  {
    slug: "nds",
    title: "Калькулятор НДС",
    shortTitle: "НДС",
    description: "Выделить или начислить НДС 20% для счетов и чеков.",
    icon: "🧾",
    accent: "text-violet-600",
    accentBg: "bg-violet-50 group-hover:bg-violet-100",
    seoText:
      "Быстрый расчёт НДС: добавить налог к сумме или выделить из суммы с НДС. Актуально для ИП и малого бизнеса.",
  },
  {
    slug: "marzha",
    title: "Калькулятор маржи прибыли",
    shortTitle: "Маржа",
    description: "Наценка, маржа и рентабельность продаж.",
    icon: "💰",
    accent: "text-amber-600",
    accentBg: "bg-amber-50 group-hover:bg-amber-100",
    seoText:
      "Рассчитайте маржинальность товара: себестоимость, цена продажи, наценка в процентах и чистая прибыль.",
  },
  {
    slug: "procenty",
    title: "Калькулятор процентов",
    shortTitle: "Проценты",
    description: "Найти процент от числа, скидку и разницу в %.",
    icon: "🔢",
    accent: "text-rose-600",
    accentBg: "bg-rose-50 group-hover:bg-rose-100",
    seoText:
      "Универсальный калькулятор процентов: сколько составляет X% от числа, какая скидка и на сколько % изменилось значение.",
  },
  {
    slug: "valyuta",
    title: "Конвертер валют",
    shortTitle: "Валюта",
    description: "Перевод по официальным курсам Банка России.",
    icon: "💱",
    accent: "text-sky-600",
    accentBg: "bg-sky-50 group-hover:bg-sky-100",
    seoText:
      "Конвертация валют по официальным курсам ЦБ РФ. Укажите сумму и выберите валюты — калькулятор покажет результат в рублях и выбранной валюте.",
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, digits = 2): string {
  return new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}
