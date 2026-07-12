import { cbrData, formatCbrDate } from "@/lib/cbr";

interface CbrKeyRateProps {
  hint?: string;
}

export function CbrKeyRate({ hint }: CbrKeyRateProps) {
  return (
    <div className="rounded-xl border border-brand-500/20 bg-brand-500/5 px-4 py-3 text-sm">
      <p className="text-slate-200">
        <span className="font-semibold text-brand-300">Ключевая ставка ЦБ РФ:</span>{" "}
        {cbrData.keyRate}%{" "}
        <span className="text-slate-500">(с {formatCbrDate(cbrData.keyRateDate)})</span>
      </p>
      <p className="mt-1 text-slate-400">
        {hint ??
          "Ориентир для экономики. Ставка вашего банка по кредиту или депозиту может отличаться."}
      </p>
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
