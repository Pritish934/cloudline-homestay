"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const LEGS = [
  { from: "Nearest town", to: "Trailhead junction", distance: "38 km", mode: "By road, 1h 10m" },
  { from: "Trailhead junction", to: "Cloudline gate", distance: "6 km", mode: "Jeep track, 25m" },
];

export default function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-6 text-[11px] text-clay">Getting here</p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            The last stretch is unpaved. We think that&apos;s a feature.
          </h2>
          <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-charcoal/80">
            We&apos;ll send exact directions and a pin after you write in —
            the last six kilometres don&apos;t show up reliably on maps yet.
            A jeep can be arranged from the junction if you&apos;re not
            driving yourself.
          </p>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <svg
              viewBox="0 0 400 140"
              className="mb-10 w-full"
              aria-hidden="true"
            >
              <motion.path
                d="M10 120 C 90 120, 110 40, 200 40 S 320 90, 390 20"
                fill="none"
                stroke="#7C8570"
                strokeWidth="1"
                strokeDasharray="4 5"
              />
              <motion.path
                d="M10 120 C 90 120, 110 40, 200 40 S 320 90, 390 20"
                fill="none"
                stroke="#A15A34"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle cx="10" cy="120" r="4" fill="#232722" />
              <circle cx="200" cy="40" r="3" fill="#232722" />
              <circle cx="390" cy="20" r="4" fill="#A15A34" />
            </svg>
          </Reveal>

          <div className="flex flex-col gap-6">
            {LEGS.map((leg, i) => (
              <Reveal key={leg.from} delay={i * 0.1}>
                <div className="flex items-center justify-between border-t border-charcoal/10 pt-5 font-body text-[14px]">
                  <span className="text-charcoal/80">
                    {leg.from} <span className="text-charcoal/30">→</span> {leg.to}
                  </span>
                  <span className="font-mono text-[12px] text-moss">
                    {leg.distance} · {leg.mode}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
