'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiGlobe, FiShoppingCart, FiSmartphone, FiSearch,
  FiSettings, FiTrendingUp, FiMapPin, FiRadio, FiMessageSquare,
  FiFileText, FiLayout, FiPenTool, FiVideo, FiChevronDown,
  FiZap,
} from 'react-icons/fi';

const services = [
  { label: 'Web Development',        href: '/services/web-development',        icon: FiGlobe },
  { label: 'eCommerce Development',  href: '/services/ecommerce-development',  icon: FiShoppingCart },
  { label: 'Mobile App Development', href: '/services/mobile-app-development', icon: FiSmartphone },
  { label: 'iOS App Development',    href: '/services/ios-app-development',    icon: FiSmartphone },
  { label: 'Android App Development',href: '/services/android-app-development',icon: FiSmartphone },
  { label: 'Cross-Platform Apps',    href: '/services/cross-platform-apps',    icon: FiZap },
  { label: 'SEO Services',           href: '/services/seo',                    icon: FiSearch },
  { label: 'Local SEO',              href: '/services/local-seo',              icon: FiMapPin },
  { label: 'Technical SEO',          href: '/services/technical-seo',          icon: FiSettings },
  { label: 'PPC & Paid Advertising', href: '/services/ppc-advertising',        icon: FiTrendingUp },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageSquare },
  { label: 'Content Marketing',      href: '/services/content-marketing',      icon: FiFileText },
  { label: 'UI/UX Design',           href: '/services/ui-ux-design',           icon: FiLayout },
  { label: 'Graphic Design',         href: '/services/graphic-design',         icon: FiPenTool },
  { label: 'Video & Animation',      href: '/services/video-animation',        icon: FiVideo },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo-light.png" alt="InterNative Labs" style={{ height: '36px', width: 'auto', display: 'block' }} />
          </Link>

          <div className="nav-links">
            <div className="nav-dropdown">
              <button className={`nav-link${pathname?.startsWith('/services') ? ' active' : ''}`} style={{ background: 'none', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Services <FiChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu" style={{ minWidth: '320px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                {services.map(s => {
                  const Icon = s.icon;
                  return (
                    <Link key={s.href} href={s.href} className={`dropdown-item${isActive(s.href) ? ' active' : ''}`}>
                      <span className="dropdown-icon"><Icon size={14} /></span>
                      <span>{s.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href="/portfolio" className={`nav-link${isActive('/portfolio') ? ' active' : ''}`}>Portfolio</Link>
            <Link href="/case-studies" className={`nav-link${isActive('/case-studies') ? ' active' : ''}`}>Case Studies</Link>
            <Link href="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link>
            <Link href="/pricing" className={`nav-link${isActive('/pricing') ? ' active' : ''}`}>Pricing</Link>
            <Link href="/blog" className={`nav-link${isActive('/blog') ? ' active' : ''}`}>Blog</Link>
            <Link href="/free-consultation" className="btn btn-primary btn-sm nav-cta">
              Free Consultation
            </Link>
          </div>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(17,18,21,0.99)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 1.5rem 1.5rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <button
                className="nav-link"
                style={{ background: 'none', color: 'rgba(255,255,255,0.85)', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px' }}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <FiChevronDown size={13} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>
              {servicesOpen && (
                <div style={{ paddingLeft: '1rem' }}>
                  {services.slice(0, 8).map(s => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.href} href={s.href} className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }} onClick={() => setMenuOpen(false)}>
                        <Icon size={13} style={{ color: 'var(--brand)' }} /> {s.label}
                      </Link>
                    );
                  })}
                </div>
              )}
              {[
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/about', label: 'About' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map(l => (
                <Link key={l.href} href={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link href="/free-consultation" className="btn btn-primary" style={{ marginTop: '12px' }} onClick={() => setMenuOpen(false)}>
                Free Consultation →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
