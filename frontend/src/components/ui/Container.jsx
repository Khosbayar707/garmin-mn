export default function Container({ children, className = '', as: Tag = 'div' }) {
  return <Tag className={`mx-auto w-full max-w-[1140px] px-4 ${className}`}>{children}</Tag>
}
