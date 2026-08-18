"use client";

import { useCallback } from "react";

const codeReviewBundle = {
  mcpServers: {
    "github-review": {
      command: "docker",
      args: [
        "run", "-i", "--rm",
        "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
        "-e", "GITHUB_READ_ONLY=1",
        "-e", "GITHUB_TOOLSETS=repos,pull_requests,code_security",
        "ghcr.io/github/github-mcp-server"
      ],
      env: { GITHUB_PERSONAL_ACCESS_TOKEN: "YOUR_READ_ONLY_TOKEN" },
    },
    semgrep: {
      command: "uvx",
      args: ["semgrep-mcp"],
    },
    snyk: {
      command: "snyk",
      args: ["mcp", "-t", "stdio"],
    },
    sonarqube: {
      command: "docker",
      args: [
        "run", "-i", "--rm",
        "-e", "SONARQUBE_URL",
        "-e", "SONARQUBE_TOKEN",
        "-e", "SONARQUBE_ORGANIZATION",
        "sapientpants/sonarqube-mcp-server:latest"
      ],
      env: { 
        SONARQUBE_URL: "https://your-sonarqube-instance.com",
        SONARQUBE_TOKEN: "YOUR_SONARQUBE_TOKEN",
        SONARQUBE_ORGANIZATION: "YOUR_ORG_KEY"
      },
    },
    deepsource: {
      url: "https://mcp.deepsource.com/mcp",
    },
  },
};

export function DownloadCodeReviewMcpBundle() {
  const handleDownload = useCallback(() => {
    const blob = new Blob([JSON.stringify(codeReviewBundle, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mcp-code-review-bundle.json";
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
      Download Code Review Bundle (.json)
    </button>
  );
}
