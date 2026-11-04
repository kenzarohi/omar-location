"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { stats } from "@/data/cars";
import { fadeUp, reduceMotionVariants, staggerContainer, viewportOnce } from "@/lib/motion";

function Counter({
  value,
  suffix,
  reduced,
}: {
  value: number;
  suffix: string;
  reduced: boolean | null;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring, reduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const reduced = useReducedMotion();

  return (
    <section
      className="section-pad border-y border-border bg-surface py-16 md:py-20"
      aria-label="Chiffres clés"
    >
      <motion.div
        className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3"
        variants={reduceMotionVariants(reduced, staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={reduceMotionVariants(reduced, fadeUp)}
            className="text-center sm:text-left"
          >
            <p className="font-display text-5xl font-semibold text-accent md:text-6xl">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                reduced={reduced}
              />
            </p>
            <p className="mt-2 text-sm tracking-wide text-muted uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
