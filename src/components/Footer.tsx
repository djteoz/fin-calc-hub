import Link from "next/link";
import { Logo } from "@/components/Logo";
import { brand } from "@/lib/brand";
import { tools } from "@/lib/tools";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              {brand.tagline}. Бесплатно, без регистрации, расчёты в браузере.
            </p>
          </div>

          <div>
            <p className="section-label mb-4">Калькуляторы</p>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-slate-400 transition hover:text-brand-300"
                  >
                    {tool.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Информация</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="transition hover:text-brand-300">
                  Политика конфиденциальности
                </Link>
              </li>
              <li className="text-slate-600">
                Данные ЦБ РФ · обновление ежедневно
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-8 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}</p>
          <p>Расчёты носят информационный характер</p>
        </div>
      </div>
    </footer>
  );
}
