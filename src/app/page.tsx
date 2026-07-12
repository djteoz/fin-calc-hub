import { AdSlot } from "@/components/AdSlot";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/lib/tools";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Бесплатные финансовые калькуляторы
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Рассчитайте кредит, ипотеку, НДС, маржу и доходность инвестиций за
          секунды. Без регистрации, полностью бесплатно.
        </p>
      </section>

      <div className="mb-8">
        <AdSlot label="Рекламный блок (верх страницы)" />
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            slug={tool.slug}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>

      <section className="card mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Почему финансовые калькуляторы?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold text-brand-700">Высокий спрос</h3>
            <p className="text-sm text-slate-600">
              Люди ежедневно ищут «калькулятор кредита» и «калькулятор НДС» в
              Яндексе и Google.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-brand-700">Дорогая реклама</h3>
            <p className="text-sm text-slate-600">
              Финансовая ниша — одна из самых высокооплачиваемых в AdSense и
              партнёрских программах.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-brand-700">Пассивный доход</h3>
            <p className="text-sm text-slate-600">
              После запуска и SEO сайт приносит доход от трафика без вашего
              ежедневного участия.
            </p>
          </div>
        </div>
      </section>

      <AdSlot label="Рекламный блок (низ страницы)" />
    </div>
  );
}
