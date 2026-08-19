'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageToggle from '@/components/ui/LanguageToggle';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-lg dark:border-zinc-800/70 dark:bg-zinc-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white shadow-lg shadow-accent-600/30 transition-transform duration-300 group-hover:scale-110">
            <Sparkles className="h-4 w-4" />
          </span>
          {t.nav.brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition-colors
                           hover:text-accent-600 dark:text-zinc-400 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200
                       text-zinc-700 transition-colors hover:border-accent-500 hover:text-accent-600
                       dark:border-zinc-700 dark:text-zinc-300 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-zinc-200/70 bg-zinc-50/95 backdrop-blur-lg transition-[max-height] duration-300 dark:border-zinc-800/70 dark:bg-zinc-950/95 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors
                           hover:bg-zinc-100 hover:text-accent-600 dark:text-zinc-300
                           dark:hover:bg-zinc-900 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
