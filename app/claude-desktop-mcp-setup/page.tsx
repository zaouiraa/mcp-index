import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/claude-desktop-mcp-setup`;

export const metadata: Metadata = {
  title: "Claude Desktop MCP Setup in 2026 | MCPIndex",
  description:
    "Learn how to set up MCP servers in Claude Desktop step by step. Includes config file paths, JSON examples, Node.js requirements, testing, and troubleshooting.",
  alternates: { canonical },
  openGraph: {
    title: "Claude Desktop MCP Setup in 2026",
    description:
      "Step-by-step guide to install and configure MCP servers in Claude Desktop.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Desktop MCP Setup in 2026 | MCPIndex",
    description:
      "Step-by-step guide to install and configure MCP servers in Claude Desktop.",
  },
};

const faqs = [
  {
    question: "What is Claude Desktop MCP setup?",
    answer:
      "Claude Desktop MCP setup is the process of connecting Claude Desktop to Model Context Protocol servers through a local configuration file. Once configured, Claude can use external tools such as GitHub, local file systems, databases, and APIs directly from the chat interface.",
  },
  {
    question: "Do I need Node.js to use MCP in Claude Desktop?",
    answer:
      "For most popular MCP servers, yes. Many servers are distributed as npm packages and run through npx, so Node.js needs to be installed and available in your system PATH.",
  },
  {
    question: "Where is the Claude Desktop MCP config file?",
    answer:
      "On macOS, the config file is usually at ~/Library/Application Support/Claude/claude_desktop_config.json. On Windows, it is usually at %APPDATA%\\Claude\\claude_desktop_config.json.",
  },
  {
    question: "Why is my MCP server not appearing in Claude Desktop?",
    answer:
      "The most common reasons are invalid JSON, missing dependencies such as Node.js, incorrect environment variables, or not fully restarting Claude Desktop after editing the configuration file.",
  },
  {
    question: "Can I add more than one MCP server?",
    answer:
      "Yes. Claude Desktop supports multiple MCP servers inside the same mcpServers object. Most users start with 2 to 5 servers depending on their workflow.",
  },
  {
    question: "Which MCP server should I install first?",
    answer:
      "For most developers, GitHub MCP Server is the best first install because it connects Claude to repositories, pull requests, issues, and code search. Context7 is another strong early addition because it improves coding accuracy with live documentation.",
  },
];

export default function ClaudeDesktopMcpSetupPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Claude Desktop MCP Setup in 2026",
    description:
      "Step-by-step guide to install and configure MCP servers in Claude Desktop.",
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
        name: "Claude Desktop MCP Setup",
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
          <span className="text-zinc-300">Claude Desktop MCP Setup</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Beginner Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Claude Desktop MCP Setup
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            This guide explains how to set up MCP servers in Claude Desktop step by
            step. You will install the dependencies, locate the Claude config file,
            add your first server, restart Claude, and test that everything works.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you want a concrete example after this tutorial, start with{" "}
            <Link
              href="/github-mcp-server-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              GitHub MCP Server Setup
            </Link>
            . For broader recommendations, see{" "}
            <Link
              href="/best-mcp-servers-for-claude"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Best MCP Servers for Claude
            </Link>
            .
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What MCP does in Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            MCP stands for Model Context Protocol. It is the layer that lets Claude
            Desktop connect to tools outside the chat window, including GitHub,
            local files, databases, documentation sources, monitoring systems, and
            productivity apps.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Without MCP, Claude can only respond with the information already in the
            conversation. With MCP, Claude can read live data, inspect your files,
            run supported tools, and complete real workflows more accurately.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">What you need before setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Claude Desktop installed",
                body: "You need the Claude Desktop application installed and signed in before you can connect any MCP server.",
              },
              {
                title: "Node.js installed",
                body: "Most MCP servers are launched with npx, so Node.js must be installed and available from your terminal.",
              },
              {
                title: "At least one MCP config block",
                body: "Every MCP server provides a JSON block with command, args, and sometimes environment variables.",
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
          <h2 className="text-2xl font-semibold">Step 1: Install Node.js</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most MCP servers use npm packages and are launched through{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">npx</code>.
            That means Node.js is required for the most common setup flow.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Quick check</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Open your terminal and run:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`node -v
npm -v
npx -v`}
            </pre>
            <p className="text-zinc-400 text-sm leading-relaxed">
              If these commands fail, install the latest LTS version of Node.js
              before continuing.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 2: Open the Claude Desktop config file</h2>
          <p className="text-zinc-400 leading-relaxed">
            Claude Desktop loads MCP servers from a local JSON file named{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              claude_desktop_config.json
            </code>
            . This file contains the list of MCP servers you want Claude to start
            on launch.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Default config paths</h3>
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
          </div>

          <p className="text-zinc-400 leading-relaxed">
            In many Claude Desktop builds, you can open the app, go to the developer
            section, and use the built-in option to edit the config file directly.
            That is usually the fastest path for beginners.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 3: Add your first MCP server</h2>
          <p className="text-zinc-400 leading-relaxed">
            If you are just getting started, GitHub MCP Server is the best first
            install because it gives Claude immediate access to repositories, pull
            requests, issues, and code search.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-white font-medium text-sm">Example config</p>
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
              Save the file after replacing{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                YOUR_GITHUB_TOKEN
              </code>{" "}
              with your real token.
            </p>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            You can also add multiple servers at once by placing them all inside the{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              mcpServers
            </code>{" "}
            object.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 4: Restart Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            After saving the config, fully quit Claude Desktop and reopen it. Many
            setup failures happen because users edit the file correctly but do not
            perform a full restart, so the old session keeps running.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 5: Test that your MCP server works</h2>
          <p className="text-zinc-400 leading-relaxed">
            Once Claude restarts, try a simple prompt that clearly requires the new
            integration.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Example test prompts</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                List my GitHub repositories.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Show me the latest pull requests in this repo.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Search this codebase for auth middleware.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Adding multiple MCP servers</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most users get the best results from a small, focused stack. A common
            combination is:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "GitHub MCP",
                body: "For repositories, pull requests, issues, and code search.",
                href: "/tools/github-mcp",
              },
              {
                title: "Context7 MCP",
                body: "For live, version-specific library documentation.",
                href: "/tools/context7-mcp",
              },
              {
                title: "Desktop Commander",
                body: "For local file operations, shell commands, and automation.",
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

          <p className="text-zinc-400 leading-relaxed">
            Start small. Too many servers at once can add unnecessary noise and make
            it harder to debug configuration problems.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Common Claude Desktop MCP errors</h2>
          <div className="space-y-3">
            {[
              {
                title: "Invalid JSON",
                body: "A missing comma, quote, or brace in the config file can prevent Claude from loading your MCP setup correctly.",
              },
              {
                title: "Node.js is not installed",
                body: "If npx is unavailable, Claude cannot launch npm-based MCP servers.",
              },
              {
                title: "Missing environment variable",
                body: "Many servers need API keys or tokens. If the env block is incomplete, the server may fail silently or load without working tools.",
              },
              {
                title: "Wrong file path",
                body: "Make sure you edited the actual Claude Desktop config file and not a copy in another folder.",
              },
              {
                title: "Claude was not restarted",
                body: "Always do a full quit and reopen after making config changes.",
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
          <h2 className="text-2xl font-semibold">Security tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Use least privilege",
                body: "Only give each MCP server the token scopes and access level it actually needs.",
              },
              {
                title: "Be careful with local-access tools",
                body: "Servers that can read files or run shell commands should be installed only when you understand the risk.",
              },
              {
                title: "Rotate tokens",
                body: "If you use API keys or access tokens, rotate them regularly and remove unused credentials.",
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
          <h2 className="text-2xl font-semibold">Browse ready-to-use MCP tools</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Explore the full MCPIndex directory for copy-ready config blocks,
            setup steps, use cases, and category pages across GitHub, databases,
            design, monitoring, security, and productivity.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              Browse all tools
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
