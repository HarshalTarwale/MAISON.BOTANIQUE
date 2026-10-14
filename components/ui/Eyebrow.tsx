import type { ReactNode } from "react";

/** Small uppercase mono label that sits above each section heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
      {children}
    </p>
  );
}
