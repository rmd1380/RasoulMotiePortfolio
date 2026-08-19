'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { locales } from '@/lib/locales';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fa');
  const [mounted, setMounted] = useState(false);

  // Sync with the value the inline <head> script already applied to <html>.
  useEffect(() => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'fa';
    setLang(current);
    setMounted(true);
  }, []);

  const applyLang = useCallback((next) => {
    setLang(next);
    const root = document.documentElement;
    root.lang = next;
    root.dir = locales[next].dir;
    try {
      localStorage.setItem('lang', next);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    applyLang(lang === 'fa' ? 'en' : 'fa');
  }, [lang, applyLang]);

  const t = locales[lang];
  const dir = locales[lang].dir;

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggleLang, setLang: applyLang, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
