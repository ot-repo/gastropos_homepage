import { createFileRoute, notFound } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

type LegalSlug = "privacy" | "terms" | "impressum" | "cookies";

type Localized = { en: string; de: string };

type LegalSection = {
  heading: Localized;
  paragraphs: { en: string[]; de: string[] };
};

type LegalDoc = {
  title: Localized;
  meta: Localized;
  updated?: Localized;
  body?: Localized;
  sections?: LegalSection[];
};

const legal: Record<LegalSlug, LegalDoc> = {
  privacy: {
    title: { en: "Privacy Policy", de: "Datenschutzerklärung" },
    meta: {
      en: "GastroPos privacy policy — how we collect, use and protect your data under GDPR.",
      de: "Datenschutzerklärung von GastroPos — wie wir Ihre Daten gemäß DSGVO erheben, nutzen und schützen.",
    },
    body: {
      en: 'GastroPos GmbH ("we", "us") processes personal data in compliance with the EU General Data Protection Regulation (GDPR). We collect only the data we need to operate your POS account: business contact details, transaction records, and the user accounts you create. Transaction data is stored in EU data centers (Frankfurt and Amsterdam). We never sell your data. You may request access, correction or deletion of your data at any time by emailing privacy@gastropos.com. Our Data Protection Officer can be reached at dpo@gastropos.com.',
      de: "Die GastroPos GmbH („wir“) verarbeitet personenbezogene Daten gemäß der EU-Datenschutz-Grundverordnung (DSGVO). Wir erheben nur die Daten, die wir zum Betrieb Ihres Kassen-Kontos benötigen: geschäftliche Kontaktdaten, Transaktionsdaten und die von Ihnen erstellten Benutzerkonten. Transaktionsdaten werden in EU-Rechenzentren (Frankfurt und Amsterdam) gespeichert. Wir verkaufen Ihre Daten niemals. Sie können jederzeit Auskunft, Korrektur oder Löschung Ihrer Daten unter privacy@gastropos.com anfordern. Unseren Datenschutzbeauftragten erreichen Sie unter dpo@gastropos.com.",
    },
  },
  terms: {
    title: { en: "Terms of Service", de: "Allgemeine Geschäftsbedingungen" },
    meta: {
      en: "GastroPos terms of service — the agreement that governs use of our cloud POS platform.",
      de: "GastroPos Allgemeine Geschäftsbedingungen — die Vereinbarung über die Nutzung unserer Cloud-Kassenplattform.",
    },
    updated: { en: "Last updated: June 2026", de: "Stand: Juni 2026" },
    sections: [
      {
        heading: {
          en: "§1 Scope, Contracting Party, Definitions",
          de: "§1 Geltungsbereich, Vertragspartner, Begriffsbestimmungen",
        },
        paragraphs: {
          en: [
            '(1) These General Terms and Conditions ("Terms") govern the contractual relationship between GastroPos GmbH, Maximilianstraße 13, 80539 München, Germany ("Provider", "we", "us") and its customers ("Customer", "you") regarding the use of the cloud-based point-of-sale software and related services marketed under the name GastroPos (the "Service").',
            "(2) The Service is offered exclusively to entrepreneurs within the meaning of § 14 of the German Civil Code (BGB), i.e. natural or legal persons or partnerships with legal capacity acting in the exercise of their commercial or independent professional activity. The Service is not directed at consumers (§ 13 BGB). By concluding a contract, the Customer warrants that it is acting as an entrepreneur.",
            "(3) These Terms apply exclusively. Conflicting, deviating or supplementary terms of the Customer do not become part of the contract unless we have expressly agreed to their validity in text form. This also applies if we render the Service without reservation in knowledge of the Customer's terms.",
            "(4) These Terms apply in their respective version as a framework agreement also to future contracts for similar services with the same Customer, without us having to refer to them again in each individual case.",
          ],
          de: [
            "(1) Diese Allgemeinen Geschäftsbedingungen („AGB“) regeln das Vertragsverhältnis zwischen der GastroPos GmbH, Maximilianstraße 13, 80539 München, Deutschland („Anbieter“, „wir“) und ihren Kunden („Kunde“) über die Nutzung der unter der Bezeichnung GastroPos angebotenen cloud-basierten Kassensoftware und der damit verbundenen Leistungen (der „Dienst“).",
            "(2) Der Dienst richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, d. h. natürliche oder juristische Personen oder rechtsfähige Personengesellschaften, die in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln. Der Dienst richtet sich nicht an Verbraucher (§ 13 BGB). Mit Vertragsschluss versichert der Kunde, als Unternehmer zu handeln.",
            "(3) Es gelten ausschließlich diese AGB. Entgegenstehende, abweichende oder ergänzende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, wir haben ihrer Geltung ausdrücklich in Textform zugestimmt. Dies gilt auch, wenn wir den Dienst in Kenntnis der Bedingungen des Kunden vorbehaltlos erbringen.",
            "(4) Diese AGB gelten in ihrer jeweiligen Fassung als Rahmenvereinbarung auch für künftige Verträge über gleichartige Leistungen mit demselben Kunden, ohne dass wir in jedem Einzelfall erneut auf sie hinweisen müssten.",
          ],
        },
      },
      {
        heading: {
          en: "§2 Subject Matter and Scope of Services",
          de: "§2 Vertragsgegenstand und Leistungsumfang",
        },
        paragraphs: {
          en: [
            "(1) We provide the Customer with the Service as Software-as-a-Service (SaaS) for use via the internet for the term of the contract. The functional scope results from the service description, the selected package and the product description valid at the time of the conclusion of the contract on our website.",
            "(2) The Service is hosted on servers operated by us or by service providers commissioned by us. The transfer point for the Service is the router exit of the data center used by us. We do not owe the establishment or maintenance of the data connection between the Customer's IT systems and the aforementioned transfer point, nor the procurement or suitability of the Customer's hardware, software or internet access.",
            "(3) We continuously develop the Service and may modify, extend or restrict functions, in particular where this serves technical progress, IT security or legal requirements, provided the core functionality owed is maintained and the change is reasonable for the Customer.",
            "(4) We do not warrant that the Service is compatible with every end device or third-party system. Statements regarding availability and performance constitute a binding quality of the Service only where they have been expressly designated as such in text form.",
          ],
          de: [
            "(1) Wir stellen dem Kunden den Dienst als Software-as-a-Service (SaaS) für die Vertragslaufzeit zur Nutzung über das Internet bereit. Der Funktionsumfang ergibt sich aus der Leistungsbeschreibung, dem gewählten Paket sowie der zum Zeitpunkt des Vertragsschlusses auf unserer Webseite gültigen Produktbeschreibung.",
            "(2) Der Dienst wird auf Servern betrieben, die von uns oder von uns beauftragten Dienstleistern betrieben werden. Übergabepunkt für den Dienst ist der Routerausgang des von uns genutzten Rechenzentrums. Die Herstellung oder Aufrechterhaltung der Datenverbindung zwischen den IT-Systemen des Kunden und dem genannten Übergabepunkt sowie die Beschaffung oder Eignung der Hardware, Software oder des Internetzugangs des Kunden schulden wir nicht.",
            "(3) Wir entwickeln den Dienst fortlaufend weiter und können Funktionen ändern, erweitern oder einschränken, insbesondere soweit dies dem technischen Fortschritt, der IT-Sicherheit oder rechtlichen Anforderungen dient, sofern die geschuldete Kernfunktionalität erhalten bleibt und die Änderung für den Kunden zumutbar ist.",
            "(4) Wir gewährleisten nicht, dass der Dienst mit jedem Endgerät oder Drittsystem kompatibel ist. Angaben zu Verfügbarkeit und Leistung stellen nur dann eine verbindliche Beschaffenheit des Dienstes dar, wenn sie ausdrücklich in Textform als solche bezeichnet wurden.",
          ],
        },
      },
      {
        heading: {
          en: "§3 Conclusion of Contract, Trial Period",
          de: "§3 Vertragsschluss, Testphase",
        },
        paragraphs: {
          en: [
            "(1) The presentation of the Service on our website does not constitute a binding offer. By completing the booking process the Customer makes a binding offer to conclude a contract. The contract is concluded upon our confirmation in text form or upon activation of the Service, whichever occurs first.",
            "(2) We may offer a non-binding free trial. We may modify, restrict or discontinue trial offers at any time and may refuse activation until identity and entrepreneur status have been plausibly established.",
            "(3) The Customer is responsible for keeping its access credentials confidential and for all activities carried out under its account, unless the Customer is not responsible for the misuse.",
          ],
          de: [
            "(1) Die Darstellung des Dienstes auf unserer Webseite stellt kein verbindliches Angebot dar. Mit Abschluss des Buchungsvorgangs gibt der Kunde ein verbindliches Angebot auf Vertragsschluss ab. Der Vertrag kommt mit unserer Bestätigung in Textform oder mit Freischaltung des Dienstes zustande, je nachdem, was zuerst eintritt.",
            "(2) Wir können eine unverbindliche kostenlose Testphase anbieten. Testangebote können wir jederzeit ändern, beschränken oder einstellen und die Freischaltung verweigern, bis Identität und Unternehmereigenschaft glaubhaft nachgewiesen sind.",
            "(3) Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten, und haftet für alle unter seinem Konto vorgenommenen Handlungen, es sei denn, der Kunde hat den Missbrauch nicht zu vertreten.",
          ],
        },
      },
      {
        heading: {
          en: "§4 Prices, Payment, Default",
          de: "§4 Preise, Zahlung, Verzug",
        },
        paragraphs: {
          en: [
            "(1) The prices valid at the time of conclusion of the contract apply. Unless stated otherwise, all prices are net prices plus statutory value added tax. Fees are payable in advance for the respective billing period (monthly or annually, as selected).",
            "(2) Payment is made by the payment methods offered (e.g. SEPA direct debit or credit card). The Customer ensures sufficient funds; chargeback fees caused by the Customer shall be borne by the Customer. We may withhold activation until full payment has been received.",
            "(3) If the Customer defaults on payment, we are entitled to charge default interest at the statutory rate for commercial transactions and a lump sum pursuant to § 288 (5) BGB. The assertion of further damage remains unaffected.",
            "(4) In the event of payment default of more than 14 days despite a reminder, we may suspend access to the Service until full payment. The Customer's payment obligation for the agreed term remains unaffected by a suspension that the Customer is responsible for.",
            "(5) The Customer may offset only against claims that are undisputed or have been legally established, and may assert a right of retention only based on claims arising from the same contractual relationship.",
          ],
          de: [
            "(1) Es gelten die zum Zeitpunkt des Vertragsschlusses gültigen Preise. Soweit nicht anders angegeben, handelt es sich um Nettopreise zuzüglich der gesetzlichen Umsatzsteuer. Die Gebühren sind im Voraus für den jeweiligen Abrechnungszeitraum (monatlich oder jährlich, je nach Auswahl) fällig.",
            "(2) Die Zahlung erfolgt über die angebotenen Zahlungsarten (z. B. SEPA-Lastschrift oder Kreditkarte). Der Kunde sorgt für ausreichende Deckung; vom Kunden verursachte Rücklastschriftgebühren trägt der Kunde. Wir können die Freischaltung bis zum vollständigen Zahlungseingang zurückhalten.",
            "(3) Kommt der Kunde in Zahlungsverzug, sind wir berechtigt, Verzugszinsen in gesetzlicher Höhe für Handelsgeschäfte sowie die Pauschale nach § 288 Abs. 5 BGB zu verlangen. Die Geltendmachung eines weitergehenden Schadens bleibt unberührt.",
            "(4) Bei einem Zahlungsverzug von mehr als 14 Tagen können wir trotz Mahnung den Zugang zum Dienst bis zur vollständigen Zahlung aussetzen. Die Zahlungspflicht des Kunden für die vereinbarte Laufzeit bleibt von einer vom Kunden zu vertretenden Aussetzung unberührt.",
            "(5) Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen und ein Zurückbehaltungsrecht nur aufgrund von Ansprüchen aus demselben Vertragsverhältnis geltend machen.",
          ],
        },
      },
      {
        heading: {
          en: "§5 Term, Renewal, Termination",
          de: "§5 Laufzeit, Verlängerung, Kündigung",
        },
        paragraphs: {
          en: [
            "(1) The contract runs for the term selected at booking (monthly or annual). A monthly contract may be terminated by either party with effect from the end of the respective month; an annual contract may be terminated with four weeks' notice to the end of the term. If not terminated in time, the contract is extended by the originally selected term.",
            "(2) The right of both parties to terminate for good cause without notice remains unaffected. Good cause exists for us in particular if the Customer is in default of a non-insignificant payment despite a reminder, or seriously breaches material obligations under these Terms.",
            "(3) Any termination requires text form (e.g. email). Decisive for the timeliness of a termination is its receipt.",
            "(4) Upon a request made within 30 days after the end of the contract, we will make the Customer's transaction data available for export in a common format, to the extent technically possible. After expiry of this period we are entitled and, under data protection law, may be obliged to delete the data, subject to statutory retention obligations.",
          ],
          de: [
            "(1) Der Vertrag läuft für die bei der Buchung gewählte Laufzeit (monatlich oder jährlich). Ein Monatsvertrag kann von beiden Parteien zum Ende des jeweiligen Monats gekündigt werden; ein Jahresvertrag kann mit einer Frist von vier Wochen zum Laufzeitende gekündigt werden. Erfolgt keine fristgerechte Kündigung, verlängert sich der Vertrag um die ursprünglich gewählte Laufzeit.",
            "(2) Das Recht beider Parteien zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt für uns insbesondere vor, wenn der Kunde mit einer nicht unerheblichen Zahlung trotz Mahnung in Verzug ist oder wesentliche Pflichten aus diesen AGB schwerwiegend verletzt.",
            "(3) Jede Kündigung bedarf der Textform (z. B. E-Mail). Maßgeblich für die Rechtzeitigkeit einer Kündigung ist deren Zugang.",
            "(4) Auf ein innerhalb von 30 Tagen nach Vertragsende gestelltes Verlangen stellen wir die Transaktionsdaten des Kunden, soweit technisch möglich, in einem gängigen Format zum Export bereit. Nach Ablauf dieser Frist sind wir berechtigt und datenschutzrechtlich gegebenenfalls verpflichtet, die Daten vorbehaltlich gesetzlicher Aufbewahrungspflichten zu löschen.",
          ],
        },
      },
      {
        heading: {
          en: "§6 Availability, Maintenance, Support",
          de: "§6 Verfügbarkeit, Wartung, Support",
        },
        paragraphs: {
          en: [
            "(1) We endeavour to keep the Service available with high reliability. A specific availability is owed only if and to the extent it has been expressly agreed in a separate Service Level Agreement (SLA) in text form. Absent such an agreement, no fixed availability percentage is owed.",
            "(2) Availability does not include times during which the Service is not accessible due to maintenance, necessary security measures, or circumstances outside our control (in particular failures of internet infrastructure, telecommunications networks, or third-party providers, and force majeure).",
            "(3) We may carry out maintenance work and will, where reasonably possible, schedule planned maintenance outside typical business hours and announce it with reasonable notice. Urgent security measures may be carried out at any time.",
            "(4) Support is provided in the scope of the selected package via the channels designated by us. A specific response or resolution time is owed only where expressly agreed.",
          ],
          de: [
            "(1) Wir sind bemüht, den Dienst mit hoher Zuverlässigkeit verfügbar zu halten. Eine bestimmte Verfügbarkeit wird nur geschuldet, wenn und soweit sie in einer gesonderten Vereinbarung zum Servicelevel (SLA) ausdrücklich in Textform vereinbart wurde. Ohne eine solche Vereinbarung wird kein fester Verfügbarkeitsprozentsatz geschuldet.",
            "(2) Nicht in die Verfügbarkeit fallen Zeiten, in denen der Dienst aufgrund von Wartung, erforderlichen Sicherheitsmaßnahmen oder außerhalb unseres Einflussbereichs liegenden Umständen (insbesondere Störungen der Internet-Infrastruktur, der Telekommunikationsnetze oder von Drittanbietern sowie höhere Gewalt) nicht erreichbar ist.",
            "(3) Wir dürfen Wartungsarbeiten durchführen und werden geplante Wartungen, soweit zumutbar möglich, außerhalb typischer Geschäftszeiten durchführen und mit angemessenem Vorlauf ankündigen. Dringende Sicherheitsmaßnahmen können jederzeit durchgeführt werden.",
            "(4) Support wird im Umfang des gewählten Pakets über die von uns benannten Kanäle geleistet. Eine bestimmte Reaktions- oder Lösungszeit wird nur geschuldet, soweit ausdrücklich vereinbart.",
          ],
        },
      },
      {
        heading: {
          en: "§7 Customer Obligations and Responsibilities",
          de: "§7 Pflichten und Verantwortlichkeiten des Kunden",
        },
        paragraphs: {
          en: [
            "(1) The Customer provides true, complete and up-to-date data upon registration and keeps it current. The Customer is solely responsible for the content, data and configurations it enters into the Service.",
            "(2) The Customer is responsible for the protection of its own systems, devices and access credentials against misuse and unauthorised third-party access, and for using up-to-date, secure devices and software.",
            "(3) The Customer shall not misuse the Service, in particular shall not store or transmit unlawful content, infringe third-party rights, or impair the integrity, security or availability of the Service or our infrastructure.",
            "(4) Insofar as content provided by the Customer infringes the rights of third parties (e.g. copyright, trademark or competition law), the Customer shall indemnify us upon first request against all claims of third parties, including reasonable costs of legal defence, unless the Customer is not responsible for the infringement.",
            "(5) The Customer warrants that it has obtained all necessary rights and, where personal data of third parties is entered, the required legal bases and consents.",
          ],
          de: [
            "(1) Der Kunde gibt bei der Registrierung wahrheitsgemäße, vollständige und aktuelle Daten an und hält diese aktuell. Für die von ihm in den Dienst eingegebenen Inhalte, Daten und Konfigurationen ist allein der Kunde verantwortlich.",
            "(2) Der Kunde ist für den Schutz seiner eigenen Systeme, Geräte und Zugangsdaten vor Missbrauch und unbefugtem Zugriff Dritter sowie für die Verwendung aktueller, sicherer Geräte und Software verantwortlich.",
            "(3) Der Kunde wird den Dienst nicht missbräuchlich nutzen, insbesondere keine rechtswidrigen Inhalte speichern oder übertragen, keine Rechte Dritter verletzen und die Integrität, Sicherheit oder Verfügbarkeit des Dienstes oder unserer Infrastruktur nicht beeinträchtigen.",
            "(4) Soweit vom Kunden eingestellte Inhalte Rechte Dritter verletzen (z. B. Urheber-, Marken- oder Wettbewerbsrecht), stellt der Kunde uns auf erstes Anfordern von sämtlichen Ansprüchen Dritter einschließlich angemessener Kosten der Rechtsverteidigung frei, es sei denn, der Kunde hat die Rechtsverletzung nicht zu vertreten.",
            "(5) Der Kunde sichert zu, alle erforderlichen Rechte und, soweit personenbezogene Daten Dritter eingegeben werden, die erforderlichen Rechtsgrundlagen und Einwilligungen eingeholt zu haben.",
          ],
        },
      },
      {
        heading: {
          en: "§8 Fiscal and Cash-Register Law; No Tax Advice",
          de: "§8 Steuer- und kassenrechtliche Hinweise; keine Steuerberatung",
        },
        paragraphs: {
          en: [
            "(1) The Customer is solely responsible for the lawful, complete and proper recording, retention and tax treatment of its business transactions, including compliance with the German Fiscal Code (AO), the principles for the proper keeping and storage of books (GoBD) and the Cash Register Anti-Tampering Ordinance (KassenSichV), including the use of a certified technical security device (TSE) where required.",
            "(2) We provide technical functions that can support the Customer in complying with these obligations. We do not owe and do not warrant that the Customer's individual use of the Service is sufficient on its own to fulfil all of the Customer's fiscal or regulatory obligations.",
            "(3) We do not provide tax, legal or business advice and render no services of a tax advisor or auditor. The Customer is responsible for obtaining its own professional advice.",
          ],
          de: [
            "(1) Der Kunde ist allein verantwortlich für die rechtskonforme, vollständige und ordnungsgemäße Erfassung, Aufbewahrung und steuerliche Behandlung seiner Geschäftsvorfälle, einschließlich der Einhaltung der Abgabenordnung (AO), der Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern (GoBD) und der Kassensicherungsverordnung (KassenSichV), einschließlich des Einsatzes einer zertifizierten technischen Sicherheitseinrichtung (TSE), soweit erforderlich.",
            "(2) Wir stellen technische Funktionen bereit, die den Kunden bei der Einhaltung dieser Pflichten unterstützen können. Wir schulden und gewährleisten nicht, dass die individuelle Nutzung des Dienstes durch den Kunden für sich genommen ausreicht, um sämtliche steuerlichen oder regulatorischen Pflichten des Kunden zu erfüllen.",
            "(3) Wir erbringen keine steuerliche, rechtliche oder betriebswirtschaftliche Beratung und keine Leistungen eines Steuerberaters oder Wirtschaftsprüfers. Der Kunde ist für die Einholung eigener fachlicher Beratung verantwortlich.",
          ],
        },
      },
      {
        heading: {
          en: "§9 Rights of Use, Customer Data",
          de: "§9 Nutzungsrechte, Kundendaten",
        },
        paragraphs: {
          en: [
            "(1) For the term of the contract and subject to full payment of the agreed fees, we grant the Customer the non-exclusive, non-transferable right to use the Service in accordance with these Terms. The Customer may not sell, sublicense or otherwise make the Service available to third parties, nor decompile or reverse-engineer it except where mandatorily permitted by law.",
            '(2) The Customer retains all rights to the data it enters ("Customer Data"). The Customer grants us the rights to store, process and reproduce Customer Data to the extent necessary to provide the Service and to fulfil our contractual obligations.',
            "(3) We may use aggregated, anonymised data that does not allow conclusions to be drawn about the Customer or individual persons to operate, secure and improve the Service.",
          ],
          de: [
            "(1) Für die Vertragslaufzeit und unter der Bedingung der vollständigen Zahlung der vereinbarten Gebühren räumen wir dem Kunden das nicht ausschließliche, nicht übertragbare Recht ein, den Dienst gemäß diesen AGB zu nutzen. Der Kunde darf den Dienst nicht verkaufen, unterlizenzieren oder Dritten überlassen und ihn nur dekompilieren oder zurückentwickeln, soweit dies gesetzlich zwingend gestattet ist.",
            "(2) Der Kunde behält sämtliche Rechte an den von ihm eingegebenen Daten („Kundendaten“). Der Kunde räumt uns die Rechte ein, Kundendaten zu speichern, zu verarbeiten und zu vervielfältigen, soweit dies zur Erbringung des Dienstes und zur Erfüllung unserer vertraglichen Pflichten erforderlich ist.",
            "(3) Wir dürfen aggregierte, anonymisierte Daten, die keinen Rückschluss auf den Kunden oder einzelne Personen zulassen, zum Betrieb, zur Absicherung und zur Verbesserung des Dienstes nutzen.",
          ],
        },
      },
      {
        heading: {
          en: "§10 Data Protection and Data Processing",
          de: "§10 Datenschutz und Auftragsverarbeitung",
        },
        paragraphs: {
          en: [
            "(1) Both parties comply with the applicable data protection law, in particular the GDPR and the German Federal Data Protection Act (BDSG). Details of our processing of personal data are set out in our Privacy Policy.",
            "(2) Insofar as we process personal data on behalf of the Customer in the course of providing the Service, this is carried out on the basis of a data processing agreement pursuant to Art. 28 GDPR, which the parties conclude separately and which takes precedence over these Terms in the event of conflict regarding data processing. The Customer is the controller for the personal data it processes via the Service.",
            "(3) The Customer is responsible for the lawfulness of the processing of the personal data it enters, in particular for the existence of a legal basis, and indemnifies us against third-party claims arising from a breach of these obligations attributable to the Customer.",
          ],
          de: [
            "(1) Beide Parteien halten das geltende Datenschutzrecht ein, insbesondere die DSGVO und das Bundesdatenschutzgesetz (BDSG). Einzelheiten zur Verarbeitung personenbezogener Daten durch uns ergeben sich aus unserer Datenschutzerklärung.",
            "(2) Soweit wir im Rahmen der Leistungserbringung personenbezogene Daten im Auftrag des Kunden verarbeiten, erfolgt dies auf Grundlage eines Auftragsverarbeitungsvertrags nach Art. 28 DSGVO, den die Parteien gesondert abschließen und der diesen AGB im Konfliktfall hinsichtlich der Datenverarbeitung vorgeht. Der Kunde ist Verantwortlicher für die über den Dienst verarbeiteten personenbezogenen Daten.",
            "(3) Der Kunde ist für die Rechtmäßigkeit der Verarbeitung der von ihm eingegebenen personenbezogenen Daten verantwortlich, insbesondere für das Vorliegen einer Rechtsgrundlage, und stellt uns von Ansprüchen Dritter frei, die aus einer vom Kunden zu vertretenden Verletzung dieser Pflichten entstehen.",
          ],
        },
      },
      {
        heading: {
          en: "§11 Data Backup",
          de: "§11 Datensicherung",
        },
        paragraphs: {
          en: [
            "(1) We perform regular backups of the data stored within the Service in accordance with the state of the art as part of our operational duties.",
            "(2) Notwithstanding this, the Customer remains responsible for backing up its data outside the Service to a reasonable extent, in particular before significant changes and at regular intervals, so that the data can be restored with reasonable effort. The Customer shall keep redundant copies of data that is essential to its business.",
          ],
          de: [
            "(1) Wir führen im Rahmen unserer betrieblichen Pflichten nach dem Stand der Technik regelmäßige Sicherungen der im Dienst gespeicherten Daten durch.",
            "(2) Unabhängig davon bleibt der Kunde verpflichtet, seine Daten in zumutbarem Umfang auch außerhalb des Dienstes zu sichern, insbesondere vor wesentlichen Änderungen sowie in regelmäßigen Abständen, sodass die Daten mit vertretbarem Aufwand wiederhergestellt werden können. Der Kunde hält von geschäftswesentlichen Daten redundante Kopien vor.",
          ],
        },
      },
      {
        heading: {
          en: "§12 Warranty for Defects",
          de: "§12 Gewährleistung / Mängel",
        },
        paragraphs: {
          en: [
            "(1) We provide the Service in a condition suitable for use in accordance with the contract. The provisions on the rental of items (§§ 535 et seq. BGB) apply to the warranty for the provision of the Service as SaaS, with the modifications set out below.",
            "(2) The strict liability for defects existing at the time of conclusion of the contract pursuant to § 536a (1) Alt. 1 BGB is excluded; our liability is governed by §13.",
            "(3) The Customer shall notify us of defects without undue delay in text form with a comprehensible description of the error and its occurrence. The Customer shall reasonably support us in identifying and remedying defects.",
            "(4) Insofar as a warranty for defects exists alongside the rental-type provision (e.g. for separately purchased one-off services), the limitation period for such claims is 12 months, except in cases of intent, gross negligence, injury to life, body or health, or where a longer period is mandatory by law.",
          ],
          de: [
            "(1) Wir stellen den Dienst in einem zum vertragsgemäßen Gebrauch geeigneten Zustand bereit. Auf die Gewährleistung für die Bereitstellung des Dienstes als SaaS finden die Vorschriften über die Vermietung von Sachen (§§ 535 ff. BGB) mit den nachfolgenden Maßgaben Anwendung.",
            "(2) Die verschuldensunabhängige Haftung für bei Vertragsschluss vorhandene Mängel nach § 536a Abs. 1 Alt. 1 BGB ist ausgeschlossen; unsere Haftung richtet sich nach §13.",
            "(3) Der Kunde zeigt Mängel unverzüglich in Textform mit nachvollziehbarer Beschreibung des Fehlers und seines Auftretens an. Der Kunde unterstützt uns in zumutbarem Umfang bei der Feststellung und Beseitigung von Mängeln.",
            "(4) Soweit neben der mietvertraglichen Überlassung eine Mängelgewährleistung besteht (z. B. für gesondert erworbene einmalige Leistungen), beträgt die Verjährungsfrist für solche Ansprüche 12 Monate, außer in Fällen des Vorsatzes, der groben Fahrlässigkeit, der Verletzung des Lebens, des Körpers oder der Gesundheit oder soweit gesetzlich eine längere Frist zwingend vorgeschrieben ist.",
          ],
        },
      },
      {
        heading: {
          en: "§13 Limitation of Liability",
          de: "§13 Haftungsbeschränkung",
        },
        paragraphs: {
          en: [
            "(1) We are liable without limitation for damages arising from injury to life, body or health caused by a breach of duty by us, our legal representatives or vicarious agents, for damages caused intentionally or by gross negligence, to the extent of an assumed guarantee, and under the German Product Liability Act (ProdHaftG). These mandatory cases of liability cannot be excluded.",
            "(2) In the case of a slightly negligent breach of a material contractual obligation (cardinal obligation, i.e. an obligation whose fulfilment makes the proper performance of the contract possible in the first place and on whose observance the Customer regularly relies and may rely), our liability is limited to the foreseeable damage typical for this type of contract.",
            "(3) Any further liability for slight negligence is excluded. In particular, we are not liable for loss of profit, indirect or consequential damages, or for damages resulting from circumstances outside our control (in particular non-availability of the website or Service for which we are not responsible).",
            "(4) Insofar as our liability for slight negligence is limited or excluded under the foregoing, this also applies to the personal liability of our legal representatives, employees and vicarious agents.",
            "(5) Our liability for the loss of data is limited to the typical recovery effort that would have arisen had the Customer made reasonable backups in accordance with §11.",
            "(6) The above limitations do not alter the statutory burden of proof. A change of the burden of proof to the detriment of the Customer is not associated with the foregoing provisions.",
          ],
          de: [
            "(1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer Pflichtverletzung durch uns, unsere gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen, für vorsätzlich oder grob fahrlässig verursachte Schäden, im Umfang einer übernommenen Garantie sowie nach dem Produkthaftungsgesetz (ProdHaftG). Diese zwingenden Haftungsfälle können nicht ausgeschlossen werden.",
            "(2) Bei der leicht fahrlässigen Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht, d. h. einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertraut und vertrauen darf) ist unsere Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.",
            "(3) Eine darüber hinausgehende Haftung für leichte Fahrlässigkeit ist ausgeschlossen. Insbesondere haften wir nicht für entgangenen Gewinn, mittelbare Schäden oder Folgeschäden sowie für Schäden infolge von Umständen außerhalb unseres Einflussbereichs (insbesondere eine von uns nicht zu vertretende Nichterreichbarkeit der Webseite oder des Dienstes).",
            "(4) Soweit unsere Haftung für leichte Fahrlässigkeit nach Vorstehendem beschränkt oder ausgeschlossen ist, gilt dies auch für die persönliche Haftung unserer gesetzlichen Vertreter, Mitarbeiter und Erfüllungsgehilfen.",
            "(5) Unsere Haftung für den Verlust von Daten ist auf den typischen Wiederherstellungsaufwand beschränkt, der bei ordnungsgemäßer Datensicherung durch den Kunden gemäß §11 angefallen wäre.",
            "(6) Die vorstehenden Beschränkungen ändern nicht die gesetzliche Beweislast. Eine Änderung der Beweislast zum Nachteil des Kunden ist mit den vorstehenden Regelungen nicht verbunden.",
          ],
        },
      },
      {
        heading: {
          en: "§14 Force Majeure",
          de: "§14 Höhere Gewalt",
        },
        paragraphs: {
          en: [
            "(1) We are not liable for the non-performance or delayed performance of our obligations to the extent this is due to force majeure or other events not foreseeable at the time of conclusion of the contract and outside our control (e.g. natural disasters, war, strikes, pandemics, official measures, failures of energy or telecommunications networks, or large-scale internet disruptions).",
            "(2) For the duration of such events, the affected contractual obligations are suspended. We will inform the Customer of the occurrence and expected duration without undue delay.",
          ],
          de: [
            "(1) Wir haften nicht für die Nicht- oder verzögerte Erbringung unserer Leistungen, soweit dies auf höherer Gewalt oder anderen zum Zeitpunkt des Vertragsschlusses nicht vorhersehbaren und außerhalb unseres Einflussbereichs liegenden Ereignissen beruht (z. B. Naturkatastrophen, Krieg, Streik, Pandemien, behördliche Maßnahmen, Ausfälle von Energie- oder Telekommunikationsnetzen oder großflächige Internetstörungen).",
            "(2) Für die Dauer solcher Ereignisse sind die betroffenen Vertragspflichten ausgesetzt. Wir informieren den Kunden unverzüglich über Eintritt und voraussichtliche Dauer.",
          ],
        },
      },
      {
        heading: {
          en: "§15 Confidentiality",
          de: "§15 Geheimhaltung",
        },
        paragraphs: {
          en: [
            "(1) The parties shall keep confidential all confidential information of the other party that becomes known to them and use it only for the purpose of performing this contract.",
            "(2) This obligation does not apply to information that was already known to the receiving party without an obligation of confidentiality, that is or becomes publicly known without breach of this contract, that has been released for disclosure, that was lawfully received from a third party, or that must be disclosed due to statutory obligations or an order by a court or authority.",
            "(3) The parties shall impose the confidentiality obligation on employees and third parties who have access to the confidential information.",
          ],
          de: [
            "(1) Die Parteien halten alle ihnen bekannt werdenden vertraulichen Informationen der jeweils anderen Partei geheim und verwenden sie nur zum Zweck der Durchführung dieses Vertrages.",
            "(2) Diese Pflicht gilt nicht für Informationen, die der empfangenden Partei ohne Geheimhaltungspflicht bereits bekannt waren, die ohne Verletzung dieses Vertrages öffentlich bekannt sind oder werden, die zur Weitergabe freigegeben wurden, die rechtmäßig von einem Dritten erhalten wurden oder die aufgrund gesetzlicher Pflichten oder einer Anordnung eines Gerichts oder einer Behörde offengelegt werden müssen.",
            "(3) Die Parteien legen die Geheimhaltungspflicht Mitarbeitern und Dritten auf, die Zugang zu den vertraulichen Informationen haben.",
          ],
        },
      },
      {
        heading: {
          en: "§16 Third-Party Services and Payment Providers",
          de: "§16 Drittanbieter und Zahlungsdienstleister",
        },
        paragraphs: {
          en: [
            "(1) The Service may integrate third-party services (e.g. payment, accounting or hardware providers). The use of such services may be subject to the separate terms and prices of the respective provider, for which that provider is responsible.",
            "(2) We are not liable for the services, availability or conduct of independent third-party providers, unless we are responsible for the selection of the provider with intent or gross negligence or have assumed an express guarantee.",
          ],
          de: [
            "(1) Der Dienst kann Leistungen Dritter einbinden (z. B. Zahlungs-, Buchhaltungs- oder Hardwareanbieter). Die Nutzung solcher Leistungen kann den gesonderten Bedingungen und Preisen des jeweiligen Anbieters unterliegen, für die dieser Anbieter verantwortlich ist.",
            "(2) Für die Leistungen, die Verfügbarkeit oder das Verhalten unabhängiger Drittanbieter haften wir nicht, es sei denn, wir haben die Auswahl des Anbieters vorsätzlich oder grob fahrlässig zu vertreten oder eine ausdrückliche Garantie übernommen.",
          ],
        },
      },
      {
        heading: {
          en: "§17 Changes to These Terms and the Service",
          de: "§17 Änderungen dieser AGB und des Dienstes",
        },
        paragraphs: {
          en: [
            "(1) We may amend these Terms with effect for the future where this is necessary to adapt to changed legal or technical circumstances, to close regulatory gaps, or to reflect changes to the Service, provided this does not unreasonably disadvantage the Customer and does not affect material elements of the contractual relationship (in particular scope of services and price) to the detriment of the Customer.",
            "(2) We will notify the Customer of changes in text form at least six weeks before they take effect. The changes are deemed approved if the Customer does not object in text form within six weeks of receipt of the notification. We will specifically point out this consequence in the notification. If the Customer objects in time, the contract continues on the previous terms; in this case both parties may terminate in accordance with §5.",
            "(3) Prices may be adjusted for future billing periods; price increases for ongoing contracts are subject to the notice and objection procedure set out in paragraph 2.",
          ],
          de: [
            "(1) Wir können diese AGB mit Wirkung für die Zukunft ändern, soweit dies zur Anpassung an geänderte rechtliche oder technische Rahmenbedingungen, zur Schließung von Regelungslücken oder aufgrund von Änderungen des Dienstes erforderlich ist, sofern der Kunde hierdurch nicht unangemessen benachteiligt wird und wesentliche Elemente des Vertragsverhältnisses (insbesondere Leistungsumfang und Preis) nicht zum Nachteil des Kunden berührt werden.",
            "(2) Wir teilen dem Kunden Änderungen mindestens sechs Wochen vor ihrem Wirksamwerden in Textform mit. Die Änderungen gelten als genehmigt, wenn der Kunde nicht innerhalb von sechs Wochen nach Zugang der Mitteilung in Textform widerspricht. Auf diese Folge weisen wir in der Mitteilung gesondert hin. Widerspricht der Kunde rechtzeitig, wird der Vertrag zu den bisherigen Bedingungen fortgesetzt; in diesem Fall können beide Parteien nach §5 kündigen.",
            "(3) Preise können für künftige Abrechnungszeiträume angepasst werden; Preiserhöhungen für laufende Verträge unterliegen dem Mitteilungs- und Widerspruchsverfahren nach Absatz 2.",
          ],
        },
      },
      {
        heading: {
          en: "§18 Final Provisions",
          de: "§18 Schlussbestimmungen",
        },
        paragraphs: {
          en: [
            "(1) The contractual relationship is governed by the law of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).",
            "(2) The exclusive place of jurisdiction for all disputes arising from or in connection with this contract is Munich, provided the Customer is a merchant, a legal entity under public law or a special fund under public law, or has no general place of jurisdiction in Germany. We are also entitled to sue at the Customer's general place of jurisdiction.",
            "(3) Amendments and supplements to the contract require text form. This also applies to any waiver of this text-form requirement. There are no verbal side agreements.",
            "(4) Should individual provisions of these Terms be or become invalid or unenforceable in whole or in part, this shall not affect the validity of the remaining provisions. In place of the invalid or unenforceable provision, the statutory provision shall apply.",
            "(5) These Terms are provided in German and English. In the event of discrepancies, the German version prevails.",
          ],
          de: [
            "(1) Das Vertragsverhältnis unterliegt dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
            "(2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist München, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist oder im Inland keinen allgemeinen Gerichtsstand hat. Wir sind auch berechtigt, am allgemeinen Gerichtsstand des Kunden zu klagen.",
            "(3) Änderungen und Ergänzungen des Vertrages bedürfen der Textform. Dies gilt auch für den Verzicht auf dieses Textformerfordernis. Mündliche Nebenabreden bestehen nicht.",
            "(4) Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt die gesetzliche Regelung.",
            "(5) Diese AGB werden in deutscher und englischer Sprache zur Verfügung gestellt. Bei Abweichungen ist die deutsche Fassung maßgeblich.",
          ],
        },
      },
    ],
  },
  impressum: {
    title: { en: "Imprint", de: "Impressum" },
    meta: {
      en: "Legal imprint for GastroPos GmbH as required by German law (§5 TMG).",
      de: "Impressum der GastroPos GmbH gemäß § 5 TMG.",
    },
    body: {
      en: "GastroPos GmbH\nMaximilianstraße 13\n80539 München, Germany\n\nManaging Director: Sinan Can\nRegister Court: Amtsgericht München\nRegistration Number: HRB 234567\nVAT-ID: DE312345678\n\nContact: support@gastropos.com\nPhone: +49 201 759 346 94",
      de: "GastroPos GmbH\nMaximilianstraße 13\n80539 München, Deutschland\n\nGeschäftsführer: Sinan Can\nRegistergericht: Amtsgericht München\nRegisternummer: HRB 234567\nUSt-IdNr.: DE312345678\n\nKontakt: support@gastropos.com\nTelefon: +49 201 759 346 94",
    },
  },
  cookies: {
    title: { en: "Cookie Policy", de: "Cookie-Richtlinie" },
    meta: {
      en: "How GastroPos uses cookies and similar technologies on our website and product.",
      de: "Wie GastroPos Cookies und ähnliche Technologien auf unserer Webseite und im Produkt nutzt.",
    },
    body: {
      en: "We use strictly necessary cookies to keep you logged in and protect against fraud. We use analytics cookies (only after you consent) to understand which pages are most useful. We never use advertising cookies. You can withdraw consent at any time through the cookie banner or your browser settings.",
      de: "Wir verwenden technisch notwendige Cookies, um Sie eingeloggt zu halten und vor Betrug zu schützen. Analyse-Cookies setzen wir nur mit Ihrer Einwilligung ein, um zu verstehen, welche Seiten am nützlichsten sind. Werbe-Cookies nutzen wir niemals. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner oder Ihre Browsereinstellungen widerrufen.",
    },
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const doc = legal[params.slug as LegalSlug];
    if (!doc) throw notFound();
    return { doc };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const d = loaderData.doc;
    return {
      meta: [
        { title: `${d.title.en} — GastroPos` },
        { name: "description", content: d.meta.en },
        { property: "og:url", content: absoluteUrl(`/legal/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/legal/${params.slug}`) }],
    };
  },
  component: LegalPage,
  notFoundComponent: () => <div className="p-20 text-center">Document not found</div>,
});

function LegalPage() {
  const { doc } = Route.useLoaderData();
  const { lang } = useI18n();
  const de = lang === "de";
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={de ? "Rechtliches" : "Legal"}
        title={de ? doc.title.de : doc.title.en}
        lede={doc.updated ? (de ? doc.updated.de : doc.updated.en) : ""}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {doc.sections ? (
            <div className="space-y-10">
              {doc.sections.map((s, i) => (
                <article key={i}>
                  <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {de ? s.heading.de : s.heading.en}
                  </h2>
                  <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                    {(de ? s.paragraphs.de : s.paragraphs.en).map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-muted-foreground">
              {de ? doc.body?.de : doc.body?.en}
            </pre>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
