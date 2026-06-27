export type IndustrySlug =
  | "restaurant"
  | "cafe"
  | "bar"
  | "bakery"
  | "food-truck"
  | "kiosk"
  | "retail"
  | "hair-salon"
  | "beauty-salon"
  | "service-business";

export interface IndustryContent {
  slug: IndustrySlug;
  eyebrow: { en: string; de: string };
  title: { en: string; de: string };
  lede: { en: string; de: string };
  metaTitle: { en: string; de: string };
  metaDescription: { en: string; de: string };
  painPoints: { en: string[]; de: string[] };
  features: { en: string[]; de: string[] };
  proof: { en: string; de: string };
  sections: { heading: { en: string; de: string }; body: { en: string; de: string } }[];
  faq: { q: { en: string; de: string }; a: { en: string; de: string } }[];
}

const make = (
  slug: IndustrySlug,
  enTitle: string,
  deTitle: string,
  enLede: string,
  deLede: string,
  enMeta: string,
  deMeta: string,
  enMetaD: string,
  deMetaD: string,
  pains: { en: string[]; de: string[] },
  feats: { en: string[]; de: string[] },
  proof: { en: string; de: string },
): IndustryContent => ({
  slug,
  eyebrow: { en: enTitle.split(" POS")[0] + " POS", de: deTitle.split(" für")[0] },
  title: { en: enTitle, de: deTitle },
  lede: { en: enLede, de: deLede },
  metaTitle: { en: enMeta, de: deMeta },
  metaDescription: { en: enMetaD, de: deMetaD },
  painPoints: pains,
  features: feats,
  proof,
  sections: [],
  faq: [],
});

const baseIndustries: Record<IndustrySlug, IndustryContent> = {
  restaurant: make(
    "restaurant",
    "The POS system restaurants actually want.",
    "Das Kassensystem, das Restaurants wirklich wollen.",
    "Course-by-course KDS, handheld waiter ordering, split bills, table maps and TSE compliance — purpose-built for full-service restaurants.",
    "Gang-für-Gang-KDS, mobile Kellner-Bestellung, geteilte Rechnungen, Tischpläne und TSE-Konformität — speziell für die Vollservice-Gastronomie.",
    "Restaurant POS System — TSE-ready, KDS included | GastroPos",
    "Kassensystem für Restaurants — TSE-konform, KDS inklusive | GastroPos",
    "Full-service restaurant POS with kitchen display, waiter app, table management, course timing and TSE compliance. Live in 2 hours.",
    "Vollservice-Restaurantkasse mit Küchenmonitor, Kellner-App, Tischverwaltung, Gangsteuerung und TSE-Konformität. In 2 Stunden einsatzbereit.",
    {
      en: [
        "Waiters lose minutes walking between tables and the POS",
        "Kitchen tickets get lost or misread",
        "Splitting a bill 6 ways takes 10 minutes",
        "End-of-night cash never matches the report",
      ],
      de: [
        "Service-Team verliert Zeit zwischen Tisch und Kasse",
        "Küchenbons gehen verloren oder werden falsch gelesen",
        "Eine Rechnung auf 6 Gäste teilen dauert 10 Minuten",
        "Bargeld am Abend stimmt nie mit dem Bericht überein",
      ],
    },
    {
      en: [
        "Table map with status, server and timer",
        "Handheld waiter ordering with course timing",
        "KDS with station routing",
        "Split bills by item, seat or share",
        "Tip pooling and distribution",
        "TSE + DATEV included",
      ],
      de: [
        "Tischplan mit Status, Service und Timer",
        "Mobile Kellner-App mit Gangsteuerung",
        "KDS mit Stations-Routing",
        "Rechnungen pro Artikel, Sitz oder Anteil splitten",
        "Trinkgeldpool und -verteilung",
        "TSE + DATEV inklusive",
      ],
    },
    {
      en: "“GastroPos has increased our efficiency and confidence in serving many customers at once. The KDS just works great.” — Kevin Gasiewski, Hechtseeterrassen",
      de: "„GastroPos hat unsere Effizienz und unser Vertrauen beim Bedienen vieler Gäste enorm gesteigert. Das KDS funktioniert einfach großartig.“ — Kevin Gasiewski, Hechtseeterrassen",
    },
  ),
  cafe: make(
    "cafe",
    "Café POS that keeps the line moving.",
    "Café-Kasse, die die Schlange in Bewegung hält.",
    "Fast item entry, modifier-heavy menus, loyalty stamps and grab-and-go ordering — built for cafés, coffee shops and quick-service bakeries.",
    "Schnelle Artikelerfassung, modifier-lastige Karten, Treuestempel und Grab-and-Go — gebaut für Cafés, Kaffeehäuser und Bäckereien.",
    "Café POS System with Loyalty | GastroPos",
    "Café-Kassensystem mit Treueprogramm | GastroPos",
    "Café POS with one-tap entry, drink modifiers, loyalty stamps and grab-and-go ordering. TSE-ready, KDS included.",
    "Café-Kasse mit Ein-Klick-Erfassung, Getränke-Modifiern, Treuestempeln und Grab-and-Go-Bestellung. TSE-konform, KDS inklusive.",
    {
      en: [
        "Morning rush takes too long per order",
        "Modifiers (oat, decaf, double shot) slow down the line",
        "No loyalty = no reason to come back",
      ],
      de: [
        "Morgendlicher Rush dauert zu lange pro Bestellung",
        "Modifier (Hafer, entkoffeiniert, doppelter Shot) bremsen die Linie",
        "Keine Treue = kein Grund zurückzukommen",
      ],
    },
    {
      en: [
        "One-tap drink builder with modifiers",
        "Loyalty stamps and rewards built-in",
        "Customer display for tip prompts",
        "QR pre-ordering from the table",
        "Pastry counter and weight-based items",
        "TSE + DSFinV-K + DATEV",
      ],
      de: [
        "Ein-Tipp-Getränkebuilder mit Modifiern",
        "Treuestempel und Rewards integriert",
        "Kundendisplay mit Trinkgeld-Prompt",
        "QR-Vorbestellung vom Tisch",
        "Gebäcktheke und gewichtsbasierte Artikel",
        "TSE + DSFinV-K + DATEV",
      ],
    },
    {
      en: "“The best is the service, always available and helpful. It is really fun to work with GastroPos.” — Rolf Bickel, The Baristo",
      de: "„Das Beste ist der Service, immer erreichbar und hilfsbereit. Es macht wirklich Spaß, mit GastroPos zu arbeiten.“ — Rolf Bickel, The Baristo",
    },
  ),
  bar: make(
    "bar",
    "Bar POS that survives a Saturday night.",
    "Bar-Kasse, die einen Samstagabend übersteht.",
    "Open tabs, quick rounds, pour cost tracking and split-the-check bartending — built for cocktail bars, pubs and clubs.",
    "Offene Tabs, schnelle Runden, Pour-Cost-Tracking und einfaches Split-the-Check — gebaut für Cocktailbars, Pubs und Clubs.",
    "Bar POS System with Tabs & Pour Cost | GastroPos",
    "Bar-Kassensystem mit Tabs & Pour-Cost | GastroPos",
    "Bar POS with open tabs, pre-authorization, pour cost tracking and lightning-fast round entry. TSE-compliant.",
    "Bar-Kasse mit offenen Tabs, Vorautorisierung, Pour-Cost-Tracking und blitzschneller Rundenerfassung. TSE-konform.",
    {
      en: [
        "Tabs get lost or merged wrong",
        "Free pours destroy margin",
        "Cash & card never reconcile",
      ],
      de: [
        "Tabs gehen verloren oder werden falsch zusammengeführt",
        "Freie Pours zerstören die Marge",
        "Bar- und Kartenzahlung stimmen nie überein",
      ],
    },
    {
      en: [
        "Open tabs with card pre-auth",
        "Pour cost reports per drink and bartender",
        "Happy-hour pricing schedules",
        "Round entry with quick-keys",
        "Speed-rail layout designer",
      ],
      de: [
        "Offene Tabs mit Karten-Vorautorisierung",
        "Pour-Cost-Berichte pro Drink und Bartender",
        "Happy-Hour-Preispläne",
        "Rundenerfassung mit Quick-Keys",
        "Speed-Rail-Layout-Designer",
      ],
    },
    {
      en: "Bars on GastroPos close 18% faster at end-of-night.",
      de: "Bars mit GastroPos schließen am Abend 18 % schneller ab.",
    },
  ),
  bakery: make(
    "bakery",
    "Bakery POS with weight-based items and pre-orders.",
    "Bäckerei-Kasse mit Gewichtsartikeln und Vorbestellungen.",
    "Scale integration, batch baking schedules, B2B wholesale orders and online pre-ordering for cakes and bread.",
    "Waagen-Integration, Backpläne, B2B-Großhandelsbestellungen und Online-Vorbestellung für Torten und Brot.",
    "Bakery POS System with Pre-Orders | GastroPos",
    "Bäckerei-Kassensystem mit Vorbestellungen | GastroPos",
    "POS for bakeries with scale integration, batch baking, B2B wholesale, cake pre-orders and TSE compliance.",
    "Kasse für Bäckereien mit Waagen-Integration, Backplänen, B2B-Großhandel, Torten-Vorbestellung und TSE-Konformität.",
    {
      en: [
        "Counter staff weighs and rings up manually",
        "Cake pre-orders live on paper or WhatsApp",
        "Wholesale invoices done in Excel",
      ],
      de: [
        "Personal wiegt und kassiert manuell",
        "Torten-Vorbestellungen auf Papier oder WhatsApp",
        "Großhandelsrechnungen in Excel",
      ],
    },
    {
      en: [
        "Integrated scale (€/kg auto-calc)",
        "Online cake & bread pre-ordering",
        "Wholesale customer pricing",
        "Batch baking schedule view",
        "Daily waste tracking",
      ],
      de: [
        "Integrierte Waage (€/kg Auto-Berechnung)",
        "Online-Vorbestellung für Torten & Brot",
        "Großhandelspreise pro Kunde",
        "Backplan-Ansicht",
        "Tägliche Schwund-Erfassung",
      ],
    },
    {
      en: "Bakeries cut wholesale invoice time by 80%.",
      de: "Bäckereien sparen 80 % Zeit bei Großhandelsrechnungen.",
    },
  ),
  "food-truck": make(
    "food-truck",
    "Food truck POS that works on 3G.",
    "Foodtruck-Kasse, die auch im 3G-Netz läuft.",
    "Offline-first, mobile printer support, single-tap setup and contactless payments — built for trucks, market stalls and pop-ups.",
    "Offline-fähig, mobiler Druckersupport, Ein-Klick-Setup und kontaktloses Bezahlen — gebaut für Foodtrucks, Marktstände und Pop-ups.",
    "Food Truck POS System — Offline & Mobile | GastroPos",
    "Foodtruck-Kassensystem — Offline & Mobil | GastroPos",
    "Offline-first POS for food trucks, market stalls and pop-ups. Mobile printer, contactless payments, TSE-ready.",
    "Offline-fähige Kasse für Foodtrucks, Marktstände und Pop-ups. Mobiler Drucker, kontaktlose Zahlung, TSE-konform.",
    {
      en: [
        "Spotty 3G drops the POS mid-order",
        "Hardware is bulky and breaks",
        "Cash management on the road is a nightmare",
      ],
      de: [
        "3G bricht mitten in der Bestellung ab",
        "Hardware ist sperrig und geht kaputt",
        "Bargeldverwaltung unterwegs ist ein Albtraum",
      ],
    },
    {
      en: [
        "100% offline-first — syncs when back online",
        "Phone-as-POS mode",
        "Mobile Bluetooth printer support",
        "Apple Pay, Google Pay, SumUp, Stripe Tap to Pay",
      ],
      de: [
        "100 % offline-first — synchronisiert bei Verbindung",
        "Phone-as-POS-Modus",
        "Mobiler Bluetooth-Druckersupport",
        "Apple Pay, Google Pay, SumUp, Stripe Tap to Pay",
      ],
    },
    {
      en: "Operators run multiple trucks from one dashboard.",
      de: "Betreiber steuern mehrere Trucks aus einem Dashboard.",
    },
  ),
  kiosk: make(
    "kiosk",
    "Kiosk & self-order terminal POS.",
    "Kiosk- & Self-Order-Terminal-Kasse.",
    "Turn any tablet into a self-ordering kiosk that takes orders, payments and prints to the kitchen — no cashier required.",
    "Verwandeln Sie jedes Tablet in einen Self-Order-Kiosk, der Bestellungen aufnimmt, kassiert und in die Küche druckt — ohne Personal.",
    "Self-Order Kiosk POS System | GastroPos",
    "Self-Order-Kiosk-Kassensystem | GastroPos",
    "Self-ordering kiosk for QSR, ghost kitchens and snack bars. Upsells, allergens, multilingual and contactless payment.",
    "Self-Order-Kiosk für QSR, Ghost-Kitchens und Imbiss. Upsells, Allergene, mehrsprachig und kontaktlos.",
    {
      en: [
        "Counter staff is the bottleneck during rush",
        "Customers want to browse — not be rushed",
        "Upsells get forgotten",
      ],
      de: [
        "Personal an der Theke ist der Flaschenhals",
        "Kunden wollen stöbern — nicht gehetzt werden",
        "Upsells werden vergessen",
      ],
    },
    {
      en: [
        "Kiosk mode (fullscreen, no app exit)",
        "Automatic upsells per item",
        "Multilingual menu (DE/EN/TR/AR/…)",
        "Allergen and nutrition badges",
        "Contactless and Apple Pay only mode",
      ],
      de: [
        "Kiosk-Modus (Vollbild, kein App-Exit)",
        "Automatische Upsells pro Artikel",
        "Mehrsprachige Karte (DE/EN/TR/AR/…)",
        "Allergen- und Nährwert-Badges",
        "Nur kontaktlos & Apple Pay Modus",
      ],
    },
    {
      en: "Kiosk-equipped QSRs see +22% average ticket.",
      de: "QSR mit Kiosk sehen +22 % durchschnittlichen Bonwert.",
    },
  ),
  retail: make(
    "retail",
    "Retail POS for boutiques, concept stores and shops.",
    "Einzelhandels-Kasse für Boutiquen, Concept Stores und Shops.",
    "Barcode scanning, size/color variants, stocktake on iPad, customer accounts and Shopify sync — built for modern retail.",
    "Barcode-Scan, Größen-/Farb-Varianten, iPad-Inventur, Kundenkonten und Shopify-Sync — gebaut für modernen Handel.",
    "Retail POS System for Boutiques & Shops | GastroPos",
    "Einzelhandels-Kassensystem für Boutiquen & Shops | GastroPos",
    "Retail POS with barcodes, variants, stocktake, Shopify sync, customer accounts and TSE compliance. Built for boutiques and concept stores.",
    "Einzelhandels-Kasse mit Barcodes, Varianten, Inventur, Shopify-Sync, Kundenkonten und TSE-Konformität. Für Boutiquen und Concept Stores.",
    {
      en: [
        "Stock counts never match",
        "Online and in-store inventory drift apart",
        "Customer history lives nowhere",
      ],
      de: [
        "Bestände stimmen nie überein",
        "Online- und In-Store-Bestände driften auseinander",
        "Kundenhistorie existiert nirgends",
      ],
    },
    {
      en: [
        "Barcode scanning + label printing",
        "Size and color variants",
        "Live two-way Shopify sync",
        "iPad stocktake",
        "Customer accounts and store credit",
        "Layaway and back-orders",
      ],
      de: [
        "Barcode-Scan + Etikettendruck",
        "Größen- und Farb-Varianten",
        "Live-Shopify-Sync",
        "iPad-Inventur",
        "Kundenkonten und Guthaben",
        "Anzahlung und Nachbestellung",
      ],
    },
    {
      en: "Retailers cut stock variance from 8% to under 2%.",
      de: "Händler senken Bestandsabweichung von 8 % auf unter 2 %.",
    },
  ),
  "hair-salon": make(
    "hair-salon",
    "Hair salon POS with online booking.",
    "Friseur-Kasse mit Online-Buchung.",
    "Appointments, stylist commissions, service + retail in one ticket, customer history and SMS reminders.",
    "Termine, Stylisten-Provisionen, Service + Retail in einem Bon, Kundenhistorie und SMS-Erinnerungen.",
    "Hair Salon POS & Booking System | GastroPos",
    "Friseur-Kassensystem & Buchung | GastroPos",
    "POS and online booking for hair salons. Stylist commissions, customer history, SMS reminders and TSE compliance.",
    "Kasse und Online-Buchung für Friseure. Stylisten-Provisionen, Kundenhistorie, SMS-Erinnerungen und TSE-Konformität.",
    {
      en: [
        "No-shows cost real money",
        "Commissions calculated by hand",
        "Service + retail mixed badly on tickets",
      ],
      de: [
        "No-Shows kosten echtes Geld",
        "Provisionen werden von Hand berechnet",
        "Service + Retail auf Bons schlecht getrennt",
      ],
    },
    {
      en: [
        "Public booking page under your domain",
        "SMS + email appointment reminders",
        "Stylist commission per service/product",
        "Color formula history per customer",
        "Tip distribution by stylist",
      ],
      de: [
        "Öffentliche Buchungsseite unter eigener Domain",
        "SMS- + E-Mail-Erinnerungen",
        "Stylisten-Provision pro Service/Produkt",
        "Color-Formel-Historie pro Kunde",
        "Trinkgeldverteilung pro Stylist",
      ],
    },
    {
      en: "Salons reduce no-shows by 35% with SMS reminders.",
      de: "Salons reduzieren No-Shows um 35 % durch SMS-Erinnerungen.",
    },
  ),
  "beauty-salon": make(
    "beauty-salon",
    "Beauty salon & spa POS.",
    "Beauty-Salon- & Spa-Kasse.",
    "Multi-room scheduling, package & series tracking, gift vouchers and product sales — all in one calendar.",
    "Mehrraum-Planung, Pakete & Serien, Gutscheine und Produktverkauf — alles in einem Kalender.",
    "Beauty Salon & Spa POS Software | GastroPos",
    "Beauty-Salon & Spa-Kassensoftware | GastroPos",
    "POS and booking for beauty salons and spas. Multi-room calendar, packages, gift cards and product retail.",
    "Kasse und Buchung für Beauty-Salons und Spas. Mehrraum-Kalender, Pakete, Gutscheine und Produktverkauf.",
    {
      en: [
        "Multiple rooms = overlapping bookings",
        "Package series tracked on Post-its",
        "Gift cards leak revenue",
      ],
      de: [
        "Mehrere Räume = überlappende Buchungen",
        "Paket-Serien auf Post-its",
        "Gutscheine verlieren Umsatz",
      ],
    },
    {
      en: [
        "Multi-room/resource scheduling",
        "Series and package balance tracking",
        "Gift voucher issuance and redemption",
        "Therapist commission and tips",
        "Consent forms per treatment",
      ],
      de: [
        "Mehrraum-/Ressourcenplanung",
        "Serien- und Paket-Restguthaben",
        "Gutschein-Ausgabe und -Einlösung",
        "Therapeuten-Provision und Trinkgeld",
        "Einwilligungsformulare pro Behandlung",
      ],
    },
    {
      en: "Spas turn series-pack customers into repeat regulars.",
      de: "Spas machen aus Serien-Kunden treue Stammgäste.",
    },
  ),
  "service-business": make(
    "service-business",
    "POS for service businesses.",
    "Kasse für Dienstleister.",
    "Appointments, deposits, recurring services, mobile invoicing and customer history — for tattoo studios, repair shops, dog groomers and more.",
    "Termine, Anzahlungen, wiederkehrende Services, mobile Rechnungen und Kundenhistorie — für Tattoo-Studios, Reparatur, Hundesalons und mehr.",
    "POS for Service Businesses | GastroPos",
    "Kasse für Dienstleister | GastroPos",
    "Flexible POS for service businesses: appointments, deposits, recurring services, mobile invoicing and customer history.",
    "Flexible Kasse für Dienstleister: Termine, Anzahlungen, wiederkehrende Services, mobile Rechnungen und Kundenhistorie.",
    {
      en: ["Deposits chased manually", "Recurring jobs forgotten", "Invoicing happens at 11pm"],
      de: [
        "Anzahlungen werden manuell verfolgt",
        "Wiederkehrende Aufträge vergessen",
        "Rechnungen werden um 23 Uhr geschrieben",
      ],
    },
    {
      en: [
        "Online booking with deposit at checkout",
        "Recurring service automation",
        "Mobile invoicing & e-receipts",
        "Customer photo and notes history",
      ],
      de: [
        "Online-Buchung mit Anzahlung",
        "Automatisierung wiederkehrender Services",
        "Mobile Rechnungen & E-Belege",
        "Kundenfoto- und Notiz-Historie",
      ],
    },
    {
      en: "Service operators save 6+ hours of admin per week.",
      de: "Dienstleister sparen 6+ Stunden Verwaltung pro Woche.",
    },
  ),
};

type IndustryExtra = Pick<IndustryContent, "sections" | "faq">;

const industryExtras: Record<IndustrySlug, IndustryExtra> = {
  restaurant: {
    sections: [
      {
        heading: {
          en: "Turn more tables without rushing a single guest",
          de: "Mehr Tische drehen, ohne einen Gast zu hetzen",
        },
        body: {
          en: "In full-service dining, your margin lives in the gap between courses and the walk to the till. GastroPos closes both. Waiters fire orders to the kitchen from a handheld at the table, the KDS times each course so mains land when starters clear, and payment happens tableside — no second trip to a fixed terminal. The result is faster table turns on a busy night and a calmer floor, without ever making a guest feel pushed.",
          de: "In der Vollservice-Gastronomie steckt Ihre Marge in der Lücke zwischen den Gängen und im Weg zur Kasse. GastroPos schließt beide. Kellner senden Bestellungen vom Handheld am Tisch an die Küche, das KDS taktet jeden Gang, sodass die Hauptgerichte kommen, wenn die Vorspeisen abgeräumt sind, und bezahlt wird am Tisch — kein zweiter Weg zum festen Terminal. Das Ergebnis: schnellere Tischrotation an vollen Abenden und ein ruhigerer Service, ohne dass sich ein Gast gedrängt fühlt.",
        },
      },
      {
        heading: {
          en: "Split any bill in seconds, not minutes",
          de: "Jede Rechnung in Sekunden teilen, nicht in Minuten",
        },
        body: {
          en: "A table of six who each want to pay for what they ordered used to mean a calculator and an apology. With GastroPos, items are tapped onto separate checks by seat or by share, tips and discounts apply cleanly, and each guest pays their own way — card, cash or phone — while everyone else is still chatting. The awkward end-of-meal maths simply disappears.",
          de: "Ein Tisch mit sechs Gästen, die jeweils ihr Eigenes zahlen wollen, bedeutete früher Taschenrechner und Entschuldigung. Mit GastroPos werden Artikel pro Sitz oder Anteil auf getrennte Rechnungen getippt, Trinkgeld und Rabatte sauber angewendet, und jeder Gast zahlt auf seine Art — Karte, bar oder Smartphone — während die anderen noch plaudern. Die unangenehme Rechnerei am Ende entfällt einfach.",
        },
      },
      {
        heading: {
          en: "Compliant by design, audit-ready by default",
          de: "Konform per Design, prüfungssicher von Haus aus",
        },
        body: {
          en: "Every ticket is signed by a Fiskaly-certified TSE, journaled to GoBD and exportable in DSFinV-K and DATEV formats. Your Steuerberater gets clean books, a Kassen-Nachschau becomes a one-minute export, and you never lie awake over whether the till would survive an audit. Compliance isn't a module you bolt on — it's how the restaurant runs.",
          de: "Jeder Bon wird durch eine Fiskaly-zertifizierte TSE signiert, GoBD-konform journalisiert und in den Formaten DSFinV-K und DATEV exportierbar. Ihr Steuerberater bekommt saubere Bücher, eine Kassen-Nachschau wird zum Ein-Minuten-Export, und Sie liegen nie wach, ob die Kasse eine Prüfung übersteht. Konformität ist kein Modul zum Nachrüsten — so läuft das Restaurant.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can waiters take orders at the table?",
          de: "Können Kellner am Tisch bestellen?",
        },
        a: {
          en: "Yes. Any phone or tablet becomes a handheld that fires orders straight to the kitchen display and acts as a POS for tableside payment.",
          de: "Ja. Jedes Smartphone oder Tablet wird zum Handheld, das Bestellungen direkt an den Küchenmonitor sendet und als Kasse für die Zahlung am Tisch dient.",
        },
      },
      {
        q: { en: "Does it handle course timing?", de: "Beherrscht es die Gangsteuerung?" },
        a: {
          en: "Yes. The KDS coordinates starters, mains and desserts per table so courses fire in the right order and nothing sits under the pass.",
          de: "Ja. Das KDS koordiniert Vorspeisen, Hauptgänge und Desserts pro Tisch, sodass die Gänge in der richtigen Reihenfolge ausgelöst werden und nichts am Pass steht.",
        },
      },
      {
        q: { en: "Is it TSE and DATEV compliant?", de: "Ist es TSE- und DATEV-konform?" },
        a: {
          en: "Yes. TSE signing, GoBD journaling, DSFinV-K and DATEV export are included in every plan — no add-ons.",
          de: "Ja. TSE-Signierung, GoBD-Journal, DSFinV-K- und DATEV-Export sind in jedem Paket enthalten — ohne Zusatzkosten.",
        },
      },
      {
        q: { en: "How long does it take to switch?", de: "Wie lange dauert der Wechsel?" },
        a: {
          en: "Most restaurants are live the same day. We import your menu and master data, pair your printers and TSE, and train the team in a 30-minute walkthrough.",
          de: "Die meisten Restaurants sind am selben Tag live. Wir importieren Karte und Stammdaten, koppeln Drucker und TSE und schulen das Team in einem 30-Minuten-Walkthrough.",
        },
      },
    ],
  },
  cafe: {
    sections: [
      {
        heading: {
          en: "Win the morning rush by the second",
          de: "Den Morgen-Rush um Sekunden gewinnen",
        },
        body: {
          en: "When the queue is out the door, every tap counts. GastroPos gives you a one-touch drink builder where the regular flat white is a single button and the oat-milk-decaf-double-shot is three taps, not a conversation. Favourites, repeat-last-order and pre-set sizes mean your barista keeps their hands on the machine and their eyes on the line, not on the screen.",
          de: "Wenn die Schlange bis zur Tür reicht, zählt jeder Tipp. GastroPos bietet einen Ein-Tipp-Getränkebuilder, bei dem der übliche Flat White ein einziger Button ist und der Hafer-Entkoffeiniert-Doppel-Shot drei Tipps statt eines Gesprächs. Favoriten, „letzte Bestellung wiederholen“ und voreingestellte Größen sorgen dafür, dass Ihr Barista die Hände an der Maschine und die Augen an der Schlange hat, nicht am Bildschirm.",
        },
      },
      {
        heading: {
          en: "Give regulars a reason to walk past the chain",
          de: "Stammgästen einen Grund geben, an der Kette vorbeizugehen",
        },
        body: {
          en: "Loyalty is built in, not bolted on. Digital stamps and rewards live on the same receipt the guest already pays from — no separate app, no plastic card to lose. A tip prompt on the customer display lifts barista tips, and QR pre-ordering lets the laptop crowd order from their table without joining the queue at all.",
          de: "Treue ist eingebaut, nicht angeschraubt. Digitale Stempel und Prämien liegen auf demselben Beleg, von dem der Gast ohnehin zahlt — keine separate App, keine Plastikkarte zum Verlieren. Ein Trinkgeld-Prompt auf dem Kundendisplay hebt die Barista-Trinkgelder, und QR-Vorbestellung lässt die Laptop-Gäste vom Tisch bestellen, ganz ohne anzustehen.",
        },
      },
      {
        heading: {
          en: "Counter, pastry case and weight items in one till",
          de: "Theke, Vitrine und Gewichtsartikel in einer Kasse",
        },
        body: {
          en: "Sell a cappuccino, a slice of cake by the piece and a bag of beans by weight on the same ticket, with the right VAT applied to each automatically. The pastry counter, the retail shelf and the espresso bar all run through one system that stays compliant whether the guest eats in or takes away.",
          de: "Verkaufen Sie einen Cappuccino, ein Stück Kuchen und eine Tüte Bohnen nach Gewicht auf demselben Bon, mit automatisch korrekt angewandter MwSt für jeden Posten. Gebäcktheke, Verkaufsregal und Espressobar laufen über ein System, das konform bleibt — egal ob der Gast im Haus isst oder mitnimmt.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can I handle complex drink modifiers quickly?",
          de: "Kann ich komplexe Getränke-Modifier schnell erfassen?",
        },
        a: {
          en: "Yes. Milk type, shots, syrups and size are one-tap modifiers, and frequent combinations can be saved as single buttons for the rush.",
          de: "Ja. Milchsorte, Shots, Sirupe und Größe sind Ein-Tipp-Modifier, und häufige Kombinationen lassen sich als einzelne Buttons für den Rush speichern.",
        },
      },
      {
        q: { en: "Is there a loyalty programme?", de: "Gibt es ein Treueprogramm?" },
        a: {
          en: "Yes. Digital stamps and rewards are built in and tied to the guest's receipt — no separate app or plastic card required.",
          de: "Ja. Digitale Stempel und Prämien sind integriert und an den Beleg des Gastes gebunden — ohne separate App oder Plastikkarte.",
        },
      },
      {
        q: {
          en: "Can guests pre-order from their table?",
          de: "Können Gäste vom Tisch vorbestellen?",
        },
        a: {
          en: "Yes. A QR code on the table lets guests order and pay from their phone, with the order landing on your counter screen instantly.",
          de: "Ja. Ein QR-Code am Tisch lässt Gäste vom Smartphone bestellen und zahlen, die Bestellung erscheint sofort auf Ihrem Theken-Bildschirm.",
        },
      },
      {
        q: { en: "Does it sell items by weight?", de: "Verkauft es Artikel nach Gewicht?" },
        a: {
          en: "Yes. Connect a scale for beans, pastries or deli items and the price calculates automatically at the correct VAT rate.",
          de: "Ja. Verbinden Sie eine Waage für Bohnen, Gebäck oder Feinkost, und der Preis wird automatisch zum richtigen MwSt-Satz berechnet.",
        },
      },
    ],
  },
  bar: {
    sections: [
      {
        heading: {
          en: "Tabs that never get lost or merged wrong",
          de: "Tabs, die nie verloren gehen oder falsch zusammengeführt werden",
        },
        body: {
          en: "Open a tab against a card pre-authorisation, name it after the guest or the table, and add rounds with two taps all night. Tabs can't vanish when a shift changes hands, can't merge by accident, and close out cleanly with the tip added — so the only thing your bartenders count at the end of the night is a drawer that actually balances.",
          de: "Öffnen Sie einen Tab gegen eine Karten-Vorautorisierung, benennen Sie ihn nach Gast oder Tisch und fügen Sie die ganze Nacht Runden mit zwei Tipps hinzu. Tabs können beim Schichtwechsel nicht verschwinden, sich nicht versehentlich zusammenführen und werden mit Trinkgeld sauber abgeschlossen — sodass Ihre Bartender am Ende der Nacht nur eine Schublade zählen, die tatsächlich stimmt.",
        },
      },
      {
        heading: {
          en: "Protect your pour cost from the free hand",
          de: "Schützen Sie Ihren Pour-Cost vor der freien Hand",
        },
        body: {
          en: "Over-pouring and untracked free rounds quietly eat a bar's margin. GastroPos reports pour cost per drink and per bartender, so you can see who's heavy-handed and which cocktails are priced below their true cost. Happy-hour schedules switch pricing automatically at the minute they start and end — no manual override, no 'I forgot to change it back'.",
          de: "Übergießen und nicht erfasste Freirunden fressen still die Marge einer Bar. GastroPos zeigt den Pour-Cost pro Drink und pro Bartender, sodass Sie sehen, wer großzügig eingießt und welche Cocktails unter ihren wahren Kosten bepreist sind. Happy-Hour-Pläne schalten die Preise automatisch auf die Minute genau um — kein manuelles Übersteuern, kein „Ich habe vergessen, es zurückzustellen“.",
        },
      },
      {
        heading: {
          en: "Built for speed when it's three deep at the rail",
          de: "Auf Tempo gebaut, wenn es dreireihig am Tresen steht",
        },
        body: {
          en: "Quick-keys for your speed rail, round entry that doesn't make you dig through menus, and a layout you design around how your bar actually pours. When the room is loud and the rail is packed, the POS keeps up instead of becoming the bottleneck — and offline-first means a flaky connection never stops a round.",
          de: "Quick-Keys für Ihr Speed-Rail, Rundenerfassung ohne Menü-Wühlen und ein Layout, das Sie um die Art gestalten, wie Ihre Bar wirklich arbeitet. Wenn der Raum laut und der Tresen voll ist, hält die Kasse mit, statt zum Engpass zu werden — und Offline-First bedeutet, dass eine wacklige Verbindung nie eine Runde stoppt.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can I run open tabs with card pre-auth?",
          de: "Kann ich offene Tabs mit Karten-Vorautorisierung führen?",
        },
        a: {
          en: "Yes. Open a tab against a pre-authorised card, add rounds all night and close it out with the tip in one step.",
          de: "Ja. Öffnen Sie einen Tab gegen eine vorautorisierte Karte, fügen Sie die ganze Nacht Runden hinzu und schließen Sie ihn mit Trinkgeld in einem Schritt ab.",
        },
      },
      {
        q: { en: "Does it track pour cost?", de: "Erfasst es den Pour-Cost?" },
        a: {
          en: "Yes. Pour cost is reported per drink and per bartender so you can spot heavy pours and under-priced cocktails.",
          de: "Ja. Der Pour-Cost wird pro Drink und pro Bartender ausgewiesen, sodass Sie großzügige Pours und unterbepreiste Cocktails erkennen.",
        },
      },
      {
        q: { en: "Can I schedule happy-hour pricing?", de: "Kann ich Happy-Hour-Preise planen?" },
        a: {
          en: "Yes. Set time-based pricing and it switches automatically at the start and end of each happy hour — no manual changes.",
          de: "Ja. Legen Sie zeitbasierte Preise fest, und sie schalten automatisch zu Beginn und Ende jeder Happy Hour um — ohne manuelles Eingreifen.",
        },
      },
      {
        q: {
          en: "What happens if the internet drops mid-service?",
          de: "Was passiert, wenn das Internet mitten im Service ausfällt?",
        },
        a: {
          en: "The POS keeps working offline — tabs, rounds and payments queue locally and sync automatically when the connection returns.",
          de: "Die Kasse läuft offline weiter — Tabs, Runden und Zahlungen werden lokal gespeichert und synchronisieren sich automatisch, wenn die Verbindung zurückkommt.",
        },
      },
    ],
  },
  bakery: {
    sections: [
      {
        heading: {
          en: "Weigh, price and ring up in one motion",
          de: "Wiegen, bepreisen und kassieren in einem Zug",
        },
        body: {
          en: "Bread by the loaf, cake by the slice, pick-and-mix by the kilo — an integrated scale calculates the price the instant the item lands on it, with the correct VAT for eat-in or takeaway already applied. Counter staff stop doing mental arithmetic over a busy queue, and every sale is captured accurately for the books.",
          de: "Brot pro Laib, Kuchen pro Stück, Pick-and-Mix pro Kilo — eine integrierte Waage berechnet den Preis in dem Moment, in dem der Artikel darauf landet, mit bereits korrekt angewandter MwSt für im Haus oder außer Haus. Das Thekenpersonal rechnet nicht mehr im Kopf über einer vollen Schlange, und jeder Verkauf wird korrekt für die Bücher erfasst.",
        },
      },
      {
        heading: {
          en: "Take cake pre-orders off the paper diary",
          de: "Torten-Vorbestellungen aus dem Papierkalender holen",
        },
        body: {
          en: "Birthday cakes and bread orders scribbled in a notebook or a WhatsApp thread get missed. GastroPos takes pre-orders online and at the counter, captures the pickup date, the inscription and the deposit, and reminds you what's due each morning — so the 9am cake is decorated by 8:45, every time.",
          de: "In ein Heft oder einen WhatsApp-Verlauf gekritzelte Geburtstagstorten und Brotbestellungen gehen unter. GastroPos nimmt Vorbestellungen online und an der Theke entgegen, erfasst Abholdatum, Beschriftung und Anzahlung und erinnert Sie jeden Morgen, was ansteht — sodass die 9-Uhr-Torte jedes Mal um 8:45 dekoriert ist.",
        },
      },
      {
        heading: {
          en: "Wholesale invoicing without the Excel night-shift",
          de: "Großhandelsrechnungen ohne Excel-Nachtschicht",
        },
        body: {
          en: "If you supply cafés, hotels or offices, B2B pricing per customer, standing orders and one-click invoicing replace the spreadsheet you fill in after closing. Production sees tomorrow's wholesale demand alongside the retail forecast, so you bake to the order instead of guessing and binning.",
          de: "Wenn Sie Cafés, Hotels oder Büros beliefern, ersetzen B2B-Preise pro Kunde, Daueraufträge und Ein-Klick-Rechnungen die Tabelle, die Sie nach Ladenschluss ausfüllen. Die Produktion sieht die Großhandelsnachfrage von morgen neben der Einzelhandelsprognose, sodass Sie nach Auftrag backen, statt zu raten und wegzuwerfen.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Does it integrate with a scale?",
          de: "Lässt es sich mit einer Waage verbinden?",
        },
        a: {
          en: "Yes. Connect a supported scale and price-by-weight items calculate automatically at the correct VAT rate.",
          de: "Ja. Verbinden Sie eine unterstützte Waage, und Gewichtsartikel werden automatisch zum richtigen MwSt-Satz berechnet.",
        },
      },
      {
        q: {
          en: "Can customers pre-order cakes online?",
          de: "Können Kunden Torten online vorbestellen?",
        },
        a: {
          en: "Yes. Take pre-orders online and at the counter with pickup date, inscription, options and a deposit, plus a daily due-list for your team.",
          de: "Ja. Nehmen Sie Vorbestellungen online und an der Theke mit Abholdatum, Beschriftung, Optionen und Anzahlung entgegen, plus einer täglichen Fälligkeitsliste für Ihr Team.",
        },
      },
      {
        q: {
          en: "Does it handle wholesale B2B customers?",
          de: "Unterstützt es Großhandels-B2B-Kunden?",
        },
        a: {
          en: "Yes. Set per-customer wholesale pricing, manage standing orders and generate invoices in one click instead of in Excel.",
          de: "Ja. Legen Sie kundenspezifische Großhandelspreise fest, verwalten Sie Daueraufträge und erstellen Sie Rechnungen mit einem Klick statt in Excel.",
        },
      },
      {
        q: {
          en: "Is takeaway vs eat-in VAT handled automatically?",
          de: "Wird die MwSt für außer Haus vs im Haus automatisch behandelt?",
        },
        a: {
          en: "Yes. The correct 7% or 19% rate is applied per item and carried through to your DATEV export with no manual work.",
          de: "Ja. Der richtige Satz von 7 % oder 19 % wird pro Artikel angewandt und ohne manuelle Arbeit in Ihren DATEV-Export übernommen.",
        },
      },
    ],
  },
  "food-truck": {
    sections: [
      {
        heading: {
          en: "Keep selling when the signal drops",
          de: "Weiter verkaufen, wenn das Signal abbricht",
        },
        body: {
          en: "A market pitch, a festival field or a kerb on bad 3G is where most cloud tills quit. GastroPos is offline-first: orders, payments and TSE signatures are written on the device and sync the moment you're back in coverage. The queue never stops because the bars dropped — you keep taking money while the truck next to you is rebooting their router.",
          de: "Ein Marktstand, ein Festivalgelände oder ein Bordstein mit schlechtem 3G — dort steigen die meisten Cloud-Kassen aus. GastroPos ist offline-first: Bestellungen, Zahlungen und TSE-Signaturen werden auf dem Gerät geschrieben und synchronisieren sich, sobald Sie wieder Empfang haben. Die Schlange stoppt nie, weil der Empfang weg ist — Sie nehmen weiter Geld ein, während der Truck nebenan seinen Router neu startet.",
        },
      },
      {
        heading: { en: "Your phone is the whole setup", de: "Ihr Smartphone ist das ganze Setup" },
        body: {
          en: "No bulky terminal, no tangle of cables in a moving vehicle. Run the till on the phone in your pocket, pair a small Bluetooth printer if you want receipts, and take contactless with Tap to Pay or a pocket reader. Setup is a single tap, and a second phone turns into a second register for the lunch surge.",
          de: "Kein sperriges Terminal, kein Kabelsalat in einem fahrenden Fahrzeug. Betreiben Sie die Kasse auf dem Smartphone in Ihrer Tasche, koppeln Sie bei Bedarf einen kleinen Bluetooth-Drucker für Belege und kassieren Sie kontaktlos per Tap to Pay oder Taschen-Reader. Die Einrichtung ist ein einziger Tipp, und ein zweites Smartphone wird zur zweiten Kasse für den Mittagsansturm.",
        },
      },
      {
        heading: {
          en: "Run three trucks from one dashboard",
          de: "Drei Trucks aus einem Dashboard steuern",
        },
        body: {
          en: "Multiple trucks, stalls or pop-ups roll up into one back office. Compare today's take across pitches, push a menu or price change to every vehicle at once, and reconcile cash from the road without waiting to get back to base. Growth stops meaning more spreadsheets.",
          de: "Mehrere Trucks, Stände oder Pop-ups laufen in einem Backoffice zusammen. Vergleichen Sie die heutigen Einnahmen über Standorte hinweg, schieben Sie eine Karten- oder Preisänderung an alle Fahrzeuge auf einmal und rechnen Sie Bargeld unterwegs ab, ohne erst zur Basis zurückzukehren. Wachstum bedeutet nicht mehr noch mehr Tabellen.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Does it really work fully offline?",
          de: "Funktioniert es wirklich vollständig offline?",
        },
        a: {
          en: "Yes. Orders, payments and TSE signatures are stored on the device and sync automatically when connectivity returns — nothing is lost.",
          de: "Ja. Bestellungen, Zahlungen und TSE-Signaturen werden auf dem Gerät gespeichert und synchronisieren sich automatisch, wenn die Verbindung zurückkommt — nichts geht verloren.",
        },
      },
      {
        q: {
          en: "Can I run it from just a phone?",
          de: "Kann ich es nur mit einem Smartphone betreiben?",
        },
        a: {
          en: "Yes. Phone-as-POS mode needs no extra hardware; add a Bluetooth printer or card reader only if you want them.",
          de: "Ja. Der Phone-as-POS-Modus braucht keine Zusatzhardware; fügen Sie einen Bluetooth-Drucker oder Kartenleser nur hinzu, wenn Sie möchten.",
        },
      },
      {
        q: {
          en: "Which contactless payments are supported?",
          de: "Welche kontaktlosen Zahlungen werden unterstützt?",
        },
        a: {
          en: "Apple Pay, Google Pay, SumUp and Stripe Tap to Pay, so you can take card on the phone itself.",
          de: "Apple Pay, Google Pay, SumUp und Stripe Tap to Pay, sodass Sie Kartenzahlung direkt auf dem Smartphone annehmen können.",
        },
      },
      {
        q: {
          en: "Is it still TSE-compliant on the move?",
          de: "Ist es auch unterwegs TSE-konform?",
        },
        a: {
          en: "Yes. TSE signing works offline on the device and the compliant records sync to the cloud once you're back online.",
          de: "Ja. Die TSE-Signierung funktioniert offline auf dem Gerät, und die konformen Datensätze synchronisieren sich in die Cloud, sobald Sie wieder online sind.",
        },
      },
    ],
  },
  kiosk: {
    sections: [
      {
        heading: {
          en: "Add a register without adding a wage",
          de: "Eine Kasse hinzufügen, ohne einen Lohn hinzuzufügen",
        },
        body: {
          en: "At peak, the counter is the bottleneck and every minute in the queue is a guest who walks. A self-order kiosk is an extra till that never calls in sick: guests browse at their own pace, customise without holding up anyone behind them, pay contactlessly and send the order straight to the kitchen. Your team moves from taking orders to making them.",
          de: "In der Spitze ist die Theke der Engpass, und jede Minute in der Schlange ist ein Gast, der geht. Ein Self-Order-Kiosk ist eine zusätzliche Kasse, die nie krank wird: Gäste stöbern im eigenen Tempo, individualisieren, ohne jemanden aufzuhalten, zahlen kontaktlos und senden die Bestellung direkt an die Küche. Ihr Team wechselt vom Aufnehmen der Bestellungen zum Zubereiten.",
        },
      },
      {
        heading: {
          en: "The kiosk upsells every single time",
          de: "Der Kiosk verkauft jedes Mal zusätzlich",
        },
        body: {
          en: "A tired cashier forgets to ask if you want fries; a kiosk never does. Automatic, item-aware upsells and combo prompts appear on every order, lifting average ticket by double digits without a word of pressure. Allergen and nutrition badges and a menu in the guest's own language do the explaining your counter staff don't have time for at the rush.",
          de: "Ein müder Kassierer vergisst zu fragen, ob Sie Pommes möchten; ein Kiosk nie. Automatische, artikelbezogene Upsells und Combo-Vorschläge erscheinen bei jeder Bestellung und heben den Durchschnittsbon zweistellig, ganz ohne Druck. Allergen- und Nährwert-Badges und eine Karte in der Sprache des Gastes erklären das, wofür Ihr Thekenpersonal im Rush keine Zeit hat.",
        },
      },
      {
        heading: { en: "Lock it down and let it run", de: "Absichern und laufen lassen" },
        body: {
          en: "Kiosk mode runs fullscreen with no way out to the home screen, so a tablet on a stand stays a kiosk all day. Orders, payments and reporting flow into the same GastroPos back office as every other channel, meaning the kiosk isn't a separate island to reconcile — it's just another door into the same system.",
          de: "Der Kiosk-Modus läuft im Vollbild ohne Ausweg zum Home-Bildschirm, sodass ein Tablet auf einem Ständer den ganzen Tag ein Kiosk bleibt. Bestellungen, Zahlungen und Reporting fließen in dasselbe GastroPos-Backoffice wie jeder andere Kanal — der Kiosk ist also keine separate Insel zum Abgleichen, sondern einfach eine weitere Tür in dasselbe System.",
        },
      },
    ],
    faq: [
      {
        q: { en: "Can any tablet become a kiosk?", de: "Kann jedes Tablet zu einem Kiosk werden?" },
        a: {
          en: "Yes. Put a supported Android tablet or iPad on a stand, enable kiosk mode and it runs locked fullscreen as a self-order terminal.",
          de: "Ja. Stellen Sie ein unterstütztes Android-Tablet oder iPad auf einen Ständer, aktivieren Sie den Kiosk-Modus, und es läuft gesperrt im Vollbild als Self-Order-Terminal.",
        },
      },
      {
        q: {
          en: "Does it actually increase order size?",
          de: "Erhöht es wirklich den Bestellwert?",
        },
        a: {
          en: "Yes. Automatic upsells and combos appear on every order; operators commonly see average ticket rise by around 20%.",
          de: "Ja. Automatische Upsells und Combos erscheinen bei jeder Bestellung; Betreiber sehen den Durchschnittsbon häufig um rund 20 % steigen.",
        },
      },
      {
        q: {
          en: "Can the menu show allergens and languages?",
          de: "Kann die Karte Allergene und Sprachen anzeigen?",
        },
        a: {
          en: "Yes. Allergen and nutrition badges appear per item and guests can switch the menu into their own language.",
          de: "Ja. Allergen- und Nährwert-Badges erscheinen pro Artikel, und Gäste können die Karte in ihre eigene Sprache umschalten.",
        },
      },
      {
        q: {
          en: "Do kiosk orders go straight to the kitchen?",
          de: "Gehen Kiosk-Bestellungen direkt in die Küche?",
        },
        a: {
          en: "Yes. They print and appear on the KDS exactly like any other order, and flow into the same reporting.",
          de: "Ja. Sie werden gedruckt und erscheinen auf dem KDS wie jede andere Bestellung und fließen in dasselbe Reporting.",
        },
      },
    ],
  },
  retail: {
    sections: [
      {
        heading: {
          en: "One stock figure across the shop floor and the web",
          de: "Ein Bestandswert über Ladenfläche und Web",
        },
        body: {
          en: "When in-store and online inventory drift apart, you oversell the last dress or hide stock you actually have. GastroPos keeps a single live stock figure with two-way Shopify sync, so selling the last unit at the till updates the website in the same second and vice versa. Barcode scanning and label printing make receiving and pricing fast, and variants for size and colour stay accurate down to the SKU.",
          de: "Wenn sich In-Store- und Online-Bestand auseinanderbewegen, verkaufen Sie das letzte Kleid doppelt oder verstecken Ware, die Sie haben. GastroPos hält einen einzigen Live-Bestandswert mit Zwei-Wege-Shopify-Sync, sodass der Verkauf des letzten Stücks an der Kasse die Webseite in derselben Sekunde aktualisiert und umgekehrt. Barcode-Scan und Etikettendruck beschleunigen Wareneingang und Auszeichnung, und Varianten für Größe und Farbe bleiben bis auf die SKU genau.",
        },
      },
      {
        heading: {
          en: "Stocktake on an iPad, not a lost weekend",
          de: "Inventur auf dem iPad, nicht ein verlorenes Wochenende",
        },
        body: {
          en: "Counts that never matched the system usually mean the count was the problem, not the stock. Scan your way around the shop on an iPad, count offline in the stockroom, and let GastroPos reconcile counted-versus-expected and flag every discrepancy with a reason. Operators routinely pull stock variance from 8% down to under 2% in a season.",
          de: "Zählungen, die nie mit dem System übereinstimmten, bedeuten meist, dass die Zählung das Problem war, nicht der Bestand. Scannen Sie sich mit dem iPad durch den Laden, zählen Sie offline im Lager, und GastroPos gleicht Soll und Ist ab und markiert jede Abweichung mit einem Grund. Betreiber senken die Bestandsabweichung routinemäßig von 8 % auf unter 2 % in einer Saison.",
        },
      },
      {
        heading: {
          en: "Know your customer, reward your regulars",
          de: "Kennen Sie Ihre Kunden, belohnen Sie Stammgäste",
        },
        body: {
          en: "Customer accounts hold purchase history, store credit and contact details, so the till knows who's in front of it. Offer layaway and back-orders without a paper trail, issue store credit instead of cash refunds, and turn a one-time buyer into a regular with targeted follow-up — the kind of relationship a faceless marketplace can never build for you.",
          de: "Kundenkonten enthalten Kaufhistorie, Guthaben und Kontaktdaten, sodass die Kasse weiß, wer vor ihr steht. Bieten Sie Anzahlung und Nachbestellung ohne Papierkram, geben Sie Guthaben statt Barerstattung aus und machen Sie aus einem Einmalkäufer einen Stammkunden mit gezielter Nachfass-Kommunikation — die Art Beziehung, die ein gesichtsloser Marktplatz nie für Sie aufbaut.",
        },
      },
    ],
    faq: [
      {
        q: { en: "Does it sync with Shopify?", de: "Synchronisiert es mit Shopify?" },
        a: {
          en: "Yes. Live two-way sync keeps in-store and online stock, products and prices aligned in real time.",
          de: "Ja. Ein Live-Zwei-Wege-Sync hält In-Store- und Online-Bestand, Produkte und Preise in Echtzeit abgeglichen.",
        },
      },
      {
        q: {
          en: "Can it handle size and colour variants?",
          de: "Beherrscht es Größen- und Farbvarianten?",
        },
        a: {
          en: "Yes. Track variants down to the SKU, with barcode scanning and label printing for fast receiving and pricing.",
          de: "Ja. Verfolgen Sie Varianten bis auf die SKU, mit Barcode-Scan und Etikettendruck für schnellen Wareneingang und Auszeichnung.",
        },
      },
      {
        q: { en: "How does stocktake work?", de: "Wie funktioniert die Inventur?" },
        a: {
          en: "Count on an iPad — including offline in the stockroom — and the system reconciles counted-vs-expected and flags every discrepancy.",
          de: "Zählen Sie auf einem iPad — auch offline im Lager — und das System gleicht Soll und Ist ab und markiert jede Abweichung.",
        },
      },
      {
        q: {
          en: "Are customer accounts and store credit supported?",
          de: "Werden Kundenkonten und Guthaben unterstützt?",
        },
        a: {
          en: "Yes. Accounts hold purchase history and contact details, and you can issue store credit, layaway and back-orders.",
          de: "Ja. Konten enthalten Kaufhistorie und Kontaktdaten, und Sie können Guthaben, Anzahlung und Nachbestellung ausgeben.",
        },
      },
    ],
  },
  "hair-salon": {
    sections: [
      {
        heading: {
          en: "Turn no-shows into kept appointments",
          de: "Aus No-Shows eingehaltene Termine machen",
        },
        body: {
          en: "Empty chairs from forgotten appointments are pure lost revenue you can't recover. A public booking page under your own domain lets clients book themselves around the clock, while automatic SMS and email reminders cut no-shows by around a third. Deposits at booking give serial offenders a reason to show up — or to pay if they don't.",
          de: "Leere Stühle durch vergessene Termine sind reiner Umsatzverlust, den Sie nicht zurückholen können. Eine öffentliche Buchungsseite unter Ihrer eigenen Domain lässt Kunden rund um die Uhr selbst buchen, während automatische SMS- und E-Mail-Erinnerungen die No-Shows um rund ein Drittel senken. Anzahlungen bei der Buchung geben Wiederholungstätern einen Grund zu erscheinen — oder zu zahlen, wenn nicht.",
        },
      },
      {
        heading: {
          en: "Service and retail on one clean ticket",
          de: "Service und Retail auf einem sauberen Bon",
        },
        body: {
          en: "A cut, a colour and the shampoo the client takes home belong on one bill, not three. GastroPos rings up service and retail together, splits stylist commission by service and by product automatically, and pools and distributes tips by stylist — so the maths your front desk used to do by hand at close just happens.",
          de: "Ein Schnitt, eine Farbe und das Shampoo, das der Kunde mitnimmt, gehören auf eine Rechnung, nicht auf drei. GastroPos kassiert Service und Retail zusammen, teilt die Stylisten-Provision automatisch nach Service und Produkt und sammelt und verteilt Trinkgelder pro Stylist — sodass die Rechnerei, die Ihr Empfang früher bei Ladenschluss von Hand machte, einfach passiert.",
        },
      },
      {
        heading: {
          en: "The client's history follows them to the chair",
          de: "Die Kundenhistorie folgt dem Kunden zum Stuhl",
        },
        body: {
          en: "Colour formulas, preferences and past services live in the client's profile, so any stylist can pick up exactly where the last one left off. New team members deliver consistent results, regulars feel remembered, and the awkward 'what did we use last time?' conversation is replaced by a record on the screen.",
          de: "Color-Formeln, Vorlieben und vergangene Services liegen im Kundenprofil, sodass jeder Stylist genau dort weitermacht, wo der letzte aufgehört hat. Neue Teammitglieder liefern konsistente Ergebnisse, Stammkunden fühlen sich erinnert, und das unangenehme „Was haben wir letztes Mal verwendet?“ wird durch einen Eintrag auf dem Bildschirm ersetzt.",
        },
      },
    ],
    faq: [
      {
        q: { en: "Is online booking included?", de: "Ist die Online-Buchung enthalten?" },
        a: {
          en: "Yes. You get a public booking page under your own domain with real-time availability and automatic confirmations.",
          de: "Ja. Sie erhalten eine öffentliche Buchungsseite unter Ihrer eigenen Domain mit Echtzeit-Verfügbarkeit und automatischen Bestätigungen.",
        },
      },
      {
        q: { en: "Will reminders reduce no-shows?", de: "Reduzieren Erinnerungen die No-Shows?" },
        a: {
          en: "Yes. Automatic SMS and email reminders typically cut no-shows by around 35%, and you can require a deposit at booking.",
          de: "Ja. Automatische SMS- und E-Mail-Erinnerungen senken No-Shows typischerweise um rund 35 %, und Sie können eine Anzahlung bei der Buchung verlangen.",
        },
      },
      {
        q: {
          en: "How are stylist commissions handled?",
          de: "Wie werden Stylisten-Provisionen behandelt?",
        },
        a: {
          en: "Commission is calculated automatically per service and per product, and tips are pooled and distributed by stylist.",
          de: "Die Provision wird automatisch pro Service und pro Produkt berechnet, und Trinkgelder werden pro Stylist gesammelt und verteilt.",
        },
      },
      {
        q: {
          en: "Can I store colour formulas per client?",
          de: "Kann ich Color-Formeln pro Kunde speichern?",
        },
        a: {
          en: "Yes. Each client profile keeps colour formulas, preferences and service history so any stylist can continue seamlessly.",
          de: "Ja. Jedes Kundenprofil speichert Color-Formeln, Vorlieben und Service-Historie, sodass jeder Stylist nahtlos weitermachen kann.",
        },
      },
    ],
  },
  "beauty-salon": {
    sections: [
      {
        heading: {
          en: "Multi-room scheduling without the double-booking",
          de: "Mehrraum-Planung ohne Doppelbuchung",
        },
        body: {
          en: "When treatments run across several rooms and therapists, a paper diary guarantees an overlap sooner or later. GastroPos schedules by room and by resource, so a booking only takes a slot if the room, the therapist and the equipment are all free. The calendar shows your whole day at a glance and quietly prevents the clash before it happens.",
          de: "Wenn Behandlungen über mehrere Räume und Therapeuten laufen, garantiert ein Papierkalender früher oder später eine Überschneidung. GastroPos plant nach Raum und Ressource, sodass eine Buchung nur dann einen Slot belegt, wenn Raum, Therapeut und Gerät frei sind. Der Kalender zeigt Ihren ganzen Tag auf einen Blick und verhindert die Kollision still, bevor sie passiert.",
        },
      },
      {
        heading: {
          en: "Stop series packages leaking revenue",
          de: "Verhindern Sie, dass Serien-Pakete Umsatz verlieren",
        },
        body: {
          en: "Treatment packages and series tracked on Post-its lose count, and lost count means free treatments. GastroPos tracks the balance on every package automatically, redeeming one session at a time and showing exactly how many remain. Gift vouchers are issued and redeemed in the system too, so the revenue you sold is the revenue you actually capture.",
          de: "Auf Post-its verfolgte Behandlungspakete und Serien verlieren den Überblick, und verlorener Überblick bedeutet kostenlose Behandlungen. GastroPos verfolgt das Restguthaben jedes Pakets automatisch, löst jeweils eine Sitzung ein und zeigt genau, wie viele übrig sind. Auch Gutscheine werden im System ausgegeben und eingelöst, sodass der verkaufte Umsatz der Umsatz ist, den Sie tatsächlich erfassen.",
        },
      },
      {
        heading: {
          en: "Treatments, retail and consent in one record",
          de: "Behandlungen, Retail und Einwilligung in einem Datensatz",
        },
        body: {
          en: "Sell the facial and the serum that maintains it on the same ticket, with therapist commission split automatically. Consent and intake forms attach to the treatment, so the paperwork a beauty business needs lives with the client record instead of in a folder — and turns first-time bookings into the repeat regulars that a spa runs on.",
          de: "Verkaufen Sie die Gesichtsbehandlung und das pflegende Serum auf demselben Bon, mit automatisch geteilter Therapeuten-Provision. Einwilligungs- und Anamnesebögen hängen an der Behandlung, sodass der Papierkram, den ein Beauty-Betrieb braucht, beim Kundendatensatz liegt statt im Ordner — und macht aus Erstbuchungen die Stammkunden, von denen ein Spa lebt.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can it schedule multiple rooms and resources?",
          de: "Kann es mehrere Räume und Ressourcen planen?",
        },
        a: {
          en: "Yes. Bookings reserve the room, therapist and equipment together, so overlapping bookings are prevented automatically.",
          de: "Ja. Buchungen reservieren Raum, Therapeut und Gerät gemeinsam, sodass überlappende Buchungen automatisch verhindert werden.",
        },
      },
      {
        q: {
          en: "How are treatment packages tracked?",
          de: "Wie werden Behandlungspakete verfolgt?",
        },
        a: {
          en: "Each package and series tracks its remaining balance automatically, redeeming one session at a time with the count always visible.",
          de: "Jedes Paket und jede Serie verfolgt das Restguthaben automatisch, löst jeweils eine Sitzung ein, und der Stand ist immer sichtbar.",
        },
      },
      {
        q: { en: "Are gift vouchers supported?", de: "Werden Gutscheine unterstützt?" },
        a: {
          en: "Yes. Issue and redeem gift vouchers directly in the system so voucher revenue is fully tracked.",
          de: "Ja. Geben Sie Gutscheine direkt im System aus und lösen Sie sie ein, sodass der Gutschein-Umsatz vollständig erfasst wird.",
        },
      },
      {
        q: {
          en: "Can I attach consent forms to a treatment?",
          de: "Kann ich Einwilligungsformulare an eine Behandlung anhängen?",
        },
        a: {
          en: "Yes. Consent and intake forms attach to each treatment and stay with the client record.",
          de: "Ja. Einwilligungs- und Anamnesebögen werden an jede Behandlung angehängt und bleiben beim Kundendatensatz.",
        },
      },
    ],
  },
  "service-business": {
    sections: [
      {
        heading: {
          en: "Get paid the deposit before you do the work",
          de: "Die Anzahlung erhalten, bevor Sie arbeiten",
        },
        body: {
          en: "Chasing deposits by message after the fact is unpaid admin and an awkward conversation. GastroPos takes the deposit at the moment of online booking, so a tattoo session, a repair or a grooming slot is secured with skin in the game before it ever hits your calendar. Fewer flaky bookings, less money left on the table.",
          de: "Anzahlungen im Nachhinein per Nachricht hinterherzulaufen ist unbezahlte Verwaltung und ein unangenehmes Gespräch. GastroPos nimmt die Anzahlung im Moment der Online-Buchung, sodass eine Tattoo-Sitzung, eine Reparatur oder ein Pflege-Termin mit echtem Einsatz gesichert ist, bevor er überhaupt in Ihrem Kalender landet. Weniger unzuverlässige Buchungen, weniger Geld, das liegen bleibt.",
        },
      },
      {
        heading: {
          en: "Recurring work that books itself",
          de: "Wiederkehrende Aufträge, die sich selbst buchen",
        },
        body: {
          en: "The six-week trim, the quarterly service, the monthly maintenance — recurring jobs forgotten are recurring revenue lost. Set a service to repeat and GastroPos rebooks it and reminds the client automatically, so your calendar refills itself with the work you already won instead of relying on the customer to remember you.",
          de: "Der Schnitt alle sechs Wochen, die vierteljährliche Wartung, die monatliche Instandhaltung — vergessene wiederkehrende Aufträge sind verlorener wiederkehrender Umsatz. Stellen Sie einen Service auf Wiederholung, und GastroPos bucht ihn neu und erinnert den Kunden automatisch, sodass sich Ihr Kalender mit bereits gewonnener Arbeit selbst füllt, statt darauf zu hoffen, dass der Kunde an Sie denkt.",
        },
      },
      {
        heading: {
          en: "Invoice on the spot, not at 11pm",
          de: "Sofort abrechnen, nicht um 23 Uhr",
        },
        body: {
          en: "Mobile invoicing and e-receipts mean the job is billed the moment it's done, from your phone, while you're still standing with the customer. Photos and notes attach to the client history so the next visit starts with full context. The admin you used to do after hours simply stops being a separate task.",
          de: "Mobile Rechnungsstellung und E-Belege bedeuten, dass der Auftrag in dem Moment abgerechnet wird, in dem er fertig ist — vom Smartphone, während Sie noch beim Kunden stehen. Fotos und Notizen hängen an der Kundenhistorie, sodass der nächste Besuch mit vollem Kontext beginnt. Die Verwaltung, die Sie früher nach Feierabend erledigten, ist einfach keine separate Aufgabe mehr.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Can I take a deposit at booking?",
          de: "Kann ich eine Anzahlung bei der Buchung nehmen?",
        },
        a: {
          en: "Yes. Require a deposit at online checkout so appointments are secured before they reach your calendar.",
          de: "Ja. Verlangen Sie eine Anzahlung beim Online-Checkout, sodass Termine gesichert sind, bevor sie in Ihren Kalender gelangen.",
        },
      },
      {
        q: {
          en: "Does it handle recurring services?",
          de: "Unterstützt es wiederkehrende Services?",
        },
        a: {
          en: "Yes. Set a service to repeat and it rebooks automatically with a reminder sent to the client.",
          de: "Ja. Stellen Sie einen Service auf Wiederholung, und er wird automatisch neu gebucht, mit einer Erinnerung an den Kunden.",
        },
      },
      {
        q: { en: "Can I invoice from my phone?", de: "Kann ich vom Smartphone abrechnen?" },
        a: {
          en: "Yes. Mobile invoicing and e-receipts let you bill the moment the job is done, wherever you are.",
          de: "Ja. Mobile Rechnungsstellung und E-Belege lassen Sie abrechnen, sobald der Auftrag fertig ist — wo immer Sie sind.",
        },
      },
      {
        q: {
          en: "Is it flexible enough for my type of business?",
          de: "Ist es flexibel genug für meine Art von Betrieb?",
        },
        a: {
          en: "Yes. Tattoo studios, repair shops, dog groomers and more configure services, durations and deposits to fit how they actually work.",
          de: "Ja. Tattoo-Studios, Reparaturbetriebe, Hundesalons und mehr konfigurieren Services, Dauer und Anzahlungen passend zu ihrer tatsächlichen Arbeitsweise.",
        },
      },
    ],
  },
};

export const industries: Record<IndustrySlug, IndustryContent> = Object.fromEntries(
  (Object.keys(baseIndustries) as IndustrySlug[]).map((slug) => [
    slug,
    { ...baseIndustries[slug], ...industryExtras[slug] },
  ]),
) as Record<IndustrySlug, IndustryContent>;
