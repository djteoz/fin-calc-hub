/**
 * Брендинг сайта — меняйте здесь перед покупкой домена.
 * После покупки домена обновите name, tagline и siteUrl в .env / GitHub Actions.
 */
export const brand = {
  /** Отображаемое название */
  name: "ФинКальк",
  /** Короткое имя для логотипа */
  shortName: "ФК",
  /** Слоган */
  tagline: "Финансовые калькуляторы с данными ЦБ РФ",
  /** Варианты доменов для будущего — см. docs/domain-ideas.md */
  plannedDomain: "fin-calc.ru",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://djteoz.github.io/fin-calc-hub";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/fin-calc-hub";
