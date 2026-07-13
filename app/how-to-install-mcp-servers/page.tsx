import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/how-to-install-mcp-servers`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent("How to Install MCP Servers")}&description=${encodeURIComponent("Cross-client installation for Cursor, Claude Code, and VS Code.")}`;

export const metadata: Metadata = {
  title: "How to Install MCP Servers (2026 Guide) | Claude, Cursor, VS Code",
  description:
    "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code in 2026. Step-by-step claude_desktop_config.json setup, claude mcp add commands, npx configuration, testing, and troubleshooting.",
  keywords: [
    "how to install MCP servers",
    "install MCP server Claude Desktop",
    "install MCP server Cursor",
    "install MCP server VS Code",
    "claude_desktop_config.json",
    "claude mcp add",
    "MCP server configuration",
    "Model Context Protocol setup",
    "npx MCP server",
    "MCP server setup guide",
    "MCP-compatible clients",
    "Claude Code MCP setup",
    "Cursor MCP settings",
    "MCP server not working",
    "MCP server installation errors",
    "best MCP servers to install",
    "GitHub MCP Server install",
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
      "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code. claude_desktop_config.json, claude mcp add, npx setup, and troubleshooting.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "How to Install MCP Servers for Claude Desktop, Cursor, and VS Code in 2026",
      },
    ],
    publishedTime: "2025-01-15T00:00:00Z",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install MCP Servers (2026 Guide) | Claude, Cursor, VS Code",
    description:
      "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code. claude_desktop_config.json, claude mcp add, npx setup.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is the easiest way to install an MCP server?",
    answer:
      "For most users, the easiest path is Claude Desktop with an npx-based MCP server config. You install Node.js, paste the MCP server JSON into the claude_desktop_config.json file, restart the app, and test the Model Context Protocol connection with a simple prompt.",
  },
  {
    question: "Do all MCP servers use the same installation method?",
    answer:
      "No. Many MCP servers use local stdio commands through npx, while others use remote URLs or OAuth-based flows depending on the MCP-compatible client and the MCP server type.",
  },
  {
    question: "Can I install MCP servers in Cursor and VS Code?",
    answer:
      "Yes. Cursor supports MCP servers through its MCP settings UI, while Claude Code and its VS Code integration support MCP server registration through the claude mcp add command.",
  },
  {
    question: "Why is my MCP server not working after installation?",
    answer:
      "The most common causes are invalid claude_desktop_config.json syntax, missing Node.js for npx-based MCP servers, missing environment variables, permission problems, or not restarting the MCP-compatible client after adding the MCP server.",
  },
  {
    question: "Which MCP server should I install first?",
    answer:
      "GitHub MCP Server is usually the best first MCP server to install for developers because it adds immediate value through repository access, pull requests, issues, and code search. Context7 MCP Server is another strong early addition because it improves coding accuracy with live docs.",
  },
];

export const revalidate = 3600;

export default function HowToInstallMcpServersPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Install MCP Servers in 2026",
    description:
      "Complete guide to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code. Step-by-step claude_desktop_config.json, claude mcp add, npx configuration, testing, and troubleshooting.",
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: ogImage,
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: new Date().toISOString().split("T")[0],
    wordCount: 1450,
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
      description:
        "An open protocol that lets AI assistants like Claude connect to external tools, data sources, and services through standardized MCP servers.",
      url: "https://modelcontextprotocol.io",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${baseUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Install MCP Servers",
        item: canonical,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install MCP Servers for Claude Desktop, Cursor, and VS Code",
    description:
      "Step-by-step guide to install Model Context Protocol servers across Claude Desktop, Claude Code, Cursor, and VS Code using claude_desktop_config.json and claude mcp add commands.",
    totalTime: "PT15M",
    tool: [
      {
        "@type": "HowToTool",
        name: "Claude Desktop or other MCP-compatible client",
      },
      {
        "@type": "HowToTool",
        name: "Node.js with npx (for npm-based MCP servers)",
      },
      {
        "@type": "HowToTool",
        name: "claude_desktop_config.json or Claude CLI",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose the MCP server to install",
        text: "Pick an MCP server that matches your workflow. GitHub MCP Server is the best first install for most developers.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Install dependencies like Node.js",
        text: "If the MCP server uses npx, install Node.js first. If it uses a remote endpoint, prepare the URL and credentials.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Register the MCP server in your client",
        text: "Add the MCP server config through claude_desktop_config.json for Claude Desktop, MCP settings UI for Cursor, or claude mcp add command for Claude Code and VS Code.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Add environment variables and credentials",
        text: "Paste API keys, access tokens, or profile values exactly as required by the MCP server documentation.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Restart the MCP-compatible client",
        text: "Fully restart Claude Desktop, Cursor, or VS Code after saving the MCP server configuration.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Test the MCP server connection",
        text: "Ask Claude to do a task that clearly requires the new MCP server integration, such as listing repositories or opening a dashboard.",
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
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">How to Install MCP Servers</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Cross-Client Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            How to Install MCP Servers
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            This guide explains how to install Model Context Protocol (MCP) servers
            across the most common MCP-compatible clients in 2026: Claude Desktop,
            Claude Code, Cursor, and VS Code. You will learn the standard MCP server
            setup flow, what changes between clients, how to test the MCP server
            connection, and how to fix common MCP server installation errors.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you are only using Claude Desktop, read the dedicated{" "}
            <Link
              href="/claude-desktop-mcp-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white font-medium"
            >
              Claude Desktop MCP Setup
            </Link>{" "}
            guide. This page focuses on cross-client installation for Cursor, Claude Code, and VS Code. If you want a specific example, go to{" "}
            <Link
              href="/github-mcp-server-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
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
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
              >
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
              {
                step: "1",
                title: "Choose the MCP server to install",
                body: "Pick an MCP server that matches your workflow. GitHub MCP Server is the best first install for most developers, while Context7 MCP Server is excellent for live docs.",
              },
              {
                step: "2",
                title: "Install dependencies like Node.js",
                body: "If the MCP server uses npx, install Node.js first. If it uses a remote endpoint, make sure you have the correct URL and any required credentials for the MCP server.",
              },
              {
                step: "3",
                title: "Register the MCP server in your client",
                body: "Add the MCP server config through claude_desktop_config.json for Claude Desktop, Cursor MCP settings, or the claude mcp add command depending on the MCP-compatible client you use.",
              },
              {
                step: "4",
                title: "Add MCP server environment variables",
                body: "Paste API keys, access tokens, or profile values exactly as required by the MCP server documentation.",
              },
              {
                step: "5",
                title: "Restart or reload the MCP-compatible client",
                body: "Many MCP server installation problems happen because users save the config but do not fully reload the client.",
              },
              {
                step: "6",
                title: "Run a simple MCP server test prompt",
                body: "Ask Claude to do a task that clearly requires the new MCP server integration, such as listing repositories or opening a dashboard.",
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
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="install-mcp-servers-claude-desktop" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Claude Desktop</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The most common path. For a complete Claude Desktop walkthrough, see the dedicated guide below.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Claude Desktop loads MCP servers from a local claude_desktop_config.json file:
            </p>
            <p className="text-zinc-400 text-sm">
              macOS:{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                ~/Library/Application Support/Claude/claude_desktop_config.json
              </code>
            </p>
            <p className="text-zinc-400 text-sm">
              Windows:{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                %APPDATA%\Claude\claude_desktop_config.json
              </code>
            </p>

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

            <p className="text-zinc-400 text-sm leading-relaxed">
              Save the claude_desktop_config.json file, fully restart Claude Desktop,
              then test the MCP server with a prompt like "List my GitHub repositories."
            </p>

            <div className="pt-1">
              <Link
                href="/claude-desktop-mcp-setup"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Full Claude Desktop MCP setup guide →
              </Link>
            </div>
          </div>
        </section>

        <section id="install-mcp-servers-cursor" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Cursor</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Good for developers who want MCP servers directly inside the editor.
            </p>
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

            <p className="text-zinc-400 text-sm leading-relaxed">
              Cursor usually makes MCP server setup easier through its UI, especially
              for npx-based command local servers. If the MCP server does not appear,
              confirm the command path, token values, and whether Cursor needs a restart.
            </p>
          </div>
        </section>

        <section id="install-mcp-servers-claude-code" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Claude Code</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best for terminal-first developers using Claude inside coding workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Claude Code commonly uses the claude mcp add CLI command to register
              MCP servers. The basic MCP server setup flow looks like this:
            </p>

            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>

            <p className="text-zinc-400 text-sm leading-relaxed">
              After MCP server registration, Claude Code can use the server in
              terminal-driven workflows. If your MCP server needs credentials,
              configure them according to the MCP server documentation before testing.
            </p>
          </div>
        </section>

        <section id="install-mcp-servers-vs-code" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in VS Code</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Works best when paired with Claude Code or compatible MCP-aware tooling.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              In VS Code workflows that use Claude Code, you typically install or
              register MCP servers through the integrated terminal using the
              claude mcp add command rather than a standalone graphical settings page.
            </p>

            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>

            <p className="text-zinc-400 text-sm leading-relaxed">
              This makes VS Code MCP server setup very similar to Claude Code setup.
              The main difference is that you trigger and use the Model Context
              Protocol workflow inside the editor.
            </p>
          </div>
        </section>

        <section id="best-mcp-servers-to-install-first" className="space-y-5">
          <h2 className="text-2xl font-semibold">Best first MCP servers to install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "GitHub MCP Server",
                body: "Best first MCP server to install for repositories, pull requests, issues, and code search.",
                href: "/tools/github-mcp",
              },
              {
                title: "Context7 MCP Server",
                body: "Best second MCP server to install for version-specific library docs and more accurate coding output.",
                href: "/tools/context7-mcp",
              },
              {
                title: "Desktop Commander MCP",
                body: "Best MCP server for local file access, shell automation, and direct project operations.",
                href: "/tools/desktop-commander-mcp",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block"
              >
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
              {
                title: "Node.js is missing for npx MCP servers",
                body: "If the MCP server uses npx and your machine does not have Node installed, the npx command cannot start the MCP server.",
              },
              {
                title: "claude_desktop_config.json syntax is invalid",
                body: "JSON formatting errors in the MCP server config are especially common in Claude Desktop config files.",
              },
              {
                title: "MCP server credentials are wrong",
                body: "A typo in an API key, token, or profile name can make the MCP server appear installed but unusable.",
              },
              {
                title: "The wrong MCP-compatible client flow was used",
                body: "A claude_desktop_config.json that works in Claude Desktop is not always entered the same way in Cursor MCP settings or with claude mcp add.",
              },
              {
                title: "The MCP-compatible client was not restarted",
                body: "Many MCP clients need a restart or reload before newly added MCP servers become available through the Model Context Protocol.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
              >
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
              {
                title: "Start with official MCP servers",
                body: "Official MCP servers from vendors like GitHub, AWS, and Supabase are usually easier to trust and maintain.",
              },
              {
                title: "Use least-privilege tokens for MCP servers",
                body: "Only give each MCP server the minimum scopes it needs to do its job through the Model Context Protocol.",
              },
              {
                title: "Be cautious with local MCP server access",
                body: "MCP servers that can run shell commands or edit files should be reviewed carefully before installation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
              >
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
      body: "The dedicated guide for Claude Desktop claude_desktop_config.json configuration.",
      href: "/claude-desktop-mcp-setup",
    },
    {
      title: "GitHub MCP Server Setup",
      body: "Concrete example of installing an MCP server with a real claude_desktop_config.json example.",
      href: "/github-mcp-server-setup",
    },
    {
      title: "Best MCP Servers for Claude",
      body: "Find the best MCP servers to install after your first Model Context Protocol setup.",
      href: "/best-mcp-servers-for-claude",
    },
  ]}
/>
        <section id="mcp-server-installation-faq" className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions about installing MCP servers</h2>
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

        <section id="find-ready-to-install-mcp-tools" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Find ready-to-install MCP servers</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Browse the MCPIndex directory for setup-ready MCP server pages with
            claude_desktop_config.json blocks, use cases, Model Context Protocol
            setup steps, and category navigation.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              Browse all MCP servers
            </Link>
            <Link
              href="/best-mcp-servers-for-claude"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors"
            >
              Best MCP servers for Claude
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
