import type { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/supabase"

export const revalidate = 3600 // regenerate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mcpindex.dev"
  const lastModified = new Date()

  let slugs: string[] = []
  try {
    slugs = await getAllSlugs()
  } catch (err) {
    console.error("[sitemap] failed to fetch slugs:", err)
    // sitemap will be generated with static pages only — tools will be missing
  }

  const toolPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...toolPages,
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
