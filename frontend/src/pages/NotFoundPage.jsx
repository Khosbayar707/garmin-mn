import ShopButton from '../components/ui/ShopButton'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <h1 className="font-display text-3xl uppercase">Page not found</h1>
      <p className="text-sm text-neutral-600">This page isn’t part of the demo yet.</p>
      <ShopButton href="/" variant="dark">Back to home</ShopButton>
    </main>
  )
}
