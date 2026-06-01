'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle, FiLock } from 'react-icons/fi';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>Get in Touch</span>
          <h1>Let's Talk — Tell Us About Your Project and <span className="gradient-text">We'll Tell You How We Can Help</span></h1>
          <p>Most inquiries receive a response within 2 business hours. No commitment required.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>

            {/* Contact Info */}
            <div>
              <h2 style={{ color: 'var(--brand)', marginBottom: '2rem' }}>Contact Information</h2>
              {[
                { icon: FiMail, label: 'Email', value: 'info@internativelabs.com', href: 'mailto:info@internativelabs.com' },
                { icon: FiPhone, label: 'Phone', value: '+1 (888) 908-5040', href: 'tel:+18889085040' },
                { icon: FiMapPin, label: 'Address', value: '811 Mason Grove Pkwy, Lawrenceville, GA 30043, USA', href: null },
                { icon: FiClock, label: 'Hours', value: 'Monday – Friday, 9:00 AM – 6:00 PM EST', href: null },
              ].map(c => {
                const ContactIcon = c.icon;
                return (
                  <div key={c.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', padding: '1.2rem', background: 'var(--bg-gray)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ width: 44, height: 44, background: 'var(--light-blue)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)', flexShrink: 0 }}>
                      <ContactIcon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} style={{ color: 'var(--brand)', fontWeight: 600, fontSize: '0.95rem' }}>{c.value}</a>
                      ) : (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.93rem' }}>{c.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}

              <div style={{ background: 'var(--gradient-brand)', borderRadius: 16, padding: '1.8rem', marginTop: '1.5rem' }}>
                <h3 style={{ color: '#fff', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Prefer a Call?</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                  Schedule a free 30-minute consultation call with one of our experts.
                </p>
                <Link href="/free-consultation" className="btn" id="contact-schedule-cta" style={{ background: '#fff', color: 'var(--brand)', fontWeight: 700, display: 'inline-flex' }}>
                  Schedule a Call →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <FiCheckCircle size={48} style={{ color: 'var(--success)', marginBottom: '1.2rem' }} />
                  <h2 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Message Sent!</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Thank you for reaching out. Our team will respond within 2 business hours.
                  </p>
                  <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <h2 style={{ color: 'var(--brand)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Send Us a Message</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>Fill out the form and we'll be in touch shortly.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" className="form-input" required value={form.name} onChange={handleChange} placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" className="form-input" required value={form.email} onChange={handleChange} placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name</label>
                      <input id="company" name="company" type="text" className="form-input" value={form.company} onChange={handleChange} placeholder="Your Company" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Service Interested In</label>
                      <select id="service" name="service" className="form-select" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>SEO Services</option>
                        <option>Digital Marketing</option>
                        <option>UI/UX Design</option>
                        <option>Graphic Design</option>
                        <option>Video & Animation</option>
                        <option>eCommerce Development</option>
                        <option>Multiple Services</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="budget">Project Budget Range</label>
                      <select id="budget" name="budget" className="form-select" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget...</option>
                        <option>Under $1,000</option>
                        <option>$1,000 – $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $50,000</option>
                        <option>$50,000+</option>
                        <option>Monthly Retainer</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Tell Us About Your Project *</label>
                    <textarea id="message" name="message" className="form-textarea" required value={form.message} onChange={handleChange} placeholder="Describe your project, goals, and any specific requirements..." />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" id="contact-submit-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                    Submit — Get Free Consultation →
                  </button>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '1rem' }}>
                    <FiLock size={12} /> Your information is 100% secure and will never be shared.
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
