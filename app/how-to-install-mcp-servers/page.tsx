import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";
import { DownloadMcpInstallCheatsheet } from "@/components/download-mcp-install-cheatsheet";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/how-to-install-mcp-servers`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(
  "How to Install MCP Servers"
)}&description=${encodeURIComponent(
  "Windows, macOS, Linux guide + free cheat sheet"
)}`;

export const metadata: Metadata = {
  title: "How to Install MCP Servers on Windows, macOS & Linux (2026 Guide) | Claude, Cursor, VS Code",
  description:
    "Step‑by‑step guide to install MCP servers on Windows, macOS, and Linux for Claude Desktop, Claude Code, Cursor, and VS Code. Avoid the 5 most common errors, use exact config templates, and download the premium MCP Installation Quick Reference (worth $29) for free.",
  keywords: [
    "how to install MCP servers 2026",
    "install MCP server Windows 2026",
    "MCP installation guide 2026",
    "MCP server install guide",
    "install MCP server Claude Desktop 2026",
    "install MCP server Cursor 2026",
    "install MCP server VS Code 2026",
    "claude_desktop_config.json 2026",
    "claude mcp add 2026",
    "MCP server configuration 2026",
    "Model Context Protocol setup 2026",
    "npx MCP server 2026",
    "MCP server setup guide 2026",
    "MCP-compatible clients 2026",
    "Claude Code MCP setup 2026",
    "Cursor MCP settings 2026",
    "MCP server not working 2026",
    "MCP server installation errors 2026",
    "best MCP servers to install 2026",
    "GitHub MCP Server install 2026",
    "free MCP install cheat sheet 2026",
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
    title: "How to Install MCP Servers on Windows, macOS & Linux (2026 Guide) | Free Cheat Sheet",
    description:
      "Stop wasting hours on JSON errors. Step-by-step for Windows, macOS, Linux – Claude Desktop, Cursor, VS Code. Free MCP Installation Quick Reference (worth $29).",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "How to Install MCP Servers on Windows, macOS, Linux – Free Cheat Sheet",
      },
    ],
    publishedTime: "2026-06-20T00:00:00Z",
    modifiedTime: "2026-06-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install MCP Servers (2026) | Free Premium Cheat Sheet",
    description:
      "Windows, macOS, Linux. Avoid the 5 worst installation errors. Get the exact config templates and the free cheat sheet (worth $29).",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is the easiest way to install an MCP server in 2026?",
    answer:
      "The easiest path is Claude Desktop with an npx-based MCP server. Install Node.js, paste the JSON block into claude_desktop_config.json, fully restart Claude, and test with a simple prompt. Works on Windows, macOS, and Linux. The free cheat sheet has the exact template with correct formatting.",
  },
  {
    question: "Why is my MCP server not appearing after I edit the config file?",
    answer:
      "Three most common causes: 1) Invalid JSON syntax (a trailing comma or missing bracket) in claude_desktop_config.json — use a JSON linter. 2) You didn't fully restart the client (Cmd+Q on macOS, or quit on Windows). 3) The server requires environment variables that aren't set. The cheat sheet covers all five top errors and fixes.",
  },
  {
    question: "Do I need different installation steps for Cursor and VS Code?",
    answer:
      "Yes. Claude Desktop uses a JSON config file, Cursor has a dedicated MCP Settings UI, and VS Code (with Claude Code) uses the 'claude mcp add' CLI command. The same MCP server works across all clients, but registration differs. The guide and cheat sheet detail each method.",
  },
  {
    question: "Which MCP server should I install first?",
    answer:
      "GitHub MCP Server for repository and PR access, then Context7 for version-specific live documentation. Both are official, well-maintained, and included in the cheat sheet's recommended first installs.",
  },
  {
    question: "Is the installation cheat sheet really free?",
    answer:
      "Yes. The MCP Installation Quick Reference (2026 Edition) normally sells for $29 on Gumroad, but it's available for free exclusively to readers of this guide. Instant Markdown download, no email required.",
  },
];

export const revalidate = 3600;

export default function HowToInstallMcpServersPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Install MCP Servers on Windows, macOS & Linux in 2026 Without Wasting Hours on JSON Errors",
    description:
      "Complete guide to install MCP servers on Windows, macOS, and Linux for Claude Desktop, Cursor, and VS Code. Includes the top 5 installation errors and fixes, per-client commands, and a free premium quick‑reference cheat sheet (normally $29).",
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: ogImage,
    datePublished: "2026-06-20T00:00:00Z",
    dateModified: "2026-06-21T00:00:00Z",
    wordCount: 2200,
    author: { "@type": "Person", name: "MCPIndex Founder", url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: "MCPIndex",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png`, width: 120, height: 120 },
    },
    about: {
      "@type": "Thing",
      name: "Model Context Protocol",
      description: "An open protocol that lets AI assistants connect to external tools via MCP servers.",
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free MCP Installation Quick Reference (Markdown) – normally sold for $29",
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
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
      { "@type": "ListItem", position: 3, name: "How to Install MCP Servers", item: canonical },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install MCP Servers for Windows, macOS, Linux – Claude Desktop, Cursor, VS Code",
    description: "Step-by-step installation guide with client-specific commands and free cheat sheet.",
    totalTime: "PT15M",
    tool: [
      { "@type": "HowToTool", name: "Claude Desktop or other MCP client" },
      { "@type": "HowToTool", name: "Node.js with npx" },
      { "@type": "HowToTool", name: "claude_desktop_config.json or Claude CLI" },
    ],
    step: [
      { "@type": "HowToStep", position: 1, name: "Choose the MCP server", text: "Pick an MCP server (e.g., GitHub)." },
      { "@type": "HowToStep", position: 2, name: "Install dependencies", text: "Install Node.js if using npx." },
      { "@type": "HowToStep", position: 3, name: "Register in client", text: "Use config JSON (Claude Desktop), MCP settings (Cursor), or claude mcp add (Claude Code/VS Code)." },
      { "@type": "HowToStep", position: 4, name: "Add credentials", text: "Set env vars or tokens." },
      { "@type": "HowToStep", position: 5, name: "Restart client", text: "Fully restart (quit and reopen) to load the MCP server." },
      { "@type": "HowToStep", position: 6, name: "Test connection", text: "Ask Claude to perform a task requiring the server." },
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
          <span className="text-zinc-300">How to Install MCP Servers (2026)</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Cross-Client Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              Free Premium Cheat Sheet
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            How to Install MCP Servers on Windows, macOS & Linux Without Wasting 3 Hours on JSON Errors
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            Step‑by‑step installation for Windows, macOS, and Linux covering Claude Desktop, Cursor, and VS Code.
            Stop losing hours to invalid JSON, wrong commands, and silent failures. Includes exact config templates
            and the premium MCP Installation Quick Reference — <span className="text-white font-medium">normally $29, free today</span>.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            Already familiar with the basics? Jump to the{" "}
            <Link href="#mcp-install-cheatsheet-download" className="text-zinc-300 underline underline-offset-4 hover:text-white font-medium">
              free cheat sheet download
            </Link>{" "}
            or see the{" "}
            <Link href="/claude-desktop-mcp-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              dedicated Claude Desktop guide
            </Link>.
          </p>
        </header>

        {/* باقي الأقسام كما هي مع تعديلات طفيفة لإبراز Windows حيثما أمكن */}
        <section id="installation-trap" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">1. The Installation Trap No One Warns You About</h2>
          <p className="text-zinc-400 leading-relaxed">
            You found the perfect MCP server on GitHub. The README looks decent. You copy the JSON snippet,
            paste it into <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">claude_desktop_config.json</code>,
            restart Claude Desktop… and nothing works. The server doesn't appear. Claude can't see it.
            You spend the next hour checking paths, reinstalling Node.js, and questioning your entire career.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I know this because I've lived it – on Windows, macOS, and Linux alike. I founded mcpindex.dev
            after helping thousands of developers install MCP servers across every platform — and I've catalogued
            the exact failure patterns that waste their time.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            <strong>Here's what nobody tells you:</strong> MCP server installation isn't hard because the protocol is
            complex. It's hard because every client uses a different registration method, the error messages
            are cryptic, and one missing restart can make you think the whole thing is broken.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            By the end of this guide, you'll have the exact commands, the right config templates, and a
            free premium cheat sheet that eliminates these problems permanently – no matter your operating system.
          </p>
        </section>

        {/* 2. Why Most Quick Setup Guides Cost You 3 Hours */}
        <section id="why-guides-cost-hours" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">2. Why Most "Quick Setup Guides" Actually Cost You 3 Hours</h2>
          <p className="text-zinc-400 leading-relaxed">
            The average developer loses <strong className="text-white">3 hours</strong> on their first MCP server installation.
            Not because the servers are hard to install, but because the documentation is fragmented
            across client-specific docs, outdated forum posts, and incomplete README files. This happens on Windows just as often as macOS.
          </p>
          <div className="space-y-3 mt-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-base font-semibold text-white">Time-Killer #1: Client Confusion</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-1">You read a guide for Claude Desktop, but you're using Cursor. The JSON config format is different, the settings panel is different. You copy-paste blindly and nothing works.</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-base font-semibold text-white">Time-Killer #2: JSON Syntax Errors</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-1">One trailing comma or missing bracket in claude_desktop_config.json, and the entire server silently fails to load. Claude won't tell you the JSON is invalid — it just won't show the server.</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-base font-semibold text-white">Time-Killer #3: The Restart Ritual</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-1">This is the most common failure. Developers save the config and expect the server to appear. Most clients require a full quit-and-reopen. Miss this step, and you'll debug a working configuration for an hour.</p>
            </div>
          </div>
        </section>

        {/* 3. Client Differences */}
        <section id="client-differences" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">3. The Real Difference Between Claude Desktop, Cursor, and VS Code</h2>
          <p className="text-zinc-400 leading-relaxed">
            Before we dive into commands, understand this: MCP server registration is fundamentally different across clients.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse" aria-label="MCP server registration methods comparison">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-300">
                  <th className="py-2 pr-4">Client</th>
                  <th className="py-2 pr-4">Registration Method</th>
                  <th className="py-2">Config Location</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800/50">
                  <td className="py-2 pr-4 font-medium text-white">Claude Desktop</td>
                  <td className="py-2 pr-4">claude_desktop_config.json</td>
                  <td className="py-2">~/Library/Application Support/Claude/ (macOS) or %APPDATA%\Claude\ (Windows)</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="py-2 pr-4 font-medium text-white">Cursor</td>
                  <td className="py-2 pr-4">MCP Settings UI</td>
                  <td className="py-2">Inside Cursor Settings &gt; MCP section</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="py-2 pr-4 font-medium text-white">Claude Code</td>
                  <td className="py-2 pr-4">claude mcp add CLI</td>
                  <td className="py-2">Terminal-based registration</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-white">VS Code</td>
                  <td className="py-2 pr-4">claude mcp add via integrated terminal</td>
                  <td className="py-2">Same as Claude Code, triggered inside editor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Standard Flow */}
        <section id="standard-installation-flow" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">4. The Standard MCP Installation Flow (Works on Windows, macOS, Linux)</h2>
          <ol className="space-y-4 mt-4">
            {[
              { step: "1", title: "Choose the MCP server to install", body: "Start with an official server. GitHub MCP Server is the best first install; Context7 is the best second." },
              { step: "2", title: "Install dependencies", body: "If the server uses npx, install Node.js first. For remote endpoints, confirm the URL and credentials." },
              { step: "3", title: "Register the server in your client", body: "Claude Desktop: edit claude_desktop_config.json. Cursor: use MCP Settings UI. Claude Code/VS Code: use claude mcp add." },
              { step: "4", title: "Add environment variables", body: "Paste API keys or tokens exactly as required. A single typo breaks the connection." },
              { step: "5", title: "Restart the client completely", body: "Not reload — full quit and reopen. On Windows, close the application window and relaunch. This step alone fixes 40% of issues." },
              { step: "6", title: "Test with a simple prompt", body: "Ask Claude to perform a task that clearly requires the server, like listing your GitHub repositories." },
            ].map((item) => (
              <li key={item.step} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs font-mono flex items-center justify-center mt-0.5">{item.step}</span>
                <div className="space-y-1.5">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 5. Claude Desktop */}
        <section id="install-mcp-servers-claude-desktop" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">5. Installing on Claude Desktop (Windows & macOS)</h2>
          <p className="text-zinc-400 text-sm">Config file locations: macOS ~/Library/Application Support/Claude/claude_desktop_config.json, Windows %APPDATA%\Claude\claude_desktop_config.json</p>
          <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed mt-2">
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
          <p className="text-zinc-400 text-sm">Save the file, fully restart Claude (Cmd+Q on macOS, or close window on Windows), then test with a prompt like "List my GitHub repositories".</p>
          <div className="pt-1">
            <Link href="/claude-desktop-mcp-setup" className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Full Claude Desktop MCP setup guide →
            </Link>
          </div>
        </section>

        {/* 6. Cursor, Claude Code, VS Code */}
        <section id="install-mcp-servers-other-clients" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl font-semibold">6. Installing on Cursor, Claude Code, and VS Code</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
            <h3 className="text-base font-semibold text-white">Cursor</h3>
            <p className="text-zinc-400 text-sm">Open Cursor Settings → MCP section → Add New MCP Server → paste the npx command and env vars → save → test.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
            <h3 className="text-base font-semibold text-white">Claude Code</h3>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-3 text-xs text-zinc-300">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>
            <p className="text-zinc-400 text-sm">Credentials must be configured separately per server documentation.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
            <h3 className="text-base font-semibold text-white">VS Code</h3>
            <p className="text-zinc-400 text-sm">Same as Claude Code, using the integrated terminal. The MCP workflow is triggered inside the editor.</p>
          </div>
        </section>

        {/* 7. Top 5 Errors */}
        <section id="common-mcp-errors" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">7. The 5 Errors That Break Every MCP Installation (And Their Exact Fixes)</h2>
          <div className="space-y-3 mt-4">
            {[
              { title: "Node.js is missing", fix: "Install Node.js from nodejs.org, restart terminal, try again." },
              { title: "Server not appearing in Claude Desktop", fix: "1) Validate JSON with a linter (jsonlint.com). 2) Fully quit and restart Claude (Cmd+Q on macOS, close window on Windows)." },
              { title: "Authentication failed", fix: "Double-check every character in your token. Copy-paste directly from provider dashboard." },
              { title: "Config works in Claude Desktop but not Cursor", fix: "Use Cursor's MCP Settings UI, not the JSON file." },
              { title: "Server installed but not responding", fix: "Confirm all env vars are set, then completely restart the client." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm mt-1"><span className="text-purple-400 font-medium">Fix:</span> {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Free Premium Cheat Sheet */}
        <section id="mcp-install-cheatsheet-download" className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 space-y-6 relative overflow-hidden scroll-mt-24">
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
                Get the MCP Installation Quick Reference (2026 Edition)
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                The exact Markdown cheat sheet I built for myself after cataloguing hundreds of MCP installations
                across Windows, macOS, and Linux. Normally sold for <span className="text-white line-through">$29</span> — free today.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Claude Desktop config template (zero syntax errors)</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Cursor MCP settings checklist</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> claude mcp add command syntax</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Top 5 installation errors & exact fixes</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Environment variable reference per server type</li>
              </ul>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadMcpInstallCheatsheet />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">Instant .md download. No email required.</p>
            </div>
          </div>
        </section>

        {/* 9. Conclusion */}
        <section className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">9. Conclusion: From Frustration to Connected in Under 15 Minutes</h2>
          <p className="text-zinc-400 leading-relaxed">Three things that will save you the most time, regardless of your OS:</p>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-start gap-2"><span className="text-purple-400">1.</span> Know your client's registration method — don't mix JSON with UI.</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">2.</span> Validate your JSON. One comma mistake breaks everything silently.</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">3.</span> Always restart the client completely. This alone solves 40% of problems.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed mt-3">
            <strong>Don't download the cheat sheet if you enjoy debugging invisible JSON errors for 3 hours.</strong> But if you want the exact commands, error fixes, and templates that have saved thousands of developers from installation hell, grab it now while it's still free.
          </p>
        </section>

        {/* Best first servers */}
        <section id="best-mcp-servers-to-install-first" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Best first MCP servers to install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "GitHub MCP Server", body: "Repositories, PRs, issues, and code search — the essential first install.", href: "/tools/github-mcp" },
              { title: "Context7 MCP Server", body: "Version-specific library docs for more accurate coding output.", href: "/tools/context7-mcp" },
              { title: "Desktop Commander MCP", body: "Local file access, shell automation, and direct project operations.", href: "/tools/desktop-commander-mcp" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Security tips */}
        <section id="mcp-server-security-tips" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">MCP server security tips before you install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Start with official servers", body: "Official MCP servers from GitHub, AWS, Supabase are easier to trust and maintain." },
              { title: "Use least-privilege tokens", body: "Only grant the minimum scopes each server needs to function." },
              { title: "Review local access carefully", body: "Servers that can run shell commands or edit files should be reviewed before installation." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedGuides
          items={[
            { title: "Claude Desktop MCP Setup", body: "Dedicated guide for Claude Desktop config.", href: "/claude-desktop-mcp-setup" },
            { title: "GitHub MCP Server Setup", body: "Real example with config JSON.", href: "/github-mcp-server-setup" },
            { title: "Best MCP Servers for Claude", body: "Top picks after your first install.", href: "/best-mcp-servers-for-claude" },
          ]}
        />

        {/* FAQ */}
        <section id="mcp-server-installation-faq" className="space-y-5 scroll-mt-24">
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

        {/* Final CTA */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Ready to install MCP servers without the headache?</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Browse the full directory of vetted MCP servers, each with config blocks, use cases, and setup steps.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link href="/tools" className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors">
              Browse all MCP servers
            </Link>
            <Link href="/best-mcp-servers-for-claude" className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors">
              Best MCP servers for Claude
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
