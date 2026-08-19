'use client';

import { Award, FileText, ArrowUpRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Certificates() {
  const { t } = useLanguage();
  const c = t.certificates;

  // First locale "type" value is the certificate label; anything else => article
  const certLabel = c.items[0]?.type;

  return (
    <Section id="certificates" tag={c.tag} title={c.title} subtitle={c.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2">
        {c.items.map((item, i) => {
          const isCert = item.type === certLabel;
          const Icon = isCert ? Award : FileText;
          return (
            <a
              key={i}
              href="#"
              className="card group flex items-start gap-4 p-5"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isCert
                    ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                    : 'bg-zinc-200/60 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">{item.type}</span>
                  <span className="text-xs text-zinc-400">{item.date}</span>
                </div>
                <h3 className="mt-2 font-semibold leading-snug transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400">
                  {item.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {item.issuer}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
