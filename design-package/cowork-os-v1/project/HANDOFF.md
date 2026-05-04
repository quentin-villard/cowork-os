# Cowork OS — handoff notes

Last updated: 2026-04-24

## Source of truth

- **`Landing Page v7.html`** — the landing page to publish. Loads React
  components from `src5/`.
- **`src5/`** — all the JSX components used by v7.

## What's archived (not shipped in v1)

- **`_archive/day-section/`** — the "See it in action" section (was
  section 06 in v6). Removed from v1 to keep the first release tighter.
  Contains the component, its data, and a README explaining how to
  reintegrate later.

## What's archived for reference

- **`uploads/`** — source imagery, briefs and screenshots used during
  design. Not required for the public site.

## v1 page structure (sections)

01 Pains · The problem
02 Meet · The system
03 Benefit · Advanced memory
04 Benefit · Your voice
05 Benefit · Your tools
06 HowItWorks · How it works
07 Inside · What's included
08 ForWho · Fit check
09 Founder · About the creator
10 Pricing
11 FAQ

## Known anchor changes vs v6

- `#day` no longer exists (section archived). The two links that used
  to point there now point to `#benefits` (in the hero footer link and
  final CTA) and `#how` (in the top nav).

## For Claude Code

- Publish `Landing Page v7.html` + `src5/` + `src5/assets/`.
- `_archive/` must not ship.
- `uploads/` contains source imagery, briefs and screenshots — not
  required for the public site; keep out of the build.

## To reintroduce the Day section

See `_archive/day-section/README.md`. It explains:
- where the files need to go
- how to renumber sections (everything from 06 downstream shifts +1)
- which anchors to restore
