'use client';

import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Hero() {
  const { t, dir } = useLanguage();
  const h = t.hero;
  const Arrow = dir === 'rtl' ? ArrowRight : ArrowRight;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px] dark:bg-accent-600/20" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent-400/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-in chip mb-6 gap-2 border-accent-300/50 bg-accent-50 text-accent-700 dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {h.badge}
          </span>

          <h1 className="animate-fade-up text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {h.titleLine1}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent dark:from-accent-400 dark:to-accent-600">
              {h.titleHighlight}
            </span>{' '}
            {h.titleLine2}
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-pretty text-lg text-zinc-600 dark:text-zinc-400">
            {h.subtitle}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#portfolio" className="btn-primary">
              {h.ctaPrimary}
              <Arrow className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Play className="h-4 w-4" />
              {h.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <dl className="animate-fade-up mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4">
            {h.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200/70 bg-white/50 p-4 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/40"
              >
                <dt className="order-2 mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-bold text-accent-600 dark:text-accent-400 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
