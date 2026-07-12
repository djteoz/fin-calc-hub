"use client";

import { useMemo, useState } from "react";
import { formatMoney } from "@/lib/tools";

type VatMode = "add" | "extract";

export function VatCalculator() {
  const [amount, setAmount] = useState("100000");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState<VatMode>("add");

  const result = useMemo(() => {
    const sum = Number(amount);
    const vatRate = Number(rate) / 100;

    if (!sum || vatRate < 0) return null;

    if (mode === "add") {
      const vat = sum * vatRate;
      return { base: sum, vat, total: sum + vat };
    }

    const base = sum / (1 + vatRate);
    const vat = sum - base;
    return { base, vat, total: sum };
  }, [amount, rate, mode]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="label" htmlFor="amount">
            Сумма, ₽
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
            Ставка НДС, %
          </label>
          <input
            id="rate"
            className="input"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className={`rounded-xl px-4 py-2 text-sm font-medium ${
              mode === "add"
                ? "bg-brand-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
            onClick={() => setMode("add")}
          >
            Начислить НДС
          </button>
          <button
            type="button"
            className={`rounded-xl px-4 py-2 text-sm font-medium ${
              mode === "extract"
                ? "bg-brand-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
            onClick={() => setMode("extract")}
          >
            Выделить НДС
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="result-box">
            <p className="text-sm text-brand-700">Сумма НДС</p>
            <p className="text-3xl font-bold">{formatMoney(result.vat)}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card">
              <p className="text-sm text-slate-500">Без НДС</p>
              <p className="text-xl font-semibold">{formatMoney(result.base)}</p>
            </div>
            <div className="card">
              <p className="text-sm text-slate-500">С НДС</p>
              <p className="text-xl font-semibold">{formatMoney(result.total)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
