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
        claudeCompatible: true,
        setupTime: "5 min",
        securityNotes: "Requires GITHUB_PERSONAL_ACCESS_TOKEN. Use fine-grained tokens.",
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
        claudeCompatible: true,
        setupTime: "2 min",
        securityNotes: "Restrict paths to specific project directories.",
        config: {
          command: "npx",
          args: ["-y", "@anthropic/mcp-server-filesystem", "/path/to/project"],
        },
      },
      {
        name: "playwright",
        npm: "@anthropic-ai/playwright-mcp",
        description: "Browser automation: click, navigate, screenshot, extract.",
        claudeCompatible: true,
        setupTime: "10 min",
        securityNotes: "Full browser access. Restrict to trusted sites.",
        config: {
          command: "npx",
          args: ["-y", "@anthropic-ai/playwright-mcp"],
        },
      },
      {
        name: "context7",
        npm: "@upstash/context7-mcp-server",
        description: "Real-time documentation lookup for any library.",
        claudeCompatible: true,
        setupTime: "3 min",
        securityNotes: "Read-only access. No sensitive data exposure.",
        config: {
          command: "npx",
          args: ["-y", "@upstash/context7-mcp-server"],
        },
      },
    ],
    claudeReady: ["github", "filesystem", "playwright", "context7"],
    deadpool: [
      { name: "old-redis-mcp", reason: "Abandoned. No Claude support." },
      { name: "deprecated-fs-v1", reason: "Replaced by official Anthropic FS." },
    ],
  },
  evaluationChecklist: [
    { check: "Last commit within 3 months?", weight: "Critical" },
    { check: "README with setup instructions?", weight: "High" },
    { check: "Claude Desktop compatibility mentioned?", weight: "Critical" },
  ],
};

// تم تغييرها إلى default export لتتناسب مع سطرك
export default function DownloadDiscoveryBlueprint() {
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
