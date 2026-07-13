import Link from "next/link";

interface GuideItem {
  title: string;
  body: string;
  href: string;
}

interface RelatedGuidesProps {
  items: GuideItem[];
}

export default function RelatedGuides({ items }: RelatedGuidesProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:border-purple-500/30 transition-colors"
          >
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
