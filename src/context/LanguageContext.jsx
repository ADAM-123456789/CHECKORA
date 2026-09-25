import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, LANGUAGES } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];
  const t = (key) => TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;

  // Synchronize document direction (RTL for Arabic) and lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = currentLang.dir || 'ltr';
      document.documentElement.lang = currentLang.code;
    }
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, currentLang, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
