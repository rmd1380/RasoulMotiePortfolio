import './globals.css';
import { Inter, Vazirmatn } from 'next/font/google';
import { Providers } from '@/components/providers/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata = {
  title: 'Arian Rezaei — Content Creator & Video Editor',
  description:
    'Premium portfolio of a Content Creator & Video Editor. Cinematic editing, content strategy and visual storytelling for brands and creators.',
  keywords: ['Content Creator', 'Video Editor', 'Portfolio', 'Storytelling', 'Premiere Pro'],
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

// Runs before React hydrates — prevents flash of wrong theme / direction.
const noFlashScript = `
(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') document.documentElement.classList.add('dark');

    var lang = localStorage.getItem('lang') || 'fa';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={`${inter.variable} ${vazirmatn.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
