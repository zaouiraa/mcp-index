# MCPIndex

MCPIndex is a directory and knowledge base for Model Context Protocol (MCP)
servers — helping developers discover, compare, and set up MCP tools across
different AI clients.

🔗 **Live site:** [mcpindex.dev](https://www.mcpindex.dev)

## Features

- **Tools directory** — browse and search MCP servers by category, with
  detailed pages for each tool (`app/tools/[slug]/page.tsx`).
- **Categories** — grouped views of tools by category
  (`app/categories/[category]/page.tsx`).
- **Guides** — setup tutorials, client configuration walkthroughs, and
  comparisons for MCP servers (`app/guides` and `app/guides/[slug]`).
- **Submit tool** — form for the community to submit new MCP servers.
- **SEO-first** — dynamic metadata, JSON-LD (Article, FAQPage,
  BreadcrumbList, ItemList), and an auto-generated `sitemap.xml`
  (`app/sitemap.ts`) covering static pages, tools, categories, and guides.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** Supabase (tools data)
- **Styling:** Tailwind CSS
- **Content:** Static guide catalog defined in
  `lib/content/related-guides.ts`

## Project Structure

    app/
      page.tsx                     # Home page
      tools/
        page.tsx                   # Tools directory
        [slug]/page.tsx            # Tool detail page
      categories/
        page.tsx                   # Categories index
        [category]/page.tsx        # Category detail page
      guides/
        page.tsx                   # Guides index
        [slug]/page.tsx            # Guide detail page
      submit/page.tsx               # Submit a tool
      sitemap.ts                    # Auto-generated sitemap
    lib/
      supabase.ts                   # Supabase client + data fetchers
      content/
        related-guides.ts           # Guide catalog + related-content helpers
    components/
      guides-ui.tsx                 # Shared guide UI components (cards, badges)

## Guides Content Model

Guides are defined as static content in `lib/content/related-guides.ts`.
Each guide includes:

- `slug`, `title`, `description`, `excerpt`, `category`, `readingTime`
- `publishedAt`, `updatedAt`
- `sections` — structured body content rendered on the guide detail page
- `faq` — optional list of question/answer pairs (rendered with FAQPage
  JSON-LD)
- `relatedToolSlugs` — tool slugs referenced in the guide, used to surface
  related tools from Supabase

The catalog exposes:

- `getAllGuides()` — all guides, used by the guides index page
- `getGuideBySlug(slug)` — single guide lookup, used by the guide detail page
- `getGuideSlugs()` — used by `generateStaticParams`
- `getRelatedGuides(slug, limit)` — related guides by category/tags
- `GUIDE_CATALOG` — guides mapped with an `href` field
  (`/guides/{slug}`), consumed exclusively by `app/sitemap.ts`

## Sitemap

`app/sitemap.ts` builds `sitemap.xml` from four sources:

1. Static pages (home, tools, categories, submit, legal pages)
2. Tool pages, fetched from Supabase via `getAllTools()`
3. Category pages, derived from unique tool categories
4. Guide pages, from `GUIDE_CATALOG` (using `guide.href`)

The sitemap revalidates every hour (`revalidate = 3600`).

## Getting Started

    npm install
    npm run dev

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Adding a New Guide

1. Add a new entry to the `guides` array in
   `lib/content/related-guides.ts` with a unique `slug`.
2. Fill in `sections`, and optionally `faq` and `relatedToolSlugs`.
3. The guide is automatically picked up by `/guides`, `/guides/[slug]`, and
   `sitemap.xml` — no other changes needed.

## License

All rights reserved © MCPIndex.
