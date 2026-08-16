import type { MetadataRoute } from "next";
import { getSitemapTools } from "@/lib/supabase";

export const revalidate = 3600;

const baseUrl = "https://www.mcpindex.dev";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

function slugifyCategory(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function safeDate(
  value: string | null | undefined,
  fallback: Date
): Date {
  if (!value) return fallback;

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

function page(
  path: string,
  now: Date,
  changeFrequency: ChangeFrequency,
  priority: number
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const tools = await getSitemapTools();

  console.log(`[sitemap] active tools loaded: ${tools.length}`);

  const staticPages: MetadataRoute.Sitemap = [
    page("/", now, "daily", 1),
    page("/tools", now, "daily", 0.9),
    page("/categories", now, "weekly", 0.9),
    page("/submit", now, "monthly", 0.5),
    page("/privacy-policy", now, "yearly", 0.3),
    page("/terms-of-service", now, "yearly", 0.3),
    page("/contact", now, "yearly", 0.3),

    page("/what-is-model-context-protocol", now, "monthly", 0.8),
    page("/claude-desktop-mcp-setup", now, "monthly", 0.8),
    page("/how-to-install-mcp-servers", now, "monthly", 0.8),
    page("/github-mcp-server-setup", now, "monthly", 0.8),
    page("/github-mcp-server-authentication", now, "monthly", 0.8),
    page("/best-mcp-servers-for-claude", now, "monthly", 0.8),
    page("/best-mcp-servers-for-code-review", now, "monthly", 0.8),
    page("/best-mcp-servers-for-web-scraping", now, "monthly", 0.8),
    page("/best-mcp-tools-for-github-workflows", now, "monthly", 0.8),
    page("/best-open-source-mcp-tools-on-github", now, "monthly", 0.8),
    page("/mcp-server-discovery", now, "monthly", 0.8),
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${encodeURIComponent(tool.slug)}`,
    lastModified: safeDate(tool.last_updated, now),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categories = Array.from(
    new Set(
      tools
        .map((tool) => tool.category)
        .filter(
          (category): category is string =>
            typeof category === "string" && category.trim().length > 0
        )
        .map(slugifyCategory)
        .filter(Boolean)
    )
  );

  const categoryPages: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${baseUrl}/categories/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const allEntries = [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
  ];

  const uniqueEntries = Array.from(
    new Map(
      allEntries.map((entry) => [entry.url, entry])
    ).values()
  );

  console.log(
    `[sitemap] generated ${uniqueEntries.length} unique URLs`
  );

  return uniqueEntries;
}
