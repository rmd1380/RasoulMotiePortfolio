'use client';

import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function About() {
  const { t, lang } = useLanguage();
  const a = t.about;

  return (
    <Section id="about" tag={a.tag}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Square frame preserves the supplied portrait without cropping. */}
        <div className="relative order-1 mx-auto w-full max-w-sm pb-6 lg:order-none">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <img
              src="/images/rasoul-motie-portrait.png"
              alt={lang === 'fa' ? 'رسول مطیع — تدوینگر ویدیو و تولیدکننده محتوا' : 'Rasoul Motie — Video Editor & Content Creator'}
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          {/* Floating accent card */}
          <div className="absolute bottom-0 ltr:right-4 rtl:left-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">
              {a.stat.value}
            </p>
            <p className="text-xs text-zinc-500">{a.stat.label}</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {a.title}
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-zinc-600 dark:text-zinc-400">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {a.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
