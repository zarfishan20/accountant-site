"use client";

import { useState } from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import siteData from "@/config/siteData";

export default function ROICalculator() {
  const { roiCalculator: data } = siteData;
  const [turnover, setTurnover] = useState(data.inputs.defaultValue);
  const safeTurnover = Number.isFinite(turnover) ? Math.max(0, turnover) : 0;
  const totalValue = safeTurnover * data.assumptions.taxSavingRate
    + data.assumptions.hoursSaved * data.assumptions.hourlyRate;

  return (
    <div id="roi-calc" className="rounded-4xl bg-brand-navy p-8 text-white shadow-2xl md:p-12">
      <div className="mb-10 flex items-center gap-3">
        <TrendingUp className="text-brand-gold" size={28} />
        <h3 className="text-2xl font-black tracking-tight">{data.title}</h3>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <label htmlFor="annual-turnover" className="block text-[10px] font-bold uppercase tracking-widest text-brand-gold">{data.inputs.label}</label>
          <input
            id="annual-turnover"
            type="number"
            min="0"
            step="1000"
            inputMode="numeric"
            value={turnover}
            onChange={(event) => setTurnover(event.target.value === "" ? 0 : Number(event.target.value))}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-xl font-bold outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30"
          />
          <div className="space-y-3">
            {data.benefits.map((item) => <div key={item} className="flex items-center gap-2 text-xs opacity-70"><CheckCircle2 size={14} className="shrink-0 text-brand-gold" />{item}</div>)}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">{data.resultLabel}</p>
          <p aria-live="polite" className="text-4xl font-black tabular-nums sm:text-5xl">£{Math.round(totalValue).toLocaleString("en-GB")}</p>
          <p className="mt-4 text-[10px] leading-relaxed text-white/50">{data.resultSubtext}</p>
        </div>
      </div>
    </div>
  );
}
