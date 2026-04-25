"use client";

import { motion } from "framer-motion";
import { SiteData } from "@/types/site";

type Props = {
  data: SiteData["trustBar"];
};

export default function TrustBar({ data }: Props){


  return (
    <section className="border-y border-brand-navy/5 bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-xs font-bold text-brand-slate uppercase tracking-[0.2em] mb-10">
          {data.badge}
        </p>

        {/* CAROUSEL WRAPPER */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...data.items, ...data.items].map((item, i) => (
              <span
                key={i}
                className="text-2xl font-bold text-brand-navy opacity-50 hover:opacity-100 transition"
              >
                {item.name}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}