import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как монетизировать сайт",
  description:
    "Пошаговый план заработка на финансовых калькуляторах: AdSense, SEO, партнёрки.",
};

const steps = [
  {
    title: "1. Задеплойте сайт бесплатно",
    text: "Используйте Vercel или Cloudflare Pages — хостинг бесплатный для старта.",
  },
  {
    title: "2. Подключите Google AdSense",
    text: "Подайте заявку после публикации 10–15 страниц с уникальным контентом. Финансовая ниша даёт высокий CPC.",
  },
  {
    title: "3. Настройте SEO",
    text: "Добавьте сайт в Яндекс.Вебмастер и Google Search Console. Пишите статьи под запросы «калькулятор кредита онлайн».",
  },
  {
    title: "4. Партнёрские программы",
    text: "Добавьте ссылки на банки, брокеров и финтех-сервисы — комиссия 500–5000 ₽ за заявку.",
  },
  {
    title: "5. Масштабируйте",
    text: "Добавляйте новые калькуляторы и статьи. Через 3–6 месяцев при 1000+ посетителей/день доход может быть 15 000–50 000 ₽/мес.",
  },
];

export default function MonetizationPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold">Как заработать на этом сайте</h1>
      <p className="mb-8 text-lg text-slate-600">
        Реалистичный план пассивного дохода без вложений — только ваше время на
        запуск и продвижение.
      </p>

      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.title} className="card">
            <h2 className="mb-2 text-lg font-semibold text-brand-700">
              {step.title}
            </h2>
            <p className="text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="card mt-8 border-amber-200 bg-amber-50">
        <h2 className="mb-2 font-semibold text-amber-900">Важно</h2>
        <p className="text-sm text-amber-800">
          Пассивный доход не появляется за неделю. Первые 2–3 месяца нужно
          инвестировать время в контент и SEO. Зато потом сайт работает сам.
        </p>
      </div>
    </div>
  );
}
