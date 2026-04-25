"use client";

import { useState } from "react";
import { Calculator, ChevronDown, Menu, X, Lock } from "lucide-react";
import Link from "next/link";
import siteData from "@/config/siteData";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-brand-navy/5 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* --- LOGO --- */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-brand-navy tracking-tighter text-xl"
        >
          <Calculator className="text-brand-gold w-6 h-6" />
          <span>
            {siteData.businessName}
          </span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">

          {/* MAIN LINKS */}
          {siteData.nav.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-brand-navy hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* CALCULATORS */}
          <div
            className="relative group py-4"
            onMouseEnter={() => setIsCalcOpen(true)}
            onMouseLeave={() => setIsCalcOpen(false)}
          >
            <button className="flex items-center gap-1 text-brand-navy group-hover:text-brand-gold transition-colors">
              Calculators
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${
                  isCalcOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full -left-4 w-60 bg-white border border-brand-navy/5 shadow-2xl rounded-2xl py-3 transition-all duration-300 ${
                isCalcOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {siteData.nav.calculators.map((calc) => (
                <Link
                  key={calc.name}
                  href={calc.href}
                  onClick={() => setIsCalcOpen(false)}
                  className="block px-6 py-3 text-[10px] font-black text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors uppercase tracking-widest"
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* LOGIN */}
          <Link
            href={siteData.nav.loginUrl}
            target="_blank"
            className="flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all"
          >
            <Lock size={12} />
            <span className="mt-0.5">{siteData.nav.loginText}</span>
          </Link>
        </div>

        {/* --- MOBILE BUTTON --- */}
        <button
          className="md:hidden text-brand-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t fixed inset-x-0 top-20 bottom-0 z-40 p-8 flex flex-col gap-8 overflow-y-auto">

          {siteData.nav.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-black text-brand-navy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="space-y-6 pt-4 border-t">
            <p className="text-brand-gold font-black uppercase text-[10px]">
              Calculators
            </p>

            <div className="grid gap-6 pl-4 border-l-2 border-brand-gold/20">
              {siteData.nav.calculators.map((calc) => (
                <Link
                  key={calc.name}
                  href={calc.href}
                  className="text-xl font-bold text-brand-slate"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={siteData.nav.loginUrl}
            className="mt-auto bg-brand-navy text-white p-6 rounded-2xl text-center font-black flex justify-center items-center gap-3"
          >
            <Lock size={20} />
            {siteData.nav.loginText}
          </Link>
        </div>
      )}
    </nav>
  );
}