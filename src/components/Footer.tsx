import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-surface-900">ФинКальк</p>
            <p className="mt-1 text-sm text-slate-500">
              Бесплатные финансовые калькуляторы онлайн
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <Link href="/privacy" className="transition hover:text-brand-700">
              Политика конфиденциальности
            </Link>
            <span className="text-slate-300">·</span>
            <span>© {new Date().getFullYear()} ФинКальк</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
