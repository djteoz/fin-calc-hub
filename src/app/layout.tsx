import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ФинКальк — бесплатные финансовые калькуляторы онлайн",
    template: "%s | ФинКальк",
  },
  description:
    "Бесплатные онлайн-калькуляторы: кредит, ипотека, сложный процент, НДС, маржа. Быстрый расчёт без регистрации.",
  keywords: [
    "калькулятор кредита",
    "калькулятор ипотеки",
    "сложный процент",
    "калькулятор НДС",
    "маржа прибыли",
    "финансовые калькуляторы",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ФинКальк",
    title: "ФинКальк — бесплатные финансовые калькуляторы",
    description:
      "Рассчитайте кредит, ипотеку, НДС и доходность инвестиций за секунды.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
