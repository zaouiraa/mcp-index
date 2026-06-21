"use client"

import { useState } from "react"
import Link from "next/link"

export default function AdminAddPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    slug: "",
    name: "",
    short_description: "",
    answer_first_summary: "",
    developer: "",
    github_url: "",
    npm_package: "",
    license: "MIT",
    is_free: true,
    category: "",
    tags: "",
    config_json: "",
    setup_steps: "",
    faq_q1: "",
    faq_a1: "",
    faq_q2: "",
    faq_a2: "",
    faq_q3: "",
    faq_a3: "",
    installs: "0",
  })

  function updateForm(key: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function autoSlug() {
    const s = form.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
    updateForm("slug", s)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError("")

    const tags = form.tags.split(",").map(t => t.trim()).filter(Boolean)
    const steps = form.setup_steps.split("\n").map(s => s.trim()).filter(Boolean)

    const faq = []
    if (form.faq_q1 && form.faq_a1) faq.push({ question: form.faq_q1, answer: form.faq_a1 })
    if (form.faq_q2 && form.faq_a2) faq.push({ question: form.faq_q2, answer: form.faq_a2 })
    if (form.faq_q3 && form.faq_a3) faq.push({ question: form.faq_q3, answer: form.faq_a3 })

    const res = await fetch("/api/add-tool", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: form.slug,
        name: form.name,
        short_description: form.short_description,
        answer_first_summary: form.answer_first_summary,
        developer: form.developer,
        github_url: form.github_url,
        npm_package: form.npm_package,
        license: form.license,
        is_free: form.is_free,
        category: form.category,
        tags,
        config_json: form.config_json,
        setup_steps: steps,
        faq,
        installs: form.installs,
      }),
    })

    const data = await res.json()
    setLoading(false)

    if (data.error) {
      setError(data.error)
    } else {
      setSuccess(true)
      setForm({
        slug: "", name: "", short_description: "", answer_first_summary: "",
        developer: "", github_url: "", npm_package: "", license: "MIT",
        is_free: true, category: "", tags: "", config_json: "", setup_steps: "",
        faq_q1: "", faq_a1: "", faq_q2: "", faq_a2: "", faq_q3: "", faq_a3: "",
        installs: "0",
      })
    }
  }

  const inputClass = "w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors text-sm"
  const labelClass = "block text-sm font-medium text-zinc-300 mb-1.5"

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono mb-8">
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">Admin</span>
          <span>/</span>
          <span className="text-zinc-300">Add Tool</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Add New Tool</h1>
        <p className="text-zinc-500 mb-8">Fill in the details below. The tool will appear on the site immediately.</p>

        {success && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            Tool added successfully! <Link href="/tools" className="underline">View all tools</Link>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Tool Name *</label>
              <input type="text" required value={form.name} onChange={e => { updateForm("name", e.target.value); autoSlug() }} placeholder="e.g. GitHub MCP Server" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Slug *</label>
              <input type="text" required value={form.slug} onChange={e => updateForm("slug", e.target.value)} placeholder="github-mcp" className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Short Description *</label>
            <input type="text" required value={form.short_description} onChange={e => updateForm("short_description", e.target.value)} placeholder="One line description" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Answer-First Summary (SEO) *</label>
            <textarea required rows={3} value={form.answer_first_summary} onChange={e => updateForm("answer_first_summary", e.target.value)} placeholder="50-word summary optimized for AI answer engines" className={inputClass + " resize-none"} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Developer *</label>
              <input type="text" required value={form.developer} onChange={e => updateForm("developer", e.target.value)} placeholder="Anthropic" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Category *</label>
              <input type="text" required value={form.category} onChange={e => updateForm("category", e.target.value)} placeholder="Database" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Installs</label>
              <input type="text" value={form.installs} onChange={e => updateForm("installs", e.target.value)} placeholder="10K+" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>GitHub URL *</label>
              <input type="url" required value={form.github_url} onChange={e => updateForm("github_url", e.target.value)} placeholder="https://github.com/..." className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>NPM Package *</label>
              <input type="text" required value={form.npm_package} onChange={e => updateForm("npm_package", e.target.value)} placeholder="@scope/package-name" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>License</label>
              <select value={form.license} onChange={e => updateForm("license", e.target.value)} className={inputClass}>
                <option>MIT</option>
                <option>Apache-2.0</option>
                <option>GPL-3.0</option>
                <option>BSD-3-Clause</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={form.is_free} onChange={e => updateForm("is_free", e.target.checked)} className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-purple-500 focus:ring-purple-500" />
                <span className="text-sm text-zinc-300">Free / Open Source</span>
              </label>
            </div>
          </div>

          <div>
            <label className={labelClass}>Tags (comma separated)</label>
            <input type="text" value={form.tags} onChange={e => updateForm("tags", e.target.value)} placeholder="database, sql, postgresql" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Configuration JSON *</label>
            <textarea required rows={8} value={form.config_json} onChange={e => updateForm("config_json", e.target.value)} placeholder='{"mcpServers": {"name": {"command": "npx", "args": [...]}}}' className={inputClass + " resize-none font-mono text-xs"} />
          </div>

          <div>
            <label className={labelClass}>Setup Steps (one per line)</label>
            <textarea rows={5} value={form.setup_steps} onChange={e => updateForm("setup_steps", e.target.value)} placeholder={"Step 1\nStep 2\nStep 3"} className={inputClass + " resize-none"} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">FAQ (3 questions)</h3>
            {[1, 2, 3].map(i => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" value={form[`faq_q${i}` as keyof typeof form]} onChange={e => updateForm(`faq_q${i}`, e.target.value)} placeholder={`Question ${i}`} className={inputClass} />
                <input type="text" value={form[`faq_a${i}` as keyof typeof form]} onChange={e => updateForm(`faq_a${i}`, e.target.value)} placeholder={`Answer ${i}`} className={inputClass} />
              </div>
            ))}
          </div>

          <button type="submit" disabled={loading} className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm">
            {loading ? "Adding..." : "Add Tool to MCPIndex"}
          </button>
        </form>
      </div>
    </main>
  )
}
