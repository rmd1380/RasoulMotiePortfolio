'use client';

import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
