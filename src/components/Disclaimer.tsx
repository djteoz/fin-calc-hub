export function Disclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-slate-500">
        Расчёт носит информационный характер и не является финансовой
        рекомендацией или офертой.
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600">
      <p className="font-medium text-slate-700">Важно</p>
      <p className="mt-1">
        Все расчёты выполняются локально в вашем браузере. Результаты носят
        информационный характер и не являются финансовой рекомендацией, офертой
        или гарантией условий банка.
      </p>
    </div>
  );
}
