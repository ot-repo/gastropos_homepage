import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — GastroPos" },
      { name: "description", content: "Sign in to your GastroPos dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <section className="flex min-h-[70vh] items-center py-20">
        <div className="mx-auto w-full max-w-md px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight">
            {lang === "de" ? "Anmelden" : "Sign in"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "de"
              ? "Greifen Sie auf Ihr GastroPos-Dashboard zu."
              : "Access your GastroPos dashboard."}
          </p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={lang === "de" ? "E-Mail" : "Email"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <input
              type="password"
              placeholder={lang === "de" ? "Passwort" : "Password"}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
            />
            <button className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              {lang === "de" ? "Anmelden" : "Sign in"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {lang === "de" ? "Noch kein Konto?" : "No account yet?"}{" "}
            <Link to="/demo" className="font-semibold text-accent">
              {lang === "de" ? "Demo buchen" : "Book a demo"}
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
