"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1400&auto=format&fit=crop",
    alt: "Breakfast laid out on a wooden table",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop",
    alt: "Forest trail near the homestay",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?q=80&w=1400&auto=format&fit=crop",
    alt: "Mountain range at golden hour",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1400&auto=format&fit=crop",
    alt: "Sunrise over layered mountain ridges",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="bg-stone px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-xl">
          <p className="eyebrow mb-6 text-[11px] text-clay">Around the house</p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            A few things you&apos;ll see before you see the rooms.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06} className={img.span}>
              <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
