import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getToolBySlug, getAllSlugs } from '@/lib/tools-data';
import { CopyButton } from '@/components/copy-button';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: 'Tool not found' };
  }

  return {
    title: `${tool.name} | MCP Index`,
    description: tool.answerFirstSummary,
    openGraph: {
      title: tool.name,
      description: tool.description,
      type: 'website',
    },
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Status Bar */}
      <div className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/50 backdrop-blur-sm px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-xs font-mono">
              🟡 UNCLAIMED PROFILE
            </span>
          </div>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors">
            Claim This Tool — $9.99/mo
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="font-mono text-sm text-zinc-500 mb-8">
          MCPIndex / Tools / {tool.name}
        </div>

        {/* Title Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex px-3 py-1 text-xs font-mono bg-zinc-800 text-zinc-400 border border-zinc-700 rounded-md">
              {tool.category}
            </span>
            <span
              className={`inline-flex px-3 py-1 text-xs font-mono border rounded-md ${
                tool.pricingModel === 'free'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}
            >
              {tool.pricingModel === 'free' ? 'Free' : 'Freemium'}
            </span>
            <span className="inline-flex text-xs text-zinc-600 font-mono">
              {tool.installs.toLocaleString()} installs
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            {tool.name}
          </h1>

          <p className="text-lg text-zinc-400 mb-4">{tool.description}</p>

          <div className="text-sm text-zinc-500 font-mono">
            by {tool.developer} | {tool.license} License | Updated{' '}
            {new Date(tool.lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Answer-First Summary */}
        <div className="relative mb-12 border-l-2 border-purple-500 bg-purple-500/5 rounded-r-xl p-6">
          <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
          <p className="text-zinc-300 text-[15px] leading-relaxed">
            {tool.answerFirstSummary}
          </p>
        </div>

        {/* Code Block Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {tool.name} Configuration
          </h2>

          <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-zinc-500 ml-2 font-mono">
                claude_desktop_config.json
              </span>
            </div>

            <CopyButton text={tool.configJson} />

            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-zinc-300">
                {tool.configJson}
              </code>
            </pre>
          </div>
        </section>

        {/* Ad Space 1 */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center">
            <span className="text-zinc-600 text-sm font-mono">Ad Space</span>
          </div>
        </div>

        {/* Setup Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            How to setup {tool.name}?
          </h2>

          <ol className="space-y-4">
            {tool.setupSteps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-semibold text-zinc-400">
                  {index + 1}
                </div>
                <p className="text-zinc-400 text-[15px] pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          {tool.faq.map((item, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-white">
                {item.question}
              </h2>
              <p className="text-zinc-400 text-[15px]">{item.answer}</p>
            </div>
          ))}
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            {tool.name} vs Competitors
          </h2>

          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-900/80 border-b border-zinc-800">
                  <th className="px-6 py-3 text-left text-xs font-mono text-zinc-400 font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-mono text-purple-400 font-semibold">
                    {tool.name}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-mono text-zinc-400 font-semibold">
                    Competitor
                  </th>
                </tr>
              </thead>
              <tbody>
                {tool.comparisons.map((comparison, index) => (
                  <tr
                    key={index}
                    className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-zinc-300">
                      {comparison.feature}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {comparison.thisOk ? (
                        <span className="text-emerald-400">✅</span>
                      ) : (
                        <span className="text-red-400">❌</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {comparison.competitorOk ? (
                        <span className="text-emerald-400">✅</span>
                      ) : (
                        <span className="text-red-400">❌</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-zinc-400">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 text-zinc-500 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Ad Space 2 */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[728px] h-[90px] border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center">
            <span className="text-zinc-600 text-sm font-mono">Ad Space</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 md:p-10 mb-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, rgba(168,85,247,0.4) 0%, transparent 50%)',
            }}
          />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Are you the developer?
            </h3>
            <p className="text-white/90 mb-6 text-sm md:text-base">
              Claim this profile to update data and view leads from developers
              interested in your tool.
            </p>
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-zinc-100 transition-colors">
              Claim Profile — $9.99/mo
            </button>
          </div>
        </section>

        {/* Links */}
        <section className="flex gap-4 mb-12">
          <a
            href={tool.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 text-sm hover:text-white hover:border-zinc-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={`https://npmjs.com/package/${tool.npmPackage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 text-sm hover:text-white hover:border-zinc-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M0 7v10c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2zm12 0v10h8V7h-8zM2 7v10h8V7H2z" />
            </svg>
            NPM
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950/50 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <p className="text-sm text-zinc-600 font-mono">
              © 2025 MCPIndex
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
