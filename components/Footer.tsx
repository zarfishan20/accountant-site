import { Mail, MapPin, ExternalLink } from "lucide-react";
import { SiteData } from "@/types/site";

type Props = { data: SiteData["footer"] };

export default function Footer({ data }: Props) {
  return (
    <footer className="bg-brand-navy pb-8 pt-16 text-white">
      <div className="mx-auto mb-14 grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div><h3 className="text-xl font-semibold tracking-tight text-white">{data.businessName}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-white/55">{data.description}</p></div>
        <div><h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">{data.contactTitle}</h4><div className="mt-6 space-y-4 text-sm text-white/70">
          {data.address && <div className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-brand-gold"/><p>{data.address}</p></div>}
          {data.email && <div className="flex items-center gap-3"><Mail size={17} className="shrink-0 text-brand-gold"/><a href={`mailto:${data.email}`} className="transition hover:text-brand-gold">{data.email}</a></div>}
          {!data.address && !data.email && <p>Contact details are added when this concept is customised for a firm.</p>}
        </div></div>
        <div><h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">{data.hoursTitle}</h4><ul className="mt-6 space-y-3 text-sm text-white/70">
          {data.hours.map((item) => <li key={item.day} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0"><span>{item.day}</span><span>{item.time}</span></li>)}
        </ul></div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-7 text-center text-[10px] uppercase tracking-[0.16em] text-white/40 md:flex-row md:text-left">
        <p>© {data.year} {data.businessName}. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span>Sample website concept · Illustrative content</span>
          <a href={data.creditLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-brand-gold">{data.creditText}<ExternalLink size={11}/></a>
        </div>
      </div>
    </footer>
  );
}
