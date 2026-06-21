"use client"

import { useState } from "react"
import Link from "next/link"

const tools = [
  {
    slug: "playwright-mcp",
    name: "Playwright MCP",
    short_description: "Official Microsoft MCP server for browser automation and web scraping using Playwright accessibility tree.",
    answer_first_summary: "Playwright MCP is an official Microsoft server that gives AI models full browser control via accessibility snapshots. It supports Chrome, Firefox, Safari, and works with Claude Desktop, Cursor, and VS Code without requiring visual models.",
    developer: "Microsoft",
    github_url: "https://github.com/microsoft/playwright-mcp",
    npm_package: "@playwright/mcp",
    license: "MIT",
    is_free: true,
    category: "Browser Automation",
    tags: ["browser", "automation", "playwright", "web-scraping", "testing", "accessibility"],
    config_json: '{"mcpServers":{"playwright":{"command":"npx","args":["@playwright/mcp@latest"]}}}',
    setup_steps: ["Install Node.js 18+", "Add config_json to claude_desktop_config.json", "Restart Claude Desktop", "Ask Claude to open any webpage"],
    faq: [
      { question: "Does it require a visual model?", answer: "No, it works via accessibility tree without screenshots." },
      { question: "What browsers are supported?", answer: "Chrome, Firefox, WebKit (Safari), and Microsoft Edge." },
      { question: "Can it run headless?", answer: "Yes, add --headless to args." }
    ],
    installs: "500K+"
  },
  {
    slug: "sentry-mcp",
    name: "Sentry MCP",
    short_description: "Official Sentry MCP server for error analysis and project management using AI assistants.",
    answer_first_summary: "Sentry MCP is an official server from the Sentry team that enables AI assistants to access error data, analyze issues, and manage projects automatically. It acts as a bridge between Sentry API and tools like Claude, Cursor, and ClaudeCode.",
    developer: "Sentry",
    github_url: "https://github.com/getsentry/sentry-mcp",
    npm_package: "@sentry/mcp-server",
    license: "MIT",
    is_free: true,
    category: "Error Monitoring",
    tags: ["sentry", "error-tracking", "debugging", "devops", "monitoring"],
    config_json: '{"mcpServers":{"sentry":{"command":"npx","args":["-y","@sentry/mcp-server@latest"],"env":{"SENTRY_AUTH_TOKEN":"YOUR_AUTH_TOKEN","SENTRY_ORG":"YOUR_ORG_SLUG"}}}}',
    setup_steps: ["Get Auth Token from sentry.io/settings/auth-tokens", "Add config_json with your credentials", "Restart Claude Desktop", "Ask Claude to analyze recent errors"],
    faq: [
      { question: "Does it require a paid Sentry account?", answer: "No, it works with the free plan too." },
      { question: "What operations does it support?", answer: "View errors, track events, manage projects, and analyze performance." },
      { question: "Can I use it with Cursor?", answer: "Yes, it supports all major MCP clients." }
    ],
    installs: "200K+"
  },
  {
    slug: "kubernetes-mcp",
    name: "Kubernetes MCP Server",
    short_description: "MCP tool for complete Kubernetes and OpenShift cluster management via AI assistants.",
    answer_first_summary: "Kubernetes MCP Server gives AI models full permissions to manage Kubernetes clusters, from deploying apps and scaling to monitoring resources. It supports both standard Kubernetes and OpenShift with kubeconfig loading from multiple sources.",
    developer: "Flux159",
    github_url: "https://github.com/Flux159/mcp-server-kubernetes",
    npm_package: "mcp-server-kubernetes",
    license: "MIT",
    is_free: true,
    category: "Cloud & Infrastructure",
    tags: ["kubernetes", "k8s", "openshift", "devops", "cloud", "infrastructure"],
    config_json: '{"mcpServers":{"kubernetes":{"command":"npx","args":["-y","mcp-server-kubernetes"]}}}',
    setup_steps: ["Ensure kubectl is configured and working", "Add config_json to claude_desktop_config.json", "Restart Claude Desktop", "Ask Claude to list pods or deploy an app"],
    faq: [
      { question: "Does it require special permissions?", answer: "It uses your current kubeconfig, so permissions depend on your setup." },
      { question: "Does it support OpenShift?", answer: "Yes, it supports OpenShift in addition to standard Kubernetes." },
      { question: "Can it manage remote clusters?", answer: "Yes, any cluster defined in kubeconfig works." }
    ],
    installs: "100K+"
  },
  {
    slug: "exa-mcp",
    name: "Exa MCP Server",
    short_description: "MCP tool connecting AI to Exa search engine for real-time, accurate web results.",
    answer_first_summary: "Exa MCP Server enables AI to perform live web search, crawl pages, search open-source code, and analyze companies. It works via an AI-specific API with over 4100 GitHub stars and provides a remote HTTP endpoint without local installation.",
    developer: "Exa Labs",
    github_url: "https://github.com/exa-labs/exa-mcp-server",
    npm_package: "exa-mcp-server",
    license: "MIT",
    is_free: false,
    category: "Web Search",
    tags: ["search", "web-crawling", "research", "exa", "real-time"],
    config_json: '{"mcpServers":{"exa":{"command":"npx","args":["-y","exa-mcp-server"],"env":{"EXA_API_KEY":"YOUR_EXA_API_KEY"}}}}',
    setup_steps: ["Get API Key from exa.ai", "Add config_json with your key", "Restart Claude Desktop", "Ask Claude to search for any topic"],
    faq: [
      { question: "How do I get an API Key?", answer: "Sign up at exa.ai and get a free key with monthly quota." },
      { question: "Is it better than Google Search MCP?", answer: "Designed specifically for AI with more contextually accurate results." },
      { question: "Does it support code search?", answer: "Yes, it has built-in code search support." }
    ],
    installs: "300K+"
  },
  {
    slug: "notion-mcp",
    name: "Notion MCP Server",
    short_description: "Official Notion MCP server for integrating with workspaces, databases, and pages.",
    answer_first_summary: "Official Notion MCP Server from makenotion allows AI assistants to read, create, and update pages and databases in Notion. It provides full workspace access via Notion API with advanced search and filtering support.",
    developer: "Notion",
    github_url: "https://github.com/makenotion/notion-mcp-server",
    npm_package: "@notionhq/notion-mcp-server",
    license: "MIT",
    is_free: true,
    category: "Productivity",
    tags: ["notion", "productivity", "knowledge-base", "database", "pages"],
    config_json: '{"mcpServers":{"notion":{"command":"npx","args":["-y","@notionhq/notion-mcp-server"],"env":{"OPENAPI_MCP_HEADERS":"{\\"Authorization\\": \\"Bearer YOUR_NOTION_TOKEN\\", \\"Notion-Version\\": \\"2022-06-28\\"}"}}}}',
    setup_steps: ["Go to notion.so/profile/integrations and create Integration", "Copy the Internal Integration Token", "Share required pages with the Integration", "Add config_json with the token", "Restart Claude Desktop"],
    faq: [
      { question: "Can it create new databases?", answer: "Yes, it supports creating and modifying databases and pages." },
      { question: "Does it access all my pages automatically?", answer: "No, you must share each page with the Integration manually." },
      { question: "Is this the official Notion server?", answer: "Yes, developed by makenotion on the official GitHub." }
    ],
    installs: "400K+"
  },
  {
    slug: "linear-mcp",
    name: "Linear MCP Server",
    short_description: "MCP tool connecting AI to Linear for task and project management using natural language.",
    answer_first_summary: "Linear MCP Server enables AI assistants to interact with Linear API to retrieve, create, and update tasks using natural language. Ideal for development teams using Linear as a software project management tool.",
    developer: "TacticLaunch",
    github_url: "https://github.com/tacticlaunch/mcp-linear",
    npm_package: "@tacticlaunch/mcp-linear",
    license: "MIT",
    is_free: true,
    category: "Project Management",
    tags: ["linear", "project-management", "issues", "tasks", "agile"],
    config_json: '{"mcpServers":{"linear":{"command":"npx","args":["-y","@tacticlaunch/mcp-linear"],"env":{"LINEAR_API_TOKEN":"YOUR_LINEAR_API_TOKEN"}}}}',
    setup_steps: ["Go to linear.app/settings/api and create API Token", "Add config_json with the token", "Restart Claude Desktop", "Ask Claude to display tasks or create a new issue"],
    faq: [
      { question: "Does it support creating new Issues?", answer: "Yes, it supports create, read, update, and delete operations." },
      { question: "How do I get a Linear API Token?", answer: "From Settings > API > Personal API Keys in Linear." },
      { question: "Does it support filtering by team?", answer: "Yes, you can filter by team, project, and status." }
    ],
    installs: "80K+"
  },
  {
    slug: "git-mcp",
    name: "Git MCP Server",
    short_description: "MCP server allowing AI to execute Git operations directly on local repositories.",
    answer_first_summary: "Git MCP Server gives AI assistants full permissions to execute comprehensive Git operations, from commit history and branches to comparisons and modifications. Part of the official Reference Servers collection for Model Context Protocol.",
    developer: "Model Context Protocol",
    github_url: "https://github.com/modelcontextprotocol/servers",
    npm_package: "mcp-server-git",
    license: "MIT",
    is_free: true,
    category: "Version Control",
    tags: ["git", "version-control", "repository", "commits", "branches"],
    config_json: '{"mcpServers":{"git":{"command":"uvx","args":["mcp-server-git","--repository","/path/to/your/repo"]}}}',
    setup_steps: ["Ensure Python and uv are installed (pip install uv)", "Modify /path/to/your/repo to point to your repository", "Add config_json to claude_desktop_config.json", "Restart Claude Desktop"],
    faq: [
      { question: "Does it require Python or Node.js?", answer: "It requires Python with the uv package manager." },
      { question: "Can it create commits automatically?", answer: "Yes, it supports creating commits and new branches." },
      { question: "Does it work with remote GitHub?", answer: "It works on local repositories only, but you can push later." }
    ],
    installs: "600K+"
  },
  {
    slug: "redis-mcp",
    name: "Redis MCP Server",
    short_description: "MCP tool enabling AI to connect to Redis databases and execute operations on them.",
    answer_first_summary: "Redis MCP Server enables AI to read, write, and delete data in Redis, with support for advanced operations like lists, sets, and hashes. Used for caching, session management, and queues in applications.",
    developer: "Model Context Protocol",
    github_url: "https://github.com/modelcontextprotocol/servers-archived",
    npm_package: "@modelcontextprotocol/server-redis",
    license: "MIT",
    is_free: true,
    category: "Database",
    tags: ["redis", "database", "cache", "key-value", "storage", "nosql"],
    config_json: '{"mcpServers":{"redis":{"command":"npx","args":["-y","@modelcontextprotocol/server-redis","redis://localhost:6379"]}}}',
    setup_steps: ["Ensure Redis is running locally or remotely", "Modify the connection URL according to your setup", "Add config_json to claude_desktop_config.json", "Restart Claude Desktop"],
    faq: [
      { question: "Does it support Redis Cloud or Upstash?", answer: "Yes, any Redis accessible via URL works." },
      { question: "Does it support password authentication?", answer: "Yes, add it to the URL: redis://:password@host:port" },
      { question: "What operations are available?", answer: "GET, SET, DEL, KEYS, HGET, HSET, LPUSH, and many more." }
    ],
    installs: "150K+"
  },
  {
    slug: "gitlab-mcp",
    name: "GitLab MCP Server",
    short_description: "Official GitLab MCP server for managing repositories, issues, and merge requests with AI.",
    answer_first_summary: "GitLab MCP Server provides full integration with GitLab API, enabling AI to manage repositories, branches, Merge Requests, and Issues. Works with GitLab.com and self-hosted instances using a Personal Access Token.",
    developer: "Model Context Protocol",
    github_url: "https://github.com/modelcontextprotocol/servers-archived",
    npm_package: "@modelcontextprotocol/server-gitlab",
    license: "MIT",
    is_free: true,
    category: "Version Control",
    tags: ["gitlab", "git", "devops", "merge-requests", "issues", "ci-cd"],
    config_json: '{"mcpServers":{"gitlab":{"command":"npx","args":["-y","@modelcontextprotocol/server-gitlab"],"env":{"GITLAB_PERSONAL_ACCESS_TOKEN":"YOUR_TOKEN","GITLAB_API_URL":"https://gitlab.com/api/v4"}}}}',
    setup_steps: ["Go to gitlab.com/-/profile/personal_access_tokens", "Create a Token with api permissions", "Add config_json with the token", "Restart Claude Desktop"],
    faq: [
      { question: "Does it work with self-hosted GitLab?", answer: "Yes, modify GITLAB_API_URL to point to your server." },
      { question: "Does it support creating Merge Requests?", answer: "Yes, it supports creating, reading, and updating Merge Requests." },
      { question: "What is the difference between GitHub MCP and GitLab MCP?", answer: "They work on the same principle but for different platform APIs." }
    ],
    installs: "120K+"
  },
  {
    slug: "google-drive-mcp",
    name: "Google Drive MCP Server",
    short_description: "MCP tool enabling AI to search, read, and manage files in Google Drive.",
    answer_first_summary: "Google Drive MCP Server gives AI access to Google Drive to search, read, and manage files. It supports different file types including Google Docs, Sheets, and Slides with automatic text conversion.",
    developer: "Model Context Protocol",
    github_url: "https://github.com/modelcontextprotocol/servers-archived",
    npm_package: "@modelcontextprotocol/server-gdrive",
    license: "MIT",
    is_free: true,
    category: "Cloud Storage",
    tags: ["google-drive", "storage", "files", "google-docs", "cloud"],
    config_json: '{"mcpServers":{"google-drive":{"command":"npx","args":["-y","@modelcontextprotocol/server-gdrive"],"env":{"GDRIVE_CREDENTIALS_PATH":"/path/to/credentials.json"}}}}',
    setup_steps: ["Go to Google Cloud Console and create OAuth 2.0 credentials", "Download the credentials.json file", "Modify the path in config_json", "Run the tool first time to complete authentication", "Restart Claude Desktop"],
    faq: [
      { question: "Does it require a Google Cloud account?", answer: "Yes, you need to enable Drive API from Google Cloud Console for free." },
      { question: "Can it upload new files?", answer: "It primarily supports reading and searching, writing is limited." },
      { question: "Is it safe?", answer: "Data passes through MCP only within your session, not stored externally." }
    ],
    installs: "250K+"
  }
]

export default function SeedPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{ name: string; status: string }[]>([])
  const [done, setDone] = useState(false)

  async function handleSeed() {
    setLoading(true)
    const res: { name: string; status: string }[] = []

    for (const tool of tools) {
      try {
        const response = await fetch("/api/add-tool", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tool),
        })
        const data = await response.json()
        res.push({ name: tool.name, status: data.error || "Added" })
      } catch {
        res.push({ name: tool.name, status: "Failed" })
      }
    }

    setResults(res)
    setLoading(false)
    setDone(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono mb-8">
          <Link href="/" className="hover:text-white transition-colors">MCPIndex</Link>
          <span>/</span>
          <span className="text-zinc-300">Admin</span>
          <span>/</span>
          <span className="text-zinc-300">Bulk Import</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Bulk Import: 10 Tools</h1>
        <p className="text-zinc-500 mb-8">Click the button below to add 10 MCP tools to your database in one click.</p>

        {!done && !loading && (
          <button
            onClick={handleSeed}
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-sm cursor-pointer"
          >
            Import 10 Tools Now
          </button>
        )}

        {loading && (
          <div className="text-center py-12 space-y-4">
            <div className="inline-block w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-zinc-400">Adding tools...</p>
          </div>
        )}

        {done && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              Import complete! <Link href="/tools" className="underline">View all tools</Link>
            </div>
            <div className="space-y-2">
              {results.map((r, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-sm text-zinc-300">{r.name}</span>
                  <span className={`text-xs font-mono ${r.status === "Added" ? "text-emerald-400" : "text-red-400"}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
