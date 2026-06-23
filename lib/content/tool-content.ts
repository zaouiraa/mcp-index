export type ToolContentLike = {
  name: string;
  category?: string | null;
  tags?: string[] | null;
};

function normalize(value?: string | null) {
  return (value || "").normalize("NFKC").trim().toLowerCase();
}

function normalizeList(values?: string[] | null) {
  return (values || []).map((value) => normalize(value)).filter(Boolean);
}

export function buildUseCases(tool: ToolContentLike): string[] {
  const category = normalize(tool.category);
  const tags = normalizeList(tool.tags);

  if (category.includes("version control")) {
    return [
      `Managing repositories, branches, and commits through an AI workflow with ${tool.name}.`,
      "Reviewing issues, pull requests, or merge requests without leaving your MCP client.",
      "Supporting Git-based team workflows for code review, collaboration, and automation.",
    ];
  }

  if (category.includes("browser")) {
    return [
      `Automating websites, testing flows, and extracting page data using ${tool.name}.`,
      "Running browser tasks like clicking, filling forms, and scraping structured content.",
      "Supporting QA, research, and workflow automation for modern web apps.",
    ];
  }

  if (category.includes("database")) {
    return [
      `Querying and inspecting data directly from your AI assistant with ${tool.name}.`,
      "Debugging records, reviewing schemas, or validating application data quickly.",
      "Supporting developer workflows that need fast database access without context switching.",
    ];
  }

  if (category.includes("productivity")) {
    return [
      `Connecting knowledge, notes, and team content with ${tool.name}.`,
      "Searching documents, updating workspace content, and organizing information through AI.",
      "Helping teams centralize planning, documentation, and operational workflows.",
    ];
  }

  if (category.includes("cloud") || category.includes("infrastructure")) {
    return [
      `Managing infrastructure and operational workflows with ${tool.name}.`,
      "Inspecting environments, services, and cluster resources directly from an MCP client.",
      "Helping DevOps teams reduce context switching during debugging and deployment tasks.",
    ];
  }

  if (tags.includes("search") || tags.includes("web")) {
    return [
      `Giving AI assistants live web access and retrieval capabilities through ${tool.name}.`,
      "Finding current information, research sources, and web results beyond static model knowledge.",
      "Supporting research-heavy workflows that need fresh data from the open web.",
    ];
  }

  return [
    `${tool.name} is useful when you want to extend an AI assistant with real tools and live system access.`,
    "It helps move from chat-only answers to real actions such as reading data, managing systems, or retrieving current information.",
    "It is best for developer and technical workflows where AI needs controlled access to external tools or services.",
  ];
}

export function buildWhenToChoose(tool: ToolContentLike): string {
  const name = normalize(tool.name);
  const category = normalize(tool.category);
  const tags = normalizeList(tool.tags);

  if (name.includes("gitlab")) {
    return `Choose ${tool.name} when your team works in GitLab.com or a self-hosted GitLab instance and needs AI help with repositories, issues, merge requests, or CI/CD workflows.`;
  }

  if (name.includes("github")) {
    return `Choose ${tool.name} when your repositories, pull requests, and issues already live in GitHub and you want direct AI-assisted repository operations.`;
  }

  if (category.includes("browser")) {
    return `Choose ${tool.name} when you need browser automation, testing, scraping, or page interaction rather than API-only access.`;
  }

  if (category.includes("database")) {
    return `Choose ${tool.name} when your workflow depends on inspecting or querying structured data directly from an MCP-compatible AI assistant.`;
  }

  if (tags.includes("search") || tags.includes("research")) {
    return `Choose ${tool.name} when fresh, real-time information matters and your AI assistant needs live search or research capabilities.`;
  }

  return `Choose ${tool.name} when you want an MCP server focused on ${tool.category || "technical workflows"} and need tighter integration with your existing tools.`;
}
