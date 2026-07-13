import RelatedGuides from "@/components/content/RelatedGuides";
import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://www.mcpindex.dev";
const canonical = `${baseUrl}/claude-desktop-mcp-setup`;
const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent("Claude Desktop MCP Setup Guide")}&description=${encodeURIComponent("The definitive guide for claude_desktop_config.json configuration.")}`;

export const metadata: Metadata = {
  title: "Claude Desktop MCP Setup (2026 Guide) | Config JSON & npx",
  description:
    "Complete Claude Desktop MCP setup guide for 2026. Step-by-step claude_desktop_config.json configuration, npx MCP server installation, Node.js requirements, testing prompts, and troubleshooting errors.",
  keywords: [
    "Claude Desktop MCP setup",
    "claude_desktop_config.json",
    "MCP server Claude Desktop",
    "npx MCP server",
    "Claude Desktop config file path",
    "MCP setup guide",
    "Claude Desktop MCP not working",
    "install MCP server Claude",
    "Claude Desktop npx configuration",
    "MCP server configuration JSON",
    "Claude Desktop MCP errors",
    "GitHub MCP Server Claude Desktop",
    "multiple MCP servers Claude",
    "Claude Desktop MCP troubleshooting",
    "Model Context Protocol Claude",
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
    title: "Claude Desktop MCP Setup (2026 Guide) | Config JSON & npx",
    description:
      "Complete Claude Desktop MCP setup guide. claude_desktop_config.json configuration, npx MCP server installation, Node.js requirements, and troubleshooting.",
    url: canonical,
    siteName: "MCPIndex",
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Claude Desktop MCP Setup Guide 2026 - Config JSON and npx Installation",
      },
    ],
    publishedTime: "2025-01-15T00:00:00Z",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Desktop MCP Setup (2026 Guide) | Config JSON & npx",
    description:
      "Complete Claude Desktop MCP setup guide. claude_desktop_config.json, npx MCP server installation, and troubleshooting.",
    images: [ogImage],
  },
};

const faqs = [
  {
    question: "What is Claude Desktop MCP setup?",
    answer:
      "Claude Desktop MCP setup is the process of connecting Claude Desktop to Model Context Protocol servers through a local claude_desktop_config.json file. Once configured, Claude can use external MCP tools such as GitHub, local file systems, databases, and APIs directly from the chat interface.",
  },
  {
    question: "Do I need Node.js to use MCP in Claude Desktop?",
    answer:
      "For most popular MCP servers, yes. Many MCP servers are distributed as npm packages and run through npx, so Node.js needs to be installed and available in your system PATH for Claude Desktop to launch them.",
  },
  {
    question: "Where is the Claude Desktop MCP config file?",
    answer:
      "On macOS, the claude_desktop_config.json file is at ~/Library/Application Support/Claude/claude_desktop_config.json. On Windows, it is at %APPDATA%\\Claude\\claude_desktop_config.json.",
  },
  {
    question: "Why is my MCP server not appearing in Claude Desktop?",
    answer:
      "The most common reasons are invalid JSON in claude_desktop_config.json, missing Node.js for npx-based MCP servers, incorrect environment variables, or not fully restarting Claude Desktop after editing the MCP configuration file.",
  },
  {
    question: "Can I add more than one MCP server to Claude Desktop?",
    answer:
      "Yes. Claude Desktop supports multiple MCP servers inside the same mcpServers object in claude_desktop_config.json. Most developers start with 2 to 5 MCP servers depending on their workflow needs.",
  },
  {
    question: "Which MCP server should I install first in Claude Desktop?",
    answer:
      "For most developers, GitHub MCP Server is the best first MCP server to install because it connects Claude to repositories, pull requests, issues, and code search. Context7 MCP Server is another strong early addition because it improves coding accuracy with live documentation.",
  },
];

export default function ClaudeDesktopMcpSetupPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Claude Desktop MCP Setup (2026 Guide) | Config JSON & npx",
    description:
      "Complete Claude Desktop MCP setup guide. claude_desktop_config.json configuration, npx MCP server installation, Node.js requirements, testing, and troubleshooting.",
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: ogImage,
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: new Date().toISOString().split("T")[0],
    wordCount: 1800,
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
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Claude Desktop",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "macOS, Windows",
      },
      {
        "@type": "Thing",
        name: "Model Context Protocol",
        description: "An open standard for connecting AI applications to external tools and data sources through MCP servers.",
      },
    ],
    proficiencyLevel: "Beginner",
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
        name: "Claude Desktop MCP Setup",
        item: canonical,
      },
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up MCP Servers in Claude Desktop",
    description:
      "Step-by-step guide to install and configure MCP servers in Claude Desktop using claude_desktop_config.json and npx.",
    totalTime: "PT10M",
    tool: [
      {
        "@type": "HowToTool",
        name: "Claude Desktop",
      },
      {
        "@type": "HowToTool",
        name: "Node.js with npx",
      },
      {
        "@type": "HowToTool",
        name: "claude_desktop_config.json",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Install Node.js for npx MCP servers",
        text: "Install the latest LTS version of Node.js and verify node, npm, and npx are available in your terminal.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open claude_desktop_config.json",
        text: "Locate and open the Claude Desktop config file at ~/Library/Application Support/Claude/claude_desktop_config.json (macOS) or %APPDATA%\\Claude\\claude_desktop_config.json (Windows).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Add MCP server configuration to mcpServers",
        text: "Add your first MCP server JSON block with command, args, and env variables inside the mcpServers object.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Restart Claude Desktop fully",
        text: "Completely quit and reopen Claude Desktop to load the new MCP server configuration.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Test the MCP server connection",
        text: "Ask Claude to perform a task that requires the MCP server, such as listing GitHub repositories.",
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

        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">Claude Desktop MCP Setup</span>
        </nav>

        <header className="space-y-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              Updated June 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Beginner Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Claude Desktop MCP Setup
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            This guide explains how to set up MCP servers in Claude Desktop step by
            step. You will install Node.js for npx, locate the claude_desktop_config.json
            file, add your first MCP server configuration, restart Claude, and test
            that the Model Context Protocol connection works.
          </p>

          <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">
            If you want a concrete example after this Claude Desktop MCP tutorial, start with the step-by-step{" "}
            <Link
              href="/github-mcp-server-setup"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              GitHub MCP Server setup
            </Link>
            . For broader recommendations, see{" "}
            <Link
              href="/best-mcp-servers-for-claude"
              className="text-zinc-300 underline underline-offset-4 hover:text-white"
            >
              Best MCP Servers for Claude
            </Link>
            .
          </p>
        </header>

        <section id="what-mcp-does-in-claude-desktop" className="space-y-4">
          <h2 className="text-2xl font-semibold">What MCP does in Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            MCP stands for Model Context Protocol. It is the layer that lets Claude
            Desktop connect to MCP servers outside the chat window, including GitHub,
            local files, databases, documentation sources, monitoring systems, and
            productivity apps.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Without MCP, Claude can only respond with the information already in the
            conversation. With MCP servers configured, Claude can read live data,
            inspect your files, run supported tools through the Model Context Protocol,
            and complete real workflows more accurately.
          </p>
        </section>

        <section id="claude-desktop-mcp-prerequisites" className="space-y-5">
          <h2 className="text-2xl font-semibold">What you need before Claude Desktop MCP setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Claude Desktop installed",
                body: "You need the Claude Desktop application installed and signed in before you can connect any MCP server through the Model Context Protocol.",
              },
              {
                title: "Node.js for npx MCP servers",
                body: "Most MCP servers are launched with npx, so Node.js must be installed and available from your terminal for Claude Desktop to start them.",
              },
              {
                title: "MCP server config block",
                body: "Every MCP server provides a JSON configuration block with command, args, and sometimes environment variables for claude_desktop_config.json.",
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

        <section id="step-1-install-nodejs-for-npx-mcp-servers" className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 1: Install Node.js for npx MCP servers</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most MCP servers use npm packages and are launched through{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">npx</code>.
            That means Node.js is required for the most common Claude Desktop MCP setup flow.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Quick Node.js check for MCP servers</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Open your terminal and run:
            </p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`node -v
npm -v
npx -v`}
            </pre>
            <p className="text-zinc-400 text-sm leading-relaxed">
              If these commands fail, install the latest LTS version of Node.js
              before continuing with your Claude Desktop MCP setup.
            </p>
          </div>
        </section>

        <section id="step-2-open-claude-desktop-config-json" className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 2: Open the Claude Desktop config file</h2>
          <p className="text-zinc-400 leading-relaxed">
            Claude Desktop loads MCP servers from a local JSON file named{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              claude_desktop_config.json
            </code>
            . This file contains the list of MCP servers you want Claude to start
            on launch through the Model Context Protocol.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Claude Desktop config file paths</h3>
            <p className="text-zinc-400 text-sm">
              macOS:{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                ~/Library/Application Support/Claude/claude_desktop_config.json
              </code>
            </p>
            <p className="text-zinc-400 text-sm">
              Windows:{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                %APPDATA%\Claude\claude_desktop_config.json
              </code>
            </p>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            In many Claude Desktop builds, you can open the app, go to the developer
            section, and use the built-in option to edit the claude_desktop_config.json
            file directly. That is usually the fastest path for MCP setup beginners.
          </p>
        </section>

        <section id="step-3-add-first-mcp-server-to-claude-desktop" className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 3: Add your first MCP server to Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            If you are just getting started with Claude Desktop MCP setup, GitHub MCP Server
            is the best first install because it gives Claude immediate access to repositories,
            pull requests, issues, and code search through the Model Context Protocol.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
            <p className="text-white font-medium text-sm">Claude Desktop MCP config example</p>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-300 leading-relaxed">
{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN"
      }
    }
  }
}`}
            </pre>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Save the claude_desktop_config.json file after replacing{" "}
              <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
                YOUR_GITHUB_TOKEN
              </code>{" "}
              with your real GitHub Personal Access Token.
            </p>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            You can also add multiple MCP servers at once by placing them all inside the{" "}
            <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded text-xs">
              mcpServers
            </code>{" "}
            object in claude_desktop_config.json.
          </p>
        </section>

        <section id="step-4-restart-claude-desktop-for-mcp" className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 4: Restart Claude Desktop for MCP servers</h2>
          <p className="text-zinc-400 leading-relaxed">
            After saving the claude_desktop_config.json, fully quit Claude Desktop and reopen it.
            Many Claude Desktop MCP setup failures happen because users edit the file correctly
            but do not perform a full restart, so the old session keeps running without loading
            the new MCP server configuration.
          </p>
        </section>

        <section id="step-5-test-claude-desktop-mcp-server" className="space-y-5">
          <h2 className="text-2xl font-semibold">Step 5: Test that your Claude Desktop MCP server works</h2>
          <p className="text-zinc-400 leading-relaxed">
            Once Claude restarts and loads the MCP server, try a simple prompt that clearly
            requires the new Model Context Protocol integration.
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold">Claude Desktop MCP test prompts</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                List my GitHub repositories.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Show me the latest pull requests in this repo.
              </li>
              <li className="rounded-lg bg-black border border-zinc-800 px-4 py-3">
                Search this codebase for auth middleware.
              </li>
            </ul>
          </div>
        </section>

        <section id="adding-multiple-mcp-servers-to-claude-desktop" className="space-y-5">
          <h2 className="text-2xl font-semibold">Adding multiple MCP servers to Claude Desktop</h2>
          <p className="text-zinc-400 leading-relaxed">
            Most Claude Desktop users get the best MCP results from a small, focused stack.
            A common MCP server combination is:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "GitHub MCP Server",
                body: "For repositories, pull requests, issues, and code search through the Model Context Protocol.",
                href: "/tools/github-mcp",
              },
              {
                title: "Context7 MCP Server",
                body: "For live, version-specific library documentation to improve Claude coding accuracy.",
                href: "/tools/context7-mcp",
              },
              {
                title: "Desktop Commander MCP",
                body: "For local file operations, shell commands, and Claude Desktop automation.",
                href: "/tools/desktop-commander-mcp",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Start small with Claude Desktop MCP setup. Too many MCP servers at once can add
            unnecessary noise and make it harder to debug claude_desktop_config.json problems.
          </p>
        </section>

        <section id="common-claude-desktop-mcp-errors" className="space-y-5">
          <h2 className="text-2xl font-semibold">Common Claude Desktop MCP errors and fixes</h2>
          <div className="space-y-3">
            {[
              {
                title: "Invalid JSON in claude_desktop_config.json",
                body: "A missing comma, quote, or brace in the Claude Desktop config file can prevent Claude from loading your MCP server setup correctly.",
              },
              {
                title: "Node.js is not installed for npx MCP servers",
                body: "If npx is unavailable in your PATH, Claude Desktop cannot launch npm-based MCP servers.",
              },
              {
                title: "Missing MCP server environment variable",
                body: "Many MCP servers need API keys or tokens. If the env block is incomplete, the MCP server may fail silently or load without working tools.",
              },
              {
                title: "Wrong claude_desktop_config.json file path",
                body: "Make sure you edited the actual Claude Desktop config file and not a copy in another folder.",
              },
              {
                title: "Claude Desktop was not restarted for MCP",
                body: "Always do a full quit and reopen Claude Desktop after making MCP configuration changes to claude_desktop_config.json.",
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

        <section id="claude-desktop-mcp-security-tips" className="space-y-5">
          <h2 className="text-2xl font-semibold">Claude Desktop MCP security tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Use least privilege for MCP servers",
                body: "Only give each MCP server the token scopes and access level it actually needs through the Model Context Protocol.",
              },
              {
                title: "Be careful with local-access MCP servers",
                body: "MCP servers that can read files or run shell commands should be installed in Claude Desktop only when you understand the risk.",
              },
              {
                title: "Rotate MCP server tokens regularly",
                body: "If you use API keys or access tokens for MCP servers, rotate them regularly and remove unused Claude Desktop credentials.",
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
      title: "How to Install MCP Servers",
      body: "Cross-client MCP installation guide for Cursor, Claude Code, and VS Code with claude_desktop_config.json examples.",
      href: "/how-to-install-mcp-servers",
    },
    {
      title: "GitHub MCP Server Setup",
      body: "Step-by-step guide to install GitHub MCP Server with a real claude_desktop_config.json example.",
      href: "/github-mcp-server-setup",
    },
    {
      title: "Best MCP Servers for Claude",
      body: "Compare the best MCP servers for Claude Desktop by use case, setup difficulty, and Model Context Protocol features.",
      href: "/best-mcp-servers-for-claude",
    },
  ]}
/>
        <section id="claude-desktop-mcp-faq" className="space-y-5">
          <h2 className="text-2xl font-semibold">Frequently asked questions about Claude Desktop MCP setup</h2>
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

        <section id="browse-ready-mcp-servers-for-claude-desktop" className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Browse ready-to-use MCP servers for Claude Desktop</h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Explore the full MCPIndex directory for copy-ready claude_desktop_config.json blocks,
            MCP server setup steps, use cases, and category pages across GitHub, databases,
            design, monitoring, security, and productivity.
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
              Browse MCP servers by category
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
