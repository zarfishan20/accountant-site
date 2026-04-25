"use client";

import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import ClosingCTA from '@/components/ClosingCTA';
import GoogleReviews from '../components/GoogleReviews';
import Accreditations from '@/components/Accreditations';
import siteData from '@/config/siteData';


const logos = [
  { src: "/logos/acca.png", alt: "ACCA" },
  { src: "/logos/icaew.png", alt: "ICAEW" },
  { src: "/logos/acas.png", alt: "ACAS" },
  { src: "/logos/xero.png", alt: "Xero" },
  { src: "/logos/sage.png", alt: "Sage" },
];


export default function Home() {
  return (
    /* Background set to your light grey #e2e2e2 */
    <main className=" bg-brand-surface">
   {/* Hero (loads immediately — no wrapper needed if already animated) */}
      <Hero data={siteData.hero} />
      <Accreditations logos={logos} />
      <Services data={siteData.services} />
      <TrustBar data={siteData.trustBar} />
      <GoogleReviews data={siteData.reviewsSection} />
      <ClosingCTA />

    </main>
  );
}