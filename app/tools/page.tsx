import Link from "next/link";
import { getAllTools } from "@/lib/supabase";

export default async function ToolsPage() {
  const tools = await getAllTools();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800/60 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              MCP TOOLS DIRECTORY
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Discover MCP servers for Claude, Cursor, and AI agents
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              Browse verified Model Context Protocol tools, setup guides, config examples,
              and implementation details for development, automation, databases, search,
              cloud, and productivity workflows.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-mono text-zinc-500">Directory</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {tools.length} tools indexed
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">Live from Supabase</span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">Static route compatible</span>
            </div>
          </div>

          {tools.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No tools found</h3>
              <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
                Your tools table is currently empty, or the app could not fetch data from Supabase.
                Add rows to the tools table and reload this page.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-6 flex flex-col gap-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                          {tool.category}
                        </span>

                        {tool.is_free ? (
                          <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Free
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Freemium
                          </span>
                        )}

                        {tool.status && (
                          <span
                            className={`px-2.5 py-1 text-[11px] font-mono rounded-md border ${
                              tool.status === "active"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                : tool.status === "archived"
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                : tool.status === "deprecated"
                                ? "bg-red-500/10 text-red-400 border-red-500/20"
                                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            }`}
                          >
                            {tool.status}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                          {tool.short_description}
                        </p>
                      </div>
                    </div>

                    <span className="text-zinc-700 group-hover:text-zinc-500 transition-colors text-lg">→</span>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4">
                      {tool.answer_first_summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {tool.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-zinc-900 text-zinc-500 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {tool.tags.length > 4 && (
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-zinc-900 text-zinc-500 border border-zinc-800">
                        +{tool.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-zinc-500 font-mono">
                    <span>by {tool.developer}</span>
                    <div className="flex items-center gap-3">
                      <span>{tool.installs} installs</span>
                      {tool.github_status && (
                        <span
                          className={
                            tool.github_status === "ok"
                              ? "text-emerald-400"
                              : tool.github_status === "redirected"
                              ? "text-yellow-400"
                              : tool.github_status === "not_found"
                              ? "text-red-400"
                              : "text-zinc-500"
                          }
                        >
                          github:{tool.github_status}
                        </span>
                      )}
                    </div>
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
