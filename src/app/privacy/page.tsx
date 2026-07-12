import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта ФинКальк.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Политика конфиденциальности</h1>
      <div className="prose prose-slate max-w-none">
        <p>
          Сайт ФинКальк не собирает персональные данные при использовании
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
