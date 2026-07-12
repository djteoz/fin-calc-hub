import Link from "next/link";
import { tools } from "@/lib/tools";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-sm">
            ₽
          </span>
          <span className="text-lg font-bold tracking-tight text-surface-900 group-hover:text-brand-700">
            ФинКальк
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-700"
            >
              {tool.shortTitle}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
