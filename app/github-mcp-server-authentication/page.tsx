{
  slug: "claude-desktop-mcp-setup",
  title: "Claude Desktop MCP Setup: The Complete Step-by-Step Guide (2026)",
  description:
    "Learn how to set up MCP servers in Claude Desktop. This step-by-step guide covers installation, config file setup, authentication, testing, and troubleshooting for macOS and Windows.",
  excerpt:
    "A complete walkthrough for connecting MCP servers in Claude Desktop — from downloading the app to validating your first tool call.",
  category: "Setup",
  publishedAt: "2026-06-20",
  updatedAt: "2026-07-08",
  readingTime: "10 min read",
  keywords: [
    "claude desktop mcp setup",
    "claude mcp",
    "how to install mcp in claude desktop",
    "claude desktop mcp config",
    "mcp server claude",
    "model context protocol claude desktop",
  ],
  relatedToolSlugs: [
    "github-mcp",
    "filesystem-mcp",
    "supabase-mcp",
  ],
  relatedGuideSlugs: [
    "how-to-install-mcp-servers",
    "what-is-model-context-protocol",
  ],
  faq: [
    {
      question: "Where is the Claude Desktop MCP config file located?",
      answer:
        "On macOS the config file is at ~/Library/Application Support/Claude/claude_desktop_config.json. On Windows it is at %APPDATA%\\Claude\\claude_desktop_config.json.",
    },
    {
      question: "Do I need to restart Claude Desktop after adding an MCP server?",
      answer:
        "Yes. Claude Desktop reads the config file at startup. Any change to the config requires a full restart before the new server appears.",
    },
    {
      question: "Why does my MCP server not appear after restarting?",
      answer:
        "The most common causes are a JSON syntax error in the config file, a wrong path to the server binary or script, or a missing environment variable. Open the MCP log file to see the exact error.",
    },
    {
      question: "Can I add multiple MCP servers to Claude Desktop?",
      answer:
        "Yes. The mcpServers object in the config file accepts any number of named server entries. Each entry runs as a separate process.",
    },
    {
      question: "Is Claude Desktop MCP available on Windows?",
      answer:
        "Yes. Claude Desktop supports MCP on both macOS and Windows. The config file path differs between platforms but the JSON structure is identical.",
    },
    {
      question: "How do I know if an MCP server is working correctly?",
      answer:
        "After restarting Claude Desktop, open a new conversation and ask Claude to list the tools available. If the server loaded correctly, its tools will appear in the response.",
    },
  ],
  sections: [
    {
      id: "what-is-claude-desktop-mcp",
      title: "What is Claude Desktop MCP?",
      body: [
        "Claude Desktop is the official desktop application from Anthropic for macOS and Windows. It supports Model Context Protocol natively, which means you can connect external MCP servers directly to Claude without any additional middleware or API setup.",
        "When you add an MCP server to Claude Desktop, Claude gains the ability to call tools exposed by that server during a conversation. This includes reading local files, querying databases, inspecting repositories, searching the web, or calling any other capability the server exposes.",
        "This guide covers the complete setup process from installing Claude Desktop to verifying that your first MCP server is working correctly.",
      ],
    },
    {
      id: "before-you-start",
      title: "Before you start",
      body: [
        "Before adding any MCP server to Claude Desktop, make sure you have the following in place.",
      ],
      list: [
        "Claude Desktop installed and signed in with your Anthropic account.",
        "The MCP server you want to add is already installed on your machine, or you have its npm package name or repository path ready.",
        "You know whether the server requires any API keys or credentials, and those are available.",
        "A plain text or JSON editor to edit the config file (VS Code, Cursor, or any text editor works).",
      ],
    },
    {
      id: "locate-config-file",
      title: "Step 1 — Locate the config file",
      body: [
        "Claude Desktop stores its MCP server configuration in a single JSON file on your local machine. The location depends on your operating system.",
        "On macOS the config file is at this path:",
        "~/Library/Application Support/Claude/claude_desktop_config.json",
        "On Windows the config file is at this path:",
        "%APPDATA%\\Claude\\claude_desktop_config.json",
        "If the file does not exist yet, you can create it. Claude Desktop will pick it up automatically on the next launch. If the Claude directory does not exist, create that first.",
      ],
    },
    {
      id: "config-file-structure",
      title: "Step 2 — Understand the config file structure",
      body: [
        "The config file uses a simple JSON structure. The top-level key is mcpServers, and each entry inside it is a named MCP server with its own command and optional arguments and environment variables.",
        "A minimal config file with one server looks like this:",
        '{ "mcpServers": { "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/projects"] } } }',
        "Each server entry requires at minimum a command field that tells Claude Desktop how to start the server process. The args array passes additional arguments to that command. The optional env object sets environment variables for that server process.",
        "You can add as many server entries as you need inside the mcpServers object. Each one runs as a separate process managed by Claude Desktop.",
      ],
    },
    {
      id: "add-first-server",
      title: "Step 3 — Add your first MCP server",
      body: [
        "Open the config file in your text editor. If it is empty or does not exist yet, start with this base structure and replace the example with your chosen server.",
        "For a filesystem server that gives Claude read access to a specific directory:",
        '{ "mcpServers": { "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/projects"] } } }',
        "For a server that requires an API key, use the env field to pass it without hardcoding it in the args:",
        '{ "mcpServers": { "brave-search": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-brave-search"], "env": { "BRAVE_API_KEY": "your-api-key-here" } } } }',
        "Save the file after editing. JSON syntax errors will prevent Claude Desktop from loading the server, so verify that all brackets and commas are correct before saving.",
      ],
    },
    {
      id: "restart-and-verify",
      title: "Step 4 — Restart Claude Desktop and verify",
      body: [
        "After saving the config file, fully quit Claude Desktop and relaunch it. On macOS use Cmd+Q to quit completely rather than just closing the window. On Windows use the system tray icon to exit.",
        "Once Claude Desktop has restarted, open a new conversation and test the connection with a direct prompt. For example, if you added the filesystem server, ask Claude to list the files in the directory you configured. If the server loaded correctly, Claude will be able to do this immediately.",
        "You can also ask Claude directly: list all the MCP tools you currently have access to. Claude will list every tool exposed by all active MCP servers.",
      ],
    },
    {
      id: "troubleshooting",
      title: "Step 5 — Troubleshooting common issues",
      body: [
        "If the server does not appear after restarting, these are the most common causes and how to fix them.",
      ],
      list: [
        "JSON syntax error in the config file: use a JSON validator or open the file in VS Code which highlights syntax errors automatically.",
        "Wrong command path: if you are using a local script or binary instead of npx, make sure the path is absolute and the file is executable.",
        "Missing environment variable: if the server requires an API key or token that is not set, it will fail silently. Check the MCP log file for the exact error.",
        "npx not found: make sure Node.js is installed and that npx is available in your PATH. Run npx --version in your terminal to confirm.",
        "Server starts but tools do not appear: the server may have started but failed during initialization. Check the log file for initialization errors.",
      ],
    },
    {
      id: "mcp-log-file",
      title: "How to read the MCP log file",
      body: [
        "Claude Desktop writes MCP server logs to a dedicated log file. This is the first place to check when a server does not load correctly.",
        "On macOS the log file is at:",
        "~/Library/Logs/Claude/mcp.log",
        "On Windows the log file is at:",
        "%APPDATA%\\Claude\\logs\\mcp.log",
        "Open the log file in any text editor after a failed startup attempt. The log will show which servers were detected, whether they started successfully, and the exact error message if they failed.",
        "Common log messages include ENOENT which means a file or command was not found, JSON parse error which means the config file has a syntax problem, and connection refused which typically means the server process exited before Claude Desktop could connect to it.",
      ],
    },
    {
      id: "add-multiple-servers",
      title: "Adding multiple MCP servers",
      body: [
        "Claude Desktop supports any number of MCP servers running simultaneously. Each server entry in the config file runs as a separate process, and Claude can call tools from any of them during a single conversation.",
        "A config file with multiple servers looks like this:",
        '{ "mcpServers": { "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/yourname/projects"] }, "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here" } }, "brave-search": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-brave-search"], "env": { "BRAVE_API_KEY": "your-key-here" } } } }',
        "There is no hard limit on the number of servers, but each one consumes memory and starts a process. Start with the servers you actually need and add more as your workflow evolves.",
      ],
    },
    {
      id: "security-best-practices",
      title: "Security best practices",
      body: [
        "MCP servers run as local processes with the permissions you configure. A few practices help keep your setup safe.",
      ],
      list: [
        "Never share your claude_desktop_config.json file publicly. It may contain API keys and access tokens in the env fields.",
        "Use read-only access when connecting to databases or file systems. Most MCP servers support scoping permissions to specific paths or operations.",
        "Only install MCP servers from sources you trust. A malicious server could expose sensitive data from the tools it accesses.",
        "Review what paths you grant to the filesystem server. Limit it to project directories rather than your entire home folder.",
        "Rotate API keys and tokens periodically, especially for servers that access cloud services or third-party APIs.",
      ],
    },
    {
      id: "next-steps",
      title: "Next steps after setup",
      body: [
        "Once Claude Desktop is connected to one or more MCP servers and you have verified that the tools are accessible, you can start using them in real workflows.",
        "A few directions worth exploring after your initial setup is working:",
      ],
      list: [
        "Add a GitHub MCP server to give Claude access to your repositories, pull requests, and issues.",
        "Add a database MCP server to let Claude query and inspect your development database during debugging sessions.",
        "Explore the full MCP tools directory to find servers that match your workflow.",
        "Read the how to install MCP servers guide for a cross-client perspective if you also use Cursor or VS Code.",
      ],
    },
  ],
},
