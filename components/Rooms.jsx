"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ROOMS = [
  {
    name: "The Terrace Room",
    detail: "Ground floor · faces the vegetable terraces",
    size: "22 m²",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "The Pine Room",
    detail: "First floor · faces the forest line",
    size: "20 m²",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "The Valley Room",
    detail: "First floor · faces the open valley",
    size: "24 m²",
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "The Attic Room",
    detail: "Top floor · sloped ceiling, best light",
    size: "18 m²",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-stone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-xl">
          <p className="eyebrow mb-6 text-[11px] text-clay">Four rooms, no two alike</p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Each room was fitted to the room next to it, not to a floor plan.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {ROOMS.map((room, i) => (
            <Reveal key={room.name} delay={i * 0.08}>
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group cursor-pointer"
              >
                <div className="relative aspect-[6/5] w-full overflow-hidden rounded-sm">
                  <motion.div
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.06 },
                    }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={room.image}
                      alt={`${room.name}, ${room.detail}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-ink/10"
                  />
                </div>

                <div className="mt-5 flex items-baseline justify-between border-b border-charcoal/10 pb-4">
                  <div>
                    <h3 className="font-display text-xl font-light text-ink">
                      {room.name}
                    </h3>
                    <p className="mt-1 font-body text-[13px] text-charcoal/60">
                      {room.detail}
                    </p>
                  </div>
                  <span className="font-mono text-[12px] text-moss">
                    {room.size}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
