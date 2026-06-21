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
}
