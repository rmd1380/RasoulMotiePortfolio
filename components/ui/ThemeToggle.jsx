'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.a11y.toggleTheme}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full
                 border border-zinc-200 text-zinc-600 transition-all duration-300
                 hover:border-accent-500 hover:text-accent-600 dark:border-zinc-700
                 dark:text-zinc-400 dark:hover:border-accent-500 dark:hover:text-accent-400"
    >
      {/* Avoid hydration mismatch: only render the icon once mounted */}
      {mounted &&
        (theme === 'dark' ? (
          <Sun className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" />
        ))}
    </button>
  );
}
