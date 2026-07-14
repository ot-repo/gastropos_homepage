import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

/**
 * Digital glitch page transition.
 *
 * On exit: the page rapidly flickers with horizontal displacement (glitch),
 * a brief flash overlay appears, then the new page materializes.
 *
 * On enter: a subtle scan-line sweep resolves the new page into view.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const { location } = useRouterState();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        className="page-glitch-wrapper"
      >
        {/* Glitch flash overlay — visible only during exit/enter */}
        <motion.div
          className="page-glitch-flash"
          variants={{
            initial: { opacity: 1 },
            enter: { opacity: 0 },
            exit: { opacity: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-hidden
        />

        {/* Main content */}
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              x: 0,
              clipPath: "inset(0 0 100% 0)",
            },
            enter: {
              opacity: 1,
              x: 0,
              clipPath: "inset(0 0 0% 0)",
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as const,
                clipPath: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1] as const,
                },
              },
            },
            exit: {
              opacity: 0,
              x: [0, -8, 12, -4, 6, 0],
              transition: {
                duration: 0.3,
                opacity: { duration: 0.2, delay: 0.1 },
                x: {
                  duration: 0.3,
                  ease: "linear",
                  times: [0, 0.15, 0.35, 0.55, 0.75, 1],
                },
              },
            },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
