"use client";

import { useMemo, useState } from "react";
import { CbrKeyRate } from "@/components/CbrKeyRate";
import { Disclaimer } from "@/components/Disclaimer";
import { cbrData } from "@/lib/cbr";
import { formatMoney } from "@/lib/tools";

export function LoanCalculator() {
  const defaultRate = cbrData.keyRate;
  const [amount, setAmount] = useState("3000000");
  const [rate, setRate] = useState(String(defaultRate));
  const [years, setYears] = useState("10");

  const result = useMemo(() => {
    const principal = Number(amount);
    const annualRate = Number(rate) / 100 / 12;
    const months = Number(years) * 12;

    if (!principal || !annualRate || !months) {
      return null;
    }

    const payment =
      (principal * annualRate * Math.pow(1 + annualRate, months)) /
      (Math.pow(1 + annualRate, months) - 1);

    const total = payment * months;
    const overpay = total - principal;

    return { payment, total, overpay };
  }, [amount, rate, years]);

  const presets = [
    { label: "Ключевая ставка ЦБ", value: defaultRate },
    { label: "Ипотека ~16%", value: 16 },
    { label: "Потреб. ~22%", value: 22 },
  ];

  return (
    <div className="space-y-6">
      <CbrKeyRate />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="label" htmlFor="amount">
              Сумма кредита, ₽
            </label>
            <input
              id="amount"
              className="input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="label" htmlFor="rate">
              Ставка, % годовых
            </label>
            <input
              id="rate"
              className="input"
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setRate(String(preset.value))}
                  className="rounded-lg border border-white/10 bg-ink-900/50 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-brand-500/30 hover:text-brand-300"
                >
                  {preset.label}
                </button>
              ))}
            </div>
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
            <p className="text-sm text-brand-300">Ежемесячный платёж</p>
            <p className="text-3xl font-bold text-white">{formatMoney(result.payment)}</p>
            <p className="mt-1 text-xs text-slate-500">
                Аннуитетная схема — одинаковый платёж каждый месяц
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card">
                <p className="text-sm text-slate-500">Всего выплатите</p>
                <p className="text-xl font-semibold">{formatMoney(result.total)}</p>
              </div>
              <div className="card">
                <p className="text-sm text-slate-500">Переплата</p>
                <p className="text-xl font-semibold text-red-600">
                  {formatMoney(result.overpay)}
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
