import type { Metadata } from "next";

import ChapterPage from "@/app/components/chapter-page";
import AssetHeroCard from "@/app/components/asset-hero-card";
import HeroStage3D from "@/app/components/hero-stage-3d";
import ChapterNextNav from "@/app/components/chapter-next-nav";
import { carColors, showcaseModes } from "@/app/lib/showcase-data";

export const metadata: Metadata = {
  title: "Cockpit | Tiggo 7 PHEV Motion Lab",
  description:
    "Futuristic cockpit chapter for the Tiggo 7 PHEV motion-first showcase.",
};

const mode = showcaseModes.find((item) => item.id === "future")!;

export default function CockpitPage() {
  return (
    <ChapterPage
      badge="Chapter 02 · cockpit"
      title={mode.title}
      description={mode.summary}
      accentTitle={mode.heading}
      accentBody={mode.body}
      atmosphere={mode.atmosphere}
      palette={mode.palette}
      stats={mode.stats}
      bullets={mode.bullets}
      sectionTitle="3D cockpit prep"
      sectionBody="This route is where spatial UI starts to matter. Even before a real car model arrives, the structure is ready for a dashboard-like 3D object, orbit controls, hotspot reveals, and future camera choreography."
      vibe="cockpit"
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <HeroStage3D accent={carColors[1].accent} modeTitle={mode.title} />
        <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
          <div className="text-xs uppercase tracking-[0.18em] text-sky-200">
            3D readiness
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            Ready for a real 360 or model-driven scene.
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
            <li>React Three Fiber is already installed and working.</li>
            <li>This route is the natural home for the future real 360 object.</li>
            <li>Next upgrade path: hotspot pins, dashboard overlays, and animated mode transitions.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <AssetHeroCard
          src="/assets/tiggo/cockpit-hud.svg"
          title="Cockpit HUD field"
          caption="A generated scene asset for dashboard-like overlays, drive-mode panels, and a more immersive tech-forward chapter mood."
        />
        <AssetHeroCard
          src="/assets/tiggo/lab-grid.svg"
          title="Systems grid"
          caption="Useful as a background or feature panel for future control surfaces, charging diagrams, and the 360 readiness layer."
        />
      </div>

      <ChapterNextNav previous={{ href: '/showroom', label: 'Aura Pulse' }} next={{ href: '/roadtrip', label: 'Jom Balik Kampung' }} />
    </ChapterPage>
  );
}
