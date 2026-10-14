import { OCCASIONS } from "@/data/home";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Occasions() {
  return (
    <section
      id="occasions"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Eyebrow>Shop by Occasion</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-light leading-tight text-foreground lg:text-5xl lg:leading-none">
            A bloom for every chapter
          </h2>
        </div>
        <p className="max-w-sm font-body text-sm font-light leading-relaxed text-muted-foreground">
          Each arrangement is composed to its moment — chosen, cut, and styled
          the morning it leaves the atelier.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
        {OCCASIONS.map((occasion, index) => (
          <Reveal
            key={occasion.name}
            as="a"
            href={occasion.href}
            y={20}
            delay={(index % 4) * 0.08}
            className="group flex flex-col justify-between bg-background p-8 transition-colors hover:bg-secondary/50"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mt-16">
              <h3 className="font-display text-2xl font-light text-foreground transition-transform duration-500 group-hover:translate-x-1">
                {occasion.name}
              </h3>
              <p className="mt-2 font-body text-sm font-light italic text-muted-foreground">
                {occasion.tagline}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
