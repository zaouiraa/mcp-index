import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MCPIndex",
  description: "Terms and conditions for using MCPIndex.dev - the MCP server directory.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
          <a href="/" className="hover:text-white transition-colors">MCPIndex</a>
          <span>/</span>
          <span className="text-zinc-300">Terms of Service</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-zinc-500 text-sm">Last updated: January 25, 2025</p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-zinc-400 leading-relaxed">
            By accessing and using MCPIndex.dev, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use this website. These terms apply to all visitors, users, and contributors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Description of Service</h2>
          <p className="text-zinc-400 leading-relaxed">
            MCPIndex is a directory and informational resource for Model Context Protocol (MCP) servers. We provide configuration guides, comparisons, and setup instructions for MCP tools. We do not host, operate, or maintain any MCP servers listed on this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p className="text-zinc-400 leading-relaxed">
            You are responsible for verifying the safety and compatibility of any MCP server before installing it. Always review the source code and configuration of third-party tools. We provide information as-is and make no guarantees about the security or functionality of listed tools.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Claimed Profiles</h2>
          <p className="text-zinc-400 leading-relaxed">
            Developers may claim their tool profiles for a monthly fee. Claimed profiles allow developers to update their tool information, add documentation, and view analytics. Profile claims are non-exclusive and do not transfer ownership of listing content to the claimant.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
          <p className="text-zinc-400 leading-relaxed">
            The MCPIndex website design, code, and original content are protected by copyright. Tool names, logos, and trademarks belong to their respective owners. Our editorial content (summaries, comparisons, setup guides) is original work and may not be reproduced without permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-zinc-400 leading-relaxed">
            MCPIndex is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from the use of information on this site, including but not limited to data loss, system damage, or security breaches resulting from installing listed MCP servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Changes to Terms</h2>
          <p className="text-zinc-400 leading-relaxed">
            We may update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms. We will update the &quot;Last updated&quot; date at the top of this page whenever modifications are made.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Contact</h2>
          <p className="text-zinc-400 leading-relaxed">
            For questions about these terms, please visit our <a href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">contact page</a>.
          </p>
        </section>
      </div>

      <footer className="border-t border-zinc-800/60">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-zinc-600">
          © 2025 MCPIndex. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
