import Link from "next/link";

type Item = { href: string; label: string };

type ChapterNextNavProps = {
  previous?: Item;
  next?: Item;
};

export default function ChapterNextNav({ previous, next }: ChapterNextNavProps) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <div>
        {previous ? (
          <Link
            href={previous.href}
            className="group flex h-full min-h-[96px] flex-col justify-center rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Previous chapter</span>
            <span className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{previous.label}</span>
          </Link>
        ) : null}
      </div>
      <div>
        {next ? (
          <Link
            href={next.href}
            className="group flex h-full min-h-[96px] flex-col justify-center rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-right transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Next chapter</span>
            <span className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{next.label}</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
