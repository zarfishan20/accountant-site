"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="py-32 bg-brand-surface border-t border-brand-text/10 px-6 text-brand-text">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-6 block">
            FlexiPay Systems
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-6 leading-tight tracking-tight">
            Let’s Handle Your Payroll & Bookkeeping
          </h2>

          <p className="text-brand-text/70 text-lg mb-12 max-w-lg mx-auto font-medium leading-relaxed">
            Focus on growing your business while we ensure your payroll, bookkeeping, and compliance are accurate, reliable, and stress-free.
          </p>

          <div className="flex justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-16 py-6 rounded-full font-black text-lg shadow-2xl shadow-brand-primary/20 transition-all"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </div>

          <p className="mt-10 text-[10px] font-bold text-brand-text/40 uppercase tracking-widest">
            Trusted by startups across the UK
          </p>
        </motion.div>
      </div>
    </section>
  );
}