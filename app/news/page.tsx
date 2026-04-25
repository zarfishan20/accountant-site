"use client";

import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";



type NewsItem = {
  title: string;
  url: string;
  urlToImage?: string;
  source: { name: string };
  publishedAt?: string;
};

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tax-news")
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <section className="bg-brand-navy pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Newspaper size={12} /> Resource Hub
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Latest UK Tax <span className="text-brand-gold">&</span> Business News
          </h1>

          <p className="text-brand-light/50 text-sm leading-relaxed">
            Stay ahead of HMRC changes with real-time updates for UK entrepreneurs.
          </p>
        </div>
      </section>

      {/* News Feed */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        {loading ? (
          <p className="text-center py-20 text-slate-500">
            Loading latest news...
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item: NewsItem, i: number) => (
              <a
                key={i}
                href={`/news/${i}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-3xl border border-brand-navy/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all group block"
              >
                {/* Image */}
                {item.urlToImage && (
         <Image
  src={item.urlToImage || "/placeholder.jpg"}
  alt={item.title}
  width={800}
  height={450}
  unoptimized
/>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">
                    {item.source.name}
                  </span>

                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                    <Calendar size={12} />
                    {item.publishedAt
                      ? new Date(item.publishedAt).toLocaleDateString()
                      : new Date().toLocaleDateString()}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-widest text-brand-navy group-hover:gap-4 transition-all">
                  Read Full Article
                  <ArrowRight size={14} className="text-brand-gold" />
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-3xl mx-auto mt-24 px-6 text-center">
        <div className="p-12 bg-brand-navy rounded-4xl text-white">
          <h2 className="text-2xl font-black mb-4">
            Don&apos;t miss an HMRC deadline.
          </h2>

          <p className="text-brand-light/60 text-sm mb-8">
            Join our newsletter for monthly tax-saving tips delivered to your inbox.
          </p>

          <form className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-brand-gold transition text-white placeholder:text-white/30"
            />

            <button className="bg-brand-gold text-brand-navy font-black px-8 py-4 rounded-full hover:scale-105 transition-transform uppercase text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}