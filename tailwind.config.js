/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211B",       // deep pine, near-black green — dusk forest
        mist: "#F3EFE6",      // warm off-white — low cloud / mist
        moss: "#7C8570",      // muted sage-grey green — lichen on stone
        clay: "#A15A34",      // burnt terracotta-brown — sun on clay tile
        charcoal: "#232722",  // body text
        ember: "#C9A227",     // muted brass gold — lantern light, used sparingly
        stone: "#E8E3D9",     // card / section background
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
