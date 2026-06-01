import Link from 'next/link';
import { FiStar, FiCheckCircle, FiAward } from 'react-icons/fi';

export const metadata = {
  title: 'Client Reviews & Verified Testimonials | InterNative Labs',
  description: 'Read verified testimonials from business owners, healthcare networks, and lawyers in Lawrenceville and beyond. 4.9★ average rating.',
  alternates: { canonical: 'https://www.internativelabs.com/testimonials' },
};

const reviews = [
  {
    name: 'James T.',
    role: 'CEO, RetailEdge USA',
    initials: 'JT',
    stars: 5,
    text: 'InterNative Labs rebuilt our e-commerce store from scratch. Within 3 months, organic traffic increased by 180% and our conversion rate doubled. Absolutely incredible ROI.',
    verified: true,
    service: 'eCommerce Development & SEO'
  },
  {
    name: 'Dr. Sarah M.',
    role: 'Founder, MedConnect Telehealth',
    initials: 'SM',
    stars: 5,
    text: 'They delivered our healthcare application ahead of schedule and the code quality is outstanding. HIPAA compliance was perfectly handled. The best tech partner we have worked with.',
    verified: true,
    service: 'Mobile App Development'
  },
  {
    name: 'Mark D.',
    role: 'Partner, LawFirm Pro Partners',
    initials: 'MD',
    stars: 5,
    text: 'Our Google rankings went from page 5 to position #2 for our most competitive local keyword in under 6 months. Client consultation requests rose by 340%. Highly recommended.',
    verified: true,
    service: 'Local SEO & Branding'
  },
  {
    name: 'David L.',
    role: 'Managing Broker, Avenue Homes',
    initials: 'DL',
    stars: 5,
    text: 'The custom IDX map search they built has been a complete game changer. We are now capturing listing leads at a fraction of Zillows cost. Dynamic real estate leaders.',
    verified: true,
    service: 'Real Estate IDX Web Development'
  },
  {
    name: 'Maria S.',
    role: 'Owner, Gourmet Bistro Group',
    initials: 'MS',
    stars: 5,
    text: 'We stopped paying massive 30% commission cuts to UberEats. The direct ordering menu they built works perfectly on mobile and our direct local sales have skyrocketed.',
    verified: true,
    service: 'Commission-Free Menu Development'
  },
  {
    name: 'John R.',
    role: 'Co-Founder, CloudSync SaaS',
    initials: 'JR',
    stars: 5,
    text: 'Modern, high-converting glassmorphic landing pages that completely transformed our trial signup numbers (+45% lift in 90 days). Outstanding Next.js developers.',
    verified: true,
    service: 'SaaS Design & Development'
  },
  {
    name: 'Rachel G.',
    role: 'Marketing Director, Aura Cosmetics',
    initials: 'RG',
    stars: 5,
    text: 'Their design team did an outstanding job capturing our brand aesthetic. From custom vector icons to beautiful packaging guidelines, they nailed every asset.',
    verified: true,
    service: 'Logo & Graphic Branding'
  },
  {
    name: 'Robert H.',
    role: 'Product Lead, Apex Fitness',
    initials: 'RH',
    stars: 5,
    text: 'Outstanding Flutter app developers. They synced our Bluetooth BLE companion tracker with both Apple Health and Google Fit effortlessly. Clean, well-documented code.',
    verified: true,
    service: 'Cross-Platform App Development'
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'InterNative Labs Digital Services',
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.9',
              'reviewCount': '85'
            }
          })
        }}
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Testimonials</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <FiStar size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Verified Reviews
          </span>
          <h1>Success Stories from <span className="gradient-text">Our Clients</span></h1>
          <p>
            We let our results do the talking. Read verified reviews from funded startups, legal offices, and small business owners who trust InterNative Labs.
          </p>
        </div>
      </section>

      {/* Aggregate Rating Banner */}
      <section style={{ background: 'var(--brand-dark)', padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1 }}>4.9★</div>
              <div style={{ color: '#7ec8e3', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 6 }}>Google Rating</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '0 4rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1 }}>97%</div>
              <div style={{ color: '#7ec8e3', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 6 }}>Retention Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1 }}>500+</div>
              <div style={{ color: '#7ec8e3', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 6 }}>Projects Shipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3 animate-fadeUp">
            {reviews.map(r => (
              <div key={r.name} className="testimonial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div className="testimonial-stars">{'★'.repeat(r.stars)}</div>
                    {r.verified && (
                      <span style={{ fontSize: '0.72rem', background: 'rgba(39,174,96,0.1)', color: 'var(--success)', padding: '3px 8px', borderRadius: 99, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <FiCheckCircle size={12} /> VERIFIED
                      </span>
                    )}
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '1.5rem'
                  }}>
                    "{r.text}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div className="testimonial-avatar" style={{ background: 'var(--brand)', width: 40, height: 40 }}>{r.initials}</div>
                  <div>
                    <div className="testimonial-name" style={{ fontSize: '0.88rem' }}>{r.name}</div>
                    <div className="testimonial-role" style={{ fontSize: '0.78rem' }}>{r.role}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600, marginTop: 2 }}>{r.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust awards block */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">AWARDS &amp; RECOGNITION</span>
            <h2>Top Rated Lawrenceville Agency</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.85 }}>
            {['Top Web Developers Clutch', 'Google Certified Partner', 'DesignRush Accredited Agency', 'HubSpot Agency Partner'].map(badge => (
              <div key={badge} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand)', background: 'var(--dark)', border: '1px solid var(--border)', padding: '12px 24px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiAward size={18} style={{ color: 'var(--accent)' }} /> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final block */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Be Our Next Success Story?</h2>
            <p>Work with an agency that is accountable for metrics. Speak with our digital strategy directors today for a custom scope blueprint.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="testimonial-page-cta">
                Book Free Consultation Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
