import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/60 px-5 py-4 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100"
        >
          <span className="h-3.5 w-3.5 rounded-full bg-[conic-gradient(from_180deg,#35f2d2,#75a8ff,#ff5ac8,#ffc14d,#35f2d2)] shadow-[0_0_24px_rgba(117,168,255,0.65)]" />
          Tiggo 7 PHEV Motion Lab
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
          {[
            ["Home", "/"],
            ["Showroom", "/showroom"],
            ["Cockpit", "/cockpit"],
            ["Roadtrip", "/roadtrip"],
            ["Lab", "/lab"],
            ["Live", "https://tiggo-7-phev-motion-lab.vercel.app"],
          ].map(([label, href]) => {
            const external = href.startsWith("http");
            if (external) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/8 px-3 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-white/8 px-3 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
