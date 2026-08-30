"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MistLayer from "./MistLayer";

const READOUTS = [
  { label: "Elevation", value: "1,850 m" },
  { label: "Rooms", value: "04" },
  { label: "Open since", value: "2024" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2400&auto=format&fit=crop"
        alt="Low cloud sitting in a mountain valley at first light"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <MistLayer />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-6 text-[12px] text-mist/70"
        >
          A small house, above the cloud line
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-[13vw] font-light italic leading-[0.95] text-mist md:text-7xl lg:text-8xl"
        >
          Cloudline
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-mist/80 md:text-base"
        >
          Four rooms on a hillside, run by a family who still cooks breakfast
          themselves. New enough that the terraces are still settling in —
          old enough to know how mornings here work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-mist/20 pt-6 font-mono"
        >
          {READOUTS.map((r) => (
            <div key={r.label}>
              <div className="text-[10px] uppercase tracking-widest2 text-mist/50">
                {r.label}
              </div>
              <div className="mt-1 text-lg text-mist">{r.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-6 z-10 hidden font-mono text-[11px] uppercase tracking-widest2 text-mist/50 md:right-10 md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
