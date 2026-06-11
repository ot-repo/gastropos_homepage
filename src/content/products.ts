export type ProductSlug =
  | "pos" | "waiter-ordering" | "qr-ordering" | "kitchen-display"
  | "online-ordering" | "inventory" | "cash-book" | "datev-export"
  | "analytics";

export interface ProductContent {
  slug: ProductSlug;
  eyebrow: { en: string; de: string };
  title: { en: string; de: string };
  lede: { en: string; de: string };
  metaTitle: { en: string; de: string };
  metaDescription: { en: string; de: string };
  features: { en: string[]; de: string[] };
  sections: { heading: { en: string; de: string }; body: { en: string; de: string } }[];
  faq: { q: { en: string; de: string }; a: { en: string; de: string } }[];
}

export const products: Record<ProductSlug, ProductContent> = {
  pos: {
    slug: "pos",
    eyebrow: { en: "AI-Powered POS System", de: "KI-gestütztes Kassensystem" },
    title: { en: "The AI cloud POS built for hospitality, retail and service.", de: "Das KI-Cloud-Kassensystem für Gastronomie, Handel und Dienstleister." },
    lede: { en: "Run orders, payments, inventory and reporting on one tablet — TSE-compliant, offline-first, AI-assisted and ready in under two hours. GastroPos turns every device in your venue into a sales surface and every transaction into actionable insight.", de: "Bestellungen, Zahlungen, Warenwirtschaft und Reporting auf einem Tablet — TSE-konform, offline-fähig, KI-gestützt und in unter zwei Stunden einsatzbereit. GastroPos verwandelt jedes Gerät in eine Verkaufsfläche und jede Transaktion in nutzbare Erkenntnisse." },
    metaTitle: { en: "AI Cloud POS System for Restaurants & Retail | GastroPos", de: "KI-Cloud-Kassensystem für Gastronomie & Handel | GastroPos" },
    metaDescription: { en: "TSE-ready AI cloud POS for restaurants, cafés, bars and retail. Offline-first tablet POS with smart upsell, KDS, inventory, DATEV export and 24/7 support.", de: "TSE-konformes KI-Cloud-Kassensystem für Restaurants, Cafés, Bars und Handel. Tablet-Kasse mit smartem Upsell, Küchenmonitor, Warenwirtschaft, DATEV-Export und 24/7 Support." },
    features: {
      en: [
        "Runs on any Android tablet or iPad — bring your own device",
        "TSE + DSFinV-K certified, Fiskaly cloud-TSE in one click",
        "Offline-first — keep selling when Wi-Fi drops, auto-sync on reconnect",
        "Split bills by item, seat or share with tabs, tips and discounts",
        "Cash drawer, Bluetooth/LAN receipt printer, barcode scanner and scale support",
        "Real-time sync to KDS, waiter app, QR ordering and online ordering",
        "AI upsell suggestions tailored to each order in real time",
        "Predictive sales forecasting and smart staff scheduling hints",
        "Built-in multi-language interface — 12 languages out of the box",
        "Unlimited products, categories, modifiers, allergens and tax rates",
        "Role-based permissions for owners, managers, waiters and cooks",
        "Live multi-location dashboard with consolidated reporting",
      ],
      de: [
        "Läuft auf jedem Android-Tablet oder iPad — Bring-your-own-device",
        "TSE + DSFinV-K zertifiziert, Fiskaly Cloud-TSE mit einem Klick",
        "Offline-fähig — Verkauf auch ohne WLAN, automatische Synchronisation",
        "Rechnungen pro Artikel, Sitz oder Anteil splitten — Tische, Trinkgeld, Rabatte",
        "Kassenschublade, Bluetooth-/LAN-Bondrucker, Barcode-Scanner und Waage",
        "Echtzeit-Synchronisation mit KDS, Kellner-App, QR- und Online-Bestellung",
        "KI-Upsell-Vorschläge in Echtzeit für jede Bestellung",
        "Vorausschauende Umsatzprognosen und Hinweise zur Personalplanung",
        "Mehrsprachige Oberfläche — 12 Sprachen out of the box",
        "Unbegrenzte Produkte, Kategorien, Modifikatoren, Allergene und Steuersätze",
        "Rollenbasierte Rechte für Inhaber, Manager, Service und Küche",
        "Live-Dashboard für mehrere Standorte mit konsolidiertem Reporting",
      ],
    },
    sections: [
      { heading: { en: "Why tablet POS beats legacy registers", de: "Warum Tablet-Kassen klassische Registrierkassen schlagen" }, body: { en: "Legacy registers were built for the 1990s. A modern tablet POS turns every device in your venue — phone, tablet, terminal — into a sales surface. Take orders at the table, print receipts at the bar, and reconcile cash without ever leaving the floor. GastroPos uses a single source of truth in the cloud so every device sees the same menu, prices and inventory in real time.", de: "Klassische Registrierkassen sind aus den 90ern. Ein modernes Tablet-Kassensystem verwandelt jedes Gerät — Smartphone, Tablet oder Terminal — in eine Verkaufsfläche. Bestellungen am Tisch aufnehmen, Bons an der Bar drucken und Bargeld abrechnen, ohne den Service zu verlassen. GastroPos nutzt eine zentrale Cloud, sodass alle Geräte die gleiche Karte, Preise und Bestände in Echtzeit sehen." } },
      { heading: { en: "An AI that works the shift with you", de: "Eine KI, die mit Ihrer Schicht arbeitet" }, body: { en: "GastroPos learns from every ticket. The AI suggests the right upsell at the right moment, flags items running low before they sell out, predicts the next two hours of footfall and recommends when to call in (or send home) a team member. It's not a separate dashboard — it's woven directly into the order screen, so your team sees the next best action without thinking about it.", de: "GastroPos lernt aus jedem Bon. Die KI schlägt den passenden Upsell im richtigen Moment vor, warnt bevor Artikel ausverkauft sind, prognostiziert die nächsten zwei Stunden Gästeaufkommen und empfiehlt, wann ein Teammitglied gerufen oder nach Hause geschickt werden sollte. Kein separates Dashboard — direkt im Bestellbildschirm, sodass Ihr Team die nächste beste Aktion sieht, ohne darüber nachzudenken." } },
      { heading: { en: "Compliant by design", de: "Konform per Design" }, body: { en: "Every transaction is signed by a Fiskaly-certified TSE module and exported in DSFinV-K format for German tax audits. GoBD-compliant journaling, automatic DATEV exports and immutable audit logs are included in every plan — no add-ons, no surprise invoices when the Finanzamt comes knocking.", de: "Jede Transaktion wird durch ein Fiskaly-zertifiziertes TSE-Modul signiert und im DSFinV-K-Format für deutsche Betriebsprüfungen exportiert. GoBD-konformes Journal, automatische DATEV-Exporte und unveränderliche Audit-Logs sind in jedem Paket enthalten — ohne Zusatzkosten und ohne Überraschungen bei einer Betriebsprüfung." } },
      { heading: { en: "Offline-first, never out of service", de: "Offline-first, nie außer Betrieb" }, body: { en: "Wi-Fi drops, providers go down, routers reboot. The GastroPos app keeps taking orders, printing receipts and signing TSE transactions locally on the device. The moment connectivity returns, everything syncs to the cloud in the correct order — no lost tickets, no manual reconciliation.", de: "WLAN fällt aus, Provider haben Störungen, Router starten neu. Die GastroPos-App nimmt weiter Bestellungen entgegen, druckt Bons und signiert TSE-Transaktionen lokal auf dem Gerät. Sobald die Verbindung steht, wird alles in der richtigen Reihenfolge in die Cloud synchronisiert — keine verlorenen Bons, keine manuelle Abstimmung." } },
      { heading: { en: "From order to ledger in one platform", de: "Vom Auftrag bis zum Hauptbuch in einer Plattform" }, body: { en: "Orders flow into the kitchen display, payments settle through your preferred PSP, inventory deducts in real time, and end-of-day cash reconciles automatically into DATEV. No CSV exports, no spreadsheets, no friction between your service, your accountant and your tax advisor.", de: "Bestellungen fließen in den Küchenmonitor, Zahlungen werden über Ihren bevorzugten PSP abgewickelt, Bestände werden in Echtzeit abgebucht und der Tagesabschluss läuft automatisch in DATEV. Keine CSV-Exporte, keine Tabellen, keine Reibung zwischen Service, Buchhaltung und Steuerberater." } },
      { heading: { en: "Built for every kind of venue", de: "Für jede Art von Betrieb gebaut" }, body: { en: "Full-service restaurants use course timing and table maps. Quick-service counters use fast tiles and one-tap modifiers. Bars use tab management and pre-authorisation. Bakeries use scale integration and label printing. Retailers use barcode scanning and serial tracking. One platform, configured to your floor.", de: "Restaurants nutzen Gangsteuerung und Tischplan. Schnellgastronomie nutzt schnelle Kacheln und Ein-Klick-Modifikatoren. Bars nutzen Tab-Verwaltung und Vorautorisierung. Bäckereien nutzen Waagenanbindung und Etikettendruck. Händler nutzen Barcode-Scanning und Seriennummern-Tracking. Eine Plattform, an Ihren Betrieb angepasst." } },
      { heading: { en: "Live in under two hours", de: "In unter zwei Stunden einsatzbereit" }, body: { en: "Import your menu from a spreadsheet or your previous system, pair your printer and TSE, train your team in a 30-minute walkthrough. Most venues take their first live order on the same day they sign up — and our 24/7 support is one tap away if you need a hand.", de: "Importieren Sie Ihre Karte aus einer Tabelle oder Ihrem Altsystem, koppeln Sie Drucker und TSE, schulen Sie Ihr Team in einem 30-Minuten-Walkthrough. Die meisten Betriebe nehmen die erste Bestellung am gleichen Tag entgegen — und unser 24/7-Support ist nur einen Tipp entfernt, falls Sie Hilfe brauchen." } },
    ],
    faq: [
      { q: { en: "Is GastroPos POS TSE-compliant in Germany?", de: "Ist die Kasse in Deutschland TSE-konform?" }, a: { en: "Yes. We are an official Fiskaly partner and the cloud-TSE is activated in one click — no additional hardware required. DSFinV-K exports and GoBD journaling are included in every plan.", de: "Ja. Wir sind offizieller Fiskaly-Partner und die Cloud-TSE wird mit einem Klick aktiviert — ohne zusätzliche Hardware. DSFinV-K-Exporte und GoBD-Journal sind in jedem Paket enthalten." } },
      { q: { en: "What hardware do I need?", de: "Welche Hardware benötige ich?" }, a: { en: "Any Android tablet or iPad, a Bluetooth or LAN receipt printer, and a cash drawer if you accept cash. Optional: barcode scanner, scale, kitchen display, customer-facing display. We also resell certified bundles for plug-and-play setup.", de: "Ein beliebiges Android-Tablet oder iPad, einen Bluetooth- oder LAN-Bondrucker und eine Kassenschublade für Bargeld. Optional: Barcode-Scanner, Waage, Küchenmonitor, Kundendisplay. Wir verkaufen auch zertifizierte Komplettpakete für Plug-and-Play." } },
      { q: { en: "Can it work without internet?", de: "Funktioniert es ohne Internet?" }, a: { en: "Yes. The app is offline-first; orders queue locally, TSE signatures are stored on the device, and everything syncs automatically once connectivity returns.", de: "Ja. Die App ist offline-fähig; Bestellungen werden lokal gespeichert, TSE-Signaturen auf dem Gerät abgelegt und alles synchronisiert sich automatisch wieder." } },
      { q: { en: "What does the AI actually do?", de: "Was macht die KI konkret?" }, a: { en: "Three things, mainly: real-time upsell suggestions based on what's in the basket and what guests historically pair with it; sales and footfall forecasting for the next 2–24 hours so you staff and prep accurately; and inventory alerts that flag low stock before it becomes a stockout.", de: "Hauptsächlich drei Dinge: Echtzeit-Upsell-Vorschläge basierend auf dem Warenkorb und historischen Kombinationen; Umsatz- und Gästeprognosen für die nächsten 2–24 Stunden zur präzisen Personal- und Mise-en-Place-Planung; sowie Bestandsalarme, bevor ein Artikel ausverkauft ist." } },
      { q: { en: "How long does setup take?", de: "Wie lange dauert die Einrichtung?" }, a: { en: "Most venues are live in under two hours. Menu import, hardware pairing, TSE activation and a team walkthrough all happen on day one.", de: "Die meisten Betriebe sind in unter zwei Stunden live. Karte importieren, Hardware koppeln, TSE aktivieren und Team einweisen — alles am ersten Tag." } },
      { q: { en: "Can I switch from my current POS without losing data?", de: "Kann ich von meinem aktuellen Kassensystem wechseln, ohne Daten zu verlieren?" }, a: { en: "Yes. We import your menu, customer database, and historical sales data from most major POS systems. Your accountant keeps a clean audit trail across the cutover.", de: "Ja. Wir importieren Ihre Karte, Kundendatenbank und historische Umsätze aus den meisten gängigen Kassensystemen. Ihr Steuerberater erhält einen sauberen Prüfpfad über den Wechsel hinweg." } },
      { q: { en: "Does it work for multiple locations?", de: "Funktioniert es für mehrere Standorte?" }, a: { en: "Yes. Manage menus, prices, staff and reporting across unlimited locations from one dashboard, with per-location overrides where you need them.", de: "Ja. Karten, Preise, Personal und Reporting für unbegrenzt viele Standorte über ein Dashboard — mit Anpassungen pro Standort, wo nötig." } },
    ],
  },
  "waiter-ordering": {
    slug: "waiter-ordering",
    eyebrow: { en: "Waiter Ordering", de: "Kellner-Bestellung" },
    title: { en: "Capture orders at the table and send them straight to the kitchen.", de: "Bestellungen am Tisch aufnehmen und direkt an die Küche senden." },
    lede: { en: "The Waiter Ordering module lets your service team take a guest's order on a phone or tablet and fire it to the kitchen display without ever walking back to a register — so waiters stay attentive to guests instead of wasting time on the floor.", de: "Mit dem Kellner-Bestellmodul nimmt Ihr Service-Team Bestellungen auf Smartphone oder Tablet auf und sendet sie an den Küchenmonitor, ohne zur Kasse zurückzulaufen — so bleibt Ihr Team beim Gast und verliert keine Zeit auf dem Weg dorthin." },
    metaTitle: { en: "Waiter Ordering Module for Restaurants | GastroPos", de: "Kellner-Bestellmodul für die Gastronomie | GastroPos" },
    metaDescription: { en: "Waiter ordering module: take orders tableside on a phone or tablet, send them to the kitchen display, manage notifications and accept payment at the table.", de: "Kellner-Bestellmodul: Bestellungen am Tisch per Smartphone oder Tablet aufnehmen, an den Küchenmonitor senden, Benachrichtigungen verwalten und am Tisch kassieren." },
    features: {
      en: [
        "Take orders tableside on any Android or iOS device",
        "Send orders straight to the Kitchen Display module",
        "Every waiter device works as a POS — accept payment at the table",
        "Pay together or split: select items one by one and add them to a separate bill",
        "Print the invoice on a POS printer defined in the system after payment",
        "Notifications panel with a red badge counter for urgent updates",
        "Receive alerts from the kitchen module and from the self-ordering module (e.g. bill requests)",
        "No double trips — waiters stay with guests instead of walking to the register",
      ],
      de: [
        "Bestellungen am Tisch auf jedem Android- oder iOS-Gerät aufnehmen",
        "Bestellungen direkt an das Küchenmonitor-Modul senden",
        "Jedes Kellner-Gerät ist auch eine Kasse — am Tisch kassieren",
        "Gemeinsam oder getrennt zahlen: Artikel einzeln auswählen und auf eine separate Rechnung setzen",
        "Nach der Zahlung Druck der Rechnung auf einem im System definierten POS-Drucker",
        "Benachrichtigungspanel mit rotem Badge-Counter für wichtige Hinweise",
        "Hinweise aus dem Küchenmodul und dem Self-Ordering-Modul (z. B. Rechnungswünsche)",
        "Keine Doppelwege — Ihr Service bleibt beim Gast statt zur Kasse zu laufen",
      ],
    },
    sections: [
      { heading: { en: "Orders captured at the table", de: "Bestellungen direkt am Tisch" }, body: { en: "The Waiter Ordering module is designed for your service team to capture guest orders and send them to the Kitchen Display module instantly. Waiters fire the order straight from the table so they don't have to walk back and forth — that means more attention for the guest and less time spent moving around waiting for an order to be processed.", de: "Das Kellner-Bestellmodul ist dafür gemacht, dass Ihr Service-Team Bestellungen direkt am Tisch aufnimmt und sofort an den Küchenmonitor sendet. Bestellungen werden vom Tisch aus abgeschickt, sodass kein Hin- und Hergehen mehr nötig ist — mehr Aufmerksamkeit für den Gast und weniger Zeitverlust beim Warten." } },
      { heading: { en: "Notifications you can't miss", de: "Benachrichtigungen, die nicht untergehen" }, body: { en: "A red badge counter shows how many notifications are waiting for the waiter's attention, so nothing urgent gets lost in a busy service. Tapping the Notifications icon opens a side panel that lists updates not only from the kitchen module but also from the self-ordering module — for example when a guest at another table requests their bill.", de: "Ein roter Badge-Counter zeigt an, wie viele Benachrichtigungen auf das Service-Team warten — damit im Trubel nichts Wichtiges untergeht. Ein Tipp auf das Benachrichtigungs-Symbol öffnet ein Seitenpanel mit Hinweisen sowohl aus dem Küchenmodul als auch aus dem Self-Ordering-Modul, zum Beispiel wenn ein Gast an einem anderen Tisch die Rechnung anfordert." } },
      { heading: { en: "Payment at the table — together or split", de: "Zahlung am Tisch — gemeinsam oder getrennt" }, body: { en: "Because every waiter device acts as a POS, payment can be taken right at the table. Pay together or split the bill: items to be paid separately can be selected one by one and added to another list. Once the payment type is chosen, the invoice is generated and printed on a POS printer defined in the system.", de: "Da jedes Kellner-Gerät auch als Kasse fungiert, kann direkt am Tisch kassiert werden. Gemeinsam oder getrennt zahlen: Artikel für eine separate Rechnung lassen sich einzeln auswählen und einer weiteren Liste hinzufügen. Nach Auswahl der Zahlungsart wird die Rechnung erzeugt und auf einem im System definierten POS-Drucker gedruckt." } },
    ],
    faq: [
      { q: { en: "Do I need to buy special handhelds?", de: "Brauche ich spezielle Handhelds?" }, a: { en: "No. The module runs on any Android or iOS phone or tablet your team already owns.", de: "Nein. Das Modul läuft auf jedem Android- oder iOS-Smartphone oder Tablet, das Ihr Team bereits besitzt." } },
      { q: { en: "Where do the orders go?", de: "Wohin gehen die Bestellungen?" }, a: { en: "Straight to the Kitchen Display module the moment the waiter sends them from the table.", de: "Direkt an das Küchenmonitor-Modul, sobald der Kellner sie vom Tisch aus abschickt." } },
      { q: { en: "Can the waiter take payment at the table?", de: "Kann der Kellner am Tisch kassieren?" }, a: { en: "Yes. Every waiter device acts as a POS. After payment, the invoice is printed on the POS printer defined in the system.", de: "Ja. Jedes Kellner-Gerät ist auch eine Kasse. Nach der Zahlung wird die Rechnung auf dem im System hinterlegten POS-Drucker gedruckt." } },
      { q: { en: "Can guests split the bill?", de: "Können Gäste die Rechnung aufteilen?" }, a: { en: "Yes. Items to be paid separately can be selected one by one and added to another list, so each guest can settle their own share.", de: "Ja. Zu trennende Artikel können einzeln ausgewählt und einer weiteren Liste hinzugefügt werden, sodass jeder Gast seinen Anteil getrennt bezahlen kann." } },
      { q: { en: "What kind of notifications does the waiter receive?", de: "Welche Benachrichtigungen erhält der Kellner?" }, a: { en: "Updates from the kitchen module (e.g. an order is ready) and from the self-ordering module (e.g. a guest requests their bill). A red badge counter shows how many are waiting.", de: "Hinweise aus dem Küchenmodul (z. B. eine Bestellung ist fertig) und aus dem Self-Ordering-Modul (z. B. ein Gast fordert die Rechnung an). Ein roter Badge-Counter zeigt die Anzahl wartender Hinweise." } },
    ],
  },

  "qr-ordering": {
    slug: "qr-ordering",
    eyebrow: { en: "Self-Ordering via QR Code", de: "Selbstbestellung per QR-Code" },
    title: { en: "Guests scan, order and call you — straight from their own phone.", de: "Gäste scannen, bestellen und rufen Sie — direkt vom eigenen Smartphone." },
    lede: { en: "Place a QR code on the table and your guests do the rest. They open your menu in any browser, place orders, call a waiter or request the bill — no app download, no waiting, less work for your team.", de: "Platzieren Sie einen QR-Code am Tisch und Ihre Gäste erledigen den Rest. Sie öffnen Ihre Karte in jedem Browser, geben Bestellungen auf, rufen einen Kellner oder fordern die Rechnung an — ohne App-Download, ohne Wartezeit und mit weniger Aufwand für Ihr Team." },
    metaTitle: { en: "QR Code Self-Ordering for Restaurants & Cafés | GastroPos", de: "QR-Code-Selbstbestellung für Restaurants & Cafés | GastroPos" },
    metaDescription: { en: "Activate self-ordering per table with a QR code. Guests scan, browse the menu, order, call a waiter or request the bill — no app, no extra hardware, lower staff cost.", de: "Aktivieren Sie die Selbstbestellung pro Tisch per QR-Code. Gäste scannen, durchstöbern die Karte, bestellen, rufen einen Kellner oder fordern die Rechnung an — ohne App, ohne Zusatzhardware, mit weniger Personalaufwand." },
    features: {
      en: [
        "Unique QR code generated per table",
        "Activate self-ordering for any table — keep classic service on others",
        "No app download — opens in every mobile browser",
        "Place orders, call the waiter or request the bill in one tap",
        "Full menu with categories, search, photos and descriptions",
        "Remove ingredients and pick variants (e.g. dressing, size)",
        "Live cart with item count and total",
        "Orders flow directly to the kitchen display and POS",
        "Regenerate or renew a table's QR code at any time",
        "Lower staff cost — fewer trips to the table",
      ],
      de: [
        "Eindeutiger QR-Code pro Tisch",
        "Selbstbestellung pro Tisch aktivierbar — klassischer Service bleibt an anderen möglich",
        "Kein App-Download — öffnet in jedem mobilen Browser",
        "Bestellen, Kellner rufen oder Rechnung anfordern mit einem Tipp",
        "Komplette Karte mit Kategorien, Suche, Bildern und Beschreibungen",
        "Zutaten entfernen und Varianten wählen (z. B. Dressing, Größe)",
        "Live-Warenkorb mit Artikelanzahl und Gesamtsumme",
        "Bestellungen laufen direkt in den Küchenmonitor und an die Kasse",
        "QR-Code pro Tisch jederzeit neu generieren",
        "Weniger Personalaufwand — weniger Wege zum Tisch",
      ],
    },
    sections: [
      {
        heading: { en: "Lower your staff cost without lowering your service", de: "Personalkosten senken, ohne Service zu verlieren" },
        body: { en: "Self-ordering takes the most repetitive tasks off your team — handing out menus, walking to the table to take an order, returning to fetch a drink. Guests handle those steps themselves on their own phone, so the same crew can serve more tables on a busy night and focus on hospitality where it matters.", de: "Selbstbestellung nimmt Ihrem Team die wiederkehrenden Aufgaben ab — Karten verteilen, Bestellung am Tisch aufnehmen, ein Getränk nachholen. Ihre Gäste erledigen diese Schritte selbst auf dem eigenen Smartphone, sodass dieselbe Crew an einem vollen Abend mehr Tische bedienen kann und sich auf echte Gastfreundschaft konzentriert." },
      },
      {
        heading: { en: "Activate it per table — you stay in control", de: "Pro Tisch aktivieren — Sie behalten die Kontrolle" },
        body: { en: "Self-ordering is enabled once in the common settings, then activated table by table from Master Data → Tables. The system generates a unique QR code for each table that you save to your gallery and print on a tent card or sticker. Need to reset a code? Tap Renew and a new QR is issued instantly.", de: "Die Selbstbestellung wird einmal in den allgemeinen Einstellungen aktiviert und anschließend pro Tisch unter Stammdaten → Tische freigeschaltet. Das System erzeugt einen eindeutigen QR-Code pro Tisch, den Sie in der Galerie speichern und auf einen Aufsteller oder Aufkleber drucken. Code zurücksetzen? Mit „Erneuern“ wird sofort ein neuer QR ausgestellt." },
      },
      {
        heading: { en: "Order, call a waiter, request the bill", de: "Bestellen, Kellner rufen, Rechnung anfordern" },
        body: { en: "After the scan, guests land on a clear welcome screen with four actions: Place order, My orders, Call waiter and Request bill. They browse categories, search dishes, open product details, remove ingredients and pick variants like dressing or size — exactly like a native app, but in the browser.", de: "Nach dem Scan landen Gäste auf einer klaren Startseite mit vier Aktionen: Bestellung aufgeben, Meine Bestellungen, Kellner rufen und Rechnung anfordern. Sie durchstöbern Kategorien, suchen Gerichte, öffnen Produktdetails, entfernen Zutaten und wählen Varianten wie Dressing oder Größe — wie in einer nativen App, nur im Browser." },
      },
      {
        heading: { en: "Connected end to end with your kitchen and POS", de: "Durchgängig mit Küche und Kasse verbunden" },
        body: { en: "Every self-order lands in the same place as a waiter-entered order: on the kitchen display, on the POS and in your reports. There is no second system to reconcile and no manual re-typing — a self-order is just an order, with the table number already attached.", de: "Jede Selbstbestellung landet an derselben Stelle wie eine vom Kellner aufgenommene Bestellung: auf dem Küchenmonitor, an der Kasse und in Ihren Auswertungen. Kein zweites System, das abgeglichen werden muss, kein manuelles Übertragen — eine Selbstbestellung ist einfach eine Bestellung, mit der Tischnummer bereits dran." },
      },
    ],
    faq: [
      { q: { en: "Do guests have to install an app?", de: "Müssen Gäste eine App installieren?" }, a: { en: "No. The menu opens in any mobile browser straight from the QR scan — iOS, Android, anything with a camera.", de: "Nein. Die Karte öffnet sich in jedem mobilen Browser direkt aus dem QR-Scan — iOS, Android, alles mit Kamera." } },
      { q: { en: "Can I enable self-ordering only for some tables?", de: "Kann ich die Selbstbestellung nur für bestimmte Tische aktivieren?" }, a: { en: "Yes. You enable the feature once in the common settings and then activate it table by table from Master Data → Tables. Other tables keep classic waiter service.", de: "Ja. Sie aktivieren die Funktion einmal in den allgemeinen Einstellungen und schalten sie anschließend pro Tisch unter Stammdaten → Tische frei. Andere Tische behalten den klassischen Kellnerservice." } },
      { q: { en: "What if a QR code is lost or compromised?", de: "Was, wenn ein QR-Code verloren geht oder kompromittiert wird?" }, a: { en: "Open the table's self-order setting and tap Renew — a fresh QR is generated immediately and the old one stops working.", de: "Öffnen Sie die Selbstbestelleinstellung des Tisches und tippen Sie auf „Erneuern“ — ein neuer QR wird sofort erzeugt und der alte funktioniert nicht mehr." } },
      { q: { en: "Can guests still call a waiter?", de: "Können Gäste trotzdem einen Kellner rufen?" }, a: { en: "Yes. The welcome screen has dedicated buttons to call a waiter and to request the bill, so your team is alerted only when actually needed.", de: "Ja. Auf der Startseite gibt es eigene Buttons, um einen Kellner zu rufen und die Rechnung anzufordern — Ihr Team wird nur dann benachrichtigt, wenn es wirklich gebraucht wird." } },
      { q: { en: "Where do self-orders show up?", de: "Wo erscheinen Selbstbestellungen?" }, a: { en: "On your kitchen display, on the POS and in your reports — exactly like an order taken by a waiter, with the correct table number attached.", de: "Auf Ihrem Küchenmonitor, an der Kasse und in Ihren Auswertungen — genau wie eine vom Kellner aufgenommene Bestellung, mit der richtigen Tischnummer." } },
    ],
  },
  "kitchen-display": {
    slug: "kitchen-display",
    eyebrow: { en: "AI Kitchen Display System", de: "KI-Küchenmonitor" },
    title: { en: "An AI-powered Kitchen Display System that keeps every station in sync.", de: "Ein KI-gestützter Küchenmonitor, der jede Station synchron hält." },
    lede: { en: "Replace paper tickets with a real-time KDS. Orders land on screen the moment a waiter fires them, sorted by arrival, color-coded by urgency, and intelligently routed to the right station — so cooks never forget a table and guests never wait too long.", de: "Ersetzen Sie Papierbons durch ein Echtzeit-KDS. Bestellungen erscheinen sofort nach Aufnahme auf dem Bildschirm — sortiert nach Eingang, farblich nach Dringlichkeit markiert und intelligent auf die richtige Station geroutet. Damit vergisst Ihre Küche keinen Tisch und Ihre Gäste warten nie zu lange." },
    metaTitle: { en: "AI Kitchen Display System (KDS) for Restaurants | GastroPos", de: "KI-Küchenmonitor-System (KDS) für Restaurants | GastroPos" },
    metaDescription: { en: "AI-powered kitchen display system. Smart station routing, predictive cook-time timers, course coordination, category filters and zero paper tickets.", de: "KI-gestützter Küchenmonitor. Intelligentes Stations-Routing, vorausschauende Garzeit-Timer, Gangkoordination, Kategoriefilter und null Papierbons." },
    features: {
      en: [
        "Orders appear instantly, sorted left-to-right by arrival time",
        "Color-coded urgency: tables waiting over 10 minutes turn red",
        "Per-station filters — grill, cold, bar, pastry, pass",
        "Category filters so each cook sees only their items",
        "AI cook-time predictions based on your historical service data",
        "Course-by-course timing with auto-fire on the pass",
        "Bump-bar, touchscreen and foot-pedal support",
        "Recall completed orders with a single tap",
        "Live load indicator and average cook-time analytics",
        "Multi-screen support — one KDS per station, fully synced",
      ],
      de: [
        "Bestellungen erscheinen sofort, von links nach rechts nach Eingang sortiert",
        "Farbcodierte Dringlichkeit: Tische über 10 Minuten werden rot",
        "Filter pro Station — Grill, Kalt, Bar, Patisserie, Pass",
        "Kategoriefilter, damit jeder Koch nur seine Artikel sieht",
        "KI-Garzeit-Prognosen auf Basis Ihrer historischen Servicedaten",
        "Gang-für-Gang-Timing mit automatischem Auslösen am Pass",
        "Bump-Bar, Touchscreen und Fußpedal unterstützt",
        "Abgeschlossene Bestellungen mit einem Tipp zurückholen",
        "Live-Lastanzeige und Analyse durchschnittlicher Garzeiten",
        "Multi-Screen — ein KDS pro Station, vollständig synchronisiert",
      ],
    },
    sections: [
      {
        heading: { en: "From chaos to choreography", de: "Vom Chaos zur Choreografie" },
        body: { en: "When orders are routed to the right station at the right moment, your line stops chasing tickets and starts producing food. The KDS shows what's coming, what's late, and what's about to fire — so every cook works the same plan, every shift.", de: "Wenn Bestellungen zur richtigen Station zur richtigen Zeit geleitet werden, jagt Ihre Linie keinen Bons mehr hinterher, sondern produziert Speisen. Das KDS zeigt, was kommt, was verspätet ist und was gleich auf den Pass geht — damit jeder Koch in jeder Schicht den gleichen Plan fährt." },
      },
      {
        heading: { en: "Color-coded urgency keeps the line honest", de: "Farbcodierte Dringlichkeit hält die Linie ehrlich" },
        body: { en: "Every ticket carries a live timer. Tickets older than your service threshold (default 10 minutes) flip to red — an instant visual cue that pushes the team to pick up the pace before a guest ever has to ask. No more forgotten tables, no more cold mains sitting on the pass.", de: "Jeder Bon hat einen Live-Timer. Bons älter als Ihr Schwellenwert (Standard 10 Minuten) werden rot — ein sofortiger visueller Hinweis, der das Team antreibt, bevor ein Gast überhaupt fragen muss. Keine vergessenen Tische mehr, keine kalten Hauptgerichte am Pass." },
      },
      {
        heading: { en: "Smart filters for specialized stations", de: "Intelligente Filter für spezialisierte Stationen" },
        body: { en: "Cooks who only work the grill don't need to see desserts. With one tap on \"Choose a category\" the cook picks the categories they're responsible for and the KDS hides the rest. Each station screen can be filtered independently — fast, focused, no clutter.", de: "Köche an der Grillstation brauchen keine Desserts zu sehen. Mit einem Tipp auf \"Kategorie wählen\" wählt der Koch seine Zuständigkeiten und das KDS blendet den Rest aus. Jeder Stationsbildschirm wird unabhängig gefiltert — schnell, fokussiert, ohne Ballast." },
      },
      {
        heading: { en: "AI that learns your kitchen", de: "KI, die Ihre Küche kennenlernt" },
        body: { en: "GastroPos KDS analyzes thousands of past tickets to predict realistic cook times per dish, per station, per daypart. The system warns the line before a course falls behind, balances load across stations during rushes and surfaces the bottleneck so expediters can react in seconds, not minutes.", de: "Das GastroPos KDS analysiert tausende vergangener Bons und prognostiziert realistische Garzeiten pro Gericht, Station und Tagesabschnitt. Das System warnt die Linie, bevor ein Gang ins Hintertreffen gerät, verteilt die Last während Stoßzeiten und zeigt den Engpass, damit der Expediter in Sekunden reagieren kann — nicht in Minuten." },
      },
      {
        heading: { en: "Built into the GastroPos platform", de: "Vollständig in die GastroPos-Plattform integriert" },
        body: { en: "Orders enter from POS, waiter app, QR ordering and online ordering — and land on one unified KDS. Status flows back in real time so the floor knows the moment a dish is bumped. No middleware, no second login, no paper.", de: "Bestellungen kommen aus der Kasse, der Kellner-App, der QR-Bestellung und der Online-Bestellung — und landen auf einem einheitlichen KDS. Der Status fließt in Echtzeit zurück, sodass das Service-Team sofort weiß, wann ein Gericht fertig ist. Keine Middleware, kein zweites Login, kein Papier." },
      },
    ],
    faq: [
      { q: { en: "Does it work with bump bars?", de: "Funktioniert es mit Bump-Bars?" }, a: { en: "Yes — most USB and Bluetooth bump bars are supported out of the box, alongside touchscreens and foot pedals.", de: "Ja — die meisten USB- und Bluetooth-Bump-Bars werden out of the box unterstützt, ebenso Touchscreens und Fußpedale." } },
      { q: { en: "How many screens can I run per kitchen?", de: "Wie viele Bildschirme kann ich pro Küche betreiben?" }, a: { en: "As many as you need. Each station — grill, cold, bar, pastry, pass — can have its own filtered screen, all synced in real time.", de: "So viele Sie brauchen. Jede Station — Grill, Kalt, Bar, Patisserie, Pass — kann einen eigenen gefilterten Bildschirm haben, alle in Echtzeit synchronisiert." } },
      { q: { en: "Can I change the 10-minute red threshold?", de: "Kann ich die 10-Minuten-Rot-Schwelle ändern?" }, a: { en: "Yes. Set warning and critical thresholds per station and per daypart to match your service standards.", de: "Ja. Setzen Sie Warn- und kritische Schwellen pro Station und Tagesabschnitt passend zu Ihren Servicestandards." } },
      { q: { en: "Does the AI need a lot of data to be useful?", de: "Braucht die KI viele Daten, um nützlich zu sein?" }, a: { en: "It starts adding value after a few hundred tickets and keeps improving as your service history grows.", de: "Sie liefert bereits nach wenigen hundert Bons Mehrwert und wird mit wachsender Servicehistorie immer besser." } },
      { q: { en: "What happens if the internet drops?", de: "Was passiert, wenn das Internet ausfällt?" }, a: { en: "The KDS keeps running locally. Tickets queue and sync automatically once connectivity returns — no lost orders.", de: "Das KDS läuft lokal weiter. Bons werden zwischengespeichert und synchronisieren sich automatisch — keine verlorenen Bestellungen." } },
    ],
  },
  "online-ordering": {
    slug: "online-ordering",
    eyebrow: { en: "Online Ordering", de: "Online-Bestellung" },
    title: { en: "Your own delivery & pickup website — zero commissions.", de: "Ihre eigene Liefer- & Abholseite — ohne Provisionen." },
    lede: { en: "Stop paying 25–30% to marketplaces. Take direct orders from a branded website that syncs with your POS and KDS.", de: "Hören Sie auf, 25–30 % an Marktplätze zu zahlen. Nehmen Sie Direktbestellungen über eine eigene Webseite an, die mit Kasse und KDS synchronisiert ist." },
    metaTitle: { en: "Online Ordering System with Zero Commission | GastroPos", de: "Online-Bestellsystem ohne Provision | GastroPos" },
    metaDescription: { en: "Branded online ordering for delivery and pickup. No commissions, integrated with your POS, Stripe and your favorite delivery riders.", de: "Eigene Online-Bestellseite für Lieferung und Abholung. Keine Provisionen, integriert mit Kasse, Stripe und Lieferpartnern." },
    features: {
      en: ["Branded ordering site under your own domain", "Stripe, PayPal, Apple Pay, Google Pay", "Delivery zones with dynamic pricing", "Pickup time slots and order throttling", "Push to KDS and printer automatically", "SEO-friendly menu pages"],
      de: ["Eigene Bestellseite unter eigener Domain", "Stripe, PayPal, Apple Pay, Google Pay", "Liefergebiete mit dynamischer Preisgestaltung", "Abholzeitfenster und Bestellbegrenzung", "Automatischer Push an KDS und Drucker", "SEO-freundliche Menüseiten"],
    },
    sections: [
      { heading: { en: "Own your customer", de: "Behalten Sie Ihre Kunden" }, body: { en: "When guests order through your site, you keep the relationship — email, order history, reorder rate and lifetime value. Marketplaces give you none of that.", de: "Wenn Gäste über Ihre Seite bestellen, behalten Sie die Beziehung — E-Mail, Bestellhistorie, Wiederbestellrate und Lifetime Value. Marktplätze geben Ihnen nichts davon." } },
    ],
    faq: [],
  },
  inventory: {
    slug: "inventory",
    eyebrow: { en: "Inventory", de: "Warenwirtschaft" },
    title: { en: "Inventory management that deducts in real time.", de: "Warenwirtschaft mit Echtzeit-Abbuchung." },
    lede: { en: "Recipes, ingredients and stock levels stay accurate as orders fire — no more end-of-week count surprises.", de: "Rezepte, Zutaten und Bestände bleiben mit jeder Bestellung aktuell — keine Überraschungen mehr beim Wochenabschluss." },
    metaTitle: { en: "Restaurant Inventory Management Software | GastroPos", de: "Warenwirtschaft für die Gastronomie | GastroPos" },
    metaDescription: { en: "Real-time inventory deduction, recipe costing, supplier orders and low-stock alerts. Cut food cost by up to 6%.", de: "Echtzeit-Bestandsabbuchung, Rezeptkalkulation, Lieferantenbestellungen und Bestandswarnungen. Senken Sie Wareneinsatz um bis zu 6 %." },
    features: {
      en: ["Recipe & ingredient mapping", "Per-portion food-cost reporting", "Supplier purchase orders", "Low-stock alerts via email/SMS", "Multi-warehouse and transfers", "Waste and variance tracking"],
      de: ["Rezept- & Zutatenverknüpfung", "Wareneinsatz pro Portion", "Lieferantenbestellungen", "Bestandswarnungen per E-Mail/SMS", "Mehrlager und Umlagerungen", "Schwund- und Abweichungstracking"],
    },
    sections: [
      { heading: { en: "Know your food cost — to the cent", de: "Kennen Sie Ihren Wareneinsatz — auf den Cent" }, body: { en: "Every dish maps to a recipe, every recipe maps to ingredients, every ingredient deducts as it sells. You see live food cost percentage on every menu item.", de: "Jedes Gericht ist mit einem Rezept verknüpft, jedes Rezept mit Zutaten, jede Zutat wird beim Verkauf abgebucht. Sie sehen den Wareneinsatz live für jeden Menüpunkt." } },
    ],
    faq: [],
  },
  "cash-book": {
    slug: "cash-book",
    eyebrow: { en: "Digital Cash Book", de: "Digitales Kassenbuch" },
    title: { en: "GoBD-compliant cash book — written automatically, every shift.", de: "GoBD-konformes Kassenbuch — automatisch geführt, jede Schicht." },
    lede: { en: "Every cash movement — sale, refund, expense, deposit, withdrawal, tip-out, change order — is logged the moment it happens, in an immutable digital cash book your Steuerberater will actually thank you for. No paper, no end-of-month panic, no Excel reconciliations.", de: "Jede Kassenbewegung — Verkauf, Storno, Ausgabe, Einlage, Entnahme, Trinkgeldauszahlung, Wechselgeld — wird in dem Moment erfasst, in dem sie passiert, in einem unveränderlichen digitalen Kassenbuch, für das Ihr Steuerberater Sie wirklich liebt. Kein Papier, keine Monatsendpanik, keine Excel-Abstimmungen." },
    metaTitle: { en: "Digital Cash Book — GoBD compliant, DATEV-ready | GastroPos", de: "Digitales Kassenbuch — GoBD-konform, DATEV-ready | GastroPos" },
    metaDescription: { en: "Automatic GoBD-compliant digital cash book. Every cash movement logged, immutable, audit-ready, exportable to DATEV in one click. Built for German hospitality and retail.", de: "Automatisches GoBD-konformes digitales Kassenbuch. Jede Bewegung erfasst, unveränderlich, prüfsicher, mit einem Klick nach DATEV exportierbar. Für deutsche Gastronomie und Handel." },
    features: {
      en: [
        "Immutable log — every entry timestamped and signed per GoBD §146",
        "Cash in / cash out / change orders / tip-outs tracked separately",
        "Guided end-of-day Kassensturz with counted-vs-expected diff",
        "Automatic daily Z-report and on-demand X-report",
        "Multi-cashier and clean shift handover with opening/closing balance",
        "Export to PDF, CSV and DATEV — formats your tax advisor expects",
        "Receipt photos attached to every expense entry (Beleg-Pflicht)",
        "Per-location and per-drawer cash books for multi-site businesses",
        "Discrepancy alerts when counted cash deviates beyond your threshold",
        "Audit-ready trail with full Finanzamt and DSFinV-K export",
      ],
      de: [
        "Unveränderliches Journal — jeder Eintrag mit Zeitstempel, signiert nach GoBD §146",
        "Kassen-Ein / Kassen-Aus / Wechselgeld / Trinkgeldauszahlungen separat erfasst",
        "Geführter Kassensturz mit Soll-Ist-Abgleich am Tagesende",
        "Automatischer täglicher Z-Bericht und X-Bericht auf Knopfdruck",
        "Mehrere Kassierer und sauberer Schichtwechsel mit Anfangs- und Schlussbestand",
        "Export als PDF, CSV und DATEV — Formate, die Ihr Steuerberater erwartet",
        "Belegfotos zu jeder Ausgabe (Beleg-Pflicht)",
        "Kassenbuch pro Standort und pro Schublade für Filialbetriebe",
        "Abweichungsalarm, wenn der Kassenbestand außerhalb Ihrer Toleranz liegt",
        "Prüfsicher mit vollständigem Finanzamt- und DSFinV-K-Export",
      ],
    },
    sections: [
      {
        heading: { en: "Why a paper cash book is a liability in 2026", de: "Warum ein Papier-Kassenbuch 2026 ein Risiko ist" },
        body: { en: "Since the GoBD reform, the Finanzamt expects every cash movement to be journaled in the moment, in a format that cannot be altered after the fact. A spiral notebook fails on both counts. GastroPos writes the cash book for you in real time, signs each entry with a Fiskaly-certified TSE, and stores it tamper-proof in the cloud — so an audit becomes a one-click export instead of a three-day reconstruction.", de: "Seit der GoBD-Reform erwartet das Finanzamt, dass jede Kassenbewegung im Moment, in unveränderbarer Form erfasst wird. Ein Heft erfüllt beides nicht. GastroPos schreibt das Kassenbuch in Echtzeit, signiert jeden Eintrag mit einer Fiskaly-zertifizierten TSE und speichert es manipulationssicher in der Cloud — eine Prüfung wird zum Ein-Klick-Export statt zu drei Tagen Rekonstruktion." },
      },
      {
        heading: { en: "End-of-day cash count, guided step by step", de: "Kassensturz, Schritt für Schritt geführt" },
        body: { en: "At close of business the app walks the cashier through a guided count: stack by stack of banknotes, tray by tray of coins. The system compares the counted total to the expected total from the day's transactions and surfaces the difference instantly. Cashiers sign off digitally, managers approve, and the day is closed — no spreadsheet, no calculator, no after-shift overtime.", de: "Zum Geschäftsschluss führt die App den Kassierer durch eine geführte Zählung: Stapel für Stapel Banknoten, Fach für Fach Münzen. Das System vergleicht den gezählten mit dem erwarteten Bestand und zeigt die Differenz sofort. Kassierer bestätigen digital, Manager geben frei, der Tag ist abgeschlossen — keine Tabelle, kein Taschenrechner, keine Überstunden nach Feierabend." },
      },
      {
        heading: { en: "Receipts attached, audits effortless", de: "Belege dran, Prüfungen mühelos" },
        body: { en: "When a team member pays for parsley at the market or fixes a leaking tap, they snap the receipt with their phone and the photo is attached to the cash-out entry. Every expense carries its Beleg automatically, fulfilling the Belegausgabepflicht without a single folder of crumpled receipts.", de: "Wenn jemand Petersilie auf dem Markt kauft oder einen tropfenden Wasserhahn repariert, fotografiert er den Beleg mit dem Smartphone — das Foto wird automatisch an den Kassen-Aus-Eintrag angehängt. Jede Ausgabe trägt ihren Beleg, ohne einen einzigen Ordner zerknitterter Quittungen." },
      },
      {
        heading: { en: "One click to DATEV, no formatting headaches", de: "Mit einem Klick nach DATEV, ohne Format-Kopfschmerzen" },
        body: { en: "At month-end your Steuerberater needs the cash book in DATEV format — not a PDF, not a screenshot. GastroPos exports a clean DATEV-ready file with one click, mapped to the correct Konten, including all opening and closing balances. Tax advisors save hours; you save the advisor fees.", de: "Zum Monatsende braucht Ihr Steuerberater das Kassenbuch im DATEV-Format — kein PDF, kein Screenshot. GastroPos exportiert mit einem Klick eine saubere DATEV-Datei, korrekt auf die Konten gemappt, inklusive Anfangs- und Schlussbestände. Steuerberater sparen Stunden; Sie sparen die Honorare." },
      },
      {
        heading: { en: "Multi-cashier, multi-location, one ledger", de: "Mehrere Kassierer, mehrere Standorte, ein Hauptbuch" },
        body: { en: "Run one drawer per shift, four drawers in parallel, or twenty drawers across five locations — each drawer keeps its own cash book, and the consolidated view rolls them up by location, region or your whole group. Owners see the full picture; managers see only what they need.", de: "Eine Schublade pro Schicht, vier parallel oder zwanzig über fünf Standorte — jede Schublade führt ihr eigenes Kassenbuch, und die konsolidierte Sicht fasst sie nach Standort, Region oder Gruppe zusammen. Inhaber sehen das Gesamtbild; Manager sehen nur das, was sie brauchen." },
      },
      {
        heading: { en: "Survives a Finanzamt visit without a sweat", de: "Übersteht jede Betriebsprüfung ohne Schweißausbruch" },
        body: { en: "When the Kassen-Nachschau or a full Betriebsprüfung arrives, the auditor wants three things: DSFinV-K export, GoBD journal, and the cash book for the requested period. GastroPos produces all three from one screen in under a minute — fully signed, fully sequenced, fully defensible.", de: "Wenn die Kassen-Nachschau oder eine vollständige Betriebsprüfung kommt, will der Prüfer drei Dinge: DSFinV-K-Export, GoBD-Journal und das Kassenbuch für den geforderten Zeitraum. GastroPos liefert alle drei aus einem Bildschirm in unter einer Minute — voll signiert, lückenlos sequenziert, voll belastbar." },
      },
    ],
    faq: [
      { q: { en: "Is the GastroPos cash book legally accepted in Germany?", de: "Ist das GastroPos-Kassenbuch in Deutschland gesetzlich anerkannt?" }, a: { en: "Yes. It meets all requirements of GoBD, AO §146 and KassenSichV — immutable, timestamped, signed by a Fiskaly-certified TSE and exportable in DSFinV-K format.", de: "Ja. Es erfüllt alle Anforderungen der GoBD, AO §146 und KassenSichV — unveränderlich, mit Zeitstempel, signiert durch eine Fiskaly-zertifizierte TSE und im DSFinV-K-Format exportierbar." } },
      { q: { en: "Do I still need a paper cash book as a backup?", de: "Brauche ich zusätzlich ein Papier-Kassenbuch?" }, a: { en: "No. A correctly maintained digital cash book fully replaces the paper one. In fact, running both in parallel often creates discrepancies that auditors will flag.", de: "Nein. Ein korrekt geführtes digitales Kassenbuch ersetzt das Papier-Kassenbuch vollständig. Beides parallel zu führen erzeugt sogar oft Abweichungen, die Prüfer bemängeln." } },
      { q: { en: "What happens if cash on hand doesn't match the system?", de: "Was passiert, wenn der Kassenbestand nicht stimmt?" }, a: { en: "The Kassensturz flow records both the counted and the expected total, the difference, and a mandatory note from the cashier. Nothing is hidden — and that transparency is exactly what the Finanzamt wants to see.", de: "Der Kassensturz protokolliert sowohl den gezählten als auch den erwarteten Bestand, die Differenz und eine Pflichtnotiz des Kassierers. Nichts wird verborgen — und genau diese Transparenz erwartet das Finanzamt." } },
      { q: { en: "Can my Steuerberater access the cash book directly?", de: "Kann mein Steuerberater direkt auf das Kassenbuch zugreifen?" }, a: { en: "Yes. Give them a read-only login or schedule automatic monthly DATEV exports straight to their inbox.", de: "Ja. Geben Sie ihm einen Nur-Lese-Zugang oder planen Sie automatische monatliche DATEV-Exporte direkt in sein Postfach." } },
      { q: { en: "How long is the cash book retained?", de: "Wie lange wird das Kassenbuch aufbewahrt?" }, a: { en: "Ten years, as required by German law (§147 AO). Storage is included in every GastroPos plan — no extra archival fee.", de: "Zehn Jahre, wie nach §147 AO vorgeschrieben. Die Aufbewahrung ist in jedem GastroPos-Paket enthalten — keine Zusatzgebühr für Archivierung." } },
      { q: { en: "Does it handle tips and tronc payouts?", de: "Werden Trinkgelder und Tronc-Auszahlungen unterstützt?" }, a: { en: "Yes. Tips are tracked separately from sales and tip-outs are recorded as their own cash-book entries, with audit trail for each employee.", de: "Ja. Trinkgelder werden separat von Umsätzen erfasst und Auszahlungen als eigene Kassenbuch-Einträge mit Prüfpfad pro Mitarbeiter dokumentiert." } },
    ],
  },
  "datev-export": {
    slug: "datev-export",
    eyebrow: { en: "DATEV Export", de: "DATEV-Export" },
    title: { en: "One-click DATEV export your tax advisor will thank you for.", de: "DATEV-Export per Klick — Ihr Steuerberater wird es Ihnen danken." },
    lede: { en: "Send daily, weekly or monthly DATEV-format bookings directly to your tax advisor. No more month-end CSV gymnastics.", de: "Senden Sie tägliche, wöchentliche oder monatliche DATEV-Buchungen direkt an Ihren Steuerberater. Schluss mit CSV-Akrobatik zum Monatsende." },
    metaTitle: { en: "DATEV Export for Hospitality & Retail POS | GastroPos", de: "DATEV-Export für Gastronomie- und Handelskassen | GastroPos" },
    metaDescription: { en: "Native DATEV export from your POS. Daily, weekly, monthly bookings sent directly to your tax advisor with the correct SKR03/SKR04 accounts.", de: "Nativer DATEV-Export aus Ihrer Kasse. Tages-, Wochen- oder Monatsbuchungen direkt an Ihren Steuerberater mit den richtigen SKR03/SKR04-Konten." },
    features: {
      en: ["SKR03 & SKR04 chart of accounts", "Automatic VAT splits (7% / 19%)", "DATEV Unternehmen online connector", "DSFinV-K export bundle", "Configurable booking text", "Per-store and consolidated exports"],
      de: ["SKR03 & SKR04 Kontenrahmen", "Automatische MwSt-Splits (7 % / 19 %)", "DATEV Unternehmen online Schnittstelle", "DSFinV-K-Exportpaket", "Konfigurierbarer Buchungstext", "Pro Filiale und konsolidierte Exporte"],
    },
    sections: [],
    faq: [],
  },
  analytics: {
    slug: "analytics",
    eyebrow: { en: "Analytics", de: "Analytics" },
    title: { en: "Reports that actually drive decisions.", de: "Berichte, die Entscheidungen wirklich vorantreiben." },
    lede: { en: "Best-sellers, peak hours, average ticket, server performance, food cost — all live, all drill-downable, all exportable.", de: "Bestseller, Stoßzeiten, durchschnittlicher Bon, Service-Performance, Wareneinsatz — alles live, alles aufschlüsselbar, alles exportierbar." },
    metaTitle: { en: "POS Analytics & Reports for Restaurants & Retail | GastroPos", de: "Kassen-Analytics & Berichte für Gastronomie & Handel | GastroPos" },
    metaDescription: { en: "Live sales analytics, best-seller reports, hourly heatmaps, staff performance and food cost — built into every GastroPos plan.", de: "Live-Verkaufsanalysen, Bestseller-Berichte, Stunden-Heatmaps, Mitarbeiterleistung und Wareneinsatz — in jedem GastroPos-Paket enthalten." },
    features: {
      en: ["Sales by hour, day, week, month", "Best- and worst-selling items", "Server, station and cashier scorecards", "Custom dashboards and saved views", "Email and Slack scheduled reports", "Multi-store consolidation"],
      de: ["Umsätze pro Stunde, Tag, Woche, Monat", "Best- und Worstseller", "Scorecards für Service, Station und Kasse", "Eigene Dashboards und gespeicherte Ansichten", "Geplante E-Mail- und Slack-Berichte", "Mehrfilialkonsolidierung"],
    },
    sections: [],
    faq: [],
  },
};
