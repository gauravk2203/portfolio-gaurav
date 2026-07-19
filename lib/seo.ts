import { siteConfig } from "@/content/site";

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.socials.map((s) => s.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function projectJsonLd(project: {
  title: string;
  summary: string;
  slug: string;
  year: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    dateCreated: String(project.year),
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
