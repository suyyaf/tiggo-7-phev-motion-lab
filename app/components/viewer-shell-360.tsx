"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { carColors } from "@/app/lib/showcase-data";

type ViewerMode = "exterior" | "cockpit" | "systems";

type Hotspot = {
  id: string;
  label: string;
  title: string;
  body: string;
  x: number;
  y: number;
};

const hotspotMap: Record<ViewerMode, Hotspot[]> = {
  exterior: [
    {
      id: "camera",
      label: "540°",
      title: "540° panoramic camera",
      body: "The shell is ready for a future turntable frame sequence where this hotspot can snap to real front, side, and parking-camera views.",
      x: 70,
      y: 42,
    },
    {
      id: "roof",
      label: "Roof",
      title: "Panoramic sunroof",
      body: "A premium chapter hotspot for the roofline, light wash, and the more family-friendly comfort story.",
      x: 50,
      y: 25,
    },
    {
      id: "rims",
      label: "18”",
      title: "18-inch alloy rims",
      body: "The architecture supports click-to-focus wheel and lower-body detail zones once real 360 assets arrive.",
      x: 31,
      y: 68,
    },
    {
      id: "lights",
      label: "LED",
      title: "IQ light treatment",
      body: "This hotspot can later trigger real front-quarter frame swaps, light animations, or a showroom close-up cut.",
      x: 83,
      y: 48,
    },
  ],
  cockpit: [
    {
      id: "display",
      label: "24.6”",
      title: "Dual-screen cockpit",
      body: "This interior mode is where the shell pivots from exterior beauty shots into a dashboard-first information view.",
      x: 46,
      y: 37,
    },
    {
      id: "ambient",
      label: "64",
      title: "Ambient light field",
      body: "The hotspot system can carry per-zone accent changes, mode transitions, and layered HUD overlays.",
      x: 76,
      y: 58,
    },
    {
      id: "audio",
      label: "Sony",
      title: "Sony audio system",
      body: "Useful for richer audio-reactive or comfort storytelling sections once we decide to animate the cabin more aggressively.",
      x: 22,
      y: 59,
    },
  ],
  systems: [
    {
      id: "ev",
      label: "EV",
      title: "EV / HEV / Sport states",
      body: "A real 360-ready shell is not just about rotating the car — it also needs the architecture for system states, drive logic, and animated overlays.",
      x: 28,
      y: 34,
    },
    {
      id: "charge",
      label: "19m",
      title: "Charge logic",
      body: "This becomes the home for charging narratives, power-flow diagrams, and future smart overlays tied to route context.",
      x: 76,
      y: 33,
    },
    {
      id: "3d",
      label: "3D",
      title: "Model / frame handoff",
      body: "When real turntable frames or a true 3D model arrive, this shell can swap from concept mode into accurate Tiggo 360 mode without redesigning the UI.",
      x: 74,
      y: 73,
    },
  ],
};

const modeVisuals: Record<ViewerMode, { src: string; alt: string }> = {
  exterior: {
    src: carColors[0].image,
    alt: "Tiggo 7 PHEV exterior concept view",
  },
  cockpit: {
    src: "/assets/tiggo/cockpit-hud.svg",
    alt: "Tiggo cockpit concept dashboard field",
  },
  systems: {
    src: "/assets/tiggo/lab-grid.svg",
    alt: "Tiggo systems concept grid",
  },
};

export default function ViewerShell360() {
  const [mode, setMode] = useState<ViewerMode>("exterior");
  const [activeColor, setActiveColor] = useState(carColors[0]);
  const [angle, setAngle] = useState(8);
  const [activeHotspotId, setActiveHotspotId] = useState(hotspotMap.exterior[0].id);

  const activeHotspots = hotspotMap[mode];
  const activeHotspot =
    activeHotspots.find((item) => item.id === activeHotspotId) ?? activeHotspots[0];

  const previewTransform = useMemo(() => {
    if (mode !== "exterior") return {};
    return {
      transform: `perspective(1200px) rotateY(${angle}deg) rotateX(${Math.abs(angle) * 0.08}deg) translateY(${Math.abs(angle) * -0.18}px)`,
      filter: `drop-shadow(0 36px 42px rgba(0,0,0,.42)) drop-shadow(0 0 32px ${activeColor.accent}22)`,
    };
  }, [activeColor.accent, angle, mode]);

  return (
    <div className="rounded-[1.9rem] border border-white/10 bg-slate-950/28 p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-100">
            360 viewer shell
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
            Real hotspot architecture, ready for true Tiggo assets later.
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            This is the actual product shell for the future 360 experience: mode switching, angle control, colorway switching, hotspot selection, and an information panel that can survive the later handoff to real turntable frames or a real 3D model.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-5 text-slate-300">
          <div>Mode: {mode}</div>
          <div>Shell state: frame-ready</div>
          <div>Colorway: {activeColor.name}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <div className="grid gap-2 sm:grid-cols-3">
            {([
              ["exterior", "Exterior"],
              ["cockpit", "Cockpit"],
              ["systems", "Systems"],
            ] as const).map(([value, label]) => {
              const active = mode === value;
              return (
                <button
                  key={value}
                  onClick={() => {
                    setMode(value);
                    setActiveHotspotId(hotspotMap[value][0].id);
                  }}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    active
                      ? "border-sky-300/35 bg-sky-300/12 text-white"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_50%_28%,rgba(117,168,255,0.22),transparent_32%),linear-gradient(180deg,rgba(7,12,24,0.92),rgba(5,10,18,0.96))] p-4 min-h-[420px]">
            <div className="pointer-events-none absolute inset-x-10 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(198,221,255,0.8),transparent)]" />
            <div className="pointer-events-none absolute bottom-8 left-1/2 h-12 w-[70%] -translate-x-1/2 rounded-full bg-sky-300/18 blur-2xl" />
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
              {mode}
            </div>

            <motion.div
              key={`${mode}-${activeColor.name}`}
              initial={{ opacity: 0.3, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex min-h-[360px] items-center justify-center"
              style={previewTransform}
            >
              <div className="relative h-[280px] w-full max-w-[560px]">
                <Image
                  src={modeVisuals[mode].src}
                  alt={modeVisuals[mode].alt}
                  fill
                  unoptimized
                  className="object-contain"
                />

                {activeHotspots.map((hotspot) => {
                  const active = hotspot.id === activeHotspot.id;
                  return (
                    <button
                      key={hotspot.id}
                      onClick={() => setActiveHotspotId(hotspot.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                      <span
                        className={`flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-[11px] font-medium uppercase tracking-[0.16em] transition ${
                          active
                            ? "border-sky-200 bg-sky-200/18 text-white shadow-[0_0_28px_rgba(117,168,255,0.35)]"
                            : "border-white/18 bg-black/28 text-slate-200 hover:border-white/30"
                        }`}
                      >
                        {hotspot.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_0.92fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
              <div className="mb-2 text-xs uppercase tracking-[0.18em] text-sky-100">
                angle control
              </div>
              <input
                type="range"
                min={-28}
                max={28}
                value={angle}
                onChange={(event) => setAngle(Number(event.target.value))}
                disabled={mode !== "exterior"}
                className="w-full accent-sky-300 disabled:opacity-40"
              />
              <div className="mt-2 text-xs text-slate-400">
                {mode === "exterior"
                  ? `Pseudo angle: ${angle}° — swap this with real frame stepping later.`
                  : "Angle slider parks in non-exterior modes because those views become dedicated assets or camera scenes."}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
              <div className="mb-2 text-xs uppercase tracking-[0.18em] text-sky-100">
                colorway switch
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {carColors.map((color) => {
                  const active = color.name === activeColor.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setActiveColor(color)}
                      className={`rounded-2xl border px-3 py-3 text-left transition ${
                        active
                          ? "border-sky-300/35 bg-sky-300/10"
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-white/60"
                          style={{ background: color.tone }}
                        />
                        <span className="text-sm text-white">{color.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5">
          <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-100">
            hotspot panel
          </div>
          <h4 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
            {activeHotspot.title}
          </h4>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {activeHotspot.body}
          </p>

          <div className="mt-6 grid gap-3">
            {activeHotspots.map((hotspot) => {
              const active = hotspot.id === activeHotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    active
                      ? "border-sky-300/30 bg-sky-300/10"
                      : "border-white/10 bg-white/5 hover:border-white/18 hover:bg-white/8"
                  }`}
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-sky-100">
                    {hotspot.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
                    {hotspot.title}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/12 bg-slate-950/30 p-4 text-xs leading-6 text-slate-400">
            This shell is the architectural piece we needed. Once real turntable frames or a 3D model arrive, we only swap the rendering/input layer — the mode navigation, hotspot panel, and information flow already exist.
          </div>
        </div>
      </div>
    </div>
  );
}
