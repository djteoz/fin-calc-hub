import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolCardFromTool } from "@/components/ToolCard";
import { brand } from "@/lib/brand";
import { cbrData, formatCbrDate } from "@/lib/cbr";
import { tools } from "@/lib/tools";

const benefits = [
  {
    title: "Бесплатно",
    text: "Без подписок и скрытых платежей",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Данные ЦБ",
    text: "Курсы и ключевая ставка",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Приватно",
    text: "Расчёт только в браузере",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Нужна ли регистрация?",
    a: "Нет. Откройте калькулятор и сразу вводите данные — аккаунт не требуется.",
  },
  {
    q: "Откуда берутся курсы валют?",
    a: "Из официальных данных Банка России. Обновляются автоматически каждый день.",
  },
  {
    q: "Насколько точны расчёты?",
    a: "Используются стандартные финансовые формулы. Для кредитов — аннуитетная схема, как в большинстве банков.",
  },
  {
    q: "Сохраняются ли мои данные?",
    a: "Нет. Все вычисления выполняются локально на вашем устройстве.",
  },
];

export default function HomePage() {
  const usd = cbrData.currencies.find((c) => c.code === "USD");
  const eur = cbrData.currencies.find((c) => c.code === "EUR");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-mesh-dark" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              {tools.length} калькуляторов · ЦБ РФ · бесплатно
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl md:leading-[1.05]">
              <span className="text-gradient">Финансовые расчёты</span>
              <br />
              <span className="text-gradient-brand">без лишних шагов</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Кредит, валюта, НДС, маржа и инвестиции — точные калькуляторы с
              данными Центробанка. {brand.name}, {brand.tagline.toLowerCase()}.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/tools/kredit" className="btn-primary">
                Калькулятор кредита
              </Link>
              <Link
                href="/tools/valyuta"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10"
              >
                Курсы валют ЦБ
              </Link>
            </div>
          </div>

          {/* Live stats */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-ink-800/50 p-5 text-center backdrop-blur-sm">
              <p className="section-label mb-1">Ключевая ставка ЦБ</p>
              <p className="font-display text-3xl font-bold text-white">
                {cbrData.keyRate}%
              </p>
              <p className="mt-1 text-xs text-slate-500">
                с {formatCbrDate(cbrData.keyRateDate)}
              </p>
            </div>
            {usd && (
              <div className="rounded-2xl border border-white/[0.06] bg-ink-800/50 p-5 text-center backdrop-blur-sm">
                <p className="section-label mb-1">USD / RUB</p>
                <p className="font-display text-3xl font-bold text-white">
                  {usd.ratePerUnit.toFixed(2)} ₽
                </p>
                <p className="mt-1 text-xs text-slate-500">курс ЦБ</p>
              </div>
            )}
            {eur && (
              <div className="rounded-2xl border border-white/[0.06] bg-ink-800/50 p-5 text-center backdrop-blur-sm">
                <p className="section-label mb-1">EUR / RUB</p>
                <p className="font-display text-3xl font-bold text-white">
                  {eur.ratePerUnit.toFixed(2)} ₽
                </p>
                <p className="mt-1 text-xs text-slate-500">курс ЦБ</p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  {item.icon}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <AdSlot />

        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-2">Инструменты</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Все калькуляторы
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Обновлено {formatCbrDate(cbrData.ratesDate)} · источник: cbr.ru
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <div
              key={tool.slug}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
            >
              <ToolCardFromTool tool={tool} />
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <p className="section-label mb-2">FAQ</p>
          <h2 className="mb-8 font-display text-2xl font-bold text-white md:text-3xl">
            Частые вопросы
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/[0.06] bg-ink-800/40 p-6 transition hover:border-white/10"
              >
                <h3 className="mb-2 font-semibold text-slate-100">{item.q}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AdSlot />
      </div>
    </>
  );
}
