# Premium Portfolio — Content Creator & Video Editor

A bilingual (Persian RTL / English LTR), dark/light, fully responsive portfolio built with **Next.js (App Router) + React + Tailwind CSS + Lucide React**.

## ✨ Features

- 🌐 **Bilingual FA/EN** — default Persian (RTL), seamless switch to English (LTR) with auto font swap (Vazirmatn ↔ Inter).
- 🌗 **Dark / Light mode** — `class` strategy, persisted to `localStorage`, no flash on load.
- 🎨 **Premium minimal design** — violet/indigo accent, subtle borders, smooth hover transitions.
- 📱 **Mobile-first**, single-page with smooth scrolling.
- 🧩 Modular components + a **single editable content file**.

## 🚀 Getting started

> Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## ✏️ Editing content

All text for both languages lives in **`lib/locales.js`** — edit the `fa` and `en`
objects (keep their keys identical). Social links are in the exported `socials` array.

## 🗂️ Structure

```
app/            layout (fonts, no-flash script), page (section composition), globals.css
components/     Navbar, Hero, About, Skills, Portfolio, Experience, Certificates, Contact, Footer
  providers/    ThemeProvider, LanguageProvider, Providers
  ui/           ThemeToggle, LanguageToggle, Section
lib/locales.js  ⭐ all FA/EN content
```

## 🎨 Customization

- **Accent color**: edit `accent` palette in `tailwind.config.js`.
- **Fonts**: swap the `next/font/google` imports in `app/layout.jsx`.
- **Brand name / sections**: edit `lib/locales.js`.
