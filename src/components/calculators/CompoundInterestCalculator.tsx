"use client";

import { useMemo, useState } from "react";
import { CbrKeyRate } from "@/components/CbrKeyRate";
import { Disclaimer } from "@/components/Disclaimer";
import { cbrData } from "@/lib/cbr";
import { formatMoney } from "@/lib/tools";

export function CompoundInterestCalculator() {
  const defaultRate = cbrData.keyRate;
  const [initial, setInitial] = useState("100000");
  const [monthly, setMonthly] = useState("10000");
  const [rate, setRate] = useState(String(Math.max(defaultRate - 2, 8)));
  const [years, setYears] = useState("5");

  const result = useMemo(() => {
    const start = Number(initial);
    const contribution = Number(monthly);
    const monthlyRate = Number(rate) / 100 / 12;
    const months = Number(years) * 12;

    if (!months || monthlyRate < 0) return null;

    let balance = start;
    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate) + contribution;
    }

    const invested = start + contribution * months;
    const profit = balance - invested;

    return { balance, invested, profit };
  }, [initial, monthly, rate, years]);

  return (
    <div className="space-y-6">
      <CbrKeyRate hint="Ключевая ставка — ориентир для депозитов. Реальная доходность зависит от банка и продукта." />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="label" htmlFor="initial">
              Начальная сумма, ₽
            </label>
            <input
              id="initial"
              className="input"
              type="number"
              value={initial}
              onChange={(e) => setInitial(e.target.value)}
            />
          </div>
          <div>
            <label className="label" htmlFor="monthly">
              Ежемесячное пополнение, ₽
            </label>
            <input
              id="monthly"
              className="input"
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
            />
          </div>
          <div>
            <label className="label" htmlFor="rate">
              Доходность, % годовых
            </label>
            <input
              id="rate"
              className="input"
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setRate(String(Math.max(defaultRate - 2, 8)))}
              className="mt-2 rounded-lg border border-white/10 bg-ink-900/50 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-brand-500/30 hover:text-brand-300"
            >
              Ориентир: ключ. ставка − 2 п.п.
            </button>
          </div>
          <div>
            <label className="label" htmlFor="years">
              Срок, лет
            </label>
            <input
              id="years"
              className="input"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>

        {result && (
          <div className="space-y-4">
            <div className="result-box">
              <p className="text-sm text-brand-700">Итоговая сумма</p>
              <p className="text-3xl font-bold">{formatMoney(result.balance)}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card">
                <p className="text-sm text-slate-500">Вложено</p>
                <p className="text-xl font-semibold">{formatMoney(result.invested)}</p>
              </div>
              <div className="card">
                <p className="text-sm text-slate-500">Доход</p>
                <p className="text-xl font-semibold text-brand-700">
                  {formatMoney(result.profit)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Disclaimer compact />
    </div>
  );
}
