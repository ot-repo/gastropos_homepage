import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Lang, type Dict } from "./dictionaries";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("ot-lang") : null;
    if (stored === "en" || stored === "de") setLangState(stored);
    else if (typeof navigator !== "undefined" && navigator.language?.startsWith("de"))
      setLangState("de");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("ot-lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
