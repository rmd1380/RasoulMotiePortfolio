'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function LanguageToggle() {
  const { lang, toggleLang, t, mounted } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.a11y.toggleLang}
      className="relative inline-flex h-9 items-center rounded-full border border-zinc-200
                 bg-zinc-100 p-0.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-800/60"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300
        ${mounted && lang === 'fa' ? 'bg-accent-600 text-white shadow' : 'text-zinc-500 dark:text-zinc-400'}`}
      >
        FA
      </span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300
        ${mounted && lang === 'en' ? 'bg-accent-600 text-white shadow' : 'text-zinc-500 dark:text-zinc-400'}`}
      >
        EN
      </span>
    </button>
  );
}
