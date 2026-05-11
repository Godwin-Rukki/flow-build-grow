# Godwin Idiovo Portfolio — Build Plan

A multi-page TanStack Start portfolio with a warm, editorial, systems-focused aesthetic. Cream + teal + peach + gold palette, Syne/Inter/Space Grotesk typography, smooth scroll-driven animations, light/dark mode.

## Pages & Routes

```
src/routes/
  __root.tsx          → shell + nav + footer + theme provider
  index.tsx           → Home (9 sections)
  services.tsx        → Services overview ("What I Do")
  services.$slug.tsx  → Service detail page (media-buying, funnels, automation, email)
  resume.tsx          → My Journey
  contact.tsx         → Contact form + booking
```

Service detail uses a dynamic route so each of the 4 services gets its own URL (`/services/media-buying`, etc.) per the PRD ("dedicated service detail page — not a popup").

## Design System (src/styles.css)

Add OKLCH tokens for the full palette in `:root` and `.dark`:
- `--background` (cream / dark teal), `--foreground`, `--card`, `--border`
- `--primary` (deep teal), `--primary-surface` (light teal)
- `--accent-peach`, `--peach-surface`
- `--gold`, `--gold-surface`
- `--card-border` (#D4B896)

Typography via Google Fonts in `__root.tsx` head links:
- Syne (700/800) → `font-display`
- Inter (400/500/600) → `font-body` (default)
- Space Grotesk (500, uppercase tracking) → `font-mono-accent`

Register font families and color tokens in `@theme inline` so Tailwind utilities work (`bg-primary-surface`, `font-display`, etc.).

## Components

```
src/components/
  layout/
    Navbar.tsx           → sticky, sparkle logo, pill active link, theme toggle, mobile slide-in menu
    Footer.tsx           → minimal: email, LinkedIn, copyright
    ThemeToggle.tsx      → sun/moon, persists to localStorage
    PageTransition.tsx   → wraps Outlet for fade between routes
  ui/                    → existing shadcn primitives (reuse Button, Card, etc.)
  effects/
    FadeUp.tsx           → IntersectionObserver wrapper, slides + fades children
    FloatingBlob.tsx     → animated decorative blob
    Counter.tsx          → counts 0 → target when in viewport
    CursorDot.tsx        → subtle follower dot (disabled on touch)
    SkillPill.tsx        → staggered pulse on mount
  home/
    Hero.tsx, WhatIDo.tsx, Pains.tsx, AhaMoment.tsx,
    ServicesPreview.tsx, About.tsx, Results.tsx,
    Testimonials.tsx, ClosingCTA.tsx
  services/
    ServiceCard.tsx, ServiceDetail.tsx, ToolLogoGrid.tsx
  resume/
    Timeline.tsx, TimelineItem.tsx, SkillsGroup.tsx
  contact/
    ContactForm.tsx      → react-hook-form + zod, posts to Formspree
```

A single `src/data/site.ts` holds all content (services, timeline entries, skills, testimonials, metrics) so placeholders are easy to replace later.

## Animations

- **Page load stagger**: framer-motion variants on Hero (badge → heading → sub → buttons, 0.15s stagger).
- **Scroll-in**: `FadeUp` uses `useInView` from framer-motion; applied to every section.
- **Floating blobs**: CSS keyframe `float` (3s ease-in-out infinite alternate) on absolute-positioned blurred divs.
- **Card hover**: `hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-12px_var(--primary)]` transition.
- **Buttons**: `hover:scale-[1.03]` + bg transition.
- **Nav links**: `::after` underline scaling from left.
- **Counters**: custom hook with `requestAnimationFrame`, triggered by IntersectionObserver.
- **Cursor dot**: fixed div following `mousemove`, hidden on `(pointer: coarse)`.
- **Timeline**: each `TimelineItem` slides from `x: -40` on scroll.

Install `framer-motion` for orchestration.

## Light / Dark Mode

`ThemeProvider` writes `class="dark"` to `<html>`, persists to `localStorage`, defaults to system preference. Toggle in Navbar swaps Sun/Moon Lucide icons.

## Contact Form

- `react-hook-form` + `zod` validation (name, email, subject enum, message with length limits).
- Submits to Formspree endpoint stored in `src/data/site.ts` as `FORMSPREE_ID = "REPLACE_ME"` placeholder.
- Sonner toast on success/error.

## Placeholders Called Out for User to Fill Later

- Profile photo (use a neutral avatar SVG placeholder)
- Bio paragraph
- Testimonials (3 fake-but-clearly-placeholder quotes)
- Work experience entries
- CV PDF (`/public/cv-placeholder.pdf` — empty stub link)
- Formspree form ID
- Calendly URL
- LinkedIn URL

## SEO (per route)

Each route's `head()` defines unique `title`, `description`, `og:title`, `og:description`. Root only sets sitewide defaults + favicon. Single H1 per page; semantic `<section>`, `<nav>`, `<main>`, `<footer>`.

## Dependencies to Add

- `framer-motion`
- `react-hook-form`, `@hookform/resolvers`, `zod` (likely already present — verify)

## Build Order

1. Tokens + fonts in `styles.css`, install framer-motion
2. `data/site.ts` content scaffold
3. Layout: Navbar, Footer, ThemeToggle, root shell
4. Reusable effects (FadeUp, FloatingBlob, Counter, CursorDot)
5. Home page sections (1 → 9)
6. Services overview + dynamic detail route
7. Resume page with timeline
8. Contact page with form
9. SEO meta on every route, polish hover/focus states, verify dark mode contrast
