import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ФинКальк — бесплатные финансовые калькуляторы</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-700">
              Политика конфиденциальности
            </Link>
            <Link href="/monetization" className="hover:text-brand-700">
              Монетизация
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
