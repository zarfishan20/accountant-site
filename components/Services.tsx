"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  PieChart,
  ArrowRight,
} from "lucide-react";
import { SiteData } from "@/types/site";

type Props = {
  data: SiteData["services"];
};

export default function Services({ data }: Props)   {
  

  // icon map (so config stays clean)
  const icons: Record<string, React.ReactNode> = {
    PieChart: <PieChart size={32} />,
    ShieldCheck: <ShieldCheck size={32} />,
    BarChart3: <BarChart3 size={32} />,
  };

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">

      <div className="text-center mb-20">
        <h2 className="text-4xl font-black text-brand-navy tracking-tight">
          {data.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {data.items.map((item, i) => (
          <ServiceCard
            key={item.title}
            icon={icons[item.icon]}
            title={item.title}
            desc={item.desc}
            delay={i * 0.1}
          />
        ))}

      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12 }}
      className="p-10 rounded-4xl border border-brand-navy/5 bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all group"
    >
      <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>

      <h3 className="text-2xl font-black mb-4 text-brand-navy">
        {title}
      </h3>

      <p className="text-brand-slate leading-relaxed text-sm font-medium">
        {desc}
      </p>

      <div className="mt-8 flex items-center gap-2 text-brand-gold font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Explore Service <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}