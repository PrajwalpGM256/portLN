import type { Transition, Variants } from "framer-motion";

// Card positions for fanned layout
export const CARD_POSITIONS = [
  { rotate: -12, x: -220, y: 30, z: 1 },
  { rotate: -6, x: -110, y: 15, z: 2 },
  { rotate: 0, x: 0, y: 0, z: 5 },
  { rotate: 6, x: 110, y: 15, z: 2 },
  { rotate: 12, x: 220, y: 30, z: 1 },
] as const;

export type CardPosition = (typeof CARD_POSITIONS)[number];

// Animation configuration
export const SOCIAL_ANIMATION = {
  ease: [0.16, 1, 0.3, 1] as const,
  duration: 0.7,
  staggerDelay: 0.08,
};

// Heading animation
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const headingTransition: Transition = {
  duration: 0.8,
};

// Text fade animation
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const createFadeUpTransition = (delay: number): Transition => ({
  duration: 0.6,
  delay,
});

// Photo card animation helpers
export const getCardInitial = () => ({
  opacity: 0,
  rotate: 0,
  x: 0,
  y: 80,
  scale: 0.9,
});

export const getCardAnimate = (position: CardPosition) => ({
  opacity: 1,
  rotate: position.rotate,
  x: position.x * 0.7,
  y: position.y,
  scale: 1,
});

export const getCardTransition = (index: number): Transition => ({
  duration: SOCIAL_ANIMATION.duration,
  delay: 0.15 + index * SOCIAL_ANIMATION.staggerDelay,
  ease: SOCIAL_ANIMATION.ease,
});

export const cardHoverAnimation = {
  scale: 1.08,
  zIndex: 10,
  boxShadow: "0 35px 60px -15px rgba(255, 128, 0, 0.3)",
  transition: { duration: 0.3 },
};

export const getCardHover = (yOffset: number) => ({
  ...cardHoverAnimation,
  y: yOffset - 25,
});
