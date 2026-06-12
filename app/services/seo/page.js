import Link from 'next/link';
import { FiSearch, FiSettings, FiFileText, FiLink, FiMapPin, FiBarChart2 } from 'react-icons/fi';
import FloatingCard from '@/components/FloatingCard';
import SectionPattern from '@/components/SectionPattern';

export const metadata = {
  title: 'SEO Services Company | Page 1 Rankings | InterNative Labs',
  description:
    'Data-driven SEO services that grow organic traffic and generate leads. On-page, technical, local, and eCommerce SEO. 92% of clients reach Page 1 in 6 months. Free audit.',
  keywords:
    'SEO services, search engine optimization, local SEO, technical SEO, ecommerce SEO, SEO agency, SEO company, organic traffic growth, InterNative Labs',
  alternates: { canonical: 'https://www.internativelabs.com/services/seo' },
};

const seoServices = [
  { icon: FiSearch, title: 'On-Page SEO', desc: 'Title tags, meta descriptions, header optimization, keyword mapping, internal linking structure, image alt text, schema markup.' },
  { icon: FiSettings, title: 'Technical SEO', desc: 'Site speed optimization, Core Web Vitals, crawlability, indexation, XML sitemaps, canonical tags, HTTPS, mobile-first optimization.' },
  { icon: FiFileText, title: 'Content Strategy', desc: 'Keyword research, content gap analysis, blog content creation, pillar pages, topic clusters, FAQ content.' },
  { icon: FiLink, title: 'Link Building', desc: 'White-hat backlink acquisition, digital PR, guest posting, HARO outreach, local citations, competitor analysis.' },
  { icon: FiMapPin, title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, NAP consistency, local keyword targeting, review generation.' },
  { icon: FiBarChart2, title: 'SEO Analytics & Reporting', desc: 'Monthly rank tracking, traffic analysis, conversion attribution, competitor monitoring, ROI reporting.' },
];

const caseStudies = [
  { client: 'Healthcare Client', metric: '+312%', label: 'Organic Traffic in 8 Months', desc: 'From 200 to 4,200 monthly organic visits. 47 new patient inquiries per month.' },
  { client: 'Law Firm Client', metric: '#1', label: 'Ranking for Competitive Keyword', desc: 'Dominated 23 high-value keywords. 340% increase in consultation requests.' },
  { client: 'eCommerce Client', metric: '+428%', label: 'Revenue from Organic Search', desc: 'From $8K to $42K monthly organic revenue. 1,200+ product keywords ranking.' },
];

const plans = [
  { name: 'LOCAL SEO', price: '$499', period: '/month', desc: 'Perfect for local businesses wanting to dominate their city.', features: ['10 Target Keywords', 'Google Business Profile', 'Citation Building', 'On-Page Optimization', 'Monthly Reporting', 'Competitor Analysis'], cta: 'Get Started', id: 'seo-local-cta' },
  { name: 'GROWTH SEO', price: '$999', period: '/month', desc: 'For businesses ready to scale their organic traffic significantly.', features: ['30 Target Keywords', 'On-Page + Technical SEO', '4 Blog Posts/Month', 'Link Building', 'Rank Tracking', 'Dedicated Strategist'], cta: 'Get Started — Most Popular', id: 'seo-growth-cta', featured: true },
  { name: 'ENTERPRISE SEO', price: '$2,999', period: '/month', desc: 'Full SEO program for competitive markets and large sites.', features: ['Unlimited Keywords', '8+ Blog Posts/Month', 'Aggressive Link Building', 'Dedicated SEO Manager', 'Full Technical Audits', 'Priority Support'], cta: 'Contact Sales', id: 'seo-enterprise-cta' },
];

const faqs = [
  { q: 'How long before I see SEO results?', a: 'Most clients see meaningful ranking improvements within 3-4 months. Significant traffic and lead increases typically appear by month 5-6. SEO is a long-term investment — the results compound over time.' },
  { q: 'Do you guarantee first-page rankings?', a: "No ethical SEO company can guarantee specific rankings — Google's algorithm controls that. What we guarantee is executing proven strategies, transparent reporting, and relentless optimization. Our 92% page-1 success rate speaks for itself." },
  { q: 'Is SEO worth it for small businesses?', a: 'Absolutely. Local SEO is one of the highest-ROI marketing channels for small businesses. Ranking locally for service keywords puts you in front of customers actively searching for what you offer — with zero cost-per-click.' },
  { q: "What's included in your monthly SEO reports?", a: "Keyword ranking changes, organic traffic trends, backlinks earned, technical issues fixed, content published, competitor movements, and a plain-English summary of what we did and what's next." },
];

export default function SEOServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="hero-grid-overlay" />
        <div className="container hero-content">
          <div className="breadcrumb" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 3 }}>
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>SEO Services</span>
          </div>
          <div className="hero-split">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                SEO Services
              </div>
              <h1>SEO Services That Put Your Business on <span className="gradient-text">Page 1 and Keep It There</span></h1>
              <p className="hero-sub">Our data-driven SEO strategies combine technical excellence, strategic content, and authoritative link building to drive qualified organic traffic that converts. We build sustainable rankings that generate leads for years.</p>
              <div className="hero-actions">
                <Link href="/free-website-audit" className="btn btn-primary btn-lg" id="seo-hero-cta">Get Your Free SEO Audit — $0 →</Link>
                <Link href="/case-studies" className="btn btn-secondary btn-lg">View SEO Case Studies</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="mockup-glow mockup-glow-green" />
              <div className="mockup-glow mockup-glow-blue" />
              
              {/* Browser chrome frame */}
              <div className="hero-image-frame" style={{ width: '100%', zIndex: 1, position: 'relative' }}>
                <div className="hero-browser-bar">
                  <span className="hero-browser-dot hero-browser-dot-red" />
                  <span className="hero-browser-dot hero-browser-dot-yellow" />
                  <span className="hero-browser-dot hero-browser-dot-green" />
                  <div className="hero-browser-url">internativelabs.com/services/seo</div>
                </div>
                <img
                  src="/images/lawfirm-screenshot.png"
                  alt="SEO Rankings Dashboard"
                  className="hero-image"
                  style={{ width: '100%', height: 'auto', display: 'block', marginTop: 0 }}
                />
              </div>
              
              <div className="hero-float-1">
                <FloatingCard icon="📈" value="+187%" label="Traffic Increase" color="#72c192" />
              </div>
              <div className="hero-float-2">
                <FloatingCard icon="🏆" value="Rank #1" label="Organic Dominance" color="#5ac0ec" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--brand-dark)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[['92%','Clients Reach Page 1'],['187%','Avg Traffic Increase'],['300+','SEO Campaigns'],['White-Hat','Google Compliant']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#7ec8e3', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, whiteSpace: 'nowrap' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Services Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our SEO Services</span>
            <h2>A Complete SEO Solution — <span className="gradient-text">Not Just Keywords</span></h2>
          </div>
          <div className="services-grid">
            {seoServices.map(s => {
              const IconComponent = s.icon;
              return (
                <div key={s.title} className="service-card">
                  <div className="service-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--brand)' }}>
                    <IconComponent size={24} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section" style={{ background: 'var(--brand)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>Real Results</span>
            <h2 style={{ color: '#fff' }}>Real Results from <span className="gradient-text">Real Clients</span></h2>
          </div>
          <div className="grid-3">
            {caseStudies.map(c => (
              <div key={c.client} className="result-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{c.client}</div>
                <div className="result-metric">{c.metric}</div>
                <div className="result-label">{c.label}</div>
                <div className="result-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section-with-pattern" style={{ background: 'var(--bg-gray)' }}>
        <SectionPattern opacity={0.03} color="#5ac0ec" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">SEO Pricing</span>
            <h2>Transparent Monthly <span className="gradient-text">SEO Plans</span></h2>
          </div>
          <div className="pricing-grid">
            {plans.map(p => (
              <div key={p.name} className={`pricing-card${p.featured ? ' featured' : ''}`}>
                {p.featured && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-tier">{p.name}</div>
                <div className="pricing-price">{p.price}</div>
                <div className="pricing-period">{p.period}</div>
                <div className="pricing-desc">{p.desc}</div>
                <ul className="pricing-features">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
                <Link href="/free-consultation" className={`btn btn-lg${p.featured ? '' : ' btn-outline'}`} id={p.id}
                  style={p.featured ? { background: '#fff', color: 'var(--dark)', display: 'block', textAlign: 'center', fontWeight: 700 } : { display: 'block', textAlign: 'center' }}>
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Common SEO <span className="gradient-text">Questions Answered</span></h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: 'var(--bg-gray)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--brand)', marginBottom: '0.8rem' }}>{f.q}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Start Ranking Higher — Get Your Free SEO Audit</h2>
            <p>We'll analyze your website's SEO health and show you exactly what's holding you back from page 1.</p>
            <div className="cta-buttons">
              <Link href="/free-website-audit" className="btn btn-primary btn-lg" id="seo-final-cta">Get Free SEO Audit →</Link>
              <Link href="/services/local-seo" className="btn btn-secondary btn-lg">Explore Local SEO</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
