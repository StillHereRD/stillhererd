import type { Locale } from "@/lib/locale";
import type { Reason } from "@/content/schemas/reason";
import reasonsData from "@/content/reasons/reasons.json";

const reasons = reasonsData as Reason[];

/**
 * Unlike the Daily Letter, this picks fresh at random - meant to be
 * called once per page load, not cached per day. Call this from a
 * useEffect (client-only), never directly in render: Math.random()
 * during the initial render would produce a different value on the
 * server than on the client and trigger a hydration mismatch.
 */
export function getRandomReason(locale: Locale): Reason | null {
  const inLanguage = reasons.filter((reason) => reason.language === locale);
  if (inLanguage.length === 0) return null;
  return inLanguage[Math.floor(Math.random() * inLanguage.length)];
}
