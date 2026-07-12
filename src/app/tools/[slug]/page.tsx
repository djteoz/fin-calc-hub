import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
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
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <p className="mb-2 text-3xl">{tool.icon}</p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">{tool.title}</h1>
        <p className="text-lg text-slate-600">{tool.description}</p>
      </div>

      <div className="mb-8">
        <AdSlot />
      </div>

      <div className="card mb-8">
        <Calculator />
      </div>

      <article className="prose prose-slate max-w-none">
        <h2>Как пользоваться калькулятором</h2>
        <p>{tool.seoText}</p>
        <p>
          Все расчёты выполняются в браузере — данные никуда не отправляются.
          Результат обновляется мгновенно при изменении параметров.
        </p>
      </article>

      <div className="mt-8">
        <AdSlot label="Рекламный блок под калькулятором" />
      </div>
    </div>
  );
}
