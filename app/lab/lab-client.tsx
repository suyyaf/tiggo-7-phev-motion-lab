"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import ChapterPage from "@/app/components/chapter-page";
import HeroStage3D from "@/app/components/hero-stage-3d";
import { carColors, microInteractions, showcaseModes, threeDPrep } from "@/app/lib/showcase-data";

const mode = showcaseModes.find((item) => item.id === "lab")!;

export default function LabClientPage() {
  const [evPriority, setEvPriority] = useState(true);
  const [driveMode, setDriveMode] = useState<"Eco" | "Normal" | "Sport">("Eco");

  return (
    <ChapterPage
      badge="Chapter 04 · lab"
      title={mode.title}
      description={mode.summary}
      accentTitle={mode.heading}
      accentBody={mode.body}
      atmosphere={mode.atmosphere}
      palette={mode.palette}
      stats={mode.stats}
      bullets={mode.bullets}
      sectionTitle="Interaction proof"
      sectionBody="This chapter is the systems proof. It shows the project can support component choreography, 3D prep, and the controls that make the whole showcase feel like a real UI system instead of only a polished landing page."
      vibe="lab"
    >
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-white/9 bg-slate-950/30 p-5">
            <div className="mb-4 text-sm font-medium text-white">Interactive controls</div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-2xl border border-sky-300/30 bg-[linear-gradient(135deg,rgba(79,124,255,0.24),rgba(53,242,210,0.20))] px-4 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.26)]">
                Book test drive
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white transition hover:-translate-y-1 hover:bg-white/10">
                Compare colours
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/9 bg-slate-950/30 p-5">
            <div className="mb-3 flex items-center justify-between gap-3 text-sm text-white">
              <span>EV priority</span>
              <button
                onClick={() => setEvPriority((value) => !value)}
                className={`relative h-10 w-[72px] rounded-full border border-white/10 p-1 transition ${
                  evPriority
                    ? "bg-[linear-gradient(90deg,rgba(79,124,255,0.72),rgba(53,242,210,0.55))]"
                    : "bg-white/8"
                }`}
                aria-pressed={evPriority}
              >
                <motion.span
                  animate={{ x: evPriority ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="block h-8 w-8 rounded-full bg-[linear-gradient(180deg,#ffffff,#cfd9f2)]"
                />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/8 bg-white/5 p-2 text-sm">
              {(["Eco", "Normal", "Sport"] as const).map((label) => {
                const active = driveMode === label;
                return (
                  <button
                    key={label}
                    onClick={() => setDriveMode(label)}
                    className={`rounded-xl px-3 py-2 text-center transition ${
                      active
                        ? "bg-[linear-gradient(135deg,rgba(79,124,255,0.24),rgba(53,242,210,0.18))] text-white"
                        : "text-slate-400 hover:bg-white/6 hover:text-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {microInteractions.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/9 bg-slate-950/30 p-5"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <HeroStage3D accent={carColors[0].accent} modeTitle={mode.title} />
        <div className="rounded-[1.75rem] border border-white/9 bg-slate-950/30 p-5">
          <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-100">
            3D / 360 prep
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
            We do have real 3D UI capability now.
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
            {threeDPrep.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[linear-gradient(180deg,#35f2d2,#75a8ff)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChapterPage>
  );
}
