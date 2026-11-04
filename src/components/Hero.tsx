"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { staggerFast, fadeUp, reduceMotionVariants } from "@/lib/motion";

const title = ["Conduisez", "l'excellence", "avec", "Omar"];

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 120]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [1, 1.08]
  );

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-24"
      aria-labelledby="hero-title"
    >
      {/* Fond atmosphérique */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(201,162,39,0.14),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(255,255,255,0.04),transparent_45%)]"
        aria-hidden
      />

      <div className="section-pad relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm uppercase tracking-[0.28em] text-accent"
          >
            Location premium
          </motion.p>

          <motion.h1
            id="hero-title"
            className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            variants={reduceMotionVariants(reduced, staggerFast)}
            initial="hidden"
            animate="visible"
          >
            {title.map((word) => (
              <motion.span
                key={word}
                variants={reduceMotionVariants(reduced, fadeUp)}
                className="mr-[0.28em] inline-block last:mr-0"
              >
                {word === "Omar" ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg"
          >
            Flotte soignée, réservation fluide et expérience sur mesure.
            Citadine, berline, SUV ou luxe — le véhicule idéal pour chaque
            destination.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#flotte"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              Voir les véhicules
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-full bg-accent/10 blur-3xl" aria-hidden />
          <motion.div
            style={{ scale }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
              alt="Voiture de sport premium silhouette élégante"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
