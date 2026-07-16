"use client";

import { useState } from "react";

export function DownloadMcpChecklistButton() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const checklist = `# 🔒 MCP Security & Evaluation Checklist
*By MCPIndex.dev - Use this before installing ANY open-source MCP server.*

---

## Step 1: Repository Vetting (Before Installing)
- [ ] **Active Maintenance:** Are there commits in the last 3 months?
- [ ] **Official vs Community:** Is this published by the official vendor (e.g., GitHub, Supabase) or an independent developer?
- [ ] **Stars & Forks:** Does it have a healthy community (usually 500+ stars for established tools)?
- [ ] **Issue Tracker:** Are open issues being answered, or is the repo abandoned?

## Step 2: Permission & Access Audit (Critical)
- [ ] **Read-Only vs Read-Write:** Does the MCP server only read data, or can it modify/delete files?
- [ ] **Network Access:** Does it make outbound API calls? To where?
- [ ] **File System Scope:** Does it have access to your whole machine (\`/\`) or just the project folder?
- [ ] **Shell Execution:** Can it run arbitrary terminal commands? (High Risk)
- [ ] **Credential Handling:** Does it ask for API keys in \`claude_desktop_config.json\`? Are they stored securely?

## Step 3: Claude Desktop Config Isolation
- [ ] **Sandboxing:** If the tool is risky, consider running Claude Desktop in a container or VM.
- [ ] **Token Scoping:** If it asks for a GitHub PAT, create a fine-grained token with *only* the specific scopes needed (e.g., \`repo\` only, NOT \`repo, admin, delete_repo\`).
- [ ] **Separate Profiles:** Consider having a "Trusted" and "Experimental" Claude Desktop profile in your config file.

## Step 4: Claude Desktop Setup Validation
- [ ] **Npx vs Global:** Prefer running via \`npx\` to avoid global package conflicts, unless the docs specify otherwise.
- [ ] **Test in Empty Folder:** Run Claude Desktop from an empty directory first to see what files it creates/modifies.
- [ ] **Monitor Claude:** Ask Claude to list the tools it can see. Verify no unexpected tools appear.

---
*Always review the source code of MCP servers that request high system permissions.*
*Find safe, vetted MCP servers at mcpindex.dev/tools*
`;

    const blob = new Blob([checklist], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "MCP-Security-Checklist.md";
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
          : "bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/10"
      }`}
    >
      {isDownloaded ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Downloaded!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591-3.824 10.29-9 11.622 0 5.591 3.824 10.29 9 11.622 0 1.042-.18 2.042-.502 3z" /></svg>
          Download Security Checklist (Free)
        </>
      )}
    </button>
  );
}
