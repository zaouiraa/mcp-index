"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, TerminalSquare, X } from "lucide-react"

const navLinks = [
  { label: "Tools", href: "/tools" },
  { label: "Categories", href: "/categories" },
  { label: "Guides", href: "/how-to-install-mcp-servers" },
  { label: "Search", href: "/tools/search" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <TerminalSquare className="h-5 w-5 text-foreground" aria-hidden="true" />
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
              MCP Index
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Submit Server
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-card text-foreground"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Submit Server
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
