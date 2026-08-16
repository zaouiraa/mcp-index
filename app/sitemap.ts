import type { MetadataRoute } from "next";
import { getAllTools } from "@/lib/supabase";
import { GUIDE_CATALOG } from "@/lib/content/related-guides";

export const revalidate = 3600;

const baseUrl = "https://www.mcpindex.dev";

type Tool = {
  slug: string;
  category: string | null;
  last_updated?: string | null;
  review_status?: string | null;
  is_visible?: boolean | null;
  status?: string | null;
};

function slugifyCategory(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function safeDate(value: string | null | undefined, fallback: Date) {
  if (!value) return fallback;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? fallback : date;
}

function normalizeHref(value: string | null | undefined) {
  if (!value) return null;

  const href = value.trim();

  if (!href.startsWith("/")) return null;
  if (href.includes(" ")) return null;
  if (href.startsWith("//")) return null;

  return href;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const tools = (await getAllTools()) as Tool[];

  const visibleTools = tools.filter(
    (tool) =>
      tool.slug?.trim() &&
      tool.review_status === "reviewed" &&
      tool.is_visible === true &&
      tool.status === "active"
  );

  const staticPaths = [
    "/",
    "/tools",
    "/categories",
    "/submit",
    "/privacy-policy",
    "/terms-of-service",
    "/contact",
    "/what-is-model-context-protocol",
    "/claude-desktop-mcp-setup",
    "/how-to-install-mcp-servers",
    "/github-mcp-server-setup",
    "/github-mcp-server-authentication",
    "/best-mcp-servers-for-claude",
    "/best-mcp-servers-for-code-review",
    "/best-mcp-servers-for-web-scraping",
    "/best-mcp-tools-for-github-workflows",
    "/best-open-source-mcp-tools-on-github",
    "/mcp-server-discovery",
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "daily" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/tools" || path === "/categories"
          ? 0.9
          : 0.8,
  }));

  const toolPages: MetadataRoute.Sitemap = visibleTools.map((tool) => ({
    url: `${baseUrl}/tools/${encodeURIComponent(tool.slug)}`,
    lastModified: safeDate(tool.last_updated, now),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categorySlugs = Array.from(
    new Set(
      visibleTools
        .map((tool) => tool.category)
        .filter((category): category is string => Boolean(category))
        .map(slugifyCategory)
        .filter(Boolean)
    )
  );

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDE_CATALOG
    .map((guide) => normalizeHref(guide.href))
    .filter((href): href is string => Boolean(href))
    .map((href) => ({
      url: `${baseUrl}${href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  const entries = [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
    ...guidePages,
  ];

  return Array.from(
    new Map(entries.map((entry) => [entry.url, entry])).values()
  );
}
