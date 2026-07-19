# Gaurav Kadam — Portfolio

Full-stack developer portfolio for **Gaurav Kadam** (Mumbai). Dark editorial UI system with real resume, projects, and public repos — no fictional metrics.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** + **Lenis**
- **pnpm**

## Quick start

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm start
```

## Content

Persona and copy live under `content/`:

| File | Content |
|------|---------|
| `content/site.ts` | Name, role, socials, nav |
| `content/projects.ts` | Case studies |
| `content/experience.ts` | Work history |
| `content/skills.ts` | Skills constellation |
| `content/about.ts` | About narrative |
| `content/achievements.ts` | Awards, education, certs |
| `content/open-source.ts` | Public repos |
| `info/` | Source resume & notes (not deployed) |

Resume PDF: `public/resume.pdf` (copied from `info/`).

## Env

See `.env.example`:

- `NEXT_PUBLIC_SITE_URL`
- Optional `RESEND_API_KEY` for contact form email

## Deploy

Vercel (or Netlify) — set `NEXT_PUBLIC_SITE_URL` to your production domain.
