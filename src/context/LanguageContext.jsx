import React, { createContext, useContext, useState } from 'react';
import { TRANSLATIONS, LANGUAGES } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = (key) => TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || key;
  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

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
