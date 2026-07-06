"use client";

import { useRef } from "react";
import type { Resource } from "@/content/schemas/resource";
import { card, primaryButton } from "@/lib/styles";
import { useTranslations } from "@/lib/useTranslations";

interface ResourceCardProps {
  resource: Resource;
}

// A place to paste a creator's Instagram: `resource.instagram` is a bare
// handle (no "@", no URL) in the content JSON - shown here as "@handle"
// next to their name whenever it's present.
export default function ResourceCard({ resource }: ResourceCardProps) {
  const t = useTranslations();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const cardBody = (
    <>
      <p className="font-serif text-lg font-medium text-primary">{resource.title}</p>
      {resource.creator && (
        <p className="text-sm text-foreground/70">
          {resource.creator}
          {resource.instagram && (
            <span className="text-foreground/50"> · @{resource.instagram}</span>
          )}
        </p>
      )}
      <p className="text-sm leading-relaxed text-foreground/70">
        {resource.description}
      </p>
      {resource.durationMinutes && (
        <p className="text-xs text-foreground/50">{resource.durationMinutes} min</p>
      )}
    </>
  );

  const cardClassName = `flex w-full flex-col gap-1 p-5 text-left transition-all duration-(--duration-base) ease-(--ease-calm) hover:-translate-y-0.5 hover:bg-muted/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${card}`;

  if (!resource.confirmExternal) {
    return (
      <a href={resource.url} target="_blank" rel="noreferrer" className={cardClassName}>
        {cardBody}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={cardClassName}
      >
        {cardBody}
      </button>
      <dialog
        ref={dialogRef}
        className={`w-full max-w-sm p-6 text-foreground backdrop:bg-foreground/20 ${card}`}
      >
        <p className="text-center">
          {t.resourceCard.externalConfirm.replace(
            "{platform}",
            resource.platform ?? resource.title,
          )}
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="rounded-full px-6 py-3 text-base font-medium text-foreground/70 transition-colors duration-(--duration-micro) hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {t.resourceCard.cancel}
          </button>
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => dialogRef.current?.close()}
            className={primaryButton}
          >
            {t.resourceCard.continueLabel}
          </a>
        </div>
      </dialog>
    </>
  );
}
