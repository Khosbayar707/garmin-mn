export default function SectionHeading({ children, className = '' }) {
  return <h2 className={`mb-8 text-center font-display text-2xl uppercase md:text-3xl ${className}`}>{children}</h2>
}
