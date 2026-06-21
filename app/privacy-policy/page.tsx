<<<<<<< HEAD
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
=======
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MCPIndex",
  description: "MCPIndex privacy policy - how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
          <a href="/" className="hover:text-white transition-colors">MCPIndex</a>
          <span>/</span>
          <span className="text-zinc-300">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm">Last updated: January 25, 2025</p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="text-zinc-400 leading-relaxed">
            We collect minimal information to operate MCPIndex.dev. This includes anonymous usage analytics (page views, device type, referring URLs) through privacy-respecting tools. We do not require account creation to browse the directory.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="text-zinc-400 leading-relaxed">
            Collected data is used solely to improve the website experience, understand which MCP tools are most popular, and optimize site performance. We do not sell, rent, or share personal data with third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Cookies</h2>
          <p className="text-zinc-400 leading-relaxed">
            We use essential cookies for site functionality and analytics cookies to understand traffic patterns. You can disable non-essential cookies through your browser settings. No tracking cookies from third-party advertisers are used unless you consent to Google AdSense personalization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
          <h3 className="text-lg font-medium text-zinc-300">Google AdSense</h3>
          <p className="text-zinc-400 leading-relaxed">
            We display advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising at Google&apos;s Ads Settings.
          </p>
          <h3 className="text-lg font-medium text-zinc-300">Vercel Analytics</h3>
          <p className="text-zinc-400 leading-relaxed">
            We use Vercel Analytics for performance monitoring and traffic analysis. Vercel does not use cookies and complies with GDPR and CCPA regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Data Retention</h2>
          <p className="text-zinc-400 leading-relaxed">
            Analytics data is retained for up to 26 months. Contact form submissions are retained until the inquiry is resolved and then deleted. You may request deletion of any data we hold about you at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p className="text-zinc-400 leading-relaxed">
            Under GDPR and CCPA, you have the right to access, correct, delete, or port your personal data. To exercise these rights, contact us through our contact page. We respond to all requests within 30 days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Contact</h2>
          <p className="text-zinc-400 leading-relaxed">
            For privacy-related inquiries, please visit our <a href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">contact page</a>.
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
