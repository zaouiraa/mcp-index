import Link from 'next/link'
import type { ReactNode } from 'react'

export function GuideBadge({ children }: { children: ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
      {children}
    </span>
  )
}

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="space-y-4 text-zinc-300 leading-relaxed text-[15px] md:text-base">
        {children}
      </div>
    </section>
  )
}

export function GuideCard({
  href,
  title,
  description,
  meta,
  category,
}: {
  href: string
  title: string
  description: string
  meta: string
  category: string
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3 hover:bg-zinc-900/70 transition-colors block"
    >
      <div className="flex items-center gap-3 flex-wrap">
        <GuideBadge>{category}</GuideBadge>
        <span className="text-xs text-zinc-600 font-mono">{meta}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </Link>
  )
}
