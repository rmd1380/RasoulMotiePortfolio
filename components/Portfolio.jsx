'use client';

import { ArrowUpRight, Play } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Portfolio() {
  const { t } = useLanguage();
  const p = t.portfolio;

  return (
    <Section id="portfolio" tag={p.tag} title={p.title} subtitle={p.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {p.projects.map((project, i) => (
          <a
            key={i}
            href="#"
            className="card group flex flex-col overflow-hidden"
          >
            {/* Thumbnail placeholder */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent-500/15 via-zinc-200/50 to-zinc-100 dark:from-accent-600/20 dark:via-zinc-800/60 dark:to-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-accent-600 shadow-lg backdrop-blur transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-900/80 dark:text-accent-400">
                  <Play className="h-6 w-6 ltr:translate-x-0.5" fill="currentColor" />
                </span>
              </div>
              <span className="absolute top-3 ltr:right-3 rtl:left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/0 text-zinc-700 opacity-0 transition-all duration-300 group-hover:bg-white group-hover:opacity-100 dark:text-zinc-200 dark:group-hover:bg-zinc-900">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
