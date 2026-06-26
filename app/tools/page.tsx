import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck, Github, Package } from 'lucide-react'
import { tools } from '@/lib/tools-data'

export const metadata: Metadata = {
  title: 'MCP Servers | MCP Index',
  description: 'Browse the complete index of Model Context Protocol servers. Verified, standardized, and ready to deploy.',
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <Link href="/" className="hover:text-foreground transition-colors">
              MCPIndex
            </Link>
            <span>/</span>
            <span className="text-foreground">Servers</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight">MCP Servers Directory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated index of Model Context Protocol servers. {tools.length} tools ready to integrate with your AI models.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group relative p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-card/50 transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Category Badge */}
                <div className="inline-flex">
                  <span className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded">
                    {tool.category}
                  </span>
                </div>

                {/* Title and Description */}
                <div className="space-y-2">
                  <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                </div>

                {/* Developer and Pricing */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    <div className="font-mono">{tool.developer}</div>
                    <div className={`inline-block px-2 py-0.5 rounded text-xs mt-1 ${
                      tool.pricingModel === 'free'
                        ? 'bg-emerald-500/10 text-emerald-600'
                        : 'bg-amber-500/10 text-amber-600'
                    }`}>
                      {tool.pricingModel === 'free' ? 'Free' : 'Freemium'}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tool.installs.toLocaleString()} installs
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                  {tool.tags.length > 3 && (
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      +{tool.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center">
                  <span className="text-xs text-primary">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {tools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No tools found.</p>
          </div>
        )}
      </div>
    </main>
  )
}
