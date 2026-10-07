import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ArrowButton({ direction = 'next', onClick, label, className = '' }) {
  const Icon = direction === 'next' ? ChevronRight : ChevronLeft
  return (
    <button type="button" onClick={onClick} aria-label={label ?? (direction === 'next' ? 'Next' : 'Previous')} className={`grid size-10 place-items-center rounded-full bg-white text-black shadow-md transition hover:bg-neutral-100 ${className}`}>
      <Icon size={20} />
    </button>
  )
}
