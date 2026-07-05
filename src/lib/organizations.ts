import type { Locale } from "@/lib/locale";
import type { SupportOrganization } from "@/content/schemas/organization";
import organizationsData from "@/content/organizations/organizations.json";

const organizations = organizationsData as SupportOrganization[];

export function getOrganizations(locale: Locale): SupportOrganization[] {
  return organizations
    .filter((org) => org.language === locale)
    .sort((a, b) => {
      if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
}
