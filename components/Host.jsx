"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Host() {
  return (
    <section id="hosts" className="bg-ink px-6 py-28 text-mist md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="relative md:col-span-5 md:col-start-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1400&auto=format&fit=crop"
              alt="Host standing on the terrace of the homestay"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
          <p className="eyebrow mb-6 text-[11px] text-ember">Your hosts</p>
          <h2 className="max-w-md font-display text-2xl font-light italic leading-relaxed text-mist md:text-3xl">
            &ldquo;We opened the doors a year ago. We&apos;re still learning
            what this place wants to be — you&apos;ll probably catch us
            figuring it out.&rdquo;
          </h2>
          <p className="mt-8 max-w-md font-body text-[15px] leading-relaxed text-mist/70">
            Cloudline is run day-to-day by the family who built it — no
            outside staff, no call centre. If you write to us, one of us
            answers. If you ask a question at breakfast, one of us knows.
          </p>
          <p className="mt-6 font-mono text-[13px] uppercase tracking-widest2 text-mist/50">
            — The family at Cloudline
          </p>
        </Reveal>
      </div>
    </section>
  );
}
