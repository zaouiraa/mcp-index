import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  getGuideBySlug,
  getGuideSlugs,
  getRelatedGuides,
} from '@/lib/content/related-guides'
import { getAllTools } from '@/lib/supabase'
import { GuideBadge, Section } from '@/components/guides-ui'

export const dynamic = 'force-dynamic'
export const dynamicParams = true

const baseUrl = 'https://www.mcpindex.dev'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getGuideSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    return {
      title: 'Guide Not Found | MCPIndex',
      description: 'The requested MCP guide could not be found.',
      alternates: { canonical: `${baseUrl}/guides/${slug}` },
      robots: { index: false, follow: false },
    }
  }

  const canonical = `${baseUrl}/guides/${guide.slug}`

  return {
    title: `${guide.title} | MCPIndex`,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonical,
      siteName: 'MCPIndex',
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
    },
    robots: { index: true, follow: true },
  }
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) notFound()

  const relatedGuides = getRelatedGuides(guide.slug, 3)

  let relatedTools: { slug: string; name: string; short_description?: string | null }[] = []
  try {
    const allTools = await getAllTools()
    relatedTools = (allTools as typeof relatedTools)
      .filter((tool) => guide.relatedToolSlugs?.includes(tool.slug))
      .slice(0, 3)
  } catch (err) {
    console.error('[guide detail] failed to fetch related tools:', err)
  }

  const pageUrl = `${baseUrl}/guides/${guide.slug}`

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    url: pageUrl,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: { '@type': 'Organization', name: 'MCPIndex' },
    publisher: { '@type': 'Organization', name: 'MCPIndex' },
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: pageUrl },
    ],
  }

  const jsonLdFaq =
    guide.faq && guide.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: guide.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-white transition-colors">
            Guides
          </Link>
          <span>/</span>
          <span className="text-zinc-300">{guide.title}</span>
        </nav>

        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <GuideBadge>{guide.category}</GuideBadge>
            <span className="text-xs text-zinc-600 font-mono">{guide.readingTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {guide.title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">{guide.description}</p>

          <div className="flex items-center gap-4 text-sm text-zinc-500 flex-wrap">
            <span>Published {guide.publishedAt}</span>
            <span className="text-zinc-700">•</span>
            <span>Updated {guide.updatedAt}</span>
          </div>
        </div>

        <div className="space-y-10">
          {guide.sections.map((section) => (
            <Section key={section.id} id={section.id} title={section.title}>
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {section.list && (
                <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          ))}
        </div>

        {guide.faq && guide.faq.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Common questions about {guide.title.toLowerCase()}.
              </p>
            </div>
            <div className="space-y-5">
              {guide.faq.map((item, i) => (
                <article
                  key={i}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="text-zinc-400 leading-relaxed text-[15px]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {relatedTools.length > 0 && (
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Related tools</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                MCP servers mentioned in this guide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block"
                >
                  <h3 className="text-base font-semibold text-white">{tool.name}</h3>
                  {tool.short_description && (
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {tool.short_description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedGuides.length > 0 && (
          <section className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Related guides</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                More setup tutorials and comparisons related to this topic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block"
                >
                  <h3 className="text-base font-semibold text-white">{related.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
