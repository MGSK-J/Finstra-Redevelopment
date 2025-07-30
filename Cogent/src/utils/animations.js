/**
 * Animation variants for Framer Motion
 * These can be reused across components for consistent animations
 */

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Slide up animation
export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    y: 20, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    x: -50, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    x: 50, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Scale up animation
export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    scale: 0.9, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Staggered children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: { 
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Staggered item animation for use with staggerContainer
export const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    y: 10, 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

// Page transition animation
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.15
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Button hover animation
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

// Button tap animation
export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Form field focus animation
export const formFieldFocus = {
  scale: 1.02,
  borderColor: '#9333ea',
  transition: { duration: 0.2 }
};