import { useState } from 'react'
import { Search, UserRound, ShoppingBag, Menu, ArrowRight, CircleHelp, Pause, ChevronLeft, ChevronRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import './App.css'

const products = [
  { id: 'enduro-4', name: 'ENDURO™ 4', image: 'https://res.garmin.com/homepage/88360/en_US/88360-FC.png', tag: 'NEW', price: '$899.99', sku: '010-04799-00', battery: 'Up to 36 days (90 days with solar)', water: '10 ATM', description: 'Ultraperformance GPS smartwatch with solar power, GPS, performance and training features, a lightweight band, and up to 90 days of battery life.' },
  { id: 'fenix-9', name: 'fēnix® 9 Pro – 51 mm', image: 'https://res.garmin.com/homepage/92958/92958-FP-V2-1.jpg', tag: '', price: '$1,249.99', sku: '010-04337-00', imageSku: '010-04337-15', battery: 'Up to 31 days', water: '10 ATM', description: 'Multisport smartwatch with a titanium case, LTE and satellite coverage, 24/7 health features, GPS, and a battery life of up to 31 days.' },
  { id: 'cirqa', name: 'CIRQA™ Smart Band', image: 'https://res.garmin.com/homepage/85883/85883-FT.jpg', tag: 'NEW', price: '$199.99', sku: '010-04675-00', battery: 'Up to 10 days', water: 'Swim, 5 ATM', description: 'Screenless smart band with automatic activity detection, 24/7 health monitoring, stress tracking, and up to 10 days of battery life.' },
  { id: 'approach-s72', name: 'Approach® S72 – 47 mm', image: 'https://res.garmin.com/homepage/88129/88129-FP.jpg', tag: 'NEW', price: '$799.99', sku: '010-04148-00', battery: 'Up to 16 days', water: '5 ATM', description: 'Golf smartwatch with an AMOLED display, 43,000+ preloaded courses, golf biometric data, aerial imagery, and a battery life of up to 16 days.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)
  const [slide, setSlide] = useState(0)
  const [offset, setOffset] = useState(0)
  const [gallery, setGallery] = useState(0)
  const [added, setAdded] = useState(false)
  const productId = location.pathname.split('/').filter(Boolean).pop()
  const detail = productId && productId !== 'index.html' ? productId : null
  const productPage = products.find((product) => product.id === detail)
  const galleryImages = ['cf-xl', 'rf-xl', 'lf-xl', 'pd-01-xl', 'pd-02-xl', 'pd-03-xl'].map((img) => `https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_800,q_auto,w_800/c_pad,h_800,w_800/Product_Images/en/products/${productPage.imageSku || productPage.sku}/v/${img}`)
  const slides = [
    { title: 'ENDURO™ 4', copy: 'Ultraperformance GPS smartwatch with extreme battery life', hero: 'https://res.garmin.com/homepage/88360/en_US/88360-D.jpg', watch: 'https://res.garmin.com/homepage/88360/en_US/88360-T.jpg' },
    { title: 'FĒNIX® 9', copy: 'Play harder with the ultimate smartwatch.', hero: 'https://res.garmin.com/homepage/87582/87582-1-D.jpg', watch: 'https://res.garmin.com/homepage/87582/87582-3-M.jpg' },
    { title: 'APPROACH® S72', copy: 'Play your best game with a premium golf smartwatch.', hero: 'https://res.garmin.com/homepage/88129/88129-1-D.jpg', watch: 'https://res.garmin.com/homepage/88129/88129-3-M.jpg' },
  ]
  const current = slides[slide]
  return <div className="site-shell">
    <header className="header">
      <button className="mobile-menu icon-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu/></button>
      <a className="wordmark" href="/" aria-label="Garmin home">GARMIN<span>®</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {['Smartwatches', 'Sports & Fitness', 'Outdoor Recreation', 'Auto & Home', 'Marine', 'Aviation', 'Sale'].map((item) => <a href={'#' + item.toLowerCase().replaceAll(' ', '-')} key={item}>{item}</a>)}
      </nav>
      <div className="tools"><a className="support-link" href="#support"><CircleHelp size={17}/> Support</a><button className="icon-btn search-btn" aria-label="Search"><Search/></button><button className="icon-btn" aria-label="Account"><UserRound/></button><button className="icon-btn cart-btn" aria-label="Shopping bag"><ShoppingBag/><i>{cart}</i></button></div>
    </header>
    {productPage ? <main className="pdp">
      <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/#featured">Watches</a><span>/</span><b>{productPage.name}</b></div>
      <div className="pdp-grid"><section className="gallery"><div className="gallery-rail">{galleryImages.map((image,index)=><button key={image} className={gallery===index?'selected':''} onClick={()=>setGallery(index)}><img src={image} alt={`Enduro 4 view ${index+1}`}/></button>)}</div><div className="gallery-main"><img src={galleryImages[gallery]} alt="Enduro 4 GPS smartwatch"/><button className="gallery-prev" onClick={()=>setGallery((gallery+5)%6)} aria-label="Previous image"><ChevronLeft/></button><button className="gallery-next" onClick={()=>setGallery((gallery+1)%6)} aria-label="Next image"><ChevronRight/></button></div></section>
      <section className="purchase"><div className="product-kicker">ULTRAPERFORMANCE GPS SMARTWATCH</div><h1>{productPage.name}</h1><p className="pdp-summary">{productPage.description}</p><div className="pdp-price">{productPage.price} <small>USD</small></div><div className="option-title">COLOR <b>Carbon Gray</b></div><div className="color-options"><button className="swatch active" aria-label="Carbon Gray"/><button className="swatch olive" aria-label="Olive Green"/><button className="swatch orange" aria-label="Orange"/></div><button className="add-cart" onClick={()=>{setCart(cart+1);setAdded(true)}}>{added?'ADDED TO CART':'ADD TO CART'} <ShoppingBag size={18}/></button><div className="availability">In stock · Ships in 1–3 days</div><div className="purchase-benefits"><p><Truck/> Free shipping on orders over $50</p><p><RotateCcw/> 30-day returns</p><p><ShieldCheck/> 1-year limited warranty</p></div></section></div>
      <nav className="pdp-tabs"><a href="#overview">Overview</a><a href="#features">Features</a><a href="#specifications">Specifications</a><a href="#in-the-box">In the Box</a></nav>
      <section id="overview" className="pdp-overview"><div className="eyebrow dark">GO FURTHER</div><h2>Built for the long way around.</h2><p>Push further than ever with a longer battery life, lightweight design, and advanced performance and training features.</p><div className="spec-cards"><article><b>{productPage.battery.toUpperCase()}</b><span>Battery life with solar charging</span></article><article><b>1.4″ DISPLAY</b><span>Solar-powered MIP display</span></article><article><b>{productPage.water.toUpperCase()}</b><span>Water rating</span></article></div></section>
      <section className="spec-table" id="specifications"><div className="eyebrow dark">DETAILS THAT MATTER</div><h2>Specifications</h2><table><tbody><tr><th>Battery life</th><td>{productPage.battery}</td></tr><tr><th>Lens material</th><td>{productPage.id === 'cirqa' ? 'Not applicable' : productPage.id === 'approach-s72' ? 'Corning® Gorilla® Glass 3' : 'Power Sapphire™'}</td></tr><tr><th>Bezel material</th><td>Titanium</td></tr><tr><th>Case material</th><td>Fiber-reinforced polymer</td></tr><tr><th>Physical size</th><td>51 × 51 × 15.7 mm</td></tr><tr><th>Weight</th><td>66 g (case only: 57 g)</td></tr><tr><th>Display size</th><td>1.4″ (35.56 mm) diameter</td></tr><tr><th>Water rating</th><td>{productPage.water}</td></tr></tbody></table></section>
    </main> : <main id="top">
      <section className="hero" style={{ backgroundImage: `url(${current.hero})` }}>
        <div className="hero-copy"><h1>{current.title}</h1><p>{current.copy}</p><a className="light-cta" href="/products/enduro-4">SHOP</a></div>
        <button className="hero-pause" aria-label="Pause slideshow"><Pause size={17}/></button>
        <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => setSlide((slide + slides.length - 1) % slides.length)}><ChevronLeft/></button>
        <button className="hero-arrow next" aria-label="Next slide" onClick={() => setSlide((slide + 1) % slides.length)}><ChevronRight/></button>
        <div className="hero-caption">{slide + 1} / 0{slides.length}</div>
      </section>
      <div className="featured-label">FEATURED</div>
      <div className="home-teaser"><img src="https://res.garmin.com/homepage/92989/92989-FP-ETE-WHATS-NEW.jpg" alt="What’s new at Garmin"/></div>
      <section className="product-section" id="featured"><div className="product-grid" style={{ transform: `translateX(-${offset * 20}%)` }}>{products.map((p,i)=><article className="product" key={p.name + i}><div className="product-image"><img src={p.image} alt={p.name}/>{p.tag&&<span className="tag star-tag">{p.tag}</span>}</div><div className="product-info"><h3>{p.name}</h3><a className="shop-link" href={`/products/${p.id}`}>SHOP <ArrowRight size={14}/></a></div></article>)}</div><button className="featured-next" aria-label="Next products" onClick={()=>setOffset((offset+1)%2)}><ChevronRight/></button></section>
    </main>}
    <footer><div className="footer-top"><a className="wordmark" href="/">GARMIN<span>®</span></a><div className="social">Follow Garmin <span>f</span><span>◎</span><span>▶</span><span>𝕏</span></div></div><div className="footer-links"><div><strong>SHOP</strong><a href="#watches">Watches</a><a href="#fitness">Sports & Fitness</a><a href="#outdoor">Outdoor Recreation</a><a href="#marine">Marine</a><a href="#aviation">Aviation</a></div><div><strong>SUPPORT</strong><a href="#support">Product Support</a><a href="#contact">Contact Us</a><a href="#shipping">Shipping & Returns</a><a href="#warranty">Warranty</a></div><div><strong>ABOUT GARMIN</strong><a href="#company">Company</a><a href="#careers">Careers</a><a href="#news">Newsroom</a><a href="#sustainability">Sustainability</a></div><div><strong>ACCOUNT</strong><a href="#account">My Account</a><a href="#orders">Order Status</a><a href="#register">Register Your Product</a><a href="#dealer">Find a Dealer</a></div></div><div className="footer-bottom"><span>© 1996–2026 Garmin Ltd. or its subsidiaries</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms of Use</a><a href="#cookies">Cookie Settings</a></div><span>United States · English</span></div></footer>
  </div>
}
export default App
