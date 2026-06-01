import Link from 'next/link';
import { FiAlertTriangle, FiLock } from 'react-icons/fi';

const legalData = {
  'privacy-policy': {
    title: 'Privacy Policy & Data Security',
    meta: 'Privacy policy and database security regulations followed by InterNative Labs LLC. Learn how we safeguard your corporate data files.',
    content: `
      <h2>1. Information We Collect</h2>
      <p>We collect corporate details, website speed parameters, email address registrations, and project consultation parameters submitted via our free website audit forms and schedules.</p>

      <h2>2. Database Security</h2>
      <p>All database files, patient telemedicine video encryptions, and intake portal submissions are secured using standard SSL certificates and hosted within HIPAA-compliant, encrypted AWS/GCP servers.</p>

      <h2>3. Third-Party Sharing</h2>
      <p>We do not sell, rent, or lease your corporate email addresses or search metrics to third-party marketing companies. All data is handled exclusively by the technical directors at InterNative Labs.</p>

      <h2>4. User Rights & Data Deletion</h2>
      <p>Under GDPR and CCPA guidelines, you have the absolute right to request access to or deletion of your corporate contact profiles. Contact our database operations office at security@internativelabs.com.</p>
    `
  },
  'terms': {
    title: 'Terms of Service Agreement',
    meta: 'Terms of service and contract structures for custom software development and monthly SEO retainers with InterNative Labs.',
    content: `
      <h2>1. Project Milestones & Payouts</h2>
      <p>All custom web design, mobile app, and software engineering builds are executed under flat, fixed-cost quotes with clearly outlined milestone payments. Work begins upon milestone authorization.</p>

      <h2>2. Code Ownership</h2>
      <p>Upon final contract payout, 100% of custom frontend Next.js code, native mobile Swift/Kotlin files, database architectures, and graphical assets are fully transferred as intellectual property to the client.</p>

      <h2>3. Retainer SEO Scopes</h2>
      <p>Local and eCommerce SEO campaigns are billed on a month-to-month basis with zero lock-in contracts. Either party may terminate or alter the campaign scope with a 30-day email notification.</p>

      <h2>4. Service SLA & Host Maintenance</h2>
      <p>Managed hosting packages ($199/month) come with a 99.9% server uptime guarantee. Bug fixes and priority content alterations are addressed within standard 24-hour turnaround windows.</p>
    `
  },
  'cookie-policy': {
    title: 'Cookie Utilization Policy',
    meta: 'Cookie utilization guidelines. Learn how secure cookies are used to speed up pages and audit user onboarding experiences.',
    content: `
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small secure text files saved onto your local web browsers to keep track of preferences, speed up layout paint times, and understand interaction drops.</p>

      <h2>2. Strictly Necessary Cookies</h2>
      <p>These secure session cookies are mandatory to keep your login states active on custom portals, store secure items in cart drawers, and route secure API form submissions.</p>

      <h2>3. Performance Analytics</h2>
      <p>We use secure tracking cookies to record page load times and conversion paths, helping us identify sluggish pages and optimize user flows across our Lawrenceville agency portfolios.</p>

      <h2>4. Opting Out</h2>
      <p>You can adjust your native browser settings to reject cookie files or clear cache logs at any time. Opting out will not affect your ability to browse core agency pages.</p>
    `
  }
};

export function generateStaticParams() {
  return Object.keys(legalData).map(slug => ({ slug: [slug] }));
}

export function generateMetadata({ params }) {
  const slug = params.slug?.[0];
  const data = legalData[slug];
  if (!data) return { title: '404 Page Not Found | InterNative Labs' };
  return {
    title: `${data.title} | InterNative Labs`,
    description: data.meta,
    alternates: { canonical: `https://www.internativelabs.com/${slug}` },
  };
}

export default function CatchAllPage({ params }) {
  const slug = params.slug?.[0];
  const data = legalData[slug];

  if (!data) {
    // Elegant custom 404 layout
    return (
      <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container page-hero-content" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '6rem', marginBottom: '1rem', color: '#E74C3C' }}><FiAlertTriangle size={64} /></div>
          <span className="section-label" style={{ color: '#E74C3C', borderColor: 'rgba(231,76,60,0.3)', background: 'rgba(231,76,60,0.1)' }}>
            Error 404 · Page Not Found
          </span>
          <h1>We Lost This <span className="gradient-text">Connection</span></h1>
          <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
            The URL path you entered does not exist or has been relocated to a new optimized folder. Navigate through our complete sitemap to find what you need.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/" className="btn btn-primary btn-lg">Return Home →</Link>
            <Link href="/sitemap" className="btn btn-secondary btn-lg">Browse HTML Site Map</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Legal Information</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>{data.title}</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <FiLock size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Official Policy
          </span>
          <h1>{data.title}</h1>
          <p>
            Effective Date: May 31, 2026. Documenting our standards, security encryptions, and milestone policies at InterNative Labs.
          </p>
        </div>
      </section>

      {/* Policy Contents */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div
            style={{
              background: 'var(--bg-gray)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: '3rem 4rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8
              }}
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
      </section>

      {/* Trust final strip */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 650 }}>
          <h2 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Have Questions About Our Legal SLA?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We write clear, transparent agreements without fine print. Contact our operations director for any clarification regarding milestone copyrights or data policies.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Speak with Operations →
          </Link>
        </div>
      </section>
    </>
  );
}
