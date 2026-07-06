"use client";

import { useEffect, useRef, useState } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";
import { getRandomLetter, getLetterBaseId, getLetterByBaseId } from "@/lib/letters";
import { card, primaryButton } from "@/lib/styles";

export default function DailyLetterExperience() {
  const { locale } = useLanguage();
  const t = useTranslations();
  // Store which story was picked, not the picked Letter object itself -
  // that way, switching language afterward re-derives the same story in
  // the new language on the next render instead of leaving stale text
  // frozen from whichever language was active at click time.
  const [baseId, setBaseId] = useState<string | null>(null);
  const letter = baseId ? getLetterByBaseId(baseId, locale) : null;
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The letter is picked at the moment of opening, not during render -
  // this is a real user click, so there's no server/client hydration
  // mismatch to worry about, and it keeps the reveal "never spoiled up
  // front": nothing is chosen until you deliberately ask for it.
  function openLetter() {
    const picked = getRandomLetter(locale);
    setBaseId(picked ? getLetterBaseId(picked) : null);
  }

  // Move focus to the letter's heading once it opens, so screen-reader
  // users land on the new content instead of staying on a button that
  // no longer exists.
  useEffect(() => {
    if (letter) {
      headingRef.current?.focus();
    }
  }, [letter]);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      {!letter ? (
        <div
          className={`motion-safe:animate-fade-in flex w-full flex-col items-center gap-6 p-10 text-center ${card}`}
        >
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {t.dailyLetter.label}
          </p>
          <button type="button" onClick={openLetter} className={primaryButton}>
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
          <p className="text-lg leading-loose text-foreground/80">{letter.body}</p>
        </div>
      )}
    </div>
  );
}
