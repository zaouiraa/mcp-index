"use client";

import { useState } from "react";

const configBundle = `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/path/to/your/project"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/playwright-mcp"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp-server"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-postgres", "postgresql://user:pass@localhost/db"]
    }
  }
}
`;

export function DownloadBestClaudeMcpBundle() {
  const [downloaded, setDownloaded] = useState(false);

  function handleDownload() {
    const blob = new Blob([configBundle], {
      type: "application/json;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "claude-desktop-mcp-bundle.json";
    anchor.rel = "noopener";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);

    setDownloaded(true);

    window.setTimeout(() => {
      setDownloaded(false);
    }, 2500);
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
      aria-label="Download Claude Desktop MCP configuration"
    >
      <span aria-hidden="true">↓</span>
      {downloaded
        ? "Configuration downloaded"
        : "Download claude_desktop_config.json"}
    </button>
  );
}
