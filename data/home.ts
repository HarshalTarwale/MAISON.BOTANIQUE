/** Copy for the home page sections (everything except products — see products.ts). */

export const MARQUEE_ITEMS = [
  "Same-Day Delivery Across the Emirates",
  "Hand-Arranged in Dubai",
  "Preserved & Forever Roses",
  "Bespoke Bridal & Events",
  "White-Glove Concierge Service",
] as const;

export interface Occasion {
  name: string;
  tagline: string;
  /** Where the card links to — point at a Shopify collection URL later. */
  href: string;
}

export const OCCASIONS: Occasion[] = [
  { name: "Romance", tagline: "For the heart that knows", href: "#collections" },
  { name: "Birthday", tagline: "A year, beautifully marked", href: "#collections" },
  { name: "Anniversary", tagline: "Of moments kept", href: "#collections" },
  { name: "Congratulations", tagline: "To triumphs, quiet and loud", href: "#collections" },
  { name: "Sympathy", tagline: "In grace and remembrance", href: "#collections" },
  { name: "New Baby", tagline: "Welcome, little one", href: "#collections" },
  { name: "Weddings", tagline: "The day, perfected", href: "#collections" },
  { name: "Thank You", tagline: "Gratitude, in bloom", href: "#collections" },
];

export const ATELIER_PILLARS = [
  { title: "Sourced", description: "From trusted growers" },
  { title: "Composed", description: "By hand, each morning" },
  { title: "Delivered", description: "Within hours, chilled" },
] as const;

export interface Service {
  title: string;
  description: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    title: "Bespoke Events",
    description:
      "From intimate gatherings to grand celebrations, our atelier designs florals that define the room.",
    href: "#contact",
  },
  {
    title: "Bridal Couture",
    description:
      "Wedding bouquets and venue styling, hand-crafted to the story of your day.",
    href: "#contact",
  },
  {
    title: "Seasonal Subscriptions",
    description:
      "A standing arrangement delivered weekly, refreshed with the season's finest blooms.",
    href: "#contact",
  },
  {
    title: "Concierge Delivery",
    description:
      "White-glove, two-hour windows across Dubai and the Emirates, seven days a week.",
    href: "#contact",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The most beautiful flowers in Dubai. Flawless quality, every single time. Thank you.",
    author: "Reza A.",
    location: "Downtown Dubai",
  },
  {
    quote:
      "For my unforgettable events, this is my one and only atelier. Perfection, arranged by expert hands.",
    author: "Ahlam M.",
    location: "Palm Jumeirah",
  },
  {
    quote:
      "They made my day. An exquisite bouquet and service that feels genuinely personal.",
    author: "Faten K.",
    location: "Jumeirah",
  },
];
