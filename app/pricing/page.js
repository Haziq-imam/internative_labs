import Link from 'next/link';
import { FiLock } from 'react-icons/fi';

export const metadata = {
  title: 'Transparent Pricing | Web, App & SEO Costs | InterNative Labs',
  description:
    'Transparent pricing for web development, mobile apps, SEO, and digital marketing. No hidden fees. See exact costs and deliverables for every service. Get a free quote.',
  keywords:
    'web development pricing, SEO service cost, mobile app development cost, digital agency pricing, how much does a website cost',
  alternates: { canonical: 'https://www.internativelabs.com/pricing' },
};

const pricingItems = [
  { service: 'Starter Website (5 pages)', price: '$999', includes: 'Design, development, mobile-responsive, contact form, basic SEO', href: '/services/web-development', category: 'Web' },
  { service: 'Business Website (10-20 pages)', price: '$2,499', includes: 'Custom design, CMS, advanced SEO setup, analytics, 3 months support', href: '/services/web-development', category: 'Web' },
  { service: 'Premium Website', price: '$4,999', includes: 'High-end custom animations, bespoke UX design, advanced CMS, speed optimized', href: '/services/web-development', category: 'Web' },
  { service: 'eCommerce Store', price: '$4,499', includes: 'Shopify/WooCommerce, payment gateway, product catalog, SEO integration', href: '/services/ecommerce-development', category: 'Web' },
  { service: 'Custom Web App', price: '$10,000+', includes: 'Custom database design, user auth pipelines, API integrations, admin dashboards', href: '/services/custom-web-applications', category: 'Web' },
  { service: 'AI Integration', price: '$3,500+', includes: 'LLM API hookups, vector databases, custom chatbot agents, workflow automation', href: '/services/custom-web-applications', category: 'Web' },
  { service: 'Mobile App MVP', price: '$8,000+', includes: 'Core features validation, single platform iOS or Android target, backend database', href: '/services/mobile-app-development', category: 'App' },
  { service: 'Cross-Platform App', price: '$15,000+', includes: 'iOS + Android from single Flutter/React Native codebase, full app store submission', href: '/services/cross-platform-apps', category: 'App' },
  { service: 'Local SEO', price: '$499/mo', includes: '10 target local keywords, Google Business setup, directories & citations', href: '/services/local-seo', category: 'SEO' },
  { service: 'Growth SEO', price: '$999/mo', includes: '30 target national/local keywords, technical optimization, link acquisition', href: '/services/seo', category: 'SEO' },
  { service: 'Logo Design', price: '$299', includes: '3 custom vector logo concepts, typography files, branding assets export', href: '/services/logo-branding', category: 'Design' },
  { service: 'Brand Identity', price: '$999', includes: 'Full color guidelines, vector assets, business stationery design, style-sheet kit', href: '/services/logo-branding', category: 'Design' },
];

const categoryColors = {
  Web: '#1A3C6E', App: '#2E86C1', SEO: '#27AE60',
  Marketing: '#E67E22', Design: '#9B59B6', Support: '#E74C3C',
};

export default function PricingPage() {
  const categories = [...new Set(pricingItems.map(i => i.category))];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Pricing</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>Transparent Pricing</span>
          <h1>Know Exactly What You're Getting <span className="gradient-text">and What It Costs</span></h1>
          <p>No hidden fees, no vague retainers. Every service is priced clearly with defined deliverables. Choose a plan or get a custom proposal tailored to your exact needs and budget.</p>
          <div className="hero-actions">
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id="pricing-hero-cta">Get a Custom Quote →</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      {/* Guarantee strip */}
      <div style={{ background: '#27AE60', padding: '20px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
            <FiLock size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> 30-Day Satisfaction Guarantee — If you're not fully satisfied in the first 30 days, we'll make it right or refund your investment.
          </p>
        </div>
      </div>

      {/* Pricing Table */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">All Services</span>
            <h2>Complete Pricing — <span className="gradient-text">All Services</span></h2>
            <p>Every service comes with a dedicated account manager, regular progress reports, and our satisfaction guarantee.</p>
          </div>

          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: '3rem' }}>
              <h3 style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                color: '#fff', background: categoryColors[cat],
                padding: '8px 20px', borderRadius: 99, marginBottom: '1rem',
                fontSize: '0.95rem',
              }}>{cat} Services</h3>
              <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
                {/* Header */}
                <div className="pricing-header" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 3fr', background: 'var(--bg-gray)', padding: '0.8rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Service</span>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Starting Price</span>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>What's Included</span>
                </div>
                {pricingItems.filter(i => i.category === cat).map((item, idx, arr) => (
                  <div key={item.service} style={{
                    display: 'grid', gridTemplateColumns: '2fr 1fr 3fr',
                    padding: '1.1rem 1.5rem',
                    borderBottom: idx < arr.length - 1 ? '1px solid var(--border)' : 'none',
                    alignItems: 'center',
                    transition: 'background 0.2s',
                  }}
                    className="pricing-row"
                  >
                    <Link href={item.href} style={{ fontWeight: 600, color: 'var(--brand)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {item.service}
                    </Link>
                    <span style={{ fontWeight: 800, color: categoryColors[cat], fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{item.price}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{item.includes}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Custom Quote */}
          <div style={{
            background: 'var(--gradient-brand)', borderRadius: 24, padding: '3rem',
            textAlign: 'center', color: '#fff', marginTop: '2rem',
          }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need a Custom Package?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Not sure which plan fits? Our team will analyze your business and create a custom proposal with exactly what you need — and nothing you don't.
            </p>
            <div className="cta-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/free-consultation" className="btn" id="pricing-final-cta" style={{ background: '#fff', color: 'var(--brand)', fontWeight: 700 }}>
                Get a Custom Quote →
              </Link>
              <Link href="/contact" className="btn btn-secondary">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`.pricing-row:hover { background: var(--bg-gray); }`}</style>
    </>
  );
}
