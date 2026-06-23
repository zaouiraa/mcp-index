import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/best-open-source-mcp-tools-on-github`;

export const metadata: Metadata = {
  title: "Best Open Source MCP Tools on GitHub in 2026 | MCPIndex",
  description:
    "The best open source MCP tools on GitHub in 2026. Compare popular MCP servers by use case, maintenance, setup difficulty, language, and ideal workflow.",
  alternates: { canonical },
  openGraph: {
    title: "Best Open Source MCP Tools on GitHub in 2026",
    description:
      "Compare the best open source MCP tools on GitHub by use case, setup difficulty, maintenance, and integration target.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Open Source MCP Tools on GitHub in 2026 | MCPIndex",
    description:
      "Compare the best open source MCP tools on GitHub by use case, setup difficulty, maintenance, and integration target.",
  },
};

const tools = [
  {
    name: "GitHub MCP Server",
    slug: "github-mcp",
    category: "Version Control",
    bestFor: "Repository management, PRs, issues, code search",
    setup: "Easy",
    language: "TypeScript / Node",
    why: "Official GitHub server and the default starting point for most developers using Claude.",
  },
  {
    name: "Context7 MCP",
    slug: "context7-mcp",
    category: "Developer Tools",
    bestFor: "Live library documentation",
    setup: "Very easy",
    language: "TypeScript / Node",
    why: "No API key, low friction, and instantly useful in coding workflows.",
  },
  {
    name: "Desktop Commander MCP",
    slug: "desktop-commander-mcp",
    category: "Developer Tools",
    bestFor: "Local file access and shell automation",
    setup: "Very easy",
    language: "TypeScript / Node",
    why: "Turns Claude into a real local operator that can edit files and run commands.",
  },
  {
    name: "Supabase MCP",
    slug: "supabase-mcp",
    category: "Database",
    bestFor: "Postgres, schema changes, Edge Functions",
    setup: "Easy",
    language: "TypeScript / Node",
    why: "Best fit for full-stack teams building on Supabase.",
  },
  {
    name: "Figma Context MCP",
    slug: "figma-mcp",
    category: "Design",
    bestFor: "Design-to-code workflows",
    setup: "Easy",
    language: "TypeScript / Node",
    why: "One of the highest-value MCP tools for frontend teams shipping from Figma.",
  },
  {
    name: "Semgrep MCP",
    slug: "semgrep-mcp",
    category: "Security",
    bestFor: "Static analysis and vulnerability scanning",
    setup: "Moderate",
    language: "TypeScript / Node",
    why: "Strong fit for security-aware teams that want Claude-assisted scanning and remediation.",
  },
  {
    name: "AWS MCP Server",
    slug: "aws-mcp",
    category: "Cloud & Infrastructure",
    bestFor: "AWS service operations",
    setup: "Moderate",
    language: "TypeScript / Node",
    why: "Useful when Claude needs access to cloud resources through existing AWS credentials.",
  },
  {
    name: "Grafana MCP",
    slug: "grafana-mcp",
    category: "Monitoring",
    bestFor: "Dashboards, metrics, incident investigation",
    setup: "Moderate",
    language: "TypeScript / Node",
    why: "A strong observability pick for DevOps and SRE workflows.",
  },
  {
    name: "Atlassian MCP",
    slug: "atlassian-mcp",
    category: "Project Management",
    bestFor: "Jira and Confluence workflows",
    setup: "Moderate",
    language: "TypeScript / Node",
    why: "Best for teams already living inside Atlassian products.",
  },
  {
    name: "Google Workspace MCP",
    slug: "google-workspace-mcp",
    category: "Productivity",
    bestFor: "Gmail, Calendar, Drive, Docs",
    setup: "Moderate",
    language: "TypeScript / Node",
    why: "A broad productivity layer for knowledge work and admin automation.",
  },
];

const faqs = [
  {
    question: "What are open source MCP tools?",
    answer:
      "Open source MCP tools are Model Context Protocol servers whose source code is publicly available, typically on GitHub. They let Claude and other MCP-compatible clients connect to external systems like GitHub, databases, files, dashboards, or productivity apps through a standardized interface.",
  },
  {
    question: "What is the best open source MCP tool on GitHub?",
    answer:
      "For most developers, GitHub MCP Server is the best first install because it solves the highest-frequency workflow: repository management, pull requests, issues, and code search. For coding accuracy, Context7 is the strongest second install because it injects live library documentation into Claude's context.",
  },
  {
    question: "Are all MCP tools on GitHub safe to use?",
    answer:
      "No. Open source helps with transparency, but you still need to evaluate maintenance quality, token permissions, installation method, and the level of system access. Tools that can run shell commands or modify files deserve extra review before use.",
  },
  {
    question: "How do I choose an MCP tool from GitHub?",
    answer:
      "Start with the workflow you want to improve, then check whether the project is official or community-maintained, whether it is actively updated, what credentials it requires, and how much local or remote access it gets.",
  },
  {
    question: "Do I need Claude Desktop to use GitHub MCP tools?",
    answer:
      "No. Many of these tools work with Claude Desktop, Claude Code, Cursor, VS Code, and other MCP-compatible clients. Claude Desktop is simply the most common starting point.",
  },
];

export default function BestOpenSourceMcpToolsOnGitHubPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Open Source MCP Tools on GitHub in 2026",
    description:
      "Compare the best open source MCP tools on GitHub by use case, setup difficulty, maintenance, and integration target.",
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
        name: "Best Open Source MCP Tools on GitHub",
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
          <span className="text-zinc-300">Best Open Source MCP Tools on GitHub</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Open Source Picks
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Best Open Source MCP Tools on GitHub in 2026
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            GitHub has become the default discovery layer for MCP tools, but not
            every repository is worth installing. This guide highlights the best
            open source MCP tools on GitHub based on practical usefulness, setup
            friction, maintenance quality, and how well they fit real Claude
            workflows.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you want a broader recommendation set, read{" "}
            <Link
              href="/best-mcp-servers-for-claude"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Best MCP Servers for Claude
            </Link>
            . If you want a hands-on installation tutorial, start with{" "}
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
          <h2 className="text-2xl font-semibold">Why GitHub matters for MCP discovery</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most MCP tools are still discovered through GitHub rather than polished
            app stores. That means the best repository is not always the one with
            the flashiest demo. The strongest projects usually combine clear setup
            instructions, active maintenance, sensible permissions, and an obvious
            workflow win once connected to Claude.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            For that reason, this list focuses less on novelty and more on repeat
            usefulness. A tool that solves a high-frequency task like GitHub access,
            documentation lookup, local file operations, or database querying will
            usually outperform a more exotic integration in day-to-day work.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Top open source MCP tools at a glance</h2>
          <p className="text-zinc-500 text-sm">
            Quick comparison by use case and setup friction.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Tool</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs hidden md:table-cell">Category</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">Best for</th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs hidden lg:table-cell">Setup</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, i) => (
                  <tr
                    key={tool.slug}
                    className={`border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors ${
                      i === tools.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="text-white hover:text-purple-300 font-medium transition-colors"
                      >
                        {tool.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
                        {tool.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">{tool.bestFor}</td>
                    <td className="px-4 py-3 hidden lg:table-cell text-zinc-500">
                      {tool.setup}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Best open source MCP tools by use case</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              These are the repositories that create the strongest real-world lift
              for Claude users.
            </p>
          </div>

          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div
                key={tool.slug}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-zinc-600 font-mono text-xs">
                        #{index + 1}
                      </span>
                      <h3 className="text-lg font-semibold">
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="hover:text-purple-300 transition-colors"
                        >
                          {tool.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-xs font-mono mt-1">
                      {tool.category} · {tool.language} · Setup: {tool.setup}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {tool.bestFor}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {tool.why}
                </p>

                {tool.slug === "github-mcp" && (
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    GitHub MCP Server is the clearest starting point because it
                    maps directly to the highest-frequency engineering workflow:
                    repositories, pull requests, issues, and code search. If you
                    only install one open source MCP tool from GitHub, this is
                    usually the best first choice.
                  </p>
                )}

                {tool.slug === "context7-mcp" && (
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Context7 earns its spot because it improves answer quality
                    immediately. Instead of relying on stale framework knowledge,
                    Claude can pull the exact docs for the library version you are
                    using and write more accurate code.
                  </p>
                )}

                {tool.slug === "desktop-commander-mcp" && (
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Desktop Commander is one of the most powerful community tools
                    because it gives Claude direct file and shell access. That also
                    means it deserves extra caution. It is high leverage, but not a
                    casual install for sensitive environments.
                  </p>
                )}

                <div className="flex items-center gap-3 pt-1 flex-wrap">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    View tool →
                  </Link>
                  <Link
                    href={`/categories/${tool.category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Browse category →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">How to evaluate an MCP GitHub repo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Check maintenance activity",
                body: "Look for recent commits, active issue responses, and installation docs that match the current package name and auth flow.",
              },
              {
                title: "Review permission model",
                body: "Understand whether the tool is read-only, API-only, or has local shell and file access. The broader the access, the higher the review burden.",
              },
              {
                title: "Prefer official vendors when possible",
                body: "Official GitHub, Supabase, AWS, and Grafana servers are usually better maintained and less fragile than unofficial wrappers.",
              },
              {
                title: "Measure usefulness, not novelty",
                body: "A flashy integration is less valuable than a boring tool you use every day. Frequency of use is a better ranking factor than novelty.",
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
          <h2 className="text-2xl font-semibold">Best starter stack for most Claude users</h2>
          <p className="text-zinc-400 leading-relaxed">
            If you want the fastest useful stack, start with three tools:
            <span className="text-zinc-300"> GitHub MCP Server</span> for repo work,
            <span className="text-zinc-300"> Context7</span> for live docs, and
            <span className="text-zinc-300"> Desktop Commander</span> for local
            execution. That combination covers the highest-value workflow triangle:
            source code, documentation, and machine access.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            After that, add one domain-specific server that matches your stack:
            Supabase for backend work, Figma for design handoff, Grafana for ops,
            or Google Workspace for productivity.
          </p>
        </section>

        <RelatedGuides
  items={[
    {
      title: "Best MCP Tools for GitHub Workflows",
      body: "Find the strongest MCP stack for pull requests, docs, and security.",
      href: "/best-mcp-tools-for-github-workflows",
    },
    {
      title: "GitHub MCP Server Setup",
      body: "Step-by-step setup guide for the most important GitHub MCP tool.",
      href: "/github-mcp-server-setup",
    },
    {
      title: "GitHub MCP Authentication",
      body: "Troubleshoot GitHub token scopes and private repository access.",
      href: "/github-mcp-server-authentication",
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
          <h2 className="text-2xl font-semibold">Browse the full MCP directory</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            MCPIndex tracks the best open source MCP tools across GitHub,
            databases, design, monitoring, security, and productivity.
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
