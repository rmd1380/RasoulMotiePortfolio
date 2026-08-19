'use client';

/**
 * Reusable section shell: anchor id, consistent vertical rhythm,
 * and an optional eyebrow tag + title header.
 */
export default function Section({ id, tag, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        {(tag || title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {tag && (
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                <span className="h-px w-6 bg-accent-500/60" />
                {tag}
                <span className="h-px w-6 bg-accent-500/60" />
              </span>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
