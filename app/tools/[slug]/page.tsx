'use client'

import { useState } from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'

// Mock tool data - in a real app, this would be fetched based on slug
const toolData = {
  slug: 'web-search-mcp',
  name: 'Web Search MCP',
  summary:
    'A robust Model Context Protocol server enabling AI systems to perform real-time web searches, fetch URLs, and integrate search results seamlessly into LLM conversations.',
  mcpConfig: JSON.stringify(
    {
      mcpServers: {
        'web-search': {
          command: 'npx',
          args: ['@modelcontextprotocol/server-web-search'],
          env: {
            SEARCH_ENGINE: 'google',
            API_KEY: 'your-api-key-here',
          },
        },
      },
    },
    null,
    2
  ),
  isClaimed: false,
  claimPrice: '9.99',
  competitor: 'SearchChain MCP',
  features: [
    { name: 'Real-time Web Search', tool: true, competitor: true },
    { name: 'URL Fetching', tool: true, competitor: false },
    { name: 'Custom Search Engine', tool: true, competitor: true },
    { name: 'Rate Limiting', tool: true, competitor: false },
    { name: 'Caching', tool: false, competitor: true },
    { name: 'Analytics', tool: true, competitor: true },
  ],
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const [copied, setCopied] = useState(false)

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(toolData.mcpConfig)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script
        id="software-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: toolData.name,
            description: toolData.summary,
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: toolData.claimPrice,
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `How to setup ${toolData.name}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Follow the installation and configuration steps in the code block above.',
                },
              },
              {
                '@type': 'Question',
                name: `Is ${toolData.name} free?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The basic version is available. Claim your profile for premium features.',
                },
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-background text-foreground font-sans">
        {/* Status Bar */}
        {!toolData.isClaimed && (
          <div className="sticky top-0 z-50 bg-yellow-400/10 border-b border-yellow-500/30 px-4 py-3">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🟡</span>
                <span className="font-medium text-yellow-300">UNCLAIMED PROFILE</span>
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                Claim This Tool - ${toolData.claimPrice}/mo
              </button>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Title Section */}
          <h1 className="text-5xl font-bold mb-8 tracking-tight">{toolData.name}</h1>

          {/* Answer-First Summary with Glowing Left Border */}
          <div className="mb-12 p-6 bg-slate-900/50 border-l-4 border-purple-500 rounded-lg shadow-lg relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:to-purple-500/30 before:blur-sm before:rounded-l-lg">
            <p className="text-lg text-slate-300 leading-relaxed">{toolData.summary}</p>
            <div className="mt-4 text-sm text-slate-400">
              <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                AI-Optimized Summary
              </span>
            </div>
          </div>

          {/* Code Block */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Configuration</h2>
            <div className="relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
              {/* Copy Button */}
              <button
                onClick={handleCopyConfig}
                className="absolute top-4 right-4 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-sm rounded font-mono transition-colors"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>

              {/* Code Content */}
              <pre className="p-6 text-sm text-slate-100 overflow-x-auto pt-12">
                <code className="font-mono">{toolData.mcpConfig}</code>
              </pre>
            </div>
          </div>

          {/* Ad Space 1 */}
          <div className="my-12 flex justify-center">
            <div className="w-full max-w-2xl h-48 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-400 text-lg">Ad Space</span>
            </div>
          </div>

          {/* Questions Section */}
          <div className="mb-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                How to setup {toolData.name}?
              </h2>
              <p className="text-slate-300 mb-2">
                Start by installing the package using npm or your preferred package manager. Configure the environment variables including your API keys and search preferences.
              </p>
              <p className="text-slate-300">
                Once configured, initialize the MCP server and connect it to your Claude instance or other compatible AI applications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                Is {toolData.name} free?
              </h2>
              <p className="text-slate-300 mb-2">
                The basic version is available at no cost with standard rate limits. Premium features and higher limits require a paid subscription.
              </p>
              <p className="text-slate-300">
                Developers who claim their profile get exclusive access to analytics and lead generation features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                What are the rate limits?
              </h2>
              <p className="text-slate-300 mb-2">
                Free tier allows 100 requests per hour with a 30-second timeout per request. Premium subscribers enjoy 10,000 requests per hour.
              </p>
              <p className="text-slate-300">
                Contact support for enterprise rate limits and dedicated infrastructure options.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How it compares</h2>
            <div className="overflow-x-auto border border-slate-700 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-900/50 border-b border-slate-700">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold">Feature</th>
                    <th className="text-center px-6 py-4 font-bold">{toolData.name}</th>
                    <th className="text-center px-6 py-4 font-bold">{toolData.competitor}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {toolData.features.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                      <td className="px-6 py-4 text-slate-300">{feature.name}</td>
                      <td className="px-6 py-4 text-center text-xl">
                        {feature.tool ? '✅' : '❌'}
                      </td>
                      <td className="px-6 py-4 text-center text-xl">
                        {feature.competitor ? '✅' : '❌'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ad Space 2 */}
          <div className="my-12 flex justify-center">
            <div className="w-full max-w-2xl h-48 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-400 text-lg">Ad Space</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Are you the developer?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Claim this profile to update data and view leads from developers using your tool.
            </p>
            <a
              href="https://checkout.stripe.com/pay/test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Claim Now with Stripe
            </a>
          </div>
        </div>

        {/* Footer spacing */}
        <div className="h-12" />
      </main>
    </>
  )
}
