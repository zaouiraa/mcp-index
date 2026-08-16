"use client";

import { useCallback } from "react";

const discoveryBlueprint = {
  title: "MCP Server Discovery Blueprint + Curated Index 2026",
  version: "2.0",
  lastUpdated: "2026-08-15",
  description: "Hand-vetted MCP servers organized by category with security notes and setup times.",
  tabs: {
    coreServers: [
      {
        name: "github",
        npm: "@github/github-mcp-server",
        description: "Official GitHub MCP server for repos, PRs, issues, and code search.",
        lastCommit: "2026-08-10",
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Requires GITHUB_PERSONAL_ACCESS_TOKEN. Use fine-grained tokens with minimal repo scope.",
        config: {
          command: "npx",
          args: ["-y", "@github/github-mcp-server"],
          env: { GITHUB_PERSONAL_ACCESS_TOKEN: "your_token_here" },
        },
      },
      {
        name: "filesystem",
        npm: "@anthropic/mcp-server-filesystem",
        description: "Read, write, and search local files securely.",
        lastCommit: "2026-07-28",
        claudeCompatible: true,
        setupTime: "2 min",
        securityNotes: "Restrict paths to specific project directories. Never expose root '/'.",
        config: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-server-filesystem", "/path/to/project"],
        },
      },
      {
        name: "context7",
        npm: "@upstash/context7-mcp-server",
        description: "Real-time documentation lookup for any library or framework.",
        lastCommit: "2026-08-12",
        claudeCompatible: true,
        setupTime: "3 min",
        securityNotes: "Read-only access. No sensitive data exposure.",
        config: {
          command: "npx",
          args: ["-y", "@upstash/context7-mcp-server"],
        },
      },
      {
        name: "playwright",
        npm: "@anthropic-ai/playwright-mcp",
        description: "Browser automation: click, navigate, screenshot, extract.",
        lastCommit: "2026-08-05",
        claudeCompatible: true,
        setupTime: "10 min",
        securityNotes: "Full browser access. Use stealth plugin to avoid bot detection. Restrict to trusted sites.",
        config: {
          command: "npx",
          args: ["-y", "@anthropic-ai/playwright-mcp"],
          env: { BROWSER_PATH: "/path/to/chrome_profile" },
        },
      },
      {
        name: "semgrep",
        npm: "@semgrep/mcp-server",
        description: "Static code analysis and vulnerability scanning.",
        lastCommit: "2026-07-20",
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Read-only file access. No code modification.",
        config: {
          command: "npx",
          args: ["-y", "@semgrep/mcp-server"],
        },
      },
      {
        name: "desktop-commander",
        npm: "desktop-commander",
        description: "Execute terminal commands and manage processes.",
        lastCommit: "2026-08-01",
        claudeCompatible: true,
        setupTime: "3 min",
        securityNotes: "⚠️ HIGH RISK: Can execute arbitrary commands. Restrict to sandboxed environments only.",
        config: {
          command: "npx",
          args: ["-y", "desktop-commander"],
        },
      },
      {
        name: "postgres",
        npm: "@anthropic/mcp-server-postgres",
        description: "Query PostgreSQL databases with schema awareness.",
        lastCommit: "2026-07-15",
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Requires DATABASE_URL. Use read-only user credentials. Never expose production DB.",
        config: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-server-postgres", "postgresql://user:pass@localhost/db"],
        },
      },
      {
        name: "puppeteer",
        npm: "@anthropic/mcp-server-puppeteer",
        description: "Headless Chrome automation for scraping and testing.",
        lastCommit: "2026-06-30",
        claudeCompatible: false,
        setupTime: "8 min",
        securityNotes: "Claude Desktop incompatible. Use Playwright MCP instead.",
        config: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-server-puppeteer"],
        },
      },
    ],
    trending: [
      {
        name: "linear-mcp",
        npm: "@linear/mcp-server",
        description: "Manage Linear projects, issues, and workflows.",
        lastCommit: "2026-08-14",
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Requires Linear API key. Use workspace-scoped tokens.",
        config: {
          command: "npx",
          args: ["-y", "@linear/mcp-server"],
          env: { LINEAR_API_KEY: "your_key" },
        },
      },
      {
        name: "notion-mcp",
        npm: "@notionhq/mcp-server",
        description: "Read and write Notion pages, databases, and blocks.",
        lastCommit: "2026-08-13",
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Requires Notion integration token. Limit to specific databases.",
        config: {
          command: "npx",
          args: ["-y", "@notionhq/mcp-server"],
          env: { NOTION_API_KEY: "your_key" },
        },
      },
      {
        name: "slack-mcp",
        npm: "@slack/mcp-server",
        description: "Send messages, search channels, and manage Slack workspaces.",
        lastCommit: "2026-08-11",
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Can send messages as your bot. Restrict to specific channels.",
        config: {
          command: "npx",
          args: ["-y", "@slack/mcp-server"],
          env: { SLACK_BOT_TOKEN: "xoxb-your-token" },
        },
      },
    ],
    claudeReady: [
      "github", "filesystem", "context7", "playwright", "semgrep", 
      "desktop-commander", "postgres", "linear-mcp", "notion-mcp", "slack-mcp"
    ],
    deadpool: [
      {
        name: "old-redis-mcp",
        reason: "Last commit 12+ months ago. No Claude support.",
        lastCommit: "2025-03-10",
      },
      {
        name: "deprecated-fs-v1",
        reason: "Replaced by @anthropic/mcp-server-filesystem.",
        lastCommit: "2025-01-20",
      },
      {
        name: "experimental-ai-search",
        reason: "Abandoned project. No documentation.",
        lastCommit: "2024-11-05",
      },
    ],
  },
  evaluationChecklist: [
    { check: "Last commit within 3 months?", weight: "Critical" },
    { check: "README with setup instructions?", weight: "High" },
    { check: "Claude Desktop compatibility mentioned?", weight: "Critical" },
    { check: "Permission transparency?", weight: "High" },
    { check: "Active issues being resolved?", weight: "Medium" },
  ],
};

export function DownloadDiscoveryBlueprint() {
  const handleDownload = useCallback(() => {
    const blob = new Blob([JSON.stringify(discoveryBlueprint, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mcp-discovery-blueprint-2026.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <button
      onClick={handleDownload}
      className="w-full px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Get the Blueprint
    </button>
  );
}
