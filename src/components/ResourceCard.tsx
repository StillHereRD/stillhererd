import type { Resource } from "@/content/schemas/resource";
import { card } from "@/lib/styles";

interface ResourceCardProps {
  resource: Resource;
}

// A place to paste a creator's Instagram: `resource.instagram` is a bare
// handle (no "@", no URL) in the content JSON - shown here as "@handle"
// next to their name whenever it's present.
export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-col gap-1 p-5 text-left transition-all duration-(--duration-base) ease-(--ease-calm) hover:-translate-y-0.5 hover:bg-muted/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${card}`}
    >
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
    </a>
  );
}
