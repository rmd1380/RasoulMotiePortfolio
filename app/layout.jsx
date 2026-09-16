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

const socialTitle = 'Rasoul Motie — Video Editor & Content Creator';
const socialDescription =
  'Video editing, motion graphics, storytelling and content creation for YouTube and social media.';
const socialImage = '/images/rasoul-motie-social-preview.jpg';

export const metadata = {
  metadataBase: new URL('https://rasoulmotie.ir/'),
  title: socialTitle,
  description:
    'Video Editor and Content Creator specializing in motion graphics, storytelling, YouTube and social media content.',
  keywords: ['RasoulMotie', 'Content Creator', 'Video Editor', 'TechnoLearn', 'Portfolio'],
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: 'https://rasoulmotie.ir/',
    type: 'website',
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 627,
        alt: 'Rasoul Motie — Video Editor & Content Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
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
