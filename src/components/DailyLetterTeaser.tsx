"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";
import { getRandomLetter } from "@/lib/letters";

import { interactiveCard } from "@/lib/styles";

interface DailyLetterTeaserProps {
  /** When this card should reveal, relative to page load - the homepage
   * places it last, after the need menu has finished appearing. */
  delayMs?: number;
}

export default function DailyLetterTeaser({ delayMs = 0 }: DailyLetterTeaserProps) {
  const { locale } = useLanguage();
  const t = useTranslations();
  // Same hydration-boundary idiom as ReasonForTomorrow - the server and
  // the client's first render both need to agree on "nothing yet," so
  // the random pick only happens post-mount, in the browser.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const letter = mounted ? getRandomLetter(locale) : null;

  if (!letter) return null;

  return (
    <Link
      href="/daily-letter"
      aria-labelledby="daily-letter-heading"
      style={{ animationDelay: `${delayMs}ms` }}
      className={`motion-safe:animate-fade-in w-full max-w-md p-8 text-left ${interactiveCard}`}
    >
      <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
        {t.dailyLetter.label}
      </p>
      <h2 id="daily-letter-heading" className="mb-3 font-serif text-xl font-medium text-primary">
        {letter.title}
      </h2>
      <p className="text-sm font-medium text-primary/70">
        {t.dailyLetter.cta}
        <span aria-hidden="true"> →</span>
      </p>
    </Link>
  );
}
