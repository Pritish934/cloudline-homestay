export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-mist px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg text-ink">Cloudline</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-charcoal/40">
            1,850m · four rooms · est. 2024
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 font-body text-[13px] text-charcoal/60">
          <a href="mailto:stay@cloudline-house.example" className="hover:text-clay">
            stay@cloudline-house.example
          </a>
          <a href="#" className="hover:text-clay">Instagram</a>
          <span>© {new Date().getFullYear()} Cloudline</span>
        </div>
      </div>
    </footer>
  );
}
