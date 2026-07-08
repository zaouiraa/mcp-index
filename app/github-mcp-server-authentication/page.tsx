import type { Metadata } from "next";
import Link from "next/link";
import { getAllTools } from "@/lib/supabase";
import ToolsSearchClient from "@/components/tools-search-client";

type Tool = {
  slug: string;
  name?: string | null;
  short_description?: string | null;
  answer_first_summary?: string | null;
  developer?: string | null;
  installs?: number | null;
  is_free?: boolean | null;
  category?: string | null;
  tags?: string[] | null;
};

const baseUrl = "https://www.mcpindex.dev";

const guides = [
  {
    href: "/guides/what-is-model-context-protocol",
    badge: "Beginner",
    time: "8 min read",
    title: "What Is Model Context Protocol (MCP)?",
    description:
      "A complete introduction to MCP, how MCP servers work, and why Anthropic introduced it as an open standard.",
  },
  {
    href: "/guides/claude-desktop-mcp-setup",
    badge: "Setup",
    time: "6 min read",
    title: "Claude Desktop MCP Setup",
    description:
      "Step-by-step walkthrough for connecting MCP servers in Claude Desktop and validating that the setup works.",
  },
  {
    href: "/guides/how-to-install-mcp-servers",
    badge: "Setup",
    time: "7 min read",
    title: "How to Install MCP Servers",
    description:
      "A cross-client installation guide covering the general workflow and the most common setup mistakes.",
  },
];

const useCaseCards = [
  {
    title: "GitHub workflows",
    description:
      "Tools for repositories, pull requests, issues, code review, and documentation workflows.",
    href: "/categories/version-control",
  },
  {
    title: "Database inspection",
    description:
      "Browse schemas, inspect records, and query structured data from your AI workflow.",
    href: "/categories/database",
  },
  {
    title: "Browser automation",
    description:
      "Automate websites, test flows, and extract structured web content.",
    href: "/categories/browser-automation",
  },
  {
    title: "Cloud debugging",
    description:
      "Inspect infrastructure, cloud services, and operational environments with MCP tools.",
    href: "/categories/cloud-and-infrastructure",
  },
  {
    title: "Security scanning",
    description:
      "Find vulnerabilities, scan code, and improve security workflows with AI assistance.",
    href: "/categories/security",
  },
  {
    title: "Team knowledge search",
    description:
      "Search docs, notes, and workspace tools across productivity and collaboration systems.",
    href: "/categories/productivity",
  },
];

export const metadata: Metadata = {
  title:
    "MCPIndex — The Definitive Directory for Model Context Protocol Servers",
  description:
    "Browse 29+ MCP servers for Claude, Cursor, VS Code, and AI agents. Find setup guides, config examples, FAQs, and implementation-ready details for every Model Context Protocol tool.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title:
      "MCPIndex — The Definitive Directory for Model Context Protocol Servers",
    description:
      "Browse 29+ MCP servers for Claude, Cursor, VS Code, and AI agents. Find setup guides, config examples, FAQs, and implementation-ready details for every Model Context Protocol tool.",
    url: baseUrl,
    siteName: "MCPIndex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MCPIndex — The Definitive Directory for Model Context Protocol Servers",
    description:
      "Browse 29+ MCP servers for Claude, Cursor, VS Code, and AI agents. Find setup guides, config examples, and FAQs for every MCP tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MCPIndex",
  url: baseUrl,
  description:
    "The definitive directory for Model Context Protocol (MCP) servers.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/tools/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MCPIndex",
  url: baseUrl,
  description:
    "MCPIndex is the definitive directory for Model Context Protocol servers, helping developers discover and set up MCP tools.",
};

function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export default async function HomePage() {
  let tools: Tool[] = [];
  try {
    tools = (await getAllTools()) ?? [];
  } catch (error) {
    console.error("[HOME PAGE] getAllTools failed:", error);
    tools = [];
  }

  const totalTools = tools.length;
  const freeTools = tools.filter((t) => Boolean(t?.is_free)).length;

  const categoryCounts = tools.reduce<Record<string, number>>((acc, tool) => {
    const cat = tool?.category?.trim();
    if (!cat) return acc;
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryCounts).length;

  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      slug: getCategorySlug(name),
    }));

  const latestTools = tools.slice(0, 6);

  const mostUsedTools = [...tools]
    .sort((a, b) => (b.installs ?? 0) - (a.installs ?? 0))
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />

      {/* ── Hero ── */}
      <section
        aria-label="Hero"
        className="border-b border-zinc-800/60 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-16 md:py-20">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              MCPINDEX DIRECTORY
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Find MCP servers, setup guides, and configuration examples in one
              place
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              MCPIndex helps developers discover Model Context Protocol tools
              for Claude, Cursor, VS Code, and AI agents, with config snippets,
              setup steps, FAQs, GitHub links, npm packages, and
              implementation-ready details.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/tools"
                className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
              >
                Browse tools
              </Link>
              <Link
                href="/tools/search"
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
              >
                Open search
              </Link>
              <Link
                href="/categories"
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
              >
                Explore categories
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
            <ToolsSearchClient tools={tools} compact />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section aria-label="Directory statistics">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="mb-2 text-xs font-mono text-zinc-500">TOTAL TOOLS</p>
              <p className="text-3xl font-bold text-white">{totalTools}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="mb-2 text-xs font-mono text-zinc-500">FREE TOOLS</p>
              <p className="text-3xl font-bold text-white">{freeTools}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="mb-2 text-xs font-mono text-zinc-500">CATEGORIES</p>
              <p className="text-3xl font-bold text-white">{categories}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Categories ── */}
      <section aria-label="Browse by category">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">Start here</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Start from categories
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-sm text-purple-300 transition-colors hover:text-purple-200"
            >
              View all categories →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-300">
                    {category.name}
                  </h3>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400">
                    {category.count} tools
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Browse MCP servers in {category.name} and discover
                  setup-ready tools for this workflow.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Most Used Tools ── */}
      <section aria-label="Most used MCP tools">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-12">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">Popular picks</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Most used MCP tools
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-sm text-purple-300 transition-colors hover:text-purple-200"
            >
              Browse all tools →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mostUsedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {tool.category && (
                      <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-mono text-zinc-400">
                        {tool.category}
                      </span>
                    )}
                    {tool.is_free ? (
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono text-emerald-400">
                        Free
                      </span>
                    ) : (
                      <span className="rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-mono text-amber-400">
                        Freemium
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-300">
                    {tool.name ?? "Untitled tool"}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {tool.short_description ?? "No description available."}
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                  <p className="line-clamp-4 text-sm leading-relaxed text-zinc-300">
                    {tool
