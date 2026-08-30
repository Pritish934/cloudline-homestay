"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const MOMENTS = [
  {
    time: "06:20",
    title: "The valley is still full",
    text: "Cloud sits below the terraces most mornings. It usually burns off by eight.",
  },
  {
    time: "07:30",
    title: "Breakfast, whatever came up",
    text: "Eggs, seasonal greens, and coffee grown two ridges over. Eaten on the terrace if it's dry.",
  },
  {
    time: "11:00",
    title: "The forest trail",
    text: "A forty-minute loop through pine, starting from the back gate. We'll point you to it.",
  },
  {
    time: "17:45",
    title: "Light on the far ridge",
    text: "The best hour of the day here. Most guests just sit for it.",
  },
  {
    time: "20:00",
    title: "Dinner, family-style",
    text: "One table, whoever's staying. Regional food, not a menu.",
  },
];

export default function DayInTheLife() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="day" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-36">
      <Reveal className="mb-16 max-w-xl">
        <p className="eyebrow mb-6 text-[11px] text-clay">A day here</p>
        <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
          Nothing is scheduled. This is just what tends to happen.
        </h2>
      </Reveal>

      <div ref={ref} className="relative pl-10 md:pl-16">
        <div className="absolute left-0 top-1 h-full w-px bg-charcoal/10 md:left-0" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-1 w-px bg-clay md:left-0"
        />

        <div className="flex flex-col gap-14">
          {MOMENTS.map((m, i) => (
            <Reveal key={m.time} delay={i * 0.05} className="relative">
              <div className="absolute -left-10 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-clay md:-left-16" />
              <div className="grid grid-cols-1 gap-2 md:grid-cols-[100px_1fr] md:gap-8">
                <span className="font-mono text-[13px] text-moss">{m.time}</span>
                <div>
                  <h3 className="font-display text-xl font-light text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-md font-body text-[15px] leading-relaxed text-charcoal/75">
                    {m.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
