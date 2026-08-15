import Link from "next/link";
import type { Metadata } from "next";
import { DownloadDiscoveryBlueprint } from "@/components/download-discovery-blueprint";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/mcp-server-discovery`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(
  "MCP Server Discovery 2026"
)}&description=${encodeURIComponent(
  "Stop wasting hours hunting for Model Context Protocol servers."
)}`;

export const metadata: Metadata = {
  title:
    "MCP Server Discovery 2026: Stop Wasting Hours Hunting for MCP Servers | MCPIndex",
  description:
    "Most developers waste 3–5 hours per week searching unvetted MCP servers. This 2026 guide shows you how to discover, evaluate, and connect MCP servers in 60 seconds flat. Download the premium MCP Server Discovery Blueprint + Curated Index 2026 (normally $150) for free.",
  keywords: [
    "MCP server discovery 2026",
    "best MCP server list 2026",
    "curated MCP index",
    "MCP tools directory",
    "find MCP servers",
    "MCP server examples",
    "MCP server compatibility",
    "MCP for Claude Desktop",
    "MCP GitHub repositories",
    "Model Context Protocol servers",
    "free MCP discovery blueprint",
    "MCP server curation",
  ],
  authors: [{ name: "MCPIndex Founder", url: baseUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical },
  openGraph: {
    title:
      "MCP Server Discovery 2026: Stop Wasting Hours Hunting for MCP Servers",
    description:
      "Stop wasting hours. Discover, evaluate, and connect MCP servers without the wasted hours. Download the free MCP Server Discovery Blueprint & Curated Index 2026.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "MCP Server Discovery 2026 – Free Premium Blueprint",
      },
    ],
    publishedTime: "2026-01-20T00:00:00Z",
    modifiedTime: "2026-08-15T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Server Discovery 2026: Stop Wasting Hours Hunting for MCP Servers",
    description:
      "Stop wasting hours. Discover, evaluate, and connect MCP servers without the wasted hours.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is MCP server discovery?",
    answer:
      "MCP server discovery is the process of finding, evaluating, and selecting Model Context Protocol servers that extend the capabilities of AI clients like Claude. With over 500 servers now available, a structured approach using a curated index like mcpindex.dev saves developers hours of manual searching and testing.",
  },
  {
    question: "How do I know if an MCP server is safe to use?",
    answer:
      "Check the server's permission requests, last commit date, and documentation completeness. Use the 60-second evaluation checklist in this guide. The MCP Server Discovery Blueprint includes pre-vetted security notes for 100+ servers to help you make safe choices instantly.",
  },
  {
    question: "Does every MCP server work with Claude Desktop?",
    answer:
      "No. Claude Desktop compatibility varies due to transport protocols, path handling, and tool naming conventions. Always verify Claude Desktop compatibility before installing. The curated index includes a 'Claude-Ready' filter for servers confirmed to work with Claude.",
  },
  {
    question: "How can I download the free MCP Server Discovery Blueprint?",
    answer:
      "Download it from the download box in this guide. The interactive spreadsheet (normally $150) is available for free to mcpindex.dev readers for a limited time. You'll receive the download link directly in your inbox.",
  },
];

export default function McpServerDiscoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "MCP Server Discovery 2026: Stop Wasting Hours Hunting for MCP Servers",
    description:
      "Expert guide to discovering, evaluating, and connecting MCP servers in 2026. Learn the 60-second evaluation checklist, hidden costs of disorganized discovery, and how a curated index transforms your workflow. Includes free premium MCP Server Discovery Blueprint (normally $150).",
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: ogImage,
    datePublished: "2026-01-20T00:00:00Z",
    dateModified: "2026-08-15T00:00:00Z",
    wordCount: 1900,
    author: { "@type": "Person", name: "MCPIndex Founder", url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: "MCPIndex",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
        width: 120,
        height: 120,
      },
    },
    about: {
      "@type": "Thing",
      name: "MCP Server Discovery",
      description:
        "The process of finding, evaluating, and selecting Model Context Protocol servers for AI clients.",
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free MCP Server Discovery Blueprint + Curated Index 2026 (normally $150)",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "MCP Server Discovery",
        item: canonical,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Discover and Evaluate MCP Servers in 2026",
    description:
      "A 3-step process to find safe, compatible MCP servers using a curated index and a 60-second evaluation checklist. Free blueprint included.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Browse a curated MCP index",
        text: "Start with a structured directory like mcpindex.dev instead of raw GitHub search to avoid abandoned or incompatible servers.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Apply the 60-second evaluation checklist",
        text: "Check last commit date, README completeness, Claude Desktop compatibility, and permission transparency.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Download the free blueprint for instant access",
        text: "Grab the MCP Server Discovery Blueprint + Curated Index 2026 to get 100+ pre-vetted servers with security notes.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">MCP Server Discovery</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated 2026 Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Expert Engineering
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              Free Premium Blueprint
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            MCP Server Discovery 2026: Stop Wasting Hours Hunting for Model Context
            Protocol Servers
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            I’m the founder of mcpindex.dev, and I built this platform because I lived
            the exact nightmare you’re probably living right now. You're excited about
            the Model Context Protocol. You've seen what Claude can do with the right
            MCP server connected. So you open a browser tab, type "MCP servers" into
            Google or GitHub search… and the nightmare begins.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            In this guide, I'm going to walk you through exactly how to discover,
            evaluate, and connect MCP servers without the wasted hours. And at the end,
            I'm giving away the exact premium tool I built to solve this for myself –{" "}
            <strong className="text-white">
              The MCP Server Discovery Blueprint + Curated Index 2026
            </strong>{" "}
            – that normally sells for $150, completely free.
          </p>
        </header>

        <nav className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-3 scroll-mt-24">
          <h2 className="text-lg font-semibold text-white">In this guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <a href="#why-most-servers-waste-time" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
              Why 70% of MCP servers are a waste
            </a>
            <a href="#hidden-costs" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
              The 3 hidden costs of discovery
            </a>
            <a href="#curated-index-benefits" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
              How a curated index transforms workflows
            </a>
            <a href="#evaluation-checklist" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
              60-second evaluation checklist
            </a>
            <a href="#download-blueprint" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
              Free Blueprint download
            </a>
            <a href="#faq" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
              FAQ
            </a>
          </div>
        </nav>

        <section id="why-most-servers-waste-time" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            1. Why 70% of MCP Servers You Find Are a Waste of Time
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Here's the uncomfortable truth:{" "}
            <strong className="text-white">most MCP servers are not ready for production use.</strong>{" "}
            I've personally catalogued hundreds of MCP servers while building mcpindex.dev,
            and I can confidently say that roughly 70% of publicly listed MCP servers
            suffer from at least one critical flaw:
          </p>
          <ul className="space-y-2 text-zinc-400 list-disc pl-5">
            <li><strong className="text-white">Abandonment:</strong> Last commit was 6+ months ago.</li>
            <li><strong className="text-white">Missing documentation:</strong> No clear setup or usage examples.</li>
            <li><strong className="text-white">Claude incompatibility:</strong> Built for a niche client, not Claude Desktop.</li>
            <li><strong className="text-white">Security red flags:</strong> Requests unnecessary permissions.</li>
          </ul>
          <p className="text-zinc-400 leading-relaxed">
            If a server fails 2 or more of these checks, skip it. The good news? You don't
            have to test each one manually — that's exactly what the free blueprint at the
            end of this guide solves.
          </p>
        </section>

        <section id="hidden-costs" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            2. The 3 Hidden Costs of Disorganized MCP Server Discovery
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Most developers only think about the obvious cost: time spent searching. But
            the real damage runs deeper.
          </p>
          <div className="space-y-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-base font-semibold text-white">Context Switching Overload</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Every interruption costs 23 minutes of focus. Five failed discovery attempts
                per week ≈ 2 hours of lost deep work.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-base font-semibold text-white">The Compatibility Tax</h3>
              <p className="text-zinc-400 text-sm mt-1">
                A server built for a different client or transport protocol can break
                silently with Claude Desktop. You spend hours debugging someone else's code
                instead of building your own.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-base font-semibold text-white">Security Blind Spots</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Vague permission requests can compromise more than your afternoon. Without
                pre-vetted security notes, you're granting access blindly.
              </p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            These three costs add up to an average of{" "}
            <strong className="text-white">3–5 hours wasted per week</strong> — per developer.
          </p>
        </section>

        <section id="curated-index-benefits" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            3. How a Curated MCP Index Transforms Your Workflow
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            The difference is not just speed – it's confidence. When you know a server has
            been vetted, categorized, and tagged with compatibility notes, you install with
            certainty. No more "will this work?" anxiety.
          </p>
          <p className="text-zinc-400 leading-relaxed">A good MCP index gives you:</p>
          <ul className="space-y-2 text-zinc-400 list-disc pl-5">
            <li><strong className="text-white">Categorized browsing:</strong> Servers organized by function.</li>
            <li><strong className="text-white">Freshness indicators:</strong> Last commit date at a glance.</li>
            <li><strong className="text-white">Compatibility tags:</strong> Claude Desktop, Cursor, VS Code.</li>
            <li><strong className="text-white">Setup complexity estimates:</strong> 5 minutes vs. 1 hour.</li>
            <li><strong className="text-white">Security notes:</strong> What permissions are requested and why.</li>
          </ul>
        </section>

        <section id="evaluation-checklist" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            4. Evaluating an MCP Server in 60 Seconds (Checklist)
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            You don't need 30 minutes per server. Use this exact checklist to filter out
            the 70% of bad servers in under a minute:
          </p>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▹</span>
              <span><strong className="text-white">Last Commit Date:</strong> Within the last 3 months?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▹</span>
              <span><strong className="text-white">README Completeness:</strong> Missing docs = red flag.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▹</span>
              <span><strong className="text-white">Claude Desktop Compatibility:</strong> Explicitly mentioned?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▹</span>
              <span><strong className="text-white">Permission Transparency:</strong> Vague requests = security risk.</span>
            </li>
          </ul>
          <p className="text-zinc-400 leading-relaxed">
            If a server fails 2 or more checks, skip it. The free blueprint has already run
            this checklist on 100+ servers for you.
          </p>
        </section>

        <section
          id="download-blueprint"
          className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-900 p-8 sm:p-10 space-y-6 relative overflow-hidden scroll-mt-24"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Free Premium Resource (Worth $150)
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Don't Leave Without Downloading: The MCP Server Discovery Blueprint +
                Curated Index 2026
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                This is the exact interactive spreadsheet I built to solve my own MCP
                discovery nightmare. Normally sold for{" "}
                <span className="text-white line-through">$150</span> — free today for
                mcpindex.dev readers.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span><strong className="text-white">Core Servers Tab:</strong> 50+ hand-vetted essential servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span><strong className="text-white">Trending & New Tab:</strong> Latest published this month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span><strong className="text-white">Claude-Ready Tab:</strong> Confirmed compatible with Claude Desktop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span><strong className="text-white">Deadpool Tab:</strong> No longer maintained servers to avoid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span><strong className="text-white">Security Notes & Setup Time:</strong> At-a-glance vetting</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadDiscoveryBlueprint />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">
                Link will be sent straight to your inbox. Join over 10,000 developers
                already using this tool.
              </p>
            </div>
          </div>
        </section>

        <section id="conclusion" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">5. Your New MCP Discovery Engine</h2>
          <p className="text-zinc-400 leading-relaxed">
            Let's recap the three biggest time-savers from this guide:
          </p>
          <ul className="space-y-2 text-zinc-400 list-decimal pl-5">
            <li>
              <strong className="text-white">Stop searching blindly.</strong> A curated
              index cuts through the noise instantly.
            </li>
            <li>
              <strong className="text-white">Use the 60-second checklist.</strong> Last
              commit date, Claude compatibility, and permission transparency tell you
              everything you need.
            </li>
            <li>
              <strong className="text-white">Grab the free blueprint.</strong> The exact
              resource I use daily — it saves hours per week and eliminates guesswork.
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-3">
            <strong>
              Don't download the blueprint if you enjoy spending 5 hours a week reading
              empty README files.
            </strong>{" "}
            But if you're ready to stop guessing and start building, grab it now while
            it's still free.
          </p>
        </section>

        <section id="faq" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden"
                aria-label={faq.question}
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.question}
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0">▾</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Browse the full MCP tools directory</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Ready to start building? Explore vetted MCP servers with config blocks, use
            cases, and setup steps.
          </p>
          <Link
            href="/tools"
            className="inline-block px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
          >
            Browse all MCP servers
          </Link>
        </section>
      </div>
    </main>
  );
}
