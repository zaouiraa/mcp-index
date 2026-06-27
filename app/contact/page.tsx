"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setSuccess("Your message has been sent successfully.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
          <Link href="/" className="hover:text-white transition-colors">
            MCPIndex
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Contact</span>
        </nav>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Have a question, want to report an issue, or interested in claiming your
            tool&apos;s profile? We&apos;d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-950 border border-zinc-800 rounded-2xl p-8"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
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
              value={form.email}
              onChange={handleChange}
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
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors resize-none"
            />
          </div>

          {success && (
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              {success}
            </div>
          )}

          {error && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
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
}
