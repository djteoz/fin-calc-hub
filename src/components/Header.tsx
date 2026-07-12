"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { tools } from "@/lib/tools";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {tool.shortTitle}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/[0.06] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {tool.icon} {tool.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
