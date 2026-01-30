import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(options?: { once?: boolean; amount?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: options?.once ?? true, 
    amount: options?.amount ?? 0.3 
  });
  
  return { ref, isInView };
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 }
};
