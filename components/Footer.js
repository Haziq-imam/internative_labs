import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock, FiLinkedin, FiFacebook, FiYoutube, FiTwitter, FiInstagram } from 'react-icons/fi';

const footerServices = [
  { label: 'Web Development',        href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'SEO Services',           href: '/services/seo' },
  { label: 'PPC & Paid Advertising', href: '/services/ppc-advertising' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { label: 'UI/UX Design',           href: '/services/ui-ux-design' },
  { label: 'Graphic Design',         href: '/services/graphic-design' },
  { label: 'Video & Animation',      href: '/services/video-animation' },
];

const footerCompany = [
  { label: 'About Us',      href: '/about' },
  { label: 'Our Team',      href: '/team' },
  { label: 'Portfolio',     href: '/portfolio' },
  { label: 'Case Studies',  href: '/case-studies' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Careers',       href: '/careers' },
  { label: 'Press & Media', href: '/press' },
  { label: 'Awards',        href: '/awards' },
];

const footerSupport = [
  { label: 'Contact Us',          href: '/contact' },
  { label: 'Free Consultation',   href: '/free-consultation' },
  { label: 'Free Website Audit',  href: '/free-website-audit' },
  { label: 'Pricing',             href: '/pricing' },
  { label: 'FAQ',                 href: '/faq' },
  { label: 'Partnership Program', href: '/partners' },
  { label: 'Privacy Policy',      href: '/privacy-policy' },
  { label: 'Terms & Conditions',  href: '/terms' },
];

const socials = [
  { Icon: FiLinkedin,  href: '#', title: 'LinkedIn' },
  { Icon: FiFacebook,  href: '#', title: 'Facebook' },
  { Icon: FiYoutube,   href: '#', title: 'YouTube' },
  { Icon: FiTwitter,   href: '#', title: 'X / Twitter' },
  { Icon: FiInstagram, href: '#', title: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* CTA Banner */}
        <div className="footer-cta-banner">
          <div>
            <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              Ready to Grow Your Business Online?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              No contracts, no commitments. Just an honest conversation about your goals.
            </p>
          </div>
          <div className="footer-cta-actions">
            <Link href="/free-consultation" className="btn" style={{ background: '#fff', color: 'var(--dark)', fontWeight: 700 }}>
              Get Free Consultation →
            </Link>
            <Link href="/free-website-audit" className="btn btn-secondary">
              Free Website Audit
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo" style={{ marginBottom: '1.5rem' }}>
              <img src="/logo-light.png" alt="InterNative Labs" style={{ height: '36px', width: 'auto', display: 'block' }} />
            </div>
            <p className="footer-desc">
              A full-service digital agency delivering custom web development, mobile apps, SEO, and digital marketing solutions that drive real business results.
            </p>
            <div>
              <div className="footer-contact-item">
                <FiMail size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <a href="mailto:info@internativelabs.com">info@internativelabs.com</a>
              </div>
              <div className="footer-contact-item">
                <FiPhone size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <a href="tel:+18889085040">+1 (888) 908-5040</a>
              </div>
              <div className="footer-contact-item">
                <FiMapPin size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <span>811 Mason Grove Pkwy, Lawrenceville, GA 30043</span>
              </div>
              <div className="footer-contact-item">
                <FiClock size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                <span>Mon–Fri, 9:00 AM – 6:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            {footerServices.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            {footerCompany.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4>Support & Legal</h4>
            {footerSupport.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 InterNative Labs LLC. All rights reserved. Lawrenceville, Georgia, USA.
          </p>
          <div className="footer-socials">
            {socials.map(({ Icon, href, title }) => (
              <a key={title} href={href} className="social-link" title={title} aria-label={title}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
