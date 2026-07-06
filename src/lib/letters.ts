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

/**
 * The language-independent identity of a letter (ids are always
 * "<story>-en" / "<story>-es"). Lets a caller remember *which* letter
 * was picked without pinning it to the language active at pick time,
 * so switching language afterward can look up the same story instead
 * of showing stale text.
 */
export function getLetterBaseId(letter: Letter): string {
  return letter.id.slice(0, -3);
}

export function getLetterByBaseId(baseId: string, locale: Locale): Letter | null {
  return letters.find((letter) => letter.published && letter.id === `${baseId}-${locale}`) ?? null;
}
