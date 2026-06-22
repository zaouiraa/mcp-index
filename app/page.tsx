import Link from "next/link";
import { getAllTools } from "@/lib/supabase";

export default async function HomePage() {
  const tools = await getAllTools();
  const latestTools = tools.slice(0, 6);
  const totalTools = tools.length;
  const freeTools = tools.filter((tool) => tool.is_free).length;
  const categories = new Set(tools.map((tool) => tool.category)).size;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800/60 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              MCPINDEX DIRECTORY
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Find MCP servers, setup guides, and configuration examples in one place
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
              MCPIndex helps developers discover Model Context Protocol tools for Claude,
              Cursor, VS Code, and AI agents, with config snippets, setup steps, FAQs,
              GitHub links, npm packages, and implementation-ready details.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/tools"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Browse tools
              </Link>
              <Link
                href="/tools"
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold rounded-xl transition-colors text-sm"
              >
                Explore directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="text-xs font-mono text-zinc-500 mb-2">TOTAL TOOLS</p>
              <p className="text-3xl font-bold text-white">{totalTools}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="text-xs font-mono text-zinc-500 mb-2">FREE TOOLS</p>
              <p className="text-3xl font-bold text-white">{freeTools}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="text-xs font-mono text-zinc-500 mb-2">CATEGORIES</p>
              <p className="text-3xl font-bold text-white">{categories}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-20 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-zinc-500">Featured</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Latest tools</h2>
            </div>
            <Link href="/tools" className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
              View all tools →
            </Link>
          </div>

          {latestTools.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No tools found</h3>
              <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
                Add rows to your Supabase tools table to populate the homepage and the tools directory.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {latestTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-6 flex flex-col gap-5"
                >
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
                    </div>

                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {tool.short_description}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4">
                      {tool.answer_first_summary}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
                    <span>by {tool.developer}</span>
                    <span>{tool.installs} installs</span>
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
