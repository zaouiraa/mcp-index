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
}
