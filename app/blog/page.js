'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiDollarSign, FiTrendingDown, FiSmartphone, FiMapPin, FiSearch, FiLock, FiFileText, FiZap, FiCheckCircle } from 'react-icons/fi';

const categories = ['All', 'Web Design', 'Mobile Apps', 'SEO', 'CRO'];

const posts = [
  {
    title: 'How Much Does a Website Cost in 2026? (Complete Pricing Guide)',
    category: 'Web Design',
    excerpt: 'An honest, transparent breakdown of design, development, and hosting costs for small businesses, eCommerce brands, and custom SaaS platforms.',
    date: 'May 28, 2026',
    readTime: '8 min read',
    icon: FiDollarSign,
    author: 'Rashid M., Technical Director',
    featured: true
  },
  {
    title: '10 Signs Your Website Is Losing You Customers & Conversions',
    category: 'CRO',
    excerpt: 'Are you getting traffic but no calls or checkout sales? We outline the 10 friction points currently draining your revenue pipeline.',
    date: 'May 24, 2026',
    readTime: '6 min read',
    icon: FiTrendingDown,
    author: 'Faisal Majeed, CEO & Co-Founder'
  },
  {
    title: 'React Native vs Flutter: Which Is Right for Your App in 2026?',
    category: 'Mobile Apps',
    excerpt: 'A comprehensive, unbiased comparison of React Native and Flutter. We compare speed, cost-effectiveness, and Apple/Google store compatibility.',
    date: 'May 18, 2026',
    readTime: '10 min read',
    icon: FiSmartphone,
    author: 'Murtaza Mandokhail, Head of Development'
  },
  {
    title: 'Local SEO Guide for Small Businesses: Rank #1 in Your City',
    category: 'SEO',
    excerpt: 'Step-by-step roadmap to dominate Google Maps listings and organic search queries locally. Win local phone calls without spending a dollar on ads.',
    date: 'May 12, 2026',
    readTime: '7 min read',
    icon: FiMapPin,
    author: 'Shahid Hussain, Head of SEO & Marketing'
  },
  {
    title: 'How Long Does SEO Take? (Honest Answer with Real Campaign Data)',
    category: 'SEO',
    excerpt: 'Most agencies promise instant rankings. We analyze real case histories to show exactly when to expect high-intent traffic growth.',
    date: 'May 05, 2026',
    readTime: '5 min read',
    icon: FiSearch,
    author: 'Shahid Hussain, Head of SEO & Marketing'
  },
  {
    title: 'WordPress Security Checklist: 25 Steps to Protect Your Site',
    category: 'Web Design',
    excerpt: 'WordPress powers 43% of the web, making it a target. Secure your customer database and forms with our 25-step technical checklist.',
    date: 'Apr 28, 2026',
    readTime: '9 min read',
    icon: FiLock,
    author: 'Rashid M., Technical Director'
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = e => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(p => p.featured);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Blog Insights</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <FiFileText size={14} /> Digital Knowledge
          </span>
          <h1>Strategy, Technology &amp; <span className="gradient-text">Growth Marketing</span></h1>
          <p>
            Actionable guides and technical strategies written by real designers, developers, and SEO strategists at InterNative Labs.
          </p>
        </div>
      </section>

      {/* Featured post (only visible when search/filter is clean) */}
      {searchQuery === '' && activeCategory === 'All' && featuredPost && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <span className="section-label">Featured Article</span>
            <div className="responsive-grid" style={{
              background: 'var(--bg-gray)',
              border: '1px solid var(--border)',
              borderRadius: 28,
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: '1.2rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(46,134,193,0.1)', padding: '4px 10px', borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FiZap size={12} /> {featuredPost.category}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{featuredPost.date}</span>
                </div>
                <h2 style={{ fontSize: '2rem', color: 'var(--brand)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {featuredPost.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.8rem' }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gradient-brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    IL
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand)' }}>{featuredPost.author}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{featuredPost.readTime}</div>
                  </div>
                </div>
                <Link href="/blog" className="btn btn-primary" id="featured-blog-read">Read Full Article →</Link>
              </div>

              <div style={{ background: 'var(--gradient-brand)', color: '#fff', borderRadius: 20, padding: '4rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-brand)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', marginBottom: '1.5rem', color: '#fff' }}>
                  {(() => {
                    const FeaturedIcon = featuredPost.icon;
                    return <FeaturedIcon size={44} />;
                  })()}
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem' }}>InterNative Labs Guides</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Comprehensive 2026 digital roadmap for business owners</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main filter and list section */}
      <section className="section">
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem', background: 'var(--bg-gray)', padding: '1.5rem 2rem', borderRadius: 20, border: '1px solid var(--border)' }}>
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: 99,
                  border: '1px solid var(--border)',
                  outline: 'none',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* Categories */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 99,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: '1px solid var(--border)',
                    background: activeCategory === cat ? 'var(--brand)' : '#fff',
                    color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid-3 animate-fadeUp">
              {filteredPosts.map(p => {
                const PostIcon = p.icon;
                return (
                  <div key={p.title} className="service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                      <div className="service-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--brand)', marginBottom: 0, width: 44, height: 44 }}>
                        <PostIcon size={20} />
                      </div>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(46,134,193,0.1)', padding: '3px 10px', borderRadius: 99 }}>
                        {p.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', color: 'var(--brand)', marginBottom: '0.8rem', lineHeight: 1.3, flexGrow: 0 }}>
                      {p.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                      {p.excerpt}
                    </p>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.date}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{p.readTime}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h3 style={{ color: 'var(--brand)' }}>No articles found matching your query</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Try refining your search text or switching category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: 'var(--bg-gray)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="newsletter-card">
            <div>
              <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)' }}>
                Weekly Newsletter
              </span>
              <h3 style={{ color: '#fff', fontSize: '2rem', marginTop: '1rem', marginBottom: '1rem' }}>Dominate Search Rankings &amp; Scale Sales</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                Subscribe to receive our weekly technical checklists, Google algorithm updates, and high-converting UX blueprints. No spam, just pure technical strategy.
              </p>
            </div>
            <div>
              {subscribed ? (
                <div style={{ background: 'rgba(39, 174, 96, 0.1)', border: '1px solid var(--success)', padding: '2rem', borderRadius: 16, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <FiCheckCircle size={32} className="text-success" style={{ color: 'var(--success)' }} />
                  <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem' }}>Registration Complete!</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Welcome to the InterNative Labs growth network. Check your inbox next Tuesday!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <input
                    type="email"
                    placeholder="Enter your corporate email address..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: 99,
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '16px 20px' }}>
                    Subscribe to Newsletter →
                  </button>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 4 }}>
                    We protect your privacy. You can unsubscribe in a single click at any time.
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
