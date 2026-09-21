import type { MetadataRoute } from "next";
import { CASE_STUDIES, EXPERIENCE, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/work", "/experience", "/about", "/contact"].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const studies = CASE_STUDIES.map((c) => ({
    url: `${SITE.url}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  const roles = EXPERIENCE.map((r) => ({
    url: `${SITE.url}/experience/${r.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...routes, ...studies, ...roles];
}
