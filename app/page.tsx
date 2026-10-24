"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import HeroStage3D from "./components/hero-stage-3d";
import TopNav from "./components/top-nav";
import {
  carColors,
  chapterCards,
  featureColumns,
  heroStats,
  microInteractions,
  showcaseModes,
  threeDPrep,
  type CarColor,
  type Mode,
} from "./lib/showcase-data";

const modeButtonClasses =
  "group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition duration-300";

export default function Home() {
  const [activeColor, setActiveColor] = useState<CarColor>(carColors[0]);
  const [activeMode, setActiveMode] = useState<Mode>(showcaseModes[0]);
  const [tilt, setTilt] = useState(0);
  const [evPriority, setEvPriority] = useState(true);
  const [activeDriveMode, setActiveDriveMode] = useState<"Eco" | "Normal" | "Sport">(
    "Eco",
  );

  const carTransform = useMemo(() => {
    return {
      transform: `perspective(1200px) rotateY(${tilt}deg) rotateX(${Math.abs(tilt) * 0.1}deg) translateY(${Math.abs(tilt) * -0.22}px)`,
      filter: `drop-shadow(0 40px 44px rgba(0,0,0,.45)) drop-shadow(0 0 42px ${activeColor.accent}33)`,
    };
  }, [activeColor.accent, tilt]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,90,200,0.10),transparent_22%),linear-gradient(180deg,#08111e_0%,#060c16_42%,#050911_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_120px),repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_120px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_80%)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/60 px-5 py-4 backdrop-blur-xl md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">
            <span className="h-3.5 w-3.5 rounded-full bg-[conic-gradient(from_180deg,#35f2d2,#75a8ff,#ff5ac8,#ffc14d,#35f2d2)] shadow-[0_0_24px_rgba(117,168,255,0.65)]" />
            Tiggo 7 PHEV Motion Lab
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
            {[
              ["Modes", "#modes"],
              ["Chapters", "#chapters"],
              ["Lab", "#lab"],
              ["Deploy", "https://tiggo-7-phev-motion-lab.vercel.app"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/8 px-3 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl gap-8 px-5 py-8 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
            Flagship surface · Decide / Learn · premium + punchy
          </div>
          <h1 className="max-w-[10ch] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
            <span className="bg-[linear-gradient(90deg,#ffffff_0%,#9dc2ff_45%,#69ffe8_100%)] bg-clip-text text-transparent">
              Tiggo 7 PHEV
            </span>{" "}
            with one strong thesis, then five more ways to flex.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            V2 stops feeling like a nice prototype and starts feeling like a real showcase system: one canonical homepage, richer chapter logic, sharper interaction language, and clearer separation between premium, product, futuristic, local, and campaign energy.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "One flagship home before the experiments",
              "Colorful without drifting into random Dribbble noise",
              "Product UI proof, not just hero glamour",
              "Built in a stack that can grow into real chapters and 3D later",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-slate-950/30 px-4 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.05, duration: 0.45 }}
                className="rounded-3xl border border-white/8 bg-slate-950/35 px-4 py-5 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-slate-900/55"
              >
                <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,30,58,0.88),rgba(7,11,20,0.86))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(117,168,255,0.52),transparent_34%),radial-gradient(circle_at_68%_18%,rgba(255,90,200,0.24),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(53,242,210,0.18),transparent_34%)]" />

          <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-sm">
              <h2 className="text-2xl font-semibold tracking-[-0.05em] text-white md:text-3xl">
                Hero concept viewer
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Still pseudo 360, but the role is clearer now: this is the concept viewer that proves hero rhythm, colorway changes, and launch-page energy before the real turntable or 3D model lands.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-sky-100">
              {[
                "540° camera",
                "24.6” dual display",
                "64-color ambient light",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/6 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-6 grid gap-5">
            <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/20">
              <div className="absolute h-[24rem] w-[24rem] rounded-full border border-white/8" />
              <div className="absolute h-[30rem] w-[30rem] rounded-full border border-dashed border-white/8" />
              <div className="absolute bottom-10 h-16 w-[70%] rounded-full bg-sky-300/25 blur-2xl" />

              <motion.div
                key={`${activeColor.name}-${activeMode.id}`}
                initial={{ opacity: 0.2, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-[34rem] px-4"
                style={carTransform}
              >
                <Image
                  src={activeColor.image}
                  alt={`Chery Tiggo 7 PHEV in ${activeColor.name}`}
                  width={1200}
                  height={640}
                  priority
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </motion.div>
            </div>

            <div className="rounded-[1.7rem] border border-white/8 bg-slate-950/40 p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <div className="text-sm font-medium text-white">
                    Current mood: {activeColor.name} · {activeMode.title}
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    {activeColor.note} {activeMode.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 px-3 py-2 text-xs text-slate-300">
                  Tilt: {tilt}°
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {carColors.map((color) => {
                  const isActive = color.name === activeColor.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setActiveColor(color)}
                      className={`grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-sky-300/40 bg-sky-300/12"
                          : "border-white/8 bg-white/5 hover:border-white/18 hover:bg-white/8"
                      }`}
                    >
                      <span
                        className="h-4 w-4 rounded-full border-2 border-white/70 shadow-[0_0_0_4px_rgba(255,255,255,0.05)]"
                        style={{ background: color.tone }}
                      />
                      <span>
                        <span className="block text-sm font-medium text-white">
                          {color.name}
                        </span>
                        <span className="block text-xs text-slate-400">
                          {color.note}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-400">
                  Pseudo 360 tilt
                </label>
                <input
                  type="range"
                  min={-24}
                  max={24}
                  value={tilt}
                  onChange={(event) => setTilt(Number(event.target.value))}
                  className="w-full accent-sky-300"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="modes" className="mx-auto max-w-7xl px-5 pb-6 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
                Guided showcase modes
              </div>
              <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Lead with one flagship homepage, then let the other directions prove the range.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400 md:text-base">
              This stops the project from becoming ten equal-weight landing pages. One identity leads. The rest become chapters, moods, and product muscles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {showcaseModes.map((mode) => {
                const active = mode.id === activeMode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode)}
                    className={`${modeButtonClasses} ${
                      active
                        ? "border-sky-300/35 bg-sky-300/10"
                        : "border-white/8 bg-slate-950/25 hover:border-white/18 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-sky-100">
                          {mode.label} · {mode.surface}
                        </div>
                        <div className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-white">
                          {mode.title}
                        </div>
                      </div>
                      <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {mode.posture}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{mode.summary}</p>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden rounded-[1.9rem] border border-white/10 p-5 md:p-6"
                style={{ background: activeMode.gradient }}
              >
                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                  <div>
                    <div className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-100">
                      {activeMode.atmosphere}
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                      {activeMode.heading}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200/86 md:text-base">
                      {activeMode.body}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-100">
                      <span className="rounded-full border border-white/12 bg-black/20 px-3 py-2">
                        posture · {activeMode.posture}
                      </span>
                      <span className="rounded-full border border-white/12 bg-black/20 px-3 py-2">
                        palette · {activeMode.palette}
                      </span>
                    </div>

                    <button className="mt-6 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-white/14">
                      {activeMode.cta}
                    </button>
                  </div>

                  <div className="grid gap-3">
                    {activeMode.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-3xl border border-white/10 bg-black/22 px-4 py-4"
                      >
                        <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-sm text-slate-200/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {activeMode.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4 text-sm text-slate-100"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="chapters" className="mx-auto max-w-7xl px-5 pb-6 md:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
            <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
              Chapter structure
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              From one strong home to a guided multi-chapter experience.
            </h2>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {chapterCards.map((card, index) => (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="rounded-[1.75rem] border border-white/8 bg-slate-950/30 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-sky-200">
                    {card.subtitle}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{card.text}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
            <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
              Feature anchors
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-white md:text-3xl">
              The facts that keep every chapter grounded.
            </h2>
            <div className="mt-6 grid gap-4">
              {featureColumns.map((column) => (
                <div
                  key={column.title}
                  className="rounded-[1.5rem] border border-white/8 bg-slate-950/30 p-4"
                >
                  <div className="text-sm font-medium text-white">{column.title}</div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[linear-gradient(180deg,#35f2d2,#75a8ff)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lab" className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
                Motion lab
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Capability is not only about the hero — it’s also about the controls.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
              The point of this stack is reuse: a shared shell, reusable motion patterns, and room for real 3D only when it genuinely improves the story.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
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
                    const active = activeDriveMode === label;
                    return (
                      <button
                        key={label}
                        onClick={() => setActiveDriveMode(label)}
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
            <HeroStage3D accent={activeColor.accent} modeTitle={activeMode.title} />
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

          <div className="mt-8 rounded-[1.8rem] border border-dashed border-white/12 bg-slate-950/25 p-5 text-sm leading-7 text-slate-300 md:p-6">
            <strong className="text-white">Next upgrades:</strong> real multi-route chapters, interior hotspot storytelling, cleaner chapter-to-chapter transitions, a genuine 360 frame system, and React Three Fiber only for the sections that truly earn spatial depth.
          </div>
        </div>
      </section>
    </main>
  );
}
