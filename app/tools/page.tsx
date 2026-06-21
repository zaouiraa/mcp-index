import Link from "next/link"
import { BadgeCheck } from "lucide-react"
import { getAllSlugs, getToolBySlug } from "@/lib/tools-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All MCP Servers | MCPIndex",
  description: "Browse the complete index of Model Context Protocol servers.",
}

export default async function ToolsPage() {
  const slugs = getAllSlugs()
  const tools = slugs.map(slug => getToolBySlug(slug)).filter(Boolean)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-foreground">All Tools ({tools.length})</span>
        </nav>

        <div className="mb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">All MCP Servers</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse the complete index of verified Model Context Protocol servers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-zinc-600 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-sm font-semibold text-foreground truncate">
                      {tool.name}
                    </h3>
                    <BadgeCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {tool.shortDescription}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-2 py-0.5 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {tool.category}
                    </span>
                    {tool.isFree ? (
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
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-sm text-foreground">{tool.installs}</div>
                  <div className="text-xs text-muted-foreground">installs</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← Back to Home
          </Link>
        </div>
      </div>

      <footer className="border-t border-border mt-8">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2025 MCPIndex. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
