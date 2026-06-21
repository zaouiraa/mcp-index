"use client"

export function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="absolute top-3 right-3 px-3 py-1.5 text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
    >
      Copy
    </button>
  )
}
