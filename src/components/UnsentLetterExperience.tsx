"use client";

import { useEffect, useRef, useState } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { card, primaryButton } from "@/lib/styles";

export default function UnsentLetterExperience() {
  const t = useTranslations();
  // Deliberately component state only - never localStorage, never sent
  // anywhere. The whole point of an unsent letter is that it's safe to
  // be fully honest, so nothing here should linger after the visit.
  const [text, setText] = useState("");
  const [justReleased, setJustReleased] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const releaseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (releaseTimeout.current) clearTimeout(releaseTimeout.current);
    };
  }, []);

  function release() {
    setText("");
    setJustReleased(true);
    textareaRef.current?.focus();

    if (releaseTimeout.current) clearTimeout(releaseTimeout.current);
    releaseTimeout.current = setTimeout(() => setJustReleased(false), 4000);
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <BackHomeLink />

      <p className="motion-safe:animate-fade-in text-center text-foreground/70">
        {t.unsentLetter.prompt}
      </p>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={t.unsentLetter.placeholder}
        aria-label={t.unsentLetter.prompt}
        rows={10}
        className={`w-full resize-none p-5 leading-relaxed text-foreground placeholder:text-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${card}`}
      />

      <button
        type="button"
        onClick={release}
        disabled={text.trim().length === 0}
        className={primaryButton}
      >
        {t.unsentLetter.release}
      </button>

      <p
        aria-live="polite"
        className={
          justReleased
            ? "motion-safe:animate-fade-in text-center font-serif text-lg text-primary"
            : "sr-only"
        }
      >
        {justReleased ? t.unsentLetter.released : ""}
      </p>
    </div>
  );
}
