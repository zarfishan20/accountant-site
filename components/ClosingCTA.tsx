"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import siteData from "@/config/siteData";

export default function ClosingCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-navy px-6 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-white/10" />
      <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative mx-auto max-w-3xl text-center">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">{siteData.businessName}</p>
        <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Let’s make the numbers work for your business.</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65">This sample layout shows how a clear, confident call to action can guide visitors towards the services that matter to them.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/#services" className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold text-brand-navy transition hover:bg-white">Explore services <ArrowUpRight size={17}/></Link>
          <Link href="/#calculators" className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold">Try the calculators</Link>
        </div>
      </motion.div>
    </section>
  );
}
