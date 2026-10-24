"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type CarColor = {
  name: string;
  tone: string;
  accent: string;
  image: string;
  note: string;
};

type Direction = {
  id: string;
  label: string;
  title: string;
  summary: string;
  points: string[];
};

const carColors: CarColor[] = [
  {
    name: "Khaki White",
    tone: "#e7ebf5",
    accent: "#9dc2ff",
    image:
      "https://cheryofficial.com.my/wp-content/uploads/2025/11/tiggo-7-phev-white.png",
    note: "Cleanest proportions. Best for premium hero work.",
  },
  {
    name: "Phantom Grey",
    tone: "#727b87",
    accent: "#7ef0db",
    image:
      "https://cheryofficial.com.my/wp-content/uploads/2025/11/tiggo-7-phev-grey.png",
    note: "Most practical mood. Better for tech-forward darker scenes.",
  },
  {
    name: "Bloodstone Red",
    tone: "#a7122b",
    accent: "#ff74b2",
    image:
      "https://cheryofficial.com.my/wp-content/uploads/2025/11/tiggo-7-phev-red.png",
    note: "Best for poster energy and high-drama campaign sections.",
  },
];

const stats = [
  { value: "RM129,400", label: "Malaysia listed price" },
  { value: "1200 km", label: "claimed combined range" },
  { value: "279 PS", label: "combined power output" },
  { value: "365 Nm", label: "combined torque" },
  { value: "19 mins", label: "DC 30–80% charge" },
  { value: "18.3 kWh", label: "battery capacity" },
  { value: "24.6”", label: "integrated dual display" },
  { value: "540°", label: "HD panoramic camera" },
];

const directions: Direction[] = [
  {
    id: "premium",
    label: "01",
    title: "Aura Pulse",
    summary:
      "A premium showroom direction with careful glow, strong type, and expensive-feeling motion.",
    points: [
      "Best main homepage candidate",
      "Lets the car feel premium without becoming sterile",
      "Strong fit for color-switching and spec reveals",
    ],
  },
  {
    id: "product",
    label: "02",
    title: "Family Utility",
    summary:
      "A more product-smart chapter focused on charging, interior, camera, and real comparison-friendly information.",
    points: [
      "Useful, not only decorative",
      "Airbnb-style motion principle",
      "Good for grounded product storytelling",
    ],
  },
  {
    id: "future",
    label: "03",
    title: "Night Drive",
    summary:
      "A darker, futuristic cockpit language leaning into the dual screen, ambient lighting, and hybrid system.",
    points: [
      "Best for dashboard mode",
      "Good place to flex motion harder",
      "Needs readability discipline",
    ],
  },
  {
    id: "playful",
    label: "04",
    title: "Jom Balik Kampung",
    summary:
      "A warmer, friendlier, slightly more Malaysian tone that still keeps a premium backbone.",
    points: [
      "More local flavor and character",
      "Allows BM copy later",
      "Best used as a chapter, not the whole site",
    ],
  },
  {
    id: "dashboard",
    label: "05",
    title: "Hybrid Command",
    summary:
      "A product UI chapter that behaves like the vehicle’s brain: drive modes, power flow, battery, camera, comfort.",
    points: [
      "Shows actual UI skill",
      "Great for EV / HEV / Sport demos",
      "Feels like an app, not just marketing",
    ],
  },
  {
    id: "campaign",
    label: "06",
    title: "Motion Posters",
    summary:
      "The loud, cinematic, social-friendly campaign mode with full-bleed typography and high-energy scenes.",
    points: [
      "Best wow-factor section",
      "Good place for daring transitions",
      "Should stay contained, not site-wide",
    ],
  },
];

const chapterFlow = [
  {
    step: "01 HOME",
    text: "A flagship hero with color switching, motion-first stats, and a pseudo 360 car stage.",
  },
  {
    step: "02 PREMIUM",
    text: "The polished launch page that sells the emotional first impression.",
  },
  {
    step: "03 PRODUCT",
    text: "Charging, safety, interior, ambient lights, dual screen, and family practicality in a cleaner product format.",
  },
  {
    step: "04 FUTURE",
    text: "Dashboard chapter with EV / HEV / Sport interactions and darker cockpit visuals.",
  },
  {
    step: "05 PLAYFUL",
    text: "More expressive poster/campaign chapter with bolder typography and color.",
  },
  {
    step: "06 MOTION LAB",
    text: "Component proof: buttons, chips, toggles, transitions, and interaction polish.",
  },
];

const componentIdeas = [
  {
    title: "Tactile buttons",
    text: "Hover lift, active compression, clear loading and success states.",
  },
  {
    title: "Drive mode toggle",
    text: "EV / HEV / Sport should feel physical, not like a plain form control.",
  },
  {
    title: "Scene chips",
    text: "Fast jumps between charging, camera, interior, safety, and colorways.",
  },
];

export default function Home() {
  const [activeColor, setActiveColor] = useState<CarColor>(carColors[0]);
  const [tilt, setTilt] = useState(0);
  const [evPriority, setEvPriority] = useState(true);

  const carTransform = useMemo(() => {
    return {
      transform: `perspective(1200px) rotateY(${tilt}deg) rotateX(${Math.abs(tilt) * 0.1}deg) translateY(${Math.abs(tilt) * -0.25}px)`,
      filter: `drop-shadow(0 40px 44px rgba(0,0,0,.45)) drop-shadow(0 0 42px ${activeColor.accent}33)`,
    };
  }, [activeColor.accent, tilt]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,90,200,0.10),transparent_22%),linear-gradient(180deg,#08111e_0%,#060c16_42%,#050911_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_120px),repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_120px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_80%)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/60 px-5 py-4 backdrop-blur-xl md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-100 uppercase">
            <span className="h-3.5 w-3.5 rounded-full bg-[conic-gradient(from_180deg,#35f2d2,#75a8ff,#ff5ac8,#ffc14d,#35f2d2)] shadow-[0_0_24px_rgba(117,168,255,0.65)]" />
            Tiggo 7 PHEV Motion Lab
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
            {[
              ["Directions", "#directions"],
              ["Flow", "#flow"],
              ["Components", "#components"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/8 px-3 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl gap-8 px-5 py-8 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
            Recommendation path chosen · Next.js + Tailwind + Framer Motion
          </div>
          <h1 className="max-w-[10ch] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
            <span className="bg-[linear-gradient(90deg,#ffffff_0%,#9dc2ff_45%,#69ffe8_100%)] bg-clip-text text-transparent">
              Tiggo 7 PHEV
            </span>{" "}
            as a full capability showcase.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            You wanted the big version: one flagship homepage, then a tour across multiple design modes. This v1 is the React-based foundation for that idea — with real structure now, not a one-off HTML toy.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Premium showroom first impression",
              "Product-smart chapter structure",
              "Futuristic cockpit mood section",
              "Playful poster energy without losing control",
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
            {stats.map((stat, index) => (
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
                Still a pseudo 360 mood stage for now. Enough to prove color switching, motion posture, and premium hero choreography.
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
                key={activeColor.name}
                initial={{ opacity: 0.25, scale: 0.98 }}
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
                    Current mood: {activeColor.name}
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    {activeColor.note} This is already enough to test premium launch energy before we commit to a deeper 360 system or real 3D chapter.
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

      <section id="directions" className="mx-auto max-w-7xl px-5 pb-6 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
                6 directions in one system
              </div>
              <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Main page first, then we travel across the other styles instead of choosing too early.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400 md:text-base">
              That keeps the site ambitious without becoming random. The homepage sells the dream. The later chapters prove the range.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {directions.map((direction, index) => (
              <motion.article
                key={direction.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.45 }}
                className="rounded-[1.75rem] border border-white/9 bg-slate-950/30 p-5 transition hover:-translate-y-1.5 hover:border-sky-300/30"
              >
                <div className="mb-4 inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {direction.label}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {direction.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {direction.summary}
                </p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-200">
                  {direction.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[linear-gradient(180deg,#35f2d2,#75a8ff)] shadow-[0_0_16px_rgba(117,168,255,0.7)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="mx-auto max-w-7xl px-5 pb-6 md:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
            <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
              Site flow
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              One flagship homepage, then a guided chapter tour.
            </h2>
            <div className="mt-7 grid gap-3">
              {chapterFlow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="grid gap-3 rounded-3xl border border-white/8 bg-slate-950/30 p-4 md:grid-cols-[88px_1fr]"
                >
                  <div className="text-xs font-semibold tracking-[0.18em] text-sky-200 uppercase">
                    {item.step}
                  </div>
                  <div className="text-sm leading-6 text-slate-300">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
            <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
              Real interactivity
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-white md:text-3xl">
              Small motion matters too.
            </h2>
            <div className="mt-6 grid gap-4">
              <button className="rounded-2xl border border-sky-300/30 bg-[linear-gradient(135deg,rgba(79,124,255,0.24),rgba(53,242,210,0.20))] px-4 py-3 text-left text-sm font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.26)]">
                Book test drive
              </button>

              <div className="rounded-3xl border border-white/8 bg-slate-950/30 p-4">
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
                  {[
                    ["Eco", true],
                    ["Normal", false],
                    ["Sport", false],
                  ].map(([label, active]) => (
                    <div
                      key={String(label)}
                      className={`rounded-xl px-3 py-2 text-center ${
                        active
                          ? "bg-[linear-gradient(135deg,rgba(79,124,255,0.24),rgba(53,242,210,0.18))] text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
                Motion kit direction
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                This stack lets us go beyond one HTML artifact.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
              We can keep the shell in Next.js, choreograph interactions with Framer Motion, and later bring in React Three Fiber only where it truly earns its place — like a real 360 or cinematic feature chapter.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {componentIdeas.map((item) => (
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

          <div className="mt-8 rounded-[1.8rem] border border-dashed border-white/12 bg-slate-950/25 p-5 text-sm leading-7 text-slate-300 md:p-6">
            <strong className="text-white">Next upgrades:</strong> real navigation between chapters, interior hotspot scenes, stronger color-adaptive theming, and a proper 360 system when we have sprite frames or 3D assets.
          </div>
        </div>
      </section>
    </main>
  );
}
