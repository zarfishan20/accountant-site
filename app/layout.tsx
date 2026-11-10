import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountingChat from "@/components/AccountingChat";
import ClientWrapper from "@/components/ClientWrapper";
import siteData from "@/config/siteData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accounting & Business Support | UK",
  description: "Straightforward bookkeeping, tax planning and financial insight for UK businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer data={siteData.footer} />
        <AccountingChat />
      </body>
    </html>
  );
}