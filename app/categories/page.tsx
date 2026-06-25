import Link from "next/link";
import type { Metadata } from "next";
import { getAllTools } from "@/lib/supabase";

const baseUrl = "https://www.mcpindex.dev";
const ogImage = `${baseUrl}/og/categories.png`;

type Tool = {
  slug: string;
  name: string;
  short_description: string | null;
  category: string | null;
  is_free: boolean | null;
  installs: string | null;
  tags: string[] | null;
};

function slugifyCategory(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

function getCategoryDescription(categoryName: string, count: number) {
  const lower = categoryName.toLowerCase();

  if (lower.includes("search")) {
    return `${count} MCP tools for live search, web retrieval, and current information access.`;
  }

  if (lower.includes("version control")) {
    return `${count} MCP tools for Git, GitHub, GitLab, repositories, branches, and code collaboration workflows.`;
  }

  if (lower.includes("developer tools")) {
    return `${count} MCP tools for coding, desktop automation, documentation, and local engineering workflows.`;
  }

  if (lower.includes("database")) {
    return `${count} MCP tools for querying databases, inspecting schemas, and connecting AI assistants to backend data.`;
  }

  if (lower.includes("cloud") || lower.includes("infrastructure")) {
    return `${count} MCP tools for cloud services, DevOps, Kubernetes, and infrastructure operations.`;
  }

  if (lower.includes("productivity")) {
    return `${count} MCP tools for docs, calendar, email, drive, and AI-powered workspace automation.`;
  }

  if (lower.includes("security")) {
    return `${count} MCP tools for vulnerability scanning, code analysis, and safer development workflows.`;
  }

  if (lower.includes("monitoring")) {
    return `${count} MCP tools for dashboards, observability, incident response, and operational visibility.`;
  }

  return `${count} MCP servers in the ${categoryName} category.`;
}

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  title: "Browse MCP Tool Categories by Use Case | MCPIndex",
  description:
    "Browse MCP tool categories including search, version control, databases, developer tools, productivity, cloud infrastructure, monitoring, and security.",
  alternates: {
    canonical: `${baseUrl}/categories`,
  },
  openGraph: {
    title: "MCP Categories | MCPIndex",
    description:
      "Explore MCP servers grouped by use case and workflow category on MCPIndex.",
    url: `${baseUrl}/categories`,
    siteName: "MCPIndex",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "MCPIndex categories overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Categories | MCPIndex",
    description:
      "Explore MCP servers grouped by use case and workflow category on MCPIndex.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function CategoriesIndexPage() {
  const tools = (await getAllTools()) as Tool[];

  const categoryMap = new Map<
    string,
    {
      name: string;
      slug: string;
      tools: Tool[];
    }
  >();

  for (const tool of tools) {
    if (!tool.category) continue;

    const slug = slugifyCategory(tool.category);

    if (!categoryMap.has(slug)) {
      categoryMap.set(slug, {
        name: tool.category,
        slug,
        tools: [],
      });
    }

    categoryMap.get(slug)!.tools.push(tool);
  }

  const categories = Array.from(categoryMap.values())
    .map((category) => ({
      ...category,
      tools: category.tools.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort(
      (a, b) => b.tools.length - a.tools.length || a.name.localeCompare(b.name)
    );

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: `${baseUrl}/categories`,
      },
    ],
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MCP Categories",
    description: "Browse MCP tools by category and use case on MCPIndex.",
    url: `${baseUrl}/categories`,
    hasPart: categories.map((category, index) => ({
      "@type": "CollectionPage",
      position: index + 1,
      name: category.name,
      url: `${baseUrl}/categories/${category.slug}`,
      description: getCategoryDescription(
        category.name,
        category.tools.length
      ),
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLdBreadcrumb),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLdCollection),
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Categories</span>
        </nav>

        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            MCP Categories
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Explore MCP servers by workflow and use case. These category pages
            help you move from broad research to specific tool comparisons,
            making it easier to find the right MCP server for search, version
            control, databases, productivity, cloud infrastructure, and more.
          </p>
          <p className="text-sm text-zinc-500">
            Browse{" "}
            <span className="text-zinc-300 font-mono">
              {categories.length}
            </span>{" "}
            categories covering{" "}
            <span className="text-zinc-300 font-mono">{tools.length}</span>{" "}
            indexed MCP tools.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
          <h2 className="text-xl font-semibold">
            How to use these category pages
          </h2>
          <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span>
                Start with a broad category to see which MCP servers serve the
                same workflow.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span>
                Open individual tool pages to review configuration, setup steps,
                and FAQs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span>
                Use category hubs as your main navigation layer before comparing
                similar tools in depth.
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-2xl font-semibold">All categories</h2>
            <Link
              href="/tools"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
            >
              View all tools
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {category.name}
                  </h3>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {category.tools.length} tools
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {getCategoryDescription(
                    category.name,
                    category.tools.length
                  )}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool.slug}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-500 border border-zinc-800"
                    >
                      {tool.name}
                    </span>
                  ))}
                  {category.tools.length > 4 && (
                    <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-500 border border-zinc-800">
                      +{category.tools.length - 4} more
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="flex items-center justifycenter py-2">
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono text-center px-4">
            Ad Space
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Why category hubs matter</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Category pages make your directory easier to browse and help
              connect broad topics with tool-specific pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
              <h3 className="text-lg font-semibold">Faster discovery</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Users can jump into the right topic cluster before comparing
                individual MCP servers.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
              <h3 className="text-lg font-semibold">Stronger structure</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Hub pages help distribute internal links more clearly across
                related tools and subtopics.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
              <h3 className="text-lg font-semibold">Better comparisons</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Similar tools appear close together, which makes setup and
                workflow differences easier to evaluate.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
