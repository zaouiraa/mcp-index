import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/best-mcp-tools-for-github-workflows`;

export const metadata: Metadata = {
  title: "Best MCP Tools for GitHub Workflows in 2026 | MCPIndex",
  description:
    "Compare the best MCP tools for GitHub workflows, including GitHub MCP Server, Context7, Desktop Commander, and Semgrep for pull requests, code search, docs, and security.",
  alternates: { canonical },
  openGraph: {
    title: "Best MCP Tools for GitHub Workflows in 2026",
    description:
      "Compare the best MCP tools for GitHub workflows for pull requests, documentation, local files, code search, and security.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MCP Tools for GitHub Workflows in 2026 | MCPIndex",
    description:
      "Compare the best MCP tools for GitHub workflows for pull requests, documentation, local files, code search, and security.",
  },
};

const tools = [
  {
    name: "GitHub MCP Server",
    slug: "github-mcp",
    category: "Version Control",
    bestFor: "Pull requests, issues, repo management, code search",
    setup: "Easy",
    why: "The core MCP tool for any GitHub-centered workflow. It gives Claude direct access to repositories, pull requests, issues, branches, and code search.",
  },
  {
    name: "Context7 MCP",
    slug: "context7-mcp",
    category: "Developer Tools",
    bestFor: "Live library documentation during PR and coding work",
    setup: "Very easy",
    why: "Best companion tool when GitHub tasks depend on accurate framework and library documentation.",
  },
  {
    name: "Desktop Commander MCP",
    slug: "desktop-commander-mcp",
    category: "Developer Tools",
    bestFor: "Local repo editing, shell commands, and file operations",
    setup: "Very easy",
    why: "Adds the local execution layer that GitHub-only workflows often miss, especially when Claude needs to inspect or modify files before pushing changes.",
  },
  {
    name: "Semgrep MCP",
    slug: "semgrep-mcp",
    category: "Security",
    bestFor: "Security scanning before PR review or merge",
    setup: "Moderate",
    why: "Strong fit for teams that want vulnerability scanning and code review support inside GitHub-heavy development workflows.",
  },
];

const faqs = [
  {
    question: "What is the best MCP tool for GitHub workflows?",
    answer:
      "GitHub MCP Server is the best first choice because it directly handles repositories, pull requests, issues, branches, and code search. It is the foundation for nearly every GitHub-focused MCP stack.",
  },
  {
    question: "Which MCP tools work best with GitHub MCP Server?",
    answer:
      "The strongest companion tools are Context7 for documentation, Desktop Commander for local file and shell operations, and Semgrep for security scanning.",
  },
  {
    question: "Do I need more than one MCP tool for GitHub workflows?",
    answer:
      "Usually yes. GitHub MCP Server covers GitHub itself, but strong workflows often need a second or third tool for documentation, local code edits, or security analysis.",
  },
  {
    question: "Is Context7 useful for GitHub pull request workflows?",
    answer:
      "Yes. Context7 improves coding accuracy by giving Claude live, version-specific documentation, which is especially helpful while fixing issues or preparing pull requests.",
  },
  {
    question: "What MCP tool helps with GitHub security reviews?",
    answer:
      "Semgrep MCP is one of the best fits for that use case because it brings static analysis and vulnerability scanning into the workflow.",
  },
];

export const revalidate = 3600;

export default function BestMcpToolsForGitHubWorkflowsPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best MCP Tools for GitHub Workflows in 2026",
    description:
      "Compare the best MCP tools for GitHub workflows, including GitHub MCP Server, Context7, Desktop Commander, and Semgrep.",
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
        name: "Best MCP Tools for GitHub Workflows",
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
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Best MCP Tools for GitHub Workflows</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Workflow Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Best MCP Tools for GitHub Workflows
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            The best MCP tools for GitHub workflows are not all trying to do the same
            job. GitHub MCP Server handles repositories and pull requests, Context7
            improves coding accuracy with live docs, Desktop Commander adds local file
            and shell control, and Semgrep brings security scanning into the loop.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you want the short answer, start with{" "}
            <Link
              href="/tools/github-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              GitHub MCP Server
            </Link>
            , then add{" "}
            <Link
              href="/tools/context7-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Context7
            </Link>{" "}
            or{" "}
            <Link
              href="/tools/desktop-commander-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Desktop Commander
            </Link>
            , depending on whether your bottleneck is documentation accuracy or local
            repo execution.
          </p>
        </header>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">What makes a good GitHub workflow MCP stack</h2>
          <p className="text-zinc-400 leading-relaxed">
            GitHub-centric development usually needs four layers: GitHub access,
            documentation context, local execution, and security review. A single MCP
            server rarely covers all four well, so the best setup is usually a small
            stack rather than one all-purpose server.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            In practice, most teams should start with GitHub MCP Server and then add
            one or two supporting tools based on their workflow. Documentation-heavy
            teams benefit from Context7, while hands-on local automation often points
            toward Desktop Commander.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Top picks</h2>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Tool
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Best for
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Setup
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Why it matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool) => (
                  <tr key={tool.slug} className="border-b border-zinc-900 last:border-0">
                    <td className="px-4 py-4 align-top">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="text-white font-medium hover:text-purple-400 transition-colors"
                      >
                        {tool.name}
                      </Link>
                      <div className="text-zinc-500 text-xs mt-1">{tool.category}</div>
                    </td>
                    <td className="px-4 py-4 text-zinc-400 align-top">{tool.bestFor}</td>
                    <td className="px-4 py-4 text-zinc-400 align-top">{tool.setup}</td>
                    <td className="px-4 py-4 text-zinc-400 align-top">{tool.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1. GitHub MCP Server</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The foundation of any GitHub-focused MCP workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              GitHub MCP Server is the obvious first install because it covers the
              workflow that matters most: repository management, pull requests,
              issues, branches, and code search. GitHub’s own agentic workflow docs
              show GitHub MCP capabilities around pull request operations and code
              security integrations.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              If your goal is to review pull requests, search code, inspect issues,
              or update repository content through Claude, this is the core server
              that everything else should orbit around.
            </p>
            <Link
              href="/tools/github-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View GitHub MCP Server →
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">2. Context7 MCP</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The best documentation companion for GitHub work.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Many GitHub tasks fail not because Claude cannot access the repo, but
              because the model lacks fresh framework knowledge. Context7 solves that
              by injecting version-specific docs directly into the workflow.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This makes it especially valuable during PR fixes, issue resolution,
              upgrade work, and code review comments that depend on exact framework
              behavior rather than general memory.
            </p>
            <Link
              href="/tools/context7-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View Context7 MCP →
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">3. Desktop Commander MCP</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best when GitHub workflows need local execution.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              GitHub MCP Server gives Claude access to the repository platform, but
              not necessarily to the full local working environment. Desktop Commander
              fills that gap by enabling file operations, shell commands, and local
              project inspection.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This is especially useful when a workflow involves editing code locally,
              running commands, checking build output, or preparing changes before
              they are committed and pushed back to GitHub.
            </p>
            <Link
              href="/tools/desktop-commander-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View Desktop Commander MCP →
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">4. Semgrep MCP</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best for code security inside PR-heavy workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Semgrep MCP adds static analysis and vulnerability scanning to the
              workflow. That makes it a strong fit for teams that want Claude to help
              with pre-merge checks, security reviews, or code audit tasks tied to
              pull requests and repository changes.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              It is not the first MCP server most teams should install, but it
              becomes highly valuable once GitHub workflows start touching production
              code, security-sensitive repositories, or regulated environments.
            </p>
            <Link
              href="/tools/semgrep-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View Semgrep MCP →
            </Link>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Recommended stacks by use case</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Solo developer",
                body: "GitHub MCP + Context7. Best for shipping faster with better docs and PR support.",
              },
              {
                title: "Full-stack product team",
                body: "GitHub MCP + Context7 + Desktop Commander. Good balance of repo access, live docs, and local execution.",
              },
              {
                title: "Security-aware engineering team",
                body: "GitHub MCP + Semgrep + Context7. Best when code review and remediation quality matter as much as speed.",
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
          <h2 className="text-2xl font-semibold">How to choose the right second tool</h2>
          <div className="space-y-3">
            {[
              {
                title: "Choose Context7 if Claude writes incorrect framework code",
                body: "This is the right second install when the real problem is stale docs, package versions, or library syntax.",
              },
              {
                title: "Choose Desktop Commander if Claude needs local project access",
                body: "Use it when your bottleneck is running commands, inspecting files, or editing code outside the repository hosting layer.",
              },
              {
                title: "Choose Semgrep if your workflow needs security analysis",
                body: "This is the strongest second or third addition when PR review includes vulnerability scanning and remediation guidance.",
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
              title: "GitHub MCP Server Setup",
              body: "Install and configure GitHub MCP Server step by step.",
              href: "/github-mcp-server-setup",
            },
            {
              title: "GitHub MCP Authentication",
              body: "Fix token scopes, PAT issues, and private repo access problems.",
              href: "/github-mcp-server-authentication",
            },
            {
              title: "Best Open Source MCP Tools on GitHub",
              body: "Broader ranking for popular open source MCP tools.",
              href: "/best-open-source-mcp-tools-on-github",
            },
          ]}
        />

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
          <h2 className="text-2xl font-semibold">Browse GitHub-friendly MCP tools</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Explore the MCPIndex directory for GitHub, documentation, security, and
            automation tools that fit modern repository workflows.
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
              Browse categories
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
