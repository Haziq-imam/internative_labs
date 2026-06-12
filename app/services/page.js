import Link from 'next/link';
import {
  FiGlobe, FiSmartphone, FiSearch, FiTrendingUp, FiLayout, FiVideo,
  FiShoppingCart, FiFileText, FiSettings, FiMail, FiMessageSquare, FiDollarSign,
  FiPenTool, FiTag, FiMonitor, FiBriefcase, FiZap, FiMapPin
} from 'react-icons/fi';
import { FaApple, FaAndroid } from 'react-icons/fa';

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
      { icon: FiGlobe, title: 'Web Development', desc: 'Custom websites, eCommerce stores, and enterprise web apps built for performance.', href: '/services/web-development', price: 'From $1,500' },
      { icon: FiShoppingCart, title: 'eCommerce Development', desc: 'Shopify, WooCommerce, Magento stores that convert browsers into buyers.', href: '/services/ecommerce-development', price: 'From $5,000' },
      { icon: FiFileText, title: 'WordPress Development', desc: 'Powerful, easy-to-manage WordPress websites for businesses of all sizes.', href: '/services/wordpress-development', price: 'From $1,500' },
      { icon: FiSettings, title: 'Custom Web Applications', desc: 'SaaS platforms, portals, dashboards, and booking systems.', href: '/services/custom-web-applications', price: 'From $8,000' },
      { icon: FiSmartphone, title: 'Mobile App Development', desc: 'iOS, Android, and cross-platform apps built for performance and scale.', href: '/services/mobile-app-development', price: 'From $12,000' },
      { icon: FaApple, title: 'iOS App Development', desc: 'Native Swift apps built for the App Store with full Apple feature access.', href: '/services/ios-app-development', price: 'From $15,000' },
      { icon: FaAndroid, title: 'Android App Development', desc: 'Native Kotlin Android apps ready for Google Play.', href: '/services/android-app-development', price: 'From $12,000' },
      { icon: FiZap, title: 'Cross-Platform Apps', desc: 'React Native & Flutter apps for iOS + Android from one codebase.', href: '/services/cross-platform-apps', price: 'From $18,000' },
    ],
  },
  {
    category: 'SEO & Digital Marketing',
    color: '#27AE60',
    items: [
      { icon: FiSearch, title: 'SEO Services', desc: 'Complete SEO strategy: on-page, technical, content & link building.', href: '/services/seo', price: 'From $599/mo' },
      { icon: FiMapPin, title: 'Local SEO', desc: 'Dominate local search results and Google Maps in your city.', href: '/services/local-seo', price: 'From $599/mo' },
      { icon: FiSettings, title: 'Technical SEO', desc: 'Core Web Vitals, crawlability, indexation, and site speed optimization.', href: '/services/technical-seo', price: 'From $799/mo' },
      { icon: FiShoppingCart, title: 'eCommerce SEO', desc: 'Product page optimization, category SEO, and organic revenue growth.', href: '/services/ecommerce-seo', price: 'From $999/mo' },
      { icon: FiMessageSquare, title: 'Social Media Marketing', desc: 'Engaging social content and community management across all platforms.', href: '/services/social-media-marketing', price: 'From $499/mo' },
      { icon: FiDollarSign, title: 'PPC & Paid Advertising', desc: 'Google Ads, Facebook Ads, and paid campaigns that generate ROI.', href: '/services/ppc-advertising', price: 'From $399/mo' },
      { icon: FiFileText, title: 'Content Marketing', desc: 'SEO blog content, pillar pages, and topic clusters that build authority.', href: '/services/content-marketing', price: 'From $799/mo' },
      { icon: FiMail, title: 'Email Marketing', desc: 'Campaigns, automation, list management, and A/B testing.', href: '/services/email-marketing', price: 'From $399/mo' },
    ],
  },
  {
    category: 'Design & Creative',
    color: '#9B59B6',
    items: [
      { icon: FiLayout, title: 'UI/UX Design', desc: 'User research, wireframes, prototypes, and polished UI design.', href: '/services/ui-ux-design', price: 'From $2,000' },
      { icon: FiPenTool, title: 'Graphic Design', desc: '15+ graphics/month for social media, ads, and presentations.', href: '/services/graphic-design', price: 'From $599/mo' },
      { icon: FiTag, title: 'Logo & Branding', desc: 'Logo, color palette, typography, and comprehensive brand guide.', href: '/services/logo-branding', price: 'From $800' },
      { icon: FiVideo, title: 'Video & Animation', desc: 'Explainer videos, motion graphics, and product demos.', href: '/services/video-animation', price: 'From $1,200' },
    ],
  },
  {
    category: 'Growth & Optimization',
    color: '#E67E22',
    items: [
      { icon: FiTrendingUp, title: 'Conversion Rate Optimization', desc: 'A/B testing, UX improvements, and funnel optimization.', href: '/services/cro', price: 'From $799/mo' },
      { icon: FiMonitor, title: 'Web Hosting & Maintenance', desc: 'Security updates, backups, uptime monitoring, and support.', href: '/services/hosting-maintenance', price: '$199/mo' },
      { icon: FiBriefcase, title: 'Digital Marketing Consulting', desc: 'Strategy sessions, audits, and roadmap planning with senior experts.', href: '/services/consulting', price: 'From $200/hr' },
    ],
  },
];

export default function ServicesPage() {
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
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Services</span>
          </div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            All Services
          </div>
          <h1>Everything You Need to <span className="gradient-text">Win Online</span></h1>
          <p className="hero-sub">From strategy and design to development and marketing — 22+ specialized services under one roof, all focused on growing your business.</p>
          <div className="hero-actions">
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
              {cat.items.map(s => {
                const IconComponent = s.icon;
                return (
                  <div key={s.href} className="service-card">
                    <div className="service-icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                      <IconComponent size={22} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: cat.color }}>{s.price}</span>
                      <Link href={s.href} className="service-card-link" id={`service-${s.title.toLowerCase().replace(/[\s/&]+/g, '-')}`}>Learn More →</Link>
                    </div>
                  </div>
                );
              })}
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
