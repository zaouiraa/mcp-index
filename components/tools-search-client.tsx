"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { DBTool } from "@/lib/supabase";

type Props = {
  tools: DBTool[];
  compact?: boolean;
};

export default function ToolsSearchClient({ tools, compact = false }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [pricing, setPricing] = useState("all");

  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(tools.map((tool) => tool.category).filter(Boolean)))];
  }, [tools]);

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesQuery =
        q.length === 0 ||
        tool.name.toLowerCase().includes(q) ||
        tool.slug.toLowerCase().includes(q) ||
        tool.developer.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.short_description.toLowerCase().includes(q) ||
        tool.answer_first_summary.toLowerCase().includes(q) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory = category === "all" || tool.category === category;
      const matchesPricing =
        pricing === "all" ||
        (pricing === "free" && tool.is_free) ||
        (pricing === "paid" && !tool.is_free);

      return matchesQuery && matchesCategory && matchesPricing;
    });
  }, [tools, query, category, pricing]);

  if (compact) {
    return (
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-sm font-mono text-zinc-500">Real-time Search</p>
          <h2 className="text-2xl font-semibold text-white">Search tools instantly from homepage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools, tags, developers..."
              className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={pricing}
              onChange={(e) => setPricing(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
            >
              <option value="all">all</option>
              <option value="free">free</option>
              <option value="paid">paid / freemium</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-zinc-500">{filteredTools.length} matching tools</p>
          <Link href="/tools/search" className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
            Open full search page →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTools.slice(0, 6).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-5 flex flex-col gap-4"
            >
              <div className="flex flex-wrap items-center gap-2">
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
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                  {tool.short_description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800/60 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16 space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="space-y-3 max-w-3xl">
              <p className="text-sm font-mono text-zinc-500">Search & Filter</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Explore MCP tools from Supabase
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Search by tool name, slug, developer, category, or tags. Filter by category and pricing.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.25 9.75V21h13.5V9.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Homepage
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-xs font-mono text-zinc-500 mb-2">Search</label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools, tags, developers..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-2">Pricing</label>
              <select
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-purple-500"
              >
                <option value="all">all</option>
                <option value="free">free</option>
                <option value="paid">paid / freemium</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 space-y-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold text-white">{filteredTools.length} results</h2>
            <Link href="/tools" className="text-sm text-purple-300 hover:text-purple-200 transition-colors">
              Back to tools →
            </Link>
          </div>

          {filteredTools.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No matching tools</h3>
              <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
                Try a different keyword, clear filters, or add more tools to the Supabase table.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-6 flex flex-col gap-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
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
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {tool.short_description}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">
                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4">
                      {tool.answer_first_summary}
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

                  <div className="mt-auto flex items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
                    <span>by {tool.developer}</span>
                    <span>{tool.installs} installs</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
