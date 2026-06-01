import Link from 'next/link';
import { FiActivity, FiHome, FiShoppingCart, FiCoffee, FiShield, FiMonitor, FiSmartphone, FiMapPin, FiSettings, FiGlobe, FiEdit, FiSearch, FiTrendingUp, FiPenTool, FiDollarSign, FiMessageCircle, FiServer, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const industryData = {
  'healthcare': {
    title: 'Healthcare & Medical Providers',
    meta: 'HIPAA-compliant healthcare web & app development. Patient portals, telemedicine apps, and medical SEO designed to grow your clinic.',
    hero: 'HIPAA-Compliant Digital Solutions for <span>Healthcare Providers</span>',
    heroSub: 'We build secure, compliant, and highly intuitive patient portals, telemedicine applications, and medical websites that improve patient outcomes and drive clinic growth.',
    icon: FiActivity,
    stats: [['HIPAA', 'Compliant'], ['100k+', 'Patients Served'], ['99.9%', 'Uptime SLA'], ['Telehealth', 'Integrated']],
    challenges: [
      'Patient onboarding friction and complex medical registration forms.',
      'Maintaining absolute patient data privacy and strict HIPAA security compliance.',
      'Vague search visibility for local clinics leading to low patient acquisition.'
    ],
    solutions: [
      'Frictionless online patient appointment scheduling & automated SMS reminders.',
      'Secure, encrypted telehealth portals and integrated high-definition video consultations.',
      'Medical-grade Local SEO, optimized physician profile schema, and reputation campaigns.'
    ],
    caseStudy: { client: 'MedConnect Telehealth', stat: '+312%', label: 'Patient Inquiries' },
    price: 'From $6,000',
    related: [
      { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: FiSmartphone },
      { title: 'Local SEO Services', href: '/services/local-seo', icon: FiMapPin },
      { title: 'Custom Web Apps', href: '/services/custom-web-applications', icon: FiSettings }
    ]
  },
  'real-estate': {
    title: 'Real Estate & Brokerages',
    meta: 'Real estate web development & marketing. Custom MLS/IDX integrations, lead-generating agent portals, and local real estate SEO.',
    hero: 'IDX/MLS Websites That Capture <span>High-Value Real Estate Leads</span>',
    heroSub: 'We build fast, interactive property search engines, custom agent branding websites, and automated client nurture portals that convert property searches into listing leads.',
    icon: FiHome,
    stats: [['IDX / MLS', 'Integrated'], ['10k+', 'Listings Synced'], ['5x', 'Avg Lead Increase'], ['Interactive', 'Map Search']],
    challenges: [
      'Slow and outdated IDX search experiences causing users to bounce.',
      'Losing buyers and sellers to massive third-party portals like Zillow or Redfin.',
      'High cost-per-lead on paid advertising and generic real estate lead portals.'
    ],
    solutions: [
      'Ultra-fast interactive map property search integrated directly with your MLS data.',
      'Custom landing pages for new developments and neighborhood guide content strategies.',
      'Local real estate SEO and automated email drip campaigns to nurture cold prospects.'
    ],
    caseStudy: { client: 'Avenue Homes Realty', stat: '5.2x', label: 'More Monthly Leads' },
    price: 'From $4,500',
    related: [
      { title: 'Web Development', href: '/services/web-development', icon: FiGlobe },
      { title: 'Local SEO Services', href: '/services/local-seo', icon: FiMapPin },
      { title: 'Graphic Design', href: '/services/graphic-design', icon: FiEdit }
    ]
  },
  'ecommerce-retail': {
    title: 'eCommerce & Retail Brands',
    meta: 'High-converting eCommerce stores & retail websites. Shopify & WooCommerce experts. Scale your organic online sales and customer lifetime value.',
    hero: 'eCommerce Solutions Designed to <span>Scale Organic Sales</span>',
    heroSub: 'From retail store migrations to custom headless eCommerce architectures — we build shopping experiences that load in milliseconds and maximize average order value.',
    icon: FiShoppingCart,
    stats: [['Shopify & Woo', 'Experts'], ['+428%', 'Avg Revenue Lift'], ['100k+', 'Products Synced'], ['Secure Checkout', 'Integrated']],
    challenges: [
      'High cart abandonment rates and friction-heavy checkout systems.',
      'Slow site load times causing massive conversion drops and organic ranking hits.',
      'Rising ad costs reducing profit margins on Google and social advertising.'
    ],
    solutions: [
      'Frictionless one-page checkout experiences and automated abandoned cart recovery.',
      'Mobile-first store speed optimization bringing load times under 2.0 seconds.',
      'E-commerce-specific SEO campaigns targeting high-intent commercial product keywords.'
    ],
    caseStudy: { client: 'RetailEdge USA', stat: '+180%', label: 'Organic Traffic Lift' },
    price: 'From $5,000',
    related: [
      { title: 'eCommerce SEO', href: '/services/ecommerce-seo', icon: FiSearch },
      { title: 'eCommerce Development', href: '/services/ecommerce-development', icon: FiShoppingCart },
      { title: 'Conversion Rate Optimization', href: '/services/cro', icon: FiTrendingUp }
    ]
  },
  'restaurants': {
    title: 'Restaurants & Hospitality',
    meta: 'Beautiful restaurant website design. Online ordering integrations, booking systems, and local SEO to dominate local search results.',
    hero: 'Restaurant Websites That Drive <span>Reservations & Online Orders</span>',
    heroSub: 'We design high-converting restaurant websites featuring online menu ordering integrations, digital booking tables, and local restaurant SEO to drive foot traffic.',
    icon: FiCoffee,
    stats: [['Zero Commission', 'Ordering'], ['3x', 'Avg Reservation Lift'], ['Google Maps', 'Domination'], ['Mobile-First', 'Menu Design']],
    challenges: [
      'Paying high 30% commission rates to third-party delivery apps like GrubHub or UberEats.',
      'Hard-to-read PDF menus on mobile devices ruining the user experience.',
      'Lack of direct customer data ownership preventing repeat restaurant visits.'
    ],
    solutions: [
      'Direct, commission-free digital menu ordering system built directly into your website.',
      'Beautiful, interactive, mobile-first web menus that load instantly.',
      'Local Google Maps pack optimization and automated email/SMS customer loyalty programs.'
    ],
    caseStudy: { client: 'Gourmet Bistro Group', stat: '$0', label: 'Third-Party Commissions' },
    price: 'From $2,500',
    related: [
      { title: 'Local SEO Services', href: '/services/local-seo', icon: FiMapPin },
      { title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageCircle },
      { title: 'Web Hosting & Maintenance', href: '/services/hosting-maintenance', icon: FiServer }
    ]
  },
  'legal': {
    title: 'Law Firms & Legal Practices',
    meta: 'Professional law firm web development & local attorney SEO. Rank #1 for high-value legal search terms and win more client consultations.',
    hero: 'Law Firm Websites That Build <span>Authority & Win Cases</span>',
    heroSub: 'We build credible, search-optimized websites for trial attorneys, personal injury lawyers, and corporate practices. Rank #1 locally and convert consultations.',
    icon: FiShield,
    stats: [['#1 Rankings', 'For Attorney SEO'], ['340%', 'Lead Volume Lift'], ['Secure Intake', 'Portals'], ['Professional', 'Firm Branding']],
    challenges: [
      'Fierce local competition for valuable patient and client consultations.',
      'Outdated digital branding failing to project immediate professional credibility.',
      'Prohibitively expensive cost-per-click rates on Google Ads keyword bidding.'
    ],
    solutions: [
      'Premium authority-building firm branding and modern video testimonial setups.',
      'Highly secure, encrypted digital client intake and consultation request portals.',
      'Relentless Local SEO optimization targeting high-value transactional legal keywords.'
    ],
    caseStudy: { client: 'LawFirm Pro Partners', stat: '+340%', label: 'Consultation Requests' },
    price: 'From $4,000',
    related: [
      { title: 'Local SEO Services', href: '/services/local-seo', icon: FiMapPin },
      { title: 'Web Development', href: '/services/web-development', icon: FiGlobe },
      { title: 'PPC & Paid Advertising', href: '/services/ppc-advertising', icon: FiDollarSign }
    ]
  },
  'saas-tech': {
    title: 'SaaS & Tech Companies',
    meta: 'Custom SaaS web development, landing pages, and tech marketing. Built for conversions, fast signups, and scalable cloud performance.',
    hero: 'SaaS Websites Built to Convert <span>Traffic Into Active Trials</span>',
    heroSub: 'We build modern, glassmorphic SaaS landing pages, interactive pricing models, and developer-focused portals that communicate complex value and drive signups.',
    icon: FiMonitor,
    stats: [['API integrations', 'Built'], ['45%', 'Avg Trial Increase'], ['Modern', 'Glassmorphism'], ['AWS & GCP', 'Cloud Hosting']],
    challenges: [
      'Low traffic-to-signup conversion rates on landing pages.',
      'Difficulty explaining highly technical and complex features to buyers.',
      'Slow product page load times causing high checkout and demo drop-offs.'
    ],
    solutions: [
      'Conversion-optimized, modern, glassmorphic SaaS product landing pages.',
      'Interactive pricing tables featuring annual/monthly toggles and feature comparisons.',
      'Interactive product UI walkthroughs and clean dashboard animations.'
    ],
    caseStudy: { client: 'CloudSync SaaS', stat: '+45%', label: 'Trial Signups Lift' },
    price: 'From $7,000',
    related: [
      { title: 'Custom Web Apps', href: '/services/custom-web-applications', icon: FiSettings },
      { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiPenTool },
      { title: 'PPC & Paid Advertising', href: '/services/ppc-advertising', icon: FiDollarSign }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(industryData).map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = industryData[params.slug];
  if (!data) return { title: 'Industry Solutions | InterNative Labs' };
  return {
    title: `Industries — ${data.title} | InterNative Labs`,
    description: data.meta,
    alternates: { canonical: `https://www.internativelabs.com/industries/${params.slug}` },
  };
}

export default function IndustryPage({ params }) {
  const data = industryData[params.slug];

  if (!data) {
    return (
      <section className="page-hero">
        <div className="container page-hero-content">
          <h1>Industry Solutions Not Found</h1>
          <Link href="/" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Return Home →</Link>
        </div>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': `Digital Solutions for ${data.title}`,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'InterNative Labs',
      'telephone': '+18889085040',
      'url': 'https://www.internativelabs.com'
    },
    'description': data.meta
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Industries We Serve</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>{data.title}</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <data.icon size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> {data.title} Industry Specialist
          </span>
          <h1 dangerouslySetInnerHTML={{ __html: data.hero }} />
          <p>{data.heroSub}</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id={`${params.slug}-ind-hero-cta`}>Book Free Industry Consult →</Link>
            <Link href="/portfolio" className="btn btn-secondary btn-lg">Browse Industry Work</Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div style={{ background: 'var(--brand-dark)', padding: '30px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {data.stats.map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#7ec8e3', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Split Challenges vs Solutions Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Help You Win</span>
            <h2>Solving the Biggest Digital Obstacles in <span className="gradient-text">{data.title}</span></h2>
            <p>Generic designs don't work. We analyze your industry constraints and customer behavior to design bespoke systems built to scale.</p>
          </div>

          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem' }}>
            {/* Challenges */}
            <div style={{ background: 'rgba(231, 76, 60, 0.03)', border: '1px solid rgba(231, 76, 60, 0.15)', borderRadius: 20, padding: '2.5rem' }}>
              <h3 style={{ color: '#E74C3C', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiAlertTriangle size={20} /> Key Industry Obstacles
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.challenges.map((c, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: '#E74C3C', fontWeight: 'bold' }}>✕</span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{c}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div style={{ background: 'rgba(39, 174, 96, 0.03)', border: '1px solid rgba(39, 174, 96, 0.15)', borderRadius: 20, padding: '2.5rem' }}>
              <h3 style={{ color: '#27AE60', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiCheckCircle size={20} /> Our Strategic Solutions
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.solutions.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ color: '#27AE60', fontWeight: 'bold' }}>✓</span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{s}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ background: 'var(--gradient-brand)', borderRadius: 24, padding: '4rem', color: '#fff', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'center', boxShadow: 'var(--shadow-brand)' }}>
            <div>
              <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
                Featured Success Story
              </span>
              <h3 style={{ color: '#fff', fontSize: '2.2rem', marginTop: '1rem', marginBottom: '1rem' }}>{data.caseStudy.client}</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                We implemented our optimized digital framework and local growth plan for {data.caseStudy.client}, solving their customer acquisition problems and building long-term organic authority.
              </p>
              <Link href="/case-studies" className="btn btn-secondary" style={{ background: '#fff', color: 'var(--brand)', fontWeight: 700 }}>
                Read Full Case Study →
              </Link>
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '2.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '4.5rem', fontWeight: 900, color: '#7ec8e3', lineHeight: 1 }}>
                {data.caseStudy.stat}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginTop: 10 }}>
                Increase in {data.caseStudy.label}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
                Verified 6-Month Campaign Audit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA split */}
      <section className="section">
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Transparent Packages</span>
              <h2 style={{ color: 'var(--brand)', marginBottom: '1.5rem' }}>Ready to Scale Your {data.title} business?</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Get an expert consultation. We will audit your current search rankings, competitor architectures, and security compliance, creating a custom plan that fits your exact budget.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/free-consultation" className="btn btn-primary" id={`${params.slug}-final-pricing-cta`}>Get a Free Quote →</Link>
                <Link href="/pricing" className="btn btn-outline">View Full Price Sheet</Link>
              </div>
            </div>
            <div style={{ background: 'var(--dark)', color: '#fff', borderRadius: 24, padding: '3.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--brand)' }}><data.icon size={48} /></div>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{data.title} Blueprint</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Tailored Strategy + Premium Execution</p>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#7ec8e3', marginBottom: '0.5rem' }}>{data.price}</div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginBottom: '2rem' }}>Fixed-cost quote, clear milestones, 0% hidden fees</p>
              <Link href="/free-consultation" className="btn" style={{ background: 'var(--gradient-accent)', color: '#fff', fontWeight: 700, width: '100%', justifyContent: 'center' }}>
                Claim Free consultation Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Capabilities</span>
            <h2>Complementary Services for <span className="gradient-text">{data.title}</span></h2>
          </div>
          <div className="grid-3">
            {data.related.map(r => (
              <Link key={r.href} href={r.href} className="card" style={{ textAlign: 'center', display: 'block' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem', color: 'var(--brand)' }}><r.icon size={28} /></div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--brand)', marginBottom: '0.5rem' }}>{r.title}</h3>
                <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>Explore Service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
