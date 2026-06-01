import Link from 'next/link';
import { FiUsers, FiMapPin } from 'react-icons/fi';

export const metadata = {
  title: 'Our Executive Leadership & Digital Team | InterNative Labs',
  description: 'Meet the expert Next.js developers, native mobile engineers, UI/UX designers, and SEO specialists that build premium digital products at InterNative Labs.',
  alternates: { canonical: 'https://www.internativelabs.com/team' },
};

const team = [
  {
    name: 'Rashid M.',
    role: 'Technical Director & Founder',
    bio: 'Over 12 years of software engineering and cloud architecture experience. Rashid oversees our Next.js backend systems and devops infrastructure.',
    initials: 'RM',
    experience: '12+ Yrs Exp',
    color: 'var(--brand)'
  },
  {
    name: 'Sarah J.',
    role: 'Head of UI/UX Design',
    bio: 'Specialist in conversion-focused, glassmorphic UX designs. Sarah translates business processes into stunning interactive Figma flows and interfaces.',
    initials: 'SJ',
    experience: '8+ Yrs Exp',
    color: '#9B59B6'
  },
  {
    name: 'Alex K.',
    role: 'Lead Mobile Architect',
    bio: 'Native iOS Swift and Android Kotlin veteran. Alex is passionate about BLE Bluetooth syncing, secure WebRTC streaming, and cross-platform Flutter engines.',
    initials: 'AK',
    experience: '9+ Yrs Exp',
    color: '#27AE60'
  },
  {
    name: 'James D.',
    role: 'Senior SEO & Growth Strategist',
    bio: 'A search engine algorithm specialist who has successfully positioned over 150 local and eCommerce campaigns onto organic Page 1 rankings.',
    initials: 'JD',
    experience: '10+ Yrs Exp',
    color: '#F39C12'
  },
  {
    name: 'Emily R.',
    role: 'Lead Frontend Developer',
    bio: 'Next.js and Tailwind CSS expert focused on sub-second paint timings, smooth CSS micro-animations, and full web accessibility standards.',
    initials: 'ER',
    experience: '6+ Yrs Exp',
    color: 'var(--accent)'
  },
  {
    name: 'Michael T.',
    role: 'Operations & Project Manager',
    bio: 'Keeps our client sprints organized and milestones clear. Michael manages customer feedback loops and agile releases.',
    initials: 'MT',
    experience: '7+ Yrs Exp',
    color: '#E74C3C'
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Our Team</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <FiUsers size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> The Builders
          </span>
          <h1>Meet the Minds Behind the <span className="gradient-text">Code</span></h1>
          <p>
            We are a dedicated group of custom software architects, meticulous interface designers, and rigorous white-hat search marketers working together under one roof.
          </p>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3 animate-fadeUp">
            {team.map(member => (
              <div key={member.name} className="service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 60, height: 60,
                    borderRadius: 16,
                    background: 'var(--gradient-brand)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', fontWeight: 900
                  }}>
                    {member.initials}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: member.color,
                    background: `${member.color}15`,
                    padding: '4px 12px',
                    borderRadius: 99
                  }}>
                    {member.experience}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--brand)', marginBottom: '0.3rem' }}>{member.name}</h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1.2rem' }}>
                  {member.role}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                  {member.bio}
                </p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}><FiMapPin size={13} /> Lawrenceville, GA</span>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
                    LinkedIn Profile ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Philosophy</span>
              <h2 style={{ color: 'var(--brand)', marginBottom: '1.5rem' }}>Why We Do Not Outsource Your Code</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Many agencies sell high and outsource design/development tasks to low-cost subcontractors. This results in fragile architectures, misaligned security layers, and sluggish performance.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                At InterNative Labs, every line of Next.js, Flutter, and local SEO citations is drafted in-house by full-time engineers and expert copywriters. This accountability ensures premium standards.
              </p>
            </div>
            <div style={{ background: 'var(--dark)', color: '#fff', borderRadius: 24, padding: '3.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '4.5rem', marginBottom: '1rem', color: 'var(--brand)' }}><FiUsers size={56} /></div>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>In-House Integrity</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We believe in code review pipelines, HIPAA server environments, and white-hat Google guidelines. Always speak directly with our engineering team.
              </p>
              <Link href="/free-consultation" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Consult Our Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
