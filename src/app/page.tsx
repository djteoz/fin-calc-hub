import { AdSlot } from "@/components/AdSlot";
import { ToolCardFromTool } from "@/components/ToolCard";
import { tools } from "@/lib/tools";

const benefits = [
  {
    title: "Бесплатно",
    text: "Все калькуляторы доступны без оплаты и скрытых ограничений.",
    icon: "✓",
  },
  {
    title: "Без регистрации",
    text: "Не нужен аккаунт — открыли страницу и сразу считаете.",
    icon: "⚡",
  },
  {
    title: "Конфиденциально",
    text: "Расчёты выполняются в браузере, данные никуда не отправляются.",
    icon: "🔒",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-gradient border-b border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center rounded-full border border-brand-200/60 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
              5 калькуляторов · всегда бесплатно
            </p>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-surface-900 md:text-5xl md:leading-tight">
              Финансовые расчёты{" "}
              <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
                за секунды
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              Кредит, ипотека, НДС, маржа и сложный процент — точные расчёты
              онлайн без регистрации.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur-sm"
              >
                <span className="mb-1 block text-lg">{item.icon}</span>
                <p className="text-sm font-semibold text-surface-900">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <AdSlot />

        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-surface-900">
              Калькуляторы
            </h2>
            <p className="mt-1 text-slate-600">
              Выберите нужный инструмент для расчёта
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCardFromTool key={tool.slug} tool={tool} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card md:p-10">
          <h2 className="mb-6 text-xl font-bold text-surface-900">
            Частые вопросы
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-surface-900">
                Нужно ли регистрироваться?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Нет. Все калькуляторы работают сразу — достаточно открыть
                страницу и ввести данные.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-surface-900">
                Насколько точны расчёты?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Используются стандартные финансовые формулы. Для кредитов
                учитывается аннуитетный платёж — как в большинстве банков.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-surface-900">
                Сохраняются ли мои данные?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Нет. Все вычисления происходят локально в вашем браузере.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-surface-900">
                Можно ли пользоваться с телефона?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Да, сайт адаптирован под мобильные устройства и планшеты.
              </p>
            </div>
          </div>
        </section>

        <AdSlot />
      </div>
    </>
  );
}
