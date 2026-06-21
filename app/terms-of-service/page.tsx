import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — MCP Index',
  description: 'Terms of Service for MCP Index',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-zinc-400">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Content */}
        <article className="space-y-8 prose prose-invert max-w-none">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              1. Agreement to Terms
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert text acknowledging that by accessing and using this service, users agree to be bound by these Terms of Service. Include information about eligibility and legal capacity.]
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              2. Use License
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-200">
                  2.1 Grant of License
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  [Insert details about the limited, non-exclusive, non-transferable license granted to users.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-200">
                  2.2 Permitted Uses
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  [Insert information about what users are permitted to do with the service.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-200">
                  2.3 Prohibited Activities
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-2">
                  [Insert list of prohibited activities, including but not limited to:]
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>[Hacking or unauthorized access attempts]</li>
                  <li>[Reverse engineering or decompiling]</li>
                  <li>[Scraping or automated data collection]</li>
                  <li>[Harassment or abusive behavior]</li>
                  <li>[Spam or phishing attempts]</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              3. Intellectual Property Rights
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert information about ownership of content, trademarks, copyrights, and other intellectual property associated with the service and user-generated content.]
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              4. User Responsibilities
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-2">
              [Users are responsible for:]
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>[Maintaining account security and password confidentiality]</li>
              <li>[Providing accurate information]</li>
              <li>[Complying with all applicable laws and regulations]</li>
              <li>[Not violating any third-party rights]</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert disclaimer stating that the service is provided "as-is" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.]
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              6. Limitation of Liability
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert limitation of liability clause specifying the maximum extent to which the company can be held liable for damages, including direct, indirect, incidental, special, or consequential damages.]
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              7. Indemnification
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert clause requiring users to indemnify and hold harmless the company from any claims, damages, or expenses arising from user violation of these terms or misuse of the service.]
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              8. Termination
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert information about conditions under which the company may terminate user access, suspension policies, and appeals process.]
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              9. Modification of Terms
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert statement that the company reserves the right to modify these terms at any time, with notice to users of material changes.]
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              10. Governing Law
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert the jurisdiction and governing law applicable to these terms and any disputes arising from them.]
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              11. Contact Information
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:hello@mcpindex.dev" className="text-purple-400 hover:text-purple-300">
                hello@mcpindex.dev
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
