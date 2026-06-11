'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiActivity, FiSliders, FiMonitor, FiZap, FiPenTool, FiTrendingUp, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import SectionPattern from '@/components/SectionPattern';

const categories = ['All', 'Web Design', 'Mobile Apps', 'SEO', 'Branding'];

const projects = [
  {
    title: 'RetailEdge USA',
    category: 'Web Design',
    subCat: 'eCommerce & Development',
    metric: '+180% Traffic Increase',
    desc: 'Full-service Shopify store redesign with custom theme, fast performance optimization, and transactional checkout pipelines.',
    tags: ['Shopify', 'Liquid', 'SEO', 'UX Research'],
    icon: FiShoppingCart,
    color: 'var(--brand)',
    accentColor: '#72c192',
    slug: 'retailedge-usa',
    imageUrl: '/images/retailedge-screenshot.png'
  },
  {
    title: 'MedConnect Telehealth',
    category: 'Mobile Apps',
    subCat: 'Healthcare App Development',
    metric: '4.8★ App Store Rating',
    desc: 'HIPAA-compliant native Swift & Android Kotlin telemedicine app featuring video consultations and encrypted chat logs.',
    tags: ['Swift', 'Kotlin', 'WebRTC', 'HIPAA'],
    icon: FiActivity,
    color: '#27AE60',
    accentColor: '#27AE60',
    slug: 'medconnect-telehealth',
    imageUrl: '/images/medconnect-screenshot.png'
  },
  {
    title: 'LawFirm Pro Partners',
    category: 'SEO',
    subCat: 'Local Search Domination',
    metric: '+340% Lead Growth',
    desc: 'Aggressive local SEO mapping and transactional search term bidding that drove page-1 rankings for competitive local keywords.',
    tags: ['Local SEO', 'Citation Building', 'Schema Markup'],
    icon: FiSliders,
    color: '#F39C12',
    accentColor: '#F39C12',
    slug: 'lawfirm-pro',
    imageUrl: '/images/lawfirm-screenshot.png'
  },
  {
    title: 'Zenith SaaS Platform',
    category: 'Web Design',
    subCat: 'SaaS Design & Development',
    metric: '+45% Signup Lift',
    desc: 'High-converting next-generation SaaS dashboard architecture with interactive charts, stripe payment billing, and user profiles.',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    icon: FiMonitor,
    color: 'var(--accent)',
    accentColor: '#5ac0ec',
    slug: 'zenith-saas',
    imageUrl: '/images/zenith-screenshot.png'
  },
  {
    title: 'Apex Fitness Tracker',
    category: 'Mobile Apps',
    subCat: 'Cross-Platform App',
    metric: '15k+ Monthly Active Users',
    desc: 'Stunning Flutter fitness app with offline sync capability, interactive charts, and apple watch Bluetooth syncing.',
    tags: ['Flutter', 'Dart', 'Firebase', 'BLE Sync'],
    icon: FiZap,
    color: '#E74C3C',
    accentColor: '#E74C3C',
    slug: 'apex-fitness',
    imageUrl: '/images/apex-screenshot.png'
  },
  {
    title: 'Aura Cosmetics Identity',
    category: 'Branding',
    subCat: 'Brand Identity & Strategy',
    metric: '100% Custom Design',
    desc: 'Premium packaging design, curated color typography, high-fidelity brand guide booklets, and visual media files.',
    tags: ['Branding', 'Logo Design', 'Vector Assets', 'Typography'],
    icon: FiPenTool,
    color: '#9B59B6',
    accentColor: '#9B59B6',
    slug: 'aura-cosmetics',
    imageUrl: '/images/brand-identity.png'
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className="page-hero section-with-pattern" style={{ paddingTop: '85px', paddingBottom: '45px' }}>
        <SectionPattern opacity={0.04} color="#72c192" />
        <div className="container page-hero-content">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Left Column: Original Text & Breadcrumb styling */}
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Our Work</span>
              </div>
              <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
                <FiBriefcase size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Case Portfolio
              </span>
              <h1 style={{ marginBottom: '1.2rem' }}>Our Projects Speak Louder Than <span className="gradient-text">Words</span></h1>
              <p style={{ marginBottom: 0 }}>
                Explore our curated showcase of custom web applications, mobile apps, local SEO campaigns, and branding projects built for real business outcomes.
              </p>
            </div>

            {/* Right Column: Browser mockup for portfolio.png */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="mockup-glow mockup-glow-green" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              <div className="mockup-glow mockup-glow-blue" style={{ top: '60%', left: '45%', transform: 'translate(-50%, -50%)' }} />
              
              {/* Browser chrome frame */}
              <div className="hero-image-frame" style={{ width: '100%', zIndex: 1, position: 'relative' }}>
                <div className="hero-browser-bar">
                  <span className="hero-browser-dot hero-browser-dot-red" />
                  <span className="hero-browser-dot hero-browser-dot-yellow" />
                  <span className="hero-browser-dot hero-browser-dot-green" />
                  <div className="hero-browser-url">internativelabs.com/portfolio</div>
                </div>
                <img
                  src="/images/portfolio.png"
                  alt="InterNative Labs Portfolio Showcase"
                  className="hero-image"
                  style={{ width: '100%', height: 'auto', display: 'block', marginTop: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`btn ${activeFilter === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  padding: '10px 24px',
                  fontSize: '0.88rem',
                  border: activeFilter === cat ? 'none' : '2px solid var(--border)',
                  background: activeFilter === cat ? 'var(--gradient-brand)' : 'transparent',
                  color: activeFilter === cat ? '#fff' : 'var(--text-secondary)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="portfolio-grid animate-fadeUp">
            {filteredProjects.map((p) => (
              <div key={p.title} className="portfolio-card" style={{ background: '#1c1e24' }}>
                {/* Screenshot / Branded Thumbnail */}
                <div className="portfolio-mockup-thumb">
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  ) : (
                    /* Gradient fallback for projects without a screenshot */
                    <div style={{
                      width: '100%', height: '100%',
                      background: `linear-gradient(135deg, ${p.accentColor}22, ${p.accentColor}08)`,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                    }}>
                      <div style={{
                        width: 64, height: 64, borderRadius: 16,
                        background: `${p.accentColor}20`,
                        border: `1.5px solid ${p.accentColor}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <p.icon size={28} style={{ color: p.accentColor }} />
                      </div>
                      <span style={{ color: p.accentColor, fontWeight: 700, fontSize: '0.85rem' }}>
                        {p.subCat}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="portfolio-info" style={{ padding: '1.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span className="portfolio-tag">{p.subCat}</span>
                    <div className="service-icon" style={{ background: `${p.color}15`, color: p.color, marginBottom: 0, width: 36, height: 36 }}>
                      <p.icon size={18} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', color: 'var(--brand)', marginBottom: '0.4rem' }}>{p.title}</h3>

                  {/* Metric Badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center',
                    background: 'var(--bg-gray)', border: '1px solid var(--border)',
                    color: 'var(--success)', fontWeight: 700, fontSize: '0.82rem',
                    padding: '3px 10px', borderRadius: 6, alignSelf: 'flex-start', marginBottom: '0.8rem'
                  }}>
                    <FiTrendingUp size={14} style={{ marginRight: 5 }} /> {p.metric}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {p.desc}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1rem' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.72rem', background: 'var(--bg-gray)', border: '1px solid var(--border)', padding: '3px 8px', borderRadius: 4, color: 'var(--text-muted)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/case-studies#${p.slug}`} className="service-card-link" style={{ alignSelf: 'flex-start', color: p.color }}>
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--dark-2) 0%, var(--brand-dark) 100%)', border: '1.5px solid rgba(114,193,146,0.18)', borderRadius: 24, padding: '4rem 3rem', color: '#fff', textAlign: 'center', boxShadow: 'var(--shadow-brand)' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Have a Similar Project in Mind?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              We collaborate with clients to turn technical ideas into profit centers. Contact our Lawrenceville growth experts to outline your milestones.
            </p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-secondary" style={{ background: '#fff', color: 'var(--dark)', fontWeight: 700 }}>
                Schedule Consultation Call →
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
