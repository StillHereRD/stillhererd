// Remounts on every top-level navigation (see template.js file convention),
// giving each new room the same soft entrance instead of a hard cut -
// "navigation should disappear" into one continuous experience.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="motion-safe:animate-fade-in-slow flex flex-1 flex-col">
      {children}
    </div>
  );
}
