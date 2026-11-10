import { SiteData } from "@/types/site";
type Props = { data: SiteData["trustBar"] };

export default function TrustBar({ data }: Props) {
  return (
    <section className="border-y border-brand-navy/10 bg-brand-light py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-slate md:text-left">{data.badge}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {data.items.map((item) => <span key={item.name} className="text-sm font-semibold tracking-tight text-brand-navy/65">{item.name}</span>)}
        </div>
      </div>
    </section>
  );
}