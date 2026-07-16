"use client";

import { useCallback } from "react";

const scrapingConfig = {
  mcpServers: {
    playwright: {
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-playwright"],
      env: { PLAYWRIGHT_BROWSER: "chromium" },
    },
    firecrawl: {
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-firecrawl"],
      env: { FIRECRAWL_API_KEY: "your_key_here" },
    },
    puppeteer: {
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-puppeteer"],
      env: { PUPPETEER_HEADLESS: "true" },
    },
  },
};

export function DownloadConfigButton() {
  const handleDownload = useCallback(() => {
    const blob = new Blob([JSON.stringify(scrapingConfig, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scraping-mcp-servers-config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-600/20"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
      </svg>
      Download Free Config Bundle
    </button>
  );
}
