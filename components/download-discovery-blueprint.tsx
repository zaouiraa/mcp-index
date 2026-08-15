"use client";

import { useState } from "react";

export default function DownloadDiscoveryBlueprint() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // قم بتغيير هذا المسار ليناسب نقطة الـ API الخاص بك (مثال: "/api/download/discovery-blueprint")
      const res = await fetch("/api/download/discovery-blueprint");
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mcp-discovery-blueprint.md";
      document.body.appendChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading (false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="w-full px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-derivable"
    >
      {isDownloading ? "Generating..." : "Get the Blueprint"}
    </button>
  );
}
