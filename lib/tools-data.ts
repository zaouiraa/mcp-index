export interface MCPTool {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  answerFirstSummary: string;
  developer: string;
  license: string;
  lastUpdated: string;
  pricingModel: 'free' | 'freemium' | 'paid';
  installs: number;
  configJson: string;
  setupSteps: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  comparisons: Array<{
    feature: string;
    thisOk: boolean;
    competitorOk: boolean;
  }>;
  tags: string[];
  githubUrl: string;
  npmPackage: string;
}

export const tools: MCPTool[] = [
  {
    id: '1',
    name: 'Web Search MCP',
    slug: 'web-search-mcp',
    category: 'Search & Data',
    description: 'Powerful web search integration for AI models with real-time results and advanced filtering.',
    answerFirstSummary: 'Web Search MCP enables AI models to search the internet in real-time, fetch current information, and cite sources accurately. Perfect for building AI assistants that need up-to-date knowledge beyond their training data. Supports multiple search engines and provides structured results.',
    developer: 'Anthropic',
    license: 'MIT',
    lastUpdated: '2025-06-15',
    pricingModel: 'free',
    installs: 2847,
    configJson: `{
  "mcpServers": {
    "web-search": {
      "command": "npx",
      "args": ["@mcp/server-web-search"]
    }
  }
}`,
    setupSteps: [
      'Install the MCP server package using npm or your package manager.',
      'Add the configuration to your Claude Desktop config.json file.',
      'Restart Claude Desktop to enable the Web Search MCP.',
      'Test by asking Claude to search for current information.',
    ],
    faq: [
      {
        question: 'How to setup Web Search MCP?',
        answer: 'Installation takes just 2 minutes. Download the package, add it to your config, and restart. Full documentation available on GitHub.',
      },
      {
        question: 'Is Web Search MCP free?',
        answer: 'Yes, Web Search MCP is completely free and open-source under the MIT license.',
      },
      {
        question: 'What are the rate limits?',
        answer: 'Standard rate limits apply based on your API provider. Most users experience no limits with default configurations.',
      },
    ],
    comparisons: [
      {
        feature: 'Real-time search',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Source attribution',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Multiple search engines',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Open source',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Custom filtering',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['search', 'real-time', 'open-source', 'ai-powered', 'free'],
    githubUrl: 'https://github.com/anthropics/mcp-servers/tree/main/src/web-search',
    npmPackage: '@mcp/server-web-search',
  },
  {
    id: '2',
    name: 'File System MCP',
    slug: 'file-system-mcp',
    category: 'File Management',
    description: 'Secure file system access for AI models with fine-grained permissions.',
    answerFirstSummary: 'File System MCP provides controlled access to local files for AI models with granular permission controls and audit logging. Enables AI assistants to read, write, and manage files safely within defined boundaries.',
    developer: 'Anthropic',
    license: 'MIT',
    lastUpdated: '2025-06-10',
    pricingModel: 'free',
    installs: 1923,
    configJson: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@mcp/server-filesystem", "/Users/username/allowed-directory"]
    }
  }
}`,
    setupSteps: [
      'Install the File System MCP server package.',
      'Configure allowed directories in your config.',
      'Set file access permissions.',
      'Reload Claude Desktop to activate.',
    ],
    faq: [
      {
        question: 'How do I restrict file access?',
        answer: 'Use the allowedDirectories configuration to limit which directories AI can access.',
      },
      {
        question: 'Is it safe for production?',
        answer: 'Yes, with proper permission configuration and audit logging enabled.',
      },
    ],
    comparisons: [
      {
        feature: 'Permission control',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Audit logging',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Secure by default',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['files', 'security', 'permissions', 'open-source'],
    githubUrl: 'https://github.com/anthropics/mcp-servers/tree/main/src/filesystem',
    npmPackage: '@mcp/server-filesystem',
  },
  {
    id: '3',
    name: 'Git MCP',
    slug: 'git-mcp',
    category: 'Development Tools',
    description: 'Git repository access and management through AI models.',
    answerFirstSummary: 'Git MCP allows AI models to read commits, branches, and diffs from Git repositories. Perfect for building coding assistants that understand project history and can analyze code changes.',
    developer: 'Vercel',
    license: 'MIT',
    lastUpdated: '2025-06-08',
    pricingModel: 'free',
    installs: 3142,
    configJson: `{
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["@mcp/server-git"]
    }
  }
}`,
    setupSteps: [
      'Install the Git MCP package via npm.',
      'Add server configuration to Claude config.',
      'Point to your git repositories.',
      'Restart and test with git commands.',
    ],
    faq: [
      {
        question: 'Can it modify repositories?',
        answer: 'The standard version is read-only for safety. Write access can be enabled with proper permissions.',
      },
      {
        question: 'Works with GitHub and GitLab?',
        answer: 'Yes, it works with any Git repository on local or remote systems.',
      },
    ],
    comparisons: [
      {
        feature: 'Read-only by default',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Commit history access',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Branch analysis',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['git', 'development', 'version-control', 'analysis'],
    githubUrl: 'https://github.com/anthropics/mcp-servers/tree/main/src/git',
    npmPackage: '@mcp/server-git',
  },
  {
    id: '4',
    name: 'Database Query MCP',
    slug: 'database-query-mcp',
    category: 'Data Integration',
    description: 'Query and manage databases through AI model interactions.',
    answerFirstSummary: 'Database Query MCP enables safe SQL query execution with parameterized queries and role-based access. Connect to PostgreSQL, MySQL, and SQLite with automatic query validation and injection prevention.',
    developer: 'Community',
    license: 'Apache 2.0',
    lastUpdated: '2025-06-05',
    pricingModel: 'freemium',
    installs: 1567,
    configJson: `{
  "mcpServers": {
    "database": {
      "command": "npx",
      "args": ["@mcp/server-database"],
      "env": {
        "DATABASE_URL": "postgresql://user:password@localhost/db"
      }
    }
  }
}`,
    setupSteps: [
      'Install the Database Query MCP.',
      'Set up database connection credentials.',
      'Configure user roles and permissions.',
      'Test queries with sample data.',
    ],
    faq: [
      {
        question: 'Is it safe from SQL injection?',
        answer: 'Yes, all queries use parameterized statements and are validated before execution.',
      },
      {
        question: 'Which databases are supported?',
        answer: 'PostgreSQL, MySQL, SQLite, and more through the database adapter system.',
      },
    ],
    comparisons: [
      {
        feature: 'SQL injection protection',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Multiple databases',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Role-based access',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['database', 'sql', 'data-management', 'security'],
    githubUrl: 'https://github.com/community/mcp-database',
    npmPackage: '@mcp/server-database',
  },
  {
    id: '5',
    name: 'OpenAPI MCP',
    slug: 'openapi-mcp',
    category: 'API Integration',
    description: 'Dynamic API integration through OpenAPI specifications.',
    answerFirstSummary: 'OpenAPI MCP automatically generates AI-compatible interfaces from OpenAPI 3.0 specifications. Enables models to interact with any REST API safely with automatic request validation and response parsing.',
    developer: 'Anthropic',
    license: 'MIT',
    lastUpdated: '2025-06-12',
    pricingModel: 'free',
    installs: 2456,
    configJson: `{
  "mcpServers": {
    "openapi": {
      "command": "npx",
      "args": ["@mcp/server-openapi", "https://api.example.com/openapi.json"]
    }
  }
}`,
    setupSteps: [
      'Install the OpenAPI MCP server.',
      'Provide OpenAPI specification URL or local file.',
      'Configure API authentication if needed.',
      'Deploy and test API access.',
    ],
    faq: [
      {
        question: 'What OpenAPI versions are supported?',
        answer: 'OpenAPI 3.0+ is fully supported. Swagger 2.0 requires conversion.',
      },
      {
        question: 'How are authentication credentials handled?',
        answer: 'Credentials are stored securely in environment variables and never exposed to the model.',
      },
    ],
    comparisons: [
      {
        feature: 'OpenAPI 3.0 support',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Auth security',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Request validation',
        thisOk: true,
        competitorOk: false,
      },
    ],
    tags: ['api', 'openapi', 'rest', 'integration'],
    githubUrl: 'https://github.com/anthropics/mcp-servers/tree/main/src/openapi',
    npmPackage: '@mcp/server-openapi',
  },
  {
    id: '6',
    name: 'Fetch MCP',
    slug: 'fetch-mcp',
    category: 'Web Access',
    description: 'Fetch and process web content for AI analysis.',
    answerFirstSummary: 'Fetch MCP enables AI models to retrieve and parse HTML, JSON, and text content from web URLs with built-in filtering and sanitization. Perfect for research, content analysis, and web scraping tasks.',
    developer: 'Community',
    license: 'MIT',
    lastUpdated: '2025-06-01',
    pricingModel: 'free',
    installs: 1834,
    configJson: `{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["@mcp/server-fetch"]
    }
  }
}`,
    setupSteps: [
      'Install the Fetch MCP package.',
      'Configure allowed domains if needed.',
      'Set up caching preferences.',
      'Activate in Claude Desktop config.',
    ],
    faq: [
      {
        question: 'Can it handle dynamic content?',
        answer: 'The basic version handles static HTML. JavaScript rendering requires the premium extension.',
      },
      {
        question: 'Are there request limits?',
        answer: 'Standard web request limits apply. Implement caching to optimize usage.',
      },
    ],
    comparisons: [
      {
        feature: 'HTML parsing',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Content sanitization',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Caching support',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['web', 'fetch', 'scraping', 'content-analysis'],
    githubUrl: 'https://github.com/community/mcp-fetch',
    npmPackage: '@mcp/server-fetch',
  },
  {
    id: '7',
    name: 'Memory MCP',
    slug: 'memory-mcp',
    category: 'State Management',
    description: 'Persistent memory storage for AI conversations.',
    answerFirstSummary: 'Memory MCP provides persistent key-value storage for maintaining context across multiple AI interactions. Build stateful AI assistants that remember user preferences, conversation history, and custom instructions.',
    developer: 'Vercel',
    license: 'MIT',
    lastUpdated: '2025-06-14',
    pricingModel: 'freemium',
    installs: 892,
    configJson: `{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["@mcp/server-memory"],
      "env": {
        "MEMORY_BACKEND": "redis"
      }
    }
  }
}`,
    setupSteps: [
      'Install the Memory MCP server.',
      'Configure backend (Redis, SQLite, etc).',
      'Set data retention policies.',
      'Deploy with persistence enabled.',
    ],
    faq: [
      {
        question: 'What happens to data after conversations end?',
        answer: 'Data persists according to your retention policy settings. Default is 30 days.',
      },
      {
        question: 'Is stored data encrypted?',
        answer: 'Yes, all data is encrypted at rest and in transit.',
      },
    ],
    comparisons: [
      {
        feature: 'Persistent storage',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Encryption',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Multiple backends',
        thisOk: true,
        competitorOk: false,
      },
    ],
    tags: ['memory', 'state', 'persistence', 'conversation'],
    githubUrl: 'https://github.com/vercel/mcp-servers/tree/main/memory',
    npmPackage: '@mcp/server-memory',
  },
  {
    id: '8',
    name: 'Slack MCP',
    slug: 'slack-mcp',
    category: 'Communication',
    description: 'Integrate AI models with Slack workspaces.',
    answerFirstSummary: 'Slack MCP allows AI assistants to read messages, post updates, and manage channels within Slack. Build autonomous bots that understand conversations and take actions in response.',
    developer: 'Community',
    license: 'MIT',
    lastUpdated: '2025-05-28',
    pricingModel: 'free',
    installs: 1456,
    configJson: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["@mcp/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-..."
      }
    }
  }
}`,
    setupSteps: [
      'Create a Slack app and generate bot token.',
      'Install the Slack MCP server.',
      'Configure bot permissions.',
      'Deploy and invite bot to channels.',
    ],
    faq: [
      {
        question: 'What permissions does the bot need?',
        answer: 'Minimal permissions for reading messages and posting. Fine-grained controls available.',
      },
      {
        question: 'Can it handle multiple workspaces?',
        answer: 'Yes, multiple workspace support is available with separate tokens.',
      },
    ],
    comparisons: [
      {
        feature: 'Message reading',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Channel management',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Thread support',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['slack', 'communication', 'automation', 'bots'],
    githubUrl: 'https://github.com/community/mcp-slack',
    npmPackage: '@mcp/server-slack',
  },
  {
    id: '9',
    name: 'Email MCP',
    slug: 'email-mcp',
    category: 'Communication',
    description: 'Email integration for AI-powered email management.',
    answerFirstSummary: 'Email MCP enables AI models to read, search, and send emails through IMAP and SMTP protocols. Automate email workflows, draft responses, and manage inboxes intelligently.',
    developer: 'Anthropic',
    license: 'MIT',
    lastUpdated: '2025-06-11',
    pricingModel: 'free',
    installs: 1289,
    configJson: `{
  "mcpServers": {
    "email": {
      "command": "npx",
      "args": ["@mcp/server-email"],
      "env": {
        "EMAIL_IMAP_HOST": "imap.gmail.com",
        "EMAIL_ACCOUNT": "your-email@gmail.com"
      }
    }
  }
}`,
    setupSteps: [
      'Generate app password for your email provider.',
      'Install the Email MCP server.',
      'Configure IMAP and SMTP settings.',
      'Activate and test email access.',
    ],
    faq: [
      {
        question: 'Is it secure to store email credentials?',
        answer: 'Credentials are stored in environment variables with encryption for sensitive data.',
      },
      {
        question: 'Which email providers are supported?',
        answer: 'Gmail, Outlook, Yahoo, and any provider with IMAP/SMTP access.',
      },
    ],
    comparisons: [
      {
        feature: 'IMAP support',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Send emails',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Search filtering',
        thisOk: true,
        competitorOk: false,
      },
    ],
    tags: ['email', 'communication', 'automation', 'imap-smtp'],
    githubUrl: 'https://github.com/anthropics/mcp-servers/tree/main/src/email',
    npmPackage: '@mcp/server-email',
  },
  {
    id: '10',
    name: 'Notion MCP',
    slug: 'notion-mcp',
    category: 'Productivity',
    description: 'Access and manage Notion databases through AI.',
    answerFirstSummary: 'Notion MCP integrates with Notion databases, allowing AI models to read, create, and update pages. Perfect for building AI assistants that manage project notes, task databases, and knowledge bases.',
    developer: 'Community',
    license: 'MIT',
    lastUpdated: '2025-06-09',
    pricingModel: 'free',
    installs: 967,
    configJson: `{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["@mcp/server-notion"],
      "env": {
        "NOTION_API_KEY": "secret_..."
      }
    }
  }
}`,
    setupSteps: [
      'Create Notion integration and get API key.',
      'Install the Notion MCP server.',
      'Share Notion databases with the integration.',
      'Configure database access permissions.',
    ],
    faq: [
      {
        question: 'Can it create new Notion pages?',
        answer: 'Yes, create and update pages in shared databases.',
      },
      {
        question: 'What about database templates?',
        answer: 'Templates are supported and can be used to create consistent database entries.',
      },
    ],
    comparisons: [
      {
        feature: 'Database read',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Page creation',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Template support',
        thisOk: true,
        competitorOk: false,
      },
    ],
    tags: ['notion', 'productivity', 'databases', 'knowledge-base'],
    githubUrl: 'https://github.com/community/mcp-notion',
    npmPackage: '@mcp/server-notion',
  },
];

export function getToolBySlug(slug: string): MCPTool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllSlugs(): string[] {
  return tools.map((tool) => tool.slug);
}
