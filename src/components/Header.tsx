import Link from "next/link";
import { tools } from "@/lib/tools";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-brand-700">
          ФинКальк
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="transition hover:text-brand-700"
            >
              {tool.shortTitle}
            </Link>
          ))}
        </nav>
        <Link
          href="/monetization"
          className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
        >
          Как заработать
        </Link>
      </div>
    </header>
  );
}
