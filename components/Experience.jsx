'use client';

import { Briefcase } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <Section id="experience" tag={e.tag} title={e.title}>
      <div className="mx-auto max-w-3xl">
        <ol className="relative ltr:border-l-2 rtl:border-r-2 ltr:pl-8 rtl:pr-8 border-zinc-200 dark:border-zinc-800">
          {e.items.map((item, i) => (
            <li
              key={i}
              className="relative pb-10 last:pb-0"
            >
              {/* Node */}
              <span className="absolute top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-200 bg-zinc-50 text-accent-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-accent-400 ltr:-left-[2.85rem] rtl:-right-[2.85rem]">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="card p-5">
                <span className="chip mb-2 border-accent-300/40 bg-accent-50 text-accent-700 dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-300">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                  {item.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
