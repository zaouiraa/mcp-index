"use client";

import Link from "next/link";
import type { Metadata } from "next";
import { useState } from "react";

const categories = [
  "Version Control",
  "Browser Automation",
  "Database",
  "Productivity",
  "Security",
  "Cloud & Infrastructure",
  "Monitoring",
  "AI Tools",
  "Developer Tools",
  "Other",
];

const pricingTypes = ["Free", "Freemium", "Paid"];

type FormState = {
  toolName: string;
  owner: string;
  websiteUrl: string;
  category: string;
  pricingType: string;
  shortDescription: string;
  notes: string;
};

const initialState: FormState = {
  toolName: "",
  owner: "",
  websiteUrl: "",
  category: "",
  pricingType: "",
  shortDescription: "",
  notes: "",
};

export default function SubmitPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        setFieldErrors(result.errors || {});
        setErrorMessage(result.error || "Failed to submit the server.");
        return;
      }

      setSuccessMessage("Your MCP server was submitted successfully and is now pending review.");
      setForm(initialState);
    } catch {
      setErrorMessage("Something went wrong while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Submit Server</span>
        </nav>

        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Submit an MCP Server
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Share your MCP server with MCPIndex. Send the core project details below
            so it can be reviewed, categorized, and added to the directory faster.
          </p>
          <p className="text-sm text-zinc-500">
            Submissions are reviewed before they appear in the directory.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="toolName" className="text-sm font-medium text-zinc-300">
                  Tool name
                </label>
                <input
                  id="toolName"
                  type="text"
                  required
                  value={form.toolName}
                  onChange={(e) => updateField("toolName", e.target.value)}
                  placeholder="Example: My MCP Server"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
                />
                {fieldErrors.toolName && (
                  <p className="text-sm text-red-400">{fieldErrors.toolName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="owner" className="text-sm font-medium text-zinc-300">
                  Tool owner
                </label>
                <input
                  id="owner"
                  type="text"
                  required
                  value={form.owner}
                  onChange={(e) => updateField("owner", e.target.value)}
                  placeholder="Company, maintainer, or GitHub org"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
                />
                {fieldErrors.owner && (
                  <p className="text-sm text-red-400">{fieldErrors.owner}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="websiteUrl" className="text-sm font-medium text-zinc-300">
                GitHub URL or website
              </label>
              <input
                id="websiteUrl"
                type="url"
                required
                value={form.websiteUrl}
                onChange={(e) => updateField("websiteUrl", e.target.value)}
                placeholder="https://github.com/owner/repo"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
              />
              {fieldErrors.websiteUrl && (
                <p className="text-sm text-red-400">{fieldErrors.websiteUrl}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-zinc-300">
                  Category
                </label>
                <select
                  id="category"
                  required
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-purple-500"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {fieldErrors.category && (
                  <p className="text-sm text-red-400">{fieldErrors.category}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="pricingType" className="text-sm font-medium text-zinc-300">
                  Type
                </label>
                <select
                  id="pricingType"
                  required
                  value={form.pricingType}
                  onChange={(e) => updateField("pricingType", e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-purple-500"
                >
                  <option value="" disabled>
                    Select pricing
                  </option>
                  {pricingTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {fieldErrors.pricingType && (
                  <p className="text-sm text-red-400">{fieldErrors.pricingType}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="shortDescription" className="text-sm font-medium text-zinc-300">
                Short description
              </label>
              <textarea
                id="shortDescription"
                required
                rows={4}
                value={form.shortDescription}
                onChange={(e) => updateField("shortDescription", e.target.value)}
                placeholder="What does this MCP server do, and who is it for?"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
              />
              {fieldErrors.shortDescription && (
                <p className="text-sm text-red-400">{fieldErrors.shortDescription}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium text-zinc-300">
                Notes
              </label>
              <textarea
                id="notes"
                rows={5}
                value={form.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                placeholder="Anything else reviewers should know, such as setup details, docs, package links, supported clients, or special requirements."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
              />
              {fieldErrors.notes && (
                <p className="text-sm text-red-400">{fieldErrors.notes}</p>
              )}
            </div>

            {successMessage && (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit server"}
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                Need a general contact form instead?
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
