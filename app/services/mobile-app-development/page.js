import Link from 'next/link';
import { FiSmartphone, FiShoppingCart, FiBook, FiZap } from 'react-icons/fi';
import { FaBuilding, FaPlusSquare, FaCar, FaApple, FaAndroid } from 'react-icons/fa';
import MockupPhone from '@/components/MockupPhone';
import FloatingCard from '@/components/FloatingCard';
import SectionPattern from '@/components/SectionPattern';

export const metadata = {
  title: 'Mobile App Development Company | iOS & Android | InterNative Labs',
  description:
    'Custom iOS and Android app development. We build native and cross-platform mobile apps for startups and enterprises. 150+ apps delivered. Get a free app quote today.',
  keywords:
    'mobile app development company, iOS app development, android app development, cross-platform app development, react native development, flutter development',
  alternates: { canonical: 'https://www.internativelabs.com/services/mobile-app-development' },
};

const appTypes = [
  { icon: FiSmartphone, title: 'Consumer Apps', desc: 'B2C apps for iOS & Android including on-demand services, marketplaces, and lifestyle apps.' },
  { icon: FaBuilding, title: 'Enterprise Mobile Apps', desc: 'Internal tools, field management, employee apps, and workflow automation.' },
  { icon: FiShoppingCart, title: 'mCommerce Apps', desc: 'Mobile shopping experiences integrated with existing eCommerce platforms.' },
  { icon: FaPlusSquare, title: 'Healthcare Apps', desc: 'HIPAA-compliant telemedicine, patient portals, and health tracking apps.' },
  { icon: FaCar, title: 'On-Demand Service Apps', desc: 'Delivery, booking, and service marketplace apps with real-time tracking.' },
  { icon: FiBook, title: 'EdTech Apps', desc: 'E-learning platforms, course delivery, quizzes, and progress tracking.' },
];

const techOptions = [
  { tech: 'Native iOS (Swift)', detail: 'Best performance, full Apple feature access, App Store-ready', price: 'From $15,000' },
  { tech: 'Native Android (Kotlin)', detail: 'Maximum Android performance, Google Play-ready', price: 'From $12,000' },
  { tech: 'React Native', detail: 'One codebase, iOS + Android, 90% cost savings vs native', price: 'From $18,000' },
  { tech: 'Flutter', detail: "Google's framework for beautiful cross-platform UI", price: 'From $18,000' },
  { tech: 'Backend/API', detail: 'Node.js, Firebase, AWS, custom REST & GraphQL APIs', price: 'Included' },
  { tech: 'Integrations', detail: 'Stripe, Twilio, Google Maps, Push Notifications, Analytics', price: 'Included' },
];

const phases = [
  { n: '01', t: 'Discovery & Scoping', d: 'Define user personas, core features, monetization strategy, and technical architecture.' },
  { n: '02', t: 'UI/UX Design', d: 'Wireframes, interactive prototypes, and polished UI design with user testing.' },
  { n: '03', t: 'Development Sprints', d: 'Agile 2-week sprints with demos. Backend + frontend developed simultaneously.' },
  { n: '04', t: 'QA Testing', d: 'Device testing across 20+ iOS and Android devices. Performance, security, and UX testing.' },
  { n: '05', t: 'App Store Submission', d: 'We handle App Store and Google Play submission including metadata and screenshots.' },
  { n: '06', t: 'Post-Launch & Scaling', d: 'Crash monitoring, user feedback loops, feature iterations, and scaling infrastructure.' },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <section className="page-hero section-with-pattern">
        <SectionPattern opacity={0.04} color="#72c192" />
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Mobile App Development</span>
          </div>
          <div className="hero-split">
            <div>
              <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>Mobile App Development</span>
              <h1>Mobile App Development That Transforms Ideas Into <span className="gradient-text">Revenue-Generating Apps</span></h1>
              <p>We build native iOS, Android, and cross-platform mobile apps that deliver exceptional user experiences. From MVP to full-scale enterprise solutions — designed for performance, security, and user adoption.</p>
              <div className="hero-actions">
                <Link href="/free-consultation" className="btn btn-primary btn-lg" id="mobile-hero-cta">Get Your Free App Development Quote →</Link>
                <Link href="/portfolio" className="btn btn-secondary btn-lg">View App Portfolio</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="mockup-glow mockup-glow-green" />
              <div className="mockup-glow mockup-glow-blue" />
              <MockupPhone imageUrl="/images/medconnect-screenshot.png" />
              <div className="hero-float-1">
                <FloatingCard icon="📱" value="150+" label="Apps Shipped" color="#72c192" />
              </div>
              <div className="hero-float-2">
                <FloatingCard icon="⭐" value="4.8★" label="Avg App Rating" color="#5ac0ec" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--brand-dark)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[['150+','Apps Shipped'],['4.8★','Avg App Store Rating'],['99.9%','Crash-Free Sessions'],['iOS & Android','All Platforms']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#7ec8e3', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, whiteSpace: 'nowrap' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Types */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">App Types We Build</span>
            <h2>Mobile Solutions Across Every Industry <span className="gradient-text">and Use Case</span></h2>
          </div>
          <div className="services-grid">
            {appTypes.map(a => {
              const IconComponent = a.icon;
              return (
                <div key={a.title} className="service-card">
                  <div className="service-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--brand)' }}>
                    <IconComponent size={24} />
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Options */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technology Options</span>
            <h2>Native vs. Cross-Platform — <span className="gradient-text">We Help You Choose Right</span></h2>
          </div>
          <div className="grid-2">
            {techOptions.map(t => (
              <div key={t.tech} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brand)' }}>
                  <FiSmartphone size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <strong style={{ color: 'var(--brand)' }}>{t.tech}</strong>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', background: 'var(--light-blue)', padding: '2px 10px', borderRadius: 99 }}>{t.price}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{t.detail}</p>
                </div>
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
            <h2>Idea to App Store in <span className="gradient-text">6 Phases</span></h2>
          </div>
          <div className="grid-3">
            {phases.map(p => (
              <div key={p.n} className="card">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--light-blue)', marginBottom: '0.8rem' }}>{p.n}</div>
                <h3 style={{ fontSize: '1rem', color: 'var(--brand)', marginBottom: '0.6rem' }}>{p.t}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Specialized Services</span>
            <h2>Platform-Specific <span className="gradient-text">Expertise</span></h2>
          </div>
          <div className="grid-3">
            {[
              { icon: FaApple, title: 'iOS App Development', desc: 'Native Swift development for iPhone and iPad with full Apple ecosystem integration.', href: '/services/ios-app-development' },
              { icon: FaAndroid, title: 'Android App Development', desc: 'Native Kotlin apps with Material Design for the Google Play ecosystem.', href: '/services/android-app-development' },
              { icon: FiZap, title: 'Cross-Platform Apps', desc: 'React Native and Flutter apps that run natively on both iOS and Android.', href: '/services/cross-platform-apps' },
            ].map(s => {
              const IconComponent = s.icon;
              return (
                <div key={s.title} className="service-card">
                  <div className="service-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--brand)' }}>
                    <IconComponent size={24} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className="service-card-link">Learn More →</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Build Your Mobile App?</h2>
            <p>Tell us about your app idea. We'll provide a detailed scope, timeline, and fixed-price quote — free of charge.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="mobile-final-cta">Get Your Free App Quote →</Link>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">See App Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
