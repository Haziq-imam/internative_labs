import Link from 'next/link';
import { FiAward, FiStar, FiShoppingCart, FiSmartphone, FiSearch, FiLock } from 'react-icons/fi';
import { FaMedal } from 'react-icons/fa';

export const metadata = {
  title: 'Awards & Industry Recognition | InterNative Labs',
  description: 'View the awards, official certifications, and technical rankings achieved by InterNative Labs. Certified Google Partner and Clutch Top Web Developers.',
  alternates: { canonical: 'https://www.internativelabs.com/awards' },
};

const awards = [
  {
    title: 'Top Web Developers Lawrenceville',
    issuer: 'Clutch Agency Rankings',
    year: '2026',
    desc: 'Ranked as the #1 custom software and web systems development team in Lawrenceville and Gwinnett County based on verified client feedback.',
    icon: FiAward,
    color: 'var(--brand)'
  },
  {
    title: 'Certified Google Ads Partner',
    issuer: 'Google Partner Network',
    year: 'Active',
    desc: 'Verified certification for search engine PPC ad management. Maintaining consistent campaign optimization standards and client ROAS metrics.',
    icon: FiStar,
    color: 'var(--accent)'
  },
  {
    title: 'Top eCommerce Developers GA',
    issuer: 'DesignRush Authority',
    year: '2025',
    desc: 'Awarded for technical excellence in custom Shopify API systems, high-converting WooCommerce speed optimizations, and headless retail carts.',
    icon: FiShoppingCart,
    color: '#27AE60'
  },
  {
    title: 'Top Mobile App Agency',
    issuer: 'AppFutura Rankings',
    year: '2026',
    desc: 'Acknowledged for native iOS Swift and Android cross-platform React Native / Flutter apps with 99.9% crash-free sessions.',
    icon: FiSmartphone,
    color: '#E74C3C'
  },
  {
    title: 'Official HubSpot Agency Partner',
    issuer: 'HubSpot Ecosystem',
    year: 'Active',
    desc: 'Certified technical integration partner for customer database sync, CRM workflows, and email automation integrations.',
    icon: FaMedal,
    color: '#F39C12'
  },
  {
    title: 'Top Local SEO Agency Gwinnett',
    issuer: 'UpCity Directory',
    year: '2025',
    desc: 'Awarded for delivering exceptional organic Page 1 rankings and verified Google Maps growth for clinics and law firms.',
    icon: FiSearch,
    color: '#9B59B6'
  }
];

export default function AwardsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Our Trust</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Awards</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <FiAward size={14} /> Trust Badges
          </span>
          <h1>Accredited Digital <span className="gradient-text">Excellence</span></h1>
          <p>
            We don't just promise premium quality; we prove it. Explore the industry certificates, rankings, and official partnerships awarded to InterNative Labs.
          </p>
        </div>
      </section>

      {/* Awards grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3 animate-fadeUp">
            {awards.map(a => {
              const IconComponent = a.icon;
              return (
                <div key={a.title} className="service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <div className="service-icon" style={{ background: `${a.color}15`, color: a.color, marginBottom: 0, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={20} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: a.color,
                      background: `${a.color}12`,
                      padding: '3px 10px',
                      borderRadius: 99
                    }}>
                      {a.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--brand)', marginBottom: '0.3rem' }}>{a.title}</h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem' }}>
                    Issued by: {a.issuer}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 0 }}>
                    {a.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Logos Section */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Official Credentials</span>
            <h2>Our Tech Stack Certifications</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {['AWS Certified Cloud Practitioner', 'Google Analytics Individual Qualification', 'Shopify Plus Partner Badge', 'Next.js App Architect Accreditation', 'HIPAA Secure Cloud Compliance Certificate'].map(c => (
              <div key={c} style={{
                background: 'var(--dark)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '1.5rem 2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                fontWeight: 700,
                color: 'var(--brand)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <FiLock size={14} /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Work with an Accredited Team Today</h2>
            <p>Skip the subcontractors. Speak directly with our certified Google, Next.js, and HIPAA-compliant engineers in Lawrenceville, GA.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="awards-final-cta">
                Book Free Consultation Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
