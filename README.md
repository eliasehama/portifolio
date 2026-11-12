# Engineering Portfolio

A single-page developer portfolio built with **React + Vite + TypeScript + Tailwind CSS**. Type-led, high-contrast, calm. Light/dark mode follows `prefers-color-scheme`. No CMS, no animation libraries — CSS transitions only.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # serve the production build locally
```

## Project structure

```
index.html              # HTML shell, SEO/social meta, fonts
public/
  profile.jpg           # Hero + header portrait (optimized ~40 KB)
  favicon.svg           # Favicon
src/
  main.tsx              # React entry point
  App.tsx               # All sections, semantic HTML, keyboard-navigable
  content.ts            # ★ ALL your content lives here (typed)
  index.css             # Tailwind layers, base tokens, focus styles
tailwind.config.js      # Accent color, fonts, darkMode: 'media'
```

## Editing your content

Everything editable is in **`src/content.ts`**. You never touch JSX to update projects, roles, or links. The file is fully typed, so TypeScript will warn you if a field is missing.

- `profile` — name, positioning line, availability, location, email, phone, social links.
- `projects[]` — each has `name`, `tagline`, `problem`, `role`, `stack[]`, `decision` (the hard technical call), and an optional `links { live, code }` (the link row is hidden when absent).
- `experience[]` — role, company, period, and one **concrete outcome** each.
- `writing[]` — optional; the section only renders if the array is non-empty.
- `about[]` — short first-person paragraphs.
- `nonWork` — one human detail.

### Swapping in your real links

Edit `profile.socials` (GitHub/LinkedIn/Instagram), `profile.email`, and `profile.phone`. The email and phone appear in the hero and the Contact section.

### Swapping your photo

Replace `public/profile.jpg` with your own (keep the same filename). It is center-cropped and displayed as a circle at 240px; a 480×480 JPEG is ideal.

## Design tokens

- **Accent color**: change `--accent` in `tailwind.config.js` (`accent.DEFAULT`). One accent only, by design.
- **Fonts**: Inter (sans) + JetBrains Mono (mono), loaded from Google Fonts in `src/index.css`. Swap the `@import` URL to change them.
- **Dark mode**: `darkMode: 'media'` in `tailwind.config.js` — follows the OS setting automatically. No toggle needed.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, ordered heading hierarchy.
- Visible focus rings on every interactive element (`:focus-visible`).
- "Skip to content" link for keyboard users.
- Body text meets WCAG AA contrast in both themes.
- Fully keyboard-navigable; no keyboard traps.

## Deploy

### Deploy to Vercel (free Hobby plan)

The project is already configured — `vercel.json` sets the Vite framework, `npm run build`, and `dist/` output.

**Option A — Vercel CLI (fastest, no GitHub needed)**

```bash
npm i -g vercel     # install the CLI once
vercel login        # sign in (free account: GitHub, GitLab, Bitbucket, or email)
vercel              # first run: link project, then deploy
vercel --prod       # promote to production
```

Answer the prompts with the defaults (framework auto-detected as Vite, build `npm run build`, output `dist`). Every `vercel --prod` redeploys the live site. You get a free `*.vercel.app` URL.

**Option B — Git + dashboard (auto-deploy on push)**

```bash
git init
git add .
git commit -m "Initial commit"
# create a repo on GitHub/GitLab, then:
git remote add origin <your-repo-url>
git push -u origin main
```

1. Go to https://vercel.com/new.
2. Import the repo.
3. Framework preset: **Vite** · Build: `npm run build` · Output: `dist`.
4. Click Deploy. Future pushes to `main` redeploy automatically.

No environment variables are needed.

### Any static host (GitHub Pages, S3, Cloudflare Pages)

```bash
npm run build
# upload the contents of dist/ to your host
```

For GitHub Pages with a custom base path, set `base` in `vite.config.js`:

```js
export default defineConfig({ plugins: [react()], base: '/your-repo-name/' })
```

## Performance notes

- No heavy dependencies beyond React itself.
- The hero portrait is a 480×480 JPEG (~40 KB), not the original multi-megabyte PNG.
- Fonts are the only external request; self-host them if you need to shave the last Lighthouse points.
- Output is a single small JS + CSS bundle.

## Customizing further

- Change the hero photo: replace `public/profile.jpg`.
- Want an interactive terminal in the hero? Add a small React component in `App.tsx` and respond to a few commands in local state — no animation library needed.