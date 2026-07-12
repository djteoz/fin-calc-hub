"use client";

import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/Disclaimer";
import { formatMoney } from "@/lib/tools";

type VatMode = "add" | "extract";

const VAT_PRESETS = [
  { label: "20% — основная", value: 20, note: "Большинство товаров и услуг" },
  { label: "10% — льготная", value: 10, note: "Продовольствие, детские товары, медизделия" },
  { label: "0% — экспорт", value: 0, note: "Экспортные операции" },
] as const;

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
    <div className="space-y-6">
      <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 px-4 py-3 text-sm text-violet-200">
        Ставки НДС установлены Налоговым кодексом РФ. Актуальные: 20%, 10% и 0%.
      </div>

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
            <label className="label">Ставка НДС по НК РФ</label>
            <div className="space-y-2">
              {VAT_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setRate(String(preset.value))}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    rate === String(preset.value)
                      ? "border-brand-500/50 bg-brand-500/10"
                      : "border-white/10 bg-ink-900/50 hover:border-white/20"
                  }`}
                >
                  <span className="font-medium text-slate-100">{preset.label}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{preset.note}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className={`rounded-xl px-4 py-2 text-sm font-medium ${
                mode === "add"
                  ? "bg-brand-600 text-white"
                  : "bg-ink-800 text-slate-300 hover:bg-ink-700"
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
                  : "bg-ink-800 text-slate-300 hover:bg-ink-700"
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
              <p className="text-sm text-brand-700">Сумма НДС ({rate}%)</p>
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

      <Disclaimer compact />
    </div>
  );
}
