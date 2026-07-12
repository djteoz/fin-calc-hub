import Link from "next/link";
import type { Tool } from "@/lib/tools";

const accentRing: Record<string, string> = {
  "text-blue-600": "group-hover:shadow-blue-500/20 group-hover:border-blue-500/30",
  "text-emerald-600": "group-hover:shadow-accent-500/20 group-hover:border-accent-500/30",
  "text-violet-600": "group-hover:shadow-violet-500/20 group-hover:border-violet-500/30",
  "text-amber-600": "group-hover:shadow-amber-500/20 group-hover:border-amber-500/30",
  "text-rose-600": "group-hover:shadow-rose-500/20 group-hover:border-rose-500/30",
  "text-sky-600": "group-hover:shadow-brand-500/20 group-hover:border-brand-500/30",
};

const accentGlow: Record<string, string> = {
  "text-blue-600": "from-blue-500/20 to-transparent",
  "text-emerald-600": "from-accent-500/20 to-transparent",
  "text-violet-600": "from-violet-500/20 to-transparent",
  "text-amber-600": "from-amber-500/20 to-transparent",
  "text-rose-600": "from-rose-500/20 to-transparent",
  "text-sky-600": "from-brand-500/20 to-transparent",
};

interface ToolCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  accentBg: string;
}

export function ToolCard({
  slug,
  title,
  description,
  icon,
  accent,
  accentBg,
}: ToolCardProps) {
  const ring = accentRing[accent] ?? accentRing["text-sky-600"];
  const glow = accentGlow[accent] ?? accentGlow["text-sky-600"];

  return (
    <Link
      href={`/tools/${slug}`}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-800/60 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-ink-800 hover:shadow-card-hover ${ring}`}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 ${glow}`}
      />

      <div
        className={`relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${accentBg}`}
      >
        {icon}
      </div>

      <h2 className="relative mb-2 font-display text-lg font-semibold text-white group-hover:text-brand-200">
        {title}
      </h2>
      <p className="relative text-sm leading-relaxed text-slate-400">{description}</p>

      <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-400 opacity-0 transition group-hover:opacity-100">
        Открыть калькулятор
        <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}

export function ToolCardFromTool({ tool }: { tool: Tool }) {
  return (
    <ToolCard
      slug={tool.slug}
      title={tool.title}
      description={tool.description}
      icon={tool.icon}
      accent={tool.accent}
      accentBg={tool.accentBg}
    />
  );
}
