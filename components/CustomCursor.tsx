"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: Event) => {
      const target = e.target as HTMLElement;
      setActive(!!target.closest("button,a,.interactive"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden rounded-full border border-leaf/70 bg-leaf/20 md:block"
      animate={{
        x: pos.x - (active ? 26 : 12),
        y: pos.y - (active ? 26 : 12),
        width: active ? 52 : 24,
        height: active ? 52 : 24
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.25 }}
    />
  );
}

