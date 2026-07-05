import type { Locale } from "@/lib/locale";

/**
 * A single "Reason For Tomorrow" - deliberately small. One short phrase,
 * not a paragraph. `illustration` is optional and unused today, reserved
 * for a future visual per reason (an emoji or an image path).
 */
export interface Reason {
  id: string;
  text: string;
  category?: string;
  emotion?: string;
  language: Locale;
  featured?: boolean;
  illustration?: string;
}
