"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Booking() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="book" className="bg-ink px-6 py-28 text-mist md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow mb-6 text-[11px] text-ember">No booking engine yet</p>
          <h2 className="font-display text-3xl font-light leading-tight text-mist md:text-5xl">
            Tell us your dates. We&apos;ll write back ourselves.
          </h2>
          <p className="mx-auto mt-6 max-w-md font-body text-[15px] leading-relaxed text-mist/70">
            We keep it to email and one phone line for now — with four rooms,
            we&apos;d rather confirm details in person than run an
            automated calendar.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          {sent ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-xl italic text-mist"
            >
              Thank you — we&apos;ll reply within a day or two.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-4 text-left"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="border-b border-mist/30 bg-transparent py-2 font-body text-sm text-mist placeholder:text-mist/40 focus:border-clay focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="border-b border-mist/30 bg-transparent py-2 font-body text-sm text-mist placeholder:text-mist/40 focus:border-clay focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Approximate dates"
                className="border-b border-mist/30 bg-transparent py-2 font-body text-sm text-mist placeholder:text-mist/40 focus:border-clay focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 self-start rounded-full bg-clay px-7 py-3 font-body text-[13px] uppercase tracking-widest2 text-mist transition-transform duration-500 ease-premium hover:scale-[1.03]"
              >
                Send enquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
