import type { CbrCurrency, CbrData } from "@/types/cbr";
import cbrJson from "@/data/cbr.json";

export const cbrData = cbrJson as CbrData;

export function getCbrData(): CbrData {
  return cbrData;
}

export function getCurrency(code: string): CbrCurrency | undefined {
  return cbrData.currencies.find((c) => c.code === code);
}

export function formatCbrDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}.${month}.${year}`;
}
