'use client';

import { Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { socials } from '@/lib/locales';
import { Linkedin, Youtube, Instagram, Twitter, Mail } from 'lucide-react';

const SOCIAL_ICONS = { Linkedin, Youtube, Instagram, Twitter };

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-x flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-start">
          <a href="#home" className="flex items-center justify-center gap-2 font-bold sm:justify-start">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-600 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            {t.nav.brand}
          </a>
          <p className="mt-1 text-sm text-zinc-500">{t.footer.tagline}</p>
        </div>

        <div className="flex gap-2">
          {socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon] || Mail;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-zinc-800 dark:hover:text-accent-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-zinc-200 py-5 dark:border-zinc-800">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {year} {t.nav.brand}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            {t.footer.builtWith}
            <Heart className="h-3.5 w-3.5 fill-accent-500 text-accent-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
