import { createContext, useState, useEffect } from "react";
import loadLocale from "./loadLocale";

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [t, setT] = useState({});

  // Load correct language JSON whenever locale changes
  useEffect(() => {
    async function fetchTranslations() {
      const translations = await loadLocale(locale);
      setT(translations);
    }
    fetchTranslations();
  }, [locale]);

  function toggleLanguage() {
    setLocale(prev => (prev === "en" ? "ml" : "en"));
  }

  return (
    <LocaleContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
}
