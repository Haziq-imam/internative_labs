'use client';
import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Web Design', 'Mobile Apps', 'SEO', 'Branding'];

const projects = [
  {
    title: 'RetailEdge USA',
    category: 'Web Design',
    subCat: 'eCommerce & Development',
    metric: '+180% Traffic Increase',
    desc: 'Full-service Shopify store redesign with custom theme, fast performance optimization, and transactional checkout pipelines.',
    tags: ['Shopify', 'Liquid', 'SEO', 'UX Research'],
    icon: '🛒',
    color: 'var(--brand)',
    slug: 'retailedge-usa'
  },
  {
    title: 'MedConnect Telehealth',
    category: 'Mobile Apps',
    subCat: 'Healthcare App Development',
    metric: '4.8★ App Store Rating',
    desc: 'HIPAA-compliant native Swift & Android Kotlin telemedicine app featuring video consultations and encrypted chat logs.',
    tags: ['Swift', 'Kotlin', 'WebRTC', 'HIPAA'],
    icon: '🏥',
    color: '#27AE60',
    slug: 'medconnect-telehealth'
  },
  {
    title: 'LawFirm Pro Partners',
    category: 'SEO',
    subCat: 'Local Search Domination',
    metric: '+340% Lead Growth',
    desc: 'Aggressive local SEO mapping and transactional search term bidding that drove page-1 rankings for competitive local keywords.',
    tags: ['Local SEO', 'Citation Building', 'Schema Markup'],
    icon: '⚖️',
    color: '#F39C12',
    slug: 'lawfirm-pro'
  },
  {
    title: 'Zenith SaaS Platform',
    category: 'Web Design',
    subCat: 'SaaS Design & Development',
    metric: '+45% Signup Lift',
    desc: 'High-converting next-generation SaaS dashboard architecture with interactive charts, stripe payment billing, and user profiles.',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    icon: '💻',
    color: 'var(--accent)',
    slug: 'zenith-saas'
  },
  {
    title: 'Apex Fitness Tracker',
    category: 'Mobile Apps',
    subCat: 'Cross-Platform App',
    metric: '15k+ Monthly Active Users',
    desc: 'Stunning Flutter fitness app with offline sync capability, interactive charts, and apple watch Bluetooth syncing.',
    tags: ['Flutter', 'Dart', 'Firebase', 'BLE Sync'],
    icon: '⚡',
    color: '#E74C3C',
    slug: 'apex-fitness'
  },
  {
    title: 'Aura Cosmetics Identity',
    category: 'Branding',
    subCat: 'Brand Identity & Strategy',
    metric: '100% Custom Design',
    desc: 'Premium packaging design, curated color typography, high-fidelity brand guide booklets, and visual media files.',
    tags: ['Branding', 'Logo Design', 'Vector Assets', 'Typography'],
    icon: '🎨',
    color: '#9B59B6',
    slug: 'aura-cosmetics'
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Our Work</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            💼 Case Portfolio
          </span>
          <h1>Our Projects Speak Louder Than <span className="gradient-text">Words</span></h1>
          <p>
            Explore our curated showcase of custom web applications, mobile apps, local SEO campaigns, and branding projects built for real business outcomes.
          </p>
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

          {/* Grid */}
          <div className="grid-3 animate-fadeUp">
            {filteredProjects.map((p, index) => (
              <div key={p.title} className="service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div className="service-icon" style={{ background: `${p.color}15`, color: p.color, marginBottom: 0 }}>
                    {p.icon}
                  </div>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: p.color,
                    background: `${p.color}12`,
                    padding: '4px 10px',
                    borderRadius: 99
                  }}>
                    {p.subCat}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--brand)', marginBottom: '0.4rem' }}>{p.title}</h3>
                
                {/* Metric Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'var(--bg-gray)',
                  border: '1px solid var(--border)',
                  color: 'var(--success)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '4px 12px',
                  borderRadius: 6,
                  alignSelf: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  📈 {p.metric}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.75rem', background: 'var(--bg-gray)', border: '1px solid var(--border)', padding: '3px 8px', borderRadius: 4, color: 'var(--text-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link href="/case-studies" className="service-card-link" style={{ alignSelf: 'flex-start', color: p.color }}>
                  View Full Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'var(--gradient-brand)', borderRadius: 24, padding: '4rem 3rem', color: '#fff', textAlign: 'center', boxShadow: 'var(--shadow-brand)' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Have a Similar Project in Mind?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 600, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              We collaborate with clients to turn technical ideas into profit centers. Contact our Lawrenceville growth experts to outline your milestones.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/free-consultation" className="btn btn-secondary" style={{ background: '#fff', color: 'var(--brand)', fontWeight: 700 }}>
                Schedule Consultation Call →
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
