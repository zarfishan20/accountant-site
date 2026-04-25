import { SiteData } from "@/types/site";

const siteData: SiteData = {
  businessName: "Your Accounting Firm",

  logo: {
    icon: "Calculator",
    text: "CPA",
  },

  nav: {
    links: [
      { name: "Home", href: "/" },
      { name: "News", href: "/news" },
      { name: "Contact Us", href: "/#contact" },
    ],
    calculators: [
      { name: "Salary Estimator", href: "/#salary-calc" },
      { name: "ROI Tracker", href: "/#roi-calc" },
      { name: "Tax Optimizer", href: "/#salary-calc" },
    ],
    loginUrl: "https://login.xero.com/identity/user/login",
    loginText: "Client Login",
  },

  hero: {
    badge: "UK Tax Strategy 2026",
    titleTop: "Tax stress",
    titleHighlight: "simplified.",
    subtitle:
      "Automating books and optimizing UK tax strategy for modern service-based business owners.",
    cta: "Book a Free Consultation",
    image: "",
    imagePlaceholder: "Professional Accounting Image",
  },

  roiCalculator: {
    title: "Business Growth ROI",
    inputs: {
      label: "Annual Business Turnover (£)",
      defaultValue: 100000,
    },
    assumptions: {
      taxSavingRate: 0.05,
      hoursSaved: 120,
      hourlyRate: 50,
    },
    benefits: [
      "HMRC Tax Optimization",
      "120+ Hours Saved Yearly",
      "Penalty Prevention",
    ],
    resultLabel: "Value of Expert Support",
    resultSubtext: "Estimated annual recovery",
  },

  salaryCalculator: {
    title: "UK Salary & Tax Estimator",
    inputs: {
      min: 15000,
      max: 150000,
      step: 1000,
      defaultGross: 50000,
    },
    ukTax: {
      personalAllowance: 12570,
      basicRateLimit: 37700,
      basicRate: 0.2,
      higherRate: 0.4,
      niThreshold: 12570,
      niRate: 0.08,
    },
    tip: {
      title: "Tax Efficiency Tip",
      text:
        "Personal Allowance covers your first £12,570. Salary/dividend split reduces NI.",
    },
  },

  services: {
    title: "Scale with confidence",
    items: [
      {
        icon: "PieChart",
        title: "Monthly Books",
        desc: "HMRC-compliant records delivered monthly.",
      },
      {
        icon: "ShieldCheck",
        title: "Tax Strategy",
        desc: "Keep more of your revenue legally.",
      },
      {
        icon: "BarChart3",
        title: "CFO Insights",
        desc: "Cash flow and scaling advice.",
      },
    ],
  },

  trustBar: {
    badge: "Certified Expert in Modern Financial Tools",
    items: [
      { name: "QuickBooks", style: "bold underline" },
      { name: "Xero", style: "normal uppercase" },
      { name: "FreshBooks", style: "accent split" },
      { name: "Gusto", style: "medium" },
    ],
  },

  google: {
    placeId: "PLACE_ID_HERE",
    useLiveReviews: false,
  },

  reviewsSection: {
    title: "Trusted by UK",
    subtitle: "Founders",
    ratingText: "5.0 Google Rating",
    staticReviews: [
      {
        id: 1,
        author: "James W.",
        text: "Best accounting firm in London.",
        rating: 5,
      },
      {
        id: 2,
        author: "Sarah L.",
        text: "ROI calculator is amazing.",
        rating: 5,
      },
      {
        id: 3,
        author: "TechFlow Ltd",
        text: "Smooth transition to MTD.",
        rating: 5,
      },
    ],
  },

  footer: {
    businessName: "Your Accounting Firm",
    description:
      "Specialized accounting for modern businesses and freelancers.",
    contactTitle: "Get in Touch",
    address: "123 Wall Street, London",
    email: "hello@yourfirm.com",
    hoursTitle: "Business Hours",
    hours: [
      { day: "Mon — Fri", time: "9:00 AM - 6:00 PM" },
      { day: "Sat", time: "By Appointment" },
      { day: "Sun", time: "Closed", closed: true },
    ],
    year: "2026",
    creditText: "Designed by Caramel Web Studios",
    creditLink: "https://caramelwebstudios.com",
  },
};

export default siteData;