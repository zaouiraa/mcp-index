import { Database, Briefcase, GitBranch } from "lucide-react"

const clusters = [
  {
    icon: Database,
    title: "Database Servers",
    description: "Standardized endpoints for SQL/NoSQL",
    accent: "text-violet-400",
    ring: "group-hover:border-violet-500/50",
    glow: "bg-violet-500/10",
  },
  {
    icon: Briefcase,
    title: "Productivity Servers",
    description: "Connect AI to your workspace",
    accent: "text-emerald-400",
    ring: "group-hover:border-emerald-500/50",
    glow: "bg-emerald-500/10",
  },
  {
    icon: GitBranch,
    title: "Development Tools",
    description: "Git, terminal, and CI/CD integrations",
    accent: "text-blue-400",
    ring: "group-hover:border-blue-500/50",
    glow: "bg-blue-500/10",
  },
]

export function TopicClusters() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-6 text-lg font-semibold tracking-tight text-foreground">Browse by topic</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {clusters.map((cluster) => {
          const Icon = cluster.icon
          return (
            <a
              key={cluster.title}
              href="#"
              className={`group rounded-lg border border-border bg-card p-6 transition-colors ${cluster.ring}`}
            >
              <div className={`mb-4 inline-flex rounded-md p-2 ${cluster.glow}`}>
                <Icon className={`h-5 w-5 ${cluster.accent}`} aria-hidden="true" />
              </div>
              <h3 className="font-medium text-foreground">{cluster.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{cluster.description}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
