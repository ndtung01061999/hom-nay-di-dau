"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "🎲 Quay ngẫu nhiên" },
  { href: "/lich-trinh", label: "🗓️ Lên lịch trình" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-stone-900">
          Hôm nay <span className="text-orange-500">đi đâu?</span>
        </Link>
        <nav className="flex gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                pathname === l.href ? "bg-orange-100 text-orange-700" : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
