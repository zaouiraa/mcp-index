import { notFound } from "next/navigation";
import Link from "next/link";
import { getToolBySlug, getAllSlugs, getAllTools } from "@/lib/supabase";
import { CopyButton } from "@/components/copy-button";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

const baseUrl = "https://www.mcpindex.dev";

function stripMarkdown(value: string) {
  return value.replace(/\[(.*?)\]\((.*?)\)/g, "$1");
}

function truncate(value: string, max = 160) {
  if (!value) return "";
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}â€¦`;
}

function sentenceCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

type GuideItem = {
  title: string;
  body: string;
  href: string;
};

function getRelatedGuidesForTool(tool: {
  slug: string;
  category?: string | null;
  tags?: string[] | null;
}): GuideItem[] {
  const slug = tool.slug;
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags?.map((t) => t.toLowerCase()) || [];

  if (slug === "github-mcp") {
    return [
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
        title: "Best MCP Tools for GitHub Workflows",
        body: "Compare the best MCP stack for pull requests, docs, and security.",
        href: "/best-mcp-tools-for-github-workflows",
      },
    ];
  }

  if (slug === "context7-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best MCP Tools for GitHub Workflows",
        body: "See why Context7 is a strong companion for GitHub-based coding workflows.",
        href: "/best-mcp-tools-for-github-workflows",
      },
    ];
  }

  if (slug === "desktop-commander-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client guide for installing MCP tools across major clients.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Set up Claude Desktop before adding local-access tools.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best MCP Tools for GitHub Workflows",
        body: "See how Desktop Commander fits GitHub-heavy local repo workflows.",
        href: "/best-mcp-tools-for-github-workflows",
      },
    ];
  }

  if (slug === "semgrep-mcp") {
    return [
      {
        title: "Best MCP Tools for GitHub Workflows",
        body: "See how Semgrep fits security-aware PR and code review workflows.",
        href: "/best-mcp-tools-for-github-workflows",
      },
      {
        title: "How to Install MCP Servers",
        body: "General installation guide for MCP clients and setup flows.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "Broader comparison of top open source MCP tools and where Semgrep fits.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (slug === "supabase-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "Compare popular open source MCP tools by use case and maintenance quality.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (slug === "figma-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "Compare popular open source MCP tools including Figma Context MCP.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (slug === "aws-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "See how AWS MCP compares to other top open source MCP tools.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (slug === "grafana-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "Compare Grafana MCP with other top open source monitoring and DevOps tools.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (slug === "atlassian-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "Compare Atlassian MCP with other top open source productivity tools.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (slug === "google-workspace-mcp") {
    return [
      {
        title: "How to Install MCP Servers",
        body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Claude Desktop MCP Setup",
        body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
        href: "/claude-desktop-mcp-setup",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "See how Google Workspace MCP fits among top open source productivity tools.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  if (tags.includes("github") || category.includes("version control")) {
    return [
      {
        title: "GitHub MCP Server Setup",
        body: "Step-by-step GitHub MCP install guide.",
        href: "/github-mcp-server-setup",
      },
      {
        title: "GitHub MCP Authentication",
        body: "Troubleshoot token scopes and private repository access.",
        href: "/github-mcp-server-authentication",
      },
      {
        title: "Best MCP Tools for GitHub Workflows",
        body: "Compare the best GitHub-focused MCP stack.",
        href: "/best-mcp-tools-for-github-workflows",
      },
    ];
  }

  if (category.includes("security")) {
    return [
      {
        title: "Best MCP Tools for GitHub Workflows",
        body: "See how security tools like Semgrep fit GitHub-heavy workflows.",
        href: "/best-mcp-tools-for-github-workflows",
      },
      {
        title: "How to Install MCP Servers",
        body: "General installation guide for MCP clients and setup flows.",
        href: "/how-to-install-mcp-servers",
      },
      {
        title: "Best Open Source MCP Tools on GitHub",
        body: "Broader comparison of open source MCP tools including security tools.",
        href: "/best-open-source-mcp-tools-on-github",
      },
    ];
  }

  return [
    {
      title: "How to Install MCP Servers",
      body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
      href: "/how-to-install-mcp-servers",
    },
    {
      title: "Claude Desktop MCP Setup",
      body: "Beginner-friendly setup guide for Claude Desktop MCP.",
      href: "/claude-desktop-mcp-setup",
    },
    {
      title: "Best Open Source MCP Tools on GitHub",
      body: "Compare popular open source MCP tools by use case and setup difficulty.",
      href: "/best-open-source-mcp-tools-on-github",
    },
  ];
}

function buildUseCases(tool: {
  slug: string;
  category?: string | null;
  tags?: string[] | null;
  name: string;
}) {
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags?.map((tag) => tag.toLowerCase()) || [];
  const slug = tool.slug;

  if (slug === "github-mcp") {
    return [
      `Managing repositories, pull requests, issues, and branches directly through ${tool.name}.`,
      "Reviewing code changes, checking CI status, and commenting on PRs without leaving your AI client.",
      "Supporting GitHub-heavy development teams that want AI-assisted repository operations end to end.",
    ];
  }

  if (slug === "context7-mcp") {
    return [
      `Indexing repositories and surfacing code-aware context for AI assistants using ${tool.name}.`,
      "Answering questions about large codebases, tracing dependencies, and reviewing module relationships.",
      "Ideal for projects where accurate code context is critical to AI-assisted development.",
    ];
  }

  if (slug === "desktop-commander-mcp") {
    return [
      `Giving your AI assistant read access to local files, folders, and desktop workflows via ${tool.name}.`,
      "Navigating project directories, reading config files, and triggering local scripts through natural language.",
      "Best for power users and developers who want controlled AI access to their local environment.",
    ];
  }

  if (slug === "semgrep-mcp") {
    return [
      `Running static analysis and security scans on code from within your AI workflow using ${tool.name}.`,
      "Catching vulnerabilities, misconfigurations, and code quality issues during pull request reviews.",
      "Supporting security-conscious teams that want automated scanning without leaving the MCP client.",
    ];
  }

  if (slug === "supabase-mcp") {
    return [
      `Querying tables, inspecting schemas, and exploring Supabase project data through ${tool.name}.`,
      "Debugging record anomalies, validating migrations, and reviewing RLS policies from an AI assistant.",
      "Useful for backend developers who need fast database insight without context switching.",
    ];
  }

  if (slug === "figma-mcp") {
    return [
      `Searching Figma components, inspecting frames, and referencing design tokens via ${tool.name}.`,
      "Helping engineers and PMs understand design decisions and match implementation to the source file.",
      "Best for product teams where design-to-code handoff relies on Figma as the single source of truth.",
    ];
  }

  if (slug === "aws-mcp") {
    return [
      `Inspecting AWS resources, environments, and service configurations through ${tool.name}.`,
      "Reviewing EC2 instances, S3 buckets, IAM scoping, and cloud setup details during debugging workflows.",
      "Helping cloud and DevOps teams reduce context switching when managing AWS infrastructure.",
    ];
  }

  if (slug === "grafana-mcp") {
    return [
      `Querying Grafana dashboards, metrics, and alert states directly from ${tool.name}.`,
      "Investigating spikes, tracing latency trends, and reviewing panel data during live incidents.",
      "Best for platform and SRE teams that monitor systems in Grafana and want AI-assisted triage.",
    ];
  }

  if (slug === "atlassian-mcp") {
    return [
      `Accessing Jira issues, Confluence pages, and sprint context through ${tool.name}.`,
      "Triaging bug reports, pulling documentation context, and reviewing planning workflows from an AI client.",
      "Supporting engineering and product teams that run day-to-day execution inside Atlassian tools.",
    ];
  }

  if (slug === "google-workspace-mcp") {
    return [
      `Reading Google Docs, querying Sheets, and checking Calendar events via ${tool.name}.`,
      "Pulling meeting notes, summarizing spreadsheet data, and drafting documents from an AI assistant.",
      "Best for teams that use Google Workspace as their central hub for planning and documentation.",
    ];
  }
  
  if (slug === "google-drive-mcp" || slug === "gdrive-mcp") {
    return [
      `Finding the right Google Drive files, folders, and shared documents through ${tool.name} without manually searching across team storage.`,
      "Useful for pulling project briefs, client deliverables, meeting notes, and the latest version of internal docs directly into an AI workflow.",
      "Best for knowledge retrieval tasks where the assistant needs to locate, open, and reason over documents stored across shared drives.",
    ];
  }

  if (slug === "kubernetes-mcp" || slug === "k8s-mcp") {
    return [
      `Monitoring pods, deployments, services, and namespaces through ${tool.name} when you need quick visibility into a live Kubernetes cluster.`,
      "Useful for debugging failed rollouts, CrashLoopBackOff errors, image pull failures, unhealthy services, and resource limit issues without jumping between kubectl commands.",
      "Best for platform and DevOps teams that want faster incident response, cluster inspection, and day-to-day operational troubleshooting from an AI assistant.",
    ];
  }

  if (slug === "linear-mcp") {
    return [
      `Reviewing Linear issues, cycles, team backlogs, and project status through ${tool.name} without leaving your planning workflow.`,
      "Useful for checking blocked tickets, summarizing active work, finding ownership gaps, and updating issue context during sprint planning or standups.",
      "Best for product and engineering teams that run execution in Linear and want the assistant to help with prioritization, triage, and work tracking.",
    ];
  }

  if (slug === "sentry-mcp") {
    return [
      `Investigating production errors, stack traces, and release regressions through ${tool.name} when something breaks in a live application.`,
      "Useful for reviewing high-volume exceptions, identifying affected environments, tracing recent regressions, and understanding which issues need immediate attention.",
      "Best for engineering teams that use Sentry for monitoring and want AI-assisted error triage, faster debugging, and clearer incident context.",
    ];
  }
  if (category.includes("version control")) {
    return [
      `Managing repositories, branches, and commits through an AI workflow with ${tool.name}.`,
      "Reviewing issues, pull requests, or merge requests without leaving your MCP client.",
      "Supporting Git-based team workflows for code review, collaboration, and automation.",
    ];
  }

  if (category.includes("browser")) {
    return [
      `Automating websites, testing flows, and extracting page data using ${tool.name}.`,
      "Running browser tasks like clicking, filling forms, and scraping structured content.",
      "Supporting QA, research, and workflow automation for modern web apps.",
    ];
  }

  if (category.includes("database")) {
    return [
      `Querying and inspecting data directly from your AI assistant with ${tool.name}.`,
      "Debugging records, reviewing schemas, or validating application data quickly.",
      "Supporting developer workflows that need fast database access without context switching.",
    ];
  }

  if (category.includes("productivity")) {
    return [
      `Connecting knowledge, notes, and team content with ${tool.name}.`,
      "Searching documents, updating workspace content, and organizing information through AI.",
      "Helping teams centralize planning, documentation, and operational workflows.",
    ];
  }

  if (category.includes("cloud") || category.includes("infrastructure")) {
    return [
      `Managing infrastructure and operational workflows with ${tool.name}.`,
      "Inspecting environments, services, and cluster resources directly from an MCP client.",
      "Helping DevOps teams reduce context switching during debugging and deployment tasks.",
    ];
  }

  if (tags.includes("search") || tags.includes("web")) {
    return [
      `Giving AI assistants live web access and retrieval capabilities through ${tool.name}.`,
      "Finding current information, research sources, and web results beyond static model knowledge.",
      "Supporting research-heavy workflows that need fresh data from the open web.",
    ];
  }

  return [
    `${tool.name} is useful when you want to extend an AI assistant with real tools and live system access.`,
    "It helps move from chat-only answers to real actions such as reading data, managing systems, or retrieving current information.",
    "It is best for developer and technical workflows where AI needs controlled access to external tools or services.",
  ];
}

function buildWhenToChoose(tool: {
  name: string;
  category?: string | null;
  tags?: string[] | null;
}) {
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags || [];

  if (tool.name.toLowerCase().includes("gitlab")) {
    return `Choose ${tool.name} when your team works in GitLab.com or a self-hosted GitLab instance and needs AI help with repositories, issues, merge requests, or CI/CD workflows.`;
  }

  if (tool.name.toLowerCase().includes("github")) {
    return `Choose ${tool.name} when your repositories, pull requests, and issues already live in GitHub and you want direct AI-assisted repository operations.`;
  }

  if (category.includes("browser")) {
    return `Choose ${tool.name} when you need browser automation, testing, scraping, or page interaction rather than API-only access.`;
  }

  if (category.includes("database")) {
    return `Choose ${tool.name} when your workflow depends on inspecting or querying structured data directly from an MCP-compatible AI assistant.`;
  }

  if (tags.includes("search") || tags.includes("research")) {
    return `Choose ${tool.name} when fresh, real-time information matters and your AI assistant needs live search or research capabilities.`;
  }

  return `Choose ${tool.name} when you want an MCP server focused on ${tool.category || "technical workflows"} and need tighter integration with your existing tools.`;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | MCPIndex",
      description: "The requested MCP tool page could not be found.",
      alternates: {
        canonical: `${baseUrl}/tools/${slug}`,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = truncate(
    stripMarkdown(tool.answer_first_summary || tool.short_description || "")
  );
  const canonical = `${baseUrl}/tools/${tool.slug}`;

  return {
    title: `${tool.name} MCP Server Config, Setup Guide & Review | MCPIndex`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${tool.name} MCP Server Config, Setup Guide & Review`,
      description,
      url: canonical,
      siteName: "MCPIndex",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} MCP Server Config, Setup Guide & Review`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) notFound();

  const faq = tool.faq ?? [];
  const setupSteps = tool.setup_steps ?? [];
  const tags = tool.tags ?? [];
  const comparisons = tool.comparisons ?? [];

  const allTools = await getAllTools();
  const relatedTools = allTools
    .filter((item) => item.slug !== tool.slug)
    .filter(
      (item) =>
        item.category === tool.category ||
        (item.tags && tags.length && item.tags.some((tag) => tags.includes(tag)))
    )
    .slice(0, 3);

  const relatedGuides = getRelatedGuidesForTool(tool);

  const pageUrl = `${baseUrl}/tools/${tool.slug}`;
  const cleanSummary = stripMarkdown(
    tool.answer_first_summary || tool.short_description || ""
  );

  const useCases = buildUseCases(tool);
  const whenToChoose = buildWhenToChoose(tool);
  const categorySlug = tool.category
    ? tool.category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")
    : null;

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: cleanSummary,
    applicationCategory: tool.category || "DeveloperApplication",
    operatingSystem: "Cross-platform",
    url: pageUrl,
    license: tool.license,
    author: {
      "@type": "Organization",
      name: tool.developer,
    },
    ...(tool.is_free
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
    ...(tool.last_updated
      ? {
          dateModified: tool.last_updated,
        }
      : {}),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${baseUrl}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.name,
        item: pageUrl,
      },
    ],
  };

  const jsonLdFaq =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f: { question: string; answer: string }) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: stripMarkdown(f.answer),
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
          </Link>
          <span>/</span>
          <span className="text-zinc-300">{tool.name}</span>
        </nav>

        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
              {tool.category}
            </span>

            {tool.is_free ? (
              <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Free
              </span>
            ) : (
              <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Freemium
              </span>
            )}

            {tool.status && (
              <span
                className={`px-2.5 py-1 text-xs font-mono rounded-md border ${
                  tool.status === "active"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : tool.status === "archived"
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    : tool.status === "deprecated"
                    ? "bg-red-500/10 text-red-400 border-red-500/20"
                    : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                }`}
              >
                {tool.status}
              </span>
            )}

            {tool.github_status && (
              <span
                className={`px-2.5 py-1 text-xs font-mono rounded-md border ${
                  tool.github_status === "ok"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : tool.github_status === "redirected"
                    ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    : tool.github_status === "not_found"
                    ? "bg-red-500/10 text-red-400 border-red-500/20"
                    : "bg-zinc-800 text-zinc-400 border-zinc-700"
                }`}
              >
                github: {tool.github_status}
              </span>
            )}

            {tool.installs && (
              <span className="text-xs text-zinc-600 font-mono">
                {tool.installs} installs
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {tool.name}
          </h1>

          {tool.short_description && (
            <p className="text-lg text-zinc-400 leading-relaxed">
              {tool.short_description}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-zinc-500 flex-wrap">
            <span>
              by <span className="text-zinc-300">{tool.developer}</span>
            </span>
            <span className="text-zinc-700">|</span>
            <span>{tool.license} License</span>
            {tool.last_updated && (
              <>
                <span className="text-zinc-700">|</span>
                <span>Updated {tool.last_updated}</span>
              </>
            )}
            {tool.last_github_check_at && (
              <>
                <span className="text-zinc-700">|</span>
                <span>GitHub checked {tool.last_github_check_at}</span>
              </>
            )}
          </div>

          <p className="text-sm text-zinc-500 leading-relaxed">
            Looking for more MCP servers? Browse the full{" "}
            <Link
              href="/tools"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              MCP tools directory
            </Link>
            {categorySlug && (
              <>
                {" "}
                or explore more tools in{" "}
                <Link
                  href={`/categories/${categorySlug}`}
                  className="text-zinc-300 underline underline-offset-4 hover:text-white"
                >
                  {tool.category}
                </Link>
              </>
            )}
            .
          </p>
        </div>

        {tool.answer_first_summary && (
          <section className="relative border-l-2 border-purple-500 bg-purple-500/5 rounded-r-xl p-6 space-y-3">
            <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
            <h2 className="text-xl font-semibold text-white">Quick overview</h2>
            <p className="text-zinc-300 leading-relaxed text-[15px]">
              {tool.answer_first_summary}
            </p>
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">
              What this MCP server is best for
            </h2>
            <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
              {useCases.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">When to choose it</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{whenToChoose}</p>

            <div className="pt-2 space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Good fit
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 6).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{tool.name} Configuration</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Use the following configuration as a starting point for Claude Desktop
            or any compatible MCP client, then replace placeholder credentials with
            your own values.
          </p>
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/50">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">
                claude_desktop_config.json
              </span>
            </div>
            <CopyButton text={tool.config_json} />
            <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed">
              <code className="text-zinc-300">{tool.config_json}</code>
            </pre>
          </div>
        </section>

        <div className="flex items-center justify-center py-2">
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono">
            Ad Space
          </div>
        </div>

        {setupSteps.length > 0 && (
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">How to set up {tool.name}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                These setup steps cover the typical installation flow for this MCP
                server. Double-check permissions, tokens, and environment variables
                before connecting it to your AI client.
              </p>
            </div>
            <ol className="space-y-3">
              {setupSteps.map((step: string, i: number) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-400">
                    {i + 1}
                  </span>
                  <p className="text-zinc-400 leading-relaxed pt-0.5 text-[15px]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {faq.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Common questions, setup guidance, and compatibility notes for{" "}
                {tool.name}.
              </p>
            </div>

            <div className="space-y-5">
              {faq.map(
                (item: { question: string; answer: string }, i: number) => (
                  <article
                    key={i}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px]">
                      {item.answer}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>
        )}

        {comparisons.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{tool.name} vs Competitors</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900/80">
                    <th className="text-left px-5 py-3.5 font-semibold text-zinc-300 border-b border-zinc-800">
                      Feature
                    </th>
                    <th className="text-center px-5 py-3.5 font-semibold text-purple-400 border-b border-zinc-800">
                      {tool.name}
                    </th>
                    <th className="text-center px-5 py-3.5 font-semibold text-zinc-400 border-b border-zinc-800">
                      Competitor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map(
                    (
                      row: {
                        feature: string;
                        thisOk: boolean;
                        thisTool: string;
                        competitorOk: boolean;
                        competitor: string;
                      },
                      i: number
                    ) => (
                      <tr
                        key={i}
                        className="border-b border-zinc-800/50 last:border-0 hover:bg-zinc-900/30 transition-colors"
                      >
                        <td className="px-5 py-3 text-zinc-400">{row.feature}</td>
                        <td className="px-5 py-3 text-center">
                          <span
                            className={
                              row.thisOk ? "text-emerald-400" : "text-red-400"
                            }
                          >
                            {row.thisOk ? "âœ…" : "âŒ"} {row.thisTool}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-center">
                          <span
                            className={
                              row.competitorOk
                                ? "text-emerald-400"
                                : "text-red-400"
                            }
                          >
                            {row.competitorOk ? "âœ…" : "âŒ"} {row.competitor}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {relatedGuides.length > 0 && (
          <section className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Related guides</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Setup tutorials, workflow guides, and supporting articles related to{" "}
                {tool.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedGuides.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block"
                >
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedTools.length > 0 && (
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Related tools</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Explore similar MCP servers in the same category or with overlapping
                capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTools.map((item) => (
                <Link
                  key={item.slug}
                  href={`/tools/${item.slug}`}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-5 flex flex-col gap-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {item.category}
                    </span>
                    {item.is_free ? (
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Free
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Freemium
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {item.short_description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {tags.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-400">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  {sentenceCase(tag)}
                </span>
              ))}
            </div>
          </section>
        )}

        <div className="flex items-center justify-center py-2">
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono">
            Ad Space
          </div>
        </div>

        <section className="flex flex-wrap gap-4 pb-8">
          <a
            href={tool.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          {tool.npm_package && (
            <a
              href={`https://www.npmjs.com/package/${tool.npm_package}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.747.49-5.538H5.879l1.41 15.97 5.691 1.577 5.726-1.577.779-8.748h-7.454z" />
              </svg>
              NPM
            </a>
          )}
        </section>
      </div>

      <footer className="border-t border-zinc-800/60 mt-8">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span>Â© 2026 MCPIndex. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-zinc-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-zinc-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
