import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  CONTACT,
  FOOTER_EXPLORE_LINKS,
  FOOTER_LEGAL_LINKS,
  SITE,
} from "@/data/site";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const columnTitle =
  "font-mono text-[10px] uppercase tracking-[0.25em] text-background/50";
const contactLink = "transition-colors hover:text-background";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-2xl tracking-[0.18em]">
              MAISON<span className="text-accent">.</span>BOTANIQUE
            </p>
            <p className="mt-5 max-w-xs font-body text-sm font-light leading-relaxed text-background/60">
              A couture floral atelier composing, arranging, and delivering
              across Dubai and the Emirates.
            </p>
          </div>

          <div>
            <p className={columnTitle}>Visit the Atelier</p>
            <ul className="mt-5 space-y-4 text-sm font-light text-background/80">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {CONTACT.address}
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={CONTACT.phone.href} className={contactLink}>
                  {CONTACT.phone.label}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href={CONTACT.email.href} className={contactLink}>
                  {CONTACT.email.label}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                {CONTACT.hours}
              </li>
            </ul>
          </div>

          <div>
            <p className={columnTitle}>Explore</p>
            <ul className="mt-5 space-y-3 text-sm font-light text-background/80">
              {FOOTER_EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={columnTitle}>Follow</p>
            <ul className="mt-5 space-y-3 text-sm font-light text-background/80">
              <li className="flex items-center gap-3">
                <InstagramIcon className="text-accent" />
                {CONTACT.instagram}
              </li>
              <li>Same-day delivery, 7 days</li>
              <li>
                Concierge:{" "}
                <a href={CONTACT.concierge.href} className={contactLink}>
                  {CONTACT.concierge.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
            © {SITE.copyrightYear} {SITE.name} · Dubai
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-background"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
