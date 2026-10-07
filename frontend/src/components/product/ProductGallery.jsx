import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const step = (delta) => setActive((current) => (current + delta + images.length) % images.length)

  return (
    <section className="gallery">
      <div className="gallery-rail">
        {images.map((image, index) => (
          <button key={image} type="button" className={active === index ? 'selected' : ''} onClick={() => setActive(index)}>
            <img src={image} alt={`${name} view ${index + 1}`} />
          </button>
        ))}
      </div>
      <div className="gallery-main">
        <img src={images[active]} alt={name} />
        {images.length > 1 && <>
          <button type="button" className="gallery-prev" onClick={() => step(-1)} aria-label="Previous image"><ChevronLeft /></button>
          <button type="button" className="gallery-next" onClick={() => step(1)} aria-label="Next image"><ChevronRight /></button>
        </>}
      </div>
    </section>
  )
}
