import { Variants } from 'framer-motion';

// Fade in animation for elements
export const fadeIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay
    }
  }
});

// Fade in from left animation
export const fadeInLeft = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay
    }
  }
});

// Fade in from right animation
export const fadeInRight = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay
    }
  }
});

// Staggered children animation container
export const staggerContainer = (staggerChildren: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren
    }
  }
});

// Scale up animation for cards
export const scaleUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay
    }
  }
});

// Bounce animation for icons
export const bounce = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay
    }
  }
});

// Page transition animation
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};
