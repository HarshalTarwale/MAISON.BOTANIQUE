import { Eyebrow } from "@/components/ui/Eyebrow";
import { NewsletterForm } from "./NewsletterForm";

export function Almanac() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-32">
      <Eyebrow>The Almanac</Eyebrow>
      <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground lg:text-5xl lg:leading-none">
        What&apos;s in bloom,
        <span className="block font-normal italic">delivered to you</span>
      </h2>
      <p className="mx-auto mt-6 max-w-md font-body text-sm font-light leading-relaxed text-muted-foreground">
        A quiet letter each season — what we are arranging, what is flowering,
        and the rarest stems passing through the atelier.
      </p>
      <NewsletterForm />
    </section>
  );
}
