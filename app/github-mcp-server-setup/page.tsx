import Link from "next/link";
import type { Metadata } from "next";
import { DownloadGitHubSetupCheatsheet } from "@/components/download-github-setup-cheatsheet";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/github-mcp-server-setup`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent("GitHub MCP Server Setup (2026)")}&description=${encodeURIComponent("Step-by-step guide + free premium cheat sheet worth $29.")}`;

export const metadata: Metadata = {
  title: "GitHub MCP Server Setup for Claude Desktop – Stop Tab‑Switching to GitHub in 2026 | MCPIndex",
  description:
    "Stop tab‑switching to GitHub. Install the official GitHub MCP Server on Claude Desktop, Claude Code, or Cursor in under 10 minutes. Complete guide with token scopes, claude_desktop_config.json, npx setup, troubleshooting, and a free premium cheat sheet (normally $29).",
  keywords: [
    "github mcp claude desktop",
    "github mcp server claude",
    "GitHub MCP Server setup 2026",
    "GitHub MCP Server Claude Code",
    "GitHub MCP Server Cursor",
    "claude_desktop_config.json 2026",
    "@github/github-mcp-server 2026",
    "GitHub Personal Access Token MCP",
    "MCP server configuration 2026",
    "Model Context Protocol GitHub 2026",
    "npx MCP server setup 2026",
    "GitHub MCP Server not showing",
    "free GitHub MCP cheat sheet",
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
    title: "GitHub MCP Server Setup for Claude Desktop – Stop Tab‑Switching to GitHub (2026)",
    description:
      "Stop wasting time tab‑switching. Install the official GitHub MCP Server on Claude Desktop, Claude Code, or Cursor in 10 minutes. Free premium cheat sheet (normally $29) included.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "GitHub MCP Server Setup for Claude Desktop in 2026",
      },
    ],
    publishedTime: "2026-06-20T00:00:00Z",
    modifiedTime: "2026-06-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub MCP Server Setup for Claude Desktop – Stop Tab‑Switching (2026)",
    description:
      "Complete setup guide with free premium cheat sheet (normally $29). Step-by-step for Claude Desktop, Claude Code, Cursor.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is the GitHub MCP Server?",
    answer:
      "GitHub MCP Server is GitHub's official Model Context Protocol (MCP) server. It lets Claude connect directly to GitHub API endpoints so you can list repositories, search code, manage issues, open pull requests, and review changes without leaving the chat window.",
  },
  {
    question: "Do I need a GitHub token?",
    answer:
      "Yes. You need a GitHub Personal Access Token to authenticate the GitHub MCP Server. For most Claude workflows, the recommended scopes are repo, read:org, and read:user. If you only need public repositories, you can use a more limited token.",
  },
  {
    question: "Does GitHub MCP Server work with Claude Desktop only?",
    answer:
      "No. It works with Claude Desktop, Claude Code, Cursor, VS Code, and other MCP-compatible clients. The exact MCP server setup method changes slightly by client, but the same GitHub token and @github/github-mcp-server package are used.",
  },
  {
    question: "What is the easiest way to install it?",
    answer:
      "The easiest method is using npx in your claude_desktop_config.json file. That avoids manual builds and keeps the GitHub MCP Server easy to update.",
  },
  {
    question: "Why is the GitHub MCP Server not showing up in Claude?",
    answer:
      "The most common causes are an invalid claude_desktop_config.json file, a missing GitHub Personal Access Token, incorrect token scopes, or forgetting to fully restart Claude Desktop after saving the MCP server configuration.",
  },
  {
    question: "Is GitHub MCP Server safe to use?",
    answer:
      "It can be safe if you follow least-privilege access. Use the minimum GitHub token scopes required, avoid production org-wide permissions when unnecessary, and review any write action before allowing Claude to proceed with GitHub API requests.",
  },
];

export default function GitHubMcpServerSetupPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "GitHub MCP Server Setup for Claude Desktop – Stop Tab‑Switching to GitHub in 2026",
    description:
      "Complete GitHub MCP Server setup guide for Claude Desktop, Claude Code, and Cursor. Step-by-step token creation, claude_desktop_config.json, npx installation, troubleshooting, and security best practices. Includes free downloadable cheat sheet (normally $29).",
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: ogImage,
    datePublished: "2026-06-20T00:00:00Z",
    dateModified: "2026-06-21T00:00:00Z",
    wordCount: 1700,
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
      name: "GitHub MCP Server",
      description:
        "GitHub's official Model Context Protocol server for AI assistant integration with GitHub API.",
      url: "https://github.com/github/github-mcp-server",
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free GitHub MCP Setup Cheat Sheet (Markdown) – normally $29",
    },
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
      { "@type": "ListItem", position: 2, name: "Tools", item: `${baseUrl}/tools` },
      { "@type": "ListItem", position: 3, name: "GitHub MCP Server Setup", item: canonical },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up GitHub MCP Server for Claude Desktop",
    description:
      "Step-by-step guide to install and configure GitHub MCP Server for Claude Desktop using npx and a GitHub Personal Access Token. Free cheat sheet available (normally $29).",
    totalTime: "PT10M",
    tool: [
      { "@type": "HowToTool", name: "Claude Desktop" },
      { "@type": "HowToTool", name: "GitHub Personal Access Token" },
      { "@type": "HowToTool", name: "Node.js with npx" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Create a GitHub Personal Access Token",
        text: "Go to GitHub Settings > Developer Settings > Personal Access Tokens. Create a token with repo, read:org, and read:user scopes for GitHub MCP Server authentication.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add GitHub MCP Server to Claude Desktop config",
        text: "Open claude_desktop_config.json and add the GitHub MCP Server entry with npx -y @github/github-mcp-server command and your GitHub Personal Access Token in the env block.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Restart Claude Desktop and test the connection",
        text: "Fully quit and reopen Claude Desktop to load the MCP server configuration. Test by asking Claude to list your GitHub repositories or show open pull requests.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">GitHub MCP Server Setup</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Setup Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              Free Premium Cheat Sheet
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            GitHub MCP Server Setup: Stop Tab‑Switching to GitHub in 2026
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            You're asking Claude to review a pull request, but it has no idea what's in
            the repo. You copy-paste code back and forth, losing context with every
            switch. There's a better way. This guide gets your official GitHub MCP Server
            running on Claude Desktop, Claude Code, or Cursor in under 10 minutes — and
            includes a free premium cheat sheet (normally $29) with every token scope and
            config template you'll need.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            New to MCP? Start with{" "}
            <Link href="/claude-desktop-mcp-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white font-medium">
              Claude Desktop MCP Setup
            </Link>
            . For the tool profile, see{" "}
            <Link href="/tools/github-mcp" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              GitHub MCP Server listing
            </Link>
            . For comparisons, read{" "}
            <Link href="/best-mcp-servers-for-claude" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              Best MCP Servers for Claude
            </Link>
            .
          </p>
        </header>

        <section id="what-github-mcp-server-does" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">What GitHub MCP Server does</h2>
          <p className="text-zinc-400 leading-relaxed">
            GitHub MCP Server is GitHub's official Model Context Protocol integration.
            It lets Claude interact directly with GitHub API endpoints for repositories,
            issues, pull requests, branches, and code search — no tab switching needed.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Ask Claude to list repos, inspect PRs, review changed files, search code,
            summarize issues, or prepare fixes before pushing changes.
          </p>
        </section>

        <section id="before-you-start" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Before you start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "GitHub account", body: "A GitHub account with access to repos you want Claude to read/write." },
              { title: "Claude client", body: "Claude Desktop is easiest; also works with Claude Code and Cursor." },
              { title: "Personal Access Token", body: "Create a token with only needed scopes – repo, read:org, read:user." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="step-1-create-github-token" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 1: Create a GitHub token</h2>
          <p className="text-zinc-400 leading-relaxed">
            Go to GitHub Settings → Developer Settings → Personal Access Tokens.
            Choose classic (simpler) or fine-grained (tighter control).
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <h3 className="text-lg font-semibold">Recommended GitHub token scopes</h3>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm" aria-label="GitHub token scopes and their purposes">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-950/80">
                    <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Scope</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Why you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3"><code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code></td>
                    <td className="px-4 py-3 text-zinc-400">Private repos, PRs, issues.</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3"><code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:org</code></td>
                    <td className="px-4 py-3 text-zinc-400">Organization membership & visibility.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:user</code></td>
                    <td className="px-4 py-3 text-zinc-400">User profile for account-level ops.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Public-only? A more limited token works. For real workflows, <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code> is the practical baseline.
            </p>
          </div>
        </section>

        <section id="step-2-add-to-claude-desktop" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 2: Add GitHub MCP Server to Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            Open <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">claude_desktop_config.json</code> and add:
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-white font-medium text-sm">Config file paths</p>
              <p className="text-zinc-400 text-sm">macOS: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code></p>
              <p className="text-zinc-400 text-sm">Windows: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">%APPDATA%\Claude\claude_desktop_config.json</code></p>
            </div>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN"
      }
    }
  }
}`}
            </pre>
            <p className="text-zinc-400 text-sm">Replace <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">YOUR_GITHUB_TOKEN</code> with your token from Step 1.</p>
          </div>
        </section>

        <section id="step-3-restart-and-test" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 3: Restart Claude and test it</h2>
          <p className="text-zinc-400 leading-relaxed">Save the config, fully quit Claude, reopen. Try:</p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">List my GitHub repositories.</li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">Show open pull requests.</li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">Search this repo for auth middleware.</li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">Summarize issues labeled bug.</li>
            </ul>
          </div>
        </section>

        <section id="claude-code-and-cursor-setup" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">GitHub MCP Server for Claude Code and Cursor</h2>
          <p className="text-zinc-400 leading-relaxed">
            The same token and package work with Claude Code (CLI config) and Cursor (MCP settings).
            Keep scopes minimal and document one approved method for teams.
          </p>
        </section>

        <section id="common-errors-and-fixes" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Common GitHub MCP Server errors and fixes</h2>
          <div className="space-y-3">
            {[
              { title: "Invalid JSON", body: "Validate commas/braces in config." },
              { title: "Missing/expired token", body: "Check token in env block." },
              { title: "Insufficient permissions", body: "Add repo scope for private repos/PRs." },
              { title: "Not fully restarted", body: "Quit and reopen Claude completely." },
              { title: "npx fails", body: "Install Node.js LTS." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="security-best-practices" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Security best practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Least privilege", body: "Start with minimal scopes, expand only if needed." },
              { title: "Separate tokens", body: "Use distinct tokens for work and personal projects." },
              { title: "Rotate regularly", body: "Set expiration dates, replace immediately if exposed." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Cheat Sheet Section with Price */}
        <section className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 space-y-6 relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-zinc-700 text-zinc-300 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                Free Premium Resource (Worth $29)
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Get the GitHub MCP Setup Cheat Sheet
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                The exact Markdown reference we use internally to onboard new developers.
                Normally sold for <span className="text-white line-through">$29</span> — free
                today for mcpindex.dev readers.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Ready‑to‑paste config block</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Token scopes quick reference</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Top 5 errors & fixes</li>
              </ul>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadGitHubSetupCheatsheet />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">Instant .md download. No email required.</p>
            </div>
          </div>
        </section>

        <section id="why-github-mcp-server-is-worth-installing" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Why GitHub MCP Server is worth installing</h2>
          <p className="text-zinc-400 leading-relaxed">
            For most developers, GitHub MCP Server is the highest‑value MCP server.
            Once Claude reads repos, PRs, and issues, it becomes far more than a code assistant.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            After GitHub, add{" "}
            <Link href="/tools/context7-mcp" className="text-zinc-300 underline underline-offset-4 hover:text-white">Context7 MCP for docs</Link>{" "}
            and{" "}
            <Link href="/tools/desktop-commander-mcp" className="text-zinc-300 underline underline-offset-4 hover:text-white">Desktop Commander for local execution</Link>.
          </p>
        </section>

        <section id="frequently-asked-questions" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Frequently asked questions (2026)</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden" aria-label={faq.question}>
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

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Explore more MCP tools</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Browse the full MCPIndex directory for setup guides, config examples, and recommendations.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link href="/tools/github-mcp" className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors">
              View GitHub MCP Server listing
            </Link>
            <Link href="/tools" className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors">
              Browse all MCP servers
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
