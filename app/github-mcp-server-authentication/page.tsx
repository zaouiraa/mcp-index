import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/github-mcp-server-authentication`;

export const metadata: Metadata = {
  title: "GitHub MCP Server Authentication Guide in 2026 | MCPIndex",
  description:
    "Learn how GitHub MCP Server authentication works with personal access tokens, OAuth, token scopes, private repos, and common auth errors.",
  alternates: { canonical },
  openGraph: {
    title: "GitHub MCP Server Authentication Guide in 2026",
    description:
      "Learn how GitHub MCP Server authentication works with personal access tokens, OAuth, token scopes, private repos, and common auth errors.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub MCP Server Authentication Guide in 2026 | MCPIndex",
    description:
      "Learn how GitHub MCP Server authentication works with personal access tokens, OAuth, token scopes, private repos, and common auth errors.",
  },
};

const faqs = [
  {
    question: "How does GitHub MCP Server authentication work?",
    answer:
      "GitHub MCP Server can authenticate with a Personal Access Token or, in some remote setups, OAuth. Most Claude Desktop and local npx setups use a GitHub Personal Access Token stored in the server environment variables.",
  },
  {
    question: "Which token scopes do I need for GitHub MCP Server?",
    answer:
      "For most Claude workflows, the practical baseline is repo, read:org, and read:user. These scopes cover private repositories, organization visibility, and basic user-level account access.",
  },
  {
    question: "Can GitHub MCP Server access private repositories?",
    answer:
      "Yes, but only if the token has the right repository permissions. A token without repo access may still work for public resources while failing on private repository operations.",
  },
  {
    question: "What is the difference between classic and fine-grained GitHub tokens?",
    answer:
      "Classic tokens use broad scopes like repo and read:org. Fine-grained tokens let you limit access to specific repositories and narrower permissions. Fine-grained tokens can be safer, but they are also easier to misconfigure if you miss a required permission.",
  },
  {
    question: "Why are some GitHub MCP tools missing in Claude?",
    answer:
      "The official GitHub MCP server can filter visible tools based on the scopes available in a classic Personal Access Token. If the token does not grant enough access, some tools may not appear or may fail when called.",
  },
  {
    question: "How do I check what scopes my GitHub token has?",
    answer:
      "You can inspect the token scopes by sending an authenticated request to the GitHub API and reading the x-oauth-scopes response header.",
  },
];

export const revalidate = 3600;

export default function GitHubMcpServerAuthenticationPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GitHub MCP Server Authentication Guide in 2026",
    description:
      "Learn how GitHub MCP Server authentication works with personal access tokens, OAuth, token scopes, private repos, and common auth errors.",
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
        name: "GitHub MCP Server Authentication",
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
          <span className="text-zinc-300">GitHub MCP Server Authentication</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Auth Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            GitHub MCP Server Authentication Guide
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            If GitHub MCP Server is installed but not working correctly, the problem
            is often authentication. This guide explains how GitHub MCP auth works,
            which token scopes matter, how classic and fine-grained tokens differ,
            and how to debug private repository access problems.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            For the full installation walkthrough, see{" "}
            <Link
              href="/github-mcp-server-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              GitHub MCP Server Setup
            </Link>
            . For general MCP installation help, read{" "}
            <Link
              href="/how-to-install-mcp-servers"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              How to Install MCP Servers
            </Link>
            .
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How GitHub MCP authentication works</h2>
          <p className="text-zinc-400 leading-relaxed">
            In most local Claude Desktop setups, GitHub MCP Server authenticates with
            a GitHub Personal Access Token passed through the{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              GITHUB_PERSONAL_ACCESS_TOKEN
            </code>{" "}
            environment variable. The server then uses that token to decide which
            GitHub APIs it can access and, in some cases, which MCP tools it should
            expose.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            In remote GitHub MCP setups, OAuth can also be used. GitHub's own MCP
            docs note that remote flows may default to one-click OAuth, while PATs
            remain available for manual configuration and local setups.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Recommended token scopes</h2>
          <p className="text-zinc-400 leading-relaxed">
            For most developer workflows in Claude Desktop, the recommended classic
            token baseline is:
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {["repo", "read:org", "read:user"].map((scope) => (
                <span
                  key={scope}
                  className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
                >
                  {scope}
                </span>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-950/80">
                    <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Scope</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3">
                      <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Grants access to private repositories and many repo-level operations.
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3">
                      <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:org</code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Helps the server read organization membership and org-level visibility.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:user</code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Provides basic user account information needed for account-aware operations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              According to GitHub MCP Server's scope filtering documentation, some
              scopes imply others. For example,{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code>{" "}
              implicitly includes{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">public_repo</code>{" "}
              and{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">security_events</code>.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Classic vs fine-grained tokens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
              <h3 className="text-lg font-semibold">Classic PAT</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Classic personal access tokens use broad scopes like{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">repo</code>{" "}
                and{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">read:org</code>.
                They are easier to configure and remain the simplest choice for most
                GitHub MCP Server tutorials.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The official GitHub MCP Server can also filter visible tools at
                startup based on the scopes available in a classic token.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3">
              <h3 className="text-lg font-semibold">Fine-grained PAT</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Fine-grained tokens let you restrict access to selected repositories
                and narrower permission sets. They are safer in principle, especially
                for enterprise or multi-repo environments.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The tradeoff is setup complexity. If you forget a required repository
                permission, GitHub MCP may authenticate successfully but fail on
                specific actions like reading pull requests or modifying issues.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Private repository access</h2>
          <p className="text-zinc-400 leading-relaxed">
            A very common support issue is that GitHub MCP Server appears to work,
            but Claude cannot see a private repository. In most cases, the token
            simply lacks sufficient repository permissions. A token with only public
            access can still authenticate successfully while failing on private repo
            operations.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            If you use a fine-grained token, confirm that the specific repositories
            are included and that the repository-level permissions cover the actions
            you want Claude to perform. For example, pull request access or issues
            access may need to be granted explicitly depending on your workflow.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">How to check your token scopes</h2>
          <p className="text-zinc-400 leading-relaxed">
            GitHub MCP's own scope filtering docs show a simple way to inspect the
            scopes attached to your token by checking the GitHub API response
            headers.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`curl -sI -H "Authorization: Bearer $GITHUB_PERSONAL_ACCESS_TOKEN" \\
https://api.github.com/user | grep -i x-oauth-scopes`}
            </pre>
            <p className="text-zinc-400 text-sm leading-relaxed">
              This command helps confirm whether your token actually contains the
              scopes you think it does.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Why some tools may be missing</h2>
          <p className="text-zinc-400 leading-relaxed">
            GitHub MCP Server includes automatic scope-aware behavior. In the
            official server configuration docs, GitHub explains that classic PATs
            can cause tools to be filtered at startup based on granted scopes. OAuth
            flows handle missing permissions differently by prompting for additional
            authorization when needed.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            That means a missing tool is not always a server bug. Sometimes it is a
            sign that your token permissions are narrower than the workflow you want
            to perform.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Common authentication errors</h2>
          <div className="space-y-3">
            {[
              {
                title: "Token is valid, but private repos are invisible",
                body: "Your token likely lacks repo access or the fine-grained token is not scoped to the correct repositories.",
              },
              {
                title: "Some tools are missing in Claude",
                body: "If you use a classic PAT, the official GitHub MCP server may be filtering tools based on the scopes the token provides.",
              },
              {
                title: "Issue or PR actions fail",
                body: "The token may authenticate correctly but still lack the permission set needed for pull requests, issues, or repository writes.",
              },
              {
                title: "The token works in GitHub CLI but not in MCP",
                body: "Check whether the token is being passed into the MCP server environment variable correctly. A typo in the env block is common.",
              },
              {
                title: "Auth seems correct, but Claude still fails",
                body: "Fully restart Claude Desktop after changing the config. MCP servers often keep the old environment until the client restarts.",
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
          <h2 className="text-2xl font-semibold">Best practices for safer auth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Use least privilege",
                body: "Start with the minimum repository and org access needed for your workflow instead of granting everything by default.",
              },
              {
                title: "Separate work and personal tokens",
                body: "Use distinct tokens for company repositories and personal projects so you can rotate or revoke them independently.",
              },
              {
                title: "Prefer fine-grained tokens for sensitive setups",
                body: "If your environment is security-sensitive, fine-grained tokens are worth the extra configuration effort.",
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
          <h2 className="text-2xl font-semibold">Related guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "GitHub MCP Server Setup",
                body: "Full install walkthrough for Claude Desktop.",
                href: "/github-mcp-server-setup",
              },
              {
                title: "How to Install MCP Servers",
                body: "Cross-client setup guide for Claude Desktop, Cursor, and VS Code.",
                href: "/how-to-install-mcp-servers",
              },
              {
                title: "Best MCP Servers for Claude",
                body: "Broader ranking and recommendations by use case.",
                href: "/best-mcp-servers-for-claude",
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
          <h2 className="text-2xl font-semibold">Go back to the GitHub MCP tool page</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Browse the MCPIndex GitHub MCP listing for setup JSON, use cases, steps,
            and direct links to related guides.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools/github-mcp"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              View GitHub MCP tool
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
