"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/useTranslations";
import { subtleLink } from "@/lib/styles";

export default function BackHomeLink() {
  const t = useTranslations();

  return (
    <Link href="/" className={`motion-safe:animate-fade-in self-start ${subtleLink}`}>
      <span aria-hidden="true">← </span>
      {t.common.back}
    </Link>
  );
}
