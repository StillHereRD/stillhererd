// Shared class strings so every card, button, and focus state in the
// product feels like the same hand designed it. Add to these rather than
// inventing a one-off variant in a component.

export const card =
  "rounded-2xl border border-muted bg-muted/40 shadow-sm transition-all duration-(--duration-base) ease-(--ease-calm) motion-reduce:transition-none";

export const interactiveCard =
  `${card} hover:-translate-y-0.5 hover:bg-muted/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:hover:translate-y-0`;

export const primaryButton =
  "rounded-full bg-primary px-6 py-3 text-base font-medium text-background transition-all duration-(--duration-micro) ease-(--ease-calm) hover:bg-primary/90 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:active:scale-100";

export const subtleLink =
  "text-sm text-foreground/60 transition-colors duration-(--duration-micro) hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none";
