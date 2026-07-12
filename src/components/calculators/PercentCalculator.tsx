"use client";

import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/Disclaimer";
import { formatNumber } from "@/lib/tools";

type PercentMode = "of" | "discount" | "change";

export function PercentCalculator() {
  const [a, setA] = useState("1000");
  const [b, setB] = useState("15");
  const [mode, setMode] = useState<PercentMode>("of");

  const result = useMemo(() => {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) return null;

    if (mode === "of") {
      return { label: `${numB}% от ${numA}`, value: (numA * numB) / 100 };
    }

    if (mode === "discount") {
      const finalPrice = numA * (1 - numB / 100);
      return { label: `Цена со скидкой ${numB}%`, value: finalPrice };
    }

    const change = numA === 0 ? 0 : ((numB - numA) / numA) * 100;
    return { label: "Изменение в %", value: change };
  }, [a, b, mode]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["of", "X% от числа"],
              ["discount", "Скидка"],
              ["change", "Изменение"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={`rounded-xl px-4 py-2 text-sm font-medium ${
                mode === value
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
              onClick={() => setMode(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <label className="label" htmlFor="a">
            {mode === "change" ? "Было" : "Число"}
          </label>
          <input
            id="a"
            className="input"
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="b">
            {mode === "change" ? "Стало" : "Процент"}
          </label>
          <input
            id="b"
            className="input"
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </div>

      {result && (
        <div className="result-box">
          <p className="text-sm text-brand-700">{result.label}</p>
          <p className="text-3xl font-bold">
            {mode === "change"
              ? `${formatNumber(result.value)}%`
              : formatNumber(result.value)}
          </p>
        </div>
      )}
      </div>

      <Disclaimer compact />
    </div>
  );
}
