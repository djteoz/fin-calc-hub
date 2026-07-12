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
    <div className="rounded-xl border border-white/[0.06] bg-ink-800/40 px-4 py-3 text-sm leading-relaxed text-slate-400">
      <p className="font-medium text-slate-300">Важно</p>
      <p className="mt-1">
        Все расчёты выполняются локально в вашем браузере. Результаты носят
        информационный характер и не являются финансовой рекомендацией, офертой
        или гарантией условий банка.
      </p>
    </div>
  );
}
