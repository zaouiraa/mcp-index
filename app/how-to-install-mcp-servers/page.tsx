import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";
import { DownloadMcpInstallCheatsheet } from "@/components/download-mcp-install-cheatsheet";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/how-to-install-mcp-servers`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent("How to Install MCP Servers (2026)")}&description=${encodeURIComponent("Cross-client guide + free cheat sheet for Claude, Cursor, VS Code.")}`;

export const metadata: Metadata = {
  title: "How to Install MCP Servers (2026 Guide) | Claude, Cursor, VS Code",
  description:
    "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code in 2026. Step-by-step claude_desktop_config.json, claude mcp add, npx setup, testing, and troubleshooting. Free quick‑reference cheat sheet included.",
  keywords: [
    "how to install MCP servers 2026",
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
    title: "How to Install MCP Servers (2026 Guide) | Claude, Cursor, VS Code",
    description:
      "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code. Free quick‑reference cheat sheet included.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "How to Install MCP Servers for Claude, Cursor, VS Code in 2026",
      },
    ],
    publishedTime: "2026-06-20",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install MCP Servers (2026 Guide) | Free Cheat Sheet",
    description:
      "Complete guide: claude_desktop_config.json, claude mcp add, Cursor settings, and troubleshooting. Free cheat sheet included.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is the easiest way to install an MCP server in 2026?",
    answer:
      "The easiest path is Claude Desktop with an npx-based MCP server config. Install Node.js, paste the JSON block into claude_desktop_config.json, restart, and test. Our free cheat sheet has the exact template.",
  },
  {
    question: "Do all MCP servers use the same installation method?",
    answer:
      "No. Many use local stdio (npx, Python, etc.), while others use remote endpoints or OAuth. The client configuration UI/CLI adapts accordingly.",
  },
  {
    question: "Can I install MCP servers in Cursor and VS Code?",
    answer:
      "Yes. Cursor has a dedicated MCP settings UI; VS Code with Claude Code uses 'claude mcp add'. Both are covered in the guide and our cheat sheet.",
  },
  {
    question: "Why is my MCP server not working after installation?",
    answer:
      "Common causes: invalid JSON, missing Node.js, wrong credentials, or not restarting the client. The cheat sheet lists the top 5 errors and fixes.",
  },
  {
    question: "Which MCP server should I install first?",
    answer:
      "GitHub MCP Server for repository/PR access, then Context7 for live docs. Both are included in our recommendations and the cheat sheet.",
  },
];

export const revalidate = 3600;

export default function HowToInstallMcpServersPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Install MCP Servers in 2026",
    description:
      "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code. Includes free downloadable quick‑reference cheat sheet.",
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: ogImage,
    datePublished: "2026-06-20",
    dateModified: new Date().toISOString().split("T")[0],
    wordCount: 1800,
    author: { "@type": "Organization", name: "MCPIndex Team", url: baseUrl },
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
      description: "Free MCP Server Installation Quick Reference (Markdown)",
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
    name: "How to Install MCP Servers for Claude Desktop, Cursor, and VS Code",
    description: "Step-by-step guide with per-client commands and free cheat sheet.",
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
      { "@type": "HowToStep", position: 5, name: "Restart client", text: "Fully restart to load MCP server." },
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
              Free Cheat Sheet
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            How to Install MCP Servers (2026)
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            This 2026 guide covers installing Model Context Protocol servers on Claude Desktop,
            Claude Code, Cursor, and VS Code. Get step‑by‑step instructions, per‑client commands,
            and a free downloadable cheat sheet to keep at your desk.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you are only using Claude Desktop, read the dedicated{" "}
            <Link href="/claude-desktop-mcp-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white font-medium">
              Claude Desktop MCP Setup
            </Link>{" "}
            guide. This page focuses on cross-client installation for Cursor, Claude Code, and VS Code. If you want a specific example, go to{" "}
            <Link href="/github-mcp-server-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">
              GitHub MCP Server Setup
            </Link>
            .
          </p>
        </header>

        <section id="how-mcp-server-installation-works" className="space-y-4">
          <h2 className="text-2xl font-semibold">How MCP server installation works</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most MCP servers are installed by giving your AI client a command or a
            remote endpoint that it can launch or connect to through the Model
            Context Protocol. In practice, that usually means one of three models:
            a local stdio MCP server started with{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">npx</code>,
            a custom executable, or a remote MCP endpoint accessed through a URL.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The client-specific part is where you register that MCP server. Claude
            Desktop uses a local claude_desktop_config.json file, Cursor uses its
            MCP settings interface, and Claude Code or VS Code commonly use the{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              claude mcp add
            </code>{" "}
            command for MCP server registration.
          </p>
        </section>

        <section id="what-you-need-before-installing-mcp-servers" className="space-y-5">
          <h2 className="text-2xl font-semibold">What you need before installing MCP servers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "An MCP-compatible client",
                body: "Use Claude Desktop, Claude Code, Cursor, or a VS Code workflow that supports Model Context Protocol server registration.",
              },
              {
                title: "Node.js for npx MCP servers",
                body: "Many popular MCP servers run through npx, so Node.js and npm need to be installed first for these MCP server packages.",
              },
              {
                title: "Credentials when required",
                body: "Some MCP servers need tokens, API keys, or OAuth before they can access GitHub, Supabase, AWS, or other tools via the Model Context Protocol.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="standard-mcp-server-installation-flow" className="space-y-5">
          <h2 className="text-2xl font-semibold">The standard MCP server installation flow</h2>
          <ol className="space-y-4">
            {[
              { step: "1", title: "Choose the MCP server to install", body: "Pick an MCP server that matches your workflow. GitHub MCP Server is the best first install for most developers, while Context7 MCP Server is excellent for live docs." },
              { step: "2", title: "Install dependencies like Node.js", body: "If the MCP server uses npx, install Node.js first. If it uses a remote endpoint, make sure you have the correct URL and any required credentials for the MCP server." },
              { step: "3", title: "Register the MCP server in your client", body: "Add the MCP server config through claude_desktop_config.json for Claude Desktop, Cursor MCP settings, or the claude mcp add command depending on the MCP-compatible client you use." },
              { step: "4", title: "Add MCP server environment variables", body: "Paste API keys, access tokens, or profile values exactly as required by the MCP server documentation." },
              { step: "5", title: "Restart or reload the MCP-compatible client", body: "Many MCP server installation problems happen because users save the config but do not fully reload the client." },
              { step: "6", title: "Run a simple MCP server test prompt", body: "Ask Claude to do a task that clearly requires the new MCP server integration, such as listing repositories or opening a dashboard." },
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

        <section id="install-mcp-servers-claude-desktop" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Claude Desktop</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">The most common path. For a complete Claude Desktop walkthrough, see the dedicated guide below.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">Claude Desktop loads MCP servers from a local claude_desktop_config.json file:</p>
            <p className="text-zinc-400 text-sm">macOS: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code></p>
            <p className="text-zinc-400 text-sm">Windows: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">%APPDATA%\Claude\claude_desktop_config.json</code></p>
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
            <p className="text-zinc-400 text-sm leading-relaxed">Save the file, fully restart Claude Desktop, then test with a prompt like &quot;List my GitHub repositories.&quot;</p>
            <div className="pt-1">
              <Link href="/claude-desktop-mcp-setup" className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Full Claude Desktop MCP setup guide →
              </Link>
            </div>
          </div>
        </section>

        <section id="install-mcp-servers-cursor" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Cursor</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Good for developers who want MCP servers directly inside the editor.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <ol className="space-y-2 text-sm text-zinc-400">
              <li>1. Open Cursor Settings.</li>
              <li>2. Go to the MCP section.</li>
              <li>3. Choose Add New MCP Server.</li>
              <li>4. Paste the npx command or MCP server config details.</li>
              <li>5. Add any required MCP server environment variables.</li>
              <li>6. Save and test the MCP server from the MCP panel or chat interface.</li>
            </ol>
            <p className="text-zinc-400 text-sm leading-relaxed">Cursor usually makes MCP server setup easier through its UI, especially for npx-based command local servers. If the MCP server does not appear, confirm the command path, token values, and whether Cursor needs a restart.</p>
          </div>
        </section>

        <section id="install-mcp-servers-claude-code" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Claude Code</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Best for terminal-first developers using Claude inside coding workflows.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">Claude Code commonly uses the claude mcp add CLI command to register MCP servers. The basic MCP server setup flow looks like this:</p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>
            <p className="text-zinc-400 text-sm leading-relaxed">After MCP server registration, Claude Code can use the server in terminal-driven workflows. If your MCP server needs credentials, configure them according to the MCP server documentation before testing.</p>
          </div>
        </section>

        <section id="install-mcp-servers-vs-code" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in VS Code</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Works best when paired with Claude Code or compatible MCP-aware tooling.</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">In VS Code workflows that use Claude Code, you typically install or register MCP servers through the integrated terminal using the claude mcp add command rather than a standalone graphical settings page.</p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>
            <p className="text-zinc-400 text-sm leading-relaxed">This makes VS Code MCP server setup very similar to Claude Code setup. The main difference is that you trigger and use the Model Context Protocol workflow inside the editor.</p>
          </div>
        </section>

        <section id="best-mcp-servers-to-install-first" className="space-y-5">
          <h2 className="text-2xl font-semibold">Best first MCP servers to install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "GitHub MCP Server", body: "Best first MCP server to install for repositories, pull requests, issues, and code search.", href: "/tools/github-mcp" },
              { title: "Context7 MCP Server", body: "Best second MCP server to install for version-specific library docs and more accurate coding output.", href: "/tools/context7-mcp" },
              { title: "Desktop Commander MCP", body: "Best MCP server for local file access, shell automation, and direct project operations.", href: "/tools/desktop-commander-mcp" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="common-mcp-server-installation-errors" className="space-y-5">
          <h2 className="text-2xl font-semibold">Common MCP server installation errors</h2>
          <div className="space-y-3">
            {[
              { title: "Node.js is missing for npx MCP servers", body: "If the MCP server uses npx and your machine does not have Node installed, the npx command cannot start the MCP server." },
              { title: "claude_desktop_config.json syntax is invalid", body: "JSON formatting errors in the MCP server config are especially common in Claude Desktop config files." },
              { title: "MCP server credentials are wrong", body: "A typo in an API key, token, or profile name can make the MCP server appear installed but unusable." },
              { title: "The wrong MCP-compatible client flow was used", body: "A claude_desktop_config.json that works in Claude Desktop is not always entered the same way in Cursor MCP settings or with claude mcp add." },
              { title: "The MCP-compatible client was not restarted", body: "Many MCP clients need a restart or reload before newly added MCP servers become available through the Model Context Protocol." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="mcp-server-security-tips" className="space-y-5">
          <h2 className="text-2xl font-semibold">MCP server security tips before you install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Start with official MCP servers", body: "Official MCP servers from vendors like GitHub, AWS, and Supabase are usually easier to trust and maintain." },
              { title: "Use least-privilege tokens for MCP servers", body: "Only give each MCP server the minimum scopes it needs to do its job through the Model Context Protocol." },
              { title: "Be cautious with local MCP server access", body: "MCP servers that can run shell commands or edit files should be reviewed carefully before installation." },
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
            {
              title: "Claude Desktop MCP Setup",
              body: "Dedicated guide for Claude Desktop config.",
              href: "/claude-desktop-mcp-setup",
            },
            {
              title: "GitHub MCP Server Setup",
              body: "Real example with config JSON.",
              href: "/github-mcp-server-setup",
            },
            {
              title: "Best MCP Servers for Claude",
              body: "Top picks after your first install.",
              href: "/best-mcp-servers-for-claude",
            },
          ]}
        />

        {/* صندوق التحميل المجاني */}
        <section className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-zinc-700 text-zinc-300 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                Free 2026 Resource
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Get the MCP Installation Quick Reference
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                One‑page Markdown cheat sheet: exact commands for Claude Desktop,
                Cursor, and VS Code, plus the top 5 installation errors and fixes.
                Print it or keep it open while you set up.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Claude Desktop config template</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Cursor MCP settings steps</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> claude mcp add command syntax</li>
              </ul>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadMcpInstallCheatsheet />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">Instant .md download. No email required.</p>
            </div>
          </div>
        </section>

        <section id="mcp-server-installation-faq" className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions (2026)</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden">
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
          <h2 className="text-2xl font-semibold">Find ready‑to‑install MCP servers</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Browse the full directory with config blocks, use cases, and setup steps.
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
