import Container from '../ui/Container'
import PromoCard from './PromoCard'

export default function PromoCardGrid({ cards }) {
  return (
    <Container className="mb-8 mt-16 grid gap-6 sm:grid-cols-2">
      {cards.map((card) => <PromoCard key={card.title} {...card} />)}
    </Container>
  )
}
