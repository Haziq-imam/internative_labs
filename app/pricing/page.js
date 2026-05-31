import Link from 'next/link';

export const metadata = {
  title: 'Transparent Pricing | Web, App & SEO Costs | InterNative Labs',
  description:
    'Transparent pricing for web development, mobile apps, SEO, and digital marketing. No hidden fees. See exact costs and deliverables for every service. Get a free quote.',
  keywords:
    'web development pricing, SEO service cost, mobile app development cost, digital agency pricing, how much does a website cost',
  alternates: { canonical: 'https://www.internativelabs.com/pricing' },
};

const pricingItems = [
  { service: 'Starter Website (5 pages)', price: '$1,500', includes: 'Design, development, mobile-responsive, contact form, basic SEO', href: '/services/web-development', category: 'Web' },
  { service: 'Business Website (10-20 pages)', price: '$3,500', includes: 'Custom design, CMS, advanced SEO setup, analytics, 3 months support', href: '/services/web-development', category: 'Web' },
  { service: 'eCommerce Website', price: '$5,000', includes: 'Shopify/WooCommerce, payment gateway, product catalog, SEO', href: '/services/ecommerce-development', category: 'Web' },
  { service: 'Custom Web Application', price: '$8,000+', includes: 'Custom development, database design, user authentication, APIs', href: '/services/custom-web-applications', category: 'Web' },
  { service: 'iOS App Development', price: '$15,000+', includes: 'Native Swift, App Store submission, 6 months bug-fix support', href: '/services/ios-app-development', category: 'App' },
  { service: 'Android App Development', price: '$12,000+', includes: 'Native Kotlin, Google Play submission, 6 months support', href: '/services/android-app-development', category: 'App' },
  { service: 'Cross-Platform App (React Native)', price: '$18,000+', includes: 'iOS + Android from one codebase, both stores submission', href: '/services/cross-platform-apps', category: 'App' },
  { service: 'Local SEO', price: '$599/month', includes: '10 keywords, Google Business, citations, monthly reports', href: '/services/local-seo', category: 'SEO' },
  { service: 'Growth SEO', price: '$1,299/month', includes: '30 keywords, on-page + technical, content, link building', href: '/services/seo', category: 'SEO' },
  { service: 'Enterprise SEO', price: '$2,999/month', includes: 'Unlimited keywords, dedicated manager, full SEO program', href: '/services/seo', category: 'SEO' },
  { service: 'Social Media Marketing', price: '$499/month', includes: '2 platforms, 12 posts/month, community management', href: '/services/social-media-marketing', category: 'Marketing' },
  { service: 'PPC / Google Ads Management', price: '$399/month + ad spend', includes: 'Campaign setup, A/B testing, optimization, reporting', href: '/services/ppc-advertising', category: 'Marketing' },
  { service: 'Content Marketing', price: '$799/month', includes: '4 blog posts, keyword research, internal linking, optimization', href: '/services/content-marketing', category: 'Marketing' },
  { service: 'UI/UX Design Package', price: '$2,000+', includes: 'User research, wireframes, prototype, high-fidelity design', href: '/services/ui-ux-design', category: 'Design' },
  { service: 'Logo & Brand Identity', price: '$800+', includes: 'Logo, color palette, typography, brand guide', href: '/services/logo-branding', category: 'Design' },
  { service: 'Graphic Design (Monthly)', price: '$599/month', includes: '15 graphics/month for social, ads, presentations', href: '/services/graphic-design', category: 'Design' },
  { service: 'Video Editing & Animation', price: '$1,200+', includes: 'Explainer video (60 sec), script, voiceover, motion graphics', href: '/services/video-animation', category: 'Design' },
  { service: 'Email Marketing', price: '$399/month', includes: 'Campaign design, list management, automation, A/B testing', href: '/services/email-marketing', category: 'Marketing' },
  { service: 'Website Maintenance', price: '$199/month', includes: 'Security updates, backups, uptime monitoring, content edits', href: '/services/hosting-maintenance', category: 'Support' },
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
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id="pricing-hero-cta">Get a Custom Quote →</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      {/* Guarantee strip */}
      <div style={{ background: '#27AE60', padding: '20px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
            🔒 30-Day Satisfaction Guarantee — If you're not fully satisfied in the first 30 days, we'll make it right or refund your investment.
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
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
