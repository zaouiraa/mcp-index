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
      'Add fetch server to Claude Desktop config.',
      'Configure any required API keys.',
      'Restart Claude and test URL fetching.',
    ],
    faq: [
      {
        question: 'Does it work with authenticated URLs?',
        answer: 'Yes, you can configure basic auth or bearer tokens via environment variables.',
      },
      {
        question: 'What content types are supported?',
        answer: 'HTML, JSON, plain text, XML, and most common formats are automatically parsed.',
      },
    ],
    comparisons: [
      {
        feature: 'HTML parsing',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'JavaScript rendering',
        thisOk: false,
        competitorOk: true,
      },
      {
        feature: 'Rate limiting',
        thisOk: true,
        competitorOk: false,
      },
    ],
    tags: ['web', 'fetch', 'scraping', 'content-access'],
    githubUrl: 'https://github.com/community/mcp-fetch',
    npmPackage: '@mcp/server-fetch',
  },
  {
    id: '7',
    name: 'Memory MCP',
    slug: 'memory-mcp',
    category: 'Utilities',
    description: 'Persistent conversation memory and context management.',
    answerFirstSummary: 'Memory MCP enables AI models to store and retrieve persistent memory across conversations with automatic summarization and relevance ranking. Perfect for long-running assistants that need to remember user preferences and conversation history.',
    developer: 'Anthropic',
    license: 'MIT',
    lastUpdated: '2025-06-14',
    pricingModel: 'freemium',
    installs: 987,
    configJson: `{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["@mcp/server-memory"],
      "env": {
        "MEMORY_STORAGE": "local"
      }
    }
  }
}`,
    setupSteps: [
      'Install Memory MCP server.',
      'Choose storage backend (local, Redis, or database).',
      'Configure retention policies.',
      'Deploy and initialize memory store.',
    ],
    faq: [
      {
        question: 'How long is memory retained?',
        answer: 'Retention policies are configurable. Default is 30 days, but can be extended indefinitely.',
      },
      {
        question: 'Is memory encrypted?',
        answer: 'Yes, all stored memory can be encrypted at rest using your choice of encryption provider.',
      },
    ],
    comparisons: [
      {
        feature: 'Persistent storage',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Auto-summarization',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Multi-backend support',
        thisOk: true,
        competitorOk: false,
      },
    ],
    tags: ['memory', 'persistence', 'conversation', 'context'],
    githubUrl: 'https://github.com/anthropics/mcp-servers/tree/main/src/memory',
    npmPackage: '@mcp/server-memory',
  },
  {
    id: '8',
    name: 'Slack MCP',
    slug: 'slack-mcp',
    category: 'Communication',
    description: 'Integrate Slack workspace access for AI models.',
    answerFirstSummary: 'Slack MCP allows AI models to read messages, post to channels, and manage threads securely. Build AI assistants that can receive and respond to Slack messages with full context and conversation awareness.',
    developer: 'Community',
    license: 'MIT',
    lastUpdated: '2025-06-03',
    pricingModel: 'freemium',
    installs: 2134,
    configJson: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["@mcp/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-token"
      }
    }
  }
}`,
    setupSteps: [
      'Create a Slack Bot in your workspace settings.',
      'Generate a bot token with necessary permissions.',
      'Add token to environment configuration.',
      'Set up slash commands and event subscriptions.',
    ],
    faq: [
      {
        question: 'Can it read all messages?',
        answer: 'Only messages in channels where the bot is invited are accessible based on bot permissions.',
      },
      {
        question: 'How are credentials secured?',
        answer: 'Bot tokens are stored in environment variables and never logged or exposed in logs.',
      },
    ],
    comparisons: [
      {
        feature: 'Message reading',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Thread management',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'File access',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['slack', 'communication', 'bot', 'integration'],
    githubUrl: 'https://github.com/community/mcp-slack',
    npmPackage: '@mcp/server-slack',
  },
  {
    id: '9',
    name: 'Email MCP',
    slug: 'email-mcp',
    category: 'Communication',
    description: 'Email sending and management capabilities for AI models.',
    answerFirstSummary: 'Email MCP enables AI models to compose and send emails safely with template support and delivery tracking. Configure email providers and let AI assistants handle email communication through predefined templates.',
    developer: 'Community',
    license: 'MIT',
    lastUpdated: '2025-05-28',
    pricingModel: 'free',
    installs: 1456,
    configJson: `{
  "mcpServers": {
    "email": {
      "command": "npx",
      "args": ["@mcp/server-email"],
      "env": {
        "EMAIL_PROVIDER": "sendgrid",
        "SENDGRID_API_KEY": "your-key"
      }
    }
  }
}`,
    setupSteps: [
      'Choose an email provider (SendGrid, Mailgun, etc).',
      'Get API credentials from your provider.',
      'Configure provider in environment variables.',
      'Define email templates for AI to use.',
    ],
    faq: [
      {
        question: 'Is spam filtering included?',
        answer: 'Basic spam checks are included. Additional spam filtering depends on your email provider.',
      },
      {
        question: 'Can it send personalized emails?',
        answer: 'Yes, with template variables and dynamic content based on user data.',
      },
    ],
    comparisons: [
      {
        feature: 'Multiple providers',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Template support',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Delivery tracking',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['email', 'communication', 'templates', 'sendgrid'],
    githubUrl: 'https://github.com/community/mcp-email',
    npmPackage: '@mcp/server-email',
  },
  {
    id: '10',
    name: 'Browser MCP',
    slug: 'browser-mcp',
    category: 'Web Automation',
    description: 'Headless browser control for AI models.',
    answerFirstSummary: 'Browser MCP provides safe headless browser automation for AI models to interact with web applications, fill forms, and extract data. Built-in sandbox prevents malicious behavior while enabling complex web interactions.',
    developer: 'Vercel',
    license: 'MIT',
    lastUpdated: '2025-06-13',
    pricingModel: 'freemium',
    installs: 1678,
    configJson: `{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["@mcp/server-browser"],
      "env": {
        "BROWSER_TIMEOUT": "30000"
      }
    }
  }
}`,
    setupSteps: [
      'Install Browser MCP and dependencies.',
      'Install Chromium/Puppeteer.',
      'Configure browser sandbox rules.',
      'Set up resource limits and timeouts.',
    ],
    faq: [
      {
        question: 'Does it support JavaScript execution?',
        answer: 'Yes, full JavaScript execution support with customizable sandbox constraints.',
      },
      {
        question: 'Can it handle authentication?',
        answer: 'Yes, it can store and use cookies and session tokens securely.',
      },
    ],
    comparisons: [
      {
        feature: 'JavaScript support',
        thisOk: true,
        competitorOk: true,
      },
      {
        feature: 'Resource limits',
        thisOk: true,
        competitorOk: false,
      },
      {
        feature: 'Screenshot capture',
        thisOk: true,
        competitorOk: true,
      },
    ],
    tags: ['browser', 'automation', 'puppeteer', 'web-interaction'],
    githubUrl: 'https://github.com/vercel/mcp-browser',
    npmPackage: '@mcp/server-browser',
  },
];

export function getToolBySlug(slug: string): MCPTool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllSlugs(): string[] {
  return tools.map((tool) => tool.slug);
}
