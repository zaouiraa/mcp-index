<<<<<<< HEAD
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — MCP Index',
  description: 'Terms of Service for MCP Index',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <article className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert text acknowledging that by accessing and using this service, users agree to be bound by these Terms of Service. Include information about eligibility and legal capacity.]
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">2. Use License</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 Grant of License</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert details about the limited, non-exclusive, non-transferable license granted to users.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">2.2 Permitted Uses</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert information about what users are permitted to do with the service.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">2.3 Prohibited Activities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert list of prohibited activities: hacking, reverse engineering, scraping, unauthorized access, harassment, spam, etc.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">3. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Our Intellectual Property</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert information stating that all content, features, and functionality are owned by the service provider and protected by copyright and other laws.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">3.2 User-Generated Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert information about ownership of user-generated content and the rights granted to the service provider to use such content.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">4. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about user responsibilities, including maintaining confidentiality of login credentials, providing accurate information, and complying with applicable laws.]
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert disclaimer limiting liability for damages, errors, interruptions, or loss of data. Include information about the service being provided "as is" without warranties.]
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">6. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert text about users indemnifying and holding harmless the service provider from claims, damages, and costs arising from user's use of the service or violation of these terms.]
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">7. Modifications and Availability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">7.1 Changes to Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert information about the right to modify, suspend, or discontinue the service at any time.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">7.2 Maintenance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text about scheduled maintenance and any resulting downtime.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about the conditions under which accounts may be terminated or suspended, including violations of the terms.]
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert disclaimer about third-party links and the service provider's lack of control over external content.]
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about which jurisdiction's laws govern these terms and where disputes will be resolved.]
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at support@mcpindex.dev or visit our{' '}
              <a href="/contact" className="text-primary hover:underline">
                contact page
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  )
=======
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
>>>>>>> main
}
