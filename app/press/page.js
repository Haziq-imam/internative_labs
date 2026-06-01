import Link from 'next/link';
import { FiVolume2, FiHome, FiActivity, FiAward, FiPackage, FiMail } from 'react-icons/fi';

export const metadata = {
  title: 'Press Releases & Company News | InterNative Labs',
  description: 'Read official company announcements, local tech expansions, and media announcements from the InterNative Labs PR team in Lawrenceville, GA.',
  alternates: { canonical: 'https://www.internativelabs.com/press' },
};

const pressReleases = [
  {
    title: 'InterNative Labs Expands Lawrenceville Office to Support Local Tech Startups',
    date: 'May 15, 2026',
    excerpt: 'Lawrenceville, GA — Digital agency InterNative Labs announced today the expansion of its physical office space and the launch of a startup digital launch package designed to help funded local businesses.',
    tags: ['Expansion', 'Lawrenceville GA', 'Community Startup Plan'],
    icon: FiHome,
    color: 'var(--brand)'
  },
  {
    title: 'InterNative Labs Launches HIPAA-Compliant Telehealth Web Framework',
    date: 'April 02, 2026',
    excerpt: 'Lawrenceville, GA — Pioneering digital partner InterNative Labs has officially released a proprietary WebRTC Next.js telehealth framework, enabling healthcare providers to launch secure video clinics in under 30 days.',
    tags: ['HIPAA', 'Next.js App', 'Telemedicine Release'],
    icon: FiActivity,
    color: '#27AE60'
  },
  {
    title: 'InterNative Labs Recognized as Clutch Top Web Developers Gwinnett Gwinnett',
    date: 'January 10, 2026',
    excerpt: 'Lawrenceville, GA — Clutch, the leading global B2B ratings directory, has recognized InterNative Labs as the #1 custom web systems and organic SEO development team in Lawrenceville.',
    tags: ['Clutch Award', 'Rankings Recognition'],
    icon: FiAward,
    color: '#F39C12'
  }
];

export default function PressPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Our Company</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Press</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <FiVolume2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Press Releases
          </span>
          <h1>Company Announcements &amp; <span className="gradient-text">Media Kits</span></h1>
          <p>
            Stay up to date with the latest local expansions, new open-source technical launches, and awards achieved by InterNative Labs.
          </p>
        </div>
      </section>

      {/* Press index */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {pressReleases.map(pr => (
              <div
                key={pr.title}
                className="responsive-grid"
                style={{
                  background: 'var(--bg-gray)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-md)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 4fr',
                  gap: '2rem',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  width: 80, height: 80,
                  borderRadius: 16,
                  background: `${pr.color}12`,
                  color: pr.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.2rem',
                  margin: '0 auto'
                }}>
                  <pr.icon size={28} />
                </div>
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: pr.color, background: `${pr.color}10`, padding: '3px 10px', borderRadius: 99 }}>
                      {pr.tags[0]}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{pr.date}</span>
                  </div>
                  <h3 style={{ color: 'var(--brand)', fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {pr.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {pr.excerpt}
                  </p>
                  <Link href="/press" className="service-card-link" style={{ color: pr.color }}>
                    Read Full Press Release →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kits */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container" style={{ maxWidth: 850 }}>
          <div className="responsive-grid" style={{ background: 'var(--dark)', color: '#fff', borderRadius: 24, padding: '3.5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
                Media Kit Download
              </span>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '1rem', marginBottom: '1rem' }}>Need Logos, Headshots, or Brand Guidelines?</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Download our unified media package containing vector logo variations, high-resolution management photos, office snapshots, and official brand style-sheets.
              </p>
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '2rem', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--brand)' }}><FiPackage size={36} /></div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '1.5rem' }}>InterNative_Labs_Kit.zip</h4>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Download Assets (14.2 MB)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PR Contacts */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 650 }}>
          <span className="section-label">Media Relations</span>
          <h2 style={{ color: 'var(--brand)', marginTop: '1rem', marginBottom: '1rem' }}>PR Contact Channel</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Are you a journalist, local business editor, or developer podcast host? Reach out directly to our communications office for inquiries, speaking panels, or technical articles.
          </p>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.5rem', background: 'var(--bg-gray)', padding: '1.5rem 3rem', borderRadius: 16, border: '1px solid var(--border)' }}>
            <span style={{ fontWeight: 700, color: 'var(--brand)' }}><FiMail size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Email: media@internativelabs.com</span>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Response timeframe: Within 24 business hours</span>
          </div>
        </div>
      </section>
    </>
  );
}
