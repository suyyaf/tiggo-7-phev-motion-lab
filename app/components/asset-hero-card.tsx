import Image from "next/image";

type AssetHeroCardProps = {
  src: string;
  title: string;
  caption: string;
};

export default function AssetHeroCard({ src, title, caption }: AssetHeroCardProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
      <div className="relative aspect-[16/10] w-full">
        <Image src={src} alt={title} fill className="object-cover" unoptimized />
      </div>
      <div className="border-t border-white/8 p-5">
        <div className="text-xl font-semibold tracking-[-0.04em] text-white">{title}</div>
        <p className="mt-2 text-sm leading-6 text-slate-300">{caption}</p>
      </div>
    </div>
  );
}
