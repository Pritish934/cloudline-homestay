"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "A day here", href: "#day" },
  { label: "Your hosts", href: "#hosts" },
  { label: "Getting here", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-premium ${
        scrolled ? "bg-mist/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(35,39,34,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className={`font-display text-lg tracking-wide transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-mist"
          }`}
        >
          Cloudline
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-[13px] uppercase tracking-widest2 transition-colors duration-500 hover:opacity-70 ${
                scrolled ? "text-charcoal" : "text-mist"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className={`rounded-full border px-5 py-2 text-[13px] uppercase tracking-widest2 transition-colors duration-500 ${
            scrolled
              ? "border-ink text-ink hover:bg-ink hover:text-mist"
              : "border-mist/60 text-mist hover:bg-mist hover:text-ink"
          }`}
        >
          Enquire
        </a>
      </div>
    </motion.header>
  );
}
