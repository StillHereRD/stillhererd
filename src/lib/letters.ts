import type { Locale } from "@/lib/locale";
import type { Letter } from "@/content/schemas/letter";
import { pickDailyItem } from "@/lib/dailyPick";
import lettersData from "@/content/letters/letters.json";

const letters = lettersData as Letter[];

export function getDailyLetter(locale: Locale, date: Date = new Date()): Letter | null {
  const published = letters.filter((letter) => letter.published && letter.language === locale);
  return pickDailyItem(published, "daily-letter", date);
}
