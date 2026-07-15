import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

/**
 * Page transition wrapper.
 * Exit: current page fades out with slight scale + blur.
 * Enter: new page fades in.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { location } = useRouterState();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: "brightness(1.4) blur(3px)" }}
        animate={{
          opacity: 1,
          filter: "brightness(1) blur(0px)",
          transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        }}
        exit={{
          opacity: 0,
          scale: 1.03,
          filter: "brightness(1.8) blur(4px)",
          transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1] as const,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
