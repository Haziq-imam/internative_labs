import Link from 'next/link';
import {
  FiGlobe, FiSmartphone, FiSearch, FiTrendingUp, FiLayout, FiVideo,
  FiTarget, FiZap, FiLock, FiUsers,
  FiHeart, FiHome, FiShoppingCart, FiCoffee, FiBriefcase, FiCode,
  FiArrowRight,
} from 'react-icons/fi';
import FloatingCard from '@/components/FloatingCard';
import SectionPattern from '@/components/SectionPattern';
import StatCounter from '@/components/StatCounter';

export const metadata = {
  title: 'Digital Agency | Web Dev, Mobile Apps & SEO — InterNative Labs',
  description:
    'InterNative Labs is a full-service digital agency offering web development, mobile app development, SEO, and digital marketing to help businesses grow online.',
  keywords:
    'web development company, mobile app development, SEO services, digital marketing agency, custom website development, InterNative Labs',
  alternates: { canonical: 'https://www.internativelabs.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'InterNative Labs',
  url: 'https://www.internativelabs.com',
  telephone: '+18889085040',
  email: 'info@internativelabs.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '811 Mason Grove Pkwy',
      addressLocality: 'Lawrenceville',
      addressRegion: 'GA',
      postalCode: '30043',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '5005 Dalhousie Dr NW Unit 175',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T3A 5R8',
      addressCountry: 'CA',
    }
  ],
  description:
    'Full-service digital agency offering web development, mobile apps, SEO, and digital marketing.',
  sameAs: [
    'https://www.linkedin.com/company/internative-labs-llc',
    'https://www.facebook.com/internativelabs',
    'https://www.instagram.com/internativelabs',
    'https://x.com/internativelabs'
  ],
};

const services = [
  {
    Icon: FiGlobe,
    title: 'Web Development',
    desc: 'Custom websites, eCommerce stores, and web apps built for performance and conversions.',
    href: '/services/web-development',
    color: '#72c192',
  },
  {
    Icon: FiSmartphone,
    title: 'Mobile App Development',
    desc: 'iOS, Android, and cross-platform apps that deliver exceptional user experiences.',
    href: '/services/mobile-app-development',
    color: '#5ac0ec',
  },
  {
    Icon: FiSearch,
    title: 'SEO Services',
    desc: 'On-page, technical, and local SEO strategies that dominate search rankings.',
    href: '/services/seo',
    color: '#88c248',
  },
  {
    Icon: FiTrendingUp,
    title: 'Digital Marketing',
    desc: 'PPC, social media, email marketing, and content strategies that generate qualified leads.',
    href: '/services/social-media-marketing',
    color: '#72c192',
  },
  {
    Icon: FiLayout,
    title: 'Design & Branding',
    desc: 'Logo design, UI/UX, brand identity, and creative services that make you stand out.',
    href: '/services/ui-ux-design',
    color: '#5ac0ec',
  },
  {
    Icon: FiVideo,
    title: 'Video & Animation',
    desc: 'Explainer videos, motion graphics, and product demos that engage and convert.',
    href: '/services/video-animation',
    color: '#88c248',
  },
];

const testimonials = [
  {
    stars: 5,
    text: "InterNative Labs rebuilt our e-commerce store from scratch. Within 3 months, organic traffic increased by 180% and our conversion rate doubled.",
    name: 'James T.',
    role: 'CEO, RetailEdge USA',
    initials: 'JT',
  },
  {
    stars: 5,
    text: "They delivered our healthcare app ahead of schedule and the code quality is outstanding. Best tech partner we've worked with.",
    name: 'Dr. Sarah M.',
    role: 'Founder, MedConnect',
    initials: 'SM',
  },
  {
    stars: 5,
    text: "Our Google rankings went from page 5 to position #2 for our most competitive keyword in 6 months. Incredible ROI.",
    name: 'Mark D.',
    role: 'Partner, LawFirm Pro',
    initials: 'MD',
  },
];

const differentiators = [
  { Icon: FiTarget, title: 'Results-Driven', desc: 'We measure every campaign against real business metrics — traffic, leads, revenue.' },
  { Icon: FiZap, title: 'Fast Turnaround', desc: 'On-time delivery with agile processes and weekly progress updates.' },
  { Icon: FiLock, title: 'Transparent Pricing', desc: 'No hidden fees. Fixed-price quotes upfront with milestone-based billing.' },
  { Icon: FiUsers, title: 'Long-Term Partner', desc: 'We become embedded in your team for ongoing growth, not one-off projects.' },
];

const industries = [
  { Icon: FiHeart, label: 'Healthcare', href: '/industries/healthcare' },
  { Icon: FiHome, label: 'Real Estate', href: '/industries/real-estate' },
  { Icon: FiShoppingCart, label: 'eCommerce', href: '/industries/ecommerce-retail' },
  { Icon: FiCoffee, label: 'Restaurants', href: '/industries/restaurants' },
  { Icon: FiBriefcase, label: 'Legal', href: '/industries/legal' },
  { Icon: FiCode, label: 'SaaS & Tech', href: '/industries/saas-tech' },
];

const trustItems = [
  '500+ Projects Delivered Across 20+ Industries',
  '97% Client Retention Rate',
  '10x Average ROI for Our Clients',
  'Trusted by Businesses in 15+ Countries',
  'White-Hat SEO Only — Google Compliant',
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="hero-grid-overlay" />
        <div className="container hero-content">
          <div className="hero-split">
            {/* Left: text + CTAs */}
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Full-Service Digital Agency · Lawrenceville, GA
              </div>
              <h1>
                Build, Grow &amp; Scale Your Business with a{' '}
                <span className="gradient-text">Full-Service Digital Agency</span>
              </h1>
              <p className="hero-sub">
                InterNative Labs delivers custom web development, mobile apps, SEO, and digital
                marketing solutions that drive traffic, generate qualified leads, and grow your
                revenue. From startups to enterprises — we build digital experiences that convert.
              </p>
              <div className="hero-actions">
                <Link href="/free-consultation" className="btn btn-primary btn-lg" id="hero-cta-primary">
                  Get a Free Consultation <FiArrowRight />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
                  View Our Portfolio
                </Link>
              </div>
              <div className="hero-stats">
                {[
                  { num: '500+', label: 'Projects Delivered' },
                  { num: '97%', label: 'Client Retention Rate' },
                  { num: '10x', label: 'Average Client ROI' },
                  { num: '15+', label: 'Countries Served' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="hero-stat-num">
                      <StatCounter value={s.num} />
                    </div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Browser Mockup + Floating Cards */}
            <div className="hero-visual">
              <div className="mockup-glow mockup-glow-green" />
              <div className="mockup-glow mockup-glow-blue" />

              {/* Browser chrome frame */}
              <div className="hero-image-frame" style={{ width: '100%', zIndex: 1, position: 'relative' }}>
                <div className="hero-browser-bar">
                  <span className="hero-browser-dot hero-browser-dot-red" />
                  <span className="hero-browser-dot hero-browser-dot-yellow" />
                  <span className="hero-browser-dot hero-browser-dot-green" />
                  <div className="hero-browser-url">internativelabs.com</div>
                </div>
                <img
                  src="/images/agency-dashboard.png"
                  alt="InterNative Labs Agency Dashboard"
                  className="hero-image"
                  style={{ width: '100%', height: 'auto', display: 'block', marginTop: 0 }}
                />
              </div>

              {/* Floating accent cards */}
              <div className="hero-float-1">
                <FloatingCard icon="📈" value="+180%" label="Traffic Increase" color="#72c192" />
              </div>
              <div className="hero-float-2">
                <FloatingCard icon="⭐" value="4.9★" label="Google Rating" color="#FFBD2E" />
              </div>
              <div className="hero-float-3">
                <FloatingCard icon="🚀" value="500+" label="Projects Shipped" color="#5ac0ec" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-inner">
            {trustItems.map(t => (
              <div key={t} className="trust-item">
                <span style={{ color: 'var(--success)', fontWeight: 700 }}>✓</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.87rem' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE ── */}
      <section className="section section-with-pattern" style={{ background: 'var(--bg-gray)' }}>
        <SectionPattern opacity={0.035} color="#72c192" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why InterNative Labs</span>
            <h2>Strategy + Creativity + Technology = <span className="gradient-text">Measurable Results</span></h2>
            <p>We don't just build websites and run campaigns. We become your dedicated digital growth partner, obsessively focused on outcomes that move your business forward.</p>
          </div>
          <div className="grid-4">
            {differentiators.map(d => {
              const Icon = d.Icon;
              return (
                <div key={d.title} className="card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 64, height: 64,
                    background: 'linear-gradient(135deg, rgba(114,193,146,0.15), rgba(90,192,236,0.15))',
                    borderRadius: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.2rem',
                    border: '1px solid rgba(114,193,146,0.2)',
                  }}>
                    <Icon size={26} style={{ color: 'var(--brand)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.6rem' }}>{d.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Everything You Need to Win Online — <span className="gradient-text">Under One Roof</span></h2>
            <p>From strategy and design to development and marketing — we handle every element of your digital presence so you can focus on running your business.</p>
          </div>
          <div className="services-grid">
            {services.map(s => {
              const Icon = s.Icon;
              return (
                <div key={s.href} className="service-card">
                  <div className="service-icon" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className="service-card-link" id={`service-link-${s.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More <FiArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-outline btn-lg" id="all-services-btn">
              View All Services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section style={{ background: 'linear-gradient(135deg, #18191d, #1e2028)', padding: '45px 0', borderTop: '1px solid rgba(114,193,146,0.15)', borderBottom: '1px solid rgba(114,193,146,0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>Proven Results Across Every Industry</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>Numbers that speak louder than promises</p>
          </div>
          <div className="grid-4">
            {[
              { num: '300+', label: 'Websites Built', sub: 'Across all industries' },
              { num: '150+', label: 'Mobile Apps Shipped', sub: 'iOS, Android & cross-platform' },
              { num: '187%', label: 'Avg Traffic Increase', sub: 'For SEO clients' },
              { num: '4.9★', label: 'Google Rating', sub: 'From verified reviews' },
            ].map(s => (
              <div key={s.label} className="card" style={{
                textAlign: 'center', padding: '2rem 1.5rem',
                transition: 'border-color 0.3s',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, background: 'linear-gradient(to right, #88c248, #5ac0ec)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: 8 }}>
                  <StatCounter value={s.num} />
                </div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', marginBottom: 4 }}>{s.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section section-with-pattern" style={{ background: 'var(--bg-gray)' }}>
        <SectionPattern opacity={0.03} color="#5ac0ec" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries We Serve</span>
            <h2>Deep Expertise Across <span className="gradient-text">20+ Industries</span></h2>
            <p>We understand that every industry has unique challenges and opportunities. Our tailored approach ensures your digital strategy aligns with industry-specific best practices.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {industries.map(i => {
              const Icon = i.Icon;
              return (
                <Link key={i.href} href={i.href} className="industry-chip" id={`industry-${i.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Icon size={15} />
                  {i.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Success Stories</span>
            <h2>Real Results from <span className="gradient-text">Real Clients</span></h2>
            <p>Don't take our word for it. Here's what our clients say about working with InterNative Labs.</p>
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-quote">&ldquo;</div>
                <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  {/* Upgraded avatar with gradient ring */}
                  <div className="testimonial-avatar-ring">
                    <div className="testimonial-avatar-ring-inner">{t.initials}</div>
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/testimonials" className="btn btn-outline btn-lg" id="testimonials-btn">
              Read More Testimonials <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2>From Discovery to Launch — <span className="gradient-text">A Proven 5-Step Process</span></h2>
          </div>
          <div className="process-steps">
            {[
              { n: '01', title: 'Discovery & Strategy', desc: 'We analyze your business, competition, and target audience to define goals.' },
              { n: '02', title: 'UI/UX Design', desc: 'Wireframes and high-fidelity mockups approved before writing a single line of code.' },
              { n: '03', title: 'Development', desc: 'Agile sprints with weekly demos. Clean, documented code that scales.' },
              { n: '04', title: 'Testing & QA', desc: 'Cross-browser, cross-device testing, security checks, and accessibility compliance.' },
              { n: '05', title: 'Launch & Support', desc: 'Smooth deployment with post-launch monitoring and continuous optimization.' },
            ].map(step => (
              <div key={step.n} className="process-step">
                <div className="process-num">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <span className="section-label" style={{ color: '#5ac0ec', borderColor: 'rgba(90,192,236,0.3)', background: 'rgba(90,192,236,0.1)' }}>
              Let's Build Something Great
            </span>
            <h2>Ready to Grow Your Business Online?</h2>
            <p>No contracts, no commitments. Just an honest conversation about your business goals and how we can help you achieve them.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="cta-final-primary">
                Get a Free Consultation — Speak with an Expert Today <FiArrowRight />
              </Link>
              <Link href="/free-website-audit" className="btn btn-secondary btn-lg" id="cta-final-audit">
                Get a Free Website Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
