import Link from "next/link";
import type { Metadata } from "next";

import ChapterPage from "@/app/components/chapter-page";
import AssetHeroCard from "@/app/components/asset-hero-card";
import ChapterNextNav from "@/app/components/chapter-next-nav";
import { chapterCards, featureColumns, heroStats, showcaseModes } from "@/app/lib/showcase-data";

export const metadata: Metadata = {
  title: "Showroom | Tiggo 7 PHEV Motion Lab",
  description:
    "Premium showroom chapter for the Tiggo 7 PHEV motion-first showcase.",
};

const mode = showcaseModes.find((item) => item.id === "premium")!;

export default function ShowroomPage() {
  return (
    <ChapterPage
      badge="Chapter 01 · premium showroom"
      title={mode.title}
      description={mode.summary}
      accentTitle={mode.heading}
      accentBody={mode.body}
      atmosphere={mode.atmosphere}
      palette={mode.palette}
      stats={heroStats}
      bullets={mode.bullets}
      sectionTitle="Showroom gallery logic"
      sectionBody="This route is where the flagship polished version grows up: stronger prestige framing, cleaner visual hierarchy, and room for the eventual real 360 or hotspot reveal without forcing the whole site into one mood."
      vibe="showroom"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {chapterCards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-5 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-sky-200">
              {card.subtitle}
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{card.text}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {featureColumns.map((column) => (
          <div
            key={column.title}
            className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
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

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <AssetHeroCard
          src="/assets/tiggo/showroom-aura.svg"
          title="Showroom aura field"
          caption="A generated premium background asset for launch-style sections, hero frames, and polished chapter transitions."
        />
        <AssetHeroCard
          src="/assets/tiggo/cockpit-hud.svg"
          title="Camera + cockpit blend"
          caption="Useful when the premium chapter needs a subtle tech accent without becoming fully dashboard-like."
        />
      </div>

      <ChapterNextNav next={{ href: '/cockpit', label: 'Night Drive' }} />
    </ChapterPage>
  );
}
