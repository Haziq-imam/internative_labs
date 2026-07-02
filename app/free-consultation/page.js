'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiTarget, FiSearch, FiMap, FiDollarSign, FiMail, FiPhone, FiCheckCircle, FiLock, FiX } from 'react-icons/fi';
import SectionPattern from '@/components/SectionPattern';

export default function FreeConsultationPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // 20s client-side timeout so it never hangs forever
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);

      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setShowSuccess(true);
    } catch (err) {
      if (err.name === 'AbortError') {
        setError('Request timed out. Please check your connection and try again.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Success Popup Modal ── */}
      {showSuccess && (
        <div
          onClick={() => setShowSuccess(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #18191d 0%, #111215 100%)',
              border: '1px solid rgba(114,193,146,0.3)',
              borderRadius: 24,
              padding: '3rem 2.5rem',
              maxWidth: 480,
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(114,193,146,0.08)',
              animation: 'slideUp 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%', width: 34, height: 34,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              <FiX size={16} />
            </button>

            {/* Glowing icon */}
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(114,193,146,0.2), rgba(90,192,236,0.2))',
              border: '2px solid rgba(114,193,146,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 30px rgba(114,193,146,0.3)',
            }}>
              <FiCheckCircle size={36} style={{ color: '#72c192' }} />
            </div>

            <h2 style={{ color: '#ffffff', marginBottom: '0.75rem', fontSize: '1.6rem', fontWeight: 700 }}>
              You're All Set! 🎉
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.7 }}>
              Your consultation request has been sent to <strong style={{ color: 'var(--brand)' }}>info@internativelabs.com</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Our team will reach out within <strong style={{ color: '#ffffff' }}>2 business hours</strong> to schedule your free 30-minute strategy session.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-primary" style={{ minWidth: 140, justifyContent: 'center' }}>
                Back to Home
              </Link>
              <button
                onClick={() => setShowSuccess(false)}
                className="btn btn-outline"
                style={{ minWidth: 140, justifyContent: 'center' }}
              >
                Close
              </button>
            </div>
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
          `}</style>
        </div>
      )}

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
                <img
                  src="/images/agency-dashboard.png"
                  alt="InterNative Labs Agency Dashboard"
                  className="hero-image"
                />
              </div>

              <div style={{ background: 'var(--bg-gray)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.8rem', marginTop: '1.5rem' }}>
                <h3 style={{ color: 'var(--brand)', marginBottom: '1rem', fontSize: '1.1rem' }}>Prefer to reach out directly?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <a href="mailto:info@internativelabs.com" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiMail size={14} /> info@internativelabs.com
                  </a>
                  <a href="tel:+14044651869" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiPhone size={14} /> +1 (404) 465-1869
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
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
                <button type="submit" className="btn btn-primary btn-lg" id="consultation-submit-btn" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                      <span style={{
                        width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff', borderRadius: '50%',
                        display: 'inline-block', animation: 'spin 0.7s linear infinite',
                      }} />
                      Sending…
                    </span>
                  ) : 'Book My Free Consultation →'}
                </button>
                {error && (
                  <p style={{ fontSize: '0.85rem', color: '#ff6b6b', textAlign: 'center', marginTop: '0.75rem', lineHeight: 1.5 }}>
                    ⚠ {error}
                  </p>
                )}
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '1rem' }}>
                  <FiLock size={12} /> 100% free. No contracts, no obligation, no spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
