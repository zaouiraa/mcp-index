import Link from "next/link";
import type { Metadata } from "next";
import { DownloadConfigButton } from "@/components/download-config-button";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/best-mcp-servers-for-code-review`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(
  "Best MCP Servers for Code Review in 2026"
)}&description=${encodeURIComponent(
  "Automate Pull Request Feedback with GitHub, Semgrep & Context7 MCP."
)}`;

export const metadata: Metadata = {
  title: "Best MCP Servers for Code Review & AI Debugging in 2026 | MCPIndex",
  description:
    "Automate pull request feedback with the best MCP servers for code review in 2026. Compare GitHub MCP, Semgrep MCP, and Context7 MCP for AI-powered debugging.",
  keywords: [
    "best MCP servers for code review",
    "how to use MCP for code review",
    "can Claude review my pull requests",
    "MCP server for automated debugging",
    "github MCP server code review workflow",
    "semgrep MCP for security code review",
    "AI code review tools 2026",
    "Claude code debugging assistant",
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
    title: "Best MCP Servers for Code Review & AI Debugging in 2026",
    description:
      "Compare GitHub MCP, Semgrep MCP, and Context7 MCP for AI-powered code review and automated debugging. Build an automated pipeline today.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Best MCP Servers for Code Review 2026" }],
    publishedTime: "2026-01-20T00:00:00Z",
    modifiedTime: "2026-06-01T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MCP Servers for Code Review & AI Debugging in 2026 | MCPIndex",
    description:
      "Compare GitHub MCP, Semgrep MCP, and Context7 MCP for AI-powered code review and automated debugging. Build an automated pipeline today.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "Can Claude review my pull requests automatically?",
    answer:
      "Yes, by connecting Claude to the GitHub MCP Server, you can ask it to fetch any open pull request, analyze the diff, and post review comments. You can even schedule this via a CI script to run on every new PR.",
  },
  {
    question: "Is the Semgrep MCP server suitable for all languages?",
    answer:
      "Semgrep supports over 30 languages and has a rich community ruleset. For the best results, you should customize the rules to match your project's specific security requirements. The MCP server makes it easy to run these rules from Claude.",
  },
  {
    question: "Does the Context7 MCP server work with private documentation?",
    answer:
      "Context7 is primarily designed for public documentation. If you have private internal docs, you might need to host your own documentation server and expose it via a custom MCP server. However, for public libraries and frameworks, Context7 is invaluable.",
  },
];

const relatedGuides = [
  {
    title: "Claude Desktop MCP Setup (2026)",
    body: "The complete beginner guide to connecting MCP servers to Claude.",
    href: "/claude-desktop-mcp-setup",
  },
  {
    title: "GitHub MCP Server Setup",
    body: "Step-by-step installation guide with a real config example.",
    href: "/github-mcp-server-setup",
  },
  {
    title: "How to Install MCP Servers",
    body: "Cross-client installation for Cursor, Claude Code, and VS Code.",
    href: "/how-to-install-mcp-servers",
  },
];

export default function BestMcpServersForCodeReviewPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Best MCP Servers for Code Review & AI Debugging in 2026",
    description:
      "Expert comparison of the best MCP servers for code review in 2026. Learn how to automate pull request feedback using GitHub MCP, Semgrep MCP, and Context7 MCP.",
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: ogImage,
    datePublished: "2026-01-20T00:00:00Z",
    dateModified: "2026-06-01T00:00:00Z", // صارمة ISO 8601
    wordCount: 2500,
    author: { "@type": "Organization", name: "MCPIndex Team", url: baseUrl },
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
      name: "Code Review",
      description:
        "Automated code review using AI agents and Model Context Protocol servers.",
    },
    proficiencyLevel: "Advanced",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
        name: "Best MCP Servers for Code Review",
        item: canonical,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build an Automated Code Review Pipeline with MCP",
    description:
      "Step-by-step guide to assembling an automated pull request review pipeline using GitHub MCP, Semgrep MCP, and Context7 MCP.",
    totalTime: "PT15M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Fetch the PR",
        text: "Use the GitHub MCP Server to list open pull requests and select the one to review. Claude fetches the diff and prepares to analyze it.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Security scan",
        text: "Claude passes the changed files to the Semgrep MCP Server. Semgrep runs its ruleset and returns any vulnerabilities found.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Contextualize",
        text: "Claude queries Context7 MCP for documentation relevant to the libraries modified in the PR. This ensures suggestions are aligned with the latest APIs.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Generate review",
        text: "Claude synthesizes the diff analysis, Semgrep findings, and documentation into a single review. It categorizes comments into security, performance, style, and documentation.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Post feedback",
        text: "Claude uses the GitHub MCP Server to post the review as inline comments or a single PR summary, then applies the ai-reviewed label.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Best MCP Servers for Code Review</span>
        </nav>

        {/* Hero */}
        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated 2026 Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Expert Engineering
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Best MCP Servers for Code Review &amp; AI Debugging in 2026: Automate
            Pull Request Feedback
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            It is 2026, and the code review process has been fundamentally
            rewritten by AI. We&apos;ve moved beyond passive linting rules and
            manual nitpicking over variable names. Modern development teams are
            now deploying AI agents that don&apos;t just flag syntax errors—they
            reason about logic flaws, suggest architectural improvements, and
            even write the fix directly into the pull request.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            The Model Context Protocol is the secret engine behind this shift,
            giving LLMs like Claude direct, structured access to repositories,
            diffs, and security scanners. In this guide, I&apos;ll walk you
            through the best MCP servers for code review and how to combine them
            into an automated pipeline that delivers senior‑level feedback on
            every pull request.
          </p>
        </header>

        {/* Image 1: Hero visual */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${baseUrl}/api/og?title=${encodeURIComponent(
            "Automated Code Review in 2026"
          )}&description=${encodeURIComponent(
            "How MCP servers eliminate review fatigue"
          )}`}
          alt="MCP-based code review overview"
          className="rounded-2xl border border-zinc-800 w-full"
          width={1200}
          height={630}
          loading="eager"
        />

        {/* Section 1: Why AI Code Review Needs MCP */}
        <section id="why-ai-code-review-needs-mcp" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            Why AI Code Review Needs the Model Context Protocol in 2026
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Manual code review is a bottleneck that scales poorly. Even the best
            engineers struggle to maintain consistent attention across a 40‑file
            diff while context‑switching between feature logic, security
            implications, and style guide adherence. AI‑assisted review solves
            this by absorbing the entire diff into a large context window and
            reasoning about it holistically.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            But raw LLM access isn&apos;t enough. To be truly useful, the AI
            needs to see the full repository history, compare the diff against
            the project&apos;s existing patterns, run targeted security scans,
            and then post inline comments—all without you copy‑pasting code
            between windows. This is exactly the integration gap that the Model
            Context Protocol fills. By wrapping version control platforms and
            analysis tools in a standardized interface, the{" "}
            <strong>best MCP servers for code review</strong> turn Claude into an
            active reviewer that can navigate the codebase, query past commits,
            and surface bugs that a linter alone would never catch.
          </p>
          <h3 className="text-xl font-medium text-zinc-200 mt-6">
            How to Use MCP for Code Review
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            To build an effective MCP‑powered review workflow, you need three
            layers: repository access, security analysis, and knowledge context.
            A typical setup starts with the GitHub MCP Server to fetch pull
            requests and diffs. Then, a security‑focused MCP server like Semgrep
            scans the changed files for vulnerabilities. Finally, a
            documentation‑aware server like Context7 MCP ensures the AI&apos;s
            suggestions are aligned with the latest library APIs.
          </p>
        </section>

        {/* Deep Dive: GitHub MCP Server */}
        <section id="deep-dive-github" className="space-y-6 scroll-mt-24">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              Deep Dive: GitHub MCP Server for Code Review
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${baseUrl}/api/og?title=${encodeURIComponent(
                "GitHub MCP Server"
              )}&description=${encodeURIComponent(
                "Full PR analysis and inline comments"
              )}`}
              alt="GitHub MCP Server code review workflow"
              className="rounded-xl border border-zinc-700 w-full"
              width={1200}
              height={630}
              loading="lazy"
            />
            <p className="text-zinc-400 leading-relaxed text-sm">
              The GitHub MCP Server is the backbone of any AI review pipeline. It
              gives Claude the ability to list open pull requests, inspect their
              diffs, read repository files, and post review comments—all directly
              from the chat interface.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              One non‑obvious practice I always follow is pairing the GitHub MCP
              Server with a custom label workflow. I ask Claude to add labels
              like <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded text-xs">ai-reviewed</code> or{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded text-xs">needs‑human‑attention</code>{" "}
              based on its confidence level. For teams worried about token costs,
              limit the diff size by using <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded text-xs">get_file_content</code>{" "}
              to fetch only the changed files.
            </p>
            <p className="pt-2">
              <Link
                href="/tools/github-mcp"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View GitHub MCP Server full setup guide →
              </Link>
            </p>
          </div>
        </section>

        {/* Deep Dive: Semgrep MCP Server */}
        <section id="deep-dive-semgrep" className="space-y-6 scroll-mt-24">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              Deep Dive: Semgrep MCP Server for Security‑Focused Code Review
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${baseUrl}/api/og?title=${encodeURIComponent(
                "Semgrep MCP Server"
              )}&description=${encodeURIComponent(
                "Security scanning with AI-powered fixes"
              )}`}
              alt="Semgrep MCP security code review"
              className="rounded-xl border border-zinc-700 w-full"
              width={1200}
              height={630}
              loading="lazy"
            />
            <p className="text-zinc-400 leading-relaxed text-sm">
              While the GitHub MCP Server handles the logistics of the review,
              Semgrep MCP Server adds the security intelligence. Semgrep is a
              fast, open‑source static analysis engine that scans code for
              hundreds of security rules—SQL injection, hardcoded secrets, unsafe
              deserialization, and more.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              The most valuable aspect of the{" "}
              <strong>semgrep mcp for security code review</strong> integration
              is that Claude can interpret Semgrep&apos;s findings and suggest
              precise, context‑aware fixes. A raw Semgrep report might flag a
              potentially unsafe <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded text-xs">eval()</code>{" "}
              call. But Claude, reading the surrounding code, can determine
              whether that <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded text-xs">eval</code>{" "}
              is reachable from user input and rewrite it as a safer parser—then
              post the fix as a suggestion directly in the PR.
            </p>
            <p className="pt-2">
              <Link
                href="/tools/semgrep-mcp"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View Semgrep MCP Server full setup guide →
              </Link>
            </p>
          </div>
        </section>

        {/* Deep Dive: Context7 MCP Server */}
        <section id="deep-dive-context7" className="space-y-6 scroll-mt-24">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              Deep Dive: Context7 MCP Server – The Knowledge Layer
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${baseUrl}/api/og?title=${encodeURIComponent(
                "Context7 MCP Server"
              )}&description=${encodeURIComponent(
                "Live documentation for accurate code suggestions"
              )}`}
              alt="Context7 MCP live documentation"
              className="rounded-xl border border-zinc-700 w-full"
              width={1200}
              height={630}
              loading="lazy"
            />
            <p className="text-zinc-400 leading-relaxed text-sm">
              The third pillar of a mature AI review stack is live documentation.
              I&apos;ve lost count of how many times a reviewer suggested an
              outdated API pattern simply because the model&apos;s training data
              predates the latest library release. Context7 MCP Server solves
              this by injecting up‑to‑date, version‑specific documentation
              directly into Claude&apos;s context window.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              When reviewing code that calls a third‑party library, I explicitly
              ask Claude to fetch the relevant documentation via Context7 before
              making a suggestion. This eliminates &quot;hallucinated&quot; fixes
              and transforms the AI into a truly reliable reviewer. Context7 also
              shines when you need to explain a complex code block to a junior
              developer.
            </p>
            <p className="pt-2">
              <Link
                href="/tools/context7-mcp"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View Context7 MCP Server full setup guide →
              </Link>
            </p>
          </div>
        </section>

        {/* Head-to-Head Comparison */}
        <section id="head-to-head-comparison" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            Head‑to‑Head Comparison: GitHub MCP vs Semgrep MCP vs Context7 MCP
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm" aria-label="Comparison between GitHub MCP, Semgrep MCP, and Context7 MCP features">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80">
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    Feature
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    <Link href="/tools/github-mcp" className="hover:text-white transition-colors">GitHub MCP</Link>
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    <Link href="/tools/semgrep-mcp" className="hover:text-white transition-colors">Semgrep MCP</Link>
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-400 font-mono text-xs">
                    <Link href="/tools/context7-mcp" className="hover:text-white transition-colors">Context7 MCP</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors">
                  <td className="px-4 py-3 text-white font-medium">Primary Strength</td>
                  <td className="px-4 py-3 text-zinc-400">Full repo/PR management</td>
                  <td className="px-4 py-3 text-zinc-400">Security‑focused static analysis</td>
                  <td className="px-4 py-3 text-zinc-400">Live library documentation</td>
                </tr>
                <tr className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors">
                  <td className="px-4 py-3 text-white font-medium">Diff Analysis</td>
                  <td className="px-4 py-3 text-zinc-400">Native diff retrieval</td>
                  <td className="px-4 py-3 text-zinc-400">Scans diff for security patterns</td>
                  <td className="px-4 py-3 text-zinc-400">Not applicable (docs only)</td>
                </tr>
                <tr className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors">
                  <td className="px-4 py-3 text-white font-medium">Auto‑Fix Capability</td>
                  <td className="px-4 py-3 text-zinc-400">Can suggest and post fixes</td>
                  <td className="px-4 py-3 text-zinc-400">Can propose fixes for flagged issues</td>
                  <td className="px-4 py-3 text-zinc-400">Provides reference for manual fixes</td>
                </tr>
                <tr className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors">
                  <td className="px-4 py-3 text-white font-medium">Setup Complexity</td>
                  <td className="px-4 py-3 text-zinc-400">Moderate (token scopes)</td>
                  <td className="px-4 py-3 text-zinc-400">Moderate (ruleset customization)</td>
                  <td className="px-4 py-3 text-zinc-400">Low (just API key)</td>
                </tr>
                <tr className="hover:bg-zinc-900/50 transition-colors">
                  <td className="px-4 py-3 text-white font-medium">Best For</td>
                  <td className="px-4 py-3 text-zinc-400">Orchestrating the entire review</td>
                  <td className="px-4 py-3 text-zinc-400">Catching vulnerabilities and secrets</td>
                  <td className="px-4 py-3 text-zinc-400">Ensuring suggestions use correct APIs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Build Pipeline */}
        <section id="build-automated-pipeline" className="space-y-5 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              How to Build an Automated Code Review Pipeline with MCP
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Let&apos;s assemble these three servers into a single, automated pipeline
              that delivers senior‑level feedback on every pull request.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              {
                step: "1",
                title: "Fetch the PR",
                detail:
                  "Use the GitHub MCP Server to list open pull requests and select the one to review. Claude fetches the diff and prepares to analyze it.",
              },
              {
                step: "2",
                title: "Security scan",
                detail:
                  "Claude passes the changed files to the Semgrep MCP Server. Semgrep runs its ruleset and returns any vulnerabilities found.",
              },
              {
                step: "3",
                title: "Contextualize",
                detail:
                  "Claude queries Context7 MCP for documentation relevant to the libraries modified in the PR. This ensures suggestions are aligned with the latest APIs.",
              },
              {
                step: "4",
                title: "Generate review",
                detail:
                  "Claude synthesizes the diff analysis, Semgrep findings, and documentation into a single review. It categorizes comments into security, performance, style, and documentation.",
              },
              {
                step: "5",
                title: "Post feedback",
                detail:
                  "Claude uses the GitHub MCP Server to post the review as inline comments or a single PR summary, then applies the ai-reviewed label.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs font-mono flex items-center justify-center mt-0.5">
                  {item.step}
                </span>
                <div className="space-y-1.5">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Security Considerations */}
        <section id="security-considerations" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold">
            Key Security Considerations When Using AI for Code Review
          </h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Least‑privilege tokens
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Every MCP server that accesses your repositories should use a token
              with the absolute minimum required scopes. For GitHub MCP, a
              fine‑grained token limited to the specific repositories you want to
              review is far safer than a classic <code className="text-zinc-300 bg-zinc-900 px-1 py-0.5 rounded text-xs">repo</code> token.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">
              Prompt injection risks
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              An attacker could embed a malicious instruction in a code comment,
              hoping the AI will interpret it as a command. Always instruct
              Claude to treat code comments as plain text, never as instructions.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">
              Review sandboxing
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Never allow the AI to automatically merge pull requests or push
              code without human approval. Keep the human as the final
              gatekeeper. The MCP tools should be configured to comment and
              suggest, never to merge.
            </p>
          </div>
        </section>

        {/* Related Guides */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:border-purple-500/30 transition-colors"
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

        {/* Free config download */}
        <section className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-zinc-950 to-zinc-900 p-8 sm:p-10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Free Resource
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Skip the setup. Start reviewing faster.
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-xl">
                We combined the top code review MCP servers (GitHub, Semgrep,
                and Context7) into a single, ready-to-paste{" "}
                <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                  claude_desktop_config.json
                </code>{" "}
                file. Just add your tokens and you&apos;re good to go.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["GitHub", "Semgrep", "Context7"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <DownloadConfigButton />
              <p className="text-[11px] text-zinc-600 mt-3 text-center lg:text-right">
                No email required. Instant JSON download.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="best-mcp-servers-code-review-faq" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 overflow-hidden"
                aria-label={faq.question}
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-white font-medium text-sm">
                  {faq.question}
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Browse the full MCP tools directory
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            MCPIndex tracks the best MCP servers across every category — code
            review, security, version control, and more. Every listing includes
            setup steps and a ready-to-copy configuration block.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <Link
              href="/tools"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors"
            >
              Browse all MCP tools
            </Link>
            <Link
              href="/categories/version-control"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-semibold text-sm transition-colors"
            >
              Browse Version Control tools
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
