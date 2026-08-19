'use client';

import { Clapperboard, PenTool, BookOpen, MonitorPlay, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Map the string names stored in locales.js to actual icon components
const ICONS = { Clapperboard, PenTool, BookOpen, MonitorPlay };

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <Section id="skills" tag={s.tag} title={s.title} subtitle={s.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.categories.map((cat) => {
          const Icon = ICONS[cat.icon] || Sparkles;
          return (
            <div key={cat.title} className="card group p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white dark:text-accent-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
