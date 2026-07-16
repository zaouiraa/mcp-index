"use client";

import { useState } from "react";

export function DownloadConfigButton() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const topPicksConfig = {
      mcpServers: {
        "context7-mcp": {
          command: "npx",
          args: ["-y", "@upstash/context7-mcp@latest"],
        },
        "github-mcp": {
          command: "npx",
          args: ["-y", "@anthropic/github-mcp-server"],
          env: {
            GITHUB_PERSONAL_ACCESS_TOKEN: "YOUR_GITHUB_PAT_HERE",
          },
        },
        "supabase-mcp": {
          command: "npx",
          args: ["-y", "@supabase/mcp-server-supabase", "postgresql"],
          env: {
            SUPABASE_ACCESS_TOKEN: "YOUR_SUPABASE_TOKEN_HERE",
          },
        },
        "desktop-commander": {
          command: "npx",
          args: ["-y", "@wonderwhy-er/desktop-commander"],
        },
        "figma-mcp": {
          command: "npx",
          args: ["-y", "figma-developer-mcp", "--figma-api-key=YOUR_FIGMA_TOKEN"],
        },
      },
    };

    const blob = new Blob([JSON.stringify(topPicksConfig, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "claude_desktop_config.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <button
      onClick={handleDownload}
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
        isDownloaded
          ? "bg-emerald-600 hover:bg-emerald-500 text-white"
          : "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
      }`}
    >
      {isDownloaded ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Downloaded Successfully!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Download Top 5 Config File (Free)
        </>
      )}
    </button>
  );
}
