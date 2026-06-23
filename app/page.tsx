import Link from "next/link";
import { getAllTools } from "@/lib/supabase";
import ToolsSearchClient from "@/components/tools-search-client";

export default async function HomePage() {
  const tools = (await getAllTools()) ?? [];

  const totalTools = tools.length;
  const freeTools = tools.filter((tool) => Boolean(tool?.is_free)).length;
  const categories = new Set(
    tools.map((tool) => tool?.category).filter(Boolean)
  ).size;
  const latestTools = tools.slice(0, 6);

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
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
            <ToolsSearchClient tools={tools} compact />
          </div>
        </div>
      </section>

      <section>
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

      <section>
        <div className="mx-auto max-w-6xl space-y-8 px-6 pb-16 md:pb-20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">Featured</p>
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
                Add rows to your Supabase tools table to populate the homepage and
                the tools directory.
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
                      {tool.name ?? "Untitled tool"}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {tool.short_description ?? "No description available."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                    <p className="line-clamp-4 text-sm leading-relaxed text-zinc-300">
                      {tool.answer_first_summary ?? "No summary available."}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 text-xs font-mono text-zinc-500">
                    <span>by {tool.developer ?? "Unknown"}</span>
                    <span>{tool.installs ?? 0} installs</span>
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
