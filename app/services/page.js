import Link from 'next/link';

export const metadata = {
  title: 'Digital Agency Services | Web, Mobile, SEO & Marketing',
  description:
    'Explore all services from InterNative Labs: web development, mobile apps, SEO, digital marketing, design, and video. Everything you need to win online under one roof.',
  alternates: { canonical: 'https://www.internativelabs.com/services' },
};

const allServices = [
  {
    category: 'Web & App Development',
    color: '#1A3C6E',
    items: [
      { icon: '🌐', title: 'Web Development', desc: 'Custom websites, eCommerce stores, and enterprise web apps built for performance.', href: '/services/web-development', price: 'From $1,500' },
      { icon: '🛒', title: 'eCommerce Development', desc: 'Shopify, WooCommerce, Magento stores that convert browsers into buyers.', href: '/services/ecommerce-development', price: 'From $5,000' },
      { icon: '📝', title: 'WordPress Development', desc: 'Powerful, easy-to-manage WordPress websites for businesses of all sizes.', href: '/services/wordpress-development', price: 'From $1,500' },
      { icon: '⚙️', title: 'Custom Web Applications', desc: 'SaaS platforms, portals, dashboards, and booking systems.', href: '/services/custom-web-applications', price: 'From $8,000' },
      { icon: '📱', title: 'Mobile App Development', desc: 'iOS, Android, and cross-platform apps built for performance and scale.', href: '/services/mobile-app-development', price: 'From $12,000' },
      { icon: '🍎', title: 'iOS App Development', desc: 'Native Swift apps built for the App Store with full Apple feature access.', href: '/services/ios-app-development', price: 'From $15,000' },
      { icon: '🤖', title: 'Android App Development', desc: 'Native Kotlin Android apps ready for Google Play.', href: '/services/android-app-development', price: 'From $12,000' },
      { icon: '⚡', title: 'Cross-Platform Apps', desc: 'React Native & Flutter apps for iOS + Android from one codebase.', href: '/services/cross-platform-apps', price: 'From $18,000' },
    ],
  },
  {
    category: 'SEO & Digital Marketing',
    color: '#27AE60',
    items: [
      { icon: '🔍', title: 'SEO Services', desc: 'Complete SEO strategy: on-page, technical, content & link building.', href: '/services/seo', price: 'From $599/mo' },
      { icon: '📍', title: 'Local SEO', desc: 'Dominate local search results and Google Maps in your city.', href: '/services/local-seo', price: 'From $599/mo' },
      { icon: '⚙️', title: 'Technical SEO', desc: 'Core Web Vitals, crawlability, indexation, and site speed optimization.', href: '/services/technical-seo', price: 'From $799/mo' },
      { icon: '🛒', title: 'eCommerce SEO', desc: 'Product page optimization, category SEO, and organic revenue growth.', href: '/services/ecommerce-seo', price: 'From $999/mo' },
      { icon: '📣', title: 'Social Media Marketing', desc: 'Engaging social content and community management across all platforms.', href: '/services/social-media-marketing', price: 'From $499/mo' },
      { icon: '💰', title: 'PPC & Paid Advertising', desc: 'Google Ads, Facebook Ads, and paid campaigns that generate ROI.', href: '/services/ppc-advertising', price: 'From $399/mo' },
      { icon: '📝', title: 'Content Marketing', desc: 'SEO blog content, pillar pages, and topic clusters that build authority.', href: '/services/content-marketing', price: 'From $799/mo' },
      { icon: '📧', title: 'Email Marketing', desc: 'Campaigns, automation, list management, and A/B testing.', href: '/services/email-marketing', price: 'From $399/mo' },
    ],
  },
  {
    category: 'Design & Creative',
    color: '#9B59B6',
    items: [
      { icon: '🎨', title: 'UI/UX Design', desc: 'User research, wireframes, prototypes, and polished UI design.', href: '/services/ui-ux-design', price: 'From $2,000' },
      { icon: '✏️', title: 'Graphic Design', desc: '15+ graphics/month for social media, ads, and presentations.', href: '/services/graphic-design', price: 'From $599/mo' },
      { icon: '🏷️', title: 'Logo & Branding', desc: 'Logo, color palette, typography, and comprehensive brand guide.', href: '/services/logo-branding', price: 'From $800' },
      { icon: '🎬', title: 'Video & Animation', desc: 'Explainer videos, motion graphics, and product demos.', href: '/services/video-animation', price: 'From $1,200' },
    ],
  },
  {
    category: 'Growth & Optimization',
    color: '#E67E22',
    items: [
      { icon: '📈', title: 'Conversion Rate Optimization', desc: 'A/B testing, UX improvements, and funnel optimization.', href: '/services/cro', price: 'From $799/mo' },
      { icon: '🖥️', title: 'Web Hosting & Maintenance', desc: 'Security updates, backups, uptime monitoring, and support.', href: '/services/hosting-maintenance', price: '$199/mo' },
      { icon: '💼', title: 'Digital Marketing Consulting', desc: 'Strategy sessions, audits, and roadmap planning with senior experts.', href: '/services/consulting', price: 'From $200/hr' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Services</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>All Services</span>
          <h1>Everything You Need to <span className="gradient-text">Win Online</span></h1>
          <p>From strategy and design to development and marketing — 22+ specialized services under one roof, all focused on growing your business.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id="services-hero-cta">Get a Free Consultation →</Link>
            <Link href="/pricing" className="btn btn-secondary btn-lg">View Pricing</Link>
          </div>
        </div>
      </section>

      {allServices.map((cat, ci) => (
        <section key={cat.category} className="section" style={{ background: ci % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-gray)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label" style={{ color: cat.color, borderColor: `${cat.color}40`, background: `${cat.color}12` }}>
                {cat.category}
              </span>
              <h2 style={{ color: 'var(--brand)' }}>{cat.category}</h2>
            </div>
            <div className="services-grid">
              {cat.items.map(s => (
                <div key={s.href} className="service-card">
                  <div className="service-icon" style={{ background: `${cat.color}15` }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: cat.color }}>{s.price}</span>
                    <Link href={s.href} className="service-card-link" id={`service-${s.title.toLowerCase().replace(/[\s/&]+/g, '-')}`}>Learn More →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Not Sure Which Service You Need?</h2>
            <p>Talk to our team — we'll analyze your business and recommend the exact mix of services to reach your goals.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="services-final-cta">Get a Free Strategy Session →</Link>
              <Link href="/free-website-audit" className="btn btn-secondary btn-lg">Get a Free Website Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
