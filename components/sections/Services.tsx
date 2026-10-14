import { SERVICES } from "@/data/home";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-border bg-background py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <Eyebrow>Beyond the Bouquet</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground lg:text-5xl lg:leading-none">
            Services for life&apos;s finer moments
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              y={20}
              delay={(index % 2) * 0.1}
              className="group bg-background p-10 transition-colors hover:bg-secondary/40 lg:p-14"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-3xl font-light text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm font-body text-sm font-light leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href={service.href}
                className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-all group-hover:tracking-[0.3em]"
              >
                Enquire →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
