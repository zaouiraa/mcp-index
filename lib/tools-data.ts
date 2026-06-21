export interface MCPTool {
<<<<<<< HEAD
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
=======
  slug: string;
  name: string;
  shortDescription: string;
  answerFirstSummary: string;
  developer: string;
  githubUrl: string;
  npmPackage: string;
  license: string;
  isFree: boolean;
  category: string;
  tags: string[];
  configJson: string;
  setupSteps: string[];
  faq: { question: string; answer: string }[];
  comparisons: { feature: string; thisTool: string; competitor: string; thisOk: boolean; competitorOk: boolean }[];
  lastUpdated: string;
  installs: string;
>>>>>>> main
}

export const tools: MCPTool[] = [
  {
<<<<<<< HEAD
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
=======
    slug: "filesystem-mcp",
    name: "Filesystem MCP Server",
    shortDescription: "Secure file system access for AI agents with configurable permissions",
    answerFirstSummary: "Filesystem MCP Server by Anthropic lets AI models read, write, and search files on your local machine through a controlled permission system. It supports directory listing, file creation, and glob-based search patterns, making it essential for coding assistants that need to explore and modify project files safely.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem",
    npmPackage: "@modelcontextprotocol/server-filesystem",
    license: "MIT",
    isFree: true,
    category: "File Management",
    tags: ["files", "local", "permissions", "anthropic", "coding"],
>>>>>>> main
    configJson: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
<<<<<<< HEAD
      "args": ["@mcp/server-filesystem", "/Users/username/allowed-directory"]
=======
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
>>>>>>> main
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Install Node.js 18+ on your system if not already installed.",
      "Decide which directories the AI should have access to (never grant root access).",
      "Add the configuration JSON above to your Claude Desktop config file.",
      "Restart Claude Desktop. The filesystem tool will appear in the tools panel.",
      "Test by asking Claude to list files or read a specific file from the allowed directory."
    ],
    faq: [
      { question: "Is Filesystem MCP Server free to use?", answer: "Yes, it is completely free and open-source under the MIT license. You can use it in personal and commercial projects without any cost." },
      { question: "How to setup Filesystem MCP Server?", answer: "Install Node.js, add the npx configuration to your Claude Desktop config file pointing to your allowed directory, then restart Claude Desktop. The server starts automatically when Claude needs file access." },
      { question: "Is Filesystem MCP Server safe?", answer: "It uses an allowlist-based permission system. You explicitly define which directories the server can access. Files outside those directories cannot be read or modified, providing a strong security boundary." }
    ],
    comparisons: [
      { feature: "Directory Allowlisting", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "File Write Support", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Glob Search Patterns", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Official Anthropic Support", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Windows Compatible", thisTool: "Yes", competitor: "Partial", thisOk: true, competitorOk: false }
    ],
    lastUpdated: "2025-01-15",
    installs: "48K+"
  },
  {
    slug: "github-mcp",
    name: "GitHub MCP Server",
    shortDescription: "Full GitHub API integration for repositories, issues, and pull requests",
    answerFirstSummary: "GitHub MCP Server enables AI assistants to interact directly with GitHub repositories, create and manage issues, review pull requests, search code, and manage repository settings. It requires a GitHub Personal Access Token and supports both public and private repositories for streamlined development workflows.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/github",
    npmPackage: "@modelcontextprotocol/server-github",
    license: "MIT",
    isFree: true,
    category: "Developer Tools",
    tags: ["github", "api", "issues", "pull-requests", "repos"],
    configJson: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token_here"
>>>>>>> main
      }
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic).",
      "Generate a new token with 'repo', 'read:org', and 'read:user' scopes.",
      "Copy the token and replace 'your_github_token_here' in the config above.",
      "Add the configuration to your Claude Desktop config file.",
      "Restart Claude Desktop and test by asking it to list your repositories or create an issue."
    ],
    faq: [
      { question: "Is GitHub MCP Server free to use?", answer: "Yes, the server itself is free and open-source. You need a GitHub account (free tier works) and a Personal Access Token to authenticate API requests." },
      { question: "How to setup GitHub MCP Server?", answer: "Generate a GitHub Personal Access Token with repo permissions, add it to the environment variables in your Claude Desktop config, and restart. The server handles all GitHub API communication automatically." },
      { question: "Can GitHub MCP Server access private repositories?", answer: "Yes, as long as your Personal Access Token has the 'repo' scope, it can access all repositories your GitHub account has permission to view, including private repos." }
    ],
    comparisons: [
      { feature: "Issue Management", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Pull Request Review", thisTool: "Yes", competitor: "Partial", thisOk: true, competitorOk: false },
      { feature: "Code Search", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Private Repo Access", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Branch Operations", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false }
    ],
    lastUpdated: "2025-01-20",
    installs: "52K+"
  },
  {
    slug: "postgres-mcp",
    name: "PostgreSQL MCP Server",
    shortDescription: "Read-only PostgreSQL database query interface for AI assistants",
    answerFirstSummary: "PostgreSQL MCP Server lets AI models run read-only SQL queries against your PostgreSQL database. It provides safe schema inspection, data exploration, and analytical queries without risking data modification. Perfect for debugging database issues, generating reports, or understanding complex schema relationships through natural language.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres",
    npmPackage: "@modelcontextprotocol/server-postgres",
    license: "MIT",
    isFree: true,
    category: "Database",
    tags: ["postgresql", "database", "sql", "query", "analytics"],
    configJson: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:password@localhost:5432/mydb"
      ]
>>>>>>> main
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Ensure you have a running PostgreSQL database instance (local or remote).",
      "Get your database connection string in postgresql:// format.",
      "For security, create a read-only database user: CREATE ROLE mcp_readonly WITH LOGIN PASSWORD 'your_password'; GRANT CONNECT ON DATABASE mydb TO mcp_readonly; GRANT USAGE ON SCHEMA public TO mcp_readonly; GRANT SELECT ON ALL TABLES IN SCHEMA public TO mcp_readonly;",
      "Add the configuration with your connection string to Claude Desktop config.",
      "Restart Claude Desktop and test by asking it to list tables or describe a schema."
    ],
    faq: [
      { question: "Is PostgreSQL MCP Server free?", answer: "Yes, it is free and open-source under MIT license. It works with any PostgreSQL database regardless of the hosting provider." },
      { question: "How to setup PostgreSQL MCP Server?", answer: "Get your PostgreSQL connection string, optionally create a read-only user for safety, add the config to Claude Desktop with your connection string, and restart. No additional software needed beyond Node.js." },
      { question: "Can PostgreSQL MCP Server write data?", answer: "By design, the official server is read-only to prevent accidental data modification. It only executes SELECT queries and schema inspection commands. For write operations, you would need a custom implementation." }
    ],
    comparisons: [
      { feature: "Read-Only Safety", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Schema Inspection", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Connection Pooling", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "SSL Support", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Multiple Databases", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-18",
    installs: "31K+"
  },
  {
    slug: "puppeteer-mcp",
    name: "Puppeteer MCP Server",
    shortDescription: "Browser automation for web scraping, screenshots, and PDF generation",
    answerFirstSummary: "Puppeteer MCP Server gives AI agents the ability to control a headless Chrome browser for web scraping, taking screenshots, generating PDFs, clicking elements, filling forms, and navigating pages. It bridges the gap between AI reasoning and real-time web interaction, enabling tasks like automated testing and data extraction from dynamic websites.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer",
    npmPackage: "@modelcontextprotocol/server-puppeteer",
    license: "MIT",
    isFree: true,
    category: "Browser Automation",
    tags: ["puppeteer", "browser", "scraping", "screenshots", "automation"],
    configJson: `{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
>>>>>>> main
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Ensure Node.js 18+ is installed. Puppeteer will automatically download a compatible Chromium binary.",
      "Add the configuration JSON above to your Claude Desktop config file.",
      "Restart Claude Desktop to load the Puppeteer server.",
      "Test by asking Claude to navigate to a website and take a screenshot.",
      "For headful mode (visible browser), set the environment variable HEADLESS=false."
    ],
    faq: [
      { question: "Is Puppeteer MCP Server free?", answer: "Yes, completely free and open-source under MIT license. Chromium is downloaded automatically at no extra cost." },
      { question: "How to setup Puppeteer MCP Server?", answer: "Simply add the npx configuration to your Claude Desktop config and restart. No API keys needed. Puppeteer downloads its own Chromium browser automatically on first run." },
      { question: "Can Puppeteer MCP Server handle JavaScript-rendered pages?", answer: "Yes, since it runs a real Chromium browser, it fully supports JavaScript execution, SPAs, and dynamically loaded content. This is its main advantage over simple HTTP-based scrapers." }
    ],
    comparisons: [
      { feature: "JavaScript Rendering", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Screenshot Capture", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "PDF Generation", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Form Filling", thisTool: "Yes", competitor: "Partial", thisOk: true, competitorOk: false },
      { feature: "Lightweight", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-12",
    installs: "38K+"
  },
  {
    slug: "brave-search-mcp",
    name: "Brave Search MCP Server",
    shortDescription: "Web search powered by Brave Search API for real-time information retrieval",
    answerFirstSummary: "Brave Search MCP Server connects AI assistants to the Brave Search API, enabling real-time web search, news queries, and summarized answers. Unlike generic fetch-based approaches, it returns structured search results with titles, descriptions, and URLs, giving AI models up-to-date information from the indexed web without relying on training data cutoffs.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search",
    npmPackage: "@modelcontextprotocol/server-brave-search",
    license: "MIT",
    isFree: false,
    category: "Search",
    tags: ["brave", "search", "web", "api", "real-time"],
    configJson: `{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your_brave_api_key_here"
>>>>>>> main
      }
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Go to https://brave.com/search/api/ and sign up for a Brave Search API account.",
      "Choose a plan (Free tier includes 2,000 queries/month).",
      "Copy your API key from the dashboard.",
      "Replace 'your_brave_api_key_here' in the config above with your actual key.",
      "Add to Claude Desktop config, restart, and test by asking a current-events question."
    ],
    faq: [
      { question: "Is Brave Search MCP Server free?", answer: "The server itself is free, but the Brave Search API requires an API key. The free tier provides 2,000 queries per month, which is sufficient for personal use. Paid plans start at $3/month for 2,000 additional queries." },
      { question: "How to setup Brave Search MCP Server?", answer: "Sign up at brave.com/search/api, get your API key, add it to the environment variables in your Claude Desktop config, and restart. Setup takes under 2 minutes." },
      { question: "How is Brave Search different from regular web browsing?", answer: "Brave Search returns structured JSON results with relevance scores, making it easier for AI to process. It also has an independent index (not reliant on Google), provides built-in summarization, and respects user privacy by default." }
    ],
    comparisons: [
      { feature: "Independent Index", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Free Tier", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "News Search", thisTool: "Yes", competitor: "Partial", thisOk: true, competitorOk: false },
      { feature: "Summarized Answers", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "No Rate Limit (Free)", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-22",
    installs: "25K+"
  },
  {
    slug: "slack-mcp",
    name: "Slack MCP Server",
    shortDescription: "Read and post messages, manage channels, and search Slack workspaces",
    answerFirstSummary: "Slack MCP Server allows AI assistants to interact with your Slack workspace: reading channels, posting messages, searching message history, managing channel members, and retrieving thread conversations. It uses a Slack Bot Token with configurable scopes, making it useful for automated status updates, team coordination, and knowledge retrieval from Slack archives.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack",
    npmPackage: "@modelcontextprotocol/server-slack",
    license: "MIT",
    isFree: true,
    category: "Communication",
    tags: ["slack", "messaging", "channels", "teams", "automation"],
>>>>>>> main
    configJson: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
<<<<<<< HEAD
      "args": ["@mcp/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-..."
=======
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-bot-token-here",
        "SLACK_TEAM_ID": "T01234567"
>>>>>>> main
      }
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Go to https://api.slack.com/apps and click 'Create New App'.",
      "Assign bot token scopes: channels:read, channels:history, chat:write, search:read, users:read.",
      "Install the app to your workspace and copy the Bot User OAuth Token (xoxb-...).",
      "Find your Team ID from the Slack URL or API call.",
      "Add both values to the config above, place in Claude Desktop config, and restart."
    ],
    faq: [
      { question: "Is Slack MCP Server free?", answer: "Yes, the server is free and open-source. It works with any Slack workspace, including free Slack plans. No additional costs beyond your existing Slack subscription." },
      { question: "How to setup Slack MCP Server?", answer: "Create a Slack App at api.slack.com/apps, assign the required bot token scopes, install it to your workspace, copy the bot token and team ID into your Claude Desktop config, and restart." },
      { question: "Can Slack MCP Server read private channels?", answer: "Yes, but only if the bot has been explicitly invited to those private channels. The bot cannot access private channels it hasn't been added to, regardless of its token scopes." }
    ],
    comparisons: [
      { feature: "Message Posting", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Thread Support", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Channel Management", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Message Search", thisTool: "Yes", competitor: "Partial", thisOk: true, competitorOk: false },
      { feature: "File Upload", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-10",
    installs: "18K+"
  },
  {
    slug: "memory-mcp",
    name: "Memory MCP Server",
    shortDescription: "Persistent knowledge graph memory for AI conversations across sessions",
    answerFirstSummary: "Memory MCP Server provides AI assistants with a persistent knowledge graph that survives across conversations. It stores entities, relationships, and observations in a local JSON file, allowing the AI to remember facts about you, your projects, and preferences over time. Think of it as long-term memory that turns a stateless chat into a continuously learning assistant.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory",
    npmPackage: "@modelcontextprotocol/server-memory",
    license: "MIT",
    isFree: true,
    category: "Memory",
    tags: ["memory", "knowledge-graph", "persistence", "entities", "long-term"],
    configJson: `{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
>>>>>>> main
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Add the configuration JSON above to your Claude Desktop config file.",
      "Restart Claude Desktop. The memory server creates a local memory graph file automatically.",
      "Start telling Claude things you want it to remember: 'Remember that I prefer TypeScript over JavaScript.'",
      "In a new conversation, ask Claude to recall what it knows about you.",
      "The memory file is stored locally and persists across all Claude Desktop sessions."
    ],
    faq: [
      { question: "Is Memory MCP Server free?", answer: "Yes, it is completely free and open-source. All data is stored locally in a JSON file on your machine — no cloud services or paid APIs involved." },
      { question: "How to setup Memory MCP Server?", answer: "Add the npx command to your Claude Desktop config and restart. No API keys, no database setup, no accounts needed. It works out of the box with zero configuration." },
      { question: "Where is the memory data stored?", answer: "In a local JSON file on your machine. By default, it creates a knowledge graph file in the server's working directory. Your data never leaves your computer, ensuring full privacy." }
    ],
    comparisons: [
      { feature: "Knowledge Graph", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Local Storage Only", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Entity Relationships", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Cross-Session", thisTool: "Yes", competitor: "Partial", thisOk: true, competitorOk: false },
      { feature: "Cloud Sync", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-08",
    installs: "42K+"
  },
  {
    slug: "fetch-mcp",
    name: "Fetch MCP Server",
    shortDescription: "HTTP request tool for fetching and parsing web content and APIs",
    answerFirstSummary: "Fetch MCP Server provides AI assistants with the ability to make HTTP requests to any URL or API endpoint. It handles GET and POST requests, follows redirects, parses HTML to extract readable text (stripping navigation and footers), and returns structured content. It is the simplest way to give AI access to web content without running a full browser.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",
    npmPackage: "@modelcontextprotocol/server-fetch",
    license: "MIT",
    isFree: true,
    category: "HTTP Client",
    tags: ["fetch", "http", "api", "web", "scraping"],
    configJson: `{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}`,
    setupSteps: [
      "Add the configuration JSON above to your Claude Desktop config file.",
      "Restart Claude Desktop to load the fetch server.",
      "Test by asking Claude to fetch a specific URL and summarize its content.",
      "For APIs, ask Claude to make a GET request to a public API endpoint.",
      "Note: This tool cannot render JavaScript — use Puppeteer MCP for JS-heavy sites."
    ],
    faq: [
      { question: "Is Fetch MCP Server free?", answer: "Yes, it is free and open-source. It makes direct HTTP requests from your machine — no intermediary services, no API keys needed, no usage limits." },
      { question: "How to setup Fetch MCP Server?", answer: "Add the npx configuration to Claude Desktop config and restart. Zero configuration required. It works immediately without any API keys or accounts." },
      { question: "What is the difference between Fetch and Puppeteer MCP?", answer: "Fetch is lightweight and fast but only gets the raw HTML — it cannot execute JavaScript. Puppeteer runs a full Chrome browser that renders JavaScript, but is heavier and slower. Use Fetch for APIs and static sites, Puppeteer for SPAs and dynamic content." }
    ],
    comparisons: [
      { feature: "Zero Config", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "HTML Parsing", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "POST Requests", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "JS Rendering", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true },
      { feature: "Lightweight", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false }
    ],
    lastUpdated: "2025-01-05",
    installs: "55K+"
  },
  {
    slug: "google-maps-mcp",
    name: "Google Maps MCP Server",
    shortDescription: "Location search, directions, and place details via Google Maps API",
    answerFirstSummary: "Google Maps MCP Server connects AI assistants to the Google Maps Platform, enabling place searches, route planning, distance calculations, geocoding, and reverse geocoding. It requires a Google Cloud API key with Maps and Places APIs enabled, making it ideal for travel planning, logistics, location-aware applications, and answering geographical questions with precise data.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps",
    npmPackage: "@modelcontextprotocol/server-google-maps",
    license: "MIT",
    isFree: false,
    category: "Location",
    tags: ["google-maps", "location", "directions", "geocoding", "places"],
    configJson: `{
  "mcpServers": {
    "google-maps": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-google-maps"],
      "env": {
        "GOOGLE_MAPS_API_KEY": "your_google_maps_api_key_here"
>>>>>>> main
      }
    }
  }
}`,
    setupSteps: [
<<<<<<< HEAD
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
=======
      "Go to Google Cloud Console (console.cloud.google.com) and create a project or select existing one.",
      "Enable 'Maps JavaScript API' and 'Places API' from the API Library.",
      "Go to Credentials > Create Credentials > API Key, and restrict it to Maps and Places APIs.",
      "Copy the API key and replace the placeholder in the config above.",
      "Add to Claude Desktop config, restart, and test by asking for directions or nearby places."
    ],
    faq: [
      { question: "Is Google Maps MCP Server free?", answer: "The server is free, but Google Maps API has a free tier of $200/month credit. This covers approximately 28,000 map loads or 40,000 place searches per month. Beyond that, usage is billed at Google's standard rates." },
      { question: "How to setup Google Maps MCP Server?", answer: "Create a Google Cloud project, enable Maps and Places APIs, generate a restricted API key, add it to the environment variables in your Claude Desktop config, and restart." },
      { question: "Can Google Maps MCP Server calculate driving time?", answer: "Yes, it supports route planning with distance and duration estimates for driving, walking, cycling, and transit directions between any two points using Google's routing engine." }
    ],
    comparisons: [
      { feature: "Place Search", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Route Planning", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Geocoding", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Free Tier Credits", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "No API Key Needed", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-14",
    installs: "15K+"
  },
  {
    slug: "sqlite-mcp",
    name: "SQLite MCP Server",
    shortDescription: "Lightweight SQLite database interface for local data analysis and querying",
    answerFirstSummary: "SQLite MCP Server provides AI assistants with a direct interface to SQLite database files on your local machine. It supports schema inspection, running SELECT queries, and exploring data without any server setup — just point it at a .db file. Ideal for analyzing local datasets, inspecting app databases, and rapid prototyping with zero infrastructure overhead.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite",
    npmPackage: "@modelcontextprotocol/server-sqlite",
    license: "MIT",
    isFree: true,
    category: "Database",
    tags: ["sqlite", "database", "local", "sql", "analysis"],
    configJson: `{
  "mcpServers": {
    "sqlite": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sqlite",
        "/path/to/your/database.db"
      ]
    }
  }
}`,
    setupSteps: [
      "Locate or create a SQLite database file (.db or .sqlite extension) on your machine.",
      "Add the configuration JSON above, replacing the path with your actual database file path.",
      "Add the configuration to your Claude Desktop config file.",
      "Restart Claude Desktop to initialize the SQLite connection.",
      "Test by asking Claude to list tables, describe a schema, or run a SELECT query."
    ],
    faq: [
      { question: "Is SQLite MCP Server free?", answer: "Yes, completely free and open-source. SQLite itself is public domain, and this MCP server is MIT-licensed. No costs whatsoever." },
      { question: "How to setup SQLite MCP Server?", answer: "Point the npx command argument to your .db file path in the Claude Desktop config and restart. No server process, no credentials, no network — it reads the file directly." },
      { question: "Can SQLite MCP Server modify data?", answer: "The official implementation supports read operations (SELECT) for safety. If you need write access for development, you can fork the server and remove the read-only restriction, but this is not recommended for production use with AI." }
    ],
    comparisons: [
      { feature: "Zero Setup", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "File-Based", thisTool: "Yes", competitor: "No", thisOk: true, competitorOk: false },
      { feature: "Schema Inspection", thisTool: "Yes", competitor: "Yes", thisOk: true, competitorOk: true },
      { feature: "Concurrent Access", thisTool: "Limited", competitor: "Yes", thisOk: false, competitorOk: true },
      { feature: "Client-Server Architecture", thisTool: "No", competitor: "Yes", thisOk: false, competitorOk: true }
    ],
    lastUpdated: "2025-01-11",
    installs: "29K+"
  }
];

export function getToolBySlug(slug: string): MCPTool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getAllSlugs(): string[] {
  return tools.map(tool => tool.slug);
>>>>>>> main
}
