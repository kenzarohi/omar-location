import type { Transition, Variants } from "framer-motion";

/** Transitions douces partagées */
export const easeOut: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: easeOut },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: easeOut },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const viewportOnce = { once: true, amount: 0.25 as const };

/** Variants réduites si prefers-reduced-motion */
export function reduceMotionVariants(
  reduced: boolean | null,
  variants: Variants
): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  return variants;
}
