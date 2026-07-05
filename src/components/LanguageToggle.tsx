"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";

export default function LanguageToggle() {
  const { toggleLocale } = useLanguage();
  const t = useTranslations();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.languageToggle.ariaLabel}
      className="rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-(--duration-micro) ease-(--ease-calm) hover:bg-primary/10 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:active:scale-100"
    >
      {t.languageToggle.switchTo}
    </button>
  );
}
