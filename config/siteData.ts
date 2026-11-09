import { SiteData } from "@/types/site";

const siteData: SiteData = {
  businessName: "Northstar Accountancy",
  logo: { icon: "Calculator", text: "Northstar" },
  nav: {
    links: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/#services" },
      { name: "Contact", href: "/#contact" },
    ],
    calculators: [
      { name: "Salary Estimator", href: "/#salary-calc" },
      { name: "Business ROI Estimator", href: "/#roi-calc" },
    ],
    loginUrl: "",
    loginText: "",
  },
  hero: {
    badge: "A sample website concept for UK accountancy firms",
    titleTop: "Clarity for your",
    titleHighlight: "next chapter.",
    subtitle: "Straightforward bookkeeping, tax planning and financial insight to help you stay in control and move your business forward.",
    cta: "Explore our services",
    image: "",
    imagePlaceholder: "Illustrative accountancy dashboard",
  },
  roiCalculator: {
    title: "Business Growth ROI",
    inputs: { label: "Annual Business Turnover (£)", defaultValue: 100000 },
    assumptions: { taxSavingRate: 0.05, hoursSaved: 120, hourlyRate: 50 },
    benefits: ["Illustrative tax-planning scenario", "Potential time saved", "A starting point for a conversation"],
    resultLabel: "Illustrative annual value",
    resultSubtext: "A demonstration based on editable assumptions, not a guaranteed saving",
  },
  salaryCalculator: {
    title: "UK Salary & Tax Estimator",
    inputs: { min: 15000, max: 150000, step: 1000, defaultGross: 50000 },
    ukTax: { personalAllowance: 12570, basicRateLimit: 37700, basicRate: 0.2, higherRate: 0.4, niThreshold: 12570, niRate: 0.08 },
    tip: {
      title: "Illustrative estimate",
      text: "This simplified estimate excludes factors such as Scottish income tax, pension contributions, student loans and other individual circumstances. Check current HMRC guidance before making decisions.",
    },
  },
  services: {
    title: "The right support, at every stage.",
    items: [
      { icon: "PieChart", title: "Monthly Books", desc: "Keep your records organised with regular bookkeeping and a clearer view of your business finances." },
      { icon: "ShieldCheck", title: "Tax Strategy", desc: "Understand your obligations, plan ahead and make informed decisions with practical tax support." },
      { icon: "BarChart3", title: "CFO Insights", desc: "Turn financial information into useful insight for cash flow, planning and sustainable growth." },
    ],
  },
  trustBar: {
    badge: "Example software ecosystem",
    items: [
      { name: "QuickBooks", style: "bold" },
      { name: "Xero", style: "normal" },
      { name: "FreshBooks", style: "normal" },
      { name: "Gusto", style: "normal" },
    ],
  },
  google: { placeId: "", useLiveReviews: false },
  reviewsSection: { title: "", subtitle: "", ratingText: "", staticReviews: [] },
  footer: {
    businessName: "Northstar Accountancy",
    description: "A fictional accountancy brand used to demonstrate a polished website concept for prospective clients.",
    contactTitle: "Get in touch",
    address: "",
    email: "",
    hoursTitle: "Business hours",
    hours: [
      { day: "Monday — Friday", time: "9:00am — 5:30pm" },
      { day: "Saturday", time: "By appointment" },
      { day: "Sunday", time: "Closed", closed: true },
    ],
    year: "2026",
    creditText: "Website concept by Caramel Web Studios",
    creditLink: "https://caramelwebstudios.com",
  },
};
export default siteData;
