"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { SiteData } from "@/types/site";

type Props = { data: SiteData["hero"] };

export default function Hero({ data }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-brand-gold/20" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[25rem] w-[25rem] rounded-full border border-brand-gold/20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 md:grid-cols-[1.08fr_0.92fr] md:pb-32 md:pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />{data.badge}</span>
          <h1 className="mt-8 max-w-3xl text-[clamp(3.25rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-brand-navy">{data.titleTop}<span className="mt-1 block font-serif font-normal italic text-brand-gold">{data.titleHighlight}</span></h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-brand-slate md:text-lg">{data.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="group inline-flex items-center gap-3 rounded-full bg-brand-navy px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-navy/10 transition hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-navy">{data.cta}<ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            <Link href="/#services" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-brand-navy transition hover:text-brand-gold">Explore services <ArrowDown size={15} /></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-brand-navy/10 pt-6 text-xs text-brand-slate">
            {["Clear, practical advice", "Support for UK businesses", "Straightforward communication"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check size={14} className="text-brand-gold" />{item}</span>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[530px]">
          <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full border border-brand-gold/50 md:block" />
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy p-7 text-white shadow-2xl shadow-brand-navy/15 md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" /><div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/15 pb-6"><div><p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold">Your finances, in focus</p><p className="mt-2 text-xl font-medium tracking-tight">A better view of business</p></div><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-brand-gold">✳</span></div>
              <div className="py-9"><p className="text-xs text-white/55">A considered approach to</p><div className="mt-5 space-y-4">
                {[["01","Bookkeeping","Know where your business stands"],["02","Tax planning","Make informed decisions"],["03","Business insight","Plan your next move"]].map(([number,title,description]) => <div key={number} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0"><span className="pt-1 text-xs text-brand-gold">{number}</span><div><p className="text-lg font-medium">{title}</p><p className="mt-1 text-xs text-white/55">{description}</p></div></div>)}
              </div></div>
              <div className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4"><div><p className="text-[10px] uppercase tracking-[0.18em] text-white/50">The goal</p><p className="mt-1 text-sm font-medium">Confidence in every decision</p></div><span className="text-2xl text-brand-gold">↗</span></div>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-brand-slate/60">A clear view. A confident next step.</p>
        </motion.div>
      </div>
    </section>
  );
}