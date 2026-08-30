"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5 md:col-start-1">
          <p className="eyebrow mb-6 text-[11px] text-clay">Why we built this</p>
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            We didn&apos;t want a hotel on the hill.
            <br />
            <span className="italic text-moss">We wanted our own house, shared.</span>
          </h2>
          <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-charcoal/80">
            Cloudline is four rooms built into the slope where our family
            already grew vegetables. There&apos;s no reception desk — you&apos;ll
            meet whoever&apos;s home. Meals are whatever came up from the
            terrace that morning. It&apos;s small on purpose.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1600&auto=format&fit=crop"
              alt="Stone and timber homestay building set into a wooded hillside"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-40 border border-charcoal/10 bg-mist p-4 font-mono text-[11px] text-charcoal/70 shadow-sm md:block">
            <span className="uppercase tracking-widest2 text-moss">Built</span>
            <div className="mt-1 text-base text-ink">2023 – 24</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
