import Link from "next/link";
import { brand } from "@/lib/brand";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const isLarge = size === "large";

  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 font-display font-bold text-white shadow-lg shadow-brand-500/30 transition group-hover:shadow-brand-500/50 ${
          isLarge ? "h-12 w-12 text-lg" : "h-9 w-9 text-sm"
        }`}
      >
        {brand.shortName}
        <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition group-hover:opacity-100" />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display font-bold tracking-tight text-white transition group-hover:text-brand-200 ${
            isLarge ? "text-2xl" : "text-lg"
          }`}
        >
          {brand.name}
        </span>
        {!isLarge && (
          <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:block">
            {brand.tagline.split("·")[0]?.trim() ?? brand.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
