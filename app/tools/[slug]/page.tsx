import { notFound } from "next/navigation";
import { getToolBySlug, getAllSlugs } from "@/lib/tools-data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found | MCPIndex" };
  return {
    title: `${tool.name} - MCP Server Config & Setup Guide | MCPIndex`,
    description: tool.answerFirstSummary,
    openGraph: {
      title: `${tool.name} - Setup Guide & Config`,
      description: tool.answerFirstSummary,
      url: `https://mcpindex.dev/tools/${tool.slug}`,
      siteName: "MCPIndex",
      type: "article",
    },
  };
}

function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="absolute top-3 right-3 px-3 py-1.5 text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
    >
      Copy
    </button>
  );
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.answerFirstSummary,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: tool.isFree ? "0" : "3",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: tool.developer,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="border-b border-zinc-800/60 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            UNCLAIMED PROFILE
          </span>
          <button className="px-4 py-1.5 text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors cursor-pointer">
            Claim This Tool — $9.99/mo
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
          <a href="/" className="hover:text-white transition-colors">MCPIndex</a>
          <span>/</span>
          <a href="/" className="hover:text-white transition-colors">Tools</a>
          <span>/</span>
          <span className="text-zinc-300">{tool.name}</span>
        </nav>

        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
              {tool.category}
            </span>
            {tool.isFree ? (
              <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Free
              </span>
            ) : (
              <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Freemium
              </span>
            )}
            <span className="text-xs text-zinc-600 font-mono">{tool.installs} installs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{tool.name}</h1>
          <p className="text-lg text-zinc-400 leading-relaxed">{tool.shortDescription}</p>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>by <span className="text-zinc-300">{tool.developer}</span></span>
            <span className="text-zinc-700">|</span>
            <span>{tool.license} License</span>
            <span className="text-zinc-700">|</span>
            <span>Updated {tool.lastUpdated}</span>
          </div>
        </div>

        <div className="relative border-l-2 border-purple-500 bg-purple-500/5 rounded-r-xl p-6">
          <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
          <p className="text-zinc-300 leading-relaxed text-[15px]">{tool.answerFirstSummary}</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{tool.name} Configuration</h2>
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">claude_desktop_config.json</span>
            </div>
            <CopyButton text={tool.configJson} />
            <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed">
              <code className="text-zinc-300">{tool.configJson}</code>
            </pre>
          </div>
        </section>

        <div className="flex items-center justify-center py-6">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono">
            Ad Space
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How to setup {tool.name}?</h2>
          <ol className="space-y-3">
            {tool.setupSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-400">
                  {i + 1}
                </span>
                <p className="text-zinc-400 leading-relaxed pt-0.5 text-[15px]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6">
          {tool.faq.map((item, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-xl font-semibold">{item.question}</h2>
              <p className="text-zinc-400 leading-relaxed text-[15px]">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{tool.name} vs Competitors</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-900/80">
                  <th className="text-left px-5 py-3.5 font-semibold text-zinc-300 border-b border-zinc-800">Feature</th>
                  <th className="text-center px-5 py-3.5 font-semibold text-purple-400 border-b border-zinc-800">{tool.name}</th>
                  <th className="text-center px-5 py-3.5 font-semibold text-zinc-400 border-b border-zinc-800">Competitor</th>
                </tr>
              </thead>
              <tbody>
                {tool.comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/50 last:border-0 hover:bg-zinc-900/30 transition-colors">
                    <td className="px-5 py-3 text-zinc-400">{row.feature}</td>
                    <td className="px-5 py-3 text-center">
                      <span className={row.thisOk ? "text-emerald-400" : "text-red-400"}>
                        {row.thisOk ? "✅" : "❌"} {row.thisTool}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-center">
                      <span className={row.competitorOk ? "text-emerald-400" : "text-red-400"}>
                        {row.competitorOk ? "✅" : "❌"} {row.competitor}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-400">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 text-zinc-500 border border-zinc-800">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <div className="flex items-center justify-center py-6">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono">
            Ad Space
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Are you the developer?</h3>
              <p className="text-purple-100/80 text-sm leading-relaxed max-w-lg">
                Claim this profile to update data, add documentation, view lead analytics, and control your tool&apos;s listing on MCPIndex.
              </p>
            </div>
            <button className="flex-shrink-0 px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-colors cursor-pointer text-sm">
              Claim Profile — $9.99/mo
            </button>
          </div>
        </div>

        <section className="flex flex-wrap gap-4 pb-8">
          <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href={`https://www.npmjs.com/package/${tool.npmPackage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.747.49-5.538H5.879l1.41 15.97 5.691 1.577 5.726-1.577.779-8.748h-7.454z"/></svg>
            NPM
          </a>
        </section>
      </div>

      <footer className="border-t border-zinc-800/60 mt-8">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span>© 2025 MCPIndex. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
