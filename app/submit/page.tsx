import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit an MCP Server | MCPIndex",
  description:
    "Submit an MCP server to MCPIndex with project details, links, category, pricing model, and notes.",
};

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

export default function SubmitPage() {
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
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
          <form
            action="mailto:hello@mcpindex.dev"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="toolName" className="text-sm font-medium text-zinc-300">
                  Tool name
                </label>
                <input
                  id="toolName"
                  name="Tool name"
                  type="text"
                  required
                  placeholder="Example: My MCP Server"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="owner" className="text-sm font-medium text-zinc-300">
                  Tool owner
                </label>
                <input
                  id="owner"
                  name="Tool owner"
                  type="text"
                  required
                  placeholder="Company, maintainer, or GitHub org"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="githubUrl" className="text-sm font-medium text-zinc-300">
                GitHub URL or website
              </label>
              <input
                id="githubUrl"
                name="GitHub or website"
                type="url"
                required
                placeholder="https://github.com/owner/repo"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-zinc-300">
                  Category
                </label>
                <select
                  id="category"
                  name="Category"
                  required
                  defaultValue=""
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
              </div>

              <div className="space-y-2">
                <label htmlFor="pricing" className="text-sm font-medium text-zinc-300">
                  Type
                </label>
                <select
                  id="pricing"
                  name="Type"
                  required
                  defaultValue=""
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
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="shortDescription" className="text-sm font-medium text-zinc-300">
                Short description
              </label>
              <textarea
                id="shortDescription"
                name="Short description"
                required
                rows={4}
                placeholder="What does this MCP server do, and who is it for?"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium text-zinc-300">
                Notes
              </label>
              <textarea
                id="notes"
                name="Notes"
                rows={5}
                placeholder="Anything else reviewers should know, such as setup details, docs, package links, supported clients, or special requirements."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
              >
                Submit server
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
