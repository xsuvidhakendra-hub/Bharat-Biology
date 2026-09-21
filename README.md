# Bharat Biology

Open-source, multilingual (17 Indian languages + English), motion-graphics 3D biology
education platform. Project code `BIO`.

Built on a fork of [`ashemag/human-atlas`](https://github.com/ashemag/human-atlas) — an
interactive 3D anatomy explorer (React, Three.js, shadcn/ui) on the BodyParts3D dataset.
Take the human body apart into **2,234 individually selectable meshes**, explore
**15 anatomical systems**, search **3,432 named concepts**, and — new in this project — watch
a baby's skeleton fuse into an adult's as it grows.

## Status

🟢 Phase 1 in progress: skeleton explode/label (inherited), bone-fusion animation (new),
English + Hindi i18n shell (new). Cell, bacteria, and fungus modules are explicitly
out of scope until a commissioning budget exists — see `Phases.md`.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3016. To build the static site, run `npm run build`; output is in
`dist/`.

## Deploy

Vercel, via the included `vercel.json` (`npm ci`, `npm run build`, `dist/` output).

## License

Application code is MIT (see `LICENSE`), matching the upstream fork and this project's
open-source-from-day-one posture. Anatomy data (BodyParts3D) is CC BY 4.0 — attribution is
preserved in [`public/ATTRIBUTION.md`](public/ATTRIBUTION.md) and surfaced in the app itself;
never remove or shorten it.

## For Claude Code

Read `CLAUDE.md` first, always — boot instructions and every constraint live there. Project
docs (`PRD.md`, `Architecture.md`, `Phases.md`, `Rules.md`, `Design.md`) live in this
system's Drive, `10-PROJECT/BIO-bharat-biology/` — read before making anatomical, sourcing,
or scope decisions.
