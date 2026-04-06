import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Admissions", href: "/admissions" }
];

export default function SiteFooter() {
  return (
    <footer className="section-pad bg-[#084b31] pb-10 text-white">
      <div className="mx-auto grid max-w-[1300px] gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/50">GS</div>
            <p className="text-lg font-semibold">Greenfield International School</p>
          </div>
          <p className="text-sm text-white/80">
            Nurturing global citizens through academics, integrity, and innovation.
          </p>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold">Quick Links</p>
          <div className="space-y-2 text-sm text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="interactive block transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold">Contact</p>
          <div className="space-y-3 text-sm text-white/85">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              Near Knowledge Park, Indirapuram, Ghaziabad
            </p>
            <a
              href="mailto:adityakumarasd852@gmail.com"
              className="interactive flex items-center gap-2 transition hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" />
              adityakumarasd852@gmail.com
            </a>
            <a href="tel:+919876543210" className="interactive flex items-center gap-2 transition hover:text-gold">
              <Phone className="h-4 w-4 text-gold" />
              +91 98765 43210
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold">Campus Map</p>
          <iframe
            title="School location"
            src="https://maps.google.com/maps?q=indirapuram%20ghaziabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-44 w-full rounded-xl border border-white/20"
            loading="lazy"
          />
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-[1300px] border-t border-white/15 pt-5 text-sm text-white/70">
        (c) 2026 Greenfield International School. All Rights Reserved.
      </p>
    </footer>
  );
}
