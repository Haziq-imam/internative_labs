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
  // Web Development
  { service: 'Startup Website', price: '$499', includes: 'Design, development, mobile-responsive, 5 pages contact form, basic SEO setup', href: '/services/web-development', category: 'Web Development' },
  { service: 'Business Website', price: '$999', includes: 'Custom design, CMS integration, advanced SEO, analytics, 10-20 pages, 3 months support', href: '/services/web-development', category: 'Web Development' },
  { service: 'Professional Website', price: '$1,499', includes: 'Premium bespoke design, speed optimization, CMS, 20+ pages, custom animations', href: '/services/web-development', category: 'Web Development' },

  // Logo Design
  { service: 'Brand Launch', price: '$49', includes: '2 Logo Concepts, 2 Revisions, PNG & JPG Files, Ownership Rights', href: '/services/logo-branding', category: 'Logo Design' },
  { service: 'Business Identity', price: '$99', includes: '4 Logo Concepts, Unlimited Revisions, Source Files, Social Media Kit', href: '/services/logo-branding', category: 'Logo Design' },
  { service: 'Premium Brand System', price: '$149', includes: 'Unlimited Concepts, Unlimited Revisions, AI/EPS Source Files, Brand Guidelines, Ownership Rights', href: '/services/logo-branding', category: 'Logo Design' },

  // Branding Section
  { service: 'Essential Brand Kit', price: '$59', includes: 'Basic color palette, typography selection, business card layout, assets export', href: '/services/logo-branding', category: 'Branding' },
  { service: 'Startup Brand Package', price: '$99', includes: 'Curated color palette, typography style sheet, letterhead, email signature template', href: '/services/logo-branding', category: 'Branding' },
  { service: 'Complete Brand Package', price: '$149', includes: 'Complete vector brand system, brand guidelines, social media kit, packaging templates', href: '/services/logo-branding', category: 'Branding' },

  // Video Animation
  { service: 'Starter Motion Package', price: '$299', includes: '30-second explainer video, basic motion graphics, script assistance, background music', href: '/services/video-animation', category: 'Video Animation' },
  { service: 'Business Motion Package', price: '$399', includes: '60-second animated video, customized characters, professional voiceover, script support', href: '/services/video-animation', category: 'Video Animation' },
  { service: 'Premium Motion Package', price: '$499', includes: '90-second premium explainer video, detailed custom motion graphics, voiceover, sound effects', href: '/services/video-animation', category: 'Video Animation' },

  // SEO Services
  { service: 'Local SEO', price: '$499/mo', includes: '10 target local keywords, Google Business setup, local directory listings & citations pack', href: '/services/local-seo', category: 'SEO Services' },
  { service: 'Growth SEO', price: '$999/mo', includes: '30 target keywords (local & national), on-page + technical optimization, monthly audits', href: '/services/seo', category: 'SEO Services' },
];

const categoryColors = {
  'Web Development': '#1A3C6E',
  'Logo Design': '#2E86C1',
  'Branding': '#27AE60',
  'Video Animation': '#9B59B6',
  'SEO Services': '#E67E22',
};

export default function PricingPage() {
  const categories = ['Logo Design', 'Branding', 'Web Development', 'Video Animation', 'SEO Services'];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Pricing</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>Transparent Pricing</span>
          <h1>Affordable Digital Solutions for <span className="gradient-text">Growing Businesses</span></h1>
          <p>Fixed-price packages for branding, website development, SEO, mobile apps, and digital marketing. Choose a package that fits your business goals or request a custom quote.</p>
          <div className="hero-actions">
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id="pricing-hero-cta">Get a Custom Quote →</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">Talk to Our Team</Link>
          </div>
        </div>
      </section>



      {/* Trust Strip */}
      <div style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border)', padding: '30px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.05rem', color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Why Businesses Choose InterNative Labs
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontWeight: 600, color: 'var(--text-secondary)' }}>
            <span>✓ Fixed Pricing</span>
            <span>✓ No Hidden Fees</span>
            <span>✓ Unlimited Revisions On Select Packages</span>
            <span>✓ Dedicated Project Manager</span>
            <span>✓ Fast Turnaround Times</span>
          </div>
        </div>
      </div>

      {/* Pricing Tables */}
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
              }}>{cat}</h3>
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

          {/* Bundle Section */}
          <div style={{ marginTop: '5rem', marginBottom: '3rem' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>Value Bundles</span>
              <h2>All-In-One <span className="gradient-text">Launch Bundles</span></h2>
              <p>Get everything you need to launch and grow your brand online at a massive discount.</p>
            </div>
            <div className="grid-3">
              {[
                {
                  title: 'Startup Launch Bundle',
                  price: '$516',
                  includes: ['Logo Design', 'Business Card Design', 'Social Media Assets'],
                  highlight: false
                },
                {
                  title: 'Business Growth Bundle',
                  price: '$1,017',
                  includes: ['Branding Package', 'Business Website', 'Marketing Assets'],
                  highlight: true
                },
                {
                  title: 'Complete Digital Presence',
                  price: '$1,527',
                  includes: ['Premium Branding', 'Professional Website', 'Video Animation'],
                  highlight: false
                }
              ].map(b => (
                <div key={b.title} style={{
                  background: b.highlight ? 'rgba(114,193,146,0.08)' : 'rgba(255,255,255,0.03)',
                  border: b.highlight ? '2px solid var(--brand)' : '1px solid var(--border)',
                  borderRadius: 24,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: b.highlight ? 'var(--shadow-brand)' : 'none',
                }}>
                  {b.highlight && (
                    <span style={{
                      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--brand)', color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                      padding: '4px 14px', borderRadius: 99, textTransform: 'uppercase'
                    }}>Most Popular</span>
                  )}
                  <h3 style={{ color: b.highlight ? 'var(--brand)' : '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>{b.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--brand)', fontFamily: 'var(--font-display)' }}>{b.price}</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', flexGrow: 1 }}>
                    <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>What's Included:</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0, listStyle: 'none' }}>
                      {b.includes.map(inc => (
                        <li key={inc} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--brand)', fontWeight: 'bold' }}>✓</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/free-consultation" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}>
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Quote */}
          <div style={{
            background: 'var(--gradient-brand)', borderRadius: 24, padding: '4rem 3rem',
            textAlign: 'center', color: '#fff', marginTop: '4rem',
            boxShadow: 'var(--shadow-brand)'
          }}>
            <span className="section-label" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>Request Custom Quote</span>
            <h2 style={{ color: '#fff', marginTop: '1rem', marginBottom: '1.2rem' }}>Need a Custom Enterprise Solution?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 650, margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Looking for <strong>Custom Web Applications ($10,000+)</strong>, <strong>Mobile App MVPs ($8,000+)</strong>, <strong>Cross-Platform Apps ($15,000+)</strong>, or <strong>Enterprise SEO ($2,999/mo)</strong>? Because these systems require bespoke engineering blueprints, they don't fit our standard package pricing. Let's outline a custom spec sheet.
            </p>
            <div className="cta-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/free-consultation" className="btn" id="pricing-final-cta" style={{ background: '#fff', color: 'var(--dark)', fontWeight: 700 }}>
                Get Custom Proposal →
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
