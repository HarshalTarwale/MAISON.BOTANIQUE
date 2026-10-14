"use client";

import { addToCuration } from "@/lib/cart";

export function AddToCurationButton({ productId }: { productId: string }) {
  return (
    <button
      type="button"
      onClick={() => addToCuration(productId)}
      className="mt-4 w-full border border-border py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
    >
      Add to Curation
    </button>
  );
}
