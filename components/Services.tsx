"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, BookOpenCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SiteData } from "@/types/site";

type Props = { data: SiteData["services"] };
const icons = [BookOpenCheck, ShieldCheck, BarChart3];

export default function Services({ data }: Props) {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">What we do</p><h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-brand-navy md:text-5xl">{data.title}</h2></div>
          <p className="max-w-xl text-base leading-8 text-brand-slate md:justify-self-end">Practical financial support that helps you stay organised, understand your position and make decisions with confidence.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {data.items.map((item,index) => { const Icon=icons[index % icons.length]; return (
            <motion.article key={item.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:0.5,delay:index*0.08}} className="group flex min-h-[300px] flex-col rounded-[1.7rem] border border-brand-navy/10 bg-brand-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-xl hover:shadow-brand-navy/5 md:p-9">
              <div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold"><Icon size={22} strokeWidth={1.6}/></span><span className="text-xs tracking-[0.2em] text-brand-gold">0{index+1}</span></div>
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-brand-navy">{item.title}</h3><p className="mt-4 text-sm leading-7 text-brand-slate">{item.desc}</p>
              <Link href="/#contact" className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-navy transition group-hover:text-brand-gold">Find out more <ArrowUpRight size={15}/></Link>
            </motion.article>
          );})}
        </div>
      </div>
    </section>
  );
}