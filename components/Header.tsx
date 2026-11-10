"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calculator, ChevronDown, Menu, X } from "lucide-react";
import siteData from "@/config/siteData";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setCalculatorsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-surface/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-brand-light"><Calculator size={19} strokeWidth={1.7} /></span>
          <span className="text-base font-semibold tracking-tight text-brand-navy md:text-lg">{siteData.businessName}</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-brand-slate transition hover:text-brand-gold">Home</Link>
          <Link href="/#services" className="text-sm text-brand-slate transition hover:text-brand-gold">Services</Link>
          <div className="relative">
            <button type="button" aria-expanded={calculatorsOpen} aria-controls="calculator-menu" onClick={() => setCalculatorsOpen((open) => !open)} className="flex items-center gap-1.5 text-sm text-brand-slate transition hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold">
              Calculators <ChevronDown size={15} className={calculatorsOpen ? "rotate-180 transition" : "transition"} />
            </button>
            {calculatorsOpen && <div id="calculator-menu" className="absolute left-0 top-full mt-4 w-56 rounded-2xl border border-brand-navy/10 bg-white p-2 shadow-xl">
              {siteData.nav.calculators.map((item) => <Link key={item.name} href={item.href} onClick={() => setCalculatorsOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-brand-slate transition hover:bg-brand-light hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-brand-gold">{item.name}</Link>)}
            </div>}
          </div>
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-gold hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold">Let’s talk <ArrowUpRight size={15} /></Link>
        </div>
        <button type="button" className="rounded-full p-2 text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold md:hidden" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen((open) => !open)}>
          {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      {isMobileMenuOpen && <div id="mobile-navigation" className="border-t border-brand-navy/10 bg-brand-surface px-6 pb-8 pt-5 md:hidden">
        <div className="flex flex-col gap-1">
          <Link href="/" onClick={closeMenu} className="rounded-xl px-3 py-3 text-lg text-brand-navy">Home</Link>
          <Link href="/#services" onClick={closeMenu} className="rounded-xl px-3 py-3 text-lg text-brand-navy">Services</Link>
          <p className="px-3 pb-1 pt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Calculators</p>
          {siteData.nav.calculators.map((item) => <Link key={item.name} href={item.href} onClick={closeMenu} className="rounded-xl px-3 py-3 text-base text-brand-slate">{item.name}</Link>)}
          <Link href="/#contact" onClick={closeMenu} className="mt-4 rounded-full bg-brand-navy px-5 py-4 text-center text-sm font-semibold text-white">Let’s talk</Link>
        </div>
      </div>}
    </header>
  );
}
