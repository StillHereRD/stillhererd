"use client";

import { useEffect, useState } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";

type Phase = "in" | "hold" | "out";

const PHASE_DURATION_MS: Record<Phase, number> = {
  in: 3000,
  hold: 3000,
  out: 5000,
};

const NEXT_PHASE: Record<Phase, Phase> = {
  in: "hold",
  hold: "out",
  out: "in",
};

export default function BreathingExperience() {
  const t = useTranslations();
  const [phase, setPhase] = useState<Phase>("in");
  // The circle only needs to move on "in" (grow) and "out" (shrink) -
  // "hold" holds whatever size "in" left it at, so it derives from phase
  // rather than needing its own state.
  const grown = phase !== "out";

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase((current) => NEXT_PHASE[current]);
    }, PHASE_DURATION_MS[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  const label =
    phase === "in" ? t.breathing.in : phase === "hold" ? t.breathing.hold : t.breathing.out;
  const transitionMs = phase === "out" ? PHASE_DURATION_MS.out : PHASE_DURATION_MS.in;

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <BackHomeLink />

      <p className="motion-safe:animate-fade-in max-w-sm text-center text-foreground/70">
        {t.breathing.intro}
      </p>

      <div className="flex flex-col items-center gap-8 py-6">
        <div
          aria-hidden="true"
          style={{
            transitionDuration: `${transitionMs}ms`,
          }}
          className={`h-44 w-44 rounded-full border border-primary/40 bg-primary/20 transition-transform ease-(--ease-calm) motion-reduce:scale-100 motion-reduce:transition-none ${
            grown ? "scale-100" : "scale-75"
          }`}
        />
        <p aria-live="polite" className="font-serif text-2xl text-primary">
          {label}
        </p>
      </div>
    </div>
  );
}
