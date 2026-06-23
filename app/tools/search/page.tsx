import Link from "next/link";
import type { Metadata } from "next";
import { getAllTools } from "@/lib/supabase";

const baseUrl = "https://www.mcpindex.dev";

type Tool = {
  slug: string;
  name: string;
  short_description: string | null;
  category: string | null;
  is_free: boolean | null;
  installs: string | null;
  tags: string[] | null;
  developer?: string | null;
};

function slugifyCategory(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export const metadata: Metadata = {
  title: "Search MCP Tools | MCPIndex",
  description:
    "Search the MCPIndex directory by tool name, category, developer, or tags to find the right MCP server for your workflow.",
  alternates: {
    canonical: `${baseUrl}/tools/search`,
  },
  openGraph: {
    title: "Search MCP Tools | MCPIndex",
    description:
      "Search the MCPIndex directory by tool name, category, developer, or tags.",
    url: `${baseUrl}/tools/search`,
    siteName: "MCPIndex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search MCP Tools | MCPIndex",
    description:
      "Search the MCPIndex directory by tool name, category, developer, or tags.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function ToolsSearchPage({ searchParams }: SearchPageProps) {
  const params = searchParams ? await searchParams : {};
  const query = (params?.q || "").trim().toLowerCase();

  const tools = (await getAllTools()) as Tool[];

  const filteredTools = query
    ? tools.filter((tool) => {
        const haystack = [
          tool.name,
          tool.short_description,
          tool.category,
          tool.developer,
          ...(tool.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      })
    : tools;

  const categories = Array.from(
    new Set(
      tools
        .map((tool) => tool.category)
        .filter((category): category is string => Boolean(category))
    )
  ).sort((a, b) => a.localeCompare(b));

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
        name: "Tools",
        item: `${baseUrl}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Search",
        item: `${baseUrl}/tools/search`,
      },
    ],
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: query ? `Search results for "${query}"` : "Search MCP Tools",
    description: query
      ? `Search results for "${query}" across the MCPIndex tools directory.`
      : "Search the MCPIndex directory by tool name, category, tags, or developer.",
    url: query
      ? `${baseUrl}/tools/search?q=${encodeURIComponent(query)}`
      : `${baseUrl}/tools/search`,
    mainEntity: filteredTools.slice(0, 24).map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      url: `${baseUrl}/tools/${tool.slug}`,
      applicationCategory: tool.category || "MCP Tool",
      description: tool.short_description || undefined,
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Search</span>
        </nav>

        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Search MCP Tools
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Search the MCPIndex directory by tool name, category, developer, or
            tags to find the best MCP server for your workflow.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
          <form action="/tools/search" method="GET" className="space-y-3">
            <label
              htmlFor="q"
              className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500"
            >
              Search query
            </label>

            <div className="flex flex-col md:flex-row gap-3">
              <input
                id="q"
                name="q"
                defaultValue={query}
                placeholder="Try: git, browser, search, database, github..."
                className="w-full rounded-xl bg-black border border-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-wrap gap-2 pt-2">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category}
                href={`/categories/${slugifyCategory(category)}`}
                className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-2xl font-semibold">
              {query ? `Results for “${query}”` : "All searchable tools"}
            </h2>
            <span className="text-sm text-zinc-600 font-mono">
              {filteredTools.length} result{filteredTools.length === 1 ? "" : "s"}
            </span>
          </div>

          {query && filteredTools.length === 0 && (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
              <h3 className="text-lg font-semibold text-white">No matches found</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Try a broader keyword like Git, search, browser, database, docs,
                or productivity. You can also browse the full{" "}
                <Link
                  href="/tools"
                  className="text-zinc-300 underline underline-offset-4 hover:text-white"
                >
                  tools directory
                </Link>{" "}
                or explore a specific category.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-5 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    {tool.short_description && (
                      <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                        {tool.short_description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {tool.category && (
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {tool.category}
                      </span>
                    )}

                    {tool.is_free != null && (
                      <span
                        className={`px-2.5 py-1 text-[11px] font-mono rounded-md border ${
                          tool.is_free
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {tool.is_free ? "Free" : "Freemium"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {(tool.tags || []).slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {tool.installs && (
                    <span className="text-xs text-zinc-600 font-mono">
                      {tool.installs} installs
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center py-2">
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono text-center px-4">
            Ad Space
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Search tips</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Use broad workflow terms first, then narrow by vendor, platform,
              or use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
              <h3 className="text-lg font-semibold">Start broad</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Try searches like search, git, browser, monitoring, docs, or database.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
              <h3 className="text-lg font-semibold">Use vendor names</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Search GitHub, GitLab, AWS, Supabase, Grafana, or Figma to find vendor-specific tools.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
              <h3 className="text-lg font-semibold">Refine by category</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                If results feel broad, jump into a category page for a tighter tool comparison.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
