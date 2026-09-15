'use client';

import { Check, Film } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <Section id="about" tag={a.tag}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Visual / portrait placeholder */}
        <div className="relative order-1 lg:order-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-accent-500/10 to-zinc-200/40 dark:border-zinc-800 dark:from-accent-600/15 dark:to-zinc-900">
            <div className="flex h-full w-full items-center justify-center">
              <Film className="h-20 w-20 text-accent-500/60" strokeWidth={1.2} />
            </div>
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-5 ltr:-right-4 rtl:-left-4 animate-float rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
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
