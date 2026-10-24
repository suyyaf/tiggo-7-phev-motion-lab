import type { Metadata } from "next";

import ChapterPage from "@/app/components/chapter-page";
import { showcaseModes } from "@/app/lib/showcase-data";

export const metadata: Metadata = {
  title: "Roadtrip | Tiggo 7 PHEV Motion Lab",
  description:
    "Local-flavoured roadtrip chapter for the Tiggo 7 PHEV motion-first showcase.",
};

const mode = showcaseModes.find((item) => item.id === "local")!;

const roadtripCards = [
  {
    title: "Weekday EV rhythm",
    text: "City errands, school runs, and short daily routes framed as quiet electric-first moments.",
  },
  {
    title: "Balik kampung mode",
    text: "Long-distance family comfort, range confidence, and a more local storytelling tone.",
  },
  {
    title: "Friendly copy system",
    text: "This is the route where BM or mixed BM-English flavour can become part of the visual identity.",
  },
];

export default function RoadtripPage() {
  return (
    <ChapterPage
      badge="Chapter 03 · roadtrip"
      title={mode.title}
      description={mode.summary}
      accentTitle={mode.heading}
      accentBody={mode.body}
      atmosphere={mode.atmosphere}
      palette={mode.palette}
      stats={mode.stats}
      bullets={mode.bullets}
      sectionTitle="Local storytelling lane"
      sectionBody="This chapter proves the project can feel more like your taste and less like a generic imported tech site. It holds the family-roadtrip stories, local tone, and warmer palette without losing the premium shell."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {roadtripCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
          </div>
        ))}
      </div>
    </ChapterPage>
  );
}
