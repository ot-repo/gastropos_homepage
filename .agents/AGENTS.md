# GastroPos Homepage — Project Rules

## Product Context

**GastroPos** (gastropos.ai) is a rebrand of **OrdersTracker** (orderstracker.com) — a cloud-based POS system for tablets, primarily targeting the gastronomy/hospitality industry in Germany, Austria, and Switzerland (DACH region).

The rebrand introduces **AI capabilities** as the key differentiator for the launch. The homepage at gastropos.ai is the landing page for this launch.

### Company Info
- **Legal Entity**: OrdersTracker UG (Haftungsbeschränkt)
- **Address**: Marktstr. 10, 45355 Essen, Germany
- **Phone**: +49 201 759 34694
- **Email**: support@orderstracker.com → (will become info@gastropos.ai)
- **Support**: 7/24 availability

### Brand Identity
- **Logo Colors**: Navy (#1a2d6d) + Orange (#ea5929)
- **Homepage palette**: Two-tone rhythm — Light Slate (#f8fafc) ↔ Dark Navy (#0c1b3d)
- **Font**: Display font for headings, mono for technical accents
- **Domain**: gastropos.ai (new) — orderstracker.com (legacy)

---

## Core Product Modules

### 1. POS / Ordering System
- Waiter tablet-based order capture, sent directly to kitchen
- Table color-coded status (Free, Occupied, Ready/Served)
- Every device acts as a POS terminal
- Split payment support (by item or together)
- Auto-generates & prints invoices via POS printer
- Extras/modifications, ingredient exclusion, reordering

### 2. Kitchen Display System (KDS)
- Real-time order display from waiter tablets
- Acoustic alerts + flashing for new orders
- Category-based filtering per station (grill, bar, desserts, etc.)
- Status tracking: New → Cooking → Ready → Served
- Send prepared items back to servers

### 3. QR Code Self-Ordering
- Guests scan QR at table to place orders
- Configurable per-table QR settings
- Orders flow directly to KDS

### 4. Dashboard / Analytics
- Product performance comparison by category & time range
- Employee sales tracking & revenue breakdown
- Payment method distribution (Cash, Card, etc.)
- Table revenue analytics (best/worst performing tables)
- Date/time spread analysis for peak hour optimization

### 5. Data Management
- **Tables**: Categories by location (Garden, Terrace, Balcony, etc.)
- **Menu**: Product categories, pricing, active/inactive, sold-out status
- **Inventory**: Auto "sold out" when stock depleted
- **Employees**: Role-based access control:
  - Waiter: orders + table management
  - Cook/Bartender: KDS view only
  - Admin-Helper: tables + menu + orders + KDS
  - Administrator: full access
- **Customers**: CRUD + customer database

### 6. Reports & Compliance
- Invoice list with date range filtering, PDF export, POS print
- Single ordered items report (with payment method, waiter, Excel export)
- **DATEV export**: German tax software compatible, direct email to accountant
- **GoBD compliance**: Audit-ready financial records
- **TSE (KassenSichV)**: Free online TSE via Fiskaly partnership, one-click activation
- Z-reports for daily closing

### 7. Table Reservation System
- View, add, update, delete reservations
- Integrated with table management

### 8. Delivery System
- Customer management for delivery
- Order capture for delivery customers
- In-delivery order tracking
- Invoice management
- Caller ID app integration

### 9. Retail Sales
- Retail POS capabilities alongside hospitality features

---

## NEW: AI Features (Launch Differentiator)

These are the new capabilities being launched with the GastroPos rebrand:

### AI Demand Forecasting
- Predicts order volume using weather, events, and historical data
- 92%+ accuracy claim

### AI-Powered Order Routing (KDS)
- Intelligent routing assigns orders to optimal kitchen stations
- Minimizes wait times automatically
- Real-time bottleneck detection

### AI Analytics
- Anomaly detection (unusual voids, shrinkage, cash discrepancies)
- Predictive analytics for menu optimization
- Real-time throughput optimization

### Voice AI Assistant (Demo on Homepage)
- Siri-style voice interface
- Natural language commands: "Create a new table", etc.
- Interactive demo with microphone animation on homepage

---

## Technical Stack & Integrations
- **Platform**: Cloud-based, tablet-first (iOS/Android)
- **Compliance**: TSE (Fiskaly), KassenSichV, GoBD, DATEV
- **Connectivity**: Real-time sync across all devices
- **Printing**: ESC/POS thermal printer support
- **Export**: PDF, Excel, DATEV format
- **Languages**: German (primary), English

---

## Homepage Project Structure
- **Framework**: TanStack Start (React + Vite)
- **Package manager**: Yarn 4
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + CSS keyframes
- **Key files**:
  - `src/routes/index.tsx` — Homepage layout & section ordering
  - `src/components/home/Hero.tsx` — Hero section with carousel
  - `src/components/home/Sections.tsx` — All homepage sections (AiCapabilities, StatsStrip, BuiltFor, FinalCta, SocialProof, ProductShowcase)
  - `src/components/home/DashboardDemo.tsx` — Interactive AI voice demo
  - `src/components/home/Testimonials.tsx` — Customer testimonials slider
  - `src/components/home/CanvasCarousel.tsx` — Hero background carousel
  - `src/components/layout/Header.tsx` — Navigation header
  - `src/components/layout/Footer.tsx` — Footer
  - `src/styles.css` — Global styles & wave animation

---

## Design Guidelines
- Inspired by: https://smart-kasse-genius.lovable.app/
- Section rhythm: alternating #f8fafc (light) ↔ #0c1b3d (dark navy)
- Cards: glassmorphic style with gradient left accent (navy→orange)
- Illustrations: unDraw SVGs in `/public/`
- Mobile-first responsive — overflow-x:hidden on html,body
- Waves in hero: subtle (180px, opacity 0.05-0.08)

## Industries Served
- Restaurants (full-service, fine dining)
- Cafés & Coffee shops
- Hotels (F&B departments, room service)
- Ghost kitchens / Cloud kitchens
- Bars & Nightclubs
- Bakeries & Pastry shops
- Food trucks
- Retail stores
- Catering services
