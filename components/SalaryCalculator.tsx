"use client";

import { useState } from "react";
import { PoundSterling, Wallet } from "lucide-react";
import siteData from "@/config/siteData";

export default function SalaryCalculator() {
  const { salaryCalculator: data } = siteData;
  const [gross, setGross] = useState(data.inputs.defaultGross);

  const calculateNet = (amount: number) => {
    const taxConfig = data.ukTax;
    const taxable = Math.max(0, amount - taxConfig.personalAllowance);
    const tax = taxable > taxConfig.basicRateLimit
      ? taxConfig.basicRateLimit * taxConfig.basicRate + (taxable - taxConfig.basicRateLimit) * taxConfig.higherRate
      : taxable * taxConfig.basicRate;
    const ni = amount > taxConfig.niThreshold
      ? (amount - taxConfig.niThreshold) * taxConfig.niRate
      : 0;
    return amount - tax - ni;
  };

  const net = calculateNet(gross);

  return (
    <div id="salary-calc" className="rounded-4xl border border-brand-navy/5 bg-white p-8 shadow-xl md:p-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-brand-gold/10 p-3 text-brand-gold"><PoundSterling size={24} /></div>
        <h3 className="text-2xl font-black text-brand-navy">{data.title}</h3>
      </div>

      <div className="space-y-10">
        <div>
          <div className="mb-4 flex justify-between gap-4 text-[10px] font-black uppercase tracking-widest text-brand-slate">
            <label htmlFor="annual-gross-pay">Annual gross pay</label>
            <output htmlFor="annual-gross-pay" className="text-sm tabular-nums text-brand-navy">£{gross.toLocaleString("en-GB")}</output>
          </div>
          <input
            id="annual-gross-pay"
            aria-label="Annual gross pay"
            type="range"
            min={data.inputs.min}
            max={data.inputs.max}
            step={data.inputs.step}
            value={gross}
            onChange={(event) => setGross(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-brand-light accent-brand-gold"
          />
          <div className="mt-2 flex justify-between text-[10px] text-brand-slate/70">
            <span>£{data.inputs.min.toLocaleString("en-GB")}</span>
            <span>£{data.inputs.max.toLocaleString("en-GB")}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-light p-6">
            <p className="mb-1 text-[10px] font-bold uppercase text-brand-slate">Estimated monthly take-home</p>
            <p aria-live="polite" className="text-3xl font-black text-brand-navy">£{Math.round(net / 12).toLocaleString("en-GB")}</p>
          </div>
          <div className="rounded-2xl bg-brand-navy p-6 text-white">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase text-brand-gold"><Wallet size={12} />{data.tip.title}</div>
            <p className="text-xs leading-relaxed opacity-80">{data.tip.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
