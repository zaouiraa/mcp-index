import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/best-mcp-servers-for-claude`;
const ogImage = `${baseUrl}/og/best-mcp-servers-for-claude.png`;

export const metadata: Metadata = {
  title: "Best MCP Servers for Claude (2026 Top 10) | MCPIndex",
  description:
    "Top 10 best MCP servers for Claude Desktop, Claude Code, and Cursor in 2026. Ranked by use case with claude_desktop_config.json setup examples.",
  keywords: [
    "best MCP servers for Claude",
    "Claude Desktop MCP servers",
    "Claude Code MCP tools",
    "Cursor MCP servers",
    "best MCP servers 2026",
    "Claude Desktop config",
    "claude_desktop_config.json examples",
    "Model Context Protocol tools",
    "free MCP servers Claude",
    "MCP server ranking",
    "GitHub MCP Server Claude",
    "Context7 MCP Claude",
  ],
  authors: [{ name: "MCPIndex Team", url: baseUrl }],
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
    title: "Best MCP Servers for Claude (2026 Top 10)",
    description:
      "Top 10 best MCP servers for Claude Desktop, Claude Code, and Cursor in 2026. Ranked by use case with claude_desktop_config.json examples.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Best MCP Servers for Claude in 2026",
      },
    ],
    publishedTime: "2025-01-15T00:00:00Z",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MCP Servers for Claude (2026 Top 10) | MCPIndex",
    description:
      "Top 10 best MCP servers for Claude Desktop, Claude Code, and Cursor in 2026 with claude_desktop_config.json examples.",
    images: [ogImage],
  },
};

const picks = [
  {
    rank: 1,
    name: "GitHub MCP Server",
    slug: "github-mcp",
    category: "Version Control",
    bestFor: "Developers",
    oneliner: "Manage repos, PRs, issues, and code search from inside Claude via the Model Context Protocol.",
    free: true,
  },
  {
    rank: 2,
    name: "Context7 MCP",
    slug: "context7-mcp",
    category: "Developer Tools",
    bestFor: "Developers",
    oneliner: "Live, version-specific library docs injected straight into Claude context.",
    free: true,
  },
  {
    rank: 3,
    name: "Supabase MCP",
    slug: "supabase-mcp",
    category: "Database",
    bestFor: "Backend / Full-stack",
    oneliner: "Query Postgres, manage tables, and deploy Edge Functions via Claude.",
    free: true,
  },
  {
    rank: 4,
    name: "Figma Context MCP",
    slug: "figma-mcp",
    category: "Design",
    bestFor: "Frontend Developers",
    oneliner: "Read Figma file data and produce pixel-perfect design-to-code output.",
    free: true,
  },
  {
    rank: 5,
    name: "Desktop Commander MCP",
    slug: "desktop-commander-mcp",
    category: "Developer Tools",
    bestFor: "Local Automation",
    oneliner: "Run shell commands, edit files, and manage processes on your machine.",
    free: true,
  },
  {
    rank: 6,
    name: "Grafana MCP",
    slug: "grafana-mcp",
    category: "Monitoring",
    bestFor: "DevOps / SRE",
    oneliner: "Search dashboards, query Prometheus and Loki, investigate incidents.",
    free: true,
  },
  {
    rank: 7,
    name: "Atlassian MCP",
    slug: "atlassian-mcp",
    category: "Project Management",
    bestFor: "Teams using Jira/Confluence",
    oneliner: "Create Jira issues, search Confluence, and manage sprints with Claude.",
    free: true,
  },
  {
    rank: 8,
    name: "Semgrep MCP",
    slug: "semgrep-mcp",
    category: "Security",
    bestFor: "Security-focused developers",
    oneliner: "Scan code for vulnerabilities across 30+ languages with Claude.",
    free: true,
  },
  {
    rank: 9,
    name: "Google Workspace MCP",
    slug: "google-workspace-mcp",
    category: "Productivity",
    bestFor: "Productivity workflows",
    oneliner: "Control Gmail, Calendar, Drive, and Docs from a single MCP server.",
    free: true,
  },
  {
    rank: 10,
    name: "AWS MCP Server",
    slug: "aws-mcp",
    category: "Cloud & Infrastructure",
    bestFor: "Cloud engineers",
    oneliner: "Interact with S3, EC2, Lambda, DynamoDB, and 20+ AWS services via Claude.",
    free: true,
  },
];

const faqs = [
  {
    question: "What is an MCP server for Claude?",
    answer:
      "An MCP (Model Context Protocol) server is a standardized plugin that gives Claude Desktop, Claude Code, or Cursor access to external tools and data sources through a claude_desktop_config.json file. Instead of copying content into a chat window, Claude connects directly to services like GitHub or Supabase via the Model Context Protocol.",
  },
  {
    question: "Which MCP server should I install first?",
    answer:
      "For most developers, the GitHub MCP Server is the best starting point. It unlocks repository management, pull requests, issues, and code search directly inside Claude with a simple Personal Access Token and has the highest installation rate among Claude Code users.",
  },
  {
    question: "Do MCP servers work with Claude Desktop and Claude Code?",
    answer:
      "Yes. All MCP servers listed here are compatible with Claude Desktop, Claude Code, Cursor, and other MCP-compatible clients. The Model Context Protocol configuration is done once in claude_desktop_config.json and shared across clients.",
  },
  {
    question: "Are all MCP servers free?",
    answer:
      "All servers in this list are free and open source. Some require free API tokens (like GitHub PAT or Supabase access token) but the MCP servers themselves have no licensing cost.",
  },
  {
    question: "How many MCP servers can I run at once?",
    answer:
      "There is no hard limit on the number of MCP servers you can configure in claude_desktop_config.json. In practice, most developers run 3 to 6 MCP servers simultaneously. Adding too many can create noise in Claude's context window, so it is best to install only what you actively use.",
  },
  {
    question: "Is it safe to give Claude access to my machine via MCP?",
    answer:
      "MCP servers that access your local system, such as Desktop Commander, should be used with care. Review all commands before allowing execution and consider running Claude in a sandboxed environment for sensitive workloads. MCP servers with read-only access, like Context7, carry minimal risk.",
  },
];

export default function BestMcpServersForClaudePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Best MCP Servers for Claude in 2026",
    description:
      "Top 10 best MCP servers for Claude Desktop, Claude Code, and Cursor in 2026, ranked by use case with claude_desktop_config.json examples.",
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: ogImage,
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: new Date().toISOString().split("T")[0],
    wordCount: 2800,
    author: {
      "@type": "Organization",
      name: "MCPIndex Team",
      url: baseUrl,
    },
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
      name: "Model Context Protocol",
      description: "An open standard for connecting AI applications to external tools and data sources through MCP servers.",
    },
    proficiencyLevel: "Beginner to Intermediate",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
        name: "Guides",
        item: `${baseUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best MCP Servers for Claude",
        item: canonical,
      },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MCP Servers for Claude in 2026",
    description: "A curated list of the top 10 most useful MCP servers for Claude Desktop, Claude Code, and Cursor.",
    numberOfItems: picks.length,
    itemListElement: picks.map((pick) => ({
      "@type": "ListItem",
      position: pick.rank,
      name: pick.name,
      url: `${baseUrl}/tools/${pick.slug}`,
    })),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install MCP Servers on Claude Desktop",
    description: "Step-by-step guide to install Model Context Protocol servers on Claude Desktop using claude_desktop_config.json.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open claude_desktop_config.json",
        text: "Locate and open your Claude Desktop config file (~/Library/Application Support/Claude/claude_desktop_config.json on macOS or %APPDATA%\\Claude\\claude_desktop_config.json on Windows).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add MCP server configuration block",
        text: "Paste the ready-to-copy config JSON block from the MCP tool page inside the mcpServers object.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Add API token or credentials",
        text: "Replace placeholder values in the env block with your actual API token or credentials.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Restart Claude Desktop",
        text: "Quit and reopen Claude Desktop to load the new MCP server configuration.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">Best MCP Servers for Claude</span>
        </nav>

        {/* Hero */}
        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              10 Picks
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Best MCP Servers for Claude in 2026
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            MCP servers turn Claude from a chat assistant into an agent that reads
            your files, manages your GitHub repos, queries your database, and
            automates real workflows through the Model Context Protocol. These are
            the servers that deliver the most value in 2026, ranked by use case.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            All MCP servers on this list are open source, free to use, and compatible
            with{" "}
            <strong className="text-zinc-300">Claude Desktop</strong>,{" "}
            <strong className="text-zinc-300">Claude Code</strong>,{" "}
            <strong className="text-zinc-300">Cursor</strong>, and other MCP-compatible clients.
          </p>
        </header>

        {/* What are MCP servers */}
        <section id="what-are-mcp-servers" className="space-y-4">
          <h2 className="text-2xl font-semibold">What are MCP servers?</h2>
          <p className="text-zinc-400 leading-relaxed">
            MCP stands for{" "}
            <strong className="text-zinc-300">Model Context Protocol</strong>, an
            open standard introduced by Anthropic that lets AI models communicate
            with external tools and data sources through a unified interface. An
            MCP server exposes a set of tools — functions Claude can call — and a
            set of resources — data Claude can read — over a standardized protocol.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Instead of you manually copying a GitHub issue into the chat window,
            Claude connects to the GitHub MCP server and reads it directly. Instead
            of pasting Figma screenshots, Claude reads the component tree data
            through the Figma MCP server and produces accurate code in one pass.
            The Model Context Protocol is what makes Claude useful in real production environments.
          </p>
        </section>

        {/* Quick Picks Table */}
        <section id="top-10-mcp-servers-claude" className="space-y-5">
          <h2 className="text-2xl font-semibold">Top 10 MCP servers for Claude</h2>
          <p className="text-zinc-500 text-sm">
            Quick reference — full breakdowns by use case below.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">#</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">MCP Server</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs hidden md:table-cell">Category</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs hidden lg:table-cell">Best for</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Free</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((pick, i) => (
                  <tr
                    key={pick.slug}
                    className={`border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors ${
                      i === picks.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-zinc-600 font-mono text-xs">{pick.rank}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/tools/${pick.slug}`}
                        className="text-white hover:text-purple-300 font-medium transition-colors"
                      >
                        {pick.name}
                      </Link>
                      <p className="text-zinc-500 text-xs mt-0.5 hidden sm:block">
                        {pick.oneliner}
                      </p>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
                        {pick.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-zinc-400 text-xs hidden lg:table-cell">
                      {pick.bestFor}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                        Free
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* For Developers */}
        <section id="best-mcp-servers-developers" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Best MCP servers for developers</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              These are the MCP servers that have the highest daily-driver adoption among
              Claude Code and Cursor users in 2026.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-semibold">
                    <Link href="/tools/github-mcp" className="hover:text-purple-300 transition-colors">
                      GitHub MCP Server
                    </Link>
                  </h3>
                  <p className="text-zinc-500 text-xs font-mono mt-0.5">by GitHub • 23K+ stars • MIT</p>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  #1 Pick
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                The GitHub MCP Server is the most installed MCP server across all
                Claude clients, with an estimated installation rate above 80% among
                Claude Code users. It gives Claude full access to your repositories:
                creating and reviewing pull requests, managing issues, searching code,
                listing branches, and reading workflow run results via the Model Context Protocol.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Setup requires a GitHub Personal Access Token with the{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code>,{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:org</code>, and{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:user</code> scopes configured in claude_desktop_config.json. Once
                configured, you can ask Claude to open a PR, triage issues by label,
                or search your entire codebase in natural language.
              </p>
              <div className="flex items-center gap-3 pt-1 flex-wrap">
                <Link
                  href="/tools/github-mcp"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  Full setup guide →
                </Link>
                <Link
                  href="/categories/version-control"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  View Version Control category →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-semibold">
                    <Link href="/tools/context7-mcp" className="hover:text-purple-300 transition-colors">
                      Context7 MCP Server
                    </Link>
                  </h3>
                  <p className="text-zinc-500 text-xs font-mono mt-0.5">by Upstash • 33K+ stars • MIT • No API key required</p>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                  No config
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Context7 solves one of the most common Claude Code frustrations:
                outdated documentation in the model's training data. When you ask
                Claude to use a specific version of React, Next.js, or Supabase,
                this MCP server fetches the exact, versioned docs in real time and injects them
                directly into the context before answering.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                It requires no API key and no environment variables — just add it
                to your claude_desktop_config.json and include{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">use context7</code> in your
                prompt. It supports thousands of libraries including React, Next.js,
                Prisma, Drizzle, Supabase, Tailwind CSS, and more.
              </p>
              <Link
                href="/tools/context7-mcp"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Full setup guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/supabase-mcp" className="hover:text-purple-300 transition-colors">
                    Supabase MCP Server
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by Supabase • Apache-2.0</p>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                The official Supabase MCP server lets Claude query your Postgres
                database, run migrations, manage tables and RLS policies, and
                interact with Edge Functions. It connects to your Supabase project
                directly via a personal access token configured in claude_desktop_config.json, giving Claude full read/write
                access to your backend without leaving the conversation.
              </p>
              <Link
                href="/tools/supabase-mcp"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Full setup guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/desktop-commander-mcp" className="hover:text-purple-300 transition-colors">
                    Desktop Commander MCP
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by wonderwhy-er • 4.7K stars • MIT</p>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Desktop Commander gives Claude full control over your local machine:
                running shell commands, reading and writing files, searching code
                with regex, and managing background processes. It requires no API
                key and works across macOS, Linux, and Windows. Use it when you
                need Claude to operate like a senior developer who can actually run
                code and modify your project files.
              </p>
              <p className="text-zinc-400 text-sm">
                <strong className="text-zinc-300">Note:</strong>{" "}
                Always review commands before confirmation. Use this MCP server with caution in
                sensitive environments.
              </p>
              <Link
                href="/tools/desktop-commander-mcp"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Full setup guide →
              </Link>
            </div>
          </div>
        </section>

        {/* For Design & Frontend */}
        <section id="best-mcp-server-design-frontend" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Best MCP server for design and frontend</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              For teams that use Figma for design handoff.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/figma-mcp" className="hover:text-purple-300 transition-colors">
                    Figma Context MCP
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by GLips • 11K+ stars • MIT • Works with any Figma account</p>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                Design → Code
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Figma Context MCP gives Claude direct read access to Figma file
              data — component trees, layout properties, design tokens, spacing, and
              styles — without screenshots through the Model Context Protocol. Claude can read the design spec and
              produce accurate React, Tailwind, or HTML/CSS implementation in one
              shot. It works with any Figma account including the free tier and
              supports all major front-end frameworks.
            </p>
            <Link
              href="/tools/figma-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Full setup guide →
            </Link>
          </div>
        </section>

        {/* For DevOps & Monitoring */}
        <section id="best-mcp-servers-devops-monitoring" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Best MCP servers for DevOps and monitoring</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              For teams that run infrastructure and need Claude to help with incident
              investigation, cloud resources, and observability via the Model Context Protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/grafana-mcp" className="hover:text-purple-300 transition-colors">
                    Grafana MCP Server
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by Grafana Labs • Apache-2.0</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Search dashboards, run queries against Prometheus and Loki
                datasources, and investigate incidents directly from Claude.
                Works with Grafana Cloud and self-hosted instances.
              </p>
              <Link href="/tools/grafana-mcp" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Setup guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/aws-mcp" className="hover:text-purple-300 transition-colors">
                    AWS MCP Server
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by AWS Labs • 6.7K+ stars • Apache-2.0</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Interact with S3, EC2, Lambda, DynamoDB, IAM, and 20+ AWS
                services via existing AWS credentials configured in claude_desktop_config.json.
              </p>
              <Link href="/tools/aws-mcp" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Setup guide →
              </Link>
            </div>
          </div>
        </section>

        {/* For Security */}
        <section id="best-mcp-server-security" className="space-y-4">
          <h2 className="text-2xl font-semibold">Best MCP server for security</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <div>
              <h3 className="text-lg font-semibold">
                <Link href="/tools/semgrep-mcp" className="hover:text-purple-300 transition-colors">
                  Semgrep MCP Server
                </Link>
              </h3>
              <p className="text-zinc-500 text-xs font-mono mt-0.5">by Semgrep • MIT • Free community rules</p>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Semgrep MCP lets Claude scan your codebase for security vulnerabilities
              using Semgrep's static analysis engine, with support for 30+ languages
              and thousands of rules including OWASP Top 10. The MCP server reports issues
              with fix suggestions that Claude can then apply. Free community rules
              are available without a paid plan.
            </p>
            <Link
              href="/tools/semgrep-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Full setup guide →
            </Link>
          </div>
        </section>

        {/* For Productivity */}
        <section id="best-mcp-servers-productivity" className="space-y-4">
          <h2 className="text-2xl font-semibold">Best MCP servers for productivity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/atlassian-mcp" className="hover:text-purple-300 transition-colors">
                    Atlassian MCP Server
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by Sooperset • 3.3K stars • MIT</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Create Jira issues, search Confluence, update sprint statuses,
                and manage epics — all from inside Claude. Supports Jira Cloud
                and self-hosted Server/Data Center.
              </p>
              <Link href="/tools/atlassian-mcp" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Setup guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">
                  <Link href="/tools/google-workspace-mcp" className="hover:text-purple-300 transition-colors">
                    Google Workspace MCP
                  </Link>
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">by taylorwilsdon • MIT</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Full access to Gmail, Calendar, Drive, Docs, and Chat through a
                single MCP server with OAuth authentication.
              </p>
              <Link href="/tools/google-workspace-mcp" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Setup guide →
              </Link>
            </div>
          </div>
        </section>

        {/* How to install */}
        <section id="how-to-install-mcp-servers-claude-desktop" className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">How to install MCP servers on Claude Desktop</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              All MCP servers on this list are installed via the same Model Context Protocol process. You
              only need to do this once per server in claude_desktop_config.json.
            </p>
          </div>

          <ol className="space-y-4">
            {[
              {
                step: "1",
                title: "Open your Claude Desktop config file",
                detail: (
                  <>
                    On macOS:{" "}
                    <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                      ~/Library/Application Support/Claude/claude_desktop_config.json
                    </code>
                    <br />
                    On Windows:{" "}
                    <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                      %APPDATA%\Claude\claude_desktop_config.json
                    </code>
                  </>
                ),
              },
              {
                step: "2",
                title: "Add the MCP server's config block",
                detail:
                  "Each tool page on MCPIndex includes a ready-to-copy JSON block. Paste it inside the mcpServers object in your claude_desktop_config.json file.",
              },
              {
                step: "3",
                title: "Add your API token or credentials",
                detail:
                  "Most MCP servers need an API token in the env block. Generate one from the provider's settings page and replace the placeholder value.",
              },
              {
                step: "4",
                title: "Restart Claude Desktop",
                detail:
                  "Quit and reopen Claude Desktop. The MCP server will connect on startup and its tools will appear in the conversation.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs font-mono flex items-center justify-center mt-0.5">
                  {item.step}
                </span>
                <div className="space-y-1.5">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* How to choose */}
        <section id="how-to-choose-mcp-servers" className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">How to choose the right MCP servers</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Not every MCP server is worth installing for every workflow. Use this guide to decide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Start with your bottleneck",
                body: "Pick the one task that interrupts your Claude workflow most — copying GitHub issue URLs, pasting Figma designs, or running shell commands manually. Install the one MCP server that eliminates that friction first.",
              },
              {
                title: "Install 3 to 6 MCP servers maximum",
                body: "Every active MCP server adds tools to Claude's context window. Running too many at once dilutes focus. Install only what you use daily in claude_desktop_config.json, and deactivate the rest.",
              },
              {
                title: "Prefer official MCP servers",
                body: "Official MCP servers from GitHub, Supabase, Grafana, and AWS are maintained by the vendor, better tested, and less likely to break on API updates. Use community Model Context Protocol servers only when no official option exists.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
              >
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RelatedGuides - FIXED VERSION */}
        <RelatedGuides
  items={[
    {
      title: "Claude Desktop MCP Setup",
      body: "The definitive guide for claude_desktop_config.json configuration.",
      href: "/claude-desktop-mcp-setup",
    },
    {
      title: "GitHub MCP Server Setup",
      body: "Step-by-step installation guide with a real config example.",
      href: "/github-mcp-server-setup",
    },
    {
      title: "How to Install MCP Servers",
      body: "Cross-client installation for Cursor, Claude Code, and VS Code.",
      href: "/how-to-install-mcp-servers",
    },
  ]}
/>
        {/* FAQ */}
        <section id="best-mcp-servers-claude-faq" className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.question}
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="browse-full-mcp-tools-directory" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Browse the full MCP tools directory</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            MCPIndex tracks the best MCP servers across every category — version
            control, databases, monitoring, productivity, security, and more. Every
            listing includes a ready-to-copy claude_desktop_config.json block, setup steps, and FAQ.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              Browse all MCP tools
            </Link>
            <Link
              href="/categories"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors"
            >
              Browse by category
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
