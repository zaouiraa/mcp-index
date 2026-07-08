import Link from 'next/link'
import type { Metadata } from 'next'

const baseUrl = 'https://www.mcpindex.dev'
const pageUrl = `${baseUrl}/what-is-model-context-protocol`
const title = 'What Is Model Context Protocol (MCP)? The Complete 2026 Guide | MCPIndex'
const description = 'Learn what Model Context Protocol (MCP) is, how MCP servers work with Claude Desktop and Cursor, why Anthropic introduced this open standard, and how to use MCP in real AI workflows in 2026.'
const ogImage = `${baseUrl}/og/what-is-model-context-protocol.png`

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'what is Model Context Protocol',
    'what is MCP',
    'Model Context Protocol explained',
    'MCP protocol',
    'MCP standard',
    'MCP open source',
    'Anthropic MCP',
    'how MCP servers work',
    'MCP vs function calling',
    'MCP client server architecture',
    'MCP host client server',
    'MCP tools resources prompts',
    'MCP integration',
    'MCP ecosystem',
    'MCP Claude Desktop',
    'MCP specification',
    'MCP security',
    'Model Context Protocol 2026',
    'MCP interoperability',
  ],
  authors: [{ name: 'MCPIndex Team', url: baseUrl }],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'MCPIndex',
    type: 'article',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'What Is Model Context Protocol (MCP)? The Complete 2026 Guide',
      },
    ],
    publishedTime: '2026-07-01T00:00:00Z',
    modifiedTime: '2026-07-01T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const faq = [
  {
    question: 'What does MCP stand for?',
    answer: 'MCP stands for Model Context Protocol, an open standard introduced by Anthropic for connecting AI applications to external tools and data sources through standardized MCP servers.',
  },
  {
    question: 'Who created Model Context Protocol?',
    answer: 'Anthropic introduced Model Context Protocol in November 2024 as an open-source standard for AI tool integration.',
  },
  {
    question: 'Is MCP open source?',
    answer: 'Yes. The official documentation describes MCP as an open-source standard with a public specification that anyone can implement for MCP servers or MCP clients.',
  },
  {
    question: 'Is MCP the same as an MCP server?',
    answer: 'No. MCP is the protocol specification, while an MCP server is an implementation that exposes tools, resources, and prompts through that protocol. MCP clients consume these capabilities.',
  },
  {
    question: 'Can MCP work outside Anthropic products?',
    answer: 'Yes. MCP is designed as an open standard. While Claude Desktop, Claude Code, and Cursor are popular MCP-compatible clients, the Model Context Protocol can work with any implementation that follows the specification.',
  },
  {
    question: 'What is the difference between MCP host, MCP client, and MCP server?',
    answer: 'An MCP host is the application where users interact with AI (like Claude Desktop). An MCP client is the protocol-speaking layer inside the host. An MCP server exposes external capabilities like GitHub repos or databases that the MCP client can access.',
  },
  {
    question: 'How is MCP different from function calling?',
    answer: 'Function calling enables a model to invoke tools within one application context. MCP goes further by standardizing how external capabilities are exposed across a client-server boundary, making integrations reusable across multiple MCP-compatible clients.',
  },
]

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Model Context Protocol (MCP)? The Complete 2026 Guide',
  description,
  url: pageUrl,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': pageUrl,
  },
  image: ogImage,
  datePublished: '2026-07-01T00:00:00Z',
  dateModified: '2026-07-01T00:00:00Z',
  wordCount: 2200,
  author: {
    '@type': 'Organization',
    name: 'MCPIndex Team',
    url: baseUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'MCPIndex',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 120,
      height: 120,
    },
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Model Context Protocol',
      description: 'An open standard for connecting AI applications to external tools and data sources through MCP servers.',
      url: 'https://modelcontextprotocol.io',
    },
    {
      '@type': 'Organization',
      name: 'Anthropic',
      description: 'The AI safety company that introduced Model Context Protocol.',
      url: 'https://anthropic.com',
    },
  ],
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

const jsonLdDefinedTerm = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Model Context Protocol (MCP)',
  description: 'An open-source standard introduced by Anthropic for connecting AI applications to external tools, data sources, and systems through standardized MCP servers instead of one-off custom integrations.',
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'AI Integration Standards',
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDefinedTerm) }} />

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
              Learn what Model Context Protocol is, how MCP servers work with Claude Desktop
              and Cursor, why Anthropic introduced this open standard, and how to use MCP
              in real AI workflows.
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
              <TocLink href="#why-mcp-matters">Why the MCP protocol matters</TocLink>
              <TocLink href="#what-problem-mcp-solves">What problem MCP solves</TocLink>
              <TocLink href="#how-mcp-works">How MCP client-server architecture works</TocLink>
              <TocLink href="#core-mcp-concepts">Core MCP concepts: host, client, server</TocLink>
              <TocLink href="#mcp-vs-function-calling">MCP vs function calling</TocLink>
              <TocLink href="#how-to-use-mcp-today">How to use MCP with Claude Desktop today</TocLink>
              <TocLink href="#faq">Frequently asked questions about MCP</TocLink>
            </div>
          </div>
        </header>

        <section className="relative border-l-2 border-purple-500 bg-purple-500/5 rounded-r-xl p-6 space-y-3">
          <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
          <h2 className="text-xl font-semibold text-white">Quick answer: What is MCP?</h2>
          <p className="text-zinc-300 leading-relaxed text-[15px]">
            Model Context Protocol, or MCP, is an open-source standard for connecting AI
            applications to external tools, data sources, and systems through reusable MCP
            servers instead of one-off custom integrations. Anthropic introduced MCP as
            a universal interoperability layer for modern AI workflows.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">Suggested next steps for MCP setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-400">
            <Link href="/tools" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Browse the full MCP servers directory
            </Link>
            <Link href="/claude-desktop-mcp-setup" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Read the Claude Desktop MCP setup guide
            </Link>
            <Link href="/tools/github-mcp" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Explore GitHub MCP Server
            </Link>
            <Link href="/how-to-install-mcp-servers" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition-colors">
              Learn how to install MCP servers
            </Link>
          </div>
        </section>

        <article className="space-y-10">
          <Section id="what-is-mcp" title="What is Model Context Protocol?">
            <p>
              Model Context Protocol, usually shortened to <strong>MCP</strong>, is an open-source
              standard for connecting AI applications to external tools, data sources, and systems
              in a consistent way through standardized MCP servers.
            </p>
            <p>
              In simple terms, MCP gives AI products a shared way to discover capabilities, read
              context, and call tools without rebuilding every integration from scratch for every
              app and every service.
            </p>
            <p>
              Anthropic introduced the Model Context Protocol as an open standard for secure,
              two-way connections between data sources and AI-powered tools. The wider MCP ecosystem
              now treats it as a serious interoperability layer for modern AI workflows across
              Claude Desktop, Claude Code, Cursor, and other MCP-compatible clients.
            </p>
          </Section>

          <Section id="why-mcp-matters" title="Why the MCP protocol matters">
            <p>
              Before the Model Context Protocol, teams often had to build custom integrations for
              each model, each application surface, and each external tool. That meant the same
              capability was repeatedly reimplemented across products and environments.
            </p>
            <p>
              The MCP protocol matters because it replaces much of that duplication with a reusable
              protocol model. Instead of building a separate bridge for every assistant and every
              service, teams can expose capabilities once through MCP servers and reuse them across
              all MCP-compatible clients.
            </p>
            <p>
              This becomes more valuable as AI products move beyond static chat and toward workflows
              that depend on live context, external data, and tool execution through the Model
              Context Protocol.
            </p>
          </Section>

          <Section id="what-problem-mcp-solves" title="What problem MCP solves">
            <p>
              The main problem the Model Context Protocol solves is integration fragmentation.
              Without a standard, every AI application needs separate integration work for every
              system it should access.
            </p>
            <p>
              A useful way to frame this is the shift from an M×N integration problem to an M+N model.
              In the old pattern, every assistant needs custom work for every external system. In the
              MCP pattern, tool builders expose one MCP-compatible interface and clients implement
              one MCP-compatible way to consume it.
            </p>
            <p>
              The result is less repeated work, better portability for MCP servers, and a cleaner
              separation between the AI interface and the underlying system integration.
            </p>
          </Section>

          <Section id="how-mcp-works" title="How MCP client-server architecture works">
            <p>
              At a high level, the Model Context Protocol uses a client-server architecture. An AI
              application runs an MCP client, and that client communicates with one or more MCP servers
              that expose capabilities such as tools, resources, or prompts.
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>The user works inside an MCP-compatible client that supports the Model Context Protocol.</li>
              <li>The MCP client connects to an MCP server through a standard protocol layer.</li>
              <li>The MCP server exposes available tools, resources, and readable context.</li>
              <li>The AI client uses those MCP server capabilities inside a real workflow, such as querying a repo or reading files.</li>
            </ol>
            <p>
              That MCP client-server structure makes the interaction predictable and reusable instead
              of improvised for every integration.
            </p>
          </Section>

          <Section id="core-mcp-concepts" title="Core MCP concepts: host, client, server">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP host</h3>
                <p>The MCP host is the application environment where the user works and where the AI experience is surfaced, such as Claude Desktop or Cursor.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP client</h3>
                <p>The MCP client is the Model Context Protocol-speaking layer inside the host that discovers and communicates with MCP servers.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP server</h3>
                <p>An MCP server exposes external capabilities such as files, repos, search, databases, or cloud systems through the Model Context Protocol.</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2">
                <h3 className="text-lg font-semibold text-white">MCP tools, resources, prompts</h3>
                <p>These are the structured actions, readable context, and reusable interaction assets that MCP servers make available through the protocol.</p>
              </div>
            </div>
          </Section>

          <Section id="mcp-vs-function-calling" title="MCP vs function calling">
            <p>
              The Model Context Protocol and function calling are related, but they are not the same.
              Function calling usually enables a model to generate structured requests to tools defined
              inside a specific application context.
            </p>
            <p>
              MCP goes further by standardizing how external capabilities are exposed and consumed
              across a client-server boundary. That makes MCP servers more reusable as an ecosystem
              integration layer.
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900/80">
                    <th className="text-left px-5 py-3.5 font-semibold text-zinc-300 border-b border-zinc-800">Topic</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-zinc-300 border-b border-zinc-800">Function calling</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-purple-300 border-b border-zinc-800">Model Context Protocol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="px-5 py-3 text-zinc-400">Primary role</td>
                    <td className="px-5 py-3 text-zinc-400">Structured invocation inside one app context.</td>
                    <td className="px-5 py-3 text-zinc-300">Reusable connectivity between MCP clients and MCP servers.</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="px-5 py-3 text-zinc-400">Reusability</td>
                    <td className="px-5 py-3 text-zinc-400">Often app-specific.</td>
                    <td className="px-5 py-3 text-zinc-300">Designed for reuse across all MCP-compatible clients and servers.</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-zinc-400">Best fit</td>
                    <td className="px-5 py-3 text-zinc-400">Small or tightly scoped tool workflows.</td>
                    <td className="px-5 py-3 text-zinc-300">Broader MCP ecosystems with many tools and repeatable integrations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="how-to-use-mcp-today" title="How to use MCP with Claude Desktop today">
            <p>
              Using the Model Context Protocol today usually means choosing an MCP-compatible host,
              configuring one or more MCP servers, and then granting the AI assistant access to the
              capabilities those MCP servers expose.
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Pick an MCP-capable environment such as Claude Desktop, Claude Code, or Cursor.</li>
              <li>Choose the MCP server that matches the task you want to accomplish.</li>
              <li>Add the required MCP server configuration and credentials.</li>
              <li>Verify that the MCP host can discover and use the MCP server capabilities.</li>
              <li>Start with read-only MCP server scope whenever possible for security.</li>
            </ol>
            <p>
              For practical next steps, readers should continue to the{' '}
              <Link href="/claude-desktop-mcp-setup" className="text-zinc-300 underline underline-offset-4 hover:text-white">
                Claude Desktop MCP setup guide
              </Link>{' '}
              or browse the{' '}
              <Link href="/tools" className="text-zinc-300 underline underline-offset-4 hover:text-white">
                MCP servers directory
              </Link>
              .
            </p>
          </Section>

          <Section id="where-mcp-is-useful" title="Where MCP is most useful">
            <p>
              The Model Context Protocol is most useful when AI needs live, external, structured
              context instead of only a static prompt. That includes coding, DevOps, security
              workflows, document retrieval, research, and operational systems.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>When the same MCP server capability should be reused across multiple MCP-compatible clients.</li>
              <li>When teams want cleaner separation between AI logic and system-specific MCP integration logic.</li>
              <li>When runtime context from MCP servers matters more than generic model knowledge.</li>
            </ul>
          </Section>

          <Section id="where-mcp-is-overkill" title="Where MCP may be overkill">
            <p>
              The Model Context Protocol is not automatically the right answer for every AI feature.
              If a product has one small internal tool, one model, and no need for reusable MCP
              integrations, a direct integration may be faster.
            </p>
            <p>
              The MCP protocol becomes more compelling as complexity grows. The more tools, MCP hosts,
              and systems that must work together, the more Model Context Protocol standardization
              starts to pay off.
            </p>
          </Section>

          <Section id="security-and-governance" title="MCP security and governance considerations">
            <p>
              Security is a major reason enterprise teams care about the Model Context Protocol.
              Because MCP mediates access to real systems through MCP servers, it creates a clearer
              place to define what an AI assistant can read, call, or retrieve.
            </p>
            <p>
              Good MCP implementation still depends on scoped credentials, permission boundaries,
              and read-only defaults where possible. The safest pattern is to begin with narrow MCP
              server access and expand only after the workflow is proven and monitored.
            </p>
          </Section>

          <Section id="faq" title="Frequently asked questions about MCP">
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

        <section id="related-mcp-guides" className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Related MCP guides</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Continue with MCP setup tutorials and practical MCP server selection guides for Model Context Protocol workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/claude-desktop-mcp-setup" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
              <h3 className="text-base font-semibold text-white">Claude Desktop MCP Setup</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Beginner-friendly guide to connect MCP servers in Claude Desktop.</p>
            </Link>
            <Link href="/how-to-install-mcp-servers" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
              <h3 className="text-base font-semibold text-white">How to Install MCP Servers</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Cross-client MCP installation guide for Claude Desktop, Cursor, and VS Code.</p>
            </Link>
            <Link href="/best-open-source-mcp-tools-on-github" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block">
              <h3 className="text-base font-semibold text-white">Best Open Source MCP Servers on GitHub</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Compare popular open source MCP servers by use case and setup difficulty.</p>
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
            <Link href="/submit" className="hover:text-zinc-400 transition-colors">Submit MCP Server</Link>
            <Link href="/contact" className="hover:text-zinc-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
