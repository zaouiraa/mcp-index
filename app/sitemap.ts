import type { MetadataRoute } from "next";
import { getAllTools } from "@/lib/supabase";

export const revalidate = 3600;

const baseUrl = "https://www.mcpindex.dev";

type Tool = {
  slug: string;
  category: string | null;
  last_updated?: string | null;
};

function slugifyCategory(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let tools: Tool[] = [];

  try {
    tools = (await getAllTools()) as Tool[];
  } catch (err) {
    console.error("[sitemap] failed to fetch tools:", err);
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: tool.last_updated ? new Date(tool.last_updated) : now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categorySlugs = Array.from(
    new Set(
      tools
        .map((tool) => tool.category)
        .filter((category): category is string => Boolean(category))
        .map((category) => slugifyCategory(category))
    )
  );

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
