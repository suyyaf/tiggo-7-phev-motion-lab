import type { ReactNode } from "react";
import Link from "next/link";

import TopNav from "@/app/components/top-nav";

type ChapterPageProps = {
  badge: string;
  title: string;
  description: string;
  accentTitle: string;
  accentBody: string;
  atmosphere: string;
  palette: string;
  stats: { value: string; label: string }[];
  bullets: string[];
  sectionTitle: string;
  sectionBody: string;
  children?: ReactNode;
  vibe?: "showroom" | "cockpit" | "roadtrip" | "lab";
};

const vibeStyles = {
  showroom: {
    shell:
      "bg-[radial-gradient(circle_at_top_left,rgba(123,173,255,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_24%),linear-gradient(180deg,#09111d_0%,#060d18_42%,#050911_100%)]",
    accent:
      "bg-[linear-gradient(135deg,rgba(123,173,255,0.20),rgba(255,255,255,0.02)_42%,rgba(53,242,210,0.12))]",
    card: "bg-white/6",
  },
  cockpit: {
    shell:
      "bg-[radial-gradient(circle_at_top_left,rgba(0,170,255,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(144,104,255,0.16),transparent_24%),linear-gradient(180deg,#050814_0%,#060913_38%,#04070f_100%)]",
    accent:
      "bg-[linear-gradient(135deg,rgba(43,26,92,0.30),rgba(8,14,30,0.18)_40%,rgba(0,170,255,0.18))]",
    card: "bg-white/5",
  },
  roadtrip: {
    shell:
      "bg-[radial-gradient(circle_at_top_left,rgba(255,179,81,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(110,81,201,0.14),transparent_26%),linear-gradient(180deg,#120c14_0%,#0d0d1a_42%,#090811_100%)]",
    accent:
      "bg-[linear-gradient(135deg,rgba(255,170,76,0.22),rgba(171,78,154,0.10)_40%,rgba(69,122,255,0.12))]",
    card: "bg-white/6",
  },
  lab: {
    shell:
      "bg-[radial-gradient(circle_at_top_left,rgba(53,242,210,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(117,168,255,0.14),transparent_24%),linear-gradient(180deg,#07111f_0%,#060c16_42%,#050911_100%)]",
    accent:
      "bg-[linear-gradient(135deg,rgba(20,49,84,0.26),rgba(8,13,24,0.12)_40%,rgba(53,242,210,0.14))]",
    card: "bg-white/6",
  },
};

export default function ChapterPage({
  badge,
  title,
  description,
  accentTitle,
  accentBody,
  atmosphere,
  palette,
  stats,
  bullets,
  sectionTitle,
  sectionBody,
  children,
  vibe = "showroom",
}: ChapterPageProps) {
  const selected = vibeStyles[vibe];

  return (
    <main className={`min-h-screen overflow-x-hidden text-white ${selected.shell}`}>
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_120px),repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_120px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_80%)]" />
      <TopNav />

      <section className="relative mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={`rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10 ${selected.card}`}>
            <div className="mb-5 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
              {badge}
            </div>
            <h1 className="max-w-[11ch] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-100">
              <span className="rounded-full border border-white/12 bg-black/20 px-3 py-2">
                atmosphere · {atmosphere}
              </span>
              <span className="rounded-full border border-white/12 bg-black/20 px-3 py-2">
                palette · {palette}
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/8 bg-slate-950/35 px-4 py-5 transition hover:-translate-y-1 hover:border-white/16"
                >
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 ${selected.card} ${selected.accent}`}>
            <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
              Chapter focus
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
              {accentTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              {accentBody}
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-slate-200">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[linear-gradient(180deg,#35f2d2,#75a8ff)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-5 text-sm leading-6 text-slate-300">
              <div className="font-medium text-white">Explore the system</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  ["Back home", "/"],
                  ["Showroom", "/showroom"],
                  ["Cockpit", "/cockpit"],
                  ["Roadtrip", "/roadtrip"],
                  ["Lab", "/lab"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className={`rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 ${selected.card}`}>
          <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-sky-100">
            {sectionTitle}
          </div>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            {sectionBody}
          </p>
          <div className="mt-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
