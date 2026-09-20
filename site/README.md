# wasifali.dev — portfolio site

Next.js 16 + Tailwind 4, Bento Dashboard theme in the same orange/black palette as the profile README.
Lives in `site/` so the repository root stays a GitHub profile README (its badges, scripts and
`.github/workflows` are untouched).

## Run locally

```bash
cd site
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, also what Vercel runs
```

## Deploy on Vercel

1. Import the `wasifali/wasifali` repository.
2. In the project settings set **Root Directory** to `site` (Framework: Next.js is auto-detected).
3. Deploy. No environment variables are required.

The contact form composes a `mailto:` link, so it works with zero backend. To send through an
email provider instead, replace `handleSubmit` in `components/contact-form.tsx` with a server action.

## Where things live

| Path | What |
|---|---|
| `lib/content.ts` | Every word on the site: profile, stats, case studies, experience, stack, principles |
| `components/tile.tsx` | Bento primitives: `Tile`, `Eyebrow`, `Stat`, `Pills`, `Dot` |
| `app/globals.css` | Theme tokens and the `.bento` grid |
| `public/portrait.jpg` | 4:5 portrait used on Home and About |
| `public/portrait-square.jpg` | Square crop used for Open Graph / social cards |
| `public/resume/` | Drop `Wasif-Ali-Resume.pdf` here; the résumé buttons already point to it |

## Adding a case study

Append an object to `CASE_STUDIES` in `lib/content.ts`. The Work index, the `/work/[slug]` page,
the sitemap and the "Next" tile pick it up automatically.
