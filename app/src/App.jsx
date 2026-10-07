import { useState } from 'react'
import { Search, UserRound, ShoppingBag, Menu, ChevronDown, ArrowRight, MapPin, Heart, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import './App.css'

const products = [
  { name: 'fēnix® 8 Pro', type: 'MULTISPORT GPS SMARTWATCH', price: '$1,199.99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85', tag: 'NEW' },
  { name: 'Forerunner® 970', type: 'GPS RUNNING SMARTWATCH', price: '$749.99', image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=85', tag: 'BEST SELLER' },
  { name: 'Venu® X1', type: 'HEALTH & FITNESS SMARTWATCH', price: '$699.99', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=85', tag: 'NEW' },
  { name: 'Instinct® 3', type: 'RUGGED GPS SMARTWATCH', price: '$399.99', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=85', tag: '' },
]
const categories = [
  ['RUN', 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=85'],
  ['DIVE', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85'],
  ['FLY', 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1000&q=85'],
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState(0)
  return <div className="site-shell">
    <div className="utility"><span>FREE SHIPPING ON ORDERS OVER $50</span><div><a href="#support">Support</a><a href="#find">Find a Dealer</a><a href="#country"><MapPin size={13}/> United States</a></div></div>
    <header className="header">
      <button className="mobile-menu icon-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu/></button>
      <a className="wordmark" href="#top" aria-label="Garmin home">GARMIN<span>®</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {['Watches', 'Smartwatches', 'Sports & Fitness', 'Outdoor Recreation', 'Marine', 'Aviation', 'Sale'].map((item) => <a href={'#' + item.toLowerCase().replaceAll(' ', '-')} key={item}>{item}<ChevronDown size={12}/></a>)}
      </nav>
      <div className="tools"><button className="icon-btn search-btn" aria-label="Search"><Search/></button><button className="icon-btn" aria-label="Account"><UserRound/></button><button className="icon-btn cart-btn" aria-label="Shopping bag"><ShoppingBag/><i>{cart}</i></button></div>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-img" />
        <div className="hero-copy"><div className="eyebrow">INTRODUCING THE NEW</div><h1>THE NEXT<br/>FRONTIER</h1><p>Go beyond. fēnix 8 Pro with inReach® technology keeps you connected wherever adventure takes you.</p><a className="light-cta" href="#featured">EXPLORE FĒNIX 8 PRO <ArrowRight size={16}/></a><div className="hero-dots"><button className="round-arrow"><ChevronLeft size={16}/></button><span className="dot active"/><span className="dot"/><span className="dot"/><button className="round-arrow"><ChevronRight size={16}/></button></div></div>
        <div className="hero-caption">BUILT FOR THE BOLD <span>01 / 03</span></div>
      </section>
      <section className="benefits"><div><span className="benefit-icon">↗</span><strong>FREE SHIPPING</strong><small>On orders over $50</small></div><div><span className="benefit-icon">◷</span><strong>30-DAY RETURNS</strong><small>Shop with confidence</small></div><div><span className="benefit-icon">♧</span><strong>GARMIN SUPPORT</strong><small>Here when you need us</small></div><div><span className="benefit-icon">⌖</span><strong>GARMIN PAY™</strong><small>Leave your wallet behind</small></div></section>
      <section className="product-section" id="featured"><div className="section-head"><div><div className="eyebrow dark">FIND YOUR EDGE</div><h2>Featured products</h2></div><a className="text-link" href="#all">SHOP ALL <ArrowRight size={15}/></a></div><div className="product-grid">{products.map((p,i)=><article className="product" key={p.name}><div className="product-image"><img src={p.image} alt={p.name}/>{p.tag&&<span className="tag">{p.tag}</span>}<button className="wish" aria-label="Add to wishlist"><Heart size={18}/></button><button className="quick-add" onClick={()=>setCart(cart+1)}>QUICK ADD <span>+</span></button></div><div className="product-info"><small>{p.type}</small><h3>{p.name}</h3><div className="rating"><span>★★★★★</span><small>({[128,86,54,209][i]})</small></div><strong>{p.price}</strong></div></article>)}</div></section>
      <section className="category-section"><div className="section-head"><div><div className="eyebrow dark">PURPOSE BUILT</div><h2>Made for your world</h2></div><div className="category-controls"><button className="round-arrow"><ChevronLeft size={16}/></button><button className="round-arrow"><ChevronRight size={16}/></button></div></div><div className="category-grid">{categories.map(([name,img],i)=><a href={'#'+name.toLowerCase()} className="category-card" key={name}><img src={img} alt=""/><div className="category-shade"/><div className="category-content"><small>GARMIN {name === 'RUN' ? 'RUNNING' : name === 'DIVE' ? 'DIVE' : 'AVIATION'}</small><h3>{name}</h3><span>EXPLORE <ArrowRight size={15}/></span></div>{i===1&&<button className="play" aria-label="Play video"><Play size={16} fill="currentColor"/></button>}</a>)}</div></section>
      <section className="story"><div className="story-image"><img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=90" alt="Mountain lake at sunrise"/><button className="play large" aria-label="Play film"><Play size={20} fill="currentColor"/></button></div><div className="story-copy"><div className="eyebrow">GARMIN STORIES</div><h2>There's more<br/>to explore.</h2><p>From the highest peaks to the deepest oceans, the world is waiting. Go find your next great story.</p><a className="light-cta" href="#stories">WATCH THE FILM <ArrowRight size={15}/></a></div></section>
      <section className="newsletter"><div><div className="eyebrow dark">STAY IN THE KNOW</div><h2>Adventure starts here.</h2><p>Get product news, exclusive offers and inspiration for your next adventure.</p></div><form onSubmit={e=>{e.preventDefault();e.currentTarget.reset()}}><label htmlFor="email">EMAIL ADDRESS</label><div className="email-field"><input id="email" type="email" placeholder="Enter your email address" required/><button aria-label="Subscribe"><ArrowRight/></button></div><small>By subscribing, you agree to receive marketing emails from Garmin.</small></form></section>
    </main>
    <footer><div className="footer-top"><a className="wordmark" href="#top">GARMIN<span>®</span></a><div className="social">Follow Garmin <span>f</span><span>◎</span><span>▶</span><span>𝕏</span></div></div><div className="footer-links"><div><strong>SHOP</strong><a href="#watches">Watches</a><a href="#fitness">Sports & Fitness</a><a href="#outdoor">Outdoor Recreation</a><a href="#marine">Marine</a><a href="#aviation">Aviation</a></div><div><strong>SUPPORT</strong><a href="#support">Product Support</a><a href="#contact">Contact Us</a><a href="#shipping">Shipping & Returns</a><a href="#warranty">Warranty</a></div><div><strong>ABOUT GARMIN</strong><a href="#company">Company</a><a href="#careers">Careers</a><a href="#news">Newsroom</a><a href="#sustainability">Sustainability</a></div><div><strong>ACCOUNT</strong><a href="#account">My Account</a><a href="#orders">Order Status</a><a href="#register">Register Your Product</a><a href="#dealer">Find a Dealer</a></div></div><div className="footer-bottom"><span>© 1996–2026 Garmin Ltd. or its subsidiaries</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms of Use</a><a href="#cookies">Cookie Settings</a></div><span>United States · English</span></div></footer>
  </div>
}
export default App
