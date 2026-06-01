'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiZap, FiSmartphone, FiFileText, FiBarChart2, FiLink, FiDollarSign, FiLock, FiCheckCircle } from 'react-icons/fi';

const auditPoints = [
  { icon: FiSearch, cat: 'Technical SEO', items: ['Crawlability & indexation', 'XML sitemaps & robots.txt', 'Canonical tags', 'HTTPS & security headers'] },
  { icon: FiZap, cat: 'Page Speed', items: ['Core Web Vitals scores', 'Server response time', 'Image optimization', 'JavaScript & CSS minification'] },
  { icon: FiSmartphone, cat: 'Mobile Experience', items: ['Mobile-friendliness test', 'Tap target sizing', 'Viewport configuration', 'Mobile page speed'] },
  { icon: FiFileText, cat: 'On-Page SEO', items: ['Title tags & meta descriptions', 'Header structure (H1-H6)', 'Keyword usage & density', 'Internal linking structure'] },
  { icon: FiBarChart2, cat: 'Content Quality', items: ['Thin content detection', 'Duplicate content check', 'Content gap vs. competitors', 'Readability analysis'] },
  { icon: FiLink, cat: 'Link Profile', items: ['Backlink quality analysis', 'Toxic link identification', 'Internal link audit', 'Anchor text distribution'] },
  { icon: FiDollarSign, cat: 'Conversion Elements', items: ['CTA placement & clarity', 'Form usability', 'Trust signals audit', 'Friction points identification'] },
  { icon: FiLock, cat: 'Security', items: ['SSL certificate status', 'Security headers', 'Vulnerability exposure', 'GDPR compliance check'] },
];

export default function FreeWebsiteAuditPage() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Free Website Audit</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            <FiSearch size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Free — No Obligation
          </span>
          <h1>Get Your Free Website Audit — Discover What's <span className="gradient-text">Holding Your Business Back Online</span></h1>
          <p>Our team performs a comprehensive 25-point audit of your website covering SEO health, page speed, mobile experience, conversion optimization, and security vulnerabilities. You'll receive a detailed report with prioritized action items — completely free.</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {['✓ No credit card required','✓ Delivered within 24 business hours','✓ Reviewed by a human expert','✓ No obligation to purchase'].map(t => (
              <span key={t} style={{ color: '#7ec8e3', fontSize: '0.88rem', fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section style={{ background: 'var(--bg-gray)', padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          {submitted ? (
            <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: 24, padding: '4rem', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--brand)' }}><FiBarChart2 size={48} /></div>
              <h2 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Audit Request Received!</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                We're auditing <strong>{url}</strong> now. You'll receive your complete 25-point report within 24 business hours at <strong>{email}</strong>.
              </p>
              <Link href="/" className="btn btn-primary">Back to Home</Link>
            </div>
          ) : (
            <div className="contact-form">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ color: 'var(--brand)', marginBottom: '0.5rem' }}>Get Your Free 25-Point Audit</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem' }}>Takes us 24 hours. You'll receive a detailed PDF report.</p>
              </div>
              <form onSubmit={handleSubmit} id="audit-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="audit-url">Your Website URL *</label>
                  <input id="audit-url" type="url" className="form-input" required value={url} onChange={e => setUrl(e.target.value)} placeholder="https://yourwebsite.com" style={{ fontSize: '1rem' }} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="audit-name">Your Name *</label>
                    <input id="audit-name" type="text" className="form-input" required value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="audit-email">Email Address *</label>
                    <input id="audit-email" type="email" className="form-input" required value={email} onChange={e => setEmail(e.target.value)} placeholder="john@company.com" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" id="audit-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Get My Free Audit — Delivered in 24 Hours →
                </button>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                  <FiLock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> No credit card. No obligation. Reviewed by a real human expert.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* What We Audit */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">25-Point Checklist</span>
            <h2>What We <span className="gradient-text">Audit for You</span></h2>
            <p>Our comprehensive audit covers every technical, on-page, and conversion factor that affects your online performance.</p>
          </div>
          <div className="grid-4">
            {auditPoints.map(a => (
              <div key={a.cat} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem', color: 'var(--brand)' }}><a.icon size={28} /></div>
                <h3 style={{ fontSize: '1rem', color: 'var(--brand)', marginBottom: '0.8rem' }}>{a.cat}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {a.items.map(i => (
                    <li key={i} style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', display: 'flex', gap: '6px' }}>
                      <span style={{ color: 'var(--success)', flexShrink: 0 }}><FiCheckCircle size={14} /></span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to See What's Holding You Back?</h2>
            <p>Get your free 25-point audit. No obligation, no upsell pressure. Just actionable insights.</p>
            <div className="cta-buttons">
              <Link href="#audit-form" className="btn btn-primary btn-lg" id="audit-final-cta">Get My Free Audit →</Link>
              <Link href="/free-consultation" className="btn btn-secondary btn-lg">Book a Strategy Call Instead</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
