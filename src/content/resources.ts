export type ResourceSlug = "blog" | "help" | "pos-guide" | "tse-guide" | "datev-guide";

export interface ResourceContent {
  slug: ResourceSlug;
  eyebrow: { en: string; de: string };
  title: { en: string; de: string };
  lede: { en: string; de: string };
  metaTitle: { en: string; de: string };
  metaDescription: { en: string; de: string };
  sections: { heading: { en: string; de: string }; body: { en: string; de: string } }[];
}

export const resources: Record<ResourceSlug, ResourceContent> = {
  blog: {
    slug: "blog",
    eyebrow: { en: "Blog", de: "Blog" },
    title: { en: "Insights for modern operators.", de: "Wissen für moderne Betreiber." },
    lede: { en: "Hands-on guides on POS, TSE, food cost, staff productivity and growing your hospitality or retail business.", de: "Praxisleitfäden zu Kasse, TSE, Wareneinsatz, Personalproduktivität und Wachstum in Gastronomie und Handel." },
    metaTitle: { en: "GastroPos Blog — POS, TSE & restaurant operations", de: "GastroPos Blog — Kasse, TSE & Gastronomie-Betrieb" },
    metaDescription: { en: "Operator-focused articles on cloud POS, TSE compliance, DATEV, food cost, staff productivity, and growing restaurants and retail.", de: "Praxisorientierte Artikel zu Cloud-Kasse, TSE-Konformität, DATEV, Wareneinsatz, Personalproduktivität und Wachstum." },
    sections: [
      { heading: { en: "How to choose a POS system in 2026", de: "Wie wählt man 2026 ein Kassensystem" }, body: { en: "Five non-negotiable criteria — TSE compliance, offline reliability, integrations, total cost of ownership, and support response time — and how to score vendors against them.", de: "Fünf nicht verhandelbare Kriterien — TSE-Konformität, Offline-Zuverlässigkeit, Integrationen, Gesamtbetriebskosten und Support-Reaktionszeit — und wie Sie Anbieter bewerten." } },
      { heading: { en: "Cutting food cost from 32% to 26%", de: "Wareneinsatz von 32 % auf 26 % senken" }, body: { en: "A field-tested playbook covering recipe engineering, supplier negotiation, portion control and real-time inventory deduction.", de: "Ein praxiserprobtes Playbook zu Rezeptkalkulation, Lieferantenverhandlung, Portionskontrolle und Echtzeit-Bestandsabbuchung." } },
      { heading: { en: "TSE 2026: what's changing", de: "TSE 2026: Was sich ändert" }, body: { en: "What the latest BMF letter means for your cash register, how the cloud TSE works, and the deadlines you cannot miss.", de: "Was das aktuelle BMF-Schreiben für Ihre Kasse bedeutet, wie die Cloud-TSE funktioniert und welche Fristen Sie nicht verpassen dürfen." } },
    ],
  },
  help: {
    slug: "help",
    eyebrow: { en: "Help Center", de: "Hilfe-Center" },
    title: { en: "Help Center.", de: "Hilfe-Center." },
    lede: { en: "Step-by-step guides, video walkthroughs and answers to the most common operator questions. Can't find it? Email support@gastropos.com.", de: "Schritt-für-Schritt-Anleitungen, Video-Tutorials und Antworten auf die häufigsten Fragen. Nicht gefunden? Schreiben Sie an support@gastropos.com." },
    metaTitle: { en: "Help Center — GastroPos POS Support", de: "Hilfe-Center — GastroPos Kassen-Support" },
    metaDescription: { en: "Get help with GastroPos: setup guides, hardware compatibility, TSE activation, DATEV exports and troubleshooting.", de: "Hilfe für GastroPos: Einrichtung, Hardware-Kompatibilität, TSE-Aktivierung, DATEV-Exporte und Fehlerbehebung." },
    sections: [
      { heading: { en: "Getting started", de: "Erste Schritte" }, body: { en: "Create your account, set up your menu, configure your printer and take your first order — in under 30 minutes.", de: "Konto erstellen, Karte einrichten, Drucker konfigurieren und erste Bestellung aufnehmen — in unter 30 Minuten." } },
      { heading: { en: "Hardware compatibility", de: "Hardware-Kompatibilität" }, body: { en: "Tested receipt printers (Epson, Star), cash drawers, barcode scanners, scales and payment terminals.", de: "Getestete Bondrucker (Epson, Star), Kassenschubladen, Barcode-Scanner, Waagen und Zahlungsterminals." } },
      { heading: { en: "TSE activation", de: "TSE-Aktivierung" }, body: { en: "How to activate your Fiskaly cloud TSE in one click and what to do if a signature fails.", de: "Cloud-TSE per Klick aktivieren und was tun, wenn eine Signatur fehlschlägt." } },
    ],
  },
  "pos-guide": {
    slug: "pos-guide",
    eyebrow: { en: "Guide", de: "Leitfaden" },
    title: { en: "The complete guide to choosing a POS system.", de: "Der vollständige Leitfaden zur Wahl eines Kassensystems." },
    lede: { en: "Everything you need to know before buying a point-of-sale system in 2026 — features, compliance, total cost, support, switching cost.", de: "Alles, was Sie 2026 vor dem Kauf eines Kassensystems wissen müssen — Funktionen, Konformität, Gesamtkosten, Support, Wechselkosten." },
    metaTitle: { en: "POS System Guide 2026 — How to choose | GastroPos", de: "Kassensystem-Leitfaden 2026 — Auswahl | GastroPos" },
    metaDescription: { en: "Complete buyer's guide for cloud POS systems in 2026: features, TSE compliance, hardware, total cost of ownership and switching tips.", de: "Vollständiger Käuferleitfaden für Cloud-Kassensysteme 2026: Funktionen, TSE-Konformität, Hardware, Gesamtkosten und Wechseltipps." },
    sections: [
      { heading: { en: "What a modern POS actually is", de: "Was eine moderne Kasse wirklich ist" }, body: { en: "A modern POS is no longer just a register — it's the operational nervous system of your venue: orders, payments, inventory, staff, customers and reporting in one place.", de: "Eine moderne Kasse ist keine Registrierkasse mehr — sie ist das operative Nervensystem Ihres Betriebs: Bestellungen, Zahlungen, Bestände, Personal, Kunden und Reporting an einem Ort." } },
      { heading: { en: "Cloud vs on-premise", de: "Cloud vs On-Premise" }, body: { en: "Cloud POS wins on updates, multi-store, remote access and cost. On-premise wins on data sovereignty for specific regulated cases. For 95% of operators, cloud is the right answer.", de: "Cloud-Kassen gewinnen bei Updates, Multi-Store, Fernzugriff und Kosten. On-Premise gewinnt bei Datensouveränität in spezifischen regulierten Fällen. Für 95 % der Betreiber ist die Cloud die richtige Wahl." } },
      { heading: { en: "Total cost of ownership", de: "Gesamtbetriebskosten" }, body: { en: "Don't look at the monthly fee. Add hardware, payment processing margin, training time, downtime risk and switching cost over 3 years. The cheapest sticker often costs the most over time.", de: "Schauen Sie nicht auf die Monatsgebühr. Addieren Sie Hardware, Zahlungsabwicklungs-Marge, Schulungszeit, Ausfallrisiko und Wechselkosten über 3 Jahre. Der billigste Preis kostet oft am meisten." } },
      { heading: { en: "The 12 questions to ask every vendor", de: "Die 12 Fragen an jeden Anbieter" }, body: { en: "From offline behavior and TSE certification to API access and support SLA — the exact checklist we recommend.", de: "Vom Offline-Verhalten und TSE-Zertifizierung bis API-Zugang und Support-SLA — die exakte Checkliste, die wir empfehlen." } },
    ],
  },
  "tse-guide": {
    slug: "tse-guide",
    eyebrow: { en: "Compliance", de: "Konformität" },
    title: { en: "The TSE guide for German cash registers.", de: "Der TSE-Leitfaden für deutsche Kassensysteme." },
    lede: { en: "What KassenSichV, TSE and DSFinV-K mean for your business, the deadlines, the fines, and how to be compliant in one click.", de: "Was KassenSichV, TSE und DSFinV-K für Ihr Geschäft bedeuten, die Fristen, die Bußgelder und wie Sie mit einem Klick konform werden." },
    metaTitle: { en: "TSE Guide for German POS Systems | GastroPos", de: "TSE-Leitfaden für deutsche Kassensysteme | GastroPos" },
    metaDescription: { en: "Everything operators need to know about TSE, KassenSichV, DSFinV-K and GoBD — deadlines, fines and how to activate cloud TSE.", de: "Alles, was Betreiber zu TSE, KassenSichV, DSFinV-K und GoBD wissen müssen — Fristen, Bußgelder und Cloud-TSE-Aktivierung." },
    sections: [
      { heading: { en: "What is the TSE?", de: "Was ist die TSE?" }, body: { en: "The Technische Sicherheitseinrichtung is a certified module that digitally signs every transaction, making it tamper-proof for German tax authorities.", de: "Die Technische Sicherheitseinrichtung ist ein zertifiziertes Modul, das jede Transaktion digital signiert und sie für die deutschen Finanzbehörden manipulationssicher macht." } },
      { heading: { en: "Hardware TSE vs cloud TSE", de: "Hardware-TSE vs Cloud-TSE" }, body: { en: "Hardware TSE is a USB stick you plug into your register. Cloud TSE is a service that signs transactions over the internet. Cloud is cheaper, easier to manage, and recommended for cloud POS.", de: "Hardware-TSE ist ein USB-Stick. Cloud-TSE ist ein Dienst, der Transaktionen über das Internet signiert. Cloud ist günstiger, einfacher und für Cloud-Kassen empfohlen." } },
      { heading: { en: "DSFinV-K explained", de: "DSFinV-K erklärt" }, body: { en: "DSFinV-K is the standardized format the tax office reads during an audit. Every TSE transaction must be exportable in this format — GastroPos does it automatically.", de: "DSFinV-K ist das Standardformat, das das Finanzamt bei einer Prüfung liest. Jede TSE-Transaktion muss in diesem Format exportierbar sein — GastroPos erledigt das automatisch." } },
    ],
  },
  "datev-guide": {
    slug: "datev-guide",
    eyebrow: { en: "Accounting", de: "Buchhaltung" },
    title: { en: "DATEV integration for hospitality and retail.", de: "DATEV-Integration für Gastronomie und Handel." },
    lede: { en: "How to connect your POS to DATEV, the right account framework (SKR03 / SKR04), VAT splits, and what your tax advisor actually needs.", de: "So verbinden Sie Ihre Kasse mit DATEV, der richtige Kontenrahmen (SKR03 / SKR04), MwSt-Splits und was Ihr Steuerberater wirklich braucht." },
    metaTitle: { en: "DATEV Integration Guide for POS | GastroPos", de: "DATEV-Integration-Leitfaden für Kassen | GastroPos" },
    metaDescription: { en: "How to connect your POS to DATEV: SKR03/SKR04, VAT splits, daily/monthly booking, and what your tax advisor needs.", de: "Kasse mit DATEV verbinden: SKR03/SKR04, MwSt-Splits, Tages-/Monatsbuchung und was der Steuerberater braucht." },
    sections: [
      { heading: { en: "SKR03 or SKR04?", de: "SKR03 oder SKR04?" }, body: { en: "Most hospitality businesses use SKR03; retail tends toward SKR04. Both are supported in GastroPos out of the box.", de: "Die meisten Gastronomen nutzen SKR03; der Handel eher SKR04. GastroPos unterstützt beide nativ." } },
      { heading: { en: "VAT splits done right", de: "MwSt-Splits richtig gemacht" }, body: { en: "Eat-in 19% vs takeaway 7%, alcoholic vs non-alcoholic, mixed receipts — all split automatically and booked to the right accounts.", de: "Im Haus 19 % vs Außer Haus 7 %, alkoholisch vs alkoholfrei, gemischte Belege — alles automatisch gesplittet und auf die richtigen Konten gebucht." } },
    ],
  },
};
