import Link from "next/link";

type RelatedGuideItem = {
  title: string;
  body: string;
  href: string;
};

export default function RelatedGuides({
  title = "Related Guides",
  items,
}: {
  title?: string;
  items: RelatedGuideItem[];
}) {
  if (!items?.length) return null;

  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-2 hover:bg-zinc-900/70 transition-colors block"
          >
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
