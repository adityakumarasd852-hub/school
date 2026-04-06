"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import GlowLinkButton from "./GlowLinkButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Admissions", href: "/admissions" }
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-forest/95 shadow-soft backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-forest/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-10">
        <Link href="/" className="interactive flex items-center gap-3 text-white">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/10 text-sm font-semibold">
            GS
          </div>
          <span className="hidden text-sm font-semibold tracking-wide md:block">Greenfield International School</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`interactive group relative pb-1 text-sm font-medium transition ${
                pathname === item.href ? "text-gold" : "text-white/95 hover:text-gold"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-white md:flex">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="interactive transition hover:scale-110 hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="interactive transition hover:scale-110 hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter/X"
              className="interactive transition hover:scale-110 hover:text-gold"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

          <button
            className="interactive rounded-full border border-white/30 p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <div className="hidden animate-pulseGlow rounded-full md:block">
            <GlowLinkButton text="Apply Now" href="/admissions" />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/20 bg-forest/95 px-4 py-4 lg:hidden">
          <div className="grid gap-3 text-sm text-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`interactive rounded-lg px-2 py-1 transition hover:bg-white/10 ${
                  pathname === item.href ? "text-gold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <GlowLinkButton text="Apply Now" href="/admissions" className="mt-2 justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
