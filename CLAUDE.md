# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This started as a generic Astro/React "GenAI startup" theme template but has since been forked and rebranded into **Nukay**, a real Spanish-language marketing/landing site for a software company (Ambato, Ecuador). The original generic sections (`Features.tsx`, `Pricing.tsx`, `Testimonials.tsx`, `FAQ.tsx`) and their README description still exist in the repo but are **not used on the live homepage** — `src/pages/index.astro` renders `Hero`, `AboutNukay`, `ServicesNukay`, `ContactNukay` instead. The remaining generic/demo components (chat interface, pricing calculator, file upload, toasts, command palette, etc.) live on `/components` and `/advanced-components` as a showcase/component-library page, not production content. Keep this distinction in mind before assuming README.md's feature list reflects what's actually shipped.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Type-check + build to dist/
npm run preview    # Preview the production build locally
npm run astro      # Run arbitrary Astro CLI commands (e.g. npm run astro check)
```

There is no configured test runner or linter in `package.json` — don't assume `npm test` or `npm run lint` exist.

## Environment variables

The contact form (`src/components/ContactNukay.tsx`) reads two `PUBLIC_*` vars at build time:
- `PUBLIC_CORREO_EMAIL` — destination email for FormSubmit.co (falls back to a hardcoded address in code)
- `PUBLIC_EMAIL_COOLDOWN_MINUTES` — resend cooldown, stored client-side in `localStorage`

Since Astro inlines `PUBLIC_*` vars at build time, these must be set (or passed as Docker build args) before `npm run build`, not just at runtime. See `Dockerfile`, which accepts them as `ARG`/`ENV` in the build stage.

## Deployment

Two deployment paths exist and both must be kept in mind when changing base paths or routing:
1. **GitHub Pages** via `.github/workflows/deploy.yml` — builds with `npm ci && npm run build` and deploys `dist/`. `astro.config.js` currently sets `site: 'https://ctrimm.github.io'` and `base: '/'` — inherited from the upstream template and not yet updated for Nukay's actual domain.
2. **Docker + Nginx** via `Dockerfile` — multi-stage build (Node 20 build stage → `nginx:alpine` serving `dist/`), takes the `PUBLIC_*` vars above as build args.

Because both GitHub Pages (with a possible sub-path `base`) and Docker (served from `/`) are supported, internal links use `withBase()` from `src/lib/utils.ts` rather than hardcoded root-relative paths, so they resolve correctly under either `base` setting.

## Architecture

- **Astro islands**: `.astro` files (`src/layouts/main.astro`, `src/pages/*.astro`) are the static shell; interactive pieces are React components hydrated with `client:*` directives (almost always `client:load`). Page content sections are plain React `.tsx` components imported into `.astro` pages, not `.astro` components themselves.
- **Layout**: `src/layouts/main.astro` wraps every page — it sets the base HTML shell, injects `Header`, `Footer`, and `CommandPalette` (global Cmd/Ctrl+K palette), and contains an inline pre-hydration script that reads `localStorage`/`prefers-color-scheme` and toggles the `dark` class on `<html>` before paint (avoids flash-of-wrong-theme). `ThemeToggle.tsx` duplicates this same logic client-side for the toggle button itself — if you change one, check the other.
- **Styling**: Tailwind CSS with CSS-variable-based theming (`hsl(var(--…))` tokens defined in `src/styles/global.css`, consumed via `tailwind.config.mjs`). Dark mode is class-based (`darkMode: ["class"]`), toggled on `<html>`.
- **UI primitives**: `src/components/ui/*` are shadcn/ui components (`components.json`: style `new-york`, base color `neutral`) built on Radix UI primitives, composed with `cn()` (`clsx` + `tailwind-merge`) from `src/lib/utils.ts`. Path alias `@/*` → `src/*` (see `tsconfig.json`).
- **Page components** (`src/components/*.tsx`, not in `ui/`) are the higher-level sections composed onto pages — some are live Nukay content (`AboutNukay`, `ServicesNukay`, `ContactNukay`, `Header`, `Footer`, `Hero`), others are the generic/demo showcase library used only on `/components` and `/advanced-components`.
- **Client-only browser APIs** (`localStorage`, `matchMedia`) are consistently guarded with `typeof window !== 'undefined'` checks since components render server-side first under Astro's SSR-then-hydrate model.
