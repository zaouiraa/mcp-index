export type GuideCategory =
  | 'Beginner'
  | 'Setup'
  | 'Comparison'
  | 'Workflow'
  | 'Security'

export type GuideFaqItem = {
  question: string
  answer: string
}

export type GuideSection = {
  id: string
  title: string
  body: string[]
  list?: string[]
}

export type Guide = {
  slug: string
  title: string
  description: string
  excerpt: string
  category: GuideCategory
  publishedAt: string
  updatedAt: string
  readingTime: string
  keywords: string[]
  relatedToolSlugs?: string[]
  relatedGuideSlugs?: string[]
  faq?: GuideFaqItem[]
  sections: GuideSection[]
}

export const guides: Guide[] = [
  {
    slug: 'what-is-model-context-protocol',
    title: 'What Is Model Context Protocol (MCP)? The Complete 2026 Guide',
    description:
      'Learn what Model Context Protocol (MCP) is, how MCP servers work, why Anthropic introduced it, and how to use MCP in real AI workflows.',
    excerpt:
      'A beginner-friendly guide to Model Context Protocol, including how MCP clients and servers work, where MCP is useful, and how to start using it.',
    category: 'Beginner',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-06',
    readingTime: '8 min read',
    keywords: [
      'what is model context protocol',
      'model context protocol',
      'mcp',
      'mcp servers',
      'anthropic mcp',
      'how to use mcp',
    ],
    relatedToolSlugs: ['github-mcp', 'supabase-mcp', 'desktop-commander-mcp'],
    relatedGuideSlugs: ['claude-desktop-mcp-setup', 'how-to-install-mcp-servers'],
    faq: [
      { question: 'What does MCP stand for?', answer: 'MCP stands for Model Context Protocol.' },
      { question: 'Who created Model Context Protocol?', answer: 'Anthropic introduced it in November 2024.' },
      {
        question: 'Is MCP the same as an MCP server?',
        answer: 'No. MCP is the protocol, while an MCP server is an implementation that exposes capabilities through it.',
      },
      {
        question: 'Can MCP work outside Anthropic products?',
        answer: 'Yes. MCP is designed as an open standard, although support depends on whether a specific client or platform implements it.',
      },
    ],
    sections: [
      {
        id: 'what-is-mcp',
        title: 'What is Model Context Protocol?',
        body: [
          'Model Context Protocol, usually shortened to MCP, is an open standard for connecting AI applications to external tools, data sources, and systems in a consistent way.',
          'In simple terms, MCP gives AI products a shared way to discover capabilities, read context, and call tools without rebuilding every integration from scratch for every application and every service.',
        ],
      },
      {
        id: 'why-mcp-matters',
        title: 'Why MCP matters',
        body: [
          'Before MCP, teams often had to build custom integrations for each model, each application surface, and each external tool.',
          'MCP matters because it reduces that duplication into a more reusable model where compatible clients can work with compatible servers through a shared protocol.',
        ],
      },
      {
        id: 'how-mcp-works',
        title: 'How MCP works',
        body: [
          'At a high level, MCP uses a client-server model. An AI application runs an MCP client, and that client communicates with one or more MCP servers that expose capabilities such as tools, resources, or prompts.',
        ],
        list: [
          'The user works inside an AI application that supports MCP.',
          'The application connects to an MCP server through a standard protocol layer.',
          'The server exposes available capabilities and readable context.',
          'The AI client uses those capabilities inside a real workflow such as reading files or querying a repository.',
        ],
      },
      {
        id: 'how-to-use-mcp-today',
        title: 'How to use MCP today',
        body: [
          'Using MCP today usually means choosing a host that supports it, configuring one or more MCP servers, and then granting the AI assistant access to the capabilities those servers expose.',
        ],
        list: [
          'Pick an MCP-capable environment such as a desktop assistant or coding tool.',
          'Choose the MCP server that matches the task.',
          'Add the required configuration and credentials.',
          'Verify that the host can discover and use the server capabilities.',
        ],
      },
    ],
  },
  {
    slug: 'claude-desktop-mcp-setup',
    title: 'Claude Desktop MCP Setup',
    description:
      'A beginner-friendly walkthrough for connecting MCP servers in Claude Desktop and validating that the setup works.',
    excerpt: 'Learn how to configure Claude Desktop for MCP, add a server config, and troubleshoot common setup issues.',
    category: 'Setup',
    publishedAt: '2026-06-20',
    updatedAt: '2026-07-06',
    readingTime: '6 min read',
    keywords: ['claude desktop mcp setup', 'claude mcp', 'how to install mcp in claude desktop'],
    relatedGuideSlugs: ['how-to-install-mcp-servers', 'what-is-model-context-protocol'],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: ['Claude Desktop is one of the most common places where new users first encounter MCP in practice.'],
      },
      {
        id: 'setup-steps',
        title: 'Setup steps',
        body: ['The exact flow depends on your environment, but the general pattern is consistent across most MCP server setups.'],
        list: [
          'Install or identify the MCP server you want to use.',
          'Add the server configuration to your Claude Desktop MCP config file.',
          'Restart Claude Desktop.',
          'Verify the server appears and can be called successfully.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-install-mcp-servers',
    title: 'How to Install MCP Servers',
    description:
      'A cross-client installation guide for MCP servers covering the general workflow and the most common setup mistakes.',
    excerpt: 'Understand the shared setup pattern for MCP clients, server configuration, credentials, and troubleshooting.',
    category: 'Setup',
    publishedAt: '2026-06-18',
    updatedAt: '2026-07-06',
    readingTime: '7 min read',
    keywords: ['how to install mcp servers', 'install mcp', 'mcp client setup'],
    relatedGuideSlugs: ['claude-desktop-mcp-setup', 'what-is-model-context-protocol'],
    sections: [
      {
        id: 'installation-pattern',
        title: 'The common installation pattern',
        body: ['Most MCP installations follow the same basic structure even when the client interface looks different.'],
        list: [
          'Choose the client or host that supports MCP.',
          'Select the server for your workflow.',
          'Add configuration details and credentials.',
          'Restart the client and test discovery.',
        ],
      },
    ],
  },
]

/**
 * Backward-compatible export required by app/sitemap.ts and any other
 * existing module that still imports GUIDE_CATALOG directly.
 * Do not remove this export without updating app/sitemap.ts.
 */
export const GUIDE_CATALOG = guides

export function getAllGuides(): Guide[] {
  return guides
}

export function getGuideBySlug(slug: string): Guide | null {
  return guides.find((guide) => guide.slug === slug) ?? null
}

export function getGuideSlugs(): string[] {
  return guides.map((guide) => guide.slug)
}

export function getGuidesByCategory(category: GuideCategory): Guide[] {
  return guides.filter((guide) => guide.category === category)
}

export function getRelatedGuides(slug: string, limit = 3): Guide[] {
  const guide = getGuideBySlug(slug)
  if (!guide) return []

  const directRelations = (guide.relatedGuideSlugs ?? [])
    .map((relatedSlug) => getGuideBySlug(relatedSlug))
    .filter(Boolean) as Guide[]

  if (directRelations.length >= limit) {
    return directRelations.slice(0, limit)
  }

  const fallbackRelations = guides
    .filter((item) => item.slug !== slug)
    .filter((item) => item.category === guide.category)
    .filter((item) => !directRelations.some((related) => related.slug === item.slug))

  return [...directRelations, ...fallbackRelations].slice(0, limit)
}

/**
 * Backward-compatible helper kept for any legacy call sites that still use
 * the original function name from the tool detail page.
 */
export function getRelatedGuidesForTool(
  tool: { slug: string; category?: string | null; tags?: string[] | null }
) {
  const category = tool.category?.toLowerCase()
  const tags = tool.tags?.map((tag) => tag.toLowerCase()) ?? []

  const matched = guides.filter((guide) => {
    if (guide.relatedToolSlugs?.includes(tool.slug)) return true
    if (category && guide.category.toLowerCase() === category) return true
    return tags.some((tag) => guide.keywords.some((keyword) => keyword.includes(tag)))
  })

  return matched.slice(0, 3).map((guide) => ({
    title: guide.title,
    body: guide.excerpt,
    href: guide.slug,
  }))
}
