import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolPageHeader({ tool }: { tool: Tool }) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-mesh-dark opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-12">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-brand-300">
            Главная
          </Link>
          <span className="mx-2 text-slate-700">/</span>
          <span className="text-slate-400">{tool.shortTitle}</span>
        </nav>

        <div className="flex items-start gap-5">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl ${tool.accentBg}`}
          >
            {tool.icon}
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-white md:text-4xl">
              {tool.title}
            </h1>
            <p className="mt-2 max-w-2xl text-slate-400">{tool.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
