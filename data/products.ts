/**
 * Product catalogue for "The Curated Vault".
 *
 * Static for now. The shape mirrors what a Shopify product exposes
 * (handle, title, price, featured image) so this module can be replaced by a
 * Storefront API query without touching the components.
 */

export interface Product {
  /** Unique id — becomes the Shopify product/variant id. */
  id: string;
  name: string;
  /** Price in AED. */
  price: number;
  image: string;
  imageAlt: string;
  scentNotes: string;
  emotions: string;
}

export const CURRENCY = "AED";

export const PRODUCTS: Product[] = [
  {
    id: "50-shades-of-pink",
    name: "50 Shades of Pink",
    price: 635,
    image: "/images/50-shades-of-pink.jpg",
    imageAlt: "A bouquet of garden roses, peonies and eustoma in layered shades of pink",
    scentNotes: "Garden roses, peonies, eustoma",
    emotions: "Quietude · Tenderness",
  },
  {
    id: "scorching-hot",
    name: "Scorching Hot",
    price: 850,
    image: "/images/scorching-hot.jpg",
    imageAlt: "A bouquet of crimson roses with eucalyptus",
    scentNotes: "Crimson roses, eucalyptus",
    emotions: "Passion · Defiance",
  },
  {
    id: "cotton-candy-clouds",
    name: "Cotton Candy Clouds",
    price: 1075,
    image: "/images/cotton-candy-clouds.jpg",
    imageAlt: "A soft arrangement of phalaenopsis orchids and lisianthus",
    scentNotes: "Phalaenopsis orchids, lisianthus",
    emotions: "Serenity · Wonder",
  },
  {
    id: "to-you-with-love",
    name: "To You, With Love",
    price: 695,
    image: "/images/to-you-with-love.jpg",
    imageAlt: "A bouquet of peach roses, eustoma and ranunculus",
    scentNotes: "Peach roses, eustoma, ranunculus",
    emotions: "Devotion · Warmth",
  },
  {
    id: "forever-yours",
    name: "Forever Yours",
    price: 1250,
    image: "/images/forever-yours.jpg",
    imageAlt: "Preserved roses displayed in an acrylic vitrine",
    scentNotes: "Preserved roses, acrylic vitrine",
    emotions: "Eternity · Memory",
  },
  {
    id: "garden-of-eden",
    name: "Garden of Eden",
    price: 790,
    image: "/images/garden-of-eden.jpg",
    imageAlt: "A lush arrangement of hydrangea, eustoma and seasonal blooms",
    scentNotes: "Hydrangea, eustoma, seasonal blooms",
    emotions: "Vitality · Abundance",
  },
];

/** "1,075" — fixed locale so server and client render the same string. */
export function formatPrice(price: number): string {
  return price.toLocaleString("en-US");
}
