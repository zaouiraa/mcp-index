"use client";

import { useCallback } from "react";

const scrapingBundle = {
  mcpServers: {
    firecrawl: {
      command: "npx",
      args: ["-y", "firecrawl-mcp"],
      env: { FIRECRAWL_API_KEY: "YOUR_FIRECRAWL_API_KEY" },
    },
    zenrows: {
      command: "npx",
      args: ["-y", "@zenrows/mcp"],
      env: { ZENROWS_API_KEY: "YOUR_ZENROWS_API_KEY" },
    },
    scrapfly: {
      command: "npx",
      args: ["mcp-remote", "https://mcp.scrapfly.io/mcp"],
    },
    playwright: {
      command: "npx",
      args: ["@playwright/mcp"],
    },
    "chrome-devtools": {
      command: "npx",
      args: ["chrome-devtools-mcp@latest"],
    },
  },
};

export function DownloadScrapingMcpBundle() {
  const handleDownload = useCallback(() => {
    const blob = new Blob([JSON.stringify(scrapingBundle, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mcp-web-scraping-bundle.json";
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
      Download Scraping Bundle (.json)
    </button>
  );
}
