"use client";

import { motion } from "framer-motion";

/**
 * Fades and lifts children into place as they enter the viewport.
 * Wraps a single block-level section of content.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
