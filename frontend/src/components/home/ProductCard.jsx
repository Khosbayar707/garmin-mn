// Product tile used in the featured carousel. Badges like "NEW" are baked into the source images.
export default function ProductCard({ product }) {
  return (
    <a href={product.href} className="group flex h-full flex-col bg-white px-4 pb-6 pt-4 text-center shadow-[0_0_6px_rgba(0,0,0,0.08)] transition hover:shadow-lg">
      <img src={product.image} alt={product.name} loading="lazy" className="mx-auto aspect-square w-full object-contain transition group-hover:scale-[1.03]" />
      <h3 className="mt-3 font-display text-2xl uppercase leading-tight">{product.name}</h3>
      <p className="mt-2 text-xs leading-relaxed text-neutral-700">{product.copy}</p>
    </a>
  )
}
