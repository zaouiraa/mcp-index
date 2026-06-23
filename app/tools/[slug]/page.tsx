import { notFound } from "next/navigation";
import Link from "next/link";
import { getToolBySlug, getAllSlugs, getAllTools } from "@/lib/supabase";
import { CopyButton } from "@/components/copy-button";
import RelatedGuides from "@/components/content/RelatedGuides";
import type { Metadata } from "next";

export const dynamicParams = true;

const baseUrl = "https://www.mcpindex.dev";

function stripMarkdown(value: string) {
  return value.replace(/\[(.*?)\]\((.*?)\)/g, "$1");
}

function truncate(value: string, max = 160) {
  if (!value) return "";
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}…`;
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

  // Category-level fallbacks
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

  // Default fallback
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
  category?: string | null;
  tags?: string[] | null;
  name: string;
}) {
  const category = tool.category?.toLowerCase() || "";
  const tags = tool.tags || [];

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
            
