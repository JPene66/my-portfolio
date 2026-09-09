import { Variants, Transition } from "framer-motion";

// Custom physics-based cubic-bezier easing curve (smooth & tactile, non-bouncy)
export const customEase = [0.16, 1, 0.3, 1] as const;

export const transitionFast: Transition = {
  duration: 0.3,
  ease: customEase,
};

export const transitionMedium: Transition = {
  duration: 0.5,
  ease: customEase,
};

export const transitionSlow: Transition = {
  duration: 0.8,
  ease: customEase,
};

// Container variant with staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Fade & rise animation for section scroll-reveals
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionMedium,
  },
};

// Word-by-word hero headline text reveal container & item
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

export const textRevealWord: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: customEase,
    },
  },
};

// Animated section divider line drawing variant
export const lineDrawVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: customEase,
    },
  },
};
