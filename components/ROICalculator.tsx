"use client";

import { useState } from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import siteData from "@/config/siteData";

export default function ROICalculator() {
  const { roiCalculator: data } = siteData;

  const [turnover, setTurnover] = useState(
    data.inputs.defaultValue
  );

  // 🔥 FULLY CONFIG DRIVEN CALCULATION
  const totalValue =
    turnover * data.assumptions.taxSavingRate +
    data.assumptions.hoursSaved * data.assumptions.hourlyRate;

  return (
    <div id="roi-calc" className="bg-brand-navy text-white p-8 md:p-12 rounded-4xl shadow-2xl">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-10">
        <TrendingUp className="text-brand-gold" size={28} />
        <h3 className="text-2xl font-black tracking-tight">
          {data.title}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* INPUT SECTION */}
        <div className="space-y-6">

          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            {data.inputs.label}
          </label>

          <input
            type="number"
            value={turnover}
            onChange={(e) => setTurnover(Number(e.target.value))}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl font-bold text-xl outline-none focus:border-brand-gold transition"
          />

          <div className="space-y-3">
            {data.benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs opacity-70"
              >
                <CheckCircle2 size={14} className="text-brand-gold" />
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* RESULT BOX */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">

          <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">
            {data.resultLabel}
          </p>

          <p className="text-5xl font-black">
            £{totalValue.toLocaleString()}
          </p>

          <p className="mt-4 text-[10px] opacity-40 uppercase">
            {data.resultSubtext}
          </p>

        </div>

      </div>
    </div>
  );
}