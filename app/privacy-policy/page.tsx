import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — MCP Index',
  description: 'Privacy Policy for MCP Index',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
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
              1. Introduction
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert introduction text explaining what this privacy policy covers and the importance of protecting user data. This section typically describes the organization and its commitment to privacy.]
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-200">
                  2.1 Personal Information
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  [Insert details about personal information collected: name, email, phone number, etc.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-200">
                  2.2 Usage Information
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  [Insert details about usage data collection: pages visited, time spent, IP address, device information, etc.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-200">
                  2.3 Cookies and Similar Technologies
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  [Insert information about cookies, web beacons, and similar tracking technologies used.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              3. How We Use Your Information
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              [Insert explanation of purposes for data collection and usage, such as:]
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>[Provide and improve our services]</li>
              <li>[Communicate with users about updates and changes]</li>
              <li>[Analyze usage patterns to improve user experience]</li>
              <li>[Comply with legal obligations]</li>
              <li>[Protect against fraud and ensure security]</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              4. Data Protection
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert information about security measures implemented to protect user data, including encryption, secure servers, and access controls.]
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              5. User Rights
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              [Insert information about user rights regarding their data, such as:]
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>[Right to access personal data]</li>
              <li>[Right to correct inaccurate data]</li>
              <li>[Right to request deletion (right to be forgotten)]</li>
              <li>[Right to withdraw consent]</li>
              <li>[Right to data portability]</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              6. Third-Party Sharing
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              [Insert details about circumstances under which personal data may be shared with third parties, including service providers, legal requirements, and user consent.]
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              7. Contact Us
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have questions about this privacy policy or our data practices, please contact us at{' '}
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
