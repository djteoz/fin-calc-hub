export type ToolSlug =
  | "kredit"
  | "slozhny-procent"
  | "nds"
  | "marzha"
  | "procenty";

export interface Tool {
  slug: ToolSlug;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  seoText: string;
}

export const tools: Tool[] = [
  {
    slug: "kredit",
    title: "Калькулятор кредита и ипотеки",
    shortTitle: "Кредит",
    description: "Ежемесячный платёж, переплата и полная стоимость кредита.",
    icon: "🏦",
    seoText:
      "Рассчитайте ежемесячный платёж по кредиту или ипотеке. Укажите сумму, ставку и срок — калькулятор покажет переплату и общую сумму выплат.",
  },
  {
    slug: "slozhny-procent",
    title: "Калькулятор сложного процента",
    shortTitle: "Инвестиции",
    description: "Сколько вырастут сбережения при регулярных вложениях.",
    icon: "📈",
    seoText:
      "Узнайте, как сложный процент увеличивает капитал. Подходит для расчёта депозитов, инвестиций и накоплений.",
  },
  {
    slug: "nds",
    title: "Калькулятор НДС",
    shortTitle: "НДС",
    description: "Выделить или начислить НДС 20% для счетов и чеков.",
    icon: "🧾",
    seoText:
      "Быстрый расчёт НДС: добавить налог к сумме или выделить из суммы с НДС. Актуально для ИП и малого бизнеса.",
  },
  {
    slug: "marzha",
    title: "Калькулятор маржи прибыли",
    shortTitle: "Маржа",
    description: "Наценка, маржа и рентабельность продаж.",
    icon: "💰",
    seoText:
      "Рассчитайте маржинальность товара: себестоимость, цена продажи, наценка в процентах и чистая прибыль.",
  },
  {
    slug: "procenty",
    title: "Калькулятор процентов",
    shortTitle: "Проценты",
    description: "Найти процент от числа, скидку и разницу в %.",
    icon: "🔢",
    seoText:
      "Универсальный калькулятор процентов: сколько составляет X% от числа, какая скидка и на сколько % изменилось значение.",
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
