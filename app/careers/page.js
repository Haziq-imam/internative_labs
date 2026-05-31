'use client';
import { useState } from 'react';
import Link from 'next/link';

const openRoles = [
  {
    title: 'Senior React / Next.js Developer',
    dept: 'Engineering',
    type: 'Full-Time · Hybrid (Lawrenceville GA)',
    salary: '$105k - $135k',
    desc: 'We are seeking a senior systems developer to oversee high-performance Next.js App Router platforms, Stripe APIs, and PostgreSQL architectures.',
    slug: 'senior-nextjs-dev'
  },
  {
    title: 'Senior SEO & Growth Specialist',
    dept: 'Marketing',
    type: 'Full-Time · Remote',
    salary: '$75k - $95k',
    desc: 'Lead transactional search campaigns. The ideal candidate has 6+ years of white-hat SEO results across eCommerce, legal, and medical local maps.',
    slug: 'senior-seo-specialist'
  },
  {
    title: 'UI/UX Interface Designer',
    dept: 'Design',
    type: 'Full-Time · Hybrid',
    salary: '$80k - $105k',
    desc: 'Translate complex enterprise logic into simple, wowed Figma prototypes. Strong background in conversion rate optimization and typography.',
    slug: 'ui-ux-designer'
  }
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', role: '', resume: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (form.name && form.email) setSubmitted(true);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Careers</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            💼 Join Our Team
          </span>
          <h1>Build Products That Drive Real <span className="gradient-text">Growth</span></h1>
          <p>
            No boring corporate bureaucracy or endless redundant meetings. Work alongside outstanding engineers and designers to ship code that impacts real companies.
          </p>
        </div>
      </section>

      {/* Perks and Culture */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Perks &amp; Culture</span>
            <h2>Why Builders Thrive at InterNative Labs</h2>
          </div>
          <div className="grid-3 animate-fadeUp">
            {[
              { icon: '💻', title: 'Top-Spec Workstation', desc: 'Choose your weapon. We fully fund customized MacBook Pro setups, ergonomic desks, and professional external 4K monitors.' },
              { icon: '🩺', title: 'Comprehensive Health', desc: '100% company-paid premium health, dental, and vision insurance for you and competitive options for your family.' },
              { icon: '🌴', title: 'Flexible PTO & Time Off', desc: 'Unlimited vacation days with a mandatory 3-week minimum per year. We work hard, but we prioritize mental wellness.' },
              { icon: '📚', title: 'Professional Growth', desc: 'Annual budget of $2,500 for online courses, specialized developer books, tech certificates, and annual conferences.' },
              { icon: '🕒', title: 'Hybrid Schedule', desc: 'Work remotely or join us in our Lawrenceville, GA agency office. Flexible core hours tailored around your life.' },
              { icon: '🚀', title: 'Agile & Autonomous', desc: 'We do not micromanage. You own your code blocks and lead design reviews directly with client directors.' }
            ].map(perk => (
              <div key={perk.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{perk.icon}</div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--brand)', marginBottom: '0.6rem' }}>{perk.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Open Positions</span>
            <h2>We Are Hiring Growth Leaders</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
            {openRoles.map(role => (
              <div
                key={role.slug}
                className="responsive-grid"
                style={{
                  background: 'var(--dark)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '2rem 2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '3fr 1.2fr',
                  gap: '2rem',
                  alignItems: 'center',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(46,134,193,0.1)', padding: '3px 10px', borderRadius: 99 }}>
                      {role.dept}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{role.type}</span>
                  </div>
                  <h3 style={{ color: 'var(--brand)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{role.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 0 }}>
                    {role.desc}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--success)', marginBottom: '0.8rem' }}>
                    {role.salary}
                  </div>
                  <a
                    href="#apply-form"
                    onClick={() => setForm({ ...form, role: role.title })}
                    className="btn btn-outline btn-sm"
                    style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section" id="apply-form">
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Apply Now</span>
            <h2>Take the Next Step in Your Career</h2>
            <p>Complete the secure profile form below. Our operations team reviews all resumes within 48 business hours.</p>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div style={{ background: 'rgba(39, 174, 96, 0.08)', border: '1px solid var(--success)', padding: '3rem 2rem', borderRadius: 16, textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Thank you for applying to join InterNative Labs, {form.name}. Our engineering and design directors will review your details and respond within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane.doe@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Target Role *</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">-- Choose target role --</option>
                    {openRoles.map(r => (
                      <option key={r.slug} value={r.title}>{r.title}</option>
                    ))}
                    <option value="General Interest">General Interest / Speculative Application</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Link to Resume / LinkedIn *</label>
                  <input
                    type="url"
                    name="resume"
                    value={form.resume}
                    onChange={handleChange}
                    required
                    placeholder="https://linkedin.com/in/username or google drive doc link"
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Brief cover note / GitHub link</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about complex platforms you have built, tech stacks you love, or links to outstanding repositories."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '15px' }}>
                  Submit Professional Application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
