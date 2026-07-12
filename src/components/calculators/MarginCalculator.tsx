"use client";

import { useMemo, useState } from "react";
import { formatMoney, formatNumber } from "@/lib/tools";

export function MarginCalculator() {
  const [cost, setCost] = useState("500");
  const [price, setPrice] = useState("1200");

  const result = useMemo(() => {
    const costValue = Number(cost);
    const priceValue = Number(price);

    if (!costValue || !priceValue) return null;

    const profit = priceValue - costValue;
    const margin = (profit / priceValue) * 100;
    const markup = (profit / costValue) * 100;

    return { profit, margin, markup };
  }, [cost, price]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="label" htmlFor="cost">
            Себестоимость, ₽
          </label>
          <input
            id="cost"
            className="input"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="price">
            Цена продажи, ₽
          </label>
          <input
            id="price"
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="result-box">
            <p className="text-sm text-brand-700">Прибыль с единицы</p>
            <p className="text-3xl font-bold">{formatMoney(result.profit)}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card">
              <p className="text-sm text-slate-500">Маржа</p>
              <p className="text-xl font-semibold">{formatNumber(result.margin)}%</p>
            </div>
            <div className="card">
              <p className="text-sm text-slate-500">Наценка</p>
              <p className="text-xl font-semibold">{formatNumber(result.markup)}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
