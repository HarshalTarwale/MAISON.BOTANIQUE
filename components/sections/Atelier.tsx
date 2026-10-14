import Image from "next/image";
import { ATELIER_PILLARS } from "@/data/home";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Atelier() {
  return (
    <section
      id="atelier"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* pb-1.5 reproduces the 6px baseline gap under the image in the design. */}
        <Reveal x={-30} duration={0.9} margin={80} className="relative pb-1.5">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/atelier.jpg"
              alt="Inside the Maison Botanique atelier above Dubai Marina"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden bg-background px-8 py-6 shadow-sm ring-1 ring-border sm:block">
            <p className="font-display text-4xl font-light text-accent">10</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Years of
              <br />
              floristry
            </p>
          </div>
        </Reveal>

        <Reveal x={30} duration={0.9} delay={0.1} margin={80}>
          <Eyebrow>The Atelier</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground lg:text-5xl lg:leading-none">
            A house of flowers,
            <span className="block font-normal italic">not a shop of them</span>
          </h2>
          <div className="mt-7 space-y-5 font-body text-base font-light leading-relaxed text-muted-foreground">
            <p>
              Tucked above the marina, our studio is part greenhouse, part
              gallery. Blooms arrive each dawn from growers we have known for a
              decade — chosen for stem, petal, and the way they hold a room.
            </p>
            <p>
              Every arrangement is composed by hand, never assembled by
              template. We believe a bouquet should feel less like a product and
              more like a letter — something written for one person, on one day.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {ATELIER_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <p className="font-display text-xl font-light text-foreground">
                  {pillar.title}
                </p>
                <p className="mt-1 font-body text-xs font-light text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
