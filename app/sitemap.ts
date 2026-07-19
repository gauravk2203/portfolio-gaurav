import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { articles } from "@/content/writing";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/skills",
    "/writing",
    "/services",
    "/open-source",
    "/achievements",
    "/contact",
    "/resume",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const writingRoutes = articles.map((a) => ({
    url: `${base}/writing/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...writingRoutes];
}
