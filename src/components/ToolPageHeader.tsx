import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolPageHeader({ tool }: { tool: Tool }) {
  return (
    <div className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <nav className="mb-4 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-brand-700">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{tool.shortTitle}</span>
        </nav>

        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl ${tool.accentBg}`}
          >
            {tool.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-surface-900 md:text-3xl">
              {tool.title}
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">{tool.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
