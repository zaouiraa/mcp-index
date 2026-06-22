import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllTools } from "@/lib/supabase";

export const dynamicParams = true;

const baseUrl = "https://www.mcpindex.dev";

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

function getCategoryIntro(categoryName: string, count: number) {
  const lower = categoryName.toLowerCase();

  if (lower.includes("search")) {
    return `Browse ${count} MCP search tools that help AI assistants retrieve live web results, research sources, and current information beyond static training data.`;
  }

  if (lower.includes("version control")) {
    return `Browse ${count} version control MCP servers for Git, GitHub, GitLab, repositories, branches, pull requests, merge requests, and code collaboration workflows.`;
  }

  if (lower.includes("developer tools")) {
    return `Browse ${count} developer-focused MCP servers for coding, docs, desktop automation, local workflows, and AI-assisted engineering tasks.`;
  }

  if (lower.includes("database")) {
    return `Browse ${count} database MCP servers for querying data, managing schemas, inspecting records, and connecting AI tools to structured backends.`;
  }

  if (lower.includes("cloud") || lower.includes("infrastructure")) {
    return `Browse ${count} cloud and infrastructure MCP servers for AWS, Kubernetes, DevOps workflows, cluster operations, and environment management.`;
  }

  if (lower.includes("productivity")) {
    return `Browse ${count} productivity MCP servers for docs, calendar, email, drive, workspace automation, and AI-assisted team operations.`;
  }

  if (lower.includes("security")) {
    return `Browse ${count} security MCP servers for vulnerability scanning, code analysis, and safer AI-assisted development workflows.`;
  }

  return `Browse ${count} MCP servers in the ${categoryName} category on MCPIndex. Compare tools, review setup options, and find the best fit for your AI workflow.`;
}

function getCategoryFaq(categoryName: string) {
  return [
    {
      q: `What is the ${categoryName} category on MCPIndex?`,
      a: `This category groups MCP servers related to ${categoryName.toLowerCase()} so you can compare similar tools, review setup details, and choose the right server for your workflow.`,
    },
    {
      q: `How do I choose the best ${categoryName} MCP server?`,
      a: `Start by checking the tool's primary use case, required credentials, setup complexity, compatibility with your MCP client, and whether it supports the exact workflow you want to automate.`,
    },
    {
      q: `Are all tools in ${categoryName} free?`,
      a: `Not always. Some MCP servers are fully free and open source, while others may depend on a paid API, hosted product, or commercial service behind the integration.`,
    },
  ];
}

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
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
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const tools = (await getAllTools()) as Tool[];

  const matchingTools = tools.filter(
    (tool) => tool.category && slugifyCategory(tool.category) === category
  );

  if (matchingTools.length === 0) {
    return {
      title: "Category Not Found | MCPIndex",
      description: "The requested MCP category page could not be found.",
      alternates: {
        canonical: `${baseUrl}/categories/${category}`,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const categoryName = matchingTools[0].category || titleizeSlug(category);
  const description = getCategoryIntro(categoryName, matchingTools.length);
  const canonical = `${baseUrl}/categories/${category}`;

  return {
    title: `${categoryName} MCP Servers: Best Tools, Setup & Directory | MCPIndex`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${categoryName} MCP Servers | MCPIndex`,
      description,
      url: canonical,
      siteName: "MCPIndex",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} MCP Servers | MCPIndex`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const tools = (await getAllTools()) as Tool[];

  const matchingTools = tools
    .filter((tool) => tool.category && slugifyCategory(tool.category) === category)
    .sort((a, b) => a.name.localeCompare(b.name));

  if (matchingTools.length === 0) notFound();

  const categoryName = matchingTools[0].category || titleizeSlug(category);
  const intro = getCategoryIntro(categoryName, matchingTools.length);
  const faq = getCategoryFaq(categoryName);

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
        name: "Categories",
        item: `${baseUrl}/categories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `${baseUrl}/categories/${category}`,
      },
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
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
            Compare setup patterns, supported workflows, and related tools in the{" "}
            <Link
              href="/tools"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              full MCP tools directory
            </Link>
            .
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
          <h2 className="text-xl font-semibold">What you will find here</h2>
          <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span>
                Tools grouped by a shared workflow focus so you can compare similar MCP servers faster.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span>
                Direct links to individual tool pages with configuration snippets, setup steps, and FAQs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
              <span>
                Internal links that help you move from broad category research to tool-specific decisions.
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-2xl font-semibold">Tools in {categoryName}</h2>
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

        <section className="flex items-center justify-center py-2">
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-mono text-center px-4">
            Ad Space
          </div>
        </section>

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
              Common questions about the {categoryName} category and how to evaluate similar MCP servers.
            </p>
          </div>

          <div className="space-y-5">
            {faq.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
