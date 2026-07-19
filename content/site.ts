export const siteConfig = {
  name: "Gaurav Kadam",
  role: "Full-Stack Developer",
  slogan: "Build with clarity.",
  tagline:
    "Full-stack developer focused on React, TypeScript, and reliable product UIs.",
  description:
    "Portfolio of Gaurav Kadam — full-stack developer based in Mumbai. React, Next.js, TypeScript, and backend systems.",
  email: "g.kadam.dev@gmail.com",
  location: "Mumbai, India",
  availability: {
    status: "available" as const,
    label: "Open to full-stack opportunities",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gaurav-kadam.netlify.app",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/gauravk2203",
      label: "GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/gauravk2205",
      label: "LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:g.kadam.dev@gmail.com",
      label: "Email",
    },
  ],
  /** Primary navigation */
  nav: [
    { href: "/projects", label: "Work", id: "work" },
    { href: "/about", label: "About", id: "about" },
    { href: "/experience", label: "Experience", id: "experience" },
    { href: "/skills", label: "Skills", id: "skills" },
    { href: "/contact", label: "Contact", id: "contact" },
  ],
  /** Footer / mobile secondary — real pages only, no fake marketing */
  secondaryNav: [
    { href: "/open-source", label: "Open Source" },
    { href: "/achievements", label: "Achievements" },
    { href: "/services", label: "Capabilities" },
    { href: "/resume", label: "Resume" },
    { href: "/privacy", label: "Privacy" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
