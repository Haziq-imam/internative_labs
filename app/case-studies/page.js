import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiTrendingUp, FiTarget, FiZap, FiCheckCircle, FiMonitor, FiPenTool } from 'react-icons/fi';
import { FaPlusSquare, FaBalanceScale } from 'react-icons/fa';

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
    icon: FiShoppingCart,
    color: 'var(--brand)',
    mockup: '/images/retailedge-mockup.png',
    mockupAlt: 'RetailEdge USA – Shopify eCommerce redesign mockup showing neon-green dark storefront with traffic metrics',
    slug: 'retailedge-usa'
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
    icon: FaPlusSquare,
    color: '#27AE60',
    mockup: '/images/medconnect-mockup.png',
    mockupAlt: 'MedConnect Telehealth – HIPAA-compliant iOS & Android app mockup with doctor video consultation screens',
    slug: 'medconnect-telehealth'
  },
  {
    client: 'LawFirm Pro Partners',
    industry: 'Legal & Law Firms',
    metric: '+340% Consultation Requests',
    subMetric: 'Rank #1 For High-Value Terms',
    tags: ['Attorney SEO', 'Google Maps Optimization', 'Intake Portals'],
    challenge: 'A trial law firm in Lawrenceville was spending heavily on pay-per-click ads with low conversion rates. They were virtually invisible in organic Google Map local pack listings.',
    solution: 'We audited and corrected their citations, optimized their Google Business Profile, wrote legal blogs answering common local litigation questions, and deployed a secure intake form.',
    result: 'Rankings rose to #1 locally for their competitive target keywords, driving a 340% increase in consultation request forms with zero ongoing ad spend.',
    icon: FaBalanceScale,
    color: '#F39C12',
    mockup: '/images/lawfirm-mockup.png',
    mockupAlt: 'LawFirm Pro Partners – attorney SEO and legal intake portal mockup showing #1 ranking dashboard',
    slug: 'lawfirm-pro'
  },
  {
    client: 'Zenith SaaS Platform',
    industry: 'SaaS Design & Development',
    metric: '+45% Signup Lift',
    subMetric: 'Dashboard & Stripe Billing',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    challenge: 'Zenith needed a modern SaaS dashboard that could handle user accounts, subscription plans, billing activity, and real-time analytics in one clean platform. Their existing workflow was scattered across multiple tools, making it difficult for users to manage data and payments efficiently.',
    solution: 'We designed and developed a high-converting SaaS dashboard using Next.js, React, Tailwind CSS, and Stripe integration. The platform included interactive charts, user profile management, subscription billing, payment tracking, admin controls, and a clean responsive interface for both desktop and mobile users.',
    result: 'The new SaaS platform improved user onboarding, simplified subscription management, and increased signups by 45%. The dashboard delivered a faster, cleaner, and more scalable experience for both users and admins.',
    icon: FiMonitor,
    color: 'var(--accent)',
    mockup: '/images/zenith-screenshot.png',
    mockupAlt: 'Zenith SaaS Platform - modern dashboard design with interactive charts and Stripe billing interface',
    slug: 'zenith-saas'
  },
  {
    client: 'Apex Fitness Tracker',
    industry: 'Cross-Platform App',
    metric: '15k+ Monthly Active Users',
    subMetric: 'Wearable BLE Sync',
    tags: ['Flutter', 'Dart', 'Firebase', 'BLE Sync'],
    challenge: 'Apex needed a reliable fitness tracking app that could sync workout data, monitor health activity, and work smoothly across iOS and Android. Their main goal was to support offline tracking, wearable device syncing, and a clean visual dashboard for fitness users.',
    solution: 'We designed and developed a cross-platform fitness app using Flutter and Dart, backed by Firebase for real-time data syncing. The app included workout tracking, heart rate charts, calories burned, activity history, offline sync, Bluetooth wearable connectivity, and Apple Watch-style progress insights.',
    result: 'The app reached 15k+ monthly active users and improved user engagement through interactive fitness charts, offline tracking, and smooth wearable syncing. Users could track performance anytime, even without an active internet connection.',
    icon: FiZap,
    color: '#E74C3C',
    mockup: '/images/apex-screenshot.png',
    mockupAlt: 'Apex Fitness Tracker - mobile fitness app showing workout logs and interactive health charts',
    slug: 'apex-fitness'
  },
  {
    client: 'Aura Cosmetics Identity',
    industry: 'Brand Identity & Strategy',
    metric: '100% Custom Design',
    subMetric: 'Visual Media & Packaging',
    tags: ['Branding', 'Logo Design', 'Vector Assets', 'Typography'],
    challenge: 'Aura Cosmetics needed a premium brand identity that could stand out in the beauty and skincare market. Their previous visual direction lacked consistency across packaging, social media, typography, and product presentation.',
    solution: 'We created a complete brand identity system including logo design, packaging concepts, curated color palette, typography selection, vector assets, brand guideline booklet, and social media visual direction. The goal was to build a polished beauty brand that felt elegant, modern, and trustworthy.',
    result: 'Aura received a complete custom brand identity system ready for packaging, digital marketing, and retail presentation. The final identity improved brand consistency and gave the company a premium visual presence across all customer touchpoints.',
    icon: FiPenTool,
    color: '#9B59B6',
    mockup: '/images/image.png',
    mockupAlt: 'Aura Cosmetics Identity - premium beauty brand design showcasing logo, custom typography, and packaging elements',
    slug: 'aura-cosmetics'
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ paddingBottom: '60px', overflow: 'hidden' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left — text */}
          <div className="page-hero-content" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Case Studies</span>
            </div>
            <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <FiTrendingUp size={14} /> Business Outcomes
            </span>
            <h1>Proven Results for <span className="gradient-text">Real Businesses</span></h1>
            <p>
              We don't just deliver pages; we build revenue machines. Check out our client deep-dives across healthcare, legal, and retail spaces.
            </p>
          </div>

          {/* Right — mockup image */}
          <div style={{ position: 'relative' }}>
            {/* Glow backdrop */}
            <div style={{
              position: 'absolute',
              inset: '10% 5%',
              background: 'radial-gradient(ellipse at 50% 60%, rgba(114,193,146,0.22) 0%, transparent 70%)',
              filter: 'blur(36px)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 30px 90px rgba(0,0,0,0.65)',
            }}>
              <Image
                src="/images/case-studies-hero.png"
                alt="Three client project mockups – RetailEdge eCommerce, MedConnect Telehealth, and LawFirm Pro Partners – floating in 3D perspective with key result metrics"
                width={680}
                height={383}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case studies index */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {caseStudies.map((study, idx) => {
            const CaseIcon = study.icon;
            return (
              <div
                key={study.client}
                id={study.slug}
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
                {/* Text side */}
                <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
                    <div style={{
                      width: 50, height: 50,
                      borderRadius: 12,
                      background: `${study.color}15`,
                      color: study.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <CaseIcon size={22} />
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
                      <strong style={{ color: 'var(--brand)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', marginBottom: 4 }}>
                        <FiTarget size={14} /> The Challenge:
                      </strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{study.challenge}</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', marginBottom: 4 }}>
                        <FiZap size={14} /> Our Solution:
                      </strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{study.solution}</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', marginBottom: 4 }}>
                        <FiTrendingUp size={14} /> The Results:
                      </strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{study.result}</p>
                    </div>
                  </div>

                  <Link href="/free-consultation" className="btn btn-primary" id={`${study.client.toLowerCase().replace(/\s+/g, '-')}-cs-cta`}>
                    Achieve Similar Outcomes →
                  </Link>
                </div>

                {/* Mockup image side */}
                <div
                  style={{
                    order: idx % 2 === 0 ? 2 : 1,
                    borderRadius: 20,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: `0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)`,
                    background: '#0d0d0d',
                    minHeight: 280,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Coloured glow behind mockup */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(ellipse at 50% 80%, ${study.color}22 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />
                  <Image
                    src={study.mockup}
                    alt={study.mockupAlt}
                    width={640}
                    height={400}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'transform 0.4s ease',
                    }}
                    className="cs-mockup-img"
                  />
                  {/* Metric badge overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    background: 'rgba(0,0,0,0.82)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${study.color}44`,
                    borderRadius: 12,
                    padding: '10px 16px',
                    zIndex: 2,
                  }}>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Campaign Result</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: study.color, lineHeight: 1.2 }}>{study.metric}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{study.subMetric}</div>
                  </div>
                </div>
              </div>
            );
          })}
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
