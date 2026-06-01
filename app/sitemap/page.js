import Link from 'next/link';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'HTML Site Map Directory | InterNative Labs',
  description: 'Navigate through all 50 pages of the InterNative Labs website. Clean structured directory of web, app, SEO, industry solutions, and support sections.',
  alternates: { canonical: 'https://www.internativelabs.com/sitemap' },
};

const mapData = [
  {
    category: 'Core Pages',
    links: [
      { name: 'Homepage (Build, Grow & Scale)', href: '/' },
      { name: 'About InterNative Labs', href: '/about' },
      { name: 'All Digital Services', href: '/services' },
      { name: 'Our Work & Portfolio', href: '/portfolio' },
      { name: 'Client Case Studies', href: '/case-studies' },
      { name: 'Transparent Service Pricing', href: '/pricing' },
      { name: 'Contact Our Lawrenceville Office', href: '/contact' }
    ]
  },
  {
    category: 'Conversion & Lead Gen',
    links: [
      { name: 'Book a Free Consultation', href: '/free-consultation' },
      { name: 'Get a Free 25-Point Website Audit', href: '/free-website-audit' }
    ]
  },
  {
    category: 'Core Services',
    links: [
      { name: 'Custom Web Development', href: '/services/web-development' },
      { name: 'Mobile App Development (iOS & Android)', href: '/services/mobile-app-development' },
      { name: 'Search Engine Optimization (SEO)', href: '/services/seo' }
    ]
  },
  {
    category: 'eCommerce & Development Services',
    links: [
      { name: 'eCommerce Store Development', href: '/services/ecommerce-development' },
      { name: 'WordPress Website CMS Development', href: '/services/wordpress-development' },
      { name: 'Custom SaaS Web Applications', href: '/services/custom-web-applications' },
      { name: 'Native iOS Swift Development', href: '/services/ios-app-development' },
      { name: 'Native Android Kotlin Development', href: '/services/android-app-development' },
      { name: 'Cross-Platform React Native & Flutter Apps', href: '/services/cross-platform-apps' }
    ]
  },
  {
    category: 'SEO & Growth Marketing Services',
    links: [
      { name: 'Local SEO & Google Maps Domination', href: '/services/local-seo' },
      { name: 'Technical SEO & Speed Auditing', href: '/services/technical-seo' },
      { name: 'eCommerce SEO Organic Sales', href: '/services/ecommerce-seo' },
      { name: 'Social Media Management & Campaigns', href: '/services/social-media-marketing' },
      { name: 'Pay-Per-Click Google & Social Ads', href: '/services/ppc-advertising' },
      { name: 'Content Marketing & Topical Clusters', href: '/services/content-marketing' },
      { name: 'Email Campaign Design & Automation', href: '/services/email-marketing' },
      { name: 'Conversion Rate Optimization (CRO)', href: '/services/cro' },
      { name: 'Digital Growth Retainer Consulting', href: '/services/consulting' }
    ]
  },
  {
    category: 'Creative Design Services',
    links: [
      { name: 'UI/UX Interactive System Design', href: '/services/ui-ux-design' },
      { name: 'Logo Design & Comprehensive Branding', href: '/services/logo-branding' },
      { name: 'Corporate Graphics & Media Deck Design', href: '/services/graphic-design' },
      { name: 'Explainer Video Editing & Animation', href: '/services/video-animation' }
    ]
  },
  {
    category: 'Industry-Specific Solutions',
    links: [
      { name: 'Digital Solutions for Healthcare & Clinics', href: '/industries/healthcare' },
      { name: 'Digital Solutions for Real Estate & Brokers', href: '/industries/real-estate' },
      { name: 'Digital Solutions for eCommerce & Retailers', href: '/industries/ecommerce-retail' },
      { name: 'Digital Solutions for Restaurants & Hospitality', href: '/industries/restaurants' },
      { name: 'Digital Solutions for Law Firms & Attorneys', href: '/industries/legal' },
      { name: 'Digital Solutions for SaaS & Tech Startups', href: '/industries/saas-tech' }
    ]
  },
  {
    category: 'Trust, News & Careers',
    links: [
      { name: 'Verified Client Reviews', href: '/testimonials' },
      { name: 'Awards, Rankings & Trust Credentials', href: '/awards' },
      { name: 'Meet Our In-House Engineering Team', href: '/team' },
      { name: 'Open Careers Positions', href: '/careers' },
      { name: 'Press Releases & News Bulletins', href: '/press' },
      { name: 'Referral Partnership Program (Earn 10%)', href: '/partners' },
      { name: 'FAQ & Client Support Center', href: '/faq' },
      { name: 'Managed Hosting & Website Maintenance', href: '/services/hosting-maintenance' }
    ]
  },
  {
    category: 'Technical & Legal',
    links: [
      { name: 'Privacy Policy & Data Security', href: '/privacy-policy' },
      { name: 'Terms of Service Agreements', href: '/terms' },
      { name: 'Cookie Utilization Policies', href: '/cookie-policy' },
      { name: 'HTML Site Map Directory (Current Page)', href: '/sitemap' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Site Map</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <FiGlobe size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Directory Hub
          </span>
          <h1>Structured Website <span className="gradient-text">Directory</span></h1>
          <p>
            Quickly locate and jump to any subpage across our core services, industry solutions, referral structures, and legal policies.
          </p>
        </div>
      </section>

      {/* Directory structure */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '3rem'
          }} className="animate-fadeUp">
            {mapData.map(group => (
              <div
                key={group.category}
                style={{
                  background: 'var(--bg-gray)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <h3 style={{
                  color: 'var(--brand)',
                  fontSize: '1.15rem',
                  borderBottom: '2px solid var(--light-blue)',
                  paddingBottom: '0.8rem',
                  marginBottom: '1.2rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700
                }}>
                  {group.category}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {group.links.map(l => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          transition: 'var(--transition-fast)'
                        }}
                        className="service-card-link"
                      >
                        <span style={{ color: 'var(--accent)', fontSize: '0.75rem' }}><FiArrowRight size={12} /></span>
                        <span>{l.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust final strip */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 650 }}>
          <h2 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Looking for a Custom Integration Scope?</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We draft bespoke architectural scopes for law firms, medical centers, and complex SaaS agencies. Schedule a free milestones consultation with our Lawrenceville executive team.
          </p>
          <Link href="/free-consultation" className="btn btn-primary btn-lg">
            Consult a Strategy Specialist Today →
          </Link>
        </div>
      </section>
    </>
  );
}
