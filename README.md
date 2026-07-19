# Gaurav Kadam — Portfolio

Personal portfolio site for **Gaurav Kadam**, a full-stack developer based in Mumbai.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Dark-first editorial design with copper accents, real project case studies, and content managed as TypeScript modules (easy to edit without a CMS).

**Live:** [gaurav-kadam.netlify.app](https://gaurav-kadam.netlify.app) *(or your production domain)*  
**Contact:** [g.kadam.dev@gmail.com](mailto:g.kadam.dev@gmail.com)  
**GitHub:** [gauravk2203](https://github.com/gauravk2203) · **LinkedIn:** [gauravk2205](https://linkedin.com/in/gauravk2205)

---

## Features

- Home hero, selected work, about, experience timeline, skills constellation, process, contact CTA  
- Project case studies (product / showcase layouts) with screenshots and live links  
- About, experience, skills, contact form, print-friendly resume  
- Achievements, open-source list, capabilities (secondary nav)  
- Dark / light theme, command palette (`⌘K` / `Ctrl+K`)  
- SEO: metadata, sitemap, robots, JSON-LD, Open Graph image  
- Accessibility basics: skip link, focus styles, reduced motion support  

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS variables |
| Motion | Framer Motion, Lenis |
| UI primitives | Radix UI (slot, dialog, label, etc.) |
| Icons | Lucide React |
| Package manager | pnpm |

---

## Getting started

### Requirements

- Node.js 20+  
- [pnpm](https://pnpm.io/)  

### Install & run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier |

---

## Project structure

```text
app/                 # Routes (App Router)
components/          # UI, layout, hero, projects, motion
content/             # Site copy, projects, experience, skills
lib/                 # utils, fonts, SEO, contact action
public/              # Static assets (images, resume.pdf)
docs/                # Design system & content notes
info/                # Source resume / notes (optional; not required at runtime)
```

---

## Editing content

All main copy lives under `content/`:

| File | What to edit |
|------|----------------|
| `content/site.ts` | Name, role, email, socials, nav, availability, site URL |
| `content/projects.ts` | Case studies, `featured` flags, live/GitHub links |
| `content/experience.ts` | Work history |
| `content/about.ts` | About page narrative |
| `content/skills.ts` | Skills constellation nodes |
| `content/achievements.ts` | Awards, education, certifications |
| `content/open-source.ts` | Public repos list |
| `content/services.ts` | Capabilities page |

### Selected work (home)

Only projects with `featured: true` in `content/projects.ts` appear in the home “Selected work” section. Order follows the array order in that file.

### Hero portrait

1. Add your image as **`public/portrait.jpg`**  
2. Until the file exists, the copper gradient placeholder is shown  

### Resume PDF

Place or replace: **`public/resume.pdf`**  
Linked from the resume and contact sections.

### Project images

| Path | Used for |
|------|----------|
| `public/Job_Tracker/` | Job Tracker screenshots |
| `public/Frontend_Mentor/` | Frontend Mentor challenge previews |
| `public/Document_Verification/` | Optional blockchain project screenshots |

---

## Environment variables

Copy `.env.example` if present, or create `.env.local`:

```bash
# Production site URL (SEO, sitemap, canonicals)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional: contact form email via Resend
RESEND_API_KEY=
CONTACT_TO_EMAIL=g.kadam.dev@gmail.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

Without `RESEND_API_KEY`, the contact form validates and succeeds in demo mode (logged in development).

---

## Deploy (Netlify)

This project is **Next.js**, not a static `dist` site. A `netlify.toml` is included with `@netlify/plugin-nextjs`.

### Fix “Deploy directory `dist` does not exist”

In **Netlify → Site configuration → Build & deploy → Build settings**:

| Setting | Set to |
|---------|--------|
| **Build command** | `npm run build` |
| **Publish directory** | **Clear / leave empty** (remove `dist`) |
| **Functions directory** | (leave default) |

Then **Save** and **trigger a new deploy**.

If the UI still forces `dist`, the site was configured for an old static app. Clearing publish directory lets `netlify.toml` + the Next.js plugin handle output.

Optional env: `NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app`

### Deploy (Vercel)

Import the repo, framework preset **Next.js**, set `NEXT_PUBLIC_SITE_URL`, deploy.

---

## Design notes

- **Theme:** Dark-first editorial UI, copper accent (`#D4A574`), steel secondary (`#7A9EAD`)  
- **Fonts:** Newsreader (display), Geist Sans, Geist Mono  
- **Tokens:** `app/globals.css`  
- **Docs:** `docs/DESIGN_SYSTEM.md`, `docs/BRAND.md`, `docs/CONTENT.md`, `docs/DEPLOYMENT.md`  

---

## License

Private personal portfolio. All rights reserved unless you add a license file.
