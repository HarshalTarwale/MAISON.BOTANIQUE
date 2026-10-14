import { TESTIMONIALS } from "@/data/home";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <Eyebrow>In Their Words</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-light text-foreground lg:text-5xl">
            Cherished across Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              key={testimonial.author}
              as="figure"
              y={24}
              duration={0.7}
              delay={index * 0.1}
              className="flex flex-col justify-between border border-border bg-background p-10"
            >
              <div>
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-accent"
                >
                  “
                </span>
                <blockquote className="mt-2 font-display text-xl font-normal italic leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                  {testimonial.author}
                </p>
                <p className="mt-1 font-body text-xs font-light text-muted-foreground">
                  {testimonial.location}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
