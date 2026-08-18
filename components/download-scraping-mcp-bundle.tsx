"use client";

import { useState } from "react";

const configBundle = `{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "YOUR_FIRECRAWL_API_KEY"
      }
    },
    "zenrows": {
      "command": "npx",
      "args": ["-y", "@zenrows/mcp"],
      "env": {
        "ZENROWS_API_KEY": "YOUR_ZENROWS_API_KEY"
      }
    },
    "scrapfly": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.scrapfly.io/mcp"
      ]
    },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp"]
    },
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest"]
    }
  }
}
`;

export function DownloadScrapingMcpBundle() {
  const [downloaded, setDownloaded] = useState(false);

  function handleDownload() {
    const blob = new Blob([configBundle], {
      type: "application/json;charset=utf-8",
    });

    const url = URL.createObjectURL(url);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "claude_desktop_scraping_mcp_config.json";
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
