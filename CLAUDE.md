# TERA Semiconductor Website — Project Context

## What This Project Is
A B2B marketing website for **TERA Semiconductor Ltda.**, a semiconductor package assembly and test company based in Manaus, Brazil (Zona Franca de Manaus). Built with **React + Vite**, deployed to **GitHub Pages**.

- Live site deploys from the `main` branch via GitHub Actions
- All active development happens on branch: `claude/tera-semiconductor-website-KpHWr`
- Source code lives in the `tera-website/` subfolder

## Always Work On This Branch
```
claude/tera-semiconductor-website-KpHWr
```
Never push directly to `main` unless merging finished work.

## Tech Stack
- React 18, React Router v6, Vite 7
- No UI library — all CSS is custom (per-page `.css` files)
- No i18n library — custom React Context (`src/i18n/`)
- Contact form: Web3Forms (free, no backend needed)
- Deployment: GitHub Actions → GitHub Pages at `/TERA-Website/`

## Pages
| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/technology` | `src/pages/Technology.jsx` |
| `/markets` | `src/pages/Markets.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `/legal` | `src/pages/Legal.jsx` |

Shared layout: `src/components/Navbar.jsx` + `src/components/Footer.jsx`

## What's Already Built
- ✅ Full website — all 6 pages with content, animations, responsive design
- ✅ Particle canvas background (App.jsx)
- ✅ EN / PT language toggle in Navbar (persists via localStorage)
- ✅ Full Portuguese translations for all 6 pages
- ✅ Contact form wired to Web3Forms (needs API key — see below)
- ✅ Logo image in Navbar (`/public/logo.png`, path uses `import.meta.env.BASE_URL`)

## i18n System
```
src/i18n/
  LangContext.jsx   — LangProvider, useLanguage(), useStrings() hooks
  en.js             — all English strings
  pt.js             — all Portuguese strings
```
- Use `const { t } = useLanguage()` for single strings: `t('nav.home')`
- Use `const s = useStrings()` for arrays: `s.home.markets.items.map(...)`
- Brand slogan "Trusted Engineering. Reliable Assembly." is NEVER translated
- Technical specs, cert codes, package names always stay in English

## Contact Form Setup (Pending)
The contact form is built and ready. To activate real email delivery:
1. Go to https://web3forms.com — enter the company email, get a free Access Key
2. Create `tera-website/.env.local` and add: `VITE_WEB3FORMS_KEY=your-key-here`
3. Add the same key as a GitHub Actions secret named `VITE_WEB3FORMS_KEY` for production

## Key Rules
- `import.meta.env.BASE_URL` must prefix all public asset paths (e.g. logo) — Vite sets base to `/TERA-Website/` on GitHub Actions
- Static assets go in `tera-website/public/`
- CSS variables are defined in `src/App.css` (e.g. `--teal`, `--text-secondary`)
- Scroll-reveal uses `data-reveal`, `data-reveal-left`, `data-reveal-right`, `data-reveal-scale` attributes

## Build & Run
```bash
cd tera-website
npm install       # first time only
npm run dev       # local dev server
npm run build     # production build (must pass with 0 errors before pushing)
```
