<<<<<<< HEAD
import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us — MCP Index',
  description: 'Get in touch with the MCP Index team. We respond to all inquiries.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a question or feedback? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as
            soon as possible.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Email</h3>
            <a
              href="mailto:hello@mcpindex.dev"
              className="text-foreground hover:text-primary transition-colors break-all"
            >
              hello@mcpindex.dev
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Response Time</h3>
            <p className="text-foreground">Typically within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <div className="border border-border rounded-lg p-8 bg-card">
          <ContactForm />
        </div>
      </div>
    </main>
  )
=======
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MCPIndex",
  description: "Get in touch with the MCPIndex team - questions, feedback, or profile claims.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
          <a href="/" className="hover:text-white transition-colors">MCPIndex</a>
          <span>/</span>
          <span className="text-zinc-300">Contact</span>
        </nav>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Have a question, want to report an issue, or interested in claiming your tool&apos;s profile? We&apos;d love to hear from you.
          </p>
        </div>

        <form className="space-y-6 bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us what's on your mind..."
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer text-sm"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center space-y-2">
            <div className="text-2xl">📋</div>
            <h3 className="text-sm font-semibold">Profile Claims</h3>
            <p className="text-xs text-zinc-500">Claim and manage your MCP tool listing</p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center space-y-2">
            <div className="text-2xl">🐛</div>
            <h3 className="text-sm font-semibold">Bug Reports</h3>
            <p className="text-xs text-zinc-500">Found incorrect data? Let us know</p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-center space-y-2">
            <div className="text-2xl">🤝</div>
            <h3 className="text-sm font-semibold">Partnerships</h3>
            <p className="text-xs text-zinc-500">Interested in collaborating?</p>
          </div>
        </div>
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
