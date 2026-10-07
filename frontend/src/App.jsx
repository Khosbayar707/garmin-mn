import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Newsletter from './components/layout/Newsletter'
import { CartProvider } from './context/CartContext'
import { findProduct } from './data/products'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'

// Minimal path-based routing: "/" is home, "/p/:id" (or legacy "/products/:id") is a product page.
function route(pathname) {
  const [section, id] = pathname.split('/').filter(Boolean)
  if (!section || section === 'index.html') return <HomePage />
  if ((section === 'p' || section === 'products') && id) {
    const product = findProduct(id)
    if (product) return <ProductPage key={product.id} product={product} />
  }
  return <NotFoundPage />
}

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-black">
        <Header />
        {route(window.location.pathname)}
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  )
}
