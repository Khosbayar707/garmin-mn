import ImageTile from './ImageTile'

export default function WideBanner(props) {
  return (
    <section className="my-8 px-2 md:px-4">
      <ImageTile {...props} aspect="aspect-[4/3] md:aspect-[1400/550]" />
    </section>
  )
}
