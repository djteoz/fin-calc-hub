"use client";

import { useMemo, useState } from "react";
import { CbrRatesNote } from "@/components/CbrKeyRate";
import { Disclaimer } from "@/components/Disclaimer";
import { cbrData } from "@/lib/cbr";
import { formatMoney, formatNumber } from "@/lib/tools";

export function CurrencyConverter() {
  const currencies = cbrData.currencies;
  const codes = useMemo(
    () => ["RUB", ...currencies.map((c) => c.code)],
    [currencies],
  );

  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("RUB");

  const result = useMemo(() => {
    const value = Number(amount);
    if (!value || value <= 0) return null;

    const getRubRate = (code: string) => {
      if (code === "RUB") return 1;
      const currency = currencies.find((c) => c.code === code);
      return currency?.ratePerUnit ?? null;
    };

    const fromRate = getRubRate(from);
    const toRate = getRubRate(to);

    if (fromRate === null || toRate === null) return null;

    const inRub = value * fromRate;
    const converted = inRub / toRate;

    return { converted, inRub };
  }, [amount, from, to, currencies]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="space-y-6">
      <CbrRatesNote />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="label" htmlFor="amount">
              Сумма
            </label>
            <input
              id="amount"
              className="input"
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
            <div>
              <label className="label" htmlFor="from">
                Из
              </label>
              <select
                id="from"
                className="input"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                {codes.map((code) => (
                  <option key={`from-${code}`} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={swap}
              className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
              aria-label="Поменять валюты местами"
            >
              ⇄
            </button>

            <div>
              <label className="label" htmlFor="to">
                В
              </label>
              <select
                id="to"
                className="input"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                {codes.map((code) => (
                  <option key={`to-${code}`} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {result && (
          <div className="space-y-4">
            <div className="result-box">
              <p className="text-sm text-brand-700">
                {formatNumber(Number(amount), amount.includes(".") ? 2 : 0)} {from} =
              </p>
              <p className="text-3xl font-bold">
                {formatNumber(result.converted, 2)} {to}
              </p>
            </div>
            <div className="card">
              <p className="text-sm text-slate-500">Эквивалент в рублях</p>
              <p className="text-xl font-semibold">{formatMoney(result.inRub)}</p>
            </div>
          </div>
        )}
      </div>

      <Disclaimer compact />
    </div>
  );
}
