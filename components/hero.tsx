import { Search } from "lucide-react"

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
        Open Protocol · v1.0
      </div>

      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        The definitive index for Model Context Protocol servers
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        The open-source index for Model Context Protocol (MCP) servers. Verified, standardized, and ready to deploy.
      </p>

      <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors focus-within:border-foreground/40">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="search"
          placeholder="Search MCP servers, models, and tools..."
          aria-label="Search MCP servers"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-xs text-muted-foreground sm:inline-block">
          /
        </kbd>
      </div>
    </section>
  )
}
