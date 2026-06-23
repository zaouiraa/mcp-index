import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/github-mcp-server-setup`;

export const metadata: Metadata = {
  title: "GitHub MCP Server Setup for Claude Desktop in 2026 | MCPIndex",
  description:
    "Step-by-step GitHub MCP Server setup guide for Claude Desktop, Claude Code, and Cursor. Learn token scopes, config JSON, troubleshooting, and security best practices.",
  alternates: { canonical },
  openGraph: {
    title: "GitHub MCP Server Setup for Claude Desktop in 2026",
    description:
      "Step-by-step GitHub MCP Server setup guide for Claude Desktop, Claude Code, and Cursor.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub MCP Server Setup for Claude Desktop in 2026 | MCPIndex",
    description:
      "Step-by-step GitHub MCP Server setup guide for Claude Desktop, Claude Code, and Cursor.",
  },
};

const faqs = [
  {
    question: "What is the GitHub MCP Server?",
    answer:
      "GitHub MCP Server is GitHub's official Model Context Protocol server. It lets Claude connect directly to GitHub so you can list repositories, search code, manage issues, open pull requests, and review changes without leaving the chat window.",
  },
  {
    question: "Do I need a GitHub token?",
    answer:
      "Yes. You need a GitHub Personal Access Token to authenticate the server. For most Claude workflows, the recommended scopes are repo, read:org, and read:user. If you only need public repositories, you can use a more limited token.",
  },
  {
    question: "Does GitHub MCP Server work with Claude Desktop only?",
    answer:
      "No. It works with Claude Desktop, Claude Code, Cursor, VS Code, and other MCP-compatible clients. The exact setup method changes slightly by client, but the same token and server package are used.",
  },
  {
    question: "What is the easiest way to install it?",
    answer:
      "The easiest method is using npx in your Claude Desktop config file. That avoids manual builds and keeps the server easy to update.",
  },
  {
    question: "Why is the GitHub MCP Server not showing up in Claude?",
    answer:
      "The most common causes are an invalid JSON config file, a missing token, incorrect token permissions, or forgetting to fully restart Claude Desktop after saving the config.",
  },
  {
    question: "Is GitHub MCP Server safe to use?",
    answer:
      "It can be safe if you follow least-privilege access. Use the minimum token scopes required, avoid production org-wide permissions when unnecessary, and review any write action before allowing Claude to proceed.",
  },
];

export default function GitHubMcpServerSetupPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GitHub MCP Server Setup for Claude Desktop in 2026",
    description:
      "Step-by-step GitHub MCP Server setup guide for Claude Desktop, Claude Code, and Cursor.",
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
        name: "GitHub MCP Server Setup",
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
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            GitHub MCP Server Setup for Claude Desktop
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            This guide shows you exactly how to install the official GitHub MCP
            Server for Claude Desktop, Claude Code, and Cursor. You will create a
            GitHub token, add the server config, restart Claude, and test the
            connection in a few minutes.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you want the tool profile first, see the{" "}
            <Link
              href="/tools/github-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              GitHub MCP Server listing
            </Link>
            . For broader recommendations, read{" "}
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
          <h2 className="text-2xl font-semibold">What GitHub MCP Server does</h2>
          <p className="text-zinc-400 leading-relaxed">
            GitHub MCP Server is GitHub's official MCP integration. It lets Claude
            interact directly with repositories, issues, pull requests, branches,
            and code search so you can work inside GitHub without constantly
            switching tabs.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            In practice, that means you can ask Claude to list your repositories,
            inspect a pull request, review changed files, search across a codebase,
            summarize open issues, or prepare a fix before you push changes.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Before you start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "GitHub account",
                body: "You need a GitHub account with access to the repositories you want Claude to read or modify.",
              },
              {
                title: "Claude client",
                body: "Claude Desktop is the easiest starting point, but the same server also works with Claude Code and Cursor.",
              },
              {
                title: "Personal Access Token",
                body: "Create a GitHub Personal Access Token with only the permissions your workflow actually needs.",
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
          <h2 className="text-2xl font-semibold">Step 1: Create a GitHub token</h2>
          <p className="text-zinc-400 leading-relaxed">
            Go to GitHub Settings, then Developer Settings, then Personal Access
            Tokens. You can use a classic token for simplicity or a fine-grained
            token if you want tighter repository restrictions.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <h3 className="text-lg font-semibold">Recommended scopes</h3>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-950/80">
                    <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Scope</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Why you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3">
                      <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Read and manage private repositories, pull requests, and issues.
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3">
                      <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:org</code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Read organization membership and organization-level repository access.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:user</code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Read your user profile information for account-level operations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              If you only need public repository access, you can use a more limited
              token. For most real-world Claude workflows, though,{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code>{" "}
              is the practical baseline.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 2: Add GitHub MCP Server to Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            Open your Claude Desktop configuration file and add the GitHub server
            entry inside the <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">mcpServers</code> object.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-white font-medium text-sm">Claude Desktop config paths</p>
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

            <div className="space-y-2">
              <p className="text-white font-medium text-sm">Config JSON</p>
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
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Replace <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">YOUR_GITHUB_TOKEN</code>{" "}
              with the token you created in Step 1.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 3: Restart Claude and test it</h2>
          <p className="text-zinc-400 leading-relaxed">
            Save the config file, fully quit Claude Desktop, and reopen it. A simple
            window refresh is not always enough. The MCP server usually loads when
            the client starts.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Test prompts</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                List my GitHub repositories.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Show me the open pull requests in my repository.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Search this repo for auth middleware.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Summarize the latest issues labeled bug.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">GitHub MCP Server for Claude Code and Cursor</h2>
          <p className="text-zinc-400 leading-relaxed">
            The same GitHub token and server package also work outside Claude Desktop.
            Claude Code supports MCP server registration through its CLI and config
            system, while Cursor can use MCP-compatible integrations through its own
            client setup flow.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            If your team uses multiple clients, keep the token scopes minimal and
            document one approved setup method internally so everyone uses the same
            safe defaults.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Common errors and fixes</h2>
          <div className="space-y-3">
            {[
              {
                title: "Invalid JSON in config file",
                body: "If Claude does not start correctly, validate your JSON first. A missing comma or brace is the most common setup issue.",
              },
              {
                title: "Token is missing or expired",
                body: "If the server appears but GitHub actions fail, confirm that your token is still valid and correctly pasted into the env block.",
              },
              {
                title: "Insufficient permissions",
                body: "If Claude can see your account but not private repositories or pull requests, your token probably needs repo scope or broader repository access.",
              },
              {
                title: "Claude was not fully restarted",
                body: "After editing the config, completely close Claude Desktop and reopen it. Background processes can keep the old config loaded.",
              },
              {
                title: "npx cannot resolve the package",
                body: "Make sure Node.js is installed and available in your PATH. Without Node, Claude cannot run npx-based MCP servers.",
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
          <h2 className="text-2xl font-semibold">Security best practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Use least privilege",
                body: "Do not grant broader repository permissions than you actually need. Start small and expand only if a workflow requires it.",
              },
              {
                title: "Separate personal and work access",
                body: "If possible, use separate tokens for personal projects and company repositories so a single leak does not expose everything.",
              },
              {
                title: "Rotate tokens regularly",
                body: "Use expiration dates and rotate tokens on a schedule. Replace old tokens immediately if you suspect any exposure.",
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
          <h2 className="text-2xl font-semibold">Why GitHub MCP Server is worth installing</h2>
          <p className="text-zinc-400 leading-relaxed">
            For most developers, GitHub is the highest-value MCP integration because
            it sits at the center of day-to-day engineering work. Once Claude can
            read repositories, inspect pull requests, and summarize issue threads,
            it becomes much more useful than a plain code assistant.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            If you are only going to install one MCP server first, GitHub is usually
            the best place to start. After that, the next strongest pair is often{" "}
            <Link
              href="/tools/context7-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Context7
            </Link>{" "}
            for documentation and{" "}
            <Link
              href="/tools/desktop-commander-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Desktop Commander
            </Link>{" "}
            for local execution.
          </p>
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
          <h2 className="text-2xl font-semibold">Explore more MCP tools</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Browse the full MCPIndex directory for setup guides, config JSON, and
            recommendations across GitHub, databases, design tools, productivity,
            monitoring, and security.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools/github-mcp"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              View GitHub MCP listing
            </Link>
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors"
            >
              Browse all tools
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
