"use client";

import { SiteData } from "@/types/site";

type Props = {
  data: SiteData["reviewsSection"];
};

export default function GoogleReviews({ data }: Props) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-black">{data.title}</h2>
        <p className="text-sm opacity-70">{data.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {data.staticReviews.map((r) => (
            <div key={r.id} className="p-6 border rounded-xl">
              <p className="text-sm mb-3">&ldquo;{r.text}&quot;</p>
              <p className="text-xs font-bold">{r.author}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}