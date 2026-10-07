import { useState } from 'react'
import { Search, UserRound, ShoppingBag, Menu, ArrowRight, CircleHelp, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import './App.css'

const products = [
  { name: 'What’s New', image: 'https://res.garmin.com/homepage/92989/92989-FP-ETE-WHATS-NEW.jpg', tag: '' },
  { name: 'fēnix® 9', image: 'https://res.garmin.com/homepage/92958/92958-FP-V2-1.jpg', tag: '' },
  { name: 'CIRQA™ SMART BAND', image: 'https://res.garmin.com/homepage/85883/85883-FT.jpg', tag: 'NEW' },
  { name: 'APPROACH® S72', image: 'https://res.garmin.com/homepage/88129/88129-FP.jpg', tag: 'NEW' },
  { name: 'ENDURO™ 4', image: 'https://res.garmin.com/homepage/88360/en_US/88360-FC.png', tag: 'NEW' },
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)
  const [slide, setSlide] = useState(0)
  const [offset, setOffset] = useState(0)
  const slides = [
    { title: 'ENDURO™ 4', copy: 'Ultraperformance GPS smartwatch with extreme battery life', hero: 'https://res.garmin.com/homepage/88360/en_US/88360-D.jpg', watch: 'https://res.garmin.com/homepage/88360/en_US/88360-T.jpg' },
    { title: 'FĒNIX® 9', copy: 'Play harder with the ultimate smartwatch.', hero: 'https://res.garmin.com/homepage/87582/87582-1-D.jpg', watch: 'https://res.garmin.com/homepage/87582/87582-3-M.jpg' },
    { title: 'APPROACH® S72', copy: 'Play your best game with a premium golf smartwatch.', hero: 'https://res.garmin.com/homepage/88129/88129-1-D.jpg', watch: 'https://res.garmin.com/homepage/88129/88129-3-M.jpg' },
  ]
  const current = slides[slide]
  return <div className="site-shell">
    <header className="header">
      <button className="mobile-menu icon-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu/></button>
      <a className="wordmark" href="#top" aria-label="Garmin home">GARMIN<span>®</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {['Smartwatches', 'Sports & Fitness', 'Outdoor Recreation', 'Auto & Home', 'Marine', 'Aviation', 'Sale'].map((item) => <a href={'#' + item.toLowerCase().replaceAll(' ', '-')} key={item}>{item}</a>)}
      </nav>
      <div className="tools"><a className="support-link" href="#support"><CircleHelp size={17}/> Support</a><button className="icon-btn search-btn" aria-label="Search"><Search/></button><button className="icon-btn" aria-label="Account"><UserRound/></button><button className="icon-btn cart-btn" aria-label="Shopping bag"><ShoppingBag/><i>{cart}</i></button></div>
    </header>
    <main id="top">
      <section className="hero" style={{ backgroundImage: `url(${current.hero})` }}>
        <div className="hero-copy"><h1>{current.title}</h1><p>{current.copy}</p><a className="light-cta" href="#featured">SHOP</a></div>
        <button className="hero-pause" aria-label="Pause slideshow"><Pause size={17}/></button>
        <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => setSlide((slide + slides.length - 1) % slides.length)}><ChevronLeft/></button>
        <button className="hero-arrow next" aria-label="Next slide" onClick={() => setSlide((slide + 1) % slides.length)}><ChevronRight/></button>
        <div className="hero-caption">{slide + 1} / 0{slides.length}</div>
      </section>
      <div className="featured-label">FEATURED</div>
      <div className="home-teaser"><img src="https://res.garmin.com/homepage/92989/92989-FP-ETE-WHATS-NEW.jpg" alt="What’s new at Garmin"/></div>
      <section className="product-section" id="featured"><div className="product-grid" style={{ transform: `translateX(-${offset * 20}%)` }}>{products.map((p,i)=><article className="product" key={p.name + i}><div className="product-image"><img src={p.image} alt={p.name}/>{p.tag&&<span className="tag star-tag">{p.tag}</span>}</div><div className="product-info"><h3>{p.name}</h3><button className="shop-link" onClick={()=>setCart(cart+1)}>SHOP <ArrowRight size={14}/></button></div></article>)}</div><button className="featured-next" aria-label="Next products" onClick={()=>setOffset((offset+1)%2)}><ChevronRight/></button></section>
    </main>
    <footer><div className="footer-top"><a className="wordmark" href="#top">GARMIN<span>®</span></a><div className="social">Follow Garmin <span>f</span><span>◎</span><span>▶</span><span>𝕏</span></div></div><div className="footer-links"><div><strong>SHOP</strong><a href="#watches">Watches</a><a href="#fitness">Sports & Fitness</a><a href="#outdoor">Outdoor Recreation</a><a href="#marine">Marine</a><a href="#aviation">Aviation</a></div><div><strong>SUPPORT</strong><a href="#support">Product Support</a><a href="#contact">Contact Us</a><a href="#shipping">Shipping & Returns</a><a href="#warranty">Warranty</a></div><div><strong>ABOUT GARMIN</strong><a href="#company">Company</a><a href="#careers">Careers</a><a href="#news">Newsroom</a><a href="#sustainability">Sustainability</a></div><div><strong>ACCOUNT</strong><a href="#account">My Account</a><a href="#orders">Order Status</a><a href="#register">Register Your Product</a><a href="#dealer">Find a Dealer</a></div></div><div className="footer-bottom"><span>© 1996–2026 Garmin Ltd. or its subsidiaries</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms of Use</a><a href="#cookies">Cookie Settings</a></div><span>United States · English</span></div></footer>
  </div>
}
export default App
