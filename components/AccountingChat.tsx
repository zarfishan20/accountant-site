"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X, Send, Calendar } from "lucide-react";
import siteData from "@/config/siteData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const demoAnswers: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["vat", "value added"],
    answer: "VAT depends on your business activity, taxable turnover and circumstances. A good first step is to review your recent and expected turnover, then check the current registration rules with HMRC or a qualified accountant.",
  },
  {
    keywords: ["paye", "payroll", "employee", "employees", "salary"],
    answer: "PAYE is the system employers use to report pay and deductions to HMRC. A payroll service can help with payslips, tax and National Insurance deductions, reporting deadlines and workplace pension processes.",
  },
  {
    keywords: ["self assessment", "self-assessment", "tax return", "tax return"],
    answer: "Self Assessment is used to report income and gains that are not fully dealt with through PAYE. The records and deadlines you need depend on your circumstances, so it is worth checking the latest HMRC guidance before filing.",
  },
  {
    keywords: ["bookkeeping", "records", "expenses", "receipts"],
    answer: "Good bookkeeping means keeping sales, expenses, receipts and bank transactions organised throughout the year. Regular records make it easier to understand cash flow and prepare accurate accounts and tax returns.",
  },
  {
    keywords: ["price", "cost", "quote", "fee", "fees"],
    answer: "Fees usually depend on the type of support you need, transaction volume, business structure and reporting requirements. In a live firm website, this is where a tailored enquiry or quote process would begin.",
  },
  {
    keywords: ["appointment", "consultation", "book", "speak", "call"],
    answer: "You can explore the contact section of this sample website to see where a consultation booking journey would sit. No appointment is created by this demonstration.",
  },
];

function getDemoReply(question: string) {
  const normalised = question.toLowerCase();
  const match = demoAnswers.find((item) => item.keywords.some((keyword) => normalised.includes(keyword)));
  return match?.answer ?? "I can give a general overview of bookkeeping, VAT, payroll and Self Assessment. Try asking about one of those topics. This is a demonstration assistant, not a source of personalised tax advice.";
}

export default function AccountingChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: `Hello! I’m the ${siteData.businessName} demo assistant. Ask me a general question about bookkeeping, VAT, payroll or Self Assessment.` },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  if (!isMounted) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: question },
      { role: "assistant", content: getDemoReply(question) },
    ]);
    setInput("");
  };

  const handleBookingRedirect = () => {
    setIsOpen(false);
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end gap-4 font-sans">
      {isOpen && (
        <div className="flex h-[500px] w-[320px] flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-2xl sm:w-[380px]">
          <div className="flex items-center justify-between bg-brand-navy p-4 text-white">
            <div>
              <p className="text-sm font-bold tracking-tight">{siteData.businessName} Assistant</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Interactive demo</p>
            </div>
            <button type="button" aria-label="Close assistant" onClick={() => setIsOpen(false)} className="rounded-lg p-1 transition-colors hover:bg-white/20">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} aria-live="polite" className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl p-3 text-[13px] leading-relaxed shadow-sm ${message.role === "user" ? "rounded-tr-none bg-brand-navy text-white" : "rounded-tl-none border border-brand-navy/5 bg-white text-brand-navy"}`}>
                  {message.content}
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-brand-gold/50 bg-brand-gold/10 p-3 text-[11px] leading-relaxed text-brand-slate">
              Demo responses only. Always check current HMRC guidance and seek advice based on your circumstances.
            </div>
          </div>

          <div className="border-t bg-white p-3">
            <button type="button" onClick={handleBookingRedirect} className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-3 py-2.5 text-xs font-bold text-brand-navy transition hover:brightness-95">
              <Calendar size={14} /> Explore the contact section
            </button>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                aria-label="Ask the demo assistant a question"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about VAT, payroll..."
                className="min-w-0 flex-1 rounded-xl bg-slate-100 p-2.5 text-sm text-brand-navy outline-none focus:ring-1 focus:ring-brand-gold"
              />
              <button type="submit" aria-label="Send message" disabled={!input.trim()} className="rounded-xl bg-brand-navy p-2.5 text-white transition-colors hover:bg-brand-gold hover:text-brand-navy disabled:opacity-40">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
      <button type="button" aria-label={isOpen ? "Close demo assistant" : "Open demo assistant"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="rounded-full border-2 border-brand-gold/20 bg-brand-navy p-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-brand-gold hover:text-brand-navy">
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
