import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/lib/i18n/context";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GastroPos — Support & Sales" },
      { name: "description", content: "Reach GastroPos support, sales and partnerships. Email, phone, and Munich office address." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{lang === "de" ? "Kontakt" : "Contact us"}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{lang === "de" ? "Unser Team antwortet werktags innerhalb von zwei Stunden." : "Our team replies within two hours on business days."}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a href="mailto:support@gastropos.com" className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-accent">
              <Mail className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{lang === "de" ? "Support" : "Support"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">support@gastropos.com</p>
            </a>
            <a href="tel:+4920175934694" className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-accent">
              <Phone className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{lang === "de" ? "Telefon" : "Phone"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">+49 201 759 346 94</p>
            </a>
            <div className="rounded-2xl border border-border bg-surface/50 p-6">
              <MapPin className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{lang === "de" ? "Büro" : "Office"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Maximilianstraße 13<br />80539 München, Deutschland</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
