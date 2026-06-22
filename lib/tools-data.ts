export interface MCPTool {
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
}

export const tools: MCPTool[] = [
  {
    slug: "filesystem-mcp",
    name: "Filesystem MCP Server",
    shortDescription: "Secure file system access for AI agents with configurable permissions",
    answerFirstSummary: "Filesystem MCP Server by Anthropic lets AI models read, write, and search files on your local machine through a controlled permission system. It supports directory listing, file creation, and glob-based search patterns, making it essential for coding assistants that need to explore and modify project files safely.",
    developer: "Anthropic",
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem", // active repo ✅
    npmPackage: "@modelcontextprotocol/server-filesystem",
    license: "MIT",
    isFree: true,
    category: "File Management",
    tags: ["files", "local", "permissions", "anthropic", "coding"],
    configJson: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/github", // moved to archived repo ✅
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
      }
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres", // moved to archived repo ✅
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
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer", // moved to archived repo ✅
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
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/brave-search", // moved to archived repo ✅
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
      }
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack", // moved to archived repo ✅
    npmPackage: "@modelcontextprotocol/server-slack",
    license: "MIT",
    isFree: true,
    category: "Communication",
    tags: ["slack", "messaging", "channels", "teams", "automation"],
    configJson: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-bot-token-here",
        "SLACK_TEAM_ID": "T01234567"
      }
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory", // active repo ✅
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
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch", // active repo ✅
    npmPackage: "mcp-server-fetch", // Python package on PyPI — uses uvx, not npx ✅
    license: "MIT",
    isFree: true,
    category: "HTTP Client",
    tags: ["fetch", "http", "api", "web", "scraping"],
    configJson: `{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}`,
    setupSteps: [
      "Install Python 3.10+ and the uv package manager: pip install uv",
      "Add the configuration JSON above to your Claude Desktop config file.",
      "Restart Claude Desktop to load the fetch server.",
      "Test by asking Claude to fetch a specific URL and summarize its content.",
      "Note: This tool cannot render JavaScript — use Puppeteer MCP for JS-heavy sites."
    ],
    faq: [
      { question: "Is Fetch MCP Server free?", answer: "Yes, it is free and open-source. It makes direct HTTP requests from your machine — no intermediary services, no API keys needed, no usage limits." },
      { question: "How to setup Fetch MCP Server?", answer: "Install Python and uv (pip install uv), add the uvx configuration to Claude Desktop config and restart. Zero API keys required." },
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps", // moved to archived repo ✅
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
      }
    }
  }
}`,
    setupSteps: [
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
    githubUrl: "https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite", // moved to archived repo ✅
    npmPackage: "mcp-server-sqlite", // Python package on PyPI — uses uvx, not npx ✅
    license: "MIT",
    isFree: true,
    category: "Database",
    tags: ["sqlite", "database", "local", "sql", "analysis"],
    configJson: `{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": [
        "mcp-server-sqlite",
        "--db-path",
        "/path/to/your/database.db"
      ]
    }
  }
}`,
    setupSteps: [
      "Install Python 3.10+ and the uv package manager: pip install uv",
      "Locate or create a SQLite database file (.db or .sqlite extension) on your machine.",
      "Add the configuration JSON above, replacing the path with your actual database file path.",
      "Add the configuration to your Claude Desktop config file.",
      "Restart Claude Desktop and test by asking Claude to list tables or run a SELECT query."
    ],
    faq: [
      { question: "Is SQLite MCP Server free?", answer: "Yes, completely free and open-source. SQLite itself is public domain, and this MCP server is MIT-licensed. No costs whatsoever." },
      { question: "How to setup SQLite MCP Server?", answer: "Install Python and uv (pip install uv), point the uvx command argument to your .db file path in the Claude Desktop config and restart. No server process, no credentials, no network." },
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
}
ENDOFFILE
echo "Done"
