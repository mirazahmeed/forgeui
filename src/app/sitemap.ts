import type { MetadataRoute } from "next";
import { COMPONENT_REGISTRY } from "@/lib/registry";
import { TEMPLATES } from "@/lib/templates";
import { DOC_SECTIONS } from "@/lib/docs";

const BASE_URL = "https://forgeui.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/components`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/templates`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/themes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/animations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/gradient-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/color-palette`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/shadow-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/border-radius`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/animation-playground`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Component pages
  const componentPages: MetadataRoute.Sitemap = COMPONENT_REGISTRY.map((comp) => ({
    url: `${BASE_URL}/components/${comp.category}/${comp.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Template pages
  const templatePages: MetadataRoute.Sitemap = TEMPLATES.map((t) => ({
    url: `${BASE_URL}/templates/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Doc pages
  const docPages: MetadataRoute.Sitemap = DOC_SECTIONS.flatMap((section) =>
    section.items.map((page) => ({
      url: `${BASE_URL}/docs/${section.slug}/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...staticPages, ...componentPages, ...templatePages, ...docPages];
}
