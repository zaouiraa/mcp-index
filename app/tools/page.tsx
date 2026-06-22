import Link from "next/link";
import type { Metadata } from "next";
import { getAllTools } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "MCP Tools Directory | MCPIndex",
  description:
    "Browse MCP servers, setup guides, configuration examples, and installation steps for developer tools, search tools, productivity apps, and infrastructure workflows.",
  alternates: {
    canonical: "https://www.mcpindex.dev/tools",
  },
  openGraph: {
    title: "MCP Tools Directory | MCPIndex",
    description:
      "Browse MCP servers, setup guides, configuration examples, and installation steps for developer tools, search tools, productivity apps, and infrastructure workflows.",
    url: "https://www.mcpindex.dev/tools",
    siteName: "MCPIndex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Tools Directory | MCPIndex",
    description:
      "Browse MCP servers, setup guides, configuration examples, and installation steps for developer tools, search tools, productivity apps, and infrastructure workflows.",
  },
};

export default async function ToolsPage() {
  const tools = await getAllTools();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              MCPIndex
            </Link>
            <span>/</span>
            <span className="text-zinc-300">Tools</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              MCP Tools Directory
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Browse MCP servers, setup guides, configuration examples, and
              installation steps for developer workflows, browser automation,
              infrastructure, research, and productivity tools.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-5 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
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

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {tool.short_description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tool.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-zinc-900 text-zinc-500 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 pt-2 text-sm text-zinc-500">
                <span>by {tool.developer}</span>
                <span className="text-zinc-600">{tool.installs} installs</span>
              </div>
            </Link>
          ))}
        </section>

        {tools.length === 0 && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 text-center">
            <h2 className="text-xl font-semibold text-white">No tools found</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Your database is connected, but there are no tools to display yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
