// app/tools/page.tsx
import Link from "next/link";
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
};

export const metadata = {
  title: "MCP Tools Directory: Browse All MCP Servers | MCPIndex",
  description:
    "Browse the full MCP tools directory. Discover MCP servers for Git, GitHub, GitLab, browser automation, databases, productivity, cloud infrastructure, and more.",
  alternates: {
    canonical: `${baseUrl}/tools`,
  },
};

export default async function ToolsIndexPage() {
  const tools = (await getAllTools()) as Tool[];

  const categories = Array.from(
    new Set(
      tools
        .map((t) => t.category)
        .filter((c): c is string => Boolean(c))
    )
  ).sort();

  const totalCount = tools.length;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Tools</span>
        </nav>

        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            MCP Tools Directory
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Explore all indexed MCP servers in one place. Filter by category,
            search by name or tags, and find the right tool to connect your AI
            assistant to real services.
          </p>
          <p className="text-sm text-zinc-500">
            Showing <span className="text-zinc-300 font-mono">{totalCount}</span>{" "}
            tools across{" "}
            <span className="text-zinc-300 font-mono">
              {categories.length}
            </span>{" "}
            categories.
          </p>
        </header>

        {/* Client-side search + filter shell */}
        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-4 items-start">
            <div className="space-y-2">
              <label
                htmlFor="tools-search"
                className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500"
              >
                Search tools
              </label>
              <div className="relative">
                <input
                  id="tools-search"
                  name="q"
                  placeholder="Search by name, category, or tag…"
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-600">
                  /tools/search
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Tip: We&apos;ll add a dedicated search endpoint at{" "}
                <code className="font-mono text-[11px] bg-zinc-900 px-1.5 py-0.5 rounded">
                  /tools/search
                </code>{" "}
                soon.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
                Filter by category
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const slug = cat
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/\s+/g, "-");

                  return (
                    <Link
                      key={cat}
                      href={`/categories/${slug}`}
                      className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
                    >
                      {cat}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">All tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2">
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

                {tool.short_description && (
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {tool.short_description}
                  </p>
                )}

                <div className="flex items-center justify-between gap-3 text-xs text-zinc-600">
                  <div className="flex flex-wrap gap-1.5">
                    {(tool.tags || []).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                    {(tool.tags || []).length > 3 && (
                      <span className="text-[11px] text-zinc-500">
                        +{(tool.tags || []).length - 3} more
                      </span>
                    )}
                  </div>
                  {tool.installs && (
                    <span className="font-mono text-zinc-500">
                      {tool.installs} installs
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Ad / future search explanation */}
        <section className="flex items-center justify-center py-8">
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono text-center px-4">
            Ad Space / MCP search will appear here. This block is reserved for
            future search UX and monetization experiments.
          </div>
        </section>
      </div>
    </main>
  );
}
