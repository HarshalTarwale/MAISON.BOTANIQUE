import Image from "next/image";
import { CURRENCY, formatPrice, type Product } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { AddToCurationButton } from "./AddToCurationButton";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <Reveal
      as="article"
      y={30}
      duration={0.7}
      delay={(index % 3) * 0.1}
      margin={60}
      className="group"
    >
      {/* pb-1.5 reproduces the 6px baseline gap under the image in the design. */}
      <div className="relative overflow-hidden pb-1.5">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t/srgb from-foreground/70 via-foreground/0 to-foreground/0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/70">
            Scent Notes
          </p>
          <p className="mt-1 font-body text-sm font-light text-background">
            {product.scentNotes}
          </p>
          <p className="mt-3 font-display text-lg font-normal italic text-background/90">
            {product.emotions}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <h3 className="font-display text-2xl font-light text-foreground">
          {product.name}
        </h3>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          {CURRENCY} {formatPrice(product.price)}
        </p>
      </div>

      <AddToCurationButton productId={product.id} />
    </Reveal>
  );
}
