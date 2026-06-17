export function AdBanner() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div
        className="flex h-[90px] w-full items-center justify-center rounded-lg border border-dashed border-border bg-card"
        role="complementary"
        aria-label="Advertisement"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Ad Space (728x90)
        </span>
      </div>
    </div>
  )
}
