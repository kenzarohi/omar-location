"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarClock,
  Headphones,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { advantages } from "@/data/cars";
import {
  fadeUp,
  reduceMotionVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const icons = [CalendarClock, ShieldCheck, Wrench, Headphones];

export default function WhyUs() {
  const reduced = useReducedMotion();

  return (
    <section
      id="avantages"
      className="section-pad border-y border-border bg-surface py-20 md:py-28"
      aria-labelledby="avantages-title"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={reduceMotionVariants(reduced, staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={reduceMotionVariants(reduced, fadeUp)} className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">
            Pourquoi Omar
          </p>
          <h2
            id="avantages-title"
            className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Pourquoi nous choisir
          </h2>
          <p className="mt-4 text-muted">
            Quatre engagements concrets pour une location sans friction.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.id}
                variants={reduceMotionVariants(reduced, fadeUp)}
                className="rounded-sm border border-border bg-surface-elevated p-6"
              >
                <div
                  className="mb-5 inline-flex rounded-md border border-accent/30 bg-accent/10 p-3 text-accent"
                  aria-hidden
                >
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
