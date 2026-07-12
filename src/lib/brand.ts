/**
 * Брендинг сайта CalcSpot — calcspot.ru
 */
export const brand = {
  name: "CalcSpot",
  shortName: "CS",
  tagline: "Финансовые калькуляторы с данными ЦБ РФ",
  plannedDomain: "calcspot.ru",
  domain: "https://calcspot.ru",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? brand.domain;

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
