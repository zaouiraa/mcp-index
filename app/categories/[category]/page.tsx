import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllTools } from "@/lib/supabase";
import { cache } from "react";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

const baseUrl = "https://www.mcpindex.dev";

// React cache — يمنع تكرار استدعاء Supabase في نفس الـ request
const getAllToolsCached = cache(getAllTools);

type Tool = {
  slug: string;
  name: string;
  short_description: string | null;
  category: string | null;
  is_free: boolean | null;
  installs: string | null;
  tags: string[] | null;
  status?: string | null;
};

function slugifyCategory(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

function titleizeSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// ---------- مُحتوى مُحسَّن (غني وقابل للتوسع) ----------
function getCategoryIntro(categoryName: string, count: number) {
  const lower = categoryName.toLowerCase();

  if (lower.includes("search")) {
    return `Discover ${count} MCP servers for web and data search. These tools allow AI assistants to retrieve live information, perform research, and access external knowledge sources beyond static training data. Perfect for building AI workflows that need current facts, news, or deep web retrieval.`;
  }
  if (lower.includes("version control")) {
    return `Explore ${count} version control MCP servers for Git, GitHub, GitLab, and more. Manage repositories, automate pull requests, review code, and streamline collaboration directly from Claude Desktop, Cursor, or other MCP clients.`;
  }
  if (lower.includes("developer tools")) {
    return `Discover ${count} developer-focused MCP servers. Enhance your coding workflow with tools for editing, local automation, documentation lookup, and terminal operations. Ideal for software engineers using Claude or Cursor.`;
  }
  if (lower.includes("database")) {
    return `Browse ${count} database MCP servers. Connect your AI assistant to SQL, NoSQL, and other data stores. Run queries, inspect schemas, and manage data without leaving your conversation.`;
  }
  if (lower.includes("cloud") || lower.includes("infrastructure")) {
    return `Explore ${count} cloud and infrastructure MCP servers. Interact with AWS, Kubernetes, and other platforms, check statuses, and manage deployments from Claude or your IDE.`;
  }
  if (lower.includes("productivity")) {
    return `Discover ${count} productivity MCP servers. Automate tasks, manage documents, emails, calendars, and workspaces. Enhance your daily workflow with AI-powered tools.`;
  }
  if (lower.includes("security")) {
    return `Browse ${count} security MCP servers. Perform vulnerability scanning, code analysis, and security audits directly within your AI chat interface. Strengthen your development lifecycle.`;
  }
  if (lower.includes("monitoring")) {
    return `Explore ${count} monitoring MCP servers. Keep an eye on dashboards, observability, incident response, and operational health from within your AI assistant.`;
  }

  return `Browse ${count} MCP servers in the ${categoryName} category. Find tools to automate tasks, access data, and enhance your AI workflows. Compare features and setup instructions.`;
}

function getCategoryTips(categoryName: string) {
  const lower = categoryName.toLowerCase();

  if (lower.includes("search")) {
    return [
      "Combine search MCP servers with a documentation server to verify results.",
      "Always check the terms of service for web scraping tools before heavy usage.",
    ];
  }
  if (lower.includes("version control")) {
    return [
      "Start with read-only permissions and expand to write access as needed.",
      "Use fine-grained tokens for better security, especially in team environments.",
    ];
  }
  if (lower.includes("developer tools")) {
    return [
      "Pair a Desktop Commander MCP with a code search tool for maximum control.",
      "Keep your local environment clean; grant only necessary file access.",
    ];
  }
  if (lower.includes("database")) {
    return [
      "Use read-only credentials for query-only workflows to prevent data loss.",
      "Test on a staging database before connecting to production.",
    ];
  }
  if (lower.includes("cloud") || lower.includes("infrastructure")) {
    return [
      "Use least-privilege IAM roles for cloud MCP tools.",
      "Monitor usage to avoid unexpected API charges.",
    ];
  }
  if (lower.includes("productivity")) {
    return [
      "Review the permissions requested by each productivity tool before installing.",
      "Separate personal and work accounts for better data management.",
    ];
  }
  if (lower.includes("security")) {
    return [
      "Always use dedicated API tokens with minimal scopes for security tools.",
      "Review scan results critically; AI may need human validation.",
    ];
  }

  return [];
}

function getCategoryFaq(categoryName: string) {
  const lower = categoryName.toLowerCase();
  let extraFaq: { q: string; a: string }[] = [];

  if (lower.includes("version control")) {
    extraFaq = [
      {
        q: "Can I use multiple version control MCP servers at once?",
        a: "Yes, you can configure multiple servers in your claude_desktop_config.json, but be mindful of potential conflicts if they access the same repos.",
      },
    ];
  } else if (lower.includes("search")) {
    extraFaq = [
      {
        q: "Are search MCP servers free to use?",
        a: "Many are open source and free, but some may require API keys for underlying search services which could have usage limits.",
      },
    ];
  } else if (lower.includes("developer tools")) {
    extraFaq = [
      {
        q: "Do I need coding experience to use developer tools MCP servers?",
        a: "Most are designed for developers, so some familiarity with terminals, config files, and basic scripting is helpful. Beginner-friendly options usually include detailed guides.",
      },
    ];
  }

  const baseFaq = [
    {
      q: `What are ${categoryName} MCP servers?`,
      a: `These are Model Context Protocol servers that specialize in ${categoryName.toLowerCase()} tasks, allowing AI assistants to interact with relevant tools and data.`,
    },
    {
      q: `How do I install a ${categoryName} MCP server?`,
      a: `Most can be installed via npx and configured in your claude_desktop_config.json file. Check the individual tool page for exact setup instructions.`,
    },
    {
      q: `How to choose the right ${categoryName} MCP server?`,
      a: `Consider your specific workflow: do you need read-only access, write capabilities, or integration with a particular service? Start with a popular, well-documented option.`,
    },
  ];

  return [...baseFaq, ...extraFaq];
}

function getRelatedGuides(categorySlug: string) {
  const guides: Record<string, { title: string; desc: string; href: string }[]> = {
    "version-control": [
      { title: "GitHub MCP Server Setup", desc: "Step-by-step installation guide.", href: "/github-mcp-server-setup" },
      { title: "GitHub MCP Authentication", desc: "Fix token and scopes issues.", href: "/github-mcp-server-authentication" },
    ],
    "developer-tools": [
      { title: "Claude Desktop MCP Setup", desc: "Full beginner tutorial.", href: "/claude-desktop-mcp-setup" },
      { title: "How to Install MCP Servers", desc: "Cross-client guide.", href: "/how-to-install-mcp-servers" },
    ],
    "search": [
      { title: "Best MCP Tools for GitHub Workflows", desc: "Includes search tools.", href: "/best-mcp-tools-for-github-workflows" },
    ],
    "database": [
      { title: "Claude Desktop MCP Setup", desc: "Learn config basics.", href: "/claude-desktop-mcp-setup" },
    ],
    "cloud": [
      { title: "How to Install MCP Servers", desc: "Cross-client guide.", href: "/how-to-install-mcp-servers" },
    ],
    "infrastructure": [
      { title: "How to Install MCP Servers", desc: "Cross-client guide.", href: "/how-to-install-mcp-servers" },
    ],
  };

  return guides[categorySlug] || [];
}

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  try {
    const tools = (await getAllTools()) as Tool[];

    const categorySlugs = Array.from(
      new Set(
        tools
          .map((tool) => tool.category)
          .filter((category): category is string => Boolean(category))
          .map((category) => slugifyCategory(category))
      )
    );

    return categorySlugs.map((category) => ({ category }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const tools = (await getAllToolsCached()) as Tool[];

  const matchingTools = tools.filter(
    (tool) => tool.category && slugifyCategory(tool.category) === category
  );

  if (matchingTools.length === 0) {
    return {
      title: "Category Not Found | MCPIndex",
      description: "The requested MCP category page could not be found.",
      alternates: { canonical: `${baseUrl}/categories/${category}` },
      robots: { index: false, follow: false },
    };
  }

  const categoryName = matchingTools[0].category || titleizeSlug(category);
  const description = getCategoryIntro(categoryName, matchingTools.length);
  const canonical = `${baseUrl}/categories/${category}`;
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(categoryName)}&description=${encodeURIComponent(`${matchingTools.length} tools`)}`;

  return {
    title: `${categoryName} MCP Servers: Best Tools, Setup & Directory | MCPIndex`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${categoryName} MCP Servers | MCPIndex`,
      description,
      url: canonical,
      siteName: "MCPIndex",
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: categoryName }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} MCP Servers | MCPIndex`,
      description,
      images: [ogImageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const tools = (await getAllToolsCached()) as Tool[];

  const matchingTools = tools
    .filter((tool) => tool.category && slugifyCategory(tool.category) === category)
    .sort((a, b) => a.name.localeCompare(b.name));

  if (matchingTools.length === 0) notFound();

  const categoryName = matchingTools[0].category || titleizeSlug(category);
  const intro = getCategoryIntro(categoryName, matchingTools.length);
  const faq = getCategoryFaq(categoryName);
  const tips = getCategoryTips(categoryName);

  const allCategories = Array.from(
    new Set(
      tools
        .map((tool) => tool.category)
        .filter((value): value is string => Boolean(value))
    )
  ).sort((a, b) => a.localeCompare(b));

  const siblingCategories = allCategories
    .filter((item) => slugifyCategory(item) !== category)
    .slice(0, 6);

  const featuredTools = matchingTools.slice(0, 3);
  const relatedGuides = getRelatedGuides(category);

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Categories", item: `${baseUrl}/categories` },
      { "@type": "ListItem", position: 3, name: categoryName, item: `${baseUrl}/categories/${category}` },
    ],
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} MCP Servers`,
    description: intro,
    url: `${baseUrl}/categories/${category}`,
    mainEntity: matchingTools.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      url: `${baseUrl}/tools/${tool.slug}`,
      applicationCategory: tool.category || categoryName,
      description: tool.short_description || undefined,
    })),
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-white transition-colors">
            Categories
          </Link>
          <span>/</span>
          <span className="text-zinc-300">{categoryName}</span>
        </nav>

        <header className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
              Category
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {matchingTools.length} tools
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {categoryName} MCP Servers
          </h1>

          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            {intro}
          </p>

          <p className="text-sm text-zinc-500 leading-relaxed">
            Browse the full{" "}
            <Link
              href="/tools"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              MCP tools directory
            </Link>
            .
          </p>
        </header>

        {tips.length > 0 && (
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Key Tips for {categoryName}</h2>
            <ul className="space-y-3 text-sm text-zinc-400">
              {tips.map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {featuredTools.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Popular {categoryName} Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 p-5 flex flex-col gap-2 transition-colors"
                >
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  {tool.short_description && (
                    <p className="text-sm text-zinc-400 line-clamp-3">{tool.short_description}</p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {(tool.tags || []).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-2xl font-semibold">All {categoryName} Tools</h2>
            <span className="text-sm text-zinc-600 font-mono">
              {matchingTools.length} results
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchingTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors p-5 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    {tool.short_description && (
                      <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                        {tool.short_description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {tool.is_free != null && (
                      <span
                        className={`px-2.5 py-1 text-[11px] font-mono rounded-md border ${
                          tool.is_free
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {tool.is_free ? "Free" : "Freemium"}
                      </span>
                    )}

                    {tool.status && (
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {tool.status}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {(tool.tags || []).slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {tool.installs && (
                    <span className="text-xs text-zinc-600 font-mono">
                      {tool.installs} installs
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {relatedGuides.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Related Setup Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 hover:bg-zinc-900/70 transition-colors"
                >
                  <h3 className="font-semibold text-white">{guide.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {siblingCategories.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Related categories</h2>
            <div className="flex flex-wrap gap-2">
              {siblingCategories.map((item) => (
                <Link
                  key={item}
                  href={`/categories/${slugifyCategory(item)}`}
                  className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Common questions about {categoryName} MCP servers and how to evaluate them.
            </p>
          </div>

          <div className="space-y-5">
            {faq.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800/60 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
            <span>© 2026 MCPIndex. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-zinc-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-zinc-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-zinc-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
