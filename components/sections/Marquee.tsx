import { MARQUEE_ITEMS } from "@/data/home";

/** The track holds three identical sets; see the `marquee` keyframes in globals.css. */
const REPEATS = 3;

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-border bg-secondary/40 py-4"
    >
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {Array.from({ length: REPEATS }).flatMap((_, set) =>
          MARQUEE_ITEMS.map((item) => (
            <span
              key={`${set}-${item}`}
              className="flex items-center gap-12 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
            >
              {item}
              <span className="text-accent">✦</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}
