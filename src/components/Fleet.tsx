"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Fuel, Gauge, Users } from "lucide-react";
import {
  cars,
  categories,
  type Car,
  type CarCategory,
} from "@/data/cars";
import {
  fadeUp,
  reduceMotionVariants,
  springSoft,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type Filter = CarCategory | "Tous";

function CarCard({ car, reduced }: { car: Car; reduced: boolean | null }) {
  return (
    <motion.article
      layout={!reduced}
      initial={reduced ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
      transition={springSoft}
      whileHover={reduced ? undefined : { y: -8 }}
      className="group overflow-hidden rounded-sm border border-border bg-surface-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.image}
          alt={car.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-sm bg-background/80 px-2 py-1 text-xs tracking-wide text-accent backdrop-blur">
          {car.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            {car.name}
          </h3>
          <p className="shrink-0 text-right">
            <span className="font-semibold text-accent">{car.pricePerDay}€</span>
            <span className="block text-xs text-muted">/ jour</span>
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          <li className="inline-flex items-center gap-1.5">
            <Fuel size={14} aria-hidden className="text-accent" />
            <span>{car.fuel}</span>
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Gauge size={14} aria-hidden className="text-accent" />
            <span>{car.transmission}</span>
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Users size={14} aria-hidden className="text-accent" />
            <span>{car.seats} places</span>
          </li>
        </ul>
        <a
          href="#contact"
          className="mt-5 inline-flex text-sm font-medium text-accent transition hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
        >
          Réserver ce véhicule →
        </a>
      </div>
    </motion.article>
  );
}

export default function Fleet() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const reduced = useReducedMotion();

  const filtered = useMemo(
    () =>
      filter === "Tous" ? cars : cars.filter((c) => c.category === filter),
    [filter]
  );

  return (
    <section
      id="flotte"
      className="section-pad py-20 md:py-28"
      aria-labelledby="flotte-title"
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
            Notre flotte
          </p>
          <h2
            id="flotte-title"
            className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Des véhicules pour chaque ambition
          </h2>
          <p className="mt-4 text-muted">
            Filtrez par catégorie et trouvez le modèle qui correspond à votre
            trajet.
          </p>
        </motion.div>

        <motion.div
          variants={reduceMotionVariants(reduced, fadeUp)}
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrer par catégorie"
        >
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat)}
                className={`rounded-md border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] ${
                  active
                    ? "border-accent bg-accent/15 text-accent"
                    : "border-border text-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        <LayoutGroup>
          <motion.div
            layout={!reduced}
            className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((car) => (
                <CarCard key={car.id} car={car} reduced={reduced} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </section>
  );
}
