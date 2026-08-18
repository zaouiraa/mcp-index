import Link from "next/link";
import type { Metadata } from "next";
import { DownloadBestClaudeMcpBundle } from "@/components/download-best-claude-mcp-bundle";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/best-mcp-servers-for-claude`;

export const metadata: Metadata = {
  title: "5 Best MCP Servers for Claude in 2026",
  description:
    "Compare the 5 best MCP servers for Claude in 2026 by context cost, security, and execution. Copy tested configs and build a safer stack.",
  alternates: { canonical },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "5 Best MCP Servers for Claude in 2026",
    description: "Compare the 5 best MCP servers for Claude in 2026 by context cost, security, and execution.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    publishedTime: "2026-08-18T00:00:00.000Z",
    modifiedTime: "2026-08-18T00:00:00.000Z",
    authors: ["MCPIndex Founder"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Best MCP Servers for Claude in 2026",
    description: "Compare the 5 best MCP servers for Claude in 2026 by context cost, security, and execution.",
  },
};

const toolCards = [
  {
    number: "1",
    name: "GitHub MCP Server",
    subtitle: "Best for source-control context",
    description:
      "Claude without repository context is forced to infer architecture from fragments. GitHub MCP provides access to repositories, branches, commits, pull requests, issues, and related source-control data.",
    advantage:
      "Anchors reasoning to repository state. Claude can inspect a pull request against its base branch, locate the relevant commit, read adjacent files, and correlate code changes with issues or CI results.",
    flaw:
      "A broad configuration exposes dangerous write tools. If enabled, Claude may create issues, publish comments, or trigger workflows. A second failure occurs when the agent reads a stale branch.",
    config: `{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/readonly"
    }
  }
}`,
    href: "/tools/github-mcp",
  },
  {
    number: "2",
    name: "Filesystem MCP",
    subtitle: "Best for bounded local workspace access",
    description:
      "Filesystem MCP gives Claude controlled access to specific directories. The security boundary is explicit: Claude can operate only within directories supplied to the server.",
    advantage:
      "Lets Claude trace imports, inspect project structure, edit related files, and maintain architectural consistency. The correct scope is a project directory, not a user profile.",
    flaw:
      "An overly broad directory exposes secrets, credentials, private keys, and unrelated projects. A write-enabled server turns prompt injection into a local mutation risk.",
    config: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/absolute/path/to/your/project"
      ]
    }
  }
}`,
    href: "/tools/filesystem-mcp",
  },
  {
    number: "3",
    name: "Playwright MCP",
    subtitle: "Best for browser and UI verification",
    description:
      "Playwright MCP gives Claude a browser execution layer for navigation, DOM inspection, accessibility snapshots, and UI verification to close the implementation loop.",
    advantage:
      "More reliable than asking Claude to infer UI behavior from JSX or CSS. Accessibility snapshots are more token-efficient than returning raw HTML or full-page screenshots.",
    flaw:
      "Browser state is mutable. Under an ambiguous interface, Claude may enter an action loop (clicking overlays repeatedly). Cap action counts and isolate storage state.",
    config: `{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ]
    }
  }
}`,
    href: "/tools/playwright-mcp",
  },
  {
    number: "4",
    name: "Context7 MCP",
    subtitle: "Best for current library documentation",
    description:
      "Context7 provides version-aware library documentation and code examples through a small MCP tool surface, reducing stale API assumptions and outdated examples.",
    advantage:
      "A narrow documentation abstraction rather than a general web browser. A focused tool surface reduces selection entropy when working with rapidly changing frameworks.",
    flaw:
      "Documentation retrieval can be wrong if the library identity is resolved incorrectly, the version doesn't match the installed package, or the request is too broad and consumes the context window.",
    config: `{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": [
        "-y",
        "@upstash/context7-mcp@latest"
      ]
    }
  }
}`,
    href: "/tools/context7-mcp",
  },
  {
    number: "5",
    name: "PostgreSQL MCP",
    subtitle: "Best for schema-aware data reasoning",
    description:
      "PostgreSQL MCP exposes database schema and query capabilities to Claude, helping it understand tables, columns, relationships, and constraints instead of guessing.",
    advantage:
      "Claude can inspect the schema before generating SQL, which reduces trial-and-error queries and prevents runtime errors caused by incorrect joins.",
    flaw:
      "A writable database connection gives an LLM a destructive capability. Use a dedicated read-only role, a staging database, and statement timeouts. Never connect Claude directly to production.",
    config: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "YOUR_VERIFIED_POSTGRES_MCP_PACKAGE",
        "postgresql://readonly_user:YOUR_PASSWORD@localhost:5432/your_db?sslmode=require"
      ]
    }
  }
}`,
    href: "/tools/postgres-mcp",
  },
];

const faqItems = [
  {
    question: "How many MCP servers should I run with Claude Desktop at once?",
    answer: "Start with three to five active servers. A coherent baseline is Filesystem for a scoped project directory, GitHub read-only for repository context, and Context7 for current documentation. Add Playwright only when browser verification is part of the workflow.",
  },
  {
    question: "Why does Claude hallucinate code even when connected to GitHub?",
    answer: "Claude may be reading the wrong branch, an outdated commit, a truncated file, or a repository path that differs from the local workspace. Before asking for a fix, require repository owner, branch, commit SHA, and exact file path.",
  },
  {
    question: "Is it safe to give Claude write access to my filesystem?",
    answer: "Only within a dedicated, non-sensitive project directory. Never expose ~/.ssh, ~/.aws, .env files, production credentials, or home-directory roots. Use separate read-only and write-enabled configurations.",
  },
  {
    question: "How do I handle pagination when a Claude MCP result exceeds the context window?",
    answer: "Require server-side pagination and completeness metadata (returned, total, truncated, nextCursor). Persist the full result outside the model context. Claude should request the next page, not repeat the unbounded query.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "5 Best MCP Servers for Claude in 2026",
    description: "A technical architecture guide to the five best MCP servers for Claude in 2026.",
    author: { "@type": "Person", name: "MCPIndex Founder" },
    publisher: { "@type": "Organization", name: "MCPIndex", url: baseUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    url: canonical,
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    keywords: [
      "Best MCP Servers for Claude",
      "Claude Desktop MCP",
      "Claude Code MCP",
      "GitHub MCP Server",
      "Filesystem MCP",
      "Playwright MCP",
      "Context7 MCP",
      "Postgres MCP",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function BestMcpServersForClaude() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-4xl space-y-16 px-6 py-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-mono text-zinc-500">
          <Link href="/" className="transition-colors hover:text-white">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">Best MCP Servers for Claude</span>
        </nav>

        <header className="space-y-5">
          <p className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Claude Desktop Architecture · Updated August 18, 2026
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            5 Best MCP Servers for Claude in 2026
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            The most dangerous Claude MCP failure is not a visible exception. It is a confident answer produced from incomplete execution context: a stale repository branch, an unverified database schema, or a browser snapshot taken before hydration completed.
          </p>
          <p className="text-sm text-zinc-500">
            <Link href="/claude-desktop-mcp-setup" className="text-purple-400 underline underline-offset-4 transition-colors hover:text-purple-300">
              Read our full Claude Desktop setup guide
            </Link>{" "}
            before connecting these capabilities.
          </p>
        </header>

        <section id="architecture-problem" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-semibold">Why default Claude environments fail</h2>
          <p className="leading-relaxed text-zinc-400">
            Claude without MCP is a reasoning engine with no direct knowledge of your local execution environment. The standard workaround—copying files and logs into the chat—fails for architectural reasons.
          </p>
          
          <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <h3 className="text-base font-semibold text-white">Context fragmentation</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              A copied snippet has no guarantee of repository identity, commit SHA, or runtime state. Claude may reason accurately about the snippet while producing an invalid change for the actual project.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <h3 className="text-base font-semibold text-white">Tool-selection entropy</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Ten servers with overlapping capabilities create ambiguity. Similar tools increase the chance of routing a call to the wrong abstraction layer.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-5">
            <p className="text-sm font-mono text-red-400">CRITICAL WARNING</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              An MCP server is a privileged process. A prompt injection inside a repository file, issue body, or database row must never be allowed to override the system’s authorization policy.
            </p>
          </div>
        </section>

        <section id="ranked-servers" className="scroll-mt-24 space-y-8">
          <h2 className="text-2xl font-semibold">The 5 Best MCP Servers for Claude in 2026</h2>

          {toolCards.map((tool) => (
            <article key={tool.name} className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-purple-400">Rank {tool.number}</p>
                <h3 className="text-xl font-semibold text-white">{tool.name} — {tool.subtitle}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">{tool.description}</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-emerald-300">Architectural advantage</h4>
                  <p className="text-sm leading-relaxed text-zinc-400">{tool.advantage}</p>
                </div>
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-red-300">Fatal flaw</h4>
                  <p className="text-sm leading-relaxed text-zinc-400">{tool.flaw}</p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-mono uppercase tracking-widest text-zinc-500">Claude Desktop configuration</p>
                <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs leading-relaxed text-zinc-300">
                  <code>{tool.config}</code>
                </pre>
              </div>

              <Link href={tool.href} className="inline-block text-sm text-purple-400 transition-colors hover:text-purple-300">
                View {tool.name} full setup →
              </Link>
            </article>
          ))}
        </section>

        {/* CRO: Production-Ready Configuration Bundle */}
        <section className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-900 p-8 sm:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
          <div className="relative z-10 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-purple-400">Claude environment bundle</p>
              <h2 className="text-2xl font-bold tracking-tight text-white">Production Configuration Bundle</h2>
              <p className="max-w-2xl leading-relaxed text-zinc-400">
                The exact 5-server stack from this guide, intentionally using placeholders and read-only boundaries. Replace locally and audit before connecting to Claude.
              </p>
            </div>
            <DownloadBestClaudeMcpBundle />
            <div className="space-y-1 text-[11px] leading-relaxed text-zinc-600">
              <p>Includes GitHub (read-only), Filesystem, Playwright, Context7, and Postgres.</p>
              <p>The bundle contains placeholders and verified package warnings only. Never commit API keys to source control.</p>
            </div>
          </div>
        </section>

        <section id="silent-failure" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-semibold">The “Silent Failure” in Claude MCP Stacks</h2>
          <p className="leading-relaxed text-zinc-400">
            The most expensive failure is version drift. Claude receives a tool description, but <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">npx</code> resolves a newer package at startup. The local binary exposes changed behavior. Claude generates code against an unverified execution contract.
          </p>
          
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-5">
            <p className="text-sm font-mono text-red-400">ENFORCE THESE ERRORS</p>
            <pre className="mt-2 overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs leading-relaxed text-zinc-300">
{`MCP_SERVER_VERSION_MISMATCH
MCP_RESULT_TRUNCATED
MCP_CONTEXT_COMMIT_MISMATCH
MCP_TOOL_SCOPE_VIOLATION`}
            </pre>
          </div>

          <p className="leading-relaxed text-zinc-400">
            Claude must not summarize a result when the payload explicitly states <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">truncated === true</code>.
          </p>
        </section>

        <section id="legacy-comparison" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-semibold">Claude MCP vs. Custom GPTs and ChatGPT Plugins</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">Dimension</th>
                  <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">Claude MCP Stack</th>
                  <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">Custom GPTs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-900">
                  <td className="px-4 py-3 font-medium text-white">Local Execution</td>
                  <td className="px-4 py-3 text-zinc-400">Supports local subprocesses and controlled project access.</td>
                  <td className="px-4 py-3 text-zinc-400">Usually depends on remote actions or hosted connectors.</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="px-4 py-3 font-medium text-white">Context Control</td>
                  <td className="px-4 py-3 text-zinc-400">The operator chooses which tools and payloads enter the context.</td>
                  <td className="px-4 py-3 text-zinc-400">The platform controls much of the routing and context injection.</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="px-4 py-3 font-medium text-white">Latency</td>
                  <td className="px-4 py-3 text-zinc-400">Local tools avoid network round trips; remote tools add transport latency.</td>
                  <td className="px-4 py-3 text-zinc-400">Hosted actions add network and platform orchestration overhead.</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="px-4 py-3 font-medium text-white">Security Ownership</td>
                  <td className="px-4 py-3 text-zinc-400">The operator owns local permissions, credentials, binaries, and logs.</td>
                  <td className="px-4 py-3 text-zinc-400">The platform and action provider own more of the execution boundary.</td>
                </tr>
                <tr className="border-b border-zinc-900">
                  <td className="px-4 py-3 font-medium text-white">Maintenance</td>
                  <td className="px-4 py-3 text-zinc-400">Requires package pinning, process management, and permission reviews.</td>
                  <td className="px-4 py-3 text-zinc-400">Less local process management but more dependency on provider behavior.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">Failure Observability</td>
                  <td className="px-4 py-3 text-zinc-400">Can expose raw server logs and structured tool errors.</td>
                  <td className="px-4 py-3 text-zinc-400">Often limited to action responses and provider-level diagnostics.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed text-zinc-400">
            The MCP advantage is control, not automatic safety. You control the server boundary, but you also inherit responsibility for credentials, updates, and result validation.
          </p>
        </section>

        <section id="faq" className="scroll-mt-24 space-y-5">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white">
                  <span>{item.question}</span>
                  <span className="flex-shrink-0 text-zinc-500 transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Final Architecture Recommendations</h2>
          <p className="leading-relaxed text-zinc-400">
            Build the smallest stack that closes your actual execution gaps: GitHub for repository truth, Filesystem for one bounded project directory, Playwright for browser verification, Context7 for version-aware documentation, and PostgreSQL only through a verified read-only boundary.
          </p>
          <Link href="/tools?category=devops" className="inline-block text-sm text-purple-400 transition-colors hover:text-purple-300">
            Explore more DevOps MCP tools →
          </Link>
        </section>
      </div>
    </main>
  );
}
