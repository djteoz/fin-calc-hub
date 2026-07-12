import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand, siteUrl } from "@/lib/brand";

const display = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — финансовые калькуляторы онлайн`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Бесплатные онлайн-калькуляторы: кредит, ипотека, валюта, НДС, маржа. Данные ЦБ РФ. Без регистрации.",
  keywords: [
    "калькулятор кредита",
    "калькулятор ипотеки",
    "конвертер валют",
    "курс цб",
    "калькулятор НДС",
    "финансовые калькуляторы",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: brand.name,
    title: `${brand.name} — финансовые калькуляторы`,
    description: "Рассчитайте кредит, валюту, НДС и инвестиции с данными ЦБ РФ.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
