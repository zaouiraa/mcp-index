import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/how-to-install-mcp-servers`;

export const metadata: Metadata = {
  title: "How to Install MCP Servers in 2026 | MCPIndex",
  description:
    "Learn how to install MCP servers for Claude Desktop, Claude Code, Cursor, and VS Code. Includes setup steps, config examples, testing, and troubleshooting.",
  alternates: { canonical },
  openGraph: {
    title: "How to Install MCP Servers in 2026",
    description:
      "Step-by-step installation guide for MCP servers across Claude Desktop, Claude Code, Cursor, and VS Code.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install MCP Servers in 2026 | MCPIndex",
    description:
      "Step-by-step installation guide for MCP servers across Claude Desktop, Claude Code, Cursor, and VS Code.",
  },
};

const faqs = [
  {
    question: "What is the easiest way to install an MCP server?",
    answer:
      "For most users, the easiest path is Claude Desktop with an npx-based server config. You install Node.js, paste the server JSON into the Claude config file, restart the app, and test the connection with a simple prompt.",
  },
  {
    question: "Do all MCP servers use the same installation method?",
    answer:
      "No. Many use local stdio commands through npx, while others use remote URLs or OAuth-based flows depending on the client and the server type.",
  },
  {
    question: "Can I install MCP servers in Cursor and VS Code too?",
    answer:
      "Yes. Cursor supports MCP servers through its MCP settings UI, while Claude Code and its VS Code integration support MCP registration through the claude mcp add command.",
  },
  {
    question: "Why is my MCP server not working after installation?",
    answer:
      "The most common causes are invalid configuration syntax, missing Node.js, missing environment variables, permission problems, or not restarting the client after adding the server.",
  },
  {
    question: "Which MCP server should I install first?",
    answer:
      "GitHub MCP Server is usually the best first install for developers because it adds immediate value through repository access, pull requests, issues, and code search. Context7 is another strong early addition because it improves coding accuracy with live docs.",
  },
];

export const revalidate = 3600;

export default function HowToInstallMcpServersPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Install MCP Servers in 2026",
    description:
      "Step-by-step installation guide for MCP servers across Claude Desktop, Claude Code, Cursor, and VS Code.",
    url: canonical,
    publisher: {
      "@type": "Organization",
      name: "MCPIndex",
      url: baseUrl,
    },
    dateModified: new Date().toISOString().split("T")[0],
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
        name: "How to Install MCP Servers",
        item: canonical,
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
            This guide explains how to install MCP servers across the most common
            AI clients in 2026: Claude Desktop, Claude Code, Cursor, and VS Code.
            You will learn the standard setup flow, what changes between clients,
            how to test the connection, and how to fix common errors.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you are starting from scratch, read{" "}
            <Link
              href="/claude-desktop-mcp-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Claude Desktop MCP Setup
            </Link>
            . If you want a specific example, go to{" "}
            <Link
              href="/github-mcp-server-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              GitHub MCP Server Setup
            </Link>
            .
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How MCP server installation works</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most MCP servers are installed by giving your AI client a command or a
            remote endpoint that it can launch or connect to. In practice, that
            usually means one of three models: a local stdio server started with{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">npx</code>,
            a custom executable, or a remote MCP endpoint accessed through a URL.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The client-specific part is where you register that server. Claude
            Desktop uses a local JSON config file, Cursor uses its MCP settings
            interface, and Claude Code or VS Code commonly use the{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              claude mcp add
            </code>{" "}
            command.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">What you need before installing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "An MCP-compatible client",
                body: "Use Claude Desktop, Claude Code, Cursor, or a VS Code workflow that supports Claude MCP registration.",
              },
              {
                title: "Node.js for npm-based servers",
                body: "Many popular servers run through npx, so Node.js and npm need to be installed first.",
              },
              {
                title: "Credentials when required",
                body: "Some servers need tokens, API keys, or OAuth before they can access GitHub, Supabase, AWS, or other tools.",
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

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">The standard installation flow</h2>
          <ol className="space-y-4">
            {[
              {
                step: "1",
                title: "Choose the MCP server",
                body: "Pick a server that matches your workflow. GitHub MCP is the best first install for most developers, while Context7 is excellent for live docs.",
              },
              {
                step: "2",
                title: "Install dependencies",
                body: "If the server uses npx, install Node.js first. If it uses a remote endpoint, make sure you have the correct URL and any required credentials.",
              },
              {
                step: "3",
                title: "Register the server in your client",
                body: "Add the config through Claude Desktop JSON, Cursor MCP settings, or the Claude CLI depending on the client you use.",
              },
              {
                step: "4",
                title: "Add environment variables",
                body: "Paste API keys, access tokens, or profile values exactly as required by the server documentation.",
              },
              {
                step: "5",
                title: "Restart or reload the client",
                body: "Many installation problems happen because users save the config but do not fully reload the client.",
              },
              {
                step: "6",
                title: "Run a simple test prompt",
                body: "Ask Claude to do a task that clearly requires the new integration, such as listing repositories or opening a dashboard.",
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

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Claude Desktop</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best for beginners and still the most common setup path.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Claude Desktop loads MCP servers from a local config file:
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
              Save the file, fully restart Claude Desktop, then test the server with
              a prompt like “List my GitHub repositories.”
            </p>

            <div className="pt-1">
              <Link
                href="/claude-desktop-mcp-setup"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Full Claude Desktop guide →
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Cursor</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Good for developers who want MCP directly inside the editor.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <ol className="space-y-2 text-sm text-zinc-400">
              <li>1. Open Cursor Settings.</li>
              <li>2. Go to the MCP section.</li>
              <li>3. Choose Add New MCP Server.</li>
              <li>4. Paste the command or server config details.</li>
              <li>5. Add any required environment variables.</li>
              <li>6. Save and test the server from the MCP panel or chat interface.</li>
            </ol>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Cursor usually makes setup easier through its UI, especially for
              command-based local servers. If the server does not appear, confirm
              the command path, token values, and whether Cursor needs a restart.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in Claude Code</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best for terminal-first developers using Claude inside coding workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Claude Code commonly uses the CLI to register MCP servers. The basic
              flow looks like this:
            </p>

            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>

            <p className="text-zinc-400 text-sm leading-relaxed">
              After registration, Claude Code can use the server in terminal-driven
              workflows. If your server needs credentials, configure them according
              to the server documentation before testing.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Install MCP servers in VS Code</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Works best when paired with Claude Code or compatible MCP-aware tooling.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              In VS Code workflows that use Claude Code, you typically install or
              register MCP servers through the integrated terminal rather than a
              standalone graphical settings page.
            </p>

            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`claude mcp add github -- npx -y @github/github-mcp-server`}
            </pre>

            <p className="text-zinc-400 text-sm leading-relaxed">
              This makes VS Code setup very similar to Claude Code setup. The main
              difference is that you trigger and use the workflow inside the editor.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Best first MCP servers to install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "GitHub MCP",
                body: "Best first install for repositories, pull requests, issues, and code search.",
                href: "/tools/github-mcp",
              },
              {
                title: "Context7 MCP",
                body: "Best second install for version-specific library docs and more accurate coding output.",
                href: "/tools/context7-mcp",
              },
              {
                title: "Desktop Commander",
                body: "Best for local file access, shell automation, and direct project operations.",
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

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Common installation errors</h2>
          <div className="space-y-3">
            {[
              {
                title: "Node.js is missing",
                body: "If the server uses npx and your machine does not have Node installed, the command cannot start.",
              },
              {
                title: "Config syntax is invalid",
                body: "JSON formatting errors are especially common in Claude Desktop config files.",
              },
              {
                title: "Credentials are wrong",
                body: "A typo in an API key, token, or profile name can make the server appear installed but unusable.",
              },
              {
                title: "The wrong client flow was used",
                body: "A JSON config that works in Claude Desktop is not always entered the same way in Cursor or Claude Code.",
              },
              {
                title: "The client was not restarted",
                body: "Many MCP clients need a restart or reload before newly added servers become available.",
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

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Security tips before you install</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Start with official servers",
                body: "Official servers from vendors like GitHub, AWS, and Supabase are usually easier to trust and maintain.",
              },
              {
                title: "Use least-privilege tokens",
                body: "Only give each MCP server the minimum scopes it needs to do its job.",
              },
              {
                title: "Be cautious with local access",
                body: "Servers that can run shell commands or edit files should be reviewed carefully before use.",
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

        <section className="space-y-5">
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

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Find ready-to-install MCP tools</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Browse the MCPIndex directory for setup-ready tool pages with config
            blocks, use cases, setup steps, and category navigation.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              Browse all tools
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
