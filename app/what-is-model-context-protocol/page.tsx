import Link from 'next/link'
import type { Metadata } from 'next'

const baseUrl = 'https://www.mcpindex.dev'
const pageUrl = `${baseUrl}/what-is-model-context-protocol`
const title = 'What Is Model Context Protocol (MCP)? The Complete 2026 Guide | MCPIndex'
const description = 'Learn what Model Context Protocol (MCP) is, how MCP servers work, why Anthropic introduced it, and how to use MCP with real AI tools in 2026.'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'MCPIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faq = [
  {
    question: 'What does MCP stand for?',
    answer: 'MCP stands for Model Context Protocol.',
  },
  {
    question: 'Who created Model Context Protocol?',
    answer: 'Anthropic introduced Model Context Protocol in November 2024.',
  },
  {
    question: 'Is MCP open source?',
    answer: 'Yes. The official documentation describes MCP as an open-source standard.',
  },
  {
    question: 'Is MCP the same as an MCP server?',
    answer: 'No. MCP is the protocol, while an MCP server is an implementation that exposes capabilities through that protocol.',
  },
  {
    question: 'Can MCP work outside Anthropic products?',
    answer: 'Yes. MCP is designed as an open standard, although support depends on whether a specific client or platform implements it.',
  },
]

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Model Context Protocol (MCP)? The Complete 2026 Guide',
  description,
  url: pageUrl,
  author: {
    '@type': 'Organization',
    name: 'MCPIndex',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MCPIndex',
  },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: pageUrl,
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: `${baseUrl}/guides`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'What Is Model Context Protocol (MCP)?',
      item: pageUrl,
    },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

function TocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
      {children}
    </a>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="space-y-4 text-zinc-300 leading-relaxed text-[15px] md:text-base">{children}</div>
    </section>
  )
}

export default function WhatIsModelContextProtocolPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-zinc-300">What Is Model Context Protocol?</span>
        </nav>

        <header className="space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700">
              Beginner Guide
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Updated July 2026
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              MCP Basics
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              What Is Model Context Protocol (MCP)?
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
              Learn what Model Context Protocol is, how MCP servers work, why Anthropic introduced the standard,
              and how to use MCP in real AI workflows.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-zinc-500 flex-wrap">
            <span>By <span className="text-zinc-300">MCPIndex</span></span>
            <span className="text-zinc-700">•</span>
            <span>Published July 1, 2026</span>
            <span className="text-zinc-700">•</span>
            <span>8 min read</span>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-white">In this guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <TocLink href="#what-is-mcp">What is Model Context Protocol?</TocLink>
              <TocLink href="#why-mcp-matters">Why MCP matters</TocLink>
              <TocLink href="#what-problem-mcp-solves">What problem MCP solves</TocLink>
              <TocLink href="#how-mcp-works">How MCP works</TocLink>
              <TocLink href="#core-mcp-concepts">Core MCP concepts</TocLink>
              <TocLink href="#mcp-vs-function-calling">MCP vs function calling</TocLink>
              <TocLink href="#how-to-use-mcp-today">How to use MCP today</TocLink>
              <TocLink href="#faq">Frequently asked questions</TocLink>
            </div>
          </div>
        </header>

        <section className="relative border-l-2 border-purple-500 bg-purple-500/5 rounded-r-xl p-6 space-y-3">
          <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
          <h2 className="text-xl font-semibold text-white">Quick answer</h2>
          <p className="text-zinc-300 leading-relaxed text-[15px]">
            Model Context Protocol, or MCP, is an open standard for connecting AI applications to external tools,
            data sources, and systems through reusable MCP servers instead of one-off custom integrations.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">Suggested next steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-400">
            <Link href="/tools" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Browse the full MCP tools directory
            </Link>
            <Link href="/claude-desktop-mcp-setup" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Read the Claude Desktop MCP setup guide
            </Link>
            <Link href="/tools/github-mcp" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Explore GitHub MCP
            </Link>
            <Link href="/how-to-install-mcp-servers" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Learn how to install MCP servers
            </Link>
          </div>
        </section>

        <article className="space-y-10">
          <Section id="what-is-mcp" title="What is Model Context Protocol?">
            <p>
              Model Context Protocol, usually shortened to <strong>MCP</strong>, is an open standard for connecting AI
              applications to external tools, data sources, and systems in a consistent way.
            </p>
            <p>
              In simple terms, MCP gives AI products a shared way to discover capabilities, read context, and call
              tools without rebuilding every integration from scratch for every app and every service.
            </p>
            <p>
              Anthropic introduced the protocol as an open standard for secure, two-way connections between data
              sources and AI-powered tools, and the wider ecosystem now treats it as a serious interoperability layer
              for modern AI workflows.
            </p>
          </Section>

          <Section id="why-mcp-matters" title="Why MCP matters">
            <p>
              Before MCP, teams often had to build custom integrations for each model, each application surface, and
              each external tool. That meant the same capability was repeatedly reimplemented across products and
              environments.
            </p>
            <p>
              MCP matters because it replaces much of that duplication with a reusable protocol model. Instead of
              building a separate bridge for every assistant and every service, teams can expose capabilities once
              through MCP servers and reuse them across compatible clients.
            </p>
            <p>
              This becomes more valuable as AI products move beyond static chat and toward workflows that depend on
              live context, external data, and tool execution.
            </p>
          </Section>

          <Section id="what-problem-mcp-solves" title="What problem MCP solves">
            <p>
              The main problem MCP solves is integration fragmentation. Without a standard, every AI application needs
              separate integration work for every system it should access.
            </p>
            <p>
              A useful way to frame this is the shift from an M×N integration problem to an M+N model. In the old
              pattern, every assistant needs custom work for every external system. In the MCP pattern, tool builders
              expose one MCP-compatible interface and clients implement one MCP-compatible way to consume it.
            </p>
            <p>
              The result is less repeated work, better portability, and a cleaner separation between the AI interface
              and the underlying system integration.
            </p>
          </Section>

          <Section id="how-mcp-works" title="How MCP works">
            <p>
              At a high level, MCP uses a client-server model. An AI application runs an MCP client, and that client
              communicates with one or more MCP servers that expose capabilities such as tools, resources, or prompts.
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>The user works inside an AI application that supports MCP.</li>
              <li>The application connects to an MCP server through a standard protocol layer.</li>
              <li>The server exposes available actions and readable context.</li>
              <li>The AI client uses those capabilities inside a real workflow, such as querying a repo or reading files.</li>
            </ol>
            <p>
              That structure makes the interaction predictable and reusable instead of improvised for every integration.
            </p>
          </Section>

          <Section id="core-mcp-concepts" title="Core MCP concepts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP host</h3>
                <p>The application environment where the user works and where the AI experience is surfaced.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP client</h3>
                <p>The MCP-speaking layer inside the host that discovers and communicates with servers.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP server</h3>
                <p>The component that exposes external capabilities such as files, repos, search, databases, or cloud systems.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">Tools, resources, prompts</h3>
                <p>Structured actions, readable context, and reusable interaction assets available through the protocol.</p>
              </div>
            </div>
          </Section>

          <Section id="mcp-vs-function-calling" title="MCP vs function calling">
            <p>
              MCP and function calling are related, but they are not the same. Function calling usually enables a model
              to generate structured requests to tools defined inside a specific application context.
            </p>
            <p>
              MCP goes further by standardizing how external capabilities are exposed and consumed across a client-server
              boundary. That makes it more reusable as an ecosystem integration layer.
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900/80">
                    <th className="text-left px-5 py-3.5 font-semibold text-zinc-300 border-b border-zinc-800">Topic</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-zinc-300 border-b border-zinc-800">Function calling</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-purple-300 border-b border-zinc-800">MCP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="px-5 py-3 text-zinc-400">Primary role</td>
                    <td className="px-5 py-3 text-zinc-400">Structured invocation inside one app context.</td>
                    <td className="px-5 py-3 text-zinc-300">Reusable connectivity between AI clients and external systems.</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="px-5 py-3 text-zinc-400">Reusability</td>
                    <td className="px-5 py-3 text-zinc-400">Often app-specific.</td>
                    <td className="px-5 py-3 text-zinc-300">Designed for reuse across compatible clients and servers.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-zinc-400">Best fit</td>
                    <td className="px-5 py-3 text-zinc-400">Small or tightly scoped tool workflows.</td>
                    <td className="px-5 py-3 text-zinc-300">Broader ecosystems with many tools and repeatable integrations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="how-to-use-mcp-today" title="How to use MCP today">
            <p>
              Using MCP today usually means choosing a host that supports it, configuring one or more MCP servers, and
              then granting the AI assistant access to the capabilities those servers expose.
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Pick an MCP-capable environment such as a desktop assistant or coding tool.</li>
              <li>Choose the MCP server that matches the task.</li>
              <li>Add the required configuration and credentials.</li>
              <li>Verify that the host can discover and use the server capabilities.</li>
              <li>Start with read-only scope whenever possible.</li>
            </ol>
            <p>
              For practical next steps, readers should continue to the{' '}
              <Link href="/claude-desktop-mcp-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">
                Claude Desktop MCP setup guide
              </Link>{' '}
              or browse the{' '}
              <Link href="/tools" className="text-zinc-300 underline underline-offset-4 hover:text-white">
                MCP tools directory
              </Link>
              .
            </p>
          </Section>

          <Section id="where-mcp-is-useful" title="Where MCP is most useful">
            <p>
              MCP is most useful when AI needs live, external, structured context instead of only a static prompt. That
              includes coding, DevOps, security workflows, document retrieval, research, and operational systems.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>When the same external capability should be reused across multiple AI clients.</li>
              <li>When teams want cleaner separation between AI logic and system-specific integration logic.</li>
              <li>When runtime context matters more than generic model knowledge.</li>
            </ul>
          </Section>

          <Section id="where-mcp-is-overkill" title="Where MCP may be overkill">
            <p>
              MCP is not automatically the right answer for every AI feature. If a product has one small internal tool,
              one model, and no need for reusable integrations, a direct integration may be faster.
            </p>
            <p>
              The protocol becomes more compelling as complexity grows. The more tools, environments, and systems that
              must work together, the more MCP standardization starts to pay off.
            </p>
          </Section>

          <Section id="security-and-governance" title="Security and governance considerations">
            <p>
              Security is a major reason enterprise teams care about MCP. Because the protocol mediates access to real
              systems, it creates a clearer place to define what an AI assistant can read, call, or retrieve.
            </p>
            <p>
              Good implementation still depends on scoped credentials, permission boundaries, and read-only defaults
              where possible. The safest pattern is to begin with narrow access and expand only after the workflow is
              proven and monitored.
            </p>
          </Section>

          <Section id="faq" title="Frequently asked questions">
            <div className="space-y-5">
              {faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="text-zinc-400 leading-relaxed text-[15px]">{item.answer}</p>
                </article>
              ))}
            </div>
          </Section>
        </article>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Continue with setup tutorials and practical tool-selection guides for MCP workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/claude-desktop-mcp-setup" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
              <h3 className="text-base font-semibold text-white">Claude Desktop MCP Setup</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Beginner-friendly guide to connect MCP servers in Claude Desktop.</p>
            </Link>
            <Link href="/how-to-install-mcp-servers" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
              <h3 className="text-base font-semibold text-white">How to Install MCP Servers</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Cross-client installation guide for Claude Desktop, Cursor, and VS Code.</p>
            </Link>
            <Link href="/best-open-source-mcp-tools-on-github" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
              <h3 className="text-base font-semibold text-white">Best Open Source MCP Tools on GitHub</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Compare popular open source MCP tools by use case and setup difficulty.</p>
            </Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-zinc-800/60 mt-8">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span>© 2026 MCPIndex. All rights reserved.</span>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
            <Link href="/submit" className="hover:text-zinc-400 transition-colors">Submit Server</Link>
            <Link href="/contact" className="hover:text-zinc-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
