import Link from 'next/link';
import { FiTarget, FiLock, FiZap, FiUsers, FiBriefcase, FiCode, FiTrendingUp, FiLayout } from 'react-icons/fi';
import FloatingCard from '@/components/FloatingCard';
import SectionPattern from '@/components/SectionPattern';

export const metadata = {
  title: 'About InterNative Labs | Full-Service Digital Agency | Lawrenceville GA',
  description:
    'InterNative Labs is a full-service digital agency in Lawrenceville, GA. We deliver custom web development, mobile apps, SEO & digital marketing for businesses of all sizes.',
  keywords: 'about InterNative Labs, digital agency Lawrenceville GA, web development company Georgia, InterNative Labs team',
  alternates: { canonical: 'https://www.internativelabs.com/about' },
};

const values = [
  { icon: FiTarget, title: 'Results Over Deliverables', desc: 'We measure success in traffic, leads, and revenue. Not just lines of code or pages published.' },
  { icon: FiLock, title: 'Radical Transparency', desc: "You'll always know what we're doing, why, and what results to expect. No black boxes, no fluff reports." },
  { icon: FiZap, title: 'Relentless Improvement', desc: "Markets change. We stay ahead of algorithm updates, emerging platforms, and new technologies so you don't have to." },
  { icon: FiUsers, title: 'Partnership Mentality', desc: 'We think of ourselves as your in-house digital team. Your success is our success.' },
];

const teamStats = [
  { num: '35+', label: 'Team Members', sub: 'Developers, designers & marketers' },
  { num: '500+', label: 'Projects Delivered', sub: 'Since our founding' },
  { num: '20+', label: 'Industries Served', sub: 'From healthcare to SaaS' },
  { num: '15+', label: 'Countries Reached', sub: 'Global client base' },
];

const teamMembers = [
  { name: 'Faisal Majeed', role: 'CEO & Co-Founder', emoji: FiBriefcase, bg: '#1A3C6E' },
  { name: 'Murtaza Mandokhail', role: 'Head of Development', emoji: FiCode, bg: '#2E86C1' },
  { name: 'Shahid Hussain', role: 'Head of SEO & Marketing', emoji: FiTrendingUp, bg: '#27AE60' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero section-with-pattern">
        <SectionPattern opacity={0.04} color="#72c192" />
        <div className="deco-ring deco-ring-1" />
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            About InterNative Labs
          </span>
          <h1>A Team of Builders, Strategists, and <span className="gradient-text">Digital Growth Experts</span></h1>
          <p>Founded in Lawrenceville, GA, InterNative Labs is a results-driven digital agency that combines deep technical expertise with growth-focused marketing strategies.</p>
          <div className="hero-actions">
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id="about-cta">Get a Free Consultation →</Link>
            <Link href="/portfolio" className="btn btn-secondary btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="service-split">
            {/* Left: Story text */}
            <div>
              <span className="section-label">Our Story</span>
              <h2 style={{ color: 'var(--brand)', marginBottom: '1.5rem' }}>Built on a Simple Belief: <span className="gradient-text">Results Matter Most</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: 1.8 }}>
                From a small team with big ambitions, we've grown into a trusted digital partner for businesses ranging from funded startups to Fortune 500 companies. We started InterNative Labs because we believed businesses deserved a technology partner that actually cares about results — not just deliverables.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Every website we build, every app we deploy, every SEO campaign we run is measured against one benchmark: <strong>did it grow your business?</strong> That accountability drives everything we do.
              </p>
            </div>

            {/* Right: Visual with browser mockup + floating stat cards */}
            <div className="hero-visual" style={{ minHeight: 340 }}>
              <div className="mockup-glow mockup-glow-green" />
              <div className="mockup-glow mockup-glow-blue" />
              <img
                src="/images/agency-dashboard.png"
                alt="InterNative Labs Agency Dashboard"
                className="hero-image"
              />
              <div className="hero-float-1">
                <FloatingCard icon="👥" value="35+" label="Team Members" color="#72c192" />
              </div>
              <div className="hero-float-2">
                <FloatingCard icon="🌍" value="15+" label="Countries Reached" color="#5ac0ec" />
              </div>
            </div>
          </div>

          {/* Stats grid below the split */}
          <div className="responsive-grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginTop: '3rem' }}>
            {teamStats.map(s => (
              <div key={s.label} style={{
                background: 'var(--gradient-brand)',
                borderRadius: 20, padding: '2rem',
                textAlign: 'center', color: '#fff',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: '#7ec8e3', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontWeight: 700, marginBottom: 4, whiteSpace: 'nowrap' }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section-with-pattern" style={{ background: 'var(--bg-gray)' }}>
        <SectionPattern opacity={0.03} color="#5ac0ec" />
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>The Principles That <span className="gradient-text">Drive Everything We Do</span></h2>
          </div>
          <div className="grid-2">
            {values.map(v => {
              const ValueIcon = v.icon;
              return (
                <div key={v.title} className="value-card">
                  <div className="value-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--brand)' }}>
                    <ValueIcon size={24} />
                  </div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Leadership</span>
            <h2>Meet the Team <span className="gradient-text">Behind Your Results</span></h2>
            <p>35+ passionate professionals dedicated to your digital growth.</p>
          </div>
          <div className="grid-4">
            {teamMembers.map(m => {
              const EmojiIcon = m.emoji;
              return (
                <div key={m.name} className="card" style={{ textAlign: 'center' }}>
                  {/* Upgraded avatar with gradient ring */}
                  <div className="team-avatar-ring">
                    <div className="team-avatar-ring-inner" style={{ background: m.bg }}>
                      <EmojiIcon size={28} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--brand)', marginBottom: 4 }}>{m.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{m.role}</p>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/team" className="btn btn-outline btn-lg" id="full-team-btn">Meet the Full Team →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Work with a Team That Cares About Your Results?</h2>
            <p>Let's talk about your project and how we can help you grow online.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id="about-final-cta">Start the Conversation →</Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
