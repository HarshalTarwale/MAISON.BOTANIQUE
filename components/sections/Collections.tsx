import { PRODUCTS } from "@/data/products";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/products/ProductCard";

export function Collections() {
  return (
    <section id="collections" className="bg-secondary/30 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <Eyebrow>The Curated Vault</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-foreground lg:text-5xl lg:leading-none">
            Most coveted arrangements
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-sm font-light leading-relaxed text-muted-foreground">
            Each piece is framed as art — hover to reveal its scent notes and
            the emotion it was composed to hold.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
