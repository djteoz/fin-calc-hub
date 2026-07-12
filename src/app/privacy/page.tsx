import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: `Политика конфиденциальности сайта ${brand.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 font-display text-3xl font-bold text-white">
        Политика конфиденциальности
      </h1>
      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          Сайт {brand.name} не собирает персональные данные при использовании
          калькуляторов. Все расчёты выполняются локально в вашем браузере.
        </p>
        <p>
          При подключении рекламных сервисов (Google AdSense) могут
          использоваться cookie для показа релевантной рекламы. Вы можете
          отключить cookie в настройках браузера.
        </p>
        <p>
          По вопросам обращайтесь на email, указанный в футере сайта после
          публикации.
        </p>
      </div>
    </div>
  );
}
