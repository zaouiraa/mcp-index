"use client";

import { useState } from "react";
import Link from "next/link";

type ToolForm = {
  slug: string;
  name: string;
  short_description: string;
  answer_first_summary: string;
  developer: string;
  github_url: string;
  npm_package: string;
  license: string;
  is_free: boolean;
  category: string;
  tags: string;
  config_json: string;
  setup_steps: string;
  faq: string;
  installs: string;
};

const initialForm: ToolForm = {
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
  faq: "",
  installs: "0",
};

export default function AdminAddToolPage() {
  const [form, setForm] = useState<ToolForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof ToolForm>(key: K, value: ToolForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const payload = {
        slug: form.slug.trim(),
        name: form.name.trim(),
        short_description: form.short_description.trim(),
        answer_first_summary: form.answer_first_summary.trim(),
        developer: form.developer.trim(),
        github_url: form.github_url.trim(),
        npm_package: form.npm_package.trim(),
        license: form.license.trim(),
        is_free: form.is_free,
        category: form.category.trim(),
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        config_json: form.config_json.trim(),
        setup_steps: form.setup_steps
          .split("\n")
          .map((step) => step.trim())
          .filter(Boolean),
        faq: form.faq
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line) => {
            const [question, ...answerParts] = line.split("|");
            return {
              question: question?.trim() || "",
              answer: answerParts.join("|").trim(),
            };
          })
          .filter((item) => item.question && item.answer),
        installs: form.installs.trim() || "0",
      };

      const response = await fetch("/api/add-tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to add tool");
        return;
      }

      setResult("Tool added successfully.");
      setForm(initialForm);
    } catch (err) {
      setError("Something went wrong while submitting the form.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Admin</span>
          <span>/</span>
          <span className="text-zinc-300">Add Tool</span>
        </nav>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Add New Tool</h1>
          <p className="text-zinc-400 leading-relaxed">
            Create a new MCP tool entry and submit it directly to your Supabase
            database.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={form.slug}
              onChange={(e) => updateField("slug", e.target.value)}
              placeholder="slug"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
            <input
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="name"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
          </div>

          <textarea
            value={form.short_description}
            onChange={(e) => updateField("short_description", e.target.value)}
            placeholder="short_description"
            className="w-full min-h-[100px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            required
          />

          <textarea
            value={form.answer_first_summary}
            onChange={(e) => updateField("answer_first_summary", e.target.value)}
            placeholder="answer_first_summary"
            className="w-full min-h-[120px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={form.developer}
              onChange={(e) => updateField("developer", e.target.value)}
              placeholder="developer"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
            <input
              value={form.category}
              onChange={(e) => updateField("category", e.target.value)}
              placeholder="category"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={form.github_url}
              onChange={(e) => updateField("github_url", e.target.value)}
              placeholder="github_url"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
            <input
              value={form.npm_package}
              onChange={(e) => updateField("npm_package", e.target.value)}
              placeholder="npm_package"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={form.license}
              onChange={(e) => updateField("license", e.target.value)}
              placeholder="license"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              required
            />
            <input
              value={form.installs}
              onChange={(e) => updateField("installs", e.target.value)}
              placeholder="installs"
              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />
            <label className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={form.is_free}
                onChange={(e) => updateField("is_free", e.target.checked)}
              />
              Free tool
            </label>
          </div>

          <input
            value={form.tags}
            onChange={(e) => updateField("tags", e.target.value)}
            placeholder="tags (comma separated)"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
          />

          <textarea
            value={form.config_json}
            onChange={(e) => updateField("config_json", e.target.value)}
            placeholder="config_json"
            className="w-full min-h-[180px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 font-mono outline-none focus:border-purple-500"
            required
          />

          <textarea
            value={form.setup_steps}
            onChange={(e) => updateField("setup_steps", e.target.value)}
            placeholder={"setup_steps (one per line)"}
            className="w-full min-h-[140px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
          />

          <textarea
            value={form.faq}
            onChange={(e) => updateField("faq", e.target.value)}
            placeholder={"faq (one per line: question | answer)"}
            className="w-full min-h-[180px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
          />

          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {loading ? "Submitting..." : "Add Tool"}
            </button>

            {result && (
              <p className="text-sm text-emerald-400">{result}</p>
            )}

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
