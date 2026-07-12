import Link from "next/link";
import type { Tool } from "@/lib/tools";

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
  accentBg,
}: ToolCardProps) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover"
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition ${accentBg}`}
      >
        {icon}
      </div>
      <h2 className="mb-2 text-lg font-semibold text-surface-900 group-hover:text-brand-700">
        {title}
      </h2>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 transition group-hover:opacity-100">
        Открыть
        <svg
          className="h-4 w-4 transition group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
