import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — MCP Index',
  description: 'Privacy Policy for MCP Index',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <article className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert introduction text explaining what this privacy policy covers and the importance of protecting user data. This section typically describes the organization and its commitment to privacy.]
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert details about personal information collected: name, email, phone number, etc.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">2.2 Usage Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert details about usage data collection: pages visited, time spent, IP address, device information, etc.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">2.3 Cookies and Similar Technologies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert information about cookies, web beacons, and similar tracking technologies used.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">3.1 Service Provision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text explaining how information is used to provide and improve services.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">3.2 Communication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text about using information for support, updates, and communications.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">3.3 Analytics and Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text about using data for analytics, research, and improving user experience.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">4. Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about security measures, encryption, and data protection practices implemented to safeguard user data.]
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">5. Your Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">5.1 Access and Portability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text about user rights to access and receive their data.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">5.2 Correction and Deletion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text about rights to correct inaccurate data and request deletion.]
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">5.3 Opt-out</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Insert text about opting out of marketing communications and data processing.]
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about third-party services, data sharing practices, and links to their privacy policies.]
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">7. International Data Transfer</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about how data is transferred and protected across borders, compliance with regulations like GDPR.]
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about policies regarding children's data and compliance with COPPA or similar regulations.]
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">9. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              [Insert information about how changes to the privacy policy will be communicated and when they take effect.]
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this privacy policy, please contact us at privacy@mcpindex.dev or visit our{' '}
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
}
