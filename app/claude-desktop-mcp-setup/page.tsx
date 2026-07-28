import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";
import { DownloadClaudeMcpBundle } from "@/components/download-claude-mcp-bundle";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/claude-desktop-mcp-setup`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(
  "Claude Desktop MCP Setup"
)}&description=${encodeURIComponent(
  "Step-by-step config JSON guide + free starter kit"
)}`;

export const metadata: Metadata = {
  title:
    "Claude Desktop MCP Setup – Step‑by‑Step Configuration (2026 Guide) | Free Starter Kit",
  description:
    "Stop struggling with JSON errors and missing servers. Follow this step‑by‑step Claude Desktop MCP configuration guide for Windows and macOS, and download a premium starter kit (normally $49) with 5 pre‑configured MCP servers for free.",
  keywords: [
    "Claude Desktop MCP setup 2026",
    "Claude Desktop MCP configuration",
    "claude_desktop_config.json 2026",
    "MCP server Claude Desktop 2026",
    "npx MCP server 2026",
    "Claude Desktop config file path 2026",
    "MCP setup guide 2026",
    "Claude Desktop MCP not working 2026",
    "install MCP server Claude 2026",
    "Claude Desktop npx configuration 2026",
    "MCP server configuration JSON 2026",
    "Claude Desktop MCP errors 2026",
    "GitHub MCP Server Claude Desktop 2026",
    "multiple MCP servers Claude 2026",
    "Claude Desktop MCP troubleshooting 2026",
    "free MCP starter kit 2026",
    "Model Context Protocol Claude 2026",
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
    title:
      "Claude Desktop MCP Setup – Step‑by‑Step Configuration (2026 Guide)",
    description:
      "Complete MCP configuration guide for Windows & macOS. Get a free premium starter kit (normally $49) with 5 pre‑configured servers.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Claude Desktop MCP Setup 2026 – Config JSON and free premium starter kit",
      },
    ],
    publishedTime: "2026-06-01T00:00:00Z",
    modifiedTime: "2026-06-02T00:00:00Z", // ✅ ثابت
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Claude Desktop MCP Setup – Step‑by‑Step Configuration (2026 Guide)",
    description:
      "Step-by-step MCP setup with claude_desktop_config.json. Free premium starter kit (worth $49) included.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is Claude Desktop MCP setup in 2026?",
    answer:
      "In 2026, Claude Desktop MCP setup is the standard way to connect Claude to external tools via Model Context Protocol servers. You configure a local claude_desktop_config.json file to launch MCP servers that give Claude access to GitHub, local files, databases, APIs, and more – all from the chat interface.",
  },
  {
    question: "Do I still need Node.js for npx MCP servers in 2026?",
    answer:
      "Yes. The vast majority of MCP servers remain npm packages launched via npx. Node.js LTS (v22 or later) is recommended and must be present in your system PATH for Claude Desktop to start them.",
  },
  {
    question: "Where is the Claude Desktop MCP config file in 2026?",
    answer:
      "On macOS: ~/Library/Application Support/Claude/claude_desktop_config.json. On Windows: %APPDATA%\\Claude\\claude_desktop_config.json. The location has remained consistent through 2026 updates.",
  },
  {
    question: "Why is my MCP server not appearing in Claude Desktop (2026)?",
    answer:
      "Common 2026 causes include: invalid JSON in claude_desktop_config.json, missing Node.js for npx servers, incorrect environment variables, or not fully restarting Claude Desktop. Also check that your MCP server package is still maintained and uses an up-to-date npx command.",
  },
  {
    question: "Can I add more than one MCP server in 2026?",
    answer:
      "Absolutely. Claude Desktop supports multiple MCP servers inside the mcpServers object. Most developers run 3–5 servers for a complete workflow. Our free premium starter kit gives you the top 5 pre-configured.",
  },
  {
    question: "Which MCP server should I install first in 2026?",
    answer:
      "GitHub MCP Server remains the #1 first install for developers. Followed by Context7 for live docs, and Desktop Commander for local file/shell access. Semgrep is excellent for security-focused teams. All five are included in our free downloadable starter kit (normally $49).",
  },
];

export default function ClaudeDesktopMcpSetupPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "Claude Desktop MCP Setup – Step‑by‑Step Configuration (2026 Guide)",
    description:
      "Complete Claude Desktop MCP setup guide for 2026. claude_desktop_config.json configuration, npx MCP server installation, Node.js, testing, troubleshooting, and a free premium starter kit (normally $49).",
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: ogImage,
    datePublished: "2026-06-01T00:00:00Z",
    dateModified: "2026-06-02T00:00:00Z", // ✅ ثابت
    wordCount: 2100,
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
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Claude Desktop",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "macOS, Windows",
      },
      {
        "@type": "Thing",
        name: "Model Context Protocol",
        description:
          "Open standard for connecting AI applications to external tools.",
      },
    ],
    proficiencyLevel: "Beginner",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free downloadable MCP starter kit (JSON bundle) – normally $49",
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
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Claude Desktop MCP Setup 2026",
        item: canonical,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up MCP Servers in Claude Desktop (2026)",
    description:
      "Step-by-step guide to install and configure MCP servers in Claude Desktop using claude_desktop_config.json and npx. Includes free premium starter kit (normally $49).",
    totalTime: "PT10M",
    tool: [
      { "@type": "HowToTool", name: "Claude Desktop" },
      { "@type": "HowToTool", name: "Node.js LTS v22+" },
      { "@type": "HowToTool", name: "claude_desktop_config.json" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Install Node.js for npx MCP servers",
        text: "Install Node.js LTS (v22 or later). Verify node, npm, and npx are available.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open claude_desktop_config.json",
        text: "Locate the config file (macOS: ~/Library/Application Support/Claude/claude_desktop_config.json; Windows: %APPDATA%\\Claude\\claude_desktop_config.json). Create it if missing.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Add MCP server configuration",
        text: "Paste the MCP server JSON block into mcpServers. Our free premium starter kit provides the exact config for the 5 best servers.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Restart Claude Desktop",
        text: "Completely quit and reopen Claude Desktop to load the new configuration.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Test the MCP connection",
        text: "Ask Claude to use the server (e.g., 'List my GitHub repositories'). Check for the hammer icon indicating tools are loaded.",
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
          <span className="text-zinc-300">Claude Desktop MCP Setup (2026)</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Beginner Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              Free Premium Starter Kit
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Claude Desktop MCP Setup – Step‑by‑Step Configuration (2026)
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            You've heard that MCP unlocks Claude's real power, but now you're staring at
            a blank <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">claude_desktop_config.json</code> file
            with no idea what to put in it. This guide takes you from zero to a fully
            configured Claude Desktop MCP setup in 10 minutes – with exact config templates
            for Windows and macOS, and a free premium starter kit (normally $49) that bundles
            the 5 best MCP servers pre‑configured.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            For a concrete example, follow the{" "}
            <Link href="/github-mcp-server-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              GitHub MCP Server setup
            </Link>
            . For server comparisons, see{" "}
            <Link href="/best-mcp-servers-for-claude" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              Best MCP Servers for Claude
            </Link>
            .
          </p>
        </header>

        <section id="what-mcp-does-in-claude-desktop" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">What MCP does in Claude Desktop (2026)</h2>
          <p className="text-zinc-400 leading-relaxed">
            MCP (Model Context Protocol) is how Claude Desktop connects to external tools like GitHub,
            local files, databases, and APIs. By 2026, MCP is the default way to give Claude real‑world
            agency beyond the chat window.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Without MCP, Claude's knowledge is limited to the conversation. With MCP servers,
            Claude can read live data, edit files, run commands, and complete complex workflows
            accurately.
          </p>
        </section>

        <section id="claude-desktop-mcp-prerequisites" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">What you need before starting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Claude Desktop installed",
                body: "Latest Claude Desktop app (2026) installed and signed in. The free tier works perfectly for MCP.",
              },
              {
                title: "Node.js LTS (v22+)",
                body: "Most MCP servers run via npx, so Node.js must be installed and available in your terminal.",
              },
              {
                title: "MCP server config block",
                body: "Every MCP server provides a JSON snippet. Our free premium kit bundles the top 5 together.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="step-1-install-nodejs-for-npx-mcp-servers" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 1: Install Node.js for npx MCP servers</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most MCP servers are npm packages launched with <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">npx</code>.
            Node.js LTS (v22 or newer) is required for the smoothest Claude Desktop MCP experience in 2026.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Quick Node.js check</h3>
            <p className="text-zinc-400 text-sm">Run these commands in your terminal:</p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
              {`node -v
npm -v
npx -v`}
            </pre>
            <p className="text-zinc-400 text-sm">
              If any fail, install the latest LTS from nodejs.org before proceeding.
            </p>
          </div>
        </section>

        <section id="step-2-open-claude-desktop-config-json" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 2: Open claude_desktop_config.json</h2>
          <p className="text-zinc-400 leading-relaxed">
            Claude Desktop reads MCP servers from <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">claude_desktop_config.json</code>.
            This file defines which servers start when Claude launches.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">File locations (2026)</h3>
            <p className="text-zinc-400 text-sm">
              macOS: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code>
            </p>
            <p className="text-zinc-400 text-sm">
              Windows: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">%APPDATA%\Claude\claude_desktop_config.json</code>
            </p>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            You can also open it from Claude Desktop's developer menu (Settings → Developer → Edit Config).
          </p>
        </section>

        <section id="step-3-add-first-mcp-server-to-claude-desktop" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 3: Add your first MCP server</h2>
          <p className="text-zinc-400 leading-relaxed">
            Start with GitHub MCP Server – it gives Claude access to repos, PRs, and issues.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-white font-medium text-sm">Basic claude_desktop_config.json</p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
              {`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN"
      }
    }
  }
}`}
            </pre>
            <p className="text-zinc-400 text-sm">
              Replace <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">YOUR_TOKEN</code> with your GitHub personal access token.
            </p>
          </div>
        </section>

        <section id="step-4-restart-claude-desktop-for-mcp" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 4: Restart Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            Save the config file, then completely quit Claude Desktop (Cmd+Q / Alt+F4) and reopen it.
            The new MCP server will load only after a full restart.
          </p>
        </section>

        <section id="step-5-test-claude-desktop-mcp-server" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Step 5: Test the MCP server</h2>
          <p className="text-zinc-400 leading-relaxed">
            Once restarted, look for the hammer icon (tools) in Claude's input bar. Try a test prompt:
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">List my GitHub repositories</li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">Show me the latest PRs</li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">Search for authentication middleware</li>
            </ul>
          </div>
        </section>

        <section id="adding-multiple-mcp-servers-to-claude-desktop" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Adding multiple MCP servers</h2>
          <p className="text-zinc-400 leading-relaxed">A powerful yet simple stack for 2026:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "GitHub MCP", body: "Repo, PR, issue management", href: "/tools/github-mcp" },
              { title: "Context7 MCP", body: "Live documentation", href: "/tools/context7-mcp" },
              { title: "Desktop Commander", body: "Local files & terminal", href: "/tools/desktop-commander-mcp" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="common-claude-desktop-mcp-errors" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Common MCP errors & fixes</h2>
          <div className="space-y-3">
            {[
              { title: "Invalid JSON", body: "Check commas and braces in claude_desktop_config.json." },
              { title: "Node.js not found", body: "Ensure Node.js is in your PATH (restart terminal/Claude after install)." },
              { title: "Missing env variables", body: "Many servers need tokens – verify env block." },
              { title: "Wrong file path", body: "Confirm you're editing the correct config file (use Claude's developer menu)." },
              { title: "Not restarted", body: "Full quit and reopen Claude after changes." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="claude-desktop-mcp-security-tips" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Security tips for 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Least privilege", body: "Grant only necessary scopes to each MCP server." },
              { title: "Be careful with local access", body: "File system / shell MCP servers can be powerful – understand the risk." },
              { title: "Rotate tokens", body: "Regularly refresh API keys and remove unused credentials." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedGuides
          items={[
            {
              title: "How to Install MCP Servers",
              body: "Cross‑client MCP install guide for Cursor, Claude Code, VS Code.",
              href: "/how-to-install-mcp-servers",
            },
            {
              title: "GitHub MCP Server Setup",
              body: "Detailed GitHub MCP setup with claude_desktop_config.json example.",
              href: "/github-mcp-server-setup",
            },
            {
              title: "Best MCP Servers for Claude",
              body: "Compare the best MCP servers by use case and setup difficulty.",
              href: "/best-mcp-servers-for-claude",
            },
          ]}
        />

        <section className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 space-y-6 relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-zinc-700 text-zinc-300 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                Free Premium Resource (Worth $49)
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Download the Ultimate Claude Desktop MCP Starter Kit
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                Get a ready‑to‑use <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">claude_desktop_config.json</code> with
                the 5 best MCP servers pre‑configured: GitHub, Context7, Desktop Commander, Semgrep, and Filesystem.
                Plus a troubleshooting checklist. Normally sold for <span className="text-white line-through">$49</span> — free today.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> GitHub, Context7, Desktop Commander, Semgrep, Filesystem</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Correct environment variables & args</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Error‑fix checklist (JSON, Node, tokens, paths)</li>
              </ul>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadClaudeMcpBundle />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">Instant .json download. No email required.</p>
            </div>
          </div>
        </section>

        <section id="claude-desktop-mcp-faq" className="space-y-5 scroll-mt-24">
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
          <h2 className="text-2xl font-semibold">Browse ready‑to‑use MCP servers</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Explore the full MCPIndex directory for copy‑ready configs, setup steps, and category pages.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link href="/tools" className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors">
              Browse all MCP servers
            </Link>
            <Link href="/categories" className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors">
              Browse by category
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
