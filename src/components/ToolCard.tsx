import Link from "next/link";

interface ToolCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export function ToolCard({ slug, title, description, icon }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="card group transition hover:border-brand-300 hover:shadow-md"
    >
      <div className="mb-3 text-3xl">{icon}</div>
      <h2 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
        {title}
      </h2>
      <p className="text-sm text-slate-600">{description}</p>
    </Link>
  );
}
