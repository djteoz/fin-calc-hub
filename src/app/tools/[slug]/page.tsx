import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Disclaimer } from "@/components/Disclaimer";
import { ToolPageHeader } from "@/components/ToolPageHeader";
import { calculatorMap } from "@/components/calculators";
import { getTool, tools } from "@/lib/tools";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) return {};

  return {
    title: tool.title,
    description: tool.description,
    keywords: [tool.title, tool.shortTitle, "калькулятор онлайн", "бесплатно"],
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) notFound();

  const Calculator = calculatorMap[tool.slug];

  return (
    <>
      <ToolPageHeader tool={tool} />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <AdSlot />

        <div className="card mb-8">
          <Calculator />
        </div>

        <article className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8">
          <h2 className="mb-3 text-lg font-bold text-surface-900">
            Как пользоваться
          </h2>
          <p className="leading-relaxed text-slate-600">{tool.seoText}</p>
          <p className="mt-3 text-sm text-slate-500">
            Все расчёты выполняются в браузере — данные никуда не отправляются.
            Результат обновляется мгновенно при изменении параметров.
          </p>
        </article>

        <Disclaimer />

        <AdSlot />
      </div>
    </>
  );
}
