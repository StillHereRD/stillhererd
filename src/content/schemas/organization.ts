import type { Locale } from "@/lib/locale";

/**
 * A trusted organization or emergency resource, for the Support page.
 * This list ships empty - see src/content/organizations/organizations.json
 * for why, and add entries only once they're verified and current. A
 * wrong phone number here is worse than no phone number at all.
 */
export interface SupportOrganization {
  id: string;
  name: string;
  description: string;
  url?: string;
  phone?: string;
  region?: string;
  language: Locale;
  featured?: boolean;
}
