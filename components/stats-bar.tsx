const stats = [
  { value: "540+", label: "Indexed Servers" },
  { value: "0", label: "Dead Links" },
  { value: "2 Hours Ago", label: "Updated" },
]

export function StatsBar() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid grid-cols-1 divide-y divide-border rounded-lg border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-6 text-center">
            <div className="font-mono text-2xl font-semibold text-foreground">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
