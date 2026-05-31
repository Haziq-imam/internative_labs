'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqCategories = ['All', 'Web Development', 'Mobile Apps', 'SEO', 'Pricing & Support'];

const faqs = [
  {
    q: 'How long does it take to design and build a custom website?',
    a: 'Starter websites (landing page, 3-5 subpages) typically take 2 to 4 weeks. Standard corporate sites (10-20 pages with CMS setup) range from 4 to 8 weeks. Custom headless web systems or SaaS applications require 8 to 20 weeks depending on the complexity of backend logic.',
    cat: 'Web Development'
  },
  {
    q: 'Will my website be mobile-responsive and SEO-ready by default?',
    a: 'Absolutely. Every website built by InterNative Labs is constructed mobile-first and optimized for speed (Core Web Vitals loading under 2 seconds). We write clean code, structured headings, unique title/description tags, and embed JSON-LD schema markup on every page layout by default.',
    cat: 'Web Development'
  },
  {
    q: 'Can you redesign or migrate my existing slow website?',
    a: 'Yes. We frequently audit and migrate slow, legacy platforms to modern stacks like Next.js and headless architectures. We perform detailed redirection mappings to preserve 100% of your existing SEO index equity, ensuring your google rankings do not drop.',
    cat: 'Web Development'
  },
  {
    q: 'What is the cost range for custom mobile application development?',
    a: 'Native Swift/Android projects start from $12,000 to $15,000 per platform. However, cross-platform apps built using React Native or Flutter allow you to deploy to both Apple App Store and Google Play from a single codebase, yielding 40% to 60% savings, starting around $18,000.',
    cat: 'Mobile Apps'
  },
  {
    q: 'Do you handle the App Store & Google Play submission and review process?',
    a: 'Yes, we take full responsibility for app storefront listings. We prepare all metadata tags, design matching resolution screenshots, handle privacy configurations, and manage submission review iterations until your app is officially approved and published.',
    cat: 'Mobile Apps'
  },
  {
    q: 'How long before we see traffic increases from our SEO campaign?',
    a: 'Most SEO campaigns show page-1 rank lifts within 3 to 4 months. Significant compounding organic traffic jumps and qualified lead volume typically occur around month 5 to 6. SEO is an authority asset that grows in value, resulting in zero pay-per-click charges.',
    cat: 'SEO'
  },
  {
    q: 'Do you guarantee position #1 organic search rankings?',
    a: 'No ethical, white-hat agency guarantees absolute position #1 ranks, as search engine algorithms change frequently. However, we have a verified 92% success rate in getting our clients onto Page 1 within 6 months. We promise relentless optimization and absolute reporting transparency.',
    cat: 'SEO'
  },
  {
    q: 'Do you offer month-to-month contracts or vague billing retainers?',
    a: 'We believe in absolute transparency. We do not use vague retainers. All project scopes (websites, apps) are quoted at a fixed, flat cost with milestone-based billings. SEO and marketing campaigns are set up on transparent, month-to-month scopes with defined deliverables.',
    cat: 'Pricing & Support'
  },
  {
    q: 'What is included in your web hosting & maintenance package?',
    a: 'For $199/month, we handle managed server hosting, daily automated cloud backups, 24/7 uptime monitoring, security patching, monthly core/plugin updates, and include up to 2 hours of priority content changes and developer support response.',
    cat: 'Pricing & Support'
  }
];

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = activeCat === 'All' || faq.cat === activeCat;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Support</span><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>FAQ</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
            ❓ Got Questions?
          </span>
          <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p>
            Find transparent, direct answers about website development budgets, app store review times, white-hat SEO pipelines, and ongoing maintenance.
          </p>
        </div>
      </section>

      {/* Main Accordion Panel */}
      <section className="section">
        <div className="container" style={{ maxWidth: 850 }}>
          {/* Controls bar */}
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '2rem', alignItems: 'center', marginBottom: '3rem', background: 'var(--bg-gray)', padding: '1.5rem 2rem', borderRadius: 20, border: '1px solid var(--border)' }}>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setOpenIndex(null); }}
              style={{
                width: '100%',
                padding: '12px 20px',
                borderRadius: 99,
                border: '1px solid var(--border)',
                outline: 'none',
                fontSize: '0.88rem',
                fontFamily: 'inherit',
                background: 'rgba(255, 255, 255, 0.04)',
                color: '#fff'
              }}
            />
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {faqCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCat(cat); setOpenIndex(null); }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 99,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: '1px solid var(--border)',
                    background: activeCat === cat ? 'var(--brand)' : 'var(--dark)',
                    color: activeCat === cat ? '#fff' : 'var(--text-secondary)',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="animate-fadeUp">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      background: 'var(--bg-gray)',
                      border: '1px solid var(--border)',
                      borderRadius: 16,
                      overflow: 'hidden',
                      transition: 'var(--transition-fast)',
                      boxShadow: isOpen ? 'var(--shadow-md)' : 'none',
                      borderColor: isOpen ? 'rgba(114, 193, 146, 0.3)' : 'var(--border)'
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: '100%',
                        padding: '1.5rem 2rem',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.5rem',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--brand)'
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{
                        fontSize: '1.2rem',
                        color: 'var(--accent)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }}>
                        ＋
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{
                        padding: '0 2rem 1.8rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid var(--border)',
                        paddingTop: '1rem'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h3 style={{ color: 'var(--brand)' }}>No matches found</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Try clearing your filters or changing search keywords.</p>
            </div>
          )}
        </div>
      </section>

      {/* Support CTA */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div style={{ background: 'var(--gradient-brand)', borderRadius: 24, padding: '4rem', color: '#fff', textAlign: 'center', boxShadow: 'var(--shadow-brand)' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Still Have Unanswered Questions?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 600, margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              Our project managers and strategists are happy to jump on a quick, zero-obligation call to talk about your technical milestones.
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
