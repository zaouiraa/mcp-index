import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllGuides } from '@/lib/content/related-guides'
import { GuideCard, GuideBadge } from '@/components/guides-ui'

export const dynamic = 'force-dynamic'

const baseUrl = 'https://www.mcpindex.dev'

export const metadata: Metadata = {
  title: 'MCP Guides — Setup Tutorials & Comparisons | MCPIndex',
  description:
    'Browse MCP guides covering setup tutorials, client configuration, comparisons, and workflows for Model Context Protocol servers.',
  alternates: {
    canonical: `${baseUrl}/guides`,
  },
  openGraph: {
    title: 'MCP Guides — Setup Tutorials & Comparisons',
    description:
      'Browse MCP guides covering setup tutorials, client configuration, comparisons, and workflows for Model Context Protocol servers.',
    url: `${baseUrl}/guides`,
    siteName: 'MCPIndex',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCP Guides — Setup Tutorials & Comparisons',
    description:
      'Browse MCP guides covering setup tutorials, client configuration, comparisons, and workflows for Model Context Protocol servers.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function GuidesIndexPage() {
  const guides = getAllGuides()

  const featuredGuide = guides.find(
    (guide) => guide.slug === 'what-is-model-context-protocol'
  )
  const otherGuides = guides.filter((guide) => guide.slug !== featuredGuide?.slug)

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/guides` },
    ],
  }

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${baseUrl}/guides/${guide.slug}`,
      name: guide.title,
    })),
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Guides</span>
        </nav>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            MCP Guides
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Setup tutorials, client configuration guides, and comparisons for
            Model Context Protocol servers. Start with the basics or jump
            straight to a specific client setup.
          </p>
        </div>

        {featuredGuide && (
          <Link
            href={`/guides/${featuredGuide.slug}`}
            className="block rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900/60 p-8 space-y-4 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <GuideBadge>{featuredGuide.category}</GuideBadge>
              <span className="text-xs text-zinc-600 font-mono">
                {featuredGuide.readingTime}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {featuredGuide.title}
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              {featuredGuide.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-mono text-purple-400">
              Read the guide →
            </span>
          </Link>
        )}

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">All guides</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Browse every MCP guide currently available on MCPIndex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherGuides.map((guide) => (
              <GuideCard
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                title={guide.title}
                description={guide.excerpt}
                meta={guide.readingTime}
                category={guide.category}
              />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-2">
          <p className="text-sm text-zinc-500 leading-relaxed">
            Looking for a specific MCP server instead? Browse the full{' '}
            <Link
              href="/tools"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              MCP tools directory
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
