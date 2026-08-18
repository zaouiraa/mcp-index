import Link from "next/link";
import {
  getAllTools,
  type ToolRow,
} from "@/lib/supabase";
import ToolsSearchClient from "@/components/tools-search-client";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

type Tool = ToolRow;

function getCategorySlug(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getInstallCount(
  installs: Tool["installs"]
): number {
  if (
    typeof installs === "number" &&
    Number.isFinite(installs)
  ) {
    return installs;
  }

  if (typeof installs !== "string") {
    return 0;
  }

  const normalized = installs
    .trim()
    .toUpperCase()
    .replace(/,/g, "");

  const match = normalized.match(
    /^([\d.]+)\s*([KM])?\+?$/
  );

  if (!match) {
    const numeric = Number(normalized);
    return Number.isFinite(numeric)
      ? numeric
      : 0;
  }

  const value = Number(match[1]);
  const suffix = match[2];

  if (!Number.isFinite(value)) {
    return 0;
  }

  if (suffix === "M") {
    return value * 1_000_000;
  }

  if (suffix === "K") {
    return value * 1_000;
  }

  return value;
}

export default async function HomePage() {
  let tools: Tool[] = [];

  try {
    tools = (await getAllTools()) ?? [];

    console.log(
      "[HOME PAGE] published tools loaded:",
      tools.length
    );

    console.log(
      "[HOME PAGE] latest slugs:",
      tools.slice(0, 10).map((tool) => tool.slug)
    );
  } catch (error) {
    console.error(
      "[HOME PAGE] getAllTools failed:",
      error
    );
  }

  const totalTools = tools.length;

  const freeTools = tools.filter(
    (tool) => tool.is_free === true
  ).length;

  const categoryCounts = tools.reduce<
    Record<string, number>
  >((acc, tool) => {
    const category = tool.category?.trim();

    if (!category) {
      return acc;
    }

    acc[category] = (acc[category] ?? 0) + 1;

    return acc;
  }, {});

  const categories = Object.keys(
    categoryCounts
  ).length;

  const topCategories = Object.entries(
    categoryCounts
  )
    .sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1];
      }

      return a[0].localeCompare(b[0]);
    })
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      slug: getCategorySlug(name),
    }));

  const latestTools = [...tools]
    .sort((a, b) => {
      const dateA = a.last_updated
        ? new Date(a.last_updated).getTime()
        : 0;

      const dateB = b.last_updated
        ? new Date(b.last_updated).getTime()
        : 0;

      if (dateB !== dateA) {
        return dateB - dateA;
      }

      return (a.name ?? "").localeCompare(
        b.name ?? ""
      );
    })
    .slice(0, 6);

  const mostUsedTools = [...tools]
    .sort((a, b) => {
      return (
        getInstallCount(b.installs) -
        getInstallCount(a.installs)
      );
    })
    .slice(0, 6);

  const useCaseCards = [
    {
      title: "GitHub workflows",
      description:
        "Tools for repositories, pull requests, issues, code review, and documentation workflows.",
      href: "/best-mcp-tools-for-github-workflows",
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

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800/60 bg-zinc-950/40">
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
              MCPIndex helps developers discover Model Context Protocol tools for
              Claude, Cursor, VS Code, and AI agents, with config snippets, setup
              steps, FAQs, GitHub links, npm packages, and implementation-ready
              details.
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
            <ToolsSearchClient
              tools={tools}
              compact
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="mb-2 text-xs font-mono text-zinc-500">
                TOTAL TOOLS
              </p>

              <p className="text-3xl font-bold text-white">
                {totalTools}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="mb-2 text-xs font-mono text-zinc-500">
                FREE TOOLS
              </p>

              <p className="text-3xl font-bold text-white">
                {freeTools}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="mb-2 text-xs font-mono text-zinc-500">
                CATEGORIES
              </p>

              <p className="text-3xl font-bold text-white">
                {categories}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">
                Start here
              </p>

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
                  Browse MCP servers in {category.name} and discover setup-ready
                  tools for this workflow.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-12">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">
                Popular picks
              </p>

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
                    {tool.name || "Untitled tool"}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {tool.short_description ||
                      "No description available."}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                  <p className="line-clamp-4 text-sm leading-relaxed text-zinc-300">
                    {tool.answer_first_summary ||
                      "No summary available."}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 text-xs font-mono text-zinc-500">
                  <span>
                    by {tool.developer || "Unknown"}
                  </span>

                  <span>
                    {getInstallCount(
                      tool.installs
                    ).toLocaleString()}{" "}
                    installs
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-8 px-6 pb-12">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">
                Use cases
              </p>

              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Best tools by use case
              </h2>
            </div>

            <Link
              href="/tools/search"
              className="text-sm text-purple-300 transition-colors hover:text-purple-200"
            >
              Search by workflow →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {useCaseCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-5 text-sm text-purple-300 group-hover:text-purple-200">
                  Explore this use case →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-8 px-6 pb-16 md:pb-20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">
                Featured
              </p>

              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Latest tools
              </h2>
            </div>

            <Link
              href="/tools"
              className="text-sm text-purple-300 transition-colors hover:text-purple-200"
            >
              View all tools →
            </Link>
          </div>

          {latestTools.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 text-center">
              <h3 className="mb-2 text-xl font-semibold text-white">
                No tools found
              </h3>

              <p className="mx-auto max-w-xl leading-relaxed text-zinc-500">
                Add rows to your Supabase tools table to populate the homepage
                and the tools directory.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {latestTools.map((tool) => (
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
                      {tool.name || "Untitled tool"}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {tool.short_description ||
                        "No description available."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                    <p className="line-clamp-4 text-sm leading-relaxed text-zinc-300">
                      {tool.answer_first_summary ||
                        "No summary available."}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 text-xs font-mono text-zinc-500">
                    <span>
                      by {tool.developer || "Unknown"}
                    </span>

                    <span>
                      {getInstallCount(
                        tool.installs
                      ).toLocaleString()}{" "}
                      installs
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
