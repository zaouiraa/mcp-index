import Link from "next/link"
import { BadgeCheck } from "lucide-react"
import { getAllTools } from "@/lib/supabase"
import type { DBTool } from "@/lib/supabase"
import type { Metadata } from "next"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "All MCP Servers | MCPIndex",
  description: "Browse the complete index of Model Context Protocol servers.",
  alternates: { canonical: "https://mcpindex.dev/tools" },
}

export default async function ToolsPage() {
  let tools: DBTool[] = []
  try {
    tools = await getAllTools()
  } catch (err) {
    console.error("[ToolsPage] Failed to load tools:", err)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">MCPIndex</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground" aria-current="page">All Tools ({tools.length})</span>
        </nav>

        <header className="mb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            All MCP Servers
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse{" "}
            <span className="text-foreground font-semibold">{tools.length}</span>{" "}
            verified Model Context Protocol servers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.length === 0 ? (
            <div className="col-span-full text-center py-24 text-muted-foreground">
              No tools found. Check back soon.
            </div>
          ) : (
            tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-zinc-600 hover:shadow-lg hover:shadow-purple-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="font-mono text-sm font-semibold text-foreground truncate">
                        {tool.name}
                      </h2>
                      <BadgeCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-label="Verified" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {tool.short_description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
                        {tool.category}
                      </span>
                      {tool.is_free ? (
                        <span className="px-2 py-0.5 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Free
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-xs font-mono rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Freemium
                        </span>
                      )}
                    </div>
                  </div>
                  {tool.installs && (
                    <div className="text-right flex-shrink-0">
                      <div className="font-mono text-sm text-foreground">{tool.installs}</div>
                      <div className="text-xs text-muted-foreground">installs</div>
                    </div>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← Back to Home
          </Link>
        </div>
      </div>

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 MCPIndex. All rights reserved.</span>
          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
