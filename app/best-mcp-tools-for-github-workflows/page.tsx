import Link from "next/link";
import type { Metadata } from "import { DownloadGithubPromptsButton } from "@/components/download-github-prompts-button";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/best-mcp-tools-for-github-workflows`;

const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent("Best MCP Tools for GitHub Workflows")}&description=${encodeURIComponent("Compare the best MCP tools for GitHub workflows for Claude Desktop PRs, docs, and security.")}`;

export const metadata: Metadata = {
  title: "Best MCP Tools for GitHub Workflows (2026) | MCPIndex",
  description:
    "Best MCP tools for GitHub workflows in 2026. Compare GitHub MCP Server, Context7, Desktop Commander & Semgrep for Claude Desktop PRs and code search.",
  keywords: [
    "MCP tools for GitHub",
    "GitHub MCP workflow",
    "Claude Desktop GitHub",
    "MCP server for pull requests",
    "GitHub MCP Server",
    "Context7 MCP",
    "Desktop Commander MCP",
    "Semgrep MCP",
    "best MCP stack GitHub",
    "Model Context Protocol GitHub",
    "MCP tools for code review",
    "GitHub workflow automation MCP",
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
    title: "Best MCP Tools for GitHub Workflows (2026)",
    description:
      "Compare the best MCP tools for GitHub workflows for Claude Desktop PRs, documentation, local files, code search, and security.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Best MCP Tools for GitHub Workflows in 2026",
      },
    ],
    publishedTime: "2025-01-15T00:00:00Z",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MCP Tools for GitHub Workflows (2026) | MCPIndex",
    description:
      "Compare the best MCP tools for GitHub workflows for Claude Desktop PRs, docs, code search, and security.",
    images: [ogImage],
  },
};

const tools = [
  {
    name: "GitHub MCP Server",
    slug: "github-mcp",
    category: "Version Control",
    bestFor: "Pull requests, issues, repo management, code search",
    setup: "Easy",
    why: "The core MCP server for any GitHub-centered Model Context Protocol workflow. It gives Claude Desktop direct access to repositories, pull requests, issues, branches, and code search.",
  },
  {
    name: "Context7 MCP",
    slug: "context7-mcp",
    category: "Developer Tools",
    bestFor: "Live library documentation during PR and coding work",
    setup: "Very easy",
    why: "Best companion MCP tool when GitHub tasks depend on accurate framework and library documentation through the Model Context Protocol.",
  },
  {
    name: "Desktop Commander MCP",
    slug: "desktop-commander-mcp",
    category: "Developer Tools",
    bestFor: "Local repo editing, shell commands, and file operations",
    setup: "Very easy",
    why: "Adds the local execution layer that GitHub-only MCP server workflows often miss, especially when Claude needs to inspect or modify files before pushing changes.",
  },
  {
    name: "Semgrep MCP",
    slug: "semgrep-mcp",
    category: "Security",
    bestFor: "Security scanning before PR review or merge",
    setup: "Moderate",
    why: "Strong fit for teams that want Claude-assisted vulnerability scanning and code review support inside GitHub-heavy Model Context Protocol workflows.",
  },
];

const faqs = [
  {
    question: "What is the best MCP tool for GitHub workflows?",
    answer:
      "GitHub MCP Server is the best first MCP tool choice because it directly handles repositories, pull requests, issues, branches, and code search through the Model Context Protocol. It is the foundation for nearly every GitHub-focused Claude Desktop MCP stack.",
  },
  {
    question: "Which MCP tools work best with GitHub MCP Server?",
    answer:
      "The strongest companion MCP tools are Context7 for live documentation, Desktop Commander for local file and shell operations, and Semgrep MCP for security scanning in Claude Desktop workflows.",
  },
  {
    question: "Do I need more than one MCP tool for GitHub workflows?",
    answer:
      "Usually yes. GitHub MCP Server covers GitHub itself, but strong Claude Desktop workflows often need a second or third MCP server for documentation, local code edits, or security analysis.",
  },
  {
    question: "Is Context7 MCP useful for GitHub pull request workflows?",
    answer:
      "Yes. Context7 MCP improves Claude coding accuracy by providing live, version-specific documentation, which is especially helpful while fixing issues or preparing pull requests using the Model Context Protocol.",
  },
  {
    question: "What MCP tool helps with GitHub security reviews?",
    answer:
      "Semgrep MCP is one of the best fits for that use case because it brings static analysis and vulnerability scanning directly into the Claude Desktop MCP workflow.",
  },
  {
    question: "How do I set up these MCP tools for GitHub workflows?",
    answer:
      "Most of these MCP tools are installed by adding their JSON configuration to your claude_desktop_config.json file. GitHub MCP Server, Context7, and Desktop Commander all use npx, making Claude Desktop MCP setup fast and repeatable.",
  },
];

const relatedGuides = [
  {
    title: "GitHub MCP Server Setup Tutorial",
    body: "Step-by-step Claude Desktop setup guide for the core GitHub MCP server with claude_desktop_config.json.",
    href: "/github-mcp-server-setup",
  },
  {
    title: "GitHub MCP Authentication Guide",
    body: "Fix GitHub MCP server token scopes, claude_desktop_config.json, and private repo access problems.",
    href: "/github-mcp-server-authentication",
  },
  {
    title: "Best Open Source MCP Tools on GitHub",
    body: "Broader ranking of the best open source MCP servers for Claude Desktop and other MCP-compatible clients.",
    href: "/best-open-source-mcp-tools-on-github",
  },
];

export const revalidate = 3600;

export default function BestMcpToolsForGitHubWorkflowsPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Best MCP Tools for GitHub Workflows in 2026",
    description:
      "Compare the best MCP tools for GitHub workflows, including GitHub MCP Server, Context7, Desktop Commander, and Semgrep for Claude Desktop.",
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: ogImage,
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: new Date().toISOString().split("T")[0],
    wordCount: 1600,
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
      description: "An open standard for connecting AI applications like Claude Desktop to external tools for GitHub workflows.",
    },
    proficiencyLevel: "Beginner to Intermediate",
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
        name: "Best MCP Tools for GitHub Workflows",
        item: canonical,
      },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MCP Tools for GitHub Workflows",
    description: "A curated list of the most useful MCP servers for GitHub-centric Claude Desktop workflows.",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${baseUrl}/tools/${tool.slug}`,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
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
            and shell control, and Semgrep brings security scanning into the Claude
            Desktop Model Context Protocol loop.
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
              Context7 MCP
            </Link>{" "}
            or{" "}
            <Link
              href="/tools/desktop-commander-mcp"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Desktop Commander MCP
            </Link>
            , depending on whether your bottleneck is documentation accuracy or local
            repo execution.
          </p>
        </header>

        <section id="what-makes-a-good-github-mcp-stack" className="space-y-5">
          <h2 className="text-2xl font-semibold">What makes a good GitHub workflow MCP server stack</h2>
          <p className="text-zinc-400 leading-relaxed">
            GitHub-centric development usually needs four layers through the Model
            Context Protocol: GitHub access, documentation context, local execution,
            and security review. A single MCP server rarely covers all four well, so
            the best Claude Desktop setup is usually a small MCP stack rather than
            one all-purpose server.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            In practice, most teams should start with GitHub MCP Server and then add
            one or two supporting MCP tools based on their workflow. Documentation-heavy
            teams benefit from Context7 MCP, while hands-on local automation often
            points toward Desktop Commander MCP.
          </p>
        </section>

        <section id="top-mcp-tools-for-github-workflows" className="space-y-5">
          <h2 className="text-2xl font-semibold">Top MCP tools for GitHub workflows at a glance</h2>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    MCP Tool
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Best for
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Setup
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Why it matters for Claude Desktop
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

        <section id="github-mcp-server-for-github-workflows" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">1. GitHub MCP Server</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The foundation of any GitHub-focused Claude Desktop MCP workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              GitHub MCP Server is the obvious first MCP tool to install because it
              covers the Model Context Protocol workflow that matters most: repository
              management, pull requests, issues, branches, and code search. GitHub’s
              own agentic workflow docs show GitHub MCP capabilities around pull
              request operations and code security integrations.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              If your goal is to review pull requests, search code, inspect issues,
              or update repository content through Claude Desktop, this is the core
              MCP server that everything else should orbit around.
            </p>
            <Link
              href="/tools/github-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View GitHub MCP Server →
            </Link>
          </div>
        </section>

        <section id="context7-mcp-for-github-workflows" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">2. Context7 MCP</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The best documentation companion MCP tool for GitHub work.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Many GitHub tasks fail not because Claude cannot access the repo, but
              because the model lacks fresh framework knowledge. Context7 MCP solves
              that by injecting version-specific docs directly into the Claude Desktop
              Model Context Protocol workflow.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This makes Context7 especially valuable during PR fixes, issue resolution,
              upgrade work, and code review comments that depend on exact framework
              behavior rather than general Claude memory.
            </p>
            <Link
              href="/tools/context7-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View Context7 MCP →
            </Link>
          </div>
        </section>

        <section id="desktop-commander-mcp-for-github-workflows" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">3. Desktop Commander MCP</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best MCP tool when GitHub workflows need local execution.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              GitHub MCP Server gives Claude Desktop access to the repository platform,
              but not necessarily to the full local working environment. Desktop Commander
              MCP fills that gap through the Model Context Protocol by enabling file
              operations, shell commands, and local project inspection.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This Claude Desktop MCP tool is especially useful when a workflow involves
              editing code locally, running commands, checking build output, or preparing
              changes before they are committed and pushed back to GitHub.
            </p>
            <Link
              href="/tools/desktop-commander-mcp"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              View Desktop Commander MCP →
            </Link>
          </div>
        </section>

        <section id="semgrep-mcp-for-github-workflows" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">4. Semgrep MCP</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Best MCP server for code security inside PR-heavy Claude workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Semgrep MCP adds static analysis and vulnerability scanning to the
              Claude Desktop workflow. That makes it a strong fit for teams that want
              Claude to help with pre-merge checks, security reviews, or code audit
              tasks tied to pull requests and repository changes via the Model Context Protocol.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Semgrep is not the first MCP server most teams should install, but it
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

        <section id="recommended-mcp-stacks-github" className="space-y-5">
          <h2 className="text-2xl font-semibold">Recommended Claude Desktop MCP stacks by use case</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Solo developer",
                body: "GitHub MCP + Context7 MCP. Best Claude Desktop MCP stack for shipping faster with better docs and PR support.",
              },
              {
                title: "Full-stack product team",
                body: "GitHub MCP + Context7 + Desktop Commander MCP. Good balance of repo access, live docs, and local execution.",
              },
              {
                title: "Security-aware engineering team",
                body: "GitHub MCP + Semgrep MCP + Context7 MCP. Best Claude Desktop stack when code review and remediation quality matter as much as speed.",
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

        <section id="how-to-choose-second-mcp-tool-github" className="space-y-5">
          <h2 className="text-2xl font-semibold">How to choose the right second MCP tool for GitHub</h2>
          <div className="space-y-3">
            {[
              {
                title: "Choose Context7 MCP if Claude writes incorrect framework code",
                body: "This is the right second MCP server install when the real problem is stale docs, package versions, or library syntax in Claude Desktop.",
              },
              {
                title: "Choose Desktop Commander MCP if Claude needs local project access",
                body: "Use this MCP tool when your bottleneck is running commands, inspecting files, or editing code outside the GitHub repository hosting layer.",
              },
              {
                title: "Choose Semgrep MCP if your Claude workflow needs security analysis",
                body: "This is the strongest second or third MCP server addition when PR review includes vulnerability scanning and remediation guidance.",
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
        
        {/* تم تعديل قسم الروابط الموجهة إلى Inline لتجنبّه أخطاء المكون غير الموجود */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:border-purple-500/30 transition-colors"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>
        
        <section className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-zinc-700 text-zinc-300 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Free Cheat Sheet
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Stop guessing what to ask Claude.
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                We wrote 5 battle-tested System Prompts specifically for GitHub workflows (PR Reviews, Issue Triage, CI/CD Debugging). Copy, paste, and get instant, senior-level results.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {["PR Reviewer", "Issue Triage", "Changelog", "CI Debugger", "Release Notes"].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-black border border-zinc-800 text-zinc-500">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadGithubPromptsButton />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">Downloads as a clean .md file.</p>
            </div>
          </div>
        </section>

        <section id="mcp-tools-github-workflows-faq" className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions about MCP tools for GitHub workflows</h2>
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

        <section id="browse-github-friendly-mcp-tools" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Browse GitHub-friendly MCP tools</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Explore the MCPIndex directory for GitHub, documentation, security, and
            automation MCP servers that fit modern Claude Desktop repository workflows.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              Browse all MCP servers
            </Link>
            <Link
              href="/categories"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors"
            >
              Browse MCP categories
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
