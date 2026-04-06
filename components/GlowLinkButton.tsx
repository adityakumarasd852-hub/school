"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

type GlowLinkButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export default function GlowLinkButton({ text, href, className = "" }: GlowLinkButtonProps) {
  const [xy, setXy] = useState({ x: 50, y: 50 });

  return (
    <Link
      href={href}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setXy({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
      className={`interactive group relative inline-flex items-center overflow-hidden rounded-full border border-gold/70 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-glow ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at ${xy.x}% ${xy.y}%, rgba(217,180,74,0.42), rgba(11,93,59,0.95) 45%)`
      }}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {text}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

