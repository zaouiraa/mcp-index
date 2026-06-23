export type ToolLike = {
  slug: string;
  name?: string;
  category?: string | null;
  tags?: string[] | null;
};

export type GuideItem = {
  id: string;
  title: string;
  body: string;
  href: string;
  tags?: string[];
  categories?: string[];
  slugs?: string[];
  priority?: number;
};

const GUIDE_CATALOG: GuideItem[] = [
  {
    id: "github-setup",
    title: "GitHub MCP Server Setup",
    body: "Install and configure GitHub MCP Server step by step.",
    href: "/github-mcp-server-setup",
    slugs: ["github-mcp"],
    categories: ["Version Control"],
    tags: ["github", "repos", "pull-requests"],
    priority: 100,
  },
  {
    id: "github-auth",
    title: "GitHub MCP Authentication",
    body: "Fix token scopes, PAT issues, and private repo access problems.",
    href: "/github-mcp-server-authentication",
    slugs: ["github-mcp"],
    categories: ["Version Control"],
    tags: ["github", "auth", "token", "pat"],
    priority: 95,
  },
  {
    id: "github-workflows",
    title: "Best MCP Tools for GitHub Workflows",
    body: "Compare the best MCP stack for pull requests, docs, and security.",
    href: "/best-mcp-tools-for-github-workflows",
    slugs: ["github-mcp", "context7-mcp", "desktop-commander-mcp", "semgrep-mcp"],
    categories: ["Version Control", "Security", "Developer Tools"],
    tags: ["github", "pull-requests", "security", "docs"],
    priority: 90,
  },
  {
    id: "install-mcp",
    title: "How to Install MCP Servers",
    body: "Cross-client installation guide for Claude Desktop, Cursor, and VS Code.",
    href: "/how-to-install-mcp-servers",
    categories: ["Developer Tools", "Productivity", "Cloud", "Infrastructure", "Database", "Security"],
    tags: ["install", "setup", "mcp"],
    priority: 80,
  },
  {
    id: "claude-setup",
    title: "Claude Desktop MCP Setup",
    body: "Beginner-friendly guide to connect MCP servers in Claude Desktop.",
    href: "/claude-desktop-mcp-setup",
    categories: ["Developer Tools", "Productivity", "Cloud", "Infrastructure", "Database"],
    tags: ["claude", "desktop", "setup"],
    priority: 75,
  },
  {
    id: "open-source-tools",
    title: "Best Open Source MCP Tools on GitHub",
    body: "Compare popular open source MCP tools by use case and setup difficulty.",
    href: "/best-open-source-mcp-tools-on-github",
    categories: ["Developer Tools", "Security", "Productivity", "Cloud", "Infrastructure"],
    tags: ["open-source", "github", "comparison"],
    priority: 70,
  },
];

function normalize(value?: string | null) {
  return (value || "").trim().toLowerCase();
}

function normalizeList(values?: string[] | null) {
  return (values || []).map((v) => v.trim().toLowerCase());
}

function scoreGuide(tool: ToolLike, guide: GuideItem) {
  const toolSlug = normalize(tool.slug);
  const toolCategory = normalize(tool.category);
  const toolTags = normalizeList(tool.tags);

  let score = guide.priority || 0;

  const guideSlugs = normalizeList(guide.slugs);
  const guideCategories = normalizeList(guide.categories);
  const guideTags = normalizeList(guide.tags);

  if (guideSlugs.includes(toolSlug)) score += 100;
  if (toolCategory && guideCategories.includes(toolCategory)) score += 40;

  const sharedTags = toolTags.filter((tag) => guideTags.includes(tag)).length;
  score += sharedTags * 15;

  return score;
}

export function getRelatedGuidesForTool(tool: ToolLike, limit = 3) {
  return GUIDE_CATALOG
    .map((guide) => ({
      ...guide,
      _score: scoreGuide(tool, guide),
    }))
    .filter((guide) => guide._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, limit)
    .map(({ _score, ...guide }) => guide);
}
