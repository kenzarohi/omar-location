"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/cars";
import {
  fadeUp,
  reduceMotionVariants,
  springSoft,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const CARD = 360;
const GAP = 20;

export default function Testimonials() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  const goTo = (next: number) => {
    setIndex(Math.max(0, Math.min(maxIndex, next)));
  };

  return (
    <section
      id="avis"
      className="section-pad border-y border-border bg-surface py-20 md:py-28"
      aria-labelledby="avis-title"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={reduceMotionVariants(reduced, staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          variants={reduceMotionVariants(reduced, fadeUp)}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">
              Témoignages
            </p>
            <h2
              id="avis-title"
              className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Avis clients
            </h2>
            <p className="mt-4 text-muted">
              Glissez ou utilisez les flèches pour parcourir les retours clients.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Avis précédent"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="rounded-md border border-border p-2 text-foreground transition enabled:hover:border-accent/50 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Avis suivant"
              onClick={() => goTo(index + 1)}
              disabled={index === maxIndex}
              className="rounded-md border border-border p-2 text-foreground transition enabled:hover:border-accent/50 disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={reduceMotionVariants(reduced, fadeUp)}
          className="relative mt-10 overflow-hidden"
          role="region"
          aria-roledescription="carrousel"
          aria-label="Carrousel d'avis clients"
        >
          <motion.div
            className="flex cursor-grab gap-5 active:cursor-grabbing"
            drag={reduced ? false : "x"}
            dragConstraints={{
              left: -maxIndex * (CARD + GAP),
              right: 0,
            }}
            dragElastic={0.08}
            animate={{ x: -index * (CARD + GAP) }}
            transition={springSoft}
            onDragEnd={(_, info) => {
              if (reduced) return;
              if (info.offset.x < -60) goTo(index + 1);
              else if (info.offset.x > 60) goTo(index - 1);
            }}
          >
            {testimonials.map((item, i) => (
              <figure
                key={item.id}
                className="w-[min(85vw,360px)] shrink-0 rounded-sm border border-border bg-surface-elevated p-6 sm:w-[360px]"
                aria-hidden={i !== index}
              >
                <div
                  className="mb-4 flex gap-1"
                  aria-label={`${item.rating} sur 5`}
                >
                  {Array.from({ length: item.rating }).map((_, star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-accent text-accent"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Aller à l'avis ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === index ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
