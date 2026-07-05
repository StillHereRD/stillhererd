"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/content/translations";

export function useTranslations() {
  const { locale } = useLanguage();
  return translations[locale];
}
