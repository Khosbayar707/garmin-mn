import { ArrowRight } from 'lucide-react'

export function Breadcrumbs({ trail }) {
  return (
    <div className="breadcrumbs">
      {trail.map(({ label, href }, index) => index === trail.length - 1
        ? <b key={label}>{label}</b>
        : <span key={label} className="contents"><a href={href}>{label}</a><span>/</span></span>)}
    </div>
  )
}

export function SectionTabs({ tabs }) {
  return <nav className="pdp-tabs">{tabs.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
}

export function ProductOverview({ product }) {
  const cards = [
    product.battery && [product.battery, 'Battery life'],
    product.highlight && [product.highlight, 'Made for your activities'],
    product.water && [product.water, 'Water rating'],
  ].filter(Boolean)

  return (
    <section id="overview" className="pdp-overview">
      <div className="eyebrow dark">PRODUCT OVERVIEW</div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {cards.length > 0 && (
        <div className="spec-cards">
          {cards.map(([value, label]) => <article key={label}><b>{value.toUpperCase()}</b><span>{label}</span></article>)}
        </div>
      )}
    </section>
  )
}

export function FeatureStories({ stories }) {
  if (!stories.length) return null
  return (
    <section className="feature-stories" id="features">
      {stories.map(({ image, title, copy }) => (
        <article key={title} className="feature-story" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.58),transparent 80%),url(${image})` }}>
          <div><h2>{title}</h2><p>{copy}</p></div>
        </article>
      ))}
    </section>
  )
}

export function SpecificationList({ name, groups }) {
  if (!groups.length) return null
  return (
    <section className="full-specs" id="specifications">
      <div className="eyebrow dark">PRODUCT INFORMATION</div>
      <h2>Specifications</h2>
      <p className="spec-intro">Explore features, technical details and compatibility information for {name}.</p>
      {groups.map((group, index) => (
        <details className="spec-group" key={group.title} open={index === 0}>
          <summary>{group.title}<span>{group.rows.length} details</span></summary>
          <table><tbody>{group.rows.map(([label, value]) => <tr key={label}><th>{label}</th><td>{value}</td></tr>)}</tbody></table>
        </details>
      ))}
    </section>
  )
}

export function SupportResources({ product }) {
  if (!product.sku) return null
  const links = [['manuals', 'Owner’s manual'], ['software', 'Software and updates'], ['topics', 'Product support']]
  return (
    <section className="support-resources">
      <div>
        <div className="eyebrow dark">NEED A HAND?</div>
        <h2>Support and resources</h2>
        <p>Get manuals, software updates and help for {product.name}.</p>
      </div>
      <div>
        {links.map(([tab, label]) => <a key={tab} href={`https://support.garmin.com/en-US/?tab=${tab}&partNumber=${product.sku}`}>{label} <ArrowRight /></a>)}
      </div>
    </section>
  )
}

export function RelatedProducts({ products }) {
  return (
    <section className="related-products">
      <div className="eyebrow dark">KEEP EXPLORING</div>
      <h2>You may also like</h2>
      <div className="related-grid">
        {products.map((item) => (
          <a className="related-card" href={item.href} key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price} USD</span>
            <b>VIEW PRODUCT <ArrowRight /></b>
          </a>
        ))}
      </div>
    </section>
  )
}

export function BoxContents({ name }) {
  return (
    <section id="in-the-box" className="box-contents">
      <div><div className="eyebrow dark">IN THE BOX</div><h2>Everything you need to get started.</h2></div>
      <ul><li>{name}</li><li>Charging/data cable</li><li>Documentation</li></ul>
    </section>
  )
}
