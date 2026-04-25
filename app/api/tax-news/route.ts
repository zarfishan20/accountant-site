import { NextResponse } from "next/server";

type NewsArticle = {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt?: string;
  source: {
    name: string;
  };
};

type NewsApiResponse = {
  articles: NewsArticle[];
};

export async function GET() {
  const API_KEY = process.env.NEWS_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Missing NEWS_API_KEY" },
      { status: 500 }
    );
  }

  const url = `https://newsapi.org/v2/everything?q=HMRC&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }

  const data: NewsApiResponse = await res.json();

  // ✅ STRICT HMRC FILTER (ONLY HMRC CONTENT)
  const filtered = data.articles.filter((article) => {
    const text = (
      article.title +
      " " +
      (article.description || "")
    ).toLowerCase();

    return text.includes("hmrc");
  });

  return NextResponse.json(filtered);
}