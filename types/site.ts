export type SiteData = {
  businessName: string;

  logo: {
    icon: string;
    text: string;
  };

  nav: {
    links: { name: string; href: string }[];
    calculators: { name: string; href: string }[];
    loginUrl: string;
    loginText: string;
  };

  hero: {
    badge: string;
    titleTop: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    image?: string;
    imagePlaceholder?: string;
  };

  roiCalculator: {
    title: string;
    inputs: {
      label: string;
      defaultValue: number;
    };
    assumptions: {
      taxSavingRate: number;
      hoursSaved: number;
      hourlyRate: number;
    };
    benefits: string[];
    resultLabel: string;
    resultSubtext: string;
  };

  salaryCalculator: {
    title: string;
    inputs: {
      min: number;
      max: number;
      step: number;
      defaultGross: number;
    };
    ukTax: {
      personalAllowance: number;
      basicRateLimit: number;
      basicRate: number;
      higherRate: number;
      niThreshold: number;
      niRate: number;
    };
    tip: {
      title: string;
      text: string;
    };
  };

  services: {
    title: string;
    items: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };

  trustBar: {
    badge: string;
    items: {
      name: string;
      style: string;
    }[];
  };

  google: {
    placeId: string;
    useLiveReviews: boolean;
  };

  reviewsSection: {
    title: string;
    subtitle: string;
    ratingText: string;
    staticReviews: {
      id: number;
      author: string;
      text: string;
      rating: number;
    }[];
  };

  footer: {
    businessName: string;
    description: string;
    contactTitle: string;
    address: string;
    email: string;
    hoursTitle: string;
    hours: {
      day: string;
      time: string;
      closed?: boolean;
    }[];
    year: string;
    creditText: string;
    creditLink: string;
  };
};