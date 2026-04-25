"use client";

import { Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiteData } from "@/types/site";

type Props = {
  data: SiteData["footer"];
};

export default function Footer({ data }: Props) {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 mb-16">

        {/* Bio */}
        <div>
          <h3 className="text-brand-gold font-black text-xl mb-6 tracking-tighter">
            {data.businessName}
          </h3>
          <p className="text-sm text-brand-light/50 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">
            {data.contactTitle}
          </h4>

          <div className="flex items-start gap-3 text-sm text-brand-light/80">
            <MapPin size={18} className="text-brand-gold shrink-0" />
            <p>{data.address}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-brand-light/80">
            <Mail size={18} className="text-brand-gold" />
            <a
              href={`mailto:${data.email}`}
              className="hover:text-brand-gold transition"
            >
              {data.email}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">
            {data.hoursTitle}
          </h4>

          <ul className="space-y-3 text-sm text-brand-light/80">
            {data.hours.map((item, index) => (
              <li
                key={index}
                className={`flex justify-between pb-2 ${
                  item.closed ? "opacity-40" : "border-b border-white/5"
                }`}
              >
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">

        <p>
          © {data.year} {data.businessName} •{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
        </p>

        <a
          href={data.creditLink}
          target="_blank"
          className="flex items-center gap-1 hover:text-brand-gold transition font-bold"
        >
          {data.creditText} <ExternalLink size={10} />
        </a>

      </div>

    </footer>
  );
}