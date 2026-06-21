"use client"

import { useState } from "react"
import Link from "next/link"

const tools = [
  {
    slug: "github-mcp",
    name: "GitHub MCP Server",
    short_description: "Official GitHub MCP server for repository management, PRs, issues, and code search via AI.",
    answer_first_summary: "GitHub MCP Server is the official server from GitHub with over 23K stars, enabling AI to manage repositories, pull requests, issues, branches, and code search. Supports Claude Desktop, Cursor, VS Code, and all major MCP clients via a Personal Access Token.",
    developer: "GitHub",
    github_url: "https://github.com/github/github-mcp-server",
    npm_package: "@github/github-mcp-server",
    license: "MIT",
    is_free: true,
    category: "Version Control",
    tags: ["github", "git", "repository", "pull-requests", "issues", "code-search"],
    config_json: '{"mcpServers":{"github":{"command":"npx","args":["-y","@github/github-mcp-server"],"env":{"GITHUB_PERSONAL_ACCESS_TOKEN":"YOUR_GITHUB_TOKEN"}}}}',
    setup_steps: [
      "Go to github.com/settings/tokens and create a Personal Access Token",
      "Select required scopes: repo, read:org, read:user",
      "Add config_json with your token to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to list your repositories or open a PR"
    ],
    faq: [
      { question: "Does it work with private repositories?", answer: "Yes, as long as your token has the repo scope." },
      { question: "Can it create pull requests?", answer: "Yes, it supports creating, reviewing, and merging PRs." },
      { question: "Does it support GitHub Actions?", answer: "It can read workflow runs but cannot trigger them directly." }
    ],
    installs: "800K+"
  },
  {
    slug: "supabase-mcp",
    name: "Supabase MCP Server",
    short_description: "Official Supabase MCP server to connect AI assistants directly to your Supabase project.",
    answer_first_summary: "Official Supabase MCP Server lets AI assistants query databases, manage tables, run migrations, and interact with Edge Functions. It connects directly to your Supabase project via a personal access token and supports all MCP-compatible clients.",
    developer: "Supabase",
    github_url: "https://github.com/supabase-community/supabase-mcp",
    npm_package: "@supabase/mcp-server-supabase",
    license: "Apache-2.0",
    is_free: true,
    category: "Database",
    tags: ["supabase", "postgres", "database", "backend", "sql", "realtime"],
    config_json: '{"mcpServers":{"supabase":{"command":"npx","args":["-y","@supabase/mcp-server-supabase@latest"],"env":{"SUPABASE_ACCESS_TOKEN":"YOUR_PERSONAL_ACCESS_TOKEN"}}}}',
    setup_steps: [
      "Go to supabase.com/dashboard/account/tokens and generate a Personal Access Token",
      "Add config_json with your token to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to list your Supabase projects or query a table"
    ],
    faq: [
      { question: "Can it run SQL queries?", answer: "Yes, it supports executing raw SQL and managing schema." },
      { question: "Does it support Edge Functions?", answer: "Yes, it can list and deploy Edge Functions." },
      { question: "Is it the official server?", answer: "Yes, maintained by the Supabase community team on GitHub." }
    ],
    installs: "350K+"
  },
  {
    slug: "aws-mcp",
    name: "AWS MCP Server",
    short_description: "Official AWS MCP servers for seamless integration with AWS services and resources via AI.",
    answer_first_summary: "AWS MCP Server is the official collection from AWS Labs with over 6.7K GitHub stars, enabling AI to interact with AWS services including S3, EC2, Lambda, DynamoDB, CloudFormation, and more. Uses your existing AWS credentials and profiles.",
    developer: "AWS Labs",
    github_url: "https://github.com/awslabs/mcp",
    npm_package: "@aws/mcp-server-aws",
    license: "Apache-2.0",
    is_free: true,
    category: "Cloud & Infrastructure",
    tags: ["aws", "cloud", "s3", "lambda", "ec2", "devops", "infrastructure"],
    config_json: '{"mcpServers":{"aws":{"command":"npx","args":["-y","@aws/mcp-server-aws"],"env":{"AWS_PROFILE":"default","AWS_REGION":"us-east-1"}}}}',
    setup_steps: [
      "Ensure AWS CLI is installed and configured (aws configure)",
      "Add config_json to claude_desktop_config.json",
      "Set your AWS_PROFILE and AWS_REGION",
      "Restart Claude Desktop",
      "Ask Claude to list S3 buckets or describe EC2 instances"
    ],
    faq: [
      { question: "Does it support multiple AWS profiles?", answer: "Yes, set the AWS_PROFILE env variable to switch profiles." },
      { question: "What services are supported?", answer: "S3, EC2, Lambda, DynamoDB, IAM, CloudFormation, and 20+ more." },
      { question: "Is it safe to use with production AWS?", answer: "Use IAM roles with least-privilege permissions for safety." }
    ],
    installs: "450K+"
  },
  {
    slug: "grafana-mcp",
    name: "Grafana MCP Server",
    short_description: "Official Grafana MCP server to search dashboards, investigate incidents, and query datasources.",
    answer_first_summary: "Grafana MCP Server is the official server from Grafana Labs with 1.7K GitHub stars, enabling AI to search dashboards, run queries against datasources like Prometheus and Loki, and investigate incidents directly. Works with Grafana Cloud and self-hosted instances.",
    developer: "Grafana",
    github_url: "https://github.com/grafana/mcp-grafana",
    npm_package: "@grafana/mcp-grafana",
    license: "Apache-2.0",
    is_free: true,
    category: "Monitoring",
    tags: ["grafana", "monitoring", "observability", "prometheus", "loki", "dashboards"],
    config_json: '{"mcpServers":{"grafana":{"command":"npx","args":["-y","@grafana/mcp-grafana"],"env":{"GRAFANA_URL":"https://your-instance.grafana.net","GRAFANA_API_KEY":"YOUR_API_KEY"}}}}',
    setup_steps: [
      "Go to your Grafana instance > Administration > API Keys",
      "Create an API Key with Viewer or Editor role",
      "Add config_json with your Grafana URL and API Key",
      "Restart Claude Desktop",
      "Ask Claude to search dashboards or query metrics"
    ],
    faq: [
      { question: "Does it work with Grafana Cloud?", answer: "Yes, works with both Grafana Cloud and self-hosted instances." },
      { question: "Can it query Prometheus metrics?", answer: "Yes, it supports querying any Grafana datasource including Prometheus and Loki." },
      { question: "Does it support creating dashboards?", answer: "It primarily focuses on reading and querying, not creating dashboards." }
    ],
    installs: "180K+"
  },
  {
    slug: "figma-mcp",
    name: "Figma Context MCP",
    short_description: "MCP server giving AI direct access to Figma design data for one-shot design implementation.",
    answer_first_summary: "Figma Context MCP gives coding agents direct access to Figma file data with over 11K GitHub stars, enabling accurate design-to-code conversion. AI can read component properties, styles, and layout data to produce pixel-perfect implementations without screenshots.",
    developer: "GLips",
    github_url: "https://github.com/GLips/Figma-Context-MCP",
    npm_package: "figma-developer-mcp",
    license: "MIT",
    is_free: true,
    category: "Developer Tools",
    tags: ["figma", "design", "ui", "frontend", "design-to-code", "components"],
    config_json: '{"mcpServers":{"figma":{"command":"npx","args":["-y","figma-developer-mcp"],"env":{"FIGMA_API_KEY":"YOUR_FIGMA_API_KEY"}}}}',
    setup_steps: [
      "Go to figma.com/settings and create a Personal Access Token",
      "Add config_json with your Figma API Key",
      "Restart Claude Desktop",
      "Paste a Figma file URL and ask Claude to implement the design"
    ],
    faq: [
      { question: "Does it require Figma Pro?", answer: "No, it works with any Figma account including free tier." },
      { question: "Can it access components and styles?", answer: "Yes, it reads full component trees, styles, and design tokens." },
      { question: "Which frameworks does the generated code support?", answer: "Works with any framework — React, Vue, HTML/CSS, Tailwind, etc." }
    ],
    installs: "290K+"
  },
  {
    slug: "atlassian-mcp",
    name: "Atlassian MCP Server",
    short_description: "MCP server for Atlassian products: Confluence and Jira Cloud, Server, and Data Center.",
    answer_first_summary: "Atlassian MCP Server with 3.3K GitHub stars provides full integration with Confluence and Jira, enabling AI to search pages, create issues, update statuses, and manage sprints. Supports both Atlassian Cloud and self-hosted Server/Data Center instances.",
    developer: "Sooperset",
    github_url: "https://github.com/sooperset/mcp-atlassian",
    npm_package: "@sooperset/mcp-atlassian",
    license: "MIT",
    is_free: true,
    category: "Project Management",
    tags: ["jira", "confluence", "atlassian", "project-management", "issues", "wiki"],
    config_json: '{"mcpServers":{"atlassian":{"command":"npx","args":["-y","@sooperset/mcp-atlassian"],"env":{"CONFLUENCE_URL":"https://your-domain.atlassian.net/wiki","JIRA_URL":"https://your-domain.atlassian.net","ATLASSIAN_EMAIL":"your@email.com","ATLASSIAN_TOKEN":"YOUR_API_TOKEN"}}}}',
    setup_steps: [
      "Go to id.atlassian.com/manage-profile/security/api-tokens",
      "Create an API Token",
      "Add config_json with your Atlassian email, token, and instance URLs",
      "Restart Claude Desktop",
      "Ask Claude to search Confluence or create a Jira issue"
    ],
    faq: [
      { question: "Does it support Jira Server (self-hosted)?", answer: "Yes, it supports both Jira Cloud and Server/Data Center." },
      { question: "Can it create Confluence pages?", answer: "Yes, it supports creating, reading, and updating Confluence pages." },
      { question: "Does it support Jira Agile boards?", answer: "Yes, it can list sprints, epics, and manage board items." }
    ],
    installs: "220K+"
  },
  {
    slug: "context7-mcp",
    name: "Context7 MCP Server",
    short_description: "MCP server providing up-to-date code documentation for LLMs from any library or framework.",
    answer_first_summary: "Context7 MCP Server with 33K GitHub stars fetches live, version-specific documentation for any library and injects it directly into AI context. Eliminates outdated code suggestions by giving Claude real-time docs for React, Next.js, Supabase, and thousands of other libraries.",
    developer: "Upstash",
    github_url: "https://github.com/upstash/context7",
    npm_package: "@upstash/context7-mcp",
    license: "MIT",
    is_free: true,
    category: "Developer Tools",
    tags: ["documentation", "libraries", "context", "code-generation", "ai-coding", "frameworks"],
    config_json: '{"mcpServers":{"context7":{"command":"npx","args":["-y","@upstash/context7-mcp"]}}}',
    setup_steps: [
      "No API key required",
      "Add config_json to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Add 'use context7' to your prompt when asking about a library"
    ],
    faq: [
      { question: "How does it know which library version to use?", answer: "You specify the library name and version in your prompt; it fetches the exact docs." },
      { question: "Does it require an API key?", answer: "No, it is completely free with no API key required." },
      { question: "What libraries does it support?", answer: "Thousands of libraries including React, Next.js, Supabase, Prisma, and more." }
    ],
    installs: "700K+"
  },
  {
    slug: "google-workspace-mcp",
    name: "Google Workspace MCP",
    short_description: "Comprehensive MCP server for Google Calendar, Drive, Gmail, Docs, Forms, and Chat via AI.",
    answer_first_summary: "Google Workspace MCP with 770 GitHub stars provides full access to Gmail, Google Calendar, Drive, Docs, Forms, and Chat through a single MCP server. Supports OAuth authentication and works with Claude Desktop and all major MCP clients for complete productivity automation.",
    developer: "taylorwilsdon",
    github_url: "https://github.com/taylorwilsdon/google_workspace_mcp",
    npm_package: "google-workspace-mcp",
    license: "MIT",
    is_free: true,
    category: "Productivity",
    tags: ["google", "gmail", "calendar", "drive", "docs", "workspace", "productivity"],
    config_json: '{"mcpServers":{"google-workspace":{"command":"npx","args":["-y","google-workspace-mcp"],"env":{"GOOGLE_CLIENT_ID":"YOUR_CLIENT_ID","GOOGLE_CLIENT_SECRET":"YOUR_CLIENT_SECRET"}}}}',
    setup_steps: [
      "Go to Google Cloud Console and create an OAuth 2.0 Client ID",
      "Enable Gmail, Calendar, Drive, and Docs APIs",
      "Download credentials and add to config_json",
      "Run the tool once to complete OAuth authentication in browser",
      "Restart Claude Desktop"
    ],
    faq: [
      { question: "Can it send emails via Gmail?", answer: "Yes, it can read, compose, and send emails through Gmail." },
      { question: "Does it support Google Calendar events?", answer: "Yes, it can create, update, delete, and list calendar events." },
      { question: "Is it the official Google MCP?", answer: "No, it is a community server but widely used with active maintenance." }
    ],
    installs: "160K+"
  },
  {
    slug: "semgrep-mcp",
    name: "Semgrep MCP Server",
    short_description: "MCP server enabling AI agents to scan code for security vulnerabilities using Semgrep.",
    answer_first_summary: "Semgrep MCP Server with 590 GitHub stars lets AI scan codebases for security vulnerabilities using Semgrep's powerful static analysis engine. Supports 30+ languages and thousands of security rules including OWASP Top 10, with both free and Pro rulesets.",
    developer: "Semgrep",
    github_url: "https://github.com/semgrep/mcp",
    npm_package: "@semgrep/mcp",
    license: "MIT",
    is_free: true,
    category: "Security",
    tags: ["security", "sast", "vulnerability-scanning", "code-analysis", "devsecops", "owasp"],
    config_json: '{"mcpServers":{"semgrep":{"command":"npx","args":["-y","@semgrep/mcp"],"env":{"SEMGREP_APP_TOKEN":"YOUR_SEMGREP_TOKEN"}}}}',
    setup_steps: [
      "Sign up at semgrep.dev and get a free App Token",
      "Add config_json with your token to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to scan your code for security vulnerabilities"
    ],
    faq: [
      { question: "Does it require a paid Semgrep account?", answer: "No, free community rules are available without a paid plan." },
      { question: "What languages does it support?", answer: "Python, JavaScript, TypeScript, Java, Go, Ruby, PHP, and 30+ more." },
      { question: "Can it fix the vulnerabilities it finds?", answer: "It reports issues with fix suggestions; Claude can then apply the fixes." }
    ],
    installs: "95K+"
  },
  {
    slug: "desktop-commander-mcp",
    name: "Desktop Commander MCP",
    short_description: "Swiss-army-knife MCP server for managing files, executing programs, and editing code on your desktop.",
    answer_first_summary: "Desktop Commander MCP with 4.7K GitHub stars gives AI full control over your desktop: run shell commands, read and write files, search code with regex, manage processes, and edit text. Works across macOS, Linux, and Windows as a complete local automation tool.",
    developer: "wonderwhy-er",
    github_url: "https://github.com/wonderwhy-er/DesktopCommanderMCP",
    npm_package: "@wonderwhy-er/desktop-commander",
    license: "MIT",
    is_free: true,
    category: "Developer Tools",
    tags: ["desktop", "shell", "files", "automation", "terminal", "code-editing", "local"],
    config_json: '{"mcpServers":{"desktop-commander":{"command":"npx","args":["-y","@wonderwhy-er/desktop-commander"]}}}',
    setup_steps: [
      "No API key or configuration required",
      "Add config_json to claude_desktop_config.json",
      "Restart Claude Desktop",
      "Ask Claude to read files, run commands, or search your codebase"
    ],
    faq: [
      { question: "Is it safe to give Claude desktop control?", answer: "Use with caution; always review commands before confirmation. Run in sandboxed environments for sensitive tasks." },
      { question: "Does it support Windows?", answer: "Yes, it supports macOS, Linux, and Windows." },
      { question: "Can it run long-running processes?", answer: "Yes, it supports background process management and output streaming." }
    ],
    installs: "320K+"
  }
]

export default function SeedPage2() {
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

        <h1 className="text-3xl font-bold mb-2">Bulk Import: 10 New Tools</h1>
        <p className="text-zinc-500 mb-8">Batch 2 — Click the button below to add 10 new MCP tools to your database in one click.</p>

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
