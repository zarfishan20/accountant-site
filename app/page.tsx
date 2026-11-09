import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import ClosingCTA from "@/components/ClosingCTA";
import SalaryCalculator from "@/components/SalaryCalculator";
import ROICalculator from "@/components/ROICalculator";
import siteData from "@/config/siteData";

export default function Home() {
  return (
    <main className="bg-brand-surface">
      <Hero data={siteData.hero} />
      <TrustBar data={siteData.trustBar} />
      <Services data={siteData.services} />

      <section id="calculators" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Useful tools</p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">Get a clearer picture of your numbers.</h2>
          <p className="mt-5 text-base leading-8 text-brand-slate">Explore these illustrative calculators to help you start planning. They are general estimates, not personalised tax or financial advice.</p>
        </div>
        <div className="grid items-start gap-7 lg:grid-cols-2">
          <SalaryCalculator />
          <ROICalculator />
        </div>
      </section>
      <ClosingCTA />
    </main>
  );
}