"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix: string;
  className?: string;
};

export default function CountUp({ value, suffix, className = "" }: CountUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = Math.max(1, Math.ceil(value / 80));
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  );
}

