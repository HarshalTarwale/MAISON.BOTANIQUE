/** Global site content: brand, navigation and contact details. */

export interface NavLink {
  label: string;
  href: string;
}

export const SITE = {
  name: "Maison Botanique",
  title: "Maison Botanique · Couture Floral Atelier in Dubai",
  description:
    "A luxury floral atelier in Dubai composing hand-arranged bouquets, preserved roses, bridal couture and bespoke event florals with white-glove concierge delivery across the Emirates.",
  copyrightYear: 2026,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "Occasions", href: "#occasions" },
  { label: "Atelier", href: "#atelier" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/** Highlighted call-to-action button at the end of the desktop nav. */
export const NAV_CTA: NavLink = { label: "Order", href: "#collections" };

export const FOOTER_EXPLORE_LINKS: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "Occasions", href: "#occasions" },
  { label: "The Atelier", href: "#atelier" },
  { label: "Services", href: "#services" },
];

/** Legal pages do not exist in the design yet — point these at real routes when they do. */
export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Delivery", href: "#" },
];

export const CONTACT = {
  address: "Level 2, Marina Plaza, Dubai Marina",
  phone: { label: "+971 4 000 0000", href: "tel:+97140000000" },
  email: {
    label: "hello@maisonbotanique.ae",
    href: "mailto:hello@maisonbotanique.ae",
  },
  hours: "Daily, 9am – 9pm",
  instagram: "@maisonbotanique",
  concierge: { label: "+971 50 000 0000", href: "tel:+971500000000" },
} as const;
