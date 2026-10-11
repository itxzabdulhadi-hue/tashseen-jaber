interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <section className="relative bg-midnight border-y border-frost/10 py-8 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-frost/20 text-4xl lg:text-5xl font-light">
              {item}
            </span>
            <span className="text-copper-light/40 text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}