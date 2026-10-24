# Tiggo 7 PHEV Motion Lab

A Next.js + Tailwind + Framer Motion showcase concept for the Chery Tiggo 7 PHEV.

## What it is

This project is a motion-first concept site built to explore multiple UI directions for the same subject:

- premium showroom landing
- product-smart feature storytelling
- futuristic cockpit mood
- playful campaign/poster energy
- hybrid dashboard UI ideas
- component-level motion polish

The current version includes:

- animated hero section
- color switching for Khaki White / Phantom Grey / Bloodstone Red
- pseudo 360 tilt interaction
- grounded spec cards from public Chery Malaysia pages and brochure data
- multi-direction chapter planning
- small interactive controls to prove the UI stack

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Notes

- The current “360” viewer is not a true frame-by-frame spin yet.
- It uses official still assets plus motion/tilt to prototype the experience.
- A future version can upgrade to real 360 frames or a 3D/WebGL scene.

## Possible next upgrades

- real multi-chapter navigation
- interior hotspot scenes
- proper 360 sprite or video turntable
- React Three Fiber feature chapter
- Vercel deployment with GitHub auto-deploy
