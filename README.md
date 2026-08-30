# Cloudline — homestay website

A Next.js (App Router) + Tailwind CSS + Framer Motion site for a small,
new, hillside homestay. Built to feel premium and considered without
being flashy — the animation budget is spent on a few deliberate moments
(hero load, scroll reveals, a drifting mist layer, a hover zoom on room
cards) rather than scattered everywhere.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. This sandbox couldn't reach Google
Fonts to test-build the real typefaces (network is restricted here), but
`npm run build` compiled clean with everything else, and Google Fonts
will load normally on your machine or any real host.

## Design tokens

- **Colors** (`tailwind.config.js`): `ink` (deep pine, dark sections),
  `mist` (warm off-white background), `moss` (muted sage for secondary
  text), `clay` (burnt terracotta accent — CTAs, the one warm color),
  `charcoal` (body text), `ember` (muted gold, used sparingly on dark
  sections), `stone` (card backgrounds).
- **Type**: Fraunces (display, used italic for warmth), Work Sans
  (body), Space Mono (small caps labels and the "instrument readout"
  numbers — elevation, room count, distances).
- **Signature motif**: small mono-font readouts (elevation, room size,
  distances) instead of generic numbered steps — it's tied to the
  actual content of a mountain homestay rather than decoration.

## Swap in the real content

1. **Name** — currently "Cloudline," a placeholder tied to the idea of
   the cloud line the house sits above. Search/replace it, or tell me
   the real name and I'll swap it and re-check the copy that plays off
   it.
2. **Photos** — every image is a real, freely-usable Unsplash photo
   used as a placeholder (`components/Hero.jsx`, `Intro.jsx`,
   `Rooms.jsx`, `Host.jsx`, `Gallery.jsx`). Replace the `src` values
   with your own photos — put them in `/public` and use a path like
   `/rooms/terrace.jpg` instead of a URL.
3. **Copy** — room names, the day-in-the-life moments, distances, and
   the host note are all placeholder text written to match a hillside
   homestay. Replace with your real details in the same files.
4. **Enquiry form** (`components/Booking.jsx`) — currently just shows a
   confirmation message on submit. Wire it to an email service (e.g.
   Resend, Formspree) or an API route before going live.

## Structure

```
app/
  layout.js       fonts + metadata
  page.js         assembles all sections
  globals.css     tailwind + base styles, reduced-motion handling
components/
  Nav, Hero, Intro, Rooms, DayInTheLife, Host, Location, Gallery,
  Booking, Footer, MistLayer, Reveal (scroll-in wrapper)
```
