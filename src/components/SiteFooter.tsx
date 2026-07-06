"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/useTranslations";
import { subtleLink } from "@/lib/styles";

const FOOTER_LINKS = [
  { href: "/philosophy", key: "philosophy" } as const,
  { href: "/open-source", key: "openSource" } as const,
  { href: "/support", key: "support" } as const,
  { href: "/privacy", key: "privacy" } as const,
  { href: "/contact", key: "contact" } as const,
];

export default function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="flex flex-col items-center gap-3 px-6 py-6 sm:px-10">
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        {FOOTER_LINKS.map(({ href, key }) => (
          <Link key={href} href={href} className={subtleLink}>
            {t.nav[key]}
          </Link>
        ))}
      </nav>
      <p className="text-center text-xs text-foreground/60">{t.origin.crisisNote}</p>
      <p className="text-center text-xs text-foreground/40">
        🇩🇴 {t.origin.signature}
      </p>
    </footer>
  );
}
