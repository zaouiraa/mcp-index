"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const tools = [
  // نفس المصفوفة الحالية بدون تغيير
];

export default function AdminSeedPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ name: string; status: string }[]>([]);
  const [done, setDone] = useState(false);

  const stats = useMemo(() => {
    const success = results.filter((r) => r.status === "Added").length;
    const failed = results.length - success;
    return { success, failed, total: results.length };
  }, [results]);

  async function handleSeed() {
    if (loading) return;

    setLoading(true);
    setDone(false);
    setResults([]);

    const res: { name: string; status: string }[] = [];

    for (const tool of tools) {
      try {
        const response = await fetch("/api/add-tool", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tool),
        });

        const data = await response.json();

        if (!response.ok) {
          res.push({
            name: tool.name,
            status: data.error || "Failed",
          });
        } else {
          res.push({
            name: tool.name,
            status: "Added",
          });
        }
      } catch {
        res.push({
          name: tool.name,
          status: "Failed",
        });
      }
    }

    setResults(res);
    setLoading(false);
    setDone(true);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono mb-8 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Admin</span>
          <span>/</span>
          <span className="text-zinc-300">Bulk Import</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Bulk Import: 10 New Tools</h1>
        <p className="text-zinc-500 mb-8">
          Batch 2 — Click the button below to add 10 new MCP tools to your database in one click.
        </p>

        {!done && (
          <button
            onClick={handleSeed}
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
          >
            {loading ? "Importing tools..." : "Import 10 Tools Now"}
          </button>
        )}

        {loading && (
          <div className="text-center py-12 space-y-4">
            <div className="inline-block w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-zinc-400">Adding tools...</p>
          </div>
        )}

        {done && (
          <div className="space-y-4 mt-8">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              Import complete. Added {stats.success} of {stats.total} tools.{" "}
              <Link href="/tools" className="underline">
                View all tools
              </Link>
            </div>

            {stats.failed > 0 && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
                {stats.failed} tools were not added. This is often caused by duplicate slugs or existing rows.
              </div>
            )}

            <div className="space-y-2">
              {results.map((r, i) => {
                const isAdded = r.status === "Added";

                return (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800"
                  >
                    <span className="text-sm text-zinc-300">{r.name}</span>
                    <span
                      className={`text-xs font-mono ${
                        isAdded ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
