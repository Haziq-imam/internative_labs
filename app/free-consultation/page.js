'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiTarget, FiSearch, FiMap, FiDollarSign, FiMail, FiPhone, FiCheckCircle, FiLock } from 'react-icons/fi';
import MockupDashboard from '@/components/MockupDashboard';
import SectionPattern from '@/components/SectionPattern';

export default function FreeConsultationPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="page-hero section-with-pattern">
        <SectionPattern opacity={0.04} color="#72c192" />
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Free Consultation</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <FiTarget size={14} /> Free — No Obligation
          </span>
          <h1>Get a Free 30-Minute Strategy Session with a <span className="gradient-text">Digital Growth Expert</span></h1>
          <p>Tell us about your business goals. We'll analyze your current digital presence and map out a clear strategy to help you grow online — completely free, no strings attached.</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {['✓ No credit card required','✓ No contracts or commitments','✓ Response within 2 hours','✓ Honest, expert advice'].map(t => (
              <span key={t} style={{ color: '#7ec8e3', fontSize: '0.88rem', fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ color: 'var(--brand)', marginBottom: '1.5rem' }}>What Happens on the Call?</h2>
              {[
                { icon: FiSearch, title: 'Business Analysis', desc: 'We review your current website, competitors, and market position to identify quick wins.' },
                { icon: FiTarget, title: 'Goal Alignment', desc: 'We learn about your growth targets — leads, traffic, revenue — and align our strategy to them.' },
                { icon: FiMap, title: 'Strategy Roadmap', desc: 'You leave with a clear, actionable plan — whether you work with us or not.' },
                { icon: FiDollarSign, title: 'Investment Overview', desc: 'We provide transparent pricing guidance specific to your project scope.' },
              ].map(s => {
                const ProcessIcon = s.icon;
                return (
                  <div key={s.title} className="value-card" style={{ marginBottom: '1rem' }}>
                    <div className="value-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--brand)' }}>
                      <ProcessIcon size={22} />
                    </div>
                    <div><h4>{s.title}</h4><p>{s.desc}</p></div>
                  </div>
                );
              })}

              {/* Strategy session dashboard mockup */}
              <div style={{ marginTop: '2rem', position: 'relative' }}>
                <div className="mockup-glow mockup-glow-green" style={{ width: 300, height: 300 }} />
                <MockupDashboard title="Strategy Overview" imageUrl="/images/agency-dashboard.png" />
              </div>

              <div style={{ background: 'var(--bg-gray)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.8rem', marginTop: '1.5rem' }}>
                <h3 style={{ color: 'var(--brand)', marginBottom: '1rem', fontSize: '1.1rem' }}>Prefer to reach out directly?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <a href="mailto:info@internativelabs.com" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiMail size={14} /> info@internativelabs.com
                  </a>
                  <a href="tel:+18889085040" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiPhone size={14} /> +1 (888) 908-5040
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <FiCheckCircle size={48} style={{ color: 'var(--success)', marginBottom: '1.2rem' }} />
                  <h2 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>You're on the List!</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    We'll reach out within 2 business hours to schedule your free strategy session.
                  </p>
                  <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="consultation-form">
                  <h2 style={{ color: 'var(--brand)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Schedule Your Free Session</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>Fill out the form and we'll reach out within 2 hours.</p>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cons-name">Full Name *</label>
                      <input id="cons-name" name="name" type="text" className="form-input" required value={form.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cons-email">Email *</label>
                      <input id="cons-email" name="email" type="email" className="form-input" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cons-phone">Phone</label>
                      <input id="cons-phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cons-company">Company</label>
                      <input id="cons-company" name="company" type="text" className="form-input" value={form.company} onChange={handleChange} placeholder="Company name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cons-service">What service are you interested in?</label>
                    <select id="cons-service" name="service" className="form-select" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>SEO Services</option>
                      <option>Digital Marketing</option>
                      <option>UI/UX Design</option>
                      <option>Full Digital Strategy</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cons-budget">Budget Range</label>
                    <select id="cons-budget" name="budget" className="form-select" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget...</option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                      <option>Monthly Retainer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cons-message">Tell us about your goals</label>
                    <textarea id="cons-message" name="message" className="form-textarea" value={form.message} onChange={handleChange} placeholder="What does success look like for your business?" style={{ minHeight: 100 }} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" id="consultation-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                    Book My Free Consultation →
                  </button>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '1rem' }}>
                    <FiLock size={12} /> 100% free. No contracts, no obligation, no spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
