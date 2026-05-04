# Archived — "See it in action" section

This folder holds the **Day** section that was part of Landing Page v6 as
section **06 — "See it in action"**. It was removed from the v1 public
landing page (Landing Page v7.html) to keep the first release tighter. It
will be reintroduced in a later iteration.

## What's here

- `day.jsx` — the React component (was `src/day.jsx`)
- `data.day.jsx` — the `DAY` constant (was inside `src/data.jsx`)

## Original position in the page

Between `HowItWorks` and `Inside`, with:

- `id="day"`
- Section number **06**
- Label **"See it in action"**
- Accent color: dynamic per scene (orange / sage / straw / sky)
- Background: `var(--bg-2)`
- Class: `sec-fade-top`

It was the section where "Sarah" walks through four moments of her week
with Cowork OS.

## How to re-integrate later

1. Move `day.jsx` back into `src/`.
2. Paste the `DAY` constant from `data.day.jsx` back into `src/data.jsx`
   and add `DAY` to the `Object.assign(window, { ... })` at the bottom.
3. In `Landing Page v7.html`, add the script tag under the others:
   ```html
   <script type="text/babel" data-presets="react" src="src/day.jsx"></script>
   ```
4. In `src/app.jsx`, place `<Day state={state} />` between
   `<HowItWorks />` and `<Inside />`.
5. **Renumber the sections** — Day takes a slot, so everything downstream
   shifts by +1:
   - HowItWorks: 06 → 07
   - Inside: 07 → 08
   - ForWho: 08 → 09
   - Founder: 09 → 10
   - Pricing: 10 → 11
   - FAQ: 11 → 12
6. Optionally restore the two `#day` anchor links in `hero_centered.jsx`
   and `finalcta.jsx` (they currently point to `#benefits`).

## Why archived, not deleted

The section is polished and tested — we just don't want it in the v1
release. Keeping the files intact here means reintegration is a paste,
not a rewrite.
