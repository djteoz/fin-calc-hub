import { cbrData, formatCbrDate } from "@/lib/cbr";

interface CbrKeyRateProps {
  hint?: string;
}

export function CbrKeyRate({ hint }: CbrKeyRateProps) {
  return (
    <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 px-4 py-3 text-sm text-blue-900">
      <p>
        <span className="font-semibold">Ключевая ставка ЦБ РФ:</span>{" "}
        {cbrData.keyRate}%{" "}
        <span className="text-blue-700/80">
          (с {formatCbrDate(cbrData.keyRateDate)})
        </span>
      </p>
      <p className="mt-1 text-blue-800/80">
        {hint ??
          "Это ориентир для экономики. Ставка вашего банка по кредиту или депозиту может отличаться."}
      </p>
      {cbrData.source === "cbr.ru" && (
        <p className="mt-1 text-xs text-blue-700/70">
          Источник: cbr.ru · обновлено {formatCbrDate(cbrData.ratesDate)}
        </p>
      )}
    </div>
  );
}

export function CbrRatesNote() {
  return (
    <p className="text-xs text-slate-500">
      Курсы валют — официальные данные Банка России на{" "}
      {formatCbrDate(cbrData.ratesDate)}. В обменниках и банках курс может
      отличаться.
    </p>
  );
}
