'use client';

import { useEffect, useMemo, useState } from 'react';
import { Play, X } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { portfolioMedia } from '@/lib/portfolioMedia';

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const p = t.portfolio;
  const [activeIndex, setActiveIndex] = useState(null);

  const activeProject = activeIndex === null ? null : p.projects[activeIndex];
  const activeMedia = activeIndex === null ? null : portfolioMedia[activeIndex];
  const activeUrl = activeMedia ? getSourceUrl(activeMedia, lang) : '';
  const embedUrl = useMemo(
    () => (activeUrl ? createEmbedUrl(activeUrl, lang) : ''),
    [activeUrl, lang],
  );

  // Never leave the previous language's provider streaming invisibly.
  useEffect(() => {
    setActiveIndex(null);
  }, [lang]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeIndex]);

  return (
    <Section id="portfolio" tag={p.tag} title={p.title} subtitle={p.subtitle}>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {p.projects.map((project, index) => {
          const media = portfolioMedia[index] ?? portfolioMedia[0];
          const sourceUrl = getSourceUrl(media, lang);
          const canPlay = Boolean(sourceUrl && createEmbedUrl(sourceUrl, lang));

          return (
            <article key={project.title} className="card group flex flex-col overflow-hidden">
              <button
                type="button"
                onClick={() => canPlay && setActiveIndex(index)}
                disabled={!canPlay}
                aria-label={canPlay ? `${p.playLabel}: ${project.title}` : p.comingSoon}
                className={`relative block w-full overflow-hidden bg-gradient-to-br from-accent-500/15 via-zinc-200/50 to-zinc-100 text-start disabled:cursor-default dark:from-accent-600/20 dark:via-zinc-800/60 dark:to-zinc-900 ${media.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'}`}
              >
                <VideoCover media={media} title={project.title} />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-accent-600 shadow-lg backdrop-blur transition-transform duration-300 dark:bg-zinc-900/85 dark:text-accent-400 ${canPlay ? 'group-hover:scale-110' : 'opacity-70'}`}>
                    <Play className="h-6 w-6 ltr:translate-x-0.5" fill="currentColor" />
                  </span>
                </div>

                <span className="absolute top-3 ltr:left-3 rtl:right-3 rounded-full bg-zinc-950/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {media.orientation === 'portrait' ? p.verticalLabel : p.horizontalLabel}
                </span>
                <span className="absolute top-3 ltr:right-3 rtl:left-3 rounded-full bg-zinc-950/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {sourceUrl === media.aparatUrl && sourceUrl ? p.aparatLabel : p.youtubeLabel}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400">
                    {project.title}
                  </h3>
                  {!canPlay && <span className="chip shrink-0">{p.comingSoon}</span>}
                </div>
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
            </article>
          );
        })}
      </div>

      {activeProject && activeMedia && embedUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label={p.closePlayer}
            className="absolute top-4 ltr:right-4 rtl:left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-white hover:text-zinc-950"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="flex max-h-[92vh] max-w-[96vw] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl ${
                activeMedia.orientation === 'portrait'
                  ? 'aspect-[9/16] w-[min(92vw,46.125vh,427.5px)]'
                  : 'aspect-video w-[min(92vw,145.78vh,1024px)]'
              }`}
            >
              <iframe
                key={embedUrl}
                src={embedUrl}
                title={activeProject.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="max-w-2xl text-center text-sm font-medium text-white">
              {activeProject.title}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
}

function VideoCover({ media, title }) {
  const [useFallback, setUseFallback] = useState(false);
  const cover = useFallback ? media.coverFallback || media.cover : media.cover;
  const checkCover = (event) => {
    // A missing max-resolution YouTube cover may return a tiny placeholder.
    if (event.currentTarget.naturalWidth <= 120) setUseFallback(true);
  };
  if (!media.cover) {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-35">
        <span
          className={`rounded-xl border-2 border-current ${
            media.orientation === 'portrait' ? 'h-[78%] aspect-[9/16]' : 'w-[72%] aspect-video'
          }`}
        />
      </div>
    );
  }

  if (media.orientation === 'portrait') {
    return (
      <>
        <img
          src={cover}
          onLoad={checkCover}
          onError={() => setUseFallback(true)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-xl"
        />
        <img
          src={cover}
          onLoad={checkCover}
          onError={() => setUseFallback(true)}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover shadow-2xl"
        />
      </>
    );
  }

  return (
    <img
      src={cover}
      onLoad={checkCover}
      onError={() => setUseFallback(true)}
      alt={title}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function getSourceUrl(media, lang) {
  return lang === 'fa' ? media.aparatUrl || media.youtubeUrl : media.youtubeUrl || media.aparatUrl;
}

function createEmbedUrl(input, lang) {
  return createYouTubeEmbedUrl(input) || createAparatEmbedUrl(input);
}

function createYouTubeEmbedUrl(input) {
  if (!input) return '';

  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, '');
    let videoId = '';

    if (host === 'youtu.be') {
      videoId = url.pathname.split('/').filter(Boolean)[0] ?? '';
    } else if (
      host === 'youtube.com' ||
      host.endsWith('.youtube.com') ||
      host === 'youtube-nocookie.com'
    ) {
      const parts = url.pathname.split('/').filter(Boolean);
      videoId = url.searchParams.get('v') ?? '';
      if (!videoId && ['shorts', 'embed', 'live'].includes(parts[0])) {
        videoId = parts[1] ?? '';
      }
    }

    if (!/^[\w-]{6,}$/.test(videoId)) return '';
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&hl=en`;
  } catch {
    return '';
  }
}

function createAparatEmbedUrl(input) {
  if (!input) return '';

  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, '');
    if (host !== 'aparat.com' && !host.endsWith('.aparat.com')) return '';

    // Embed links copied directly from Aparat can be used without conversion.
    if (url.pathname.includes('/embed/') || url.pathname.includes('/video/video/embed/')) {
      url.searchParams.set('autoplay', 'true');
      return url.toString();
    }

    const parts = url.pathname.split('/').filter(Boolean);
    const videoIndex = parts.findIndex((part) => part === 'v');
    const videoHash = videoIndex >= 0 ? parts[videoIndex + 1] : '';
    if (!/^[\w-]{4,}$/.test(videoHash)) return '';

    return `https://www.aparat.com/video/video/embed/videohash/${videoHash}/vt/frame?autoplay=true`;
  } catch {
    return '';
  }
}
