"use client";

import { useCallback } from "react";

const mcpBundle = {
  mcpServers: {
    github: {
      command: "npx",
      args: ["-y", "@github/github-mcp-server"],
      env: {
        GITHUB_PERSONAL_ACCESS_TOKEN: "your_token_here",
      },
    },
    context7: {
      command: "npx",
      args: ["-y", "@upstash/context7-mcp-server"],
    },
    "desktop-commander": {
      command: "npx",
      args: ["-y", "desktop-commander"],
    },
    semgrep: {
      command: "npx",
      args: ["-y", "@semgrep/mcp-server"],
    },
    filesystem: {
      command: "npx",
      args: [
        "-y",
        "@anthropic/mcp-server-filesystem",
        "/path/to/your/project",
      ],
    },
  },
};

export function DownloadClaudeMcpBundle() {
  const handleDownload = useCallback(() => {
    const blob = new Blob([JSON.stringify(mcpBundle, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "claude-desktop-mcp-bundle.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-purple-600/20"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      Download Free MCP Bundle
    </button>
  );
}
