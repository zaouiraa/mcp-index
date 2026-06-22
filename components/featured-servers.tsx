import Link from "next/link"
import { BadgeCheck } from "lucide-react"

const servers = [
  {
    name: "Web Search MCP",
    slug: "web-search-mcp",
    description: "Powerful web search integration for AI models with real-time results.",
    installs: "2.8K",
    updated: "2 hours ago",
  },
  {
    name: "File System MCP",
    slug: "filesystem-mcp",
    description: "Secure sandboxed filesystem operations with comprehensive file management.",
    installs: "1.9K",
    updated: "1 day ago",
  },
  {
    name: "PostgreSQL MCP",
    slug: "postgres-mcp",
    description: "Execute SQL queries directly from your AI models with full schema support.",
    installs: "1.5K",
    updated: "3 days ago",
  },
  {
    name: "Browser MCP",
    slug: "browser-mcp",
    description: "Automate browser interactions with screenshot capture and DOM manipulation.",
    installs: "892",
    updated: "5 days ago",
  },
]

export function FeaturedServers() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Featured Servers</h2>
          <p className="mt-1 text-sm text-muted-foreground">Verified servers, ranked by installs.</p>
        </div>
        <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          View all →
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <div className="hidden grid-cols-12 gap-4 border-b border-border bg-card px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground md:grid">
          <div className="col-span-4">Name</div>
          <div className="col-span-5">Description</div>
          <div className="col-span-2">Installs</div>
          <div className="col-span-1 text-right">Updated</div>
        </div>

        {servers.map((server, i) => (
          <Link
            key={server.name}
            href={`/tools/${server.slug}`}
            className={`grid grid-cols-1 gap-2 px-5 py-4 transition-colors hover:bg-card md:grid-cols-12 md:items-center md:gap-4 ${
              i !== servers.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="col-span-4 flex items-center gap-2">
              <span className="font-mono text-sm font-medium text-foreground">{server.name}</span>
              <BadgeCheck className="h-4 w-4 text-emerald-500" aria-label="Verified" />
            </div>
            <div className="col-span-5 text-sm leading-relaxed text-muted-foreground">{server.description}</div>
            <div className="col-span-2 font-mono text-sm text-foreground">{server.installs}</div>
            <div className="col-span-1 text-left text-xs text-muted-foreground md:text-right">{server.updated}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
