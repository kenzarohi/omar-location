"use client";

import { motion, useReducedMotion } from "framer-motion";
import { steps } from "@/data/cars";
import {
  fadeUp,
  reduceMotionVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

export default function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section
      id="etapes"
      className="section-pad py-20 md:py-28"
      aria-labelledby="etapes-title"
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
            Processus
          </p>
          <h2
            id="etapes-title"
            className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Comment ça marche
          </h2>
          <p className="mt-4 text-muted">
            Trois étapes simples pour prendre la route en toute sérénité.
          </p>
        </motion.div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Timeline line */}
          <motion.div
            aria-hidden
            className="absolute top-[1.15rem] right-0 left-0 hidden h-px origin-left bg-border md:block"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {steps.map((step, index) => (
            <motion.li
              key={step.id}
              variants={reduceMotionVariants(reduced, fadeUp)}
              className="relative"
            >
              <div className="mb-5 flex items-center gap-4 md:block">
                <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-background font-display text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className="h-px flex-1 bg-border md:hidden"
                    aria-hidden
                  />
                )}
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
