import Image from "next/image";
import { revealStyle } from "@/lib/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="A couture floral arrangement from the Maison Botanique atelier"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b/srgb from-foreground/45 via-foreground/20 to-foreground/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="reveal-animate font-mono text-[11px] uppercase tracking-[0.4em] text-background/80"
          style={revealStyle({ y: 16, duration: 1, delay: 0.2 })}
        >
          Dubai · Floral Atelier · Est. 2014
        </p>
        <h1
          className="reveal-animate mt-6 max-w-4xl font-display text-5xl font-light leading-[1.05] text-background sm:text-6xl sm:leading-none lg:text-7xl"
          style={revealStyle({ y: 24, duration: 1.2, delay: 0.4 })}
        >
          Where her story
          {/* Cormorant Garamond italic is only loaded at 400 in the design, so italics use font-normal. */}
          <span className="block font-normal italic text-background/90">
            blossoms
          </span>
        </h1>
        <p
          className="reveal-animate mt-7 max-w-xl font-body text-base font-light leading-relaxed text-background/80"
          style={revealStyle({ y: 20, duration: 1, delay: 0.7 })}
        >
          Couture florals, hand-arranged in our Dubai atelier and delivered with
          the discretion of a private concierge.
        </p>
        <div
          className="reveal-animate mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={revealStyle({ y: 20, duration: 1, delay: 0.9 })}
        >
          <a
            href="#collections"
            className="border border-background/40 bg-background/5 px-9 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
          >
            Explore the Collection
          </a>
          <a
            href="#services"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/70 underline-offset-8 transition-colors hover:text-background hover:underline"
          >
            Bespoke Events →
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-px items-start justify-center bg-background/40">
          <div className="animate-scroll-cue h-4 w-px bg-background" />
        </div>
      </div>
    </section>
  );
}
