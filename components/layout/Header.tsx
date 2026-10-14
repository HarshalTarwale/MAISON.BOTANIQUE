"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_CTA, NAV_LINKS, SITE } from "@/data/site";

const SCROLL_THRESHOLD = 40;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label={`${SITE.name} main navigation`}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.18em] text-foreground"
        >
          MAISON<span className="text-accent">.</span>BOTANIQUE
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={NAV_CTA.href}
            className="bg-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {NAV_CTA.label}
          </a>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
