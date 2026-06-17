import { TerminalSquare } from "lucide-react"

const footerLinks = ["Privacy Policy", "Terms of Service", "About", "Contact"]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <TerminalSquare className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="font-mono text-sm text-muted-foreground">MCP Index</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-muted-foreground">© 2024 mcpindex.dev</p>
      </div>
    </footer>
  )
}
