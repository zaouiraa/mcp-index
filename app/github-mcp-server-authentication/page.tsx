import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/github-mcp-server-authentication`;
const lastReviewed = "2026-07-08";

const pageTitle =
  "GitHub MCP Server Authentication: Tokens, Scopes, Private Repo Access | MCPIndex";

const pageDescription =
  "Learn how GitHub MCP authentication works in Claude Desktop and similar MCP clients, including PAT setup, token scopes, private repository access, and common auth failures.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
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
      "For most Claude workflows, a practical baseline is repo, read:org, and read:user. These scopes usually cover private repositories, organization visibility, and basic user-level account access.",
  },
  {
    question: "Can GitHub MCP Server access private repositories?",
    answer:
      "Yes, but only if the token has the correct repository permissions. A token without repo access may still work for public resources while failing on private repository operations.",
  },
  {
    question: "What is the difference between classic and fine-grained GitHub tokens?",
    answer:
      "Classic tokens use broad scopes like repo and read:org. Fine-grained tokens let you restrict access to specific repositories and narrower permission sets. Fine-grained tokens can be safer, but they are also easier to misconfigure if a required permission is missing.",
  },
  {
    question: "Why are some GitHub MCP tools missing in Claude?",
    answer:
      "Some GitHub MCP setups can expose fewer tools when the token does not grant enough access. In practice, missing permissions can make tools disappear or fail when called.",
  },
  {
    question: "How do I check what scopes my GitHub token has?",
    answer:
      "You can inspect the token scopes by sending an authenticated request to the GitHub API and checking the x-oauth-scopes response header.",
  },
];

export const revalidate = 3600;

export default function GitHubMcpServerAuthenticationPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "GitHub MCP Server Authentication: Tokens, Scopes, Private Repo Access",
    description: pageDescription,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: "2026-06-20",
    dateModified: lastReviewed,
    author: {
      "@type": "Organization",
      name: "MCPIndex",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "MCPIndex",
      url: baseUrl,
    },
    about: [
      { "@type": "Thing", name: "GitHub MCP Server" },
      { "@type": "Thing", name: "Authentication" },
      { "@type": "Thing", name: "Personal Access Token" },
      { "@type": "Thing", name: "GitHub token scopes" },
    ],
    articleSection: [
      "Authentication",
      "Token scopes",
      "Private repository access",
      "Troubleshooting",
    ],
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

  const authErrors = [
    {
      title: "Token is valid, but private repos are invisible",
      body: "Your token likely lacks repo access, or a fine-grained token is not scoped to the correct repositories.",
    },
    {
      title: "Some tools are missing in Claude",
      body: "A GitHub MCP setup may expose fewer tools when the token permissions are narrower than the workflow requires.",
    },
    {
      title: "Issue or PR actions fail",
      body: "The token may authenticate correctly but still lack the permissions needed for pull requests, issues, or repository writes.",
    },
    {
      title: "The token works in GitHub CLI but not in MCP",
      body: "Check whether the token is being passed into the MCP server environment variable correctly. A typo in the env block is a common cause.",
    },
    {
      title: "Auth seems correct, but Claude still fails",
      body: "Fully restart Claude Desktop after changing the config. MCP servers often keep the old environment until the client restarts.",
    },
  ];

  const bestPractices = [
    {
      title: "Use least privilege",
      body: "Start with the minimum repository and organization access needed for your workflow instead of granting everything by default.",
    },
    {
      title: "Separate work and personal tokens",
      body: "Use distinct tokens for company repositories and personal projects so you can rotate or revoke them independently.",
    },
    {
      title: "Prefer fine-grained tokens for sensitive setups",
      body: "If your environment is security-sensitive, fine-grained tokens are worth the extra configuration effort.",
    },
  ];

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

      <div className="mx-auto max-w-4xl space-y-16 px-6 py-12">
        <nav className="flex flex-wrap items-center gap-2 font-mono text-sm text-zinc-500">
          <Link href="/" className="transition-colors hover:text-white">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">
            GitHub MCP Server Authentication
          </span>
        </nav>

        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-400">
              Reviewed July 2026
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400">
              Auth Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            GitHub MCP Server Authentication Guide
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            If GitHub MCP Server is installed but not working correctly, the
            problem is often authentication. This guide explains how GitHub MCP
            auth works, which token scopes matter, how classic and fine-grained
            tokens differ, and how to debug private repository access problems.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">
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

        <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <h2 className="text-2xl font-semibold">Quick answer</h2>
          <p className="leading-relaxed text-zinc-300">
            In most Claude Desktop setups, GitHub MCP works best with a Personal
            Access Token passed through the MCP server environment. If private
            repositories are not visible, the usual cause is missing repository
            scope or incomplete fine-grained permissions.
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Use a PAT for the simplest local setup.</li>
            <li>Start with the minimum scopes needed for your workflow.</li>
            <li>
              Re-check private repository permissions before assuming the server
              is broken.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How GitHub MCP authentication works
          </h2>
          <p className="leading-relaxed text-zinc-400">
            In most local Claude Desktop setups, GitHub MCP Server
            authenticates with a GitHub Personal Access Token passed through the{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">
              GITHUB_PERSONAL_ACCESS_TOKEN
            </code>{" "}
            environment variable. The server then uses that token to decide
            which GitHub APIs it can access and, in some setups, which MCP tools
            it should expose.
          </p>
          <p className="leading-relaxed text-zinc-400">
            In remote setups, OAuth can also be used. In practice, PAT-based
            configuration remains the most common path for local development and
            Claude Desktop workflows.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Recommended token scopes</h2>
          <p className="leading-relaxed text-zinc-400">
            For many developer workflows, a practical classic token baseline is:
          </p>

          <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <div className="flex flex-wrap gap-2">
              {["repo", "read:org", "read:user"].map((scope) => (
                <span
                  key={scope}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-300"
                >
                  {scope}
                </span>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-950/80">
                    <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">
                      Scope
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">
                      Why it matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3">
                      <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">
                        repo
                      </code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Grants access to private repositories and many repository-level operations.
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3">
                      <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">
                        read:org
                      </code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Helps the server read organization membership and organization-level visibility.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">
                        read:user
                      </code>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      Provides basic user account information needed for account-aware workflows.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              Broad classic scopes are easier to configure, but they also grant
              wider access. If you need tighter control, use a fine-grained
              token and verify repository permissions one by one.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Classic vs fine-grained tokens
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-lg font-semibold">Classic PAT</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Classic personal access tokens use broad scopes like{" "}
                <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">
                  repo
                </code>{" "}
                and{" "}
                <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">
                  read:org
                </code>
                . They are usually easier to configure and remain the simplest
                choice for many GitHub MCP tutorials.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                They are a good fit when you want a fast local setup and are
                comfortable with broader repository access.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-lg font-semibold">Fine-grained PAT</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Fine-grained tokens let you restrict access to selected
                repositories and narrower permission sets. They are safer in
                principle, especially in sensitive or multi-repository
                environments.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                The tradeoff is setup complexity. If you miss a required
                permission, GitHub MCP may authenticate successfully but still
                fail on specific actions.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Private repository access</h2>
          <p className="leading-relaxed text-zinc-400">
            A common support issue is that GitHub MCP Server appears to work,
            but Claude cannot see a private repository. In many cases, the token
            simply lacks sufficient repository permissions. A token with only
            public access can still authenticate successfully while failing on
            private repository operations.
          </p>
          <p className="leading-relaxed text-zinc-400">
            If you use a fine-grained token, confirm that the specific
            repositories are included and that the repository-level permissions
            cover the actions you want Claude to perform.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">
            How to check your token scopes
          </h2>
          <p className="leading-relaxed text-zinc-400">
            One practical way to inspect your token is to make an authenticated
            request to the GitHub API and review the response headers.
          </p>

          <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs leading-relaxed text-zinc-300">
{`curl -sI -H "Authorization: Bearer $GITHUB_PERSONAL_ACCESS_TOKEN" \\
https://api.github.com/user | grep -i x-oauth-scopes`}
            </pre>
            <p className="text-sm leading-relaxed text-zinc-400">
              This helps confirm whether the token actually contains the scopes
              you expect.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Why some tools may be missing
          </h2>
          <p className="leading-relaxed text-zinc-400">
            A missing tool is not always a server bug. In practice, narrower
            token permissions can limit what the MCP server is willing or able
            to expose for a workflow.
          </p>
          <p className="leading-relaxed text-zinc-400">
            If one action works and another fails, compare the permissions
            required for each action before assuming the installation is broken.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Common authentication errors
          </h2>
          <div className="space-y-3">
            {authErrors.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Best practices for safer auth
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {bestPractices.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <h2 className="text-2xl font-semibold">Related guides</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link
              href="/github-mcp-server-setup"
              className="rounded-2xl border border-zinc-800 bg-black/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
            >
              <h3 className="text-base font-semibold text-white">
                GitHub MCP Server Setup
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Full install walkthrough for Claude Desktop.
              </p>
            </Link>

            <Link
              href="/how-to-install-mcp-servers"
              className="rounded-2xl border border-zinc-800 bg-black/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
            >
              <h3 className="text-base font-semibold text-white">
                How to Install MCP Servers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Cross-client setup guide for Claude Desktop, Cursor, and VS Code.
              </p>
            </Link>

            <Link
              href="/best-mcp-servers-for-claude"
              className="rounded-2xl border border-zinc-800 bg-black/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
            >
              <h3 className="text-base font-semibold text-white">
                Best MCP Servers for Claude
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Broader recommendations ranked by use case.
              </p>
            </Link>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white">
                  {faq.question}
                  <span className="flex-shrink-0 text-zinc-500 transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Go back to the GitHub MCP tool page
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400">
            Browse the MCPIndex GitHub MCP listing for setup JSON, use cases,
            steps, and links to related guides.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/tools/github-mcp"
              className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
            >
              View GitHub MCP tool
            </Link>
            <Link
              href="/tools"
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Browse all tools
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
