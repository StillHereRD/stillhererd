"use client";

import { useEffect, useRef, useState } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";
import { getDailyLetter } from "@/lib/letters";
import { card, primaryButton } from "@/lib/styles";

export default function DailyLetterExperience() {
  const { locale } = useLanguage();
  const t = useTranslations();
  const letter = getDailyLetter(locale);
  const [isOpen, setIsOpen] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the letter's heading once it opens, so screen-reader
  // users land on the new content instead of staying on a button that
  // no longer exists.
  useEffect(() => {
    if (isOpen) {
      headingRef.current?.focus();
    }
  }, [isOpen]);

  if (!letter) return null;

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      {!isOpen ? (
        <div
          className={`motion-safe:animate-fade-in flex w-full flex-col items-center gap-6 p-10 text-center ${card}`}
        >
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {t.dailyLetter.label}
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={primaryButton}
          >
            {t.dailyLetterPage.openButton}
          </button>
        </div>
      ) : (
        // A slower "unfold" (scale + settle) instead of a flat fade - this
        // is the one moment in the product asked to feel like paper, so it
        // gets its own animation rather than reusing the standard fade.
        <div
          style={{ transformOrigin: "top" }}
          className={`motion-safe:animate-unfold w-full p-10 text-left ${card}`}
        >
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            {t.dailyLetter.label}
          </p>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="mb-4 font-serif text-2xl leading-snug font-medium text-primary sm:text-3xl"
          >
            {letter.title}
          </h1>
          <p className="text-lg leading-loose text-foreground/80">
            {letter.body}
          </p>
        </div>
      )}
    </div>
  );
}
