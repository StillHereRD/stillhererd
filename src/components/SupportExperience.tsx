"use client";

import BackHomeLink from "@/components/BackHomeLink";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";
import { getOrganizations } from "@/lib/organizations";
import { card } from "@/lib/styles";

export default function SupportExperience() {
  const { locale } = useLanguage();
  const t = useTranslations();
  const organizations = getOrganizations(locale);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <h1 className="motion-safe:animate-fade-in text-center font-serif text-2xl font-medium text-primary">
        {t.support.heading}
      </h1>

      <p className="motion-safe:animate-fade-in text-center leading-relaxed text-foreground/80">
        {t.support.intro}
      </p>

      <p className="motion-safe:animate-fade-in max-w-sm text-center text-sm text-foreground/70">
        {t.support.emergencyNote}
      </p>

      {organizations.length > 0 ? (
        <ul className={`flex w-full flex-col divide-y divide-muted overflow-hidden ${card}`}>
          {organizations.map((org) => (
            <li key={org.id} className="flex flex-col gap-1 px-5 py-4 text-left">
              <p className="font-medium text-foreground">{org.name}</p>
              <p className="text-sm text-foreground/70">{org.description}</p>
              {org.url && (
                <a
                  href={org.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary/70 hover:underline"
                >
                  {org.url}
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="motion-safe:animate-fade-in max-w-sm text-center text-sm text-foreground/50">
          {t.support.organizationsNote}
        </p>
      )}
    </div>
  );
}
