"use client"

import { useState } from "react"
import Link from "next/link"

const seoTools = [
  {
    slug: "github-mcp",
    name: "GitHub MCP Server",
    short_description: "Official GitHub MCP server for managing repositories, pull requests, issues, branches, and code search via AI assistants.",
    answer_first_summary: "GitHub MCP Server is the official server maintained by GitHub with over 23K stars on GitHub. It enables AI assistants like Claude to manage repositories, open and merge pull requests, create and close issues, manage branches, and run code search queries. It works with Claude Desktop, Cursor, VS Code, Windsurf, and all MCP-compatible clients using a GitHub Personal Access Token.",
    setup_steps: [
      "Go to github.com/settings/tokens and generate a Personal Access Token",
      "Select required scopes: repo, read:org, read:user",
      "Add the config JSON with your token to claude_desktop_config.json",
      "Restart Claude Desktop or your MCP client",
      "Ask Claude to list your repositories, open a PR, or search code"
    ],
    faq: [
      { question: "Does GitHub MCP work with private repositories?", answer: "Yes. As long as your Personal Access Token has the repo scope enabled, it can access both public and private repositories." },
      { question: "Can GitHub MCP create pull requests?", answer: "Yes. It supports creating, reviewing, updating, and merging pull requests through your AI assistant." },
      { question: "Which MCP clients support GitHub MCP Server?", answer: "It works with Claude Desktop, Cursor, VS Code with MCP extension, Windsurf, and any MCP-compatible client." },
      { question: "Does it support GitHub Actions?", answer: "It can read workflow runs and statuses but cannot trigger workflows directly." },
      { question: "Is GitHub MCP Server free?", answer: "Yes. It is open source under the MIT license and free to use with any GitHub account." }
    ]
  },
  {
    slug: "playwright-mcp",
    name: "Playwright MCP",
    short_description: "Official Microsoft MCP server for browser automation and web scraping using the Playwright accessibility tree.",
    answer_first_summary: "Playwright MCP is the official browser automation server from Microsoft, built on Playwright's accessibility tree for fast and reliable web automation without screenshots. It enables AI assistants to navigate pages, click elements, fill forms, extract content, and run end-to-end testing scenarios. With over 500K installs, it is one of the most widely adopted MCP servers for browser automation.",
    setup_steps: [
      "Ensure Node.js 18+ is installed on your system",
      "Add the Playwright MCP config to your claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to open a URL, click a button, or fill a form on any website"
    ],
    faq: [
      { question: "What is Playwright MCP used for?", answer: "Playwright MCP is used for browser automation, web scraping, form filling, testing websites, and navigating web pages via AI." },
      { question: "Does Playwright MCP require screenshots?", answer: "No. It uses the accessibility tree by default for faster and more reliable automation without capturing screenshots." },
      { question: "Is Playwright MCP the official Microsoft server?", answer: "Yes. It is maintained by Microsoft and part of their official MCP server collection." },
      { question: "Can Playwright MCP extract data from websites?", answer: "Yes. It can navigate to pages and extract structured text, links, and element content." },
      { question: "Does it support headless browser mode?", answer: "Yes. It supports both headless and headed browser modes depending on your configuration." }
    ]
  },
  {
    slug: "brave-search-mcp",
    name: "Brave Search MCP Server",
    short_description: "MCP server powered by Brave Search API for real-time web search, news search, and local business lookup via AI.",
    answer_first_summary: "Brave Search MCP Server connects AI assistants to the Brave Search API, enabling real-time web search, news search, image search, and local business lookup. It is one of the most popular search MCP servers with over 25K installs, and is commonly used to give AI assistants live access to current information without training data limitations.",
    setup_steps: [
      "Sign up at brave.com/search/api and get a free Brave Search API key",
      "Add the config JSON with your API key to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to search the web or find recent news on any topic"
    ],
    faq: [
      { question: "Is Brave Search MCP free to use?", answer: "Brave Search API has a free tier with limited monthly queries, and paid plans for higher usage. The MCP server itself is free." },
      { question: "Can Brave Search MCP find recent news?", answer: "Yes. It supports real-time news search to give AI assistants access to current events." },
      { question: "Does it support local business search?", answer: "Yes. It includes local search to find nearby businesses, places, and services." },
      { question: "Who maintains Brave Search MCP?", answer: "It is maintained by Anthropic as part of the official Model Context Protocol reference servers." },
      { question: "What is Brave Search MCP best used for?", answer: "It is best used to give AI assistants live web search access for research, fact-checking, and finding current information." }
    ]
  },
  {
    slug: "notion-mcp",
    name: "Notion MCP Server",
    short_description: "Official Notion MCP server for integrating AI with Notion workspaces, databases, and pages.",
    answer_first_summary: "Notion MCP Server is the official integration from Notion with over 400K installs, enabling AI assistants to search pages, read and create database entries, update content, and manage workspace items. It supports the full Notion API and works with any Notion workspace via an integration token.",
    setup_steps: [
      "Go to notion.so/my-integrations and create a new integration",
      "Copy your integration token",
      "Share the Notion pages or databases you want accessible with the integration",
      "Add the config JSON with your token to claude_desktop_config.json",
      "Restart Claude Desktop and ask Claude to search or update your Notion workspace"
    ],
    faq: [
      { question: "Is Notion MCP the official server?", answer: "Yes. It is maintained by Notion and uses the official Notion API." },
      { question: "Can Notion MCP create new pages?", answer: "Yes. It supports creating, reading, updating, and searching Notion pages and databases." },
      { question: "Does Notion MCP work with databases?", answer: "Yes. It can query, filter, and create entries in any Notion database your integration has access to." },
      { question: "Does it require a paid Notion account?", answer: "No. It works with the free Notion tier as long as you create an integration and share the relevant pages." },
      { question: "Can Claude update existing Notion pages?", answer: "Yes. Claude can append content, update properties, and modify blocks in Notion pages." }
    ]
  },
  {
    slug: "google-drive-mcp",
    name: "Google Drive MCP Server",
    short_description: "Official MCP server enabling AI to search, read, and manage files in Google Drive including Docs, Sheets, and Slides.",
    answer_first_summary: "Google Drive MCP Server is an official reference server from the Model Context Protocol team with over 250K installs, enabling AI assistants to search and read files stored in Google Drive. It supports Google Docs, Sheets, Slides, PDFs, and plain text files, with OAuth 2.0 authentication to securely connect to your Drive.",
    setup_steps: [
      "Go to Google Cloud Console and create a new project",
      "Enable the Google Drive API for your project",
      "Create OAuth 2.0 credentials and download the credentials JSON",
      "Add the config JSON with your credentials path to claude_desktop_config.json",
      "Run the server once to complete the OAuth browser authentication flow",
      "Restart Claude Desktop and ask Claude to search or read your Drive files"
    ],
    faq: [
      { question: "What file types does Google Drive MCP support?", answer: "It supports Google Docs, Sheets, Slides, PDFs, text files, and other Drive file types." },
      { question: "Is Google Drive MCP the official server?", answer: "Yes. It is maintained by the Model Context Protocol official team." },
      { question: "Does it require a Google Workspace account?", answer: "No. It works with a free personal Google account and the standard Google Drive API." },
      { question: "Can it create or edit Google Docs?", answer: "It primarily supports reading and searching. Writing and editing capabilities depend on the API scopes configured." },
      { question: "Is my Drive data safe with this MCP server?", answer: "Data stays within your own Google account. The server uses OAuth 2.0 and only accesses what you authorize." }
    ]
  },
  {
    slug: "google-maps-mcp",
    name: "Google Maps MCP Server",
    short_description: "MCP server for location search, directions, place details, and geocoding via the Google Maps API.",
    answer_first_summary: "Google Maps MCP Server is an official reference server maintained by Anthropic with 15K+ installs, enabling AI assistants to search for places, get directions, retrieve business details, and geocode or reverse-geocode addresses using the Google Maps API. It is useful for travel planning, logistics, local search, and location-aware workflows.",
    setup_steps: [
      "Go to Google Cloud Console and create or select a project",
      "Enable the Maps JavaScript API, Places API, and Directions API",
      "Create an API key and restrict it to the required APIs",
      "Add the config JSON with your API key to claude_desktop_config.json",
      "Restart Claude Desktop and ask Claude to find places or get directions"
    ],
    faq: [
      { question: "What can Google Maps MCP do?", answer: "It can search for places, get driving or walking directions, retrieve business details, and geocode addresses." },
      { question: "Is Google Maps MCP free?", answer: "The MCP server is free, but the Google Maps API has a free monthly credit after which usage is billed by Google." },
      { question: "Who maintains Google Maps MCP?", answer: "It is maintained by Anthropic as part of the official Model Context Protocol reference servers." },
      { question: "Can it show real-time traffic?", answer: "It can include traffic-aware routing when requesting directions through the Directions API." },
      { question: "Does it work for international locations?", answer: "Yes. Google Maps API covers locations worldwide including addresses, places, and routes." }
    ]
  },
  {
    slug: "git-mcp",
    name: "Git MCP Server",
    short_description: "MCP server allowing AI to execute Git operations directly on local repositories including commit, diff, log, and branch management.",
    answer_first_summary: "Git MCP Server is an official reference server from the Model Context Protocol team with 600K+ installs, enabling AI assistants to run Git operations directly on local repositories. It supports reading commit history, creating commits, checking diffs, managing branches, and viewing file changes — all without leaving your AI workflow.",
    setup_steps: [
      "Ensure Git is installed on your system",
      "Add the config JSON pointing to your local repository path in claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to show your commit history, check a diff, or create a commit"
    ],
    faq: [
      { question: "What Git operations does this MCP server support?", answer: "It supports git log, git diff, git commit, git branch, git checkout, git status, and more." },
      { question: "Does Git MCP work with GitHub?", answer: "It works on local Git repositories. For GitHub-specific features like pull requests, use the GitHub MCP Server instead." },
      { question: "Is it the official Git MCP server?", answer: "Yes. It is part of the official Model Context Protocol reference servers maintained by the MCP team." },
      { question: "Can it commit changes automatically?", answer: "Yes. Claude can stage files and create commits with a message, but you control the final confirmation." },
      { question: "Does it support multiple repositories?", answer: "You can configure it to point to any local repository path in your setup." }
    ]
  },
  {
    slug: "gitlab-mcp",
    name: "GitLab MCP Server",
    short_description: "Official GitLab MCP server for managing repositories, issues, merge requests, and CI/CD pipelines with AI.",
    answer_first_summary: "GitLab MCP Server is an official server maintained by the Model Context Protocol team with 120K+ installs, enabling AI assistants to interact with GitLab repositories, create and manage issues, review and merge MRs, and monitor CI/CD pipeline statuses. It works with both GitLab.com and self-hosted GitLab instances.",
    setup_steps: [
      "Go to gitlab.com/-/user_settings/personal_access_tokens and create a Personal Access Token",
      "Select required scopes: api, read_api, read_user, read_repository",
      "Add the config JSON with your token and GitLab URL to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to list your projects, create an issue, or check a merge request"
    ],
    faq: [
      { question: "Does GitLab MCP work with self-hosted GitLab?", answer: "Yes. You can configure it to point to any GitLab instance URL including self-hosted CE and EE." },
      { question: "Can it manage merge requests?", answer: "Yes. It supports creating, reviewing, approving, and merging GitLab merge requests." },
      { question: "Does it support CI/CD pipeline monitoring?", answer: "Yes. It can list pipeline runs and check their status for your projects." },
      { question: "Is it different from GitHub MCP?", answer: "Yes. GitLab MCP connects to GitLab repositories and uses GitLab's API, while GitHub MCP connects to GitHub." },
      { question: "Is GitLab MCP free?", answer: "Yes. It is open source and free to use with any GitLab account." }
    ]
  },
  {
    slug: "kubernetes-mcp",
    name: "Kubernetes MCP Server",
    short_description: "MCP server for complete Kubernetes and OpenShift cluster management via AI including pods, deployments, services, and logs.",
    answer_first_summary: "Kubernetes MCP Server by Flux159 has 100K+ installs and provides full Kubernetes cluster management through AI assistants. It enables listing pods, deployments, services, and namespaces, reading logs, applying manifests, and managing OpenShift resources. It connects to any cluster through your existing kubeconfig file.",
    setup_steps: [
      "Ensure kubectl is installed and configured with access to your cluster",
      "Verify your kubeconfig is at the default path (~/.kube/config) or set KUBECONFIG",
      "Add the Kubernetes MCP config to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to list pods, check deployment status, or read logs from a service"
    ],
    faq: [
      { question: "What can Kubernetes MCP do?", answer: "It can list and describe pods, deployments, services, namespaces, configmaps, read logs, apply manifests, and manage resources." },
      { question: "Does it support OpenShift?", answer: "Yes. It supports both standard Kubernetes and Red Hat OpenShift clusters." },
      { question: "Is my cluster access secure?", answer: "It uses your existing kubeconfig and local credentials. No credentials are sent externally." },
      { question: "Can it deploy applications?", answer: "Yes. Claude can apply YAML manifests and update deployments through the MCP server." },
      { question: "Does it work with cloud Kubernetes clusters?", answer: "Yes. It works with EKS, GKE, AKS, and any cluster accessible through your kubeconfig." }
    ]
  },
  {
    slug: "redis-mcp",
    name: "Redis MCP Server",
    short_description: "MCP server enabling AI to connect to Redis databases and execute get, set, delete, and list operations.",
    answer_first_summary: "Redis MCP Server is an official reference server from the Model Context Protocol team with 150K+ installs, enabling AI assistants to connect to Redis databases and perform key-value operations including GET, SET, DEL, LPUSH, HSET, and pattern-based key scanning. It is useful for cache inspection, debugging, and data management workflows.",
    setup_steps: [
      "Ensure you have a Redis instance running locally or remotely",
      "Add the config JSON with your Redis URL to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to get a key value, scan keys by pattern, or set a new key"
    ],
    faq: [
      { question: "What Redis operations does this MCP server support?", answer: "It supports GET, SET, DEL, KEYS, LPUSH, LRANGE, HSET, HGET, EXPIRE, and more Redis commands." },
      { question: "Does it work with Redis Cloud or remote Redis?", answer: "Yes. You can configure it with any Redis URL including cloud-hosted Redis instances." },
      { question: "Is Redis MCP the official server?", answer: "Yes. It is maintained by the Model Context Protocol official team." },
      { question: "Can it be used for cache debugging?", answer: "Yes. Claude can scan keys, inspect values, and check TTLs to debug caching issues." },
      { question: "Does it support Redis Cluster mode?", answer: "Basic cluster support is available depending on your Redis client configuration." }
    ]
  }
]

export default function SeedSEOPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{ slug: string; name: string; status: string }[]>([])
  const [done, setDone] = useState(false)

  const stats = {
    success: results.filter(r => r.status === "Updated").length,
    failed: results.filter(r => r.status !== "Updated").length
  }

  async function handleSeed() {
    if (loading) return
    setLoading(true)
    setResults([])
    setDone(false)

    const res: { slug: string; name: string; status: string }[] = []

    for (const tool of seoTools) {
      try {
        const response = await fetch("/api/update-tool-seo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tool),
        })
        const data = await response.json()
        res.push({
          slug: tool.slug,
          name: tool.name,
          status: !response.ok ? (data.error || "Failed") : "Updated"
        })
      } catch {
        res.push({ slug: tool.slug, name: tool.name, status: "Failed" })
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
          <a href="/" className="hover:text-white transition-colors">MCPIndex</a>
          <span>/</span>
          <span className="text-zinc-300">Admin</span>
          <span>/</span>
          <span className="text-zinc-300">SEO Optimization</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">SEO Optimization: Top 10 Tools</h1>
        <p className="text-zinc-500 mb-2 text-sm">
          Updates <span className="text-white font-mono">short_description</span>, <span className="text-white font-mono">answer_first_summary</span>, <span className="text-white font-mono">setup_steps</span>, and <span className="text-white font-mono">faq</span> for the 10 highest-priority tools.
        </p>
        <p className="text-zinc-600 text-xs font-mono mb-8">
          github-mcp · playwright-mcp · brave-search-mcp · notion-mcp · google-drive-mcp · google-maps-mcp · git-mcp · gitlab-mcp · kubernetes-mcp · redis-mcp
        </p>

        {!done && (
          <button
            onClick={handleSeed}
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
          >
            {loading ? "Optimizing tools..." : "Run SEO Optimization Now"}
          </button>
        )}

        {loading && (
          <div className="text-center py-12 space-y-3">
            <div className="inline-block w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-zinc-400 text-sm">Updating tool data in Supabase...</p>
          </div>
        )}

        {done && (
          <div className="space-y-4 mt-6">
            <div className={`p-4 rounded-lg text-sm border ${stats.failed === 0 ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-amber-500/10 border-amber-500/20 text-amber-400"}`}>
              Done. {stats.success} updated · {stats.failed} failed.
              {stats.failed === 0 && (
                <> All 10 tools are now SEO-optimized. <a href="/tools" className="underline ml-1">View tools</a></>
              )}
            </div>

            <div className="space-y-2">
              {results.map((r, i) => (
                <div key={i} className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <div>
                    <p className="text-sm text-zinc-300">{r.name}</p>
                    <p className="text-xs text-zinc-600 font-mono">/tools/{r.slug}</p>
                  </div>
                  <span className={`text-xs font-mono flex-shrink-0 ${r.status === "Updated" ? "text-emerald-400" : "text-red-400"}`}>
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
