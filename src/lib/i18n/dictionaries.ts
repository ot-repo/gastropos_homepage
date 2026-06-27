export type Lang = "en" | "de";

type DictShape = {
  nav: Record<string, string>;
  common: Record<string, string>;
  footer: Record<string, string>;
};

export const dictionaries: Record<Lang, DictShape> = {
  en: {
    nav: {
      product: "Product",
      industries: "Industries",
      pricing: "Pricing",
      resources: "Resources",
      compare: "Compare",
      signin: "Sign in",
      demo: "Book Demo",
      trial: "Start Free Trial",
    },
    common: {
      learnMore: "Learn more",
      getStarted: "Get Started",
      bookDemo: "Book a Demo",
      startTrial: "Start Free Trial",
      tseReady: "KassenSichV & TSE Ready",
      builtFor: "Built for the operators.",
    },
    footer: {
      tagline:
        "Precision commerce infrastructure for European hospitality, retail, and service businesses.",
      product: "Product",
      industries: "Industries",
      company: "Company",
      legal: "Legal",
      compliance: "Compliance",
      copyright: "© 2026 GastroPos GmbH. Munich, Germany.",
    },
  },
  de: {
    nav: {
      product: "Produkt",
      industries: "Branchen",
      pricing: "Preise",
      resources: "Wissen",
      compare: "Vergleich",
      signin: "Anmelden",
      demo: "Demo buchen",
      trial: "Kostenlos testen",
    },
    common: {
      learnMore: "Mehr erfahren",
      getStarted: "Loslegen",
      bookDemo: "Demo buchen",
      startTrial: "Kostenlos testen",
      tseReady: "KassenSichV & TSE konform",
      builtFor: "Gebaut für Profis.",
    },
    footer: {
      tagline:
        "Präzise Commerce-Infrastruktur für Gastronomie, Handel und Dienstleister in Europa.",
      product: "Produkt",
      industries: "Branchen",
      company: "Unternehmen",
      legal: "Rechtliches",
      compliance: "Konformität",
      copyright: "© 2026 GastroPos GmbH. München, Deutschland.",
    },
  },
};

export type Dict = DictShape;
