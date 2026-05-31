'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PartnersPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: 'Referral Partner', message: '' });
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Partner Up</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            🤝 Referral Network
          </span>
          <h1>Earn 10% Commission on Client <span className="gradient-text">Referrals</span></h1>
          <p>
            Join the InterNative Labs Partnership Ecosystem. Refer clients needing high-performance Next.js systems, custom iOS/Android apps, or Page-1 SEO rankings.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Partnership Programs</span>
            <h2>Three Ways to Partner with InterNative Labs</h2>
          </div>
          <div className="grid-3 animate-fadeUp">
            {[
              { icon: '💰', title: 'Referral Affiliates', desc: 'Perfect for consultancies, freelance developers, and agencies. Introduce a client needing our custom engineering or white-hat SEO. Earn a flat 10% commission on the signed contract value.' },
              { icon: '🏢', title: 'Agency Partnerships', desc: 'Do you offer branding or PPC marketing but lack complex software engineering capability? Outsource Next.js platforms or HIPAA app builds to us under a transparent, reliable, high-speed agency partnership.' },
              { icon: '🏷️', title: 'White-Label Engineering', desc: 'Deliver custom software and mobile applications under your own agency brand. We handle the entire engineering, technical specifications, and bug support while you own the client relationships.' }
            ].map(prog => (
              <div key={prog.title} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{prog.icon}</div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--brand)', marginBottom: '0.8rem' }}>{prog.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payout Examples */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Commission Examples</span>
            <h2>Numbers That Add Up Fast</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'eCommerce Shopify Redesign', budget: '$6,000 Contract', commission: '$600 Commission Paid' },
              { title: 'Custom Next.js Web App', budget: '$12,000 Contract', commission: '$1,200 Commission Paid' },
              { title: 'Cross-Platform React Native App', budget: '$20,000 Contract', commission: '$2,000 Commission Paid' }
            ].map(ex => (
              <div key={ex.title} style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
                <h4 style={{ color: 'var(--brand)', fontSize: '0.98rem', marginBottom: '0.5rem' }}>{ex.title}</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.2rem' }}>Based on a contract value of {ex.budget}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--success)' }}>
                  {ex.commission}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up Form */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Apply Online</span>
            <h2>Apply to Join the Growth Network</h2>
            <p>Complete the secure profile form below. Our operations team reviews all partnership requests within 24 business hours.</p>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div style={{ background: 'rgba(39, 174, 96, 0.08)', border: '1px solid var(--success)', padding: '3rem 2rem', borderRadius: 16, textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>Partner Application Received!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Thank you for applying to partner with us, {form.name}. Our agency directors will review your website/company profile and contact you within 24 business hours to set up your referral account.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Your Name *</label>
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
                      placeholder="jane@consultancy.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Company Name / Website</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Consulting Corp / site.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Program Interest *</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="Referral Partner">Referral Partner (10% Payouts)</option>
                      <option value="Agency Alliance">Agency Alliance (Cross-Outsourcing)</option>
                      <option value="White Labeling">White-Label Technical Subcontracting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)', marginBottom: 6 }}>Tell us about your referral network / clients</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Briefly describe your agency focus, consulting sectors, or the immediate client need you have in mind."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '15px' }}>
                  Submit Partner Registration →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
