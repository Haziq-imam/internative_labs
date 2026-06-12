import Link from 'next/link';
import FloatingCard from '@/components/FloatingCard';
import SectionPattern from '@/components/SectionPattern';

export const metadata = {
  title: 'Custom Web Development Services | InterNative Labs',
  description:
    'Professional web development services including corporate websites, eCommerce stores, and custom web applications. Fast, SEO-ready, and conversion-optimized. Get a free quote.',
  keywords:
    'web development services, custom website development, ecommerce development, wordpress development, web application development, InterNative Labs',
  alternates: { canonical: 'https://www.internativelabs.com/services/web-development' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development Services',
  provider: { '@type': 'Organization', name: 'InterNative Labs' },
  description: 'Custom web development including corporate websites, eCommerce, and web applications.',
  areaServed: 'US',
};

const solutions = [
  { type: 'Corporate Websites', best: 'Businesses needing a professional, credibility-building online presence' },
  { type: 'eCommerce Stores', best: 'Brands selling products online — Shopify, WooCommerce, Magento' },
  { type: 'Landing Pages', best: 'Marketing campaigns, lead generation, product launches' },
  { type: 'Web Applications', best: 'SaaS platforms, portals, dashboards, booking systems' },
  { type: 'WordPress Sites', best: 'Content-heavy sites needing easy CMS management' },
  { type: 'Headless CMS', best: 'High-performance frontends with flexible content management' },
];

const stack = [
  { cat: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'HTML5/CSS3'] },
  { cat: 'Backend', techs: ['Node.js', 'Laravel', 'Python/Django', 'Express.js'] },
  { cat: 'CMS', techs: ['WordPress', 'Shopify', 'Webflow', 'Contentful'] },
  { cat: 'eCommerce', techs: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento'] },
  { cat: 'Databases', techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { cat: 'Cloud', techs: ['AWS', 'Google Cloud', 'Vercel', 'Netlify'] },
];

const tiers = [
  { name: 'Startup Website', price: '$499', period: 'one-time', desc: 'Design, development, mobile-responsive, 5 pages contact form, basic SEO setup', features: ['5 Pages Design & Dev', 'Mobile-Responsive Layout', 'Contact Form Integration', 'Basic SEO Setup', 'Google Analytics Integration', '30 Days Support'], cta: 'Get Startup Quote', id: 'web-startup-cta' },
  { name: 'Business Website', price: '$999', period: 'one-time', desc: 'Custom design, CMS integration, advanced SEO, analytics, 10-20 pages, 3 months support', features: ['10-20 Pages CMS Website', 'Custom Design & Layout', 'Advanced SEO & Metadata', 'Analytics Dashboard Setup', 'Performance Optimization', '3 Months Support'], cta: 'Get Business Quote', id: 'web-business-cta', featured: true },
  { name: 'Professional Website', price: '$1,499', period: 'one-time', desc: 'Premium bespoke design, speed optimization, CMS, 20+ pages, custom animations', features: ['20+ Pages Bespoke Website', 'Premium Animations', 'Speed Optimization (Core Web Vitals)', 'Full CMS Controls', 'Advanced Integration Support', '6 Months Support'], cta: 'Get Professional Quote', id: 'web-professional-cta' },
];

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Starter websites typically take 2-4 weeks. Business websites take 4-8 weeks. Custom web applications range from 8-20 weeks depending on complexity. We provide detailed timelines during the discovery call.' },
  { q: 'Do you offer post-launch website maintenance?', a: 'Yes. Our maintenance packages include monthly security updates, performance monitoring, content updates, uptime monitoring, and priority bug fixes starting from $199/month.' },
  { q: 'Will my website rank on Google?', a: 'Every website we build follows SEO best practices including page speed optimization, clean URL structures, meta tags, schema markup, and mobile-first design. We can also pair web development with our full SEO service for maximum ranking impact.' },
  { q: 'Can you redesign my existing website?', a: "Absolutely. We offer full redesigns that preserve your existing SEO equity while modernizing design and improving performance. We'll audit your current site before making recommendations." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Web Development</span>
          </div>
          <div className="hero-split">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Web Development
              </div>
              <h1>Custom Web Development That Turns <span className="gradient-text">Visitors Into Customers</span></h1>
              <p className="hero-sub">We build fast, secure, and beautifully designed websites that perform in search engines and convert visitors into paying customers. Every line of code is written with business results in mind.</p>
              <div className="hero-actions">
                <Link href="/free-consultation" className="btn btn-primary btn-lg" id="webdev-hero-cta">Get a Free Website Proposal →</Link>
                <Link href="/portfolio" className="btn btn-secondary btn-lg">View Web Portfolio</Link>
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
                  <div className="hero-browser-url">internativelabs.com/services/web-development</div>
                </div>
                <img
                  src="/images/retailedge-screenshot.png"
                  alt="RetailEdge eCommerce Dashboard"
                  className="hero-image"
                  style={{ width: '100%', height: 'auto', display: 'block', marginTop: 0 }}
                />
              </div>
              
              <div className="hero-float-1">
                <FloatingCard icon="⚡" value="300+" label="Websites Built" color="#72c192" />
              </div>
              <div className="hero-float-2">
                <FloatingCard icon="🔒" value="< 2s" label="Avg Page Load" color="#5ac0ec" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <div style={{ background: 'var(--brand-dark)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[['300+','Websites Built'],['< 2s','Avg Page Load'],['98%','Client Satisfaction'],['Mobile-First','SEO-Ready']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#7ec8e3', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, whiteSpace: 'nowrap' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Build</span>
            <h2>Web Solutions for <span className="gradient-text">Every Business Need</span></h2>
          </div>
          <div className="grid-2">
            {solutions.map(s => (
              <div key={s.type} style={{ background: 'var(--bg-gray)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.4rem 1.8rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', marginTop: 6, flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--brand)', display: 'block', marginBottom: 4 }}>{s.type}</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section section-with-pattern" style={{ background: 'var(--bg-gray)' }}>
        <SectionPattern opacity={0.03} color="#5ac0ec" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technology Stack</span>
            <h2>Modern Technologies, <span className="gradient-text">Proven Results</span></h2>
          </div>
          <div className="tech-grid">
            {stack.map(s => (
              <div key={s.cat} className="tech-row">
                <span className="tech-category">{s.cat}</span>
                <div className="tech-tags">{s.techs.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>From Discovery to Launch — <span className="gradient-text">A Proven 5-Step Process</span></h2>
          </div>
          <div className="process-steps">
            {[
              { n: '01', t: 'Discovery & Strategy', d: 'Analyze business, competition & define goals, user flows, and technical requirements.' },
              { n: '02', t: 'UI/UX Design', d: 'Wireframes and high-fidelity mockups approved before writing a single line of code.' },
              { n: '03', t: 'Development', d: 'Agile sprints with weekly demos. Clean, documented code that scales.' },
              { n: '04', t: 'Testing & QA', d: 'Cross-browser, cross-device testing, security checks, accessibility compliance.' },
              { n: '05', t: 'Launch & Support', d: 'Smooth deployment with post-launch monitoring and ongoing optimization.' },
            ].map(s => (
              <div key={s.n} className="process-step">
                <div className="process-num">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Transparent Pricing</span>
            <h2>No Hidden Fees — <span className="gradient-text">Know What You're Getting</span></h2>
          </div>
          <div className="pricing-grid">
            {tiers.map(t => (
              <div key={t.name} className={`pricing-card${t.featured ? ' featured' : ''}`}>
                {t.featured && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-tier">{t.name}</div>
                <div className="pricing-price">{t.price}</div>
                <div className="pricing-period">{t.period}</div>
                <div className="pricing-desc">{t.desc}</div>
                <ul className="pricing-features">{t.features.map(f => <li key={f}>{f}</li>)}</ul>
                <Link href="/free-consultation" className={`btn btn-lg${t.featured ? '' : ' btn-outline'}`} id={t.id}
                  style={t.featured ? { background: '#fff', color: 'var(--dark)', display: 'block', textAlign: 'center', fontWeight: 700 } : { display: 'block', textAlign: 'center' }}>
                  {t.cta} →
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
            <h2>Common Questions About <span className="gradient-text">Web Development</span></h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: 'var(--bg-gray)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--brand)', marginBottom: '0.8rem' }}>{f.q}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links + CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Build Your Website?</h2>
            <p>Get a free proposal tailored to your project. No obligation, no pressure.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="webdev-final-cta">Get a Free Website Proposal →</Link>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
