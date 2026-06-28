import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { productLinks, industryLinks } from "./Header";
import logoUrl from "@/assets/logo_with_name.svg";

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-border bg-surface pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center" aria-label="GastroPos">
              <img src={logoUrl} alt="GastroPos" className="h-8 w-auto" />
            </Link>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                TSE
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                DSFinV-K
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                GoBD
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-success" />
                GDPR
              </span>
            </div>
          </div>
          <FooterCol title={t.footer.product}>
            {productLinks.slice(0, 8).map((l) => (
              <Link key={l.to} to={l.to as any} className="hover:text-accent">
                {lang === "de" ? l.de : l.en}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title={t.footer.industries}>
            {industryLinks.slice(0, 8).map((l) => (
              <Link key={l.to} to={l.to as any} className="hover:text-accent">
                {lang === "de" ? l.de : l.en}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title={t.footer.company}>
            <Link to="/about" className="hover:text-accent">
              {lang === "de" ? "Über uns" : "About"}
            </Link>
            <Link to="/contact" className="hover:text-accent">
              {lang === "de" ? "Kontakt" : "Contact"}
            </Link>

            <Link to="/partners" className="hover:text-accent">
              Partners
            </Link>
            <Link to="/affiliate" className="hover:text-accent">
              {lang === "de" ? "Affiliate" : "Affiliate"}
            </Link>

            <Link to="/pricing" className="hover:text-accent">
              {t.nav.pricing}
            </Link>
            <Link to="/compare" className="hover:text-accent">
              {t.nav.compare}
            </Link>
          </FooterCol>
          <FooterCol title={t.footer.legal}>
            <Link to="/legal/privacy" className="hover:text-accent">
              {lang === "de" ? "Datenschutz" : "Privacy"}
            </Link>
            <Link to="/legal/terms" className="hover:text-accent">
              {lang === "de" ? "AGB" : "Terms"}
            </Link>
            <Link to="/legal/impressum" className="hover:text-accent">
              Impressum
            </Link>
            <Link to="/legal/cookies" className="hover:text-accent">
              {lang === "de" ? "Cookies" : "Cookies"}
            </Link>
            <Link to="/resources/help" className="hover:text-accent">
              Help
            </Link>
            <Link to="/resources/blog" className="hover:text-accent">
              Blog
            </Link>
          </FooterCol>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-8 text-[11px] font-mono uppercase tracking-widest text-muted-foreground sm:flex-row sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.common.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="text-[11px] font-mono uppercase tracking-widest text-foreground">{title}</h5>
      <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
