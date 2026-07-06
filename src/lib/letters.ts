import type { Locale } from "@/lib/locale";
import type { Letter } from "@/content/schemas/letter";
import lettersData from "@/content/letters/letters.json";

const letters = lettersData as Letter[];

/**
 * Picks fresh at random on each call, like getRandomReason - meant to
 * be called once per page load, not cached per day. Call this from a
 * useEffect (client-only), never directly in render: Math.random()
 * during the initial render would produce a different value on the
 * server than on the client and trigger a hydration mismatch.
 */
export function getRandomLetter(locale: Locale): Letter | null {
  const published = letters.filter((letter) => letter.published && letter.language === locale);
  if (published.length === 0) return null;
  return published[Math.floor(Math.random() * published.length)];
}
