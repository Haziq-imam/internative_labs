import Link from 'next/link';

export const metadata = {
  title: 'Client Success Stories & SEO Case Studies | InterNative Labs',
  description: 'Read detailed case studies showing how we help retail stores, healthcare startups, and law practices grow traffic, secure leads, and increase sales.',
  alternates: { canonical: 'https://www.internativelabs.com/case-studies' },
};

const caseStudies = [
  {
    client: 'RetailEdge USA',
    industry: 'eCommerce & Retail',
    metric: '+180% Organic Traffic Lift',
    subMetric: '2.1x Conversion Rate Increase',
    tags: ['Shopify Redesign', 'Speed Optimization', 'Product SEO'],
    challenge: 'RetailEdge came to us with declining organic sales and high customer acquisition costs. Their existing storefront was slow, resulting in high bounce rates and checkout drop-offs.',
    solution: 'We fully redesigned the custom Shopify storefront, optimizing Core Web Vitals to load under 1.8 seconds. We restructured product categorizations, wrote keyword-optimized descriptions, and streamlined their checkout flow into a single step.',
    result: 'Within 3 months, organic traffic skyrocketed by 180%. E-commerce conversion rate lifted by 2.1x, resulting in over $34,000 in monthly organic revenue.',
    icon: '🛒',
    color: 'var(--brand)'
  },
  {
    client: 'MedConnect Telehealth',
    industry: 'Healthcare Providers',
    metric: '+312% Patient Consults',
    subMetric: '4.8★ App Store Rating',
    tags: ['HIPAA Apps', 'WebRTC Integrations', 'Swift & Kotlin'],
    challenge: 'MedConnect wanted to deploy a secure mobile solution for patient remote consultations. Their existing prototype suffered from frequent app crashes and interface confusion.',
    solution: 'We designed and engineered native iOS and Android apps using Swift and Kotlin, featuring highly secure WebRTC peer-to-peer video streaming. We implemented end-to-end encryption compliant with HIPAA standards and streamlined scheduling workflows.',
    result: 'The apps launched on both stores with a 99.9% crash-free rate. Within 6 months, remote consulting sessions rose by 312% with over 100k patients served.',
    icon: '🏥',
    color: '#27AE60'
  },
  {
    client: 'LawFirm Pro Partners',
    industry: 'Legal & Law Firms',
    metric: '+340% Consultation Requests',
    subMetric: 'Rank #1 For High-Value Terms',
    tags: ['Attorney SEO', 'Google Maps Optimization', 'Intake Portals'],
    challenge: 'A trial law firm in Lawrenceville was spending heavily on pay-per-click ads with low conversion rates. They were virtually invisible in organic Google Map local pack listings.',
    solution: 'We launched a relentless Local SEO strategy. We audited and corrected their citations, optimized their Google Business Profile, wrote legal blogs answering common local litigation questions, and deployed a secure intake form.',
    result: 'Rankings rose to #1 locally for their competitive target keywords, driving a 340% increase in consultation request forms with zero ongoing ad spend.',
    icon: '⚖️',
    color: '#F39C12'
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Case Studies</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            📈 Business Outcomes
          </span>
          <h1>Proven Results for <span className="gradient-text">Real Businesses</span></h1>
          <p>
            We don't just deliver pages; we build revenue machines. Check out our client deep-dives across healthcare, legal, and retail spaces.
          </p>
        </div>
      </section>

      {/* Case studies index */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {caseStudies.map((study, idx) => (
            <div
              key={study.client}
              className="case-study-grid"
              style={{
                background: 'var(--bg-gray)',
                border: '1px solid var(--border)',
                borderRadius: 28,
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: '4rem',
                alignItems: 'center',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
                  <div style={{
                    width: 50, height: 50,
                    borderRadius: 12,
                    background: `${study.color}15`,
                    color: study.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem'
                  }}>
                    {study.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--brand)' }}>{study.client}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{study.industry}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
                  {study.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.75rem', background: 'var(--bg-gray)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: 4, color: 'var(--text-muted)', fontWeight: 500 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                  <div>
                    <strong style={{ color: 'var(--brand)', display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>⚠️ The Challenge:</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{study.challenge}</p>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--success)', display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>💡 Our Solution:</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{study.solution}</p>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent)', display: 'block', fontSize: '0.9rem', marginBottom: 4 }}>📈 The Results:</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{study.result}</p>
                  </div>
                </div>

                <Link href="/free-consultation" className="btn btn-primary" id={`${study.client.toLowerCase().replace(/\s+/g, '-')}-cs-cta`}>
                  Achieve Similar Outcomes →
                </Link>
              </div>

              {/* Data Dashboard Card */}
              <div
                style={{
                  order: idx % 2 === 0 ? 2 : 1,
                  background: 'var(--gradient-brand)',
                  color: '#fff',
                  borderRadius: 20,
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-brand)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Campaign Result</h4>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.3rem', fontWeight: 900, color: '#7ec8e3', lineHeight: 1.1, marginBottom: 8 }}>
                  {study.metric}
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '2rem' }}>
                  {study.subMetric}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                  Verified 6-Month Campaign Audit Summary
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Get a completely free website speed and SEO audit or book a consultation call with one of our Lawrenceville digital experts today.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="cs-final-consult">Speak with an Expert →</Link>
              <Link href="/free-website-audit" className="btn btn-secondary btn-lg">Claim Free Website Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
