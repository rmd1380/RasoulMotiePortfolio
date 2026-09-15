'use client';

import { Mail, Send, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { socials } from '@/lib/locales';

const SOCIAL_ICONS = { Linkedin, Youtube, Instagram, Twitter };

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`${c.form.subjectPrefix}: ${form.get('name')}`);
    const body = encodeURIComponent(`${c.form.name}: ${form.get('name')}\n${c.form.email}: ${form.get('email')}\n\n${form.get('message')}`);
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" tag={c.tag} title={c.title} subtitle={c.subtitle}>
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="card space-y-4 p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={c.form.name}>
              <input
                type="text"
                name="name"
                required
                placeholder={c.form.namePlaceholder}
                className={inputCls}
              />
            </Field>
            <Field label={c.form.email}>
              <input
                type="email"
                name="email"
                required
                placeholder={c.form.emailPlaceholder}
                className={inputCls}
              />
            </Field>
          </div>
          <Field label={c.form.message}>
            <textarea
              rows={5}
              name="message"
              required
              placeholder={c.form.messagePlaceholder}
              className={`${inputCls} resize-none`}
            />
          </Field>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            <Send className="h-4 w-4 rtl:rotate-180" />
            {c.form.submit}
          </button>
        </form>

        {/* Contact info */}
        <div className="space-y-6 lg:col-span-2">
          <a
            href={`mailto:${c.email}`}
            className="card group flex items-center gap-4 p-5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-zinc-500">{c.emailLabel}</p>
              <p className="font-medium transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400">
                {c.email}
              </p>
            </div>
          </a>

          {socials.length > 0 && <div className="card p-5">
            <p className="mb-4 text-sm font-semibold text-zinc-500">{c.socialTitle}</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] || Mail;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-600 hover:text-white dark:border-zinc-700 dark:text-zinc-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>}
        </div>
      </div>
    </Section>
  );
}

const inputCls =
  'w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-zinc-700 dark:bg-zinc-900/60 dark:placeholder:text-zinc-500';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}
