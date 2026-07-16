import Link from "next/link";
import type { Metadata } from "next";
import { DownloadGitHubAuthCheatsheet } from "@/components/download-github-auth-cheatsheet";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/github-mcp-server-authentication`;
const lastReviewed = "2026-07-08";

const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent("GitHub MCP Auth (2026)")}&description=${encodeURIComponent("Tokens, Scopes, Private Repos – Free Cheatsheet")}`;

const pageTitle =
  "GitHub MCP Server Authentication (2026): Tokens, Scopes, Private Repos | MCPIndex";

const pageDescription =
  "Complete GitHub MCP authentication guide for 2026. Set up Personal Access Tokens, scopes, private repo access, and fix common auth errors. Free downloadable cheatsheet included.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GitHub MCP authentication 2026",
    "GitHub MCP token scopes",
    "GitHub MCP private repo access",
    "GitHub MCP PAT setup",
    "GitHub MCP server authentication error",
    "GitHub MCP fine-grained token",
    "GitHub MCP classic token",
    "GitHub MCP Claude Desktop auth",
    "GitHub MCP troubleshooting 2026",
  ],
  alternates: { canonical },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "GitHub MCP Authentication 2026",
      },
    ],
    publishedTime: "2026-06-20",
    modifiedTime: lastReviewed,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "How does GitHub MCP Server authentication work in 2026?",
    answer:
      "GitHub MCP Server authenticates primarily via a Personal Access Token (classic or fine-grained) passed as an environment variable. OAuth is also possible in remote setups. Most Claude Desktop installs use the PAT method.",
  },
  {
    question: "Which token scopes do I need for GitHub MCP Server?",
    answer:
      "A safe baseline for 2026 is repo, read:org, and read:user. These cover private repositories, organization visibility, and basic user info. Adjust according to your workflow.",
  },
  {
    question: "Can GitHub MCP Server access private repositories?",
    answer:
      "Yes, if your token has the repo scope (classic) or the specific repository selected with correct permissions (fine-grained). Without this, only public repos are visible.",
  },
  {
    question: "What is the difference between classic and fine-grained tokens?",
    answer:
      "Classic tokens use broad scopes; fine-grained tokens allow per‑repo, per‑permission control. Fine-grained is safer but more complex to set up correctly.",
  },
  {
    question: "Why are some GitHub MCP tools missing in Claude?",
    answer:
      "The server hides tools it cannot use based on the token's permissions. Missing scopes cause tools to disappear or fail silently.",
  },
  {
    question: "How do I check what scopes my GitHub token has?",
    answer:
      "Run a curl command to the GitHub API and inspect the x-oauth-scopes header. The cheatsheet we provide includes the exact command.",
  },
];

export const revalidate = 3600;

export default function GitHubMcpServerAuthenticationPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: pageTitle,
    description: pageDescription,
    url: canonical,
    mainEntityOfPage: canonical,
    image: ogImage, 
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
    ],
    articleSection: [
      "Token scopes",
      "Classic vs fine-grained",
      "Private repos",
      "Troubleshooting",
    ],
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Free GitHub Auth Cheatsheet (Markdown)",
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
        name: "GitHub MCP Authentication (2026)",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="mx-auto max-w-4xl space-y-16 px-6 py-12">
        <nav className="flex flex-wrap items-center gap-2 font-mono text-sm text-zinc-500">
          <Link href="/" className="transition-colors hover:text-white">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">GitHub MCP Authentication (2026)</span>
        </nav>

        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-400">
              Reviewed July 2026
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400">
              Auth Guide
            </span>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
              Free Cheatsheet
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            GitHub MCP Server Authentication (2026)
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            Master GitHub MCP authentication in Claude Desktop. Learn PAT setup, scopes, private repo access, and fix common errors. Grab our free cheatsheet for quick reference.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">
            Need installation help? Start with{" "}
            <Link href="/github-mcp-server-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">GitHub MCP Server Setup</Link>{" "}
            or{" "}
            <Link href="/claude-desktop-mcp-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">Claude Desktop MCP Setup</Link>.
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
            <li>Re-check private repository permissions before assuming the server is broken.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How GitHub MCP authentication works</h2>
          <p className="leading-relaxed text-zinc-400">
            In most local Claude Desktop setups, GitHub MCP Server authenticates with a GitHub Personal Access Token passed through the{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">GITHUB_PERSONAL_ACCESS_TOKEN</code>{" "}
            environment variable. The server then uses that token to decide which GitHub APIs it can access and, in some setups, which MCP tools it should expose.
          </p>
          <p className="leading-relaxed text-zinc-400">
            In remote setups, OAuth can also be used. In practice, PAT-based configuration remains the most common path for local development and Claude Desktop workflows.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Recommended token scopes</h2>
          <p className="leading-relaxed text-zinc-400">For many developer workflows, a practical classic token baseline is:</p>

          <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <div className="flex flex-wrap gap-2">
              {["repo", "read:org", "read:user"].map((scope) => (
                <span key={scope} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-300">
                  {scope}
                </span>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-950/80">
                    <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">Scope</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-zinc-400">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3"><code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">repo</code></td>
                    <td className="px-4 py-3 text-zinc-400">Grants access to private repositories and many repository-level operations.</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="px-4 py-3"><code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">read:org</code></td>
                    <td className="px-4 py-3 text-zinc-400">Helps the server read organization membership and organization-level visibility.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">read:user</code></td>
                    <td className="px-4 py-3 text-zinc-400">Provides basic user account information needed for account-aware workflows.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              Broad classic scopes are easier to configure, but they also grant wider access. If you need tighter control, use a fine-grained token and verify repository permissions one by one.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Classic vs fine-grained tokens</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-lg font-semibold">Classic PAT</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Classic personal access tokens use broad scopes like{" "}
                <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">repo</code> and{" "}
                <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs text-zinc-300">read:org</code>. They are usually easier to configure and remain the simplest choice for many GitHub MCP tutorials.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">They are a good fit when you want a fast local setup and are comfortable with broader repository access.</p>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <h3 className="text-lg font-semibold">Fine-grained PAT</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Fine-grained tokens let you restrict access to selected repositories and narrower permission sets. They are safer in principle, especially in sensitive or multi-repository environments.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">The tradeoff is setup complexity. If you miss a required permission, GitHub MCP may authenticate successfully but still fail on specific actions.</p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Private repository access</h2>
          <p className="leading-relaxed text-zinc-400">
            A common support issue is that GitHub MCP Server appears to work, but Claude cannot see a private repository. In many cases, the token simply lacks sufficient repository permissions. A token with only public access can still authenticate successfully while failing on private repository operations.
          </p>
          <p className="leading-relaxed text-zinc-400">
            If you use a fine-grained token, confirm that the specific repositories are included and that the repository-level permissions cover the actions you want Claude to perform.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">How to check your token scopes</h2>
          <p className="leading-relaxed text-zinc-400">One practical way to inspect your token is to make an authenticated request to the GitHub API and review the response headers.</p>
          <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs leading-relaxed text-zinc-300">
{`curl -sI -H "Authorization: Bearer $GITHUB_PERSONAL_ACCESS_TOKEN" \\
https://api.github.com/user | grep -i x-oauth-scopes`}
            </pre>
            <p className="text-sm leading-relaxed text-zinc-400">This helps confirm whether the token actually contains the scopes you expect.</p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Why some tools may be missing</h2>
          <p className="leading-relaxed text-zinc-400">A missing tool is not always a server bug. In practice, narrower token permissions can limit what the MCP server is willing or able to expose for a workflow.</p>
          <p className="leading-relaxed text-zinc-400">If one action works and another fails, compare the permissions required for each action before assuming the installation is broken.</p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Common authentication errors</h2>
          <div className="space-y-3">
            {authErrors.map((item) => (
              <div key={item.title} className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Best practices for safer auth</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {bestPractices.map((item) => (
              <div key={item.title} className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-zinc-700 text-zinc-300 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                Free Developer Resource
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Get the GitHub MCP Auth Cheat Sheet
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                Stop struggling with token scopes. Download our concise Markdown cheat sheet with the exact scopes, classic vs fine‑grained comparison, common errors and fixes, and the token check command – all in one place.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Recommended scopes table</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Classic vs fine-grained decision guide</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▹</span> Top 5 auth errors and fixes</li>
              </ul>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadGitHubAuthCheatsheet />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">Instant .md download. No email required.</p>
            </div>
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <h2 className="text-2xl font-semibold">Related guides</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link href="/github-mcp-server-setup" className="rounded-2xl border border-zinc-800 bg-black/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80">
              <h3 className="text-base font-semibold text-white">GitHub MCP Server Setup</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Full install walkthrough for Claude Desktop.</p>
            </Link>

            <Link href="/how-to-install-mcp-servers" className="rounded-2xl border border-zinc-800 bg-black/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80">
              <h3 className="text-base font-semibold text-white">How to Install MCP Servers</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Cross-client setup guide for Claude Desktop, Cursor, and VS Code.</p>
            </Link>

            <Link href="/best-mcp-servers-for-claude" className="rounded-2xl border border-zinc-800 bg-black/30 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80">
              <h3 className="text-base font-semibold text-white">Best MCP Servers for Claude</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Broader recommendations ranked by use case.</p>
            </Link>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions (2026)</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white">
                  {faq.question}
                  <span className="flex-shrink-0 text-zinc-500 transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center">
          <h2 className="text-2xl font-semibold">Continue exploring GitHub MCP</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400">
            Full setup guide, tool page, and category directory.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/tools/github-mcp" className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500">
              View GitHub MCP tool
            </Link>
            <Link href="/tools" className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800">
              Browse all tools
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
