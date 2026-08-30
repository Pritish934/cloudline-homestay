"use client";

import { motion } from "framer-motion";

/**
 * Three soft, low-opacity mist bands that drift sideways at different
 * speeds — a quiet, looping ambient animation rather than a decorative
 * flourish. Reads as the cloud line moving through the valley.
 */
export default function MistLayer({ className = "" }) {
  const bands = [
    { top: "58%", opacity: 0.16, duration: 38, height: 90 },
    { top: "70%", opacity: 0.22, duration: 52, height: 130 },
    { top: "82%", opacity: 0.14, duration: 46, height: 70 },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {bands.map((b, i) => (
        <motion.div
          key={i}
          className="absolute left-[-20%] w-[140%] blur-2xl"
          style={{
            top: b.top,
            height: b.height,
            opacity: b.opacity,
            background:
              "linear-gradient(90deg, transparent, #F3EFE6 25%, #F3EFE6 75%, transparent)",
          }}
          animate={{ x: ["-5%", "5%", "-5%"] }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
