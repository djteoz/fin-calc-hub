export interface CbrCurrency {
  code: string;
  name: string;
  nominal: number;
  value: number;
  ratePerUnit: number;
}

export interface CbrData {
  fetchedAt: string;
  ratesDate: string;
  keyRate: number;
  keyRateDate: string;
  currencies: CbrCurrency[];
  source: string;
}
