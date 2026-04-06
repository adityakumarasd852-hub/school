"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let active = false;
    let rafId = 0;

    const render = () => {
      const el = cursorRef.current;
      if (el) {
        const size = active ? 52 : 24;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      }
      rafId = window.requestAnimationFrame(render);
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const over = (e: Event) => {
      const target = e.target as HTMLElement;
      active = !!target.closest("button,a,.interactive");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden rounded-full border border-leaf/70 bg-leaf/20 md:block"
    />
  );
}
