"use client";

import { useState } from "react";
import { PoundSterling, Wallet } from "lucide-react";
import siteData from "@/config/siteData";

export default function SalaryCalculator() {
  const { salaryCalculator: data } = siteData;

  const [gross, setGross] = useState(data.inputs.defaultGross);

  const calculateNet = (amt: number) => {
    const taxConfig = data.ukTax;

    const taxable = Math.max(0, amt - taxConfig.personalAllowance);

    const tax =
      taxable > taxConfig.basicRateLimit
        ? taxConfig.basicRateLimit * taxConfig.basicRate +
          (taxable - taxConfig.basicRateLimit) * taxConfig.higherRate
        : taxable * taxConfig.basicRate;

    const ni =
      amt > taxConfig.niThreshold
        ? (amt - taxConfig.niThreshold) * taxConfig.niRate
        : 0;

    return amt - tax - ni;
  };

  const net = calculateNet(gross);

  return (
    <div
      id="salary-calc"
      className="bg-white p-8 md:p-12 rounded-4xl border border-brand-navy/5 shadow-xl"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-brand-gold/10 p-3 rounded-xl text-brand-gold">
          <PoundSterling size={24} />
        </div>

        <h3 className="text-2xl font-black text-brand-navy">
          {data.title}
        </h3>
      </div>

      <div className="space-y-10">

        {/* SLIDER */}
        <div>
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-brand-slate mb-4">
            Annual Gross Pay
            <span>£{gross.toLocaleString()}</span>
          </div>

          <input
            type="range"
            min={data.inputs.min}
            max={data.inputs.max}
            step={data.inputs.step}
            value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            className="w-full h-2 bg-brand-light rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
        </div>

        {/* RESULTS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-brand-light p-6 rounded-2xl">
            <p className="text-[10px] font-bold text-brand-slate uppercase mb-1">
              Monthly Take-Home
            </p>

            <p className="text-3xl font-black text-brand-navy underline decoration-brand-gold decoration-4">
              £{Math.round(net / 12).toLocaleString()}
            </p>
          </div>

          <div className="bg-brand-navy p-6 rounded-2xl text-white">
            <div className="flex items-center gap-2 mb-2 text-brand-gold uppercase font-bold text-[10px]">
              <Wallet size={12} /> {data.tip.title}
            </div>

            <p className="text-xs leading-relaxed opacity-80">
              {data.tip.text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}