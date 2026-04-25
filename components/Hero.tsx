"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiteData } from "@/types/site";

type Props = {
  data: SiteData["hero"];
};
export default function Hero({ data }: Props)  {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase bg-brand-gold/10 px-3 py-1 rounded-full">
          {data.badge}
        </span>

        <h1 className="text-6xl md:text-8xl font-black text-brand-navy leading-[0.9] mt-6 mb-8 tracking-tighter">
          {data.titleTop} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-navy to-brand-gold">
            {data.titleHighlight}
          </span>
        </h1>

        <p className="text-lg text-brand-slate mb-10 max-w-md leading-relaxed font-medium">
          {data.subtitle}
        </p>

        <button className="group bg-brand-navy text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95">
          {data.cta}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block relative"
      >
        <div className="aspect-4/5 relative w-full h-full bg-brand-navy rounded-[3rem] border-2 border-brand-gold/20 overflow-hidden shadow-2xl">

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-brand-navy via-transparent to-brand-gold/10 z-10" />

          {/* Image */}
          {data.image ? (
            <Image
              src={data.image}
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <p className="absolute inset-0 flex items-center justify-center text-brand-gold font-bold italic text-center p-12 z-20 opacity-40">
              {data.imagePlaceholder ?? "Add image later"}
            </p>
          )}
        </div>
      </motion.div>

    </header>
  );
}