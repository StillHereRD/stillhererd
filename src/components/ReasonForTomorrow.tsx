"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";
import { getRandomReason } from "@/lib/reasons";

interface ReasonForTomorrowProps {
  /** When this should reveal, relative to page load - placed after the
   * Daily Letter teaser so it reads as its own, separate thought rather
   * than part of the letter. */
  delayMs?: number;
}

export default function ReasonForTomorrow({ delayMs = 0 }: ReasonForTomorrowProps) {
  const { locale } = useLanguage();
  const t = useTranslations();
  // The server-rendered HTML and the client's first render both need to
  // agree on "nothing yet" - only once mounted (post-hydration) do we
  // roll the random pick, so the server never has to guess what the
  // client's Math.random() would produce.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This is the standard hydration-boundary idiom for client-only
    // content: the value set below is a constant, not derived state,
    // so there's nothing to compute during render instead.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const reason = mounted ? getRandomReason(locale) : null;

  if (!reason) return null;

  return (
    <div
      style={{ animationDelay: `${delayMs}ms` }}
      className="motion-safe:animate-fade-in flex flex-col items-center gap-2 text-center"
    >
      <p className="text-xs tracking-wide text-foreground/50 uppercase">
        {t.reasonForTomorrow.label}
      </p>
      <p className="font-serif text-lg text-primary italic">{reason.text}</p>
    </div>
  );
}
